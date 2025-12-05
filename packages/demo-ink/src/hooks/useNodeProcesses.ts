import { useState, useEffect } from 'react';
import { execSync } from 'child_process';
import { NodeProcess } from '../types/dashboard.js';

export const useNodeProcesses = (isPaused: boolean) => {
    const [processes, setProcesses] = useState<NodeProcess[]>([]);

    const getNodeProcesses = (): NodeProcess[] => {
        try {
            // Get all TCP listening ports with node processes
            const lsofOutput = execSync('lsof -iTCP -sTCP:LISTEN -n -P 2>/dev/null', { 
                encoding: 'utf-8',
                timeout: 5000
            });
            
            const lines = lsofOutput.split('\n').slice(1); // Skip header
            const nodeProcesses: NodeProcess[] = [];
            const currentPid = process.pid; // Don't show the dashboard itself
            
            for (const line of lines) {
                if (!line.trim()) continue;
                
                const parts = line.split(/\s+/);
                const command = parts[0];
                const pid = parseInt(parts[1]);
                const name = parts[8]; // Address:Port
                
                // Only process node commands and skip self
                if (command === 'node' && pid !== currentPid) {
                    const portMatch = name.match(/:(\d+)$/);
                    const port = portMatch ? parseInt(portMatch[1]) : null;
                    
                    if (port) {
                        try {
                            // Get more details about this process
                            const psOutput = execSync(
                                `ps -p ${pid} -o pid,comm,args,etime,%cpu,%mem 2>/dev/null`, 
                                { encoding: 'utf-8', timeout: 1000 }
                            );
                            
                            const psLines = psOutput.split('\n');
                            if (psLines.length > 1) {
                                const psLine = psLines[1];
                                
                                // Parse from the end: last 3 fields are ELAPSED, %CPU, %MEM
                                // Strategy: split by whitespace, get last 3 elements
                                const parts = psLine.trim().split(/\s+/);
                                
                                if (parts.length >= 6) {
                                    // Last 3 elements
                                    const memory = parseFloat(parts[parts.length - 1]) || 0;
                                    const cpu = parseFloat(parts[parts.length - 2]) || 0;
                                    const uptime = parts[parts.length - 3] || '0:00';
                                    
                                    // Command is everything after PID and COMM (skip first 2 elements)
                                    // and before the last 3 elements (ELAPSED, CPU, MEM)
                                    const commandParts = parts.slice(2, parts.length - 3);
                                    const fullCommand = commandParts.join(' ');
                                    
                                    // Shorten command for display
                                    let displayCommand = fullCommand;
                                    if (displayCommand.length > 70) {
                                        displayCommand = displayCommand.substring(0, 67) + '...';
                                    }
                                    
                                    nodeProcesses.push({
                                        pid,
                                        port,
                                        command: displayCommand,
                                        uptime,
                                        cpu,
                                        memory
                                    });
                                }
                            }
                        } catch (psError) {
                            // Process might have died between lsof and ps, skip it
                            continue;
                        }
                    }
                }
            }
            
            // Sort by port number
            return nodeProcesses.sort((a, b) => a.port - b.port);
        } catch (error) {
            // lsof might fail due to permissions or not being available
            return [];
        }
    };

    useEffect(() => {
        if (isPaused) return;

        // Initial fetch
        setProcesses(getNodeProcesses());

        // Refresh every 3 seconds
        const interval = setInterval(() => {
            setProcesses(getNodeProcesses());
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const refreshProcesses = () => {
        setProcesses(getNodeProcesses());
    };

    return { processes, refreshProcesses };
};

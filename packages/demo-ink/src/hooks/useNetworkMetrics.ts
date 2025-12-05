import { useState, useEffect } from 'react';
import { execSync } from 'child_process';
import { NetworkMetrics } from '../types/dashboard.js';

export const useNetworkMetrics = (isPaused: boolean) => {
    const [metrics, setMetrics] = useState<NetworkMetrics>({
        connections: 0,
        bytesIn: 0,
        bytesOut: 0,
        packetsIn: 0,
        packetsOut: 0
    });

    const getNetworkMetrics = (): NetworkMetrics => {
        try {
            // Get network connections count
            const netstatOutput = execSync('netstat -an 2>/dev/null | grep ESTABLISHED | wc -l', {
                encoding: 'utf-8',
                timeout: 2000
            });
            const connections = parseInt(netstatOutput.trim()) || 0;

            // Get network interface statistics (macOS)
            let bytesIn = 0;
            let bytesOut = 0;
            let packetsIn = 0;
            let packetsOut = 0;

            try {
                const netstatInterface = execSync('netstat -ibn 2>/dev/null | grep -E "^en0"', {
                    encoding: 'utf-8',
                    timeout: 2000
                });
                
                const lines = netstatInterface.split('\n').filter(line => line.trim());
                if (lines.length > 0) {
                    const parts = lines[0].split(/\s+/);
                    // netstat -ibn format: Name Mtu Network Address Ipkts Ierrs Ibytes Opkts Oerrs Obytes
                    if (parts.length >= 10) {
                        packetsIn = parseInt(parts[4]) || 0;
                        bytesIn = parseInt(parts[6]) || 0;
                        packetsOut = parseInt(parts[7]) || 0;
                        bytesOut = parseInt(parts[9]) || 0;
                    }
                }
            } catch {
                // If interface stats fail, use defaults
            }

            return {
                connections,
                bytesIn,
                bytesOut,
                packetsIn,
                packetsOut
            };
        } catch (error) {
            return {
                connections: 0,
                bytesIn: 0,
                bytesOut: 0,
                packetsIn: 0,
                packetsOut: 0
            };
        }
    };

    useEffect(() => {
        if (isPaused) return;

        // Initial fetch
        setMetrics(getNetworkMetrics());

        // Update every 2 seconds
        const interval = setInterval(() => {
            setMetrics(getNetworkMetrics());
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return metrics;
};

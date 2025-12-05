import { useState, useEffect } from 'react';
import { Box, useInput, useApp } from 'ink';
import { Header } from './components/Header.js';
import { MetricsPanel } from './components/MetricsPanel.js';
import { NetworkPanel } from './components/NetworkPanel.js';
import { ProcessManager } from './components/ProcessManager.js';
import { StatsPanel } from './components/StatsPanel.js';
import { Footer } from './components/Footer.js';
import { useSystemMetrics } from './hooks/useSystemMetrics.js';
import { useNetworkMetrics } from './hooks/useNetworkMetrics.js';
import { useNodeProcesses } from './hooks/useNodeProcesses.js';
import { useTerminalSize } from './hooks/useTerminalSize.js';
import { calculateMaxVisibleProcesses } from './lib/layout.js';
import { Stats } from './types/dashboard.js';

const App = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [selectedPanel, setSelectedPanel] = useState(0);
    const [selectedProcessIndex, setSelectedProcessIndex] = useState(0);
    const [statusMessage, setStatusMessage] = useState<{ text: string; type: 'success' | 'error' } | undefined>();
    const [stats, setStats] = useState<Stats>({
        processes: 0,
        requests: 0,
        completed: 0,
        errorRate: 0
    });

    const { exit } = useApp();
    const { rows: terminalHeight, columns: terminalWidth } = useTerminalSize();
    const metrics = useSystemMetrics(isPaused);
    const networkMetrics = useNetworkMetrics(isPaused);
    const { processes, refreshProcesses } = useNodeProcesses(isPaused);
    
    // Calculate available height for process list using layout utilities
    const maxVisibleProcesses = calculateMaxVisibleProcesses(terminalHeight);

    // Update stats based on process data
    useEffect(() => {
        const totalProcesses = processes.length;
        const demoProcesses = processes.filter(p => p.port >= 54000 && p.port <= 55000).length;
        const totalPorts = processes.length;
        const avgCpu = processes.length > 0 
            ? processes.reduce((sum, p) => sum + p.cpu, 0) / processes.length 
            : 0;

        setStats({
            processes: totalProcesses,
            requests: demoProcesses,
            completed: totalPorts,
            errorRate: avgCpu
        });
    }, [processes]);

    // Clear status message after 3 seconds
    useEffect(() => {
        if (statusMessage) {
            const timeout = setTimeout(() => {
                setStatusMessage(undefined);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [statusMessage]);

    // Reset selected index if out of bounds
    useEffect(() => {
        if (selectedProcessIndex >= processes.length && processes.length > 0) {
            setSelectedProcessIndex(processes.length - 1);
        } else if (processes.length === 0) {
            setSelectedProcessIndex(0);
        }
    }, [processes.length, selectedProcessIndex]);

    const killProcess = (pid: number) => {
        try {
            // Try graceful termination first
            process.kill(pid, 'SIGTERM');
            setStatusMessage({ text: `Process ${pid} terminated`, type: 'success' });
            // Refresh process list after a short delay
            setTimeout(() => refreshProcesses(), 500);
        } catch (error) {
            // If SIGTERM fails, try force kill
            try {
                process.kill(pid, 'SIGKILL');
                setStatusMessage({ text: `Process ${pid} force killed`, type: 'success' });
                setTimeout(() => refreshProcesses(), 500);
            } catch (killError) {
                setStatusMessage({ 
                    text: `Failed to kill ${pid}: ${error instanceof Error ? error.message : 'Unknown error'}`, 
                    type: 'error' 
                });
            }
        }
    };

    // Handle keyboard input
    useInput((input, key) => {
        if (input === 'q' || input === 'Q') {
            exit();
        }

        if (input === ' ') {
            setIsPaused(prev => !prev);
        }

        if (input === 'r' || input === 'R') {
            setSelectedProcessIndex(0);
            setStatusMessage(undefined);
        }

        if (input === '1') setSelectedPanel(0);
        if (input === '2') setSelectedPanel(1);
        if (input === '3') setSelectedPanel(2);

        // Process navigation (only when process manager is focused)
        if (selectedPanel === 1 && processes.length > 0) {
            if (key.upArrow) {
                setSelectedProcessIndex(prev => Math.max(0, prev - 1));
            }
            if (key.downArrow) {
                setSelectedProcessIndex(prev => Math.min(processes.length - 1, prev + 1));
            }
            if (key.return || input === 'k' || input === 'K') {
                const selectedProcess = processes[selectedProcessIndex];
                if (selectedProcess) {
                    killProcess(selectedProcess.pid);
                }
            }
        }
    });

    return (
        <Box flexDirection="column" width={terminalWidth} height={terminalHeight}>
            <Header isPaused={isPaused} />
            
            {/* Top Row: System + Network Metrics */}
            <Box>
                <MetricsPanel 
                    metrics={metrics} 
                    isFocused={selectedPanel === 0}
                />
                <NetworkPanel metrics={networkMetrics} />
            </Box>

            {/* Middle Row: Process Manager + Stats */}
            <Box flexGrow={1}>
                <ProcessManager 
                    processes={processes}
                    isFocused={selectedPanel === 1}
                    selectedIndex={selectedProcessIndex}
                    statusMessage={statusMessage}
                    maxVisible={maxVisibleProcesses}
                />
                <StatsPanel 
                    stats={stats} 
                    isFocused={selectedPanel === 2}
                />
            </Box>

            <Footer />
        </Box>
    );
};

export default App;

import { Box, Text } from 'ink';
import { NodeProcess } from '../types/dashboard.js';

interface ProcessManagerProps {
    processes: NodeProcess[];
    isFocused: boolean;
    selectedIndex: number;
    statusMessage?: { text: string; type: 'success' | 'error' };
    maxVisible: number;
}

export const ProcessManager = ({
    processes,
    isFocused,
    selectedIndex,
    statusMessage,
    maxVisible
}: ProcessManagerProps) => {

    const formatCpu = (cpu: number): string => {
        return cpu.toFixed(1).padStart(3) + '%';
    };

    const formatMemory = (mem: number): string => {
        return mem.toFixed(1).padStart(3) + '%';
    };

    const formatPort = (port: number): string => {
        return port.toString().padStart(5);
    };

    const formatPid = (pid: number): string => {
        return pid.toString().padStart(5);
    };

    // Ensure maxVisible is always valid (minimum 1)
    const safeMaxVisible = Math.max(1, maxVisible);

    // Ensure selectedIndex is within bounds
    const safeSelectedIndex = Math.min(selectedIndex, Math.max(0, processes.length - 1));

    // Calculate visible window - center selection when possible
    const visibleCount = Math.min(safeMaxVisible, processes.length);
    let startIndex = 0;

    if (processes.length > visibleCount) {
        // Try to center the selection in the viewport
        const halfVisible = Math.floor(visibleCount / 2);
        startIndex = Math.max(0, Math.min(safeSelectedIndex - halfVisible, processes.length - visibleCount));
    }

    const visibleProcesses = processes.slice(startIndex, startIndex + visibleCount);
    const hasMore = processes.length > visibleCount;
    const hasAbove = startIndex > 0;
    const hasBelow = (startIndex + visibleCount) < processes.length;

    return (
        <Box
            flexDirection="column"
            borderStyle={isFocused ? "double" : "round"}
            borderColor={isFocused ? "cyan" : "gray"}
            padding={1}
            width="100%"
        >
            <Box>
                <Text bold color="cyan">🔧 Processes</Text>
                {processes.length > 0 && (
                    <Text dimColor> ({processes.length})</Text>
                )}
                {hasMore && (
                    <Text dimColor> [{startIndex + 1}-{startIndex + visibleCount}]</Text>
                )}
            </Box>

            {/* Scroll indicator - above */}
            {hasAbove && (
                <Box justifyContent="center">
                    <Text dimColor>↑ {startIndex} more above</Text>
                </Box>
            )}

            {/* Table Header */}
            <Box>
                <Text bold dimColor>
                    PORT | PID   | CPU | MEM | COMMAND
                </Text>
            </Box>

            {/* Process List - Show visible window */}
            <Box flexDirection="column">
                {processes.length === 0 ? (
                    <Text dimColor>No processes...</Text>
                ) : (
                    visibleProcesses.map((proc, displayIdx) => {
                        const actualIdx = startIndex + displayIdx;
                        const isSelected = actualIdx === safeSelectedIndex && isFocused;
                        return (
                            <Box key={proc.pid} width={'100%'}>
                                <Text
                                    backgroundColor={isSelected ? 'cyan' : undefined}
                                    color={isSelected ? 'black' : undefined}
                                >
                                    {isSelected ? '▶' : ' '}
                                    {formatPort(proc.port)} │
                                    {formatPid(proc.pid)} │
                                    {formatCpu(proc.cpu)} │
                                    {formatMemory(proc.memory)} │
                                    {proc.command}
                                </Text>
                            </Box>
                        );
                    })
                )}
            </Box>

            {/* Scroll indicator - below */}
            {hasBelow && (
                <Box justifyContent="center">
                    <Text dimColor>↓ {processes.length - startIndex - visibleCount} more below</Text>
                </Box>
            )}

            {/* Status Message */}
            {statusMessage && (
                <Box>
                    <Text
                        color={statusMessage.type === 'success' ? 'green' : 'red'}
                    >
                        {statusMessage.type === 'success' ? '✓' : '✗'} {statusMessage.text}
                    </Text>
                </Box>
            )}
        </Box>
    );
};

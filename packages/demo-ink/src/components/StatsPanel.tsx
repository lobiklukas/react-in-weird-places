import { Box, Text } from 'ink';
import { Stats } from '../types/dashboard.js';

interface StatsPanelProps {
    stats: Stats;
    isFocused: boolean;
}

export const StatsPanel = ({ stats, isFocused }: StatsPanelProps) => {
    const getCpuColor = (cpu: number) => {
        if (cpu >= 50) return 'red';
        if (cpu >= 20) return 'yellow';
        return 'green';
    };

    return (
        <Box 
            flexDirection="column" 
            borderStyle={isFocused ? "double" : "round"}
            borderColor={isFocused ? "cyan" : "gray"}
            padding={1}
            width="30%"
        >
            <Box>
                <Text bold color="cyan">📊 Stats</Text>
            </Box>
            
            <Box flexDirection="column">
                <Box>
                    <Text dimColor>Node: </Text>
                    <Text color="blue">{stats.processes}</Text>
                </Box>
                
                <Box>
                    <Text dimColor>Demo: </Text>
                    <Text color="cyan">{stats.requests}</Text>
                </Box>
                
                <Box>
                    <Text dimColor>Ports: </Text>
                    <Text color="green">{stats.completed}</Text>
                </Box>
                
                <Box>
                    <Text dimColor>CPU: </Text>
                    <Text color={getCpuColor(stats.errorRate)}>
                        {stats.errorRate.toFixed(1)}%
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

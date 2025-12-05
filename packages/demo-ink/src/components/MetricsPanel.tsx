import { Box, Text } from 'ink';
import { SystemMetrics } from '../types/dashboard.js';
import { ProgressBar } from './ProgressBar.js';

interface MetricsPanelProps {
    metrics: SystemMetrics;
    isFocused: boolean;
}

export const MetricsPanel = ({ metrics, isFocused }: MetricsPanelProps) => {
    const formatUptime = (seconds: number) => {
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        
        if (days > 0) {
            return `${days}d ${hours}h`;
        }
        if (hours > 0) {
            return `${hours}h ${mins}m`;
        }
        return `${mins}m`;
    };

    return (
        <Box 
            flexDirection="column" 
            borderStyle={isFocused ? "double" : "round"}
            borderColor={isFocused ? "cyan" : "gray"}
            padding={1}
            width="50%"
        >
            <Box marginBottom={1}>
                <Text bold color="cyan">⚡ System</Text>
            </Box>
            
            <Box flexDirection="column">
                <ProgressBar 
                    label="CPU" 
                    percentage={metrics.cpu} 
                    width={25}
                />
                
                <ProgressBar 
                    label="MEM" 
                    percentage={metrics.memory} 
                    width={25}
                />
                
                <ProgressBar 
                    label="DSK" 
                    percentage={metrics.disk} 
                    width={25}
                />
                
                <Box>
                    <Text dimColor>Up: </Text>
                    <Text color="green">{formatUptime(metrics.uptime)}</Text>
                </Box>
            </Box>
        </Box>
    );
};

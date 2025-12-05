import { Box, Text } from 'ink';
import { NetworkMetrics } from '../types/dashboard.js';

interface NetworkPanelProps {
    metrics: NetworkMetrics;
}

export const NetworkPanel = ({ metrics }: NetworkPanelProps) => {
    const formatBytes = (bytes: number): string => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    };

    const formatNumber = (num: number): string => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    return (
        <Box 
            flexDirection="column" 
            borderStyle="round"
            borderColor="gray"
            padding={1}
            width="50%"
        >
            <Box marginBottom={1}>
                <Text bold color="cyan">🌐 Network</Text>
            </Box>
            
            <Box flexDirection="column">
                <Box>
                    <Text dimColor>Connections: </Text>
                    <Text color="cyan">{metrics.connections}</Text>
                </Box>
                
                <Box>
                    <Text dimColor>In: </Text>
                    <Text color="green">{formatBytes(metrics.bytesIn)} ({formatNumber(metrics.packetsIn)} pkts)</Text>
                </Box>
                
                <Box>
                    <Text dimColor>Out: </Text>
                    <Text color="yellow">{formatBytes(metrics.bytesOut)} ({formatNumber(metrics.packetsOut)} pkts)</Text>
                </Box>
            </Box>
        </Box>
    );
};

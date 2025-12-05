import { Box, Text } from 'ink';
import { Activity } from '../types/dashboard.js';

interface ActivityFeedProps {
    activities: Activity[];
    isFocused: boolean;
}

export const ActivityFeed = ({ activities, isFocused }: ActivityFeedProps) => {
    const getIcon = (type: Activity['type']) => {
        switch (type) {
            case 'success': return '✓';
            case 'error': return '✗';
            case 'warning': return '⚠';
            case 'info': return 'ℹ';
        }
    };

    const getColor = (type: Activity['type']) => {
        switch (type) {
            case 'success': return 'green';
            case 'error': return 'red';
            case 'warning': return 'yellow';
            case 'info': return 'blue';
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    // Show last 10 activities
    const displayActivities = activities.slice(-10);

    return (
        <Box 
            flexDirection="column" 
            borderStyle={isFocused ? "double" : "round"}
            borderColor={isFocused ? "cyan" : "gray"}
            padding={1}
            width="60%"
        >
            <Box marginBottom={1}>
                <Text bold color="cyan">📋 Activity Feed</Text>
            </Box>
            
            <Box flexDirection="column" gap={0}>
                {displayActivities.length === 0 ? (
                    <Text dimColor>No activities yet...</Text>
                ) : (
                    displayActivities.map(activity => (
                        <Box key={activity.id}>
                            <Text dimColor>[{formatTime(activity.timestamp)}]</Text>
                            <Text color={getColor(activity.type)}> {getIcon(activity.type)} </Text>
                            <Text>{activity.message}</Text>
                        </Box>
                    ))
                )}
            </Box>
        </Box>
    );
};

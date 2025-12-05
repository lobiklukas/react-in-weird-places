import { Box, Text } from 'ink';
import { useState, useEffect } from 'react';

interface HeaderProps {
    isPaused: boolean;
}

export const Header = ({ isPaused }: HeaderProps) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        if (isPaused) return;
        
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, [isPaused]);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    return (
        <Box 
            borderStyle="bold" 
            borderColor="cyan" 
            padding={0}
            paddingX={1}
            justifyContent="space-between"
        >
            <Text bold color="cyan">📊 NODE PROCESS MANAGER</Text>
            <Text dimColor>⏰ {formatTime(time)}</Text>
            {isPaused ? (
                <Text color="yellow">⏸ PAUSED</Text>
            ) : (
                <Text color="green">● LIVE</Text>
            )}
        </Box>
    );
};

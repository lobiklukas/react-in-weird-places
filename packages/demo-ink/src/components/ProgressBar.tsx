import { Box, Text } from 'ink';

interface ProgressBarProps {
    label: string;
    percentage: number;
    width?: number;
    showPercentage?: boolean;
}

export const ProgressBar = ({ 
    label, 
    percentage, 
    width = 30, 
    showPercentage = true 
}: ProgressBarProps) => {
    const filledWidth = Math.round((percentage / 100) * width);
    const emptyWidth = width - filledWidth;
    
    const filled = '█'.repeat(filledWidth);
    const empty = '░'.repeat(emptyWidth);
    
    // Color based on percentage
    const getColor = () => {
        if (percentage >= 90) return 'red';
        if (percentage >= 70) return 'yellow';
        return 'green';
    };

    return (
        <Box flexDirection="column">
            <Box>
                <Text bold>{label}</Text>
            </Box>
            <Box>
                <Text color={getColor()}>
                    {filled}
                </Text>
                <Text dimColor>
                    {empty}
                </Text>
                {showPercentage && (
                    <Text color={getColor()} bold> {percentage.toFixed(1)}%</Text>
                )}
            </Box>
        </Box>
    );
};

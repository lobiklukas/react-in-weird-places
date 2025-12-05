import { Box, Text } from 'ink';

export const Footer = () => {
    return (
        <Box 
            borderStyle="round" 
            borderColor="gray" 
            paddingX={1}
        >
            <Text dimColor>
                <Text bold color="cyan">[SPC]</Text> Pause | 
                <Text bold color="cyan"> [↑↓]</Text> Select | 
                <Text bold color="cyan"> [K]</Text> Kill | 
                <Text bold color="cyan"> [1-3]</Text> Focus | 
                <Text bold color="cyan"> [Q]</Text> Quit
            </Text>
        </Box>
    );
};

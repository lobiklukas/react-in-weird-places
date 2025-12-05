import React, { useState, useEffect } from 'react';
import { Box, Text, Newline, useInput, useApp } from 'ink';

const App = () => {
    const [counter, setCounter] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const { exit } = useApp();

    const options = [
        { label: 'About Ink', value: 'about' },
        { label: 'Counter Demo', value: 'counter' },
        { label: 'Technical Details', value: 'technical' },
        { label: 'Exit', value: 'exit' },
    ];

    useInput((input, key) => {
        if (key.upArrow) {
            setSelectedOption((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        }

        if (key.downArrow) {
            setSelectedOption((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        }

        if (key.return) {
            const selected = options[selectedOption].value;
            if (selected === 'exit') {
                exit();
            } else if (selected === 'counter') {
                setCounter((prev) => prev + 1);
            }
        }

        if (input === 'q') {
            exit();
        }
    });

    useEffect(() => {
        const timer = setInterval(() => {
            // Auto-increment counter every second when counter option is selected
            if (options[selectedOption].value === 'counter') {
                setCounter((prev) => prev + 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [selectedOption]);

    return (
        <Box flexDirection="column" padding={1}>
            <Box borderStyle="round" borderColor="cyan" padding={1} marginBottom={1}>
                <Text bold color="cyan">
                    🖥️ React Ink Demo - CLI Interface with React
                </Text>
            </Box>

            <Box flexDirection="column" marginBottom={1}>
                <Text bold underline>
                    Main Menu:
                </Text>
                <Newline />
                {options.map((option, index) => (
                    <Box key={option.value}>
                        <Text color={index === selectedOption ? 'green' : 'white'}>
                            {index === selectedOption ? '▶ ' : '  '}
                            {option.label}
                        </Text>
                    </Box>
                ))}
            </Box>

            <Box borderStyle="round" borderColor="yellow" padding={1} flexDirection="column" marginBottom={1}>
                {options[selectedOption].value === 'about' && (
                    <Box flexDirection="column">
                        <Text bold color="yellow">
                            About Ink
                        </Text>
                        <Newline />
                        <Text>Ink is a React custom reconciler for building CLI applications.</Text>
                        <Text>Instead of rendering to the DOM, it renders to the terminal using</Text>
                        <Text>ANSI escape codes and terminal control sequences.</Text>
                        <Newline />
                        <Text dimColor>📦 Components: &lt;Box&gt;, &lt;Text&gt;, &lt;Newline&gt;</Text>
                        <Text dimColor>🎯 Hooks: useInput, useApp, useStdout, useStdin</Text>
                        <Text dimColor>🎨 Styles: Flexbox layouts, colors, borders</Text>
                    </Box>
                )}

                {options[selectedOption].value === 'counter' && (
                    <Box flexDirection="column">
                        <Text bold color="green">
                            Counter Demo (Auto-incrementing)
                        </Text>
                        <Newline />
                        <Box>
                            <Text>Current count: </Text>
                            <Text bold color="magenta">
                                {counter}
                            </Text>
                        </Box>
                        <Newline />
                        <Text dimColor>Press Enter to increment manually</Text>
                        <Text dimColor>Counter auto-increments every second while selected</Text>
                    </Box>
                )}

                {options[selectedOption].value === 'technical' && (
                    <Box flexDirection="column">
                        <Text bold color="blue">
                            Technical Details
                        </Text>
                        <Newline />
                        <Text bold>Custom Reconciler Implementation:</Text>
                        <Text>• Ink implements react-reconciler to target the terminal</Text>
                        <Text>• React elements map to terminal primitives (text, boxes)</Text>
                        <Text>• Uses Yoga for flexbox layout calculations</Text>
                        <Text>• Renders to stdout using ANSI escape codes</Text>
                        <Newline />
                        <Text bold>Reconciliation Process:</Text>
                        <Text>1. React tree → Ink reconciler</Text>
                        <Text>2. Ink reconciler → Yoga layout engine</Text>
                        <Text>3. Yoga → Calculate positions/sizes</Text>
                        <Text>4. Render → Terminal output with ANSI codes</Text>
                        <Newline />
                        <Text bold>Benefits:</Text>
                        <Text>✓ Declarative CLI interfaces</Text>
                        <Text>✓ React component reusability</Text>
                        <Text>✓ Stateful terminal UIs</Text>
                        <Text>✓ Hooks and lifecycle methods</Text>
                    </Box>
                )}

                {options[selectedOption].value === 'exit' && (
                    <Box>
                        <Text color="red">Press Enter to exit</Text>
                    </Box>
                )}
            </Box>

            <Box borderStyle="round" borderColor="gray" padding={1}>
                <Text dimColor>Controls: ↑/↓ to navigate | Enter to select | Q to quit</Text>
            </Box>

            <Box marginTop={1}>
                <Text dimColor italic>
                    This entire interface is built with React components!
                </Text>
            </Box>
        </Box>
    );
};

export default App;

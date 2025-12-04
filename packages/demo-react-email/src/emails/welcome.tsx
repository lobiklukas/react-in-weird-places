import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Button,
    Column,
    Row,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
    username?: string;
}

export const WelcomeEmail = ({ username = 'Developer' }: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Welcome to React in Weird Places!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={box}>
                    <Heading style={h1}>👋 Welcome {username}!</Heading>
                    <Text style={paragraph}>
                        This email was created using React components! React Email uses React as a templating engine to
                        transform JSX into HTML email code that works across all email clients.
                    </Text>
                    <Hr style={hr} />

                    <Heading as="h2" style={h2}>
                        🎨 How It Works
                    </Heading>
                    <Text style={paragraph}>
                        React Email provides a set of components that compile to email-compatible HTML:
                    </Text>
                    <Section style={codeBox}>
                        <Text style={code}>
                            {`<Button href="https://example.com">
  Click Me
</Button>`}
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    <Heading as="h2" style={h2}>
                        ✨ Key Features
                    </Heading>
                    <Row>
                        <Column>
                            <Text style={bulletPoint}>✓ Type-safe components</Text>
                            <Text style={bulletPoint}>✓ Preview in real-time</Text>
                            <Text style={bulletPoint}>✓ Export to HTML</Text>
                        </Column>
                        <Column>
                            <Text style={bulletPoint}>✓ Cross-client compatible</Text>
                            <Text style={bulletPoint}>✓ Reusable templates</Text>
                            <Text style={bulletPoint}>✓ Zero inline CSS needed</Text>
                        </Column>
                    </Row>

                    <Hr style={hr} />

                    <Heading as="h2" style={h2}>
                        🚀 Use Cases
                    </Heading>
                    <Text style={paragraph}>
                        Perfect for transactional emails, newsletters, notifications, and more!
                    </Text>

                    <Section style={buttonContainer}>
                        <Button style={button} href="https://react.email">
                            Learn More About React Email
                        </Button>
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        This demo email is part of the "React in Weird Places" presentation. It showcases how React can
                        be used as a templating engine for HTML emails, without needing a custom reconciler.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default WelcomeEmail;

// Styles
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};

const box = {
    padding: '0 48px',
};

const h1 = {
    color: '#1a1a1a',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '40px 0 20px',
    padding: '0',
};

const h2 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '30px 0 15px',
};

const paragraph = {
    color: '#525252',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left' as const,
    marginBottom: '16px',
};

const bulletPoint = {
    color: '#525252',
    fontSize: '14px',
    lineHeight: '24px',
    marginBottom: '8px',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const codeBox = {
    backgroundColor: '#f4f4f4',
    borderRadius: '4px',
    padding: '16px',
    marginBottom: '16px',
};

const code = {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#333',
    margin: '0',
};

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '32px 0',
};

const button = {
    backgroundColor: '#007bff',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '12px 24px',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '32px',
};

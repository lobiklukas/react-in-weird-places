import {
    Body,
    CodeBlock,
    Container,
    darcula,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

export const TechnicalEmail = () => (
    <Tailwind>
        <Html>
            <Head />
            <Preview>Why React Email Doesn't Use a Reconciler</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={box}>
                        <Heading style={h1}>🔧 Technical Deep Dive</Heading>

                        <Text style={paragraph}>
                            React Email doesn't use a custom React reconciler at all. It simply uses React as a
                            templating engine via ReactDOMServer to generate static HTML optimized for email clients. No
                            reconciler needed because there are no updates or live UI trees.
                        </Text>

                        <Heading as="h2" style={h2}>
                            The Challenge
                        </Heading>
                        <Text style={paragraph}>
                            Email clients are notoriously inconsistent. Modern CSS and JavaScript don't work. We need to
                            compile to a specific subset of HTML that all clients support.
                        </Text>

                        <CodeBlock
                            code={`// ❌ This won't work in emails
<div className="flex justify-center">
  <button onClick={handleClick}>
    Click me
  </button>
</div>

// ✅ This will
<table role="presentation">
  <tr>
    <td align="center">
      <a href="...">Click me</a>
    </td>
  </tr>
</table>`}
                            language="html"
                            theme={darcula}
                        />

                        <Hr style={hr} />

                        <Heading as="h2" style={h2}>
                            React Email's Approach
                        </Heading>
                        <Text style={paragraph}>
                            1. <strong>Components</strong>: Provide email-safe primitives
                        </Text>
                        <Text style={paragraph}>
                            2. <strong>Rendering</strong>: Use React's render to generate HTML string
                        </Text>
                        <Text style={paragraph}>
                            3. <strong>Compilation</strong>: Transform modern patterns to email-compatible code
                        </Text>
                        <Text style={paragraph}>
                            4. <strong>Optimization</strong>: Inline styles, use tables for layout
                        </Text>

                        <Hr style={hr} />

                        <Section style={highlightBox}>
                            <Text style={highlightText}>
                                💡 <strong>Key Insight:</strong> React Email doesn't need a custom reconciler because
                                it's not managing updates or a live UI tree. It's using React as a templating engine to
                                generate static, email-compatible HTML.
                            </Text>
                        </Section>

                        <Hr style={hr} />

                        <Heading as="h2" style={h2}>
                            When You DO Need a Custom Reconciler
                        </Heading>
                        <Text style={paragraph}>You need a custom reconciler when:</Text>
                        <Text style={bulletPoint}>• Targeting a non-DOM environment (Canvas, PDF, CLI)</Text>
                        <Text style={bulletPoint}>• Managing updates to a live object tree</Text>
                        <Text style={bulletPoint}>• Implementing custom commit/update logic</Text>
                        <Text style={bulletPoint}>• Building interactive, stateful UIs</Text>

                        <Text style={paragraph}>Examples: React Native, React Three Fiber, Ink, React PDF</Text>

                        <Hr style={hr} />

                        <Text style={footer}>Part of the "React in Weird Places" demo collection</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    </Tailwind>
);

export default TechnicalEmail;

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
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '40px 0 20px',
};

const h2 = {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '30px 0 15px',
};

const paragraph = {
    color: '#525252',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '12px',
};

const bulletPoint = {
    color: '#525252',
    fontSize: '15px',
    lineHeight: '24px',
    marginBottom: '8px',
    paddingLeft: '20px',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const codeBox = {
    backgroundColor: '#1a1a1a',
    borderRadius: '4px',
    padding: '16px',
    marginBottom: '16px',
};

const highlightBox = {
    backgroundColor: '#fff3cd',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    padding: '16px',
    marginBottom: '16px',
};

const highlightText = {
    color: '#856404',
    fontSize: '15px',
    lineHeight: '22px',
    margin: '0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    marginTop: '32px',
};

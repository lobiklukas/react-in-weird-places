import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 30,
    },
    section: {
        margin: 10,
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 8,
        color: '#333',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        lineHeight: 1.5,
    },
    code: {
        fontFamily: 'Courier',
        fontSize: 10,
        backgroundColor: '#f4f4f4',
        padding: 10,
        marginVertical: 5,
    },
    header: {
        fontSize: 14,
        marginBottom: 20,
        color: '#666',
        borderBottom: '1pt solid #333',
        paddingBottom: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        textAlign: 'center',
        fontSize: 10,
        color: '#666',
    },
});

// PDF Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>React in Weird Places - Demo PDF</Text>
                <Text style={styles.title}>React PDF Demo</Text>
                <Text style={styles.text}>
                    This PDF was generated using React components! @react-pdf/renderer uses a custom React reconciler to
                    transform JSX into PDF primitives.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>How it works:</Text>
                <Text style={styles.text}>1. React components describe the document structure</Text>
                <Text style={styles.text}>2. Custom reconciler translates to PDF operations</Text>
                <Text style={styles.text}>3. Output: Native PDF without HTML/CSS conversion</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Example Component:</Text>
                <Text style={styles.code}>
                    {`<Document>
  <Page>
    <Text>Hello PDF!</Text>
  </Page>
</Document>`}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Benefits:</Text>
                <Text style={styles.text}>• Type-safe PDF generation with TypeScript</Text>
                <Text style={styles.text}>• Reusable React components for documents</Text>
                <Text style={styles.text}>• Consistent rendering across platforms</Text>
                <Text style={styles.text}>• No browser dependencies</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Use Cases:</Text>
                <Text style={styles.text}>✓ Invoices and receipts</Text>
                <Text style={styles.text}>✓ Reports and certificates</Text>
                <Text style={styles.text}>✓ Dynamic document generation</Text>
                <Text style={styles.text}>✓ Print-ready layouts</Text>
            </View>

            <Text style={styles.footer}>Generated with @react-pdf/renderer | Page 1</Text>
        </Page>

        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.header}>React in Weird Places - Demo PDF</Text>
                <Text style={styles.title}>Styling in React PDF</Text>
                <Text style={styles.text}>React PDF uses a subset of CSS-like styles via JavaScript objects.</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>Supported Features:</Text>
                <Text style={styles.text}>• Flexbox layout</Text>
                <Text style={styles.text}>• Typography (size, weight, family)</Text>
                <Text style={styles.text}>• Colors and backgrounds</Text>
                <Text style={styles.text}>• Borders and spacing</Text>
                <Text style={styles.text}>• Absolute positioning</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>StyleSheet Example:</Text>
                <Text style={styles.code}>
                    {`const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});`}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.subtitle}>React Reconciler Magic:</Text>
                <Text style={styles.text}>
                    Under the hood, @react-pdf/renderer implements a custom React reconciler that:
                </Text>
                <Text style={styles.text}>• Maps React elements to PDF primitives (PDFKit)</Text>
                <Text style={styles.text}>• Handles layout calculations via Yoga</Text>
                <Text style={styles.text}>• Manages the commit phase to render final PDF</Text>
            </View>

            <Text style={styles.footer}>Generated with @react-pdf/renderer | Page 2</Text>
        </Page>
    </Document>
);

// App component with PDFViewer
function App() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <PDFViewer style={{ width: '100%', height: '100%' }}>
                <MyDocument />
            </PDFViewer>
        </div>
    );
}

export default App;

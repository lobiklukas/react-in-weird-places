# Live Demo Examples

This document contains runnable code examples for each React renderer discussed in the presentation.

## 1. Terminal UI with Ink

### Simple Counter Example

```bash
# Create new Ink app
mkdir ink-demo && cd ink-demo
npm init -y
npm install ink react
```

Create `counter.js`:

```jsx
#!/usr/bin/env node
import React, {useState, useEffect} from 'react';
import {render, Text, Box} from 'ink';

const Counter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter(previousCounter => previousCounter + 1);
		}, 100);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<Box flexDirection="column" padding={1} borderStyle="round" borderColor="cyan">
			<Text color="green">
				Counter: {counter}
			</Text>
			<Text dimColor>
				 Press Ctrl+C to exit
			</Text>
		</Box>
	);
};

render(<Counter />);
```

Run it:
```bash
node counter.js
```

### Interactive Menu Example

```jsx
#!/usr/bin/env node
import React, {useState} from 'react';
import {render, Text, Box, useInput} from 'ink';

const Menu = () => {
	const [selected, setSelected] = useState(0);
	const items = ['Terminal UI', 'Videos', '3D Graphics', 'TV Apps', 'Desktop'];

	useInput((input, key) => {
		if (key.upArrow) {
			setSelected(s => Math.max(0, s - 1));
		}
		if (key.downArrow) {
			setSelected(s => Math.min(items.length - 1, s + 1));
		}
		if (key.return) {
			console.log(`\nYou selected: ${items[selected]}`);
			process.exit(0);
		}
	});

	return (
		<Box flexDirection="column" padding={1}>
			<Text bold color="cyan">
				🚀 React in Weird Places
			</Text>
			<Text dimColor>Use ↑↓ arrows and Enter to select:</Text>
			<Box flexDirection="column" marginTop={1}>
				{items.map((item, i) => (
					<Text key={item} color={selected === i ? 'green' : 'white'}>
						{selected === i ? '→' : ' '} {item}
					</Text>
				))}
			</Box>
		</Box>
	);
};

render(<Menu />);
```

## 2. Video Generation with Remotion

### Setup

```bash
npx create-video@latest my-video
cd my-video
npm start
```

### Animated Text Example

Create `src/HelloWorld.jsx`:

```jsx
import {useCurrentFrame, interpolate, Sequence, spring, useVideoConfig} from 'remotion';
import {AbsoluteFill} from 'remotion';

export const HelloWorld = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({
		frame,
		fps,
		config: {
			damping: 100,
		},
	});

	const opacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: '#1a1a1a',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1
				style={{
					fontSize: 100,
					color: 'white',
					transform: `scale(${scale})`,
					opacity,
				}}
			>
				React in Weird Places! 🚀
			</h1>
		</AbsoluteFill>
	);
};
```

### Animated List Example

```jsx
import {useCurrentFrame, Sequence, interpolate} from 'remotion';
import {AbsoluteFill} from 'remotion';

const items = ['Terminal UI', 'Videos', '3D Graphics', 'TV Apps', 'Desktop'];

export const AnimatedList = () => {
	return (
		<AbsoluteFill style={{backgroundColor: '#0a0a0a', padding: 60}}>
			<h1 style={{color: 'white', fontSize: 60, marginBottom: 40}}>
				React Everywhere
			</h1>
			{items.map((item, i) => (
				<Sequence key={item} from={i * 15} durationInFrames={200}>
					<ListItem text={item} />
				</Sequence>
			))}
		</AbsoluteFill>
	);
};

const ListItem = ({text}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1]);
	const translateX = interpolate(frame, [0, 20], [-50, 0]);

	return (
		<div
			style={{
				fontSize: 40,
				color: 'cyan',
				marginBottom: 20,
				opacity,
				transform: `translateX(${translateX}px)`,
			}}
		>
			→ {text}
		</div>
	);
};
```

Render video:
```bash
npm run build
```

## 3. 3D Graphics with React Three Fiber

### Setup

```bash
npx create-react-app r3f-demo
cd r3f-demo
npm install three @react-three/fiber @react-three/drei
```

### Rotating Cube Example

Replace `src/App.js`:

```jsx
import React, {useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {OrbitControls, PerspectiveCamera} from '@react-three/drei';

function Box() {
	const meshRef = useRef();

	useFrame((state, delta) => {
		meshRef.current.rotation.x += delta;
		meshRef.current.rotation.y += delta * 0.5;
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="hotpink" />
		</mesh>
	);
}

function App() {
	return (
		<div style={{width: '100vw', height: '100vh'}}>
			<Canvas>
				<PerspectiveCamera makeDefault position={[0, 0, 5]} />
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} />
				<Box />
				<OrbitControls />
			</Canvas>
		</div>
	);
}

export default App;
```

### Multiple Objects Example

```jsx
import React, {useRef, useMemo} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import * as THREE from 'three';

function Sphere({position, color}) {
	const meshRef = useRef();
	
	useFrame(({clock}) => {
		meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.5;
	});

	return (
		<mesh ref={meshRef} position={position}>
			<sphereGeometry args={[0.5, 32, 32]} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
}

function Scene() {
	const spheres = useMemo(() => {
		const colors = ['hotpink', 'cyan', 'yellow', 'lime', 'orange'];
		return Array.from({length: 5}, (_, i) => ({
			position: [(i - 2) * 2, 0, 0],
			color: colors[i],
		}));
	}, []);

	return (
		<>
			{spheres.map((props, i) => (
				<Sphere key={i} {...props} />
			))}
		</>
	);
}

function App() {
	return (
		<div style={{width: '100vw', height: '100vh', background: '#1a1a1a'}}>
			<Canvas camera={{position: [0, 0, 10]}}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<Scene />
			</Canvas>
		</div>
	);
}

export default App;
```

## 4. Simple Custom Renderer Example

### Console Logger Renderer

```javascript
// console-renderer.js
import Reconciler from 'react-reconciler';

const hostConfig = {
	supportsMutation: true,
	isPrimaryRenderer: false,
	
	createInstance(type, props) {
		return {
			type,
			props,
			children: [],
		};
	},

	createTextInstance(text) {
		return {
			type: 'TEXT',
			text,
		};
	},

	appendChildToContainer(container, child) {
		container.children.push(child);
	},

	appendChild(parent, child) {
		parent.children.push(child);
	},

	appendInitialChild(parent, child) {
		parent.children.push(child);
	},

	finalizeInitialChildren() {
		return false;
	},

	prepareUpdate() {
		return true;
	},

	commitUpdate(instance, updatePayload, type, oldProps, newProps) {
		instance.props = newProps;
	},

	commitTextUpdate(textInstance, oldText, newText) {
		textInstance.text = newText;
	},

	removeChild(parent, child) {
		const index = parent.children.indexOf(child);
		if (index !== -1) {
			parent.children.splice(index, 1);
		}
	},

	// Required but unused for this example
	getRootHostContext: () => ({}),
	getChildHostContext: () => ({}),
	shouldSetTextContent: () => false,
	prepareForCommit: () => null,
	resetAfterCommit: (container) => {
		// Log the tree structure
		console.clear();
		console.log('React Tree:');
		logTree(container.children[0], 0);
	},
	clearContainer: () => {},
	
	now: Date.now,
	scheduleTimeout: setTimeout,
	cancelTimeout: clearTimeout,
	noTimeout: -1,
	supportsHydration: false,
	getPublicInstance: (instance) => instance,
};

function logTree(node, depth) {
	if (!node) return;
	
	const indent = '  '.repeat(depth);
	if (node.type === 'TEXT') {
		console.log(`${indent}${node.text}`);
	} else {
		const propsStr = Object.keys(node.props).length > 0 
			? ` ${JSON.stringify(node.props)}` 
			: '';
		console.log(`${indent}<${node.type}${propsStr}>`);
		node.children.forEach(child => logTree(child, depth + 1));
		console.log(`${indent}</${node.type}>`);
	}
}

const ConsoleRenderer = Reconciler(hostConfig);

export function render(element) {
	const container = {children: []};
	const root = ConsoleRenderer.createContainer(container, 0, false, null);
	ConsoleRenderer.updateContainer(element, root, null, null);
	return container;
}
```

### Usage Example

```jsx
import React from 'react';
import {render} from './console-renderer.js';

function App() {
	return (
		<div className="app">
			<header>
				<h1>React in Weird Places</h1>
			</header>
			<main>
				<p>This renders to the console!</p>
				<ul>
					<li>Terminal UI</li>
					<li>Videos</li>
					<li>3D Graphics</li>
				</ul>
			</main>
		</div>
	);
}

render(<App />);

// Output in console:
// <div {"className":"app"}>
//   <header>
//     <h1>
//       React in Weird Places
//     </h1>
//   </header>
//   <main>
//     <p>
//       This renders to the console!
//     </p>
//     <ul>
//       <li>
//         Terminal UI
//       </li>
//       ...
```

## 5. PDF Generation with React-PDF

### Setup

```bash
npm install @react-pdf/renderer
```

### Invoice Example

```jsx
import React from 'react';
import {Document, Page, Text, View, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		padding: 30,
		fontFamily: 'Helvetica',
	},
	header: {
		fontSize: 24,
		marginBottom: 20,
		color: '#333',
	},
	section: {
		marginBottom: 10,
	},
	text: {
		fontSize: 12,
		marginBottom: 5,
	},
	table: {
		marginTop: 20,
		borderWidth: 1,
		borderColor: '#000',
	},
	row: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		padding: 8,
	},
});

const InvoiceDocument = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<Text style={styles.header}>Invoice #001</Text>
			
			<View style={styles.section}>
				<Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
				<Text style={styles.text}>From: React Presentation Co.</Text>
			</View>

			<View style={styles.table}>
				<View style={styles.row}>
					<Text style={{flex: 1}}>Item</Text>
					<Text style={{flex: 1}}>Amount</Text>
				</View>
				<View style={styles.row}>
					<Text style={{flex: 1}}>React in Weird Places Talk</Text>
					<Text style={{flex: 1}}>$99.99</Text>
				</View>
			</View>
		</Page>
	</Document>
);

// In your React app:
function App() {
	return (
		<PDFDownloadLink document={<InvoiceDocument />} fileName="invoice.pdf">
			{({loading}) => (loading ? 'Generating PDF...' : 'Download Invoice')}
		</PDFDownloadLink>
	);
}
```

## 6. React Hardware Example

### Arduino LED Control (Conceptual)

```jsx
import React from 'react';
import {render, Board, Led} from 'react-hardware';

const App = () => {
	const [brightness, setBrightness] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setBrightness(b => (b + 1) % 256);
		}, 10);
		return () => clearInterval(interval);
	}, []);

	return (
		<Board port="/dev/ttyUSB0">
			<Led pin={11} value={brightness} />
		</Board>
	);
};

render(<App />);
```

## Running the Examples

### Ink (Terminal)
```bash
cd ink-demo
node counter.js
```

### Remotion (Video)
```bash
cd my-video
npm start  # Preview
npm run build  # Render
```

### React Three Fiber (3D)
```bash
cd r3f-demo
npm start
```

### Console Renderer
```bash
node console-example.js
```

## Tips for Live Demos

1. **Ink Demo**: Have the counter running on a separate terminal visible to audience
2. **Remotion**: Show the preview in browser, highlight hot-reload capabilities
3. **R3F**: Use OrbitControls to interact with 3D scene live
4. **Custom Renderer**: Show console output updating in real-time

## Additional Resources

- **Ink Gallery**: https://github.com/vadimdemedes/ink#useful-components
- **Remotion Templates**: https://www.remotion.dev/templates
- **R3F Examples**: https://docs.pmnd.rs/react-three-fiber/getting-started/examples
- **Custom Renderer Tutorial**: https://agent-hunt.medium.com/hello-world-custom-react-renderer-9a95b7cd04bc

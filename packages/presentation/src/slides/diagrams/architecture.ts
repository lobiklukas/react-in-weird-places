export const architectureDiagram = `
graph TB
    A["📦 React Core<br/>(react package)"] --> B["🔄 React Reconciler<br/>(react-reconciler)"]
    B --> C["🎯 Renderers"]
    C --> D1["🌐 react-dom"]
    C --> D2["📱 react-native"]
    C --> D3["⌨️  ink"]
    C --> D4["🎥 remotion"]
    
    style A fill:#1e293b,stroke:#3b82f6,stroke-width:3px
    style B fill:#1e293b,stroke:#14b8a6,stroke-width:3px
    style C fill:#1e293b,stroke:#8b5cf6,stroke-width:3px
    style D1 fill:#1e293b,stroke:#64748b,stroke-width:2px
    style D2 fill:#1e293b,stroke:#64748b,stroke-width:2px
    style D3 fill:#1e293b,stroke:#64748b,stroke-width:2px
    style D4 fill:#1e293b,stroke:#64748b,stroke-width:2px
`

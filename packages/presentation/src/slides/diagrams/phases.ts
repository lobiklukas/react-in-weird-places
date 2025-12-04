export const phasesDiagram = `
flowchart LR
    A["🎯 setState()"] --> B["🏗️  RENDER<br/>Build Fiber Tree"]
    B --> C["🔍 DIFF<br/>Compare Trees"]
    C --> D["✅ COMMIT<br/>Update Target"]
    
    style A fill:#1e293b,stroke:#f59e0b,stroke-width:3px
    style B fill:#1e293b,stroke:#3b82f6,stroke-width:3px
    style C fill:#1e293b,stroke:#8b5cf6,stroke-width:3px
    style D fill:#1e293b,stroke:#10b981,stroke-width:3px
`

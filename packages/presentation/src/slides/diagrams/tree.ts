export const treeDiagram = `
graph TD
    A["🌳 App"] --> B["📦 Header"]
    A --> C["📦 Main"]
    A --> D["📦 Footer"]
    B --> E["📝 Nav"]
    C --> F["📦 List"]
    C --> G["📦 Sidebar"]
    F --> H["📋 Item A"]
    F --> I["📋 Item B"]
    F --> J["📋 Item C"]
    
    style A fill:#1e293b,stroke:#3b82f6,stroke-width:3px
    style B fill:#1e293b,stroke:#14b8a6,stroke-width:2px
    style C fill:#1e293b,stroke:#14b8a6,stroke-width:2px
    style D fill:#1e293b,stroke:#14b8a6,stroke-width:2px
`

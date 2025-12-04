export const diffingDiagram = `
graph TB
    subgraph Before["⬅️  BEFORE"]
        A1["🌳 App"] --> B1["📦 Header"]
        A1 --> C1["📦 List"]
        A1 --> D1["📦 Footer"]
        C1 --> E1["📋 Item A"]
        C1 --> F1["📋 Item B"]
    end
    
    subgraph After["➡️  AFTER"]
        A2["🌳 App"] --> B2["📦 Header ✅"]
        A2 --> C2["📦 Grid ✨"]
        A2 --> D2["📦 Footer ✅"]
        C2 --> E2["📋 Item A ✅"]
        C2 --> F2["📋 Item B ✅"]
        C2 --> G2["📋 Item C ✨"]
    end
    
    style C1 fill:#7f1d1d,stroke:#ef4444,stroke-width:3px
    style C2 fill:#14532d,stroke:#10b981,stroke-width:3px
`

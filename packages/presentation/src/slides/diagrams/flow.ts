export const flowDiagram = `
sequenceDiagram
    participant U as 🎯 User
    participant R as 📦 React
    participant Rec as 🔄 Reconciler
    participant H as 🎨 HostConfig
    participant T as 🖥️  Target
    
    U->>R: setState()
    R->>Rec: Schedule Update
    Rec->>Rec: 🏗️  Render Phase
    Rec->>Rec: 🔍 Diff Phase
    Rec->>H: ✅ Commit Phase
    H->>T: createInstance()
    H->>T: appendChild()
    H->>T: commitUpdate()
    T->>U: 🎉 UI Updated!
`

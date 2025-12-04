# Quick Start Guide - Updated Presentation

## 🚀 Running the Presentation

```bash
cd /opt/dev/edu-session/react-weird-places-presentation
npm run dev
```

Then open your browser to: **http://localhost:5173**

## 🎮 Controls

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Esc` | Overview mode (see all slides) |
| `F` | Fullscreen |
| `S` | Speaker notes (if enabled) |
| `?` | Show keyboard shortcuts |

## 📊 Presentation Structure

### Updated Flow (71 minutes total)

1. **Title & Introduction** (5 min)
   - Title slide
   - What is React?
   - React = UI Library?

2. **React Reconciler Basics** (3 min)
   - The Secret: React Reconciler
   - Core vs Reconciler vs Renderer

3. **🆕 How Reconciliation Works** (12 min) ⭐ NEW!
   - Section title
   - 3-Layer Architecture
   - Virtual DOM concept
   - Component tree visualization
   - Three phases overview
   - Render phase deep dive
   - Diffing algorithm rules
   - Diffing in action
   - Keys & optimization
   - Commit phase
   - Complete flow diagram

4. **Traditional Targets** (3 min)
   - react-dom
   - react-native

5. **Weird Places** (25 min)
   - Terminal/CLI (Ink)
   - Videos (Remotion)
   - 3D Graphics (React Three Fiber)
   - TV Platforms
   - Desktop Apps
   - More weird places (PDFs, Emails, Figma, etc.)

6. **How to Build Custom Renderer** (8 min)
   - HostConfig introduction
   - Example code
   - Real implementation

7. **Wrap Up** (15 min)
   - Key takeaways
   - Future possibilities
   - Resources
   - Q&A

## 🎨 What's New

### Visual Enhancements
- ✅ **Mermaid Diagrams**: Professional flowcharts, tree diagrams, sequence diagrams
- ✅ **Geist Font**: Modern, clean typography throughout
- ✅ **Color-Coded Phases**: Blue (Render), Purple (Diff), Green (Commit)
- ✅ **React Official Diagrams**: High-quality images from React docs

### Technical Content
- ✅ **Virtual DOM Explained**: With code examples
- ✅ **Reconciliation Process**: Complete breakdown
- ✅ **Diffing Algorithm**: 4 core rules with examples
- ✅ **Keys & Performance**: O(n) vs O(n²) comparison
- ✅ **HostConfig Bridge**: Connects to custom renderers

## 🎯 Key Slides Reference

### Critical Slides (Don't Skip!)
- **Slide 5**: How Reconciliation Works (section title) - Sets up deep dive
- **Slide 7**: Three Phases Overview - Core concept
- **Slide 8**: Diffing Rules - The algorithm explained
- **Slide 11**: Commit Phase - Links to custom renderers
- **Slide 12**: Complete Flow - Recap everything

### Optional Slides (If Short on Time)
- **Slide 10**: Keys & Optimization - Can mention briefly instead
- **Slide 6**: Render Phase - Can simplify to just "builds tree"

## 🎤 Presentation Tips

### Pacing
- **Slow down** on diffing rules (complex concept)
- **Speed up** on tree visualization (self-explanatory diagram)
- **Pause** after Complete Flow for questions

### Engagement
- **Ask**: "Who has used React DevTools?" (before tree slide)
- **Show**: Open DevTools Components tab live
- **Poll**: "Raise hand if you've been bitten by index-as-key bug"

### Transitions
**INTO reconciliation section:**
> "We've seen React has a reconciler... but what IS reconciliation? Let's dive deep."

**OUT OF reconciliation section:**
> "Now that we know HOW React's architecture works, let's see WHERE it can run..."

## 🔧 Troubleshooting

### Diagrams Not Rendering
```bash
# Check if mermaid is installed
npm list mermaid

# Reinstall if needed
npm install mermaid
```

### Font Not Loading
```bash
# Check if geist is installed
npm list geist

# Reinstall if needed
npm install geist
```

### Dev Server Not Starting
```bash
# Kill any running processes
pkill -f vite

# Clear cache and restart
rm -rf node_modules/.vite
npm run dev
```

### Slides Overflowing
- Check your browser zoom is at 100%
- Press `Esc` for overview mode to see all slides
- Refresh page if diagrams look broken

## 📁 File Locations

### Key Files
```
react-weird-places-presentation/
├── src/
│   ├── slides.svelte               # Main presentation (1037 lines)
│   ├── lib/components/
│   │   ├── mermaid.svelte          # Mermaid diagram component
│   │   └── index.ts                # Component exports
│   ├── main.ts                     # App entry (with Geist imports)
│   └── styles.css                  # Global styles (with Geist)
├── public/
│   └── gifs/                       # React official diagrams
│       ├── react-render-commit.png
│       ├── react-tree.png
│       └── react-conditional-tree.png
├── package.json                    # Dependencies (mermaid, geist)
└── tailwind.config.js              # Font config
```

## 📚 Additional Resources

### Presentation Documentation
- `README.md` - Original setup guide
- `GETTING-STARTED.md` - Quick start checklist
- `RECONCILIATION-SLIDES.md` - Detailed implementation notes (this file's companion)
- `PRESENTATION-TIPS.md` - Speaking tips and timing
- `DEMOS.md` - Live demo code examples
- `RESOURCES.md` - External links and references

### During Presentation
- **React DevTools**: For live tree inspection
- **CodeSandbox**: For live coding demos
- **DEMOS.md**: Ready-to-run code examples

## ⚡ Quick Commands

```bash
# Start presentation
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check

# View all npm scripts
npm run
```

## 🎓 For Students

### What to Focus On
1. **Virtual DOM concept** (Slide 4) - Foundation
2. **Three phases** (Slide 6) - Process
3. **Diffing rules** (Slide 8) - Algorithm
4. **Keys importance** (Slide 10) - Performance

### What to Explore Later
1. React DevTools (see the tree in real apps)
2. Build a custom renderer (follow How to Build section)
3. Explore Ink/Remotion (examples in DEMOS.md)
4. Read React Fiber architecture (Resources section)

## 🎯 Learning Outcomes

After this presentation, you should be able to:
- ✅ Explain what Virtual DOM is
- ✅ Describe the 3 phases of reconciliation
- ✅ List the 4 diffing rules
- ✅ Explain why keys matter
- ✅ Understand how custom renderers work
- ✅ Identify where React can run (beyond browsers)

## 💡 Pro Tips

### Before Presenting
- [ ] Test all slides advance correctly
- [ ] Check Mermaid diagrams render (give them 2 seconds)
- [ ] Open React DevTools in a tab (for live demo)
- [ ] Have DEMOS.md open in another tab
- [ ] Set browser to fullscreen (F key)

### During Presenting
- Use `Esc` to see upcoming slides
- Use `→` to advance, not clicking (smoother)
- Let diagrams finish rendering before talking
- Pause after code examples for questions

### After Presenting
- Share this repo with students
- Point to RESOURCES.md for further reading
- Encourage building custom renderers
- Collect feedback on technical depth

---

**Need help?** Check:
- `RECONCILIATION-SLIDES.md` for detailed implementation notes
- `RESOURCES.md` for React reconciler documentation
- React docs: https://react.dev/learn/render-and-commit

**Ready to present?** Run `npm run dev` and open http://localhost:5173! 🚀

---

## 🔄 Font Update (Important!)

The Geist font is now loaded via CSS instead of npm package:

- ✅ **Location**: `public/fonts/GeistVF.woff2` and `GeistMonoVF.woff2`
- ✅ **Method**: CSS @font-face declarations
- ✅ **Benefit**: No Next.js dependency required
- ✅ **Size**: 486KB total (variable fonts)

If fonts don't load:
1. Check `public/fonts/` directory exists
2. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. See `FONT-UPDATE.md` for troubleshooting


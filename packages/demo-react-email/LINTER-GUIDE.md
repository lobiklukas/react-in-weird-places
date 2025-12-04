# React Email Linter Issues - Complete Guide

## Overview

The `problematic.tsx` email template now demonstrates **40+ issues** that will be caught by React Email's built-in linter and email client compatibility checks.

## What is the React Email Linter?

When you run `pnpm dev`, the React Email preview server includes a **Linter tab** that automatically scans your email templates for:
- ✅ Accessibility issues
- 🔒 Security vulnerabilities  
- 🔗 Broken or problematic links/images
- 📱 Email client compatibility problems

## Issue Categories

### Part 1: Email Client Compatibility (Issues #1-20)
These are covered in the main PROBLEMATIC.md file and include:
- React hooks and event handlers
- Modern CSS (flexbox, grid, animations)
- HTML5 elements (video, iframe, form inputs)
- JavaScript and external resources

### Part 2: Linter-Specific Issues (Issues #21-40)

## Linter Issue Details

### 🖼️ Image Issues

#### #21: Missing Alt Text
```tsx
❌ <img src="image.jpg" width="200" />
✅ <Img src="image.jpg" alt="Product showcase" width={200} />
```
**Why it matters**: Screen readers can't describe images without alt text.

#### #22: Empty Alt on Meaningful Images
```tsx
❌ <Img src="logo.png" alt="" width={150} />
✅ <Img src="logo.png" alt="Company Logo" width={150} />
```
**Why it matters**: Important images need descriptive text. Only use `alt=""` for decorative images.

#### #24: Images Over HTTP
```tsx
❌ <Img src="http://example.com/image.jpg" alt="..." />
✅ <Img src="https://example.com/image.jpg" alt="..." />
```
**Why it matters**: HTTP is insecure and images may be blocked.

#### #31: Poor Alt Text (Filename Only)
```tsx
❌ <Img src="photo.jpg" alt="photo.jpg" />
❌ <Img src="image123.png" alt="image" />
✅ <Img src="celebration.jpg" alt="Team celebrating product launch" />
```
**Why it matters**: Alt text should describe the content, not just name the file.

#### #32: Overly Long Alt Text
```tsx
❌ <Img alt="This is an extremely long alt text that goes on and on..." />
✅ <Img alt="Team celebrating Q4 results" />
```
**Why it matters**: Keep alt text under 125 characters for screen reader usability.

#### #35: Missing Dimensions
```tsx
❌ <Img src="image.jpg" alt="..." />
✅ <Img src="image.jpg" alt="..." width={200} height={150} />
```
**Why it matters**: Prevents layout shifts during image loading.

#### #36: Tracking Pixels
```tsx
✅ <img src="tracking.gif" alt="" width="1" height="1" />
```
**Note**: 1x1 tracking pixels should have empty alt text. Be transparent about tracking.

---

### 🔗 Link Issues

#### #23: Insecure HTTP Links
```tsx
❌ <Link href="http://example.com">Click here</Link>
✅ <Link href="https://example.com">Click here</Link>
```
**Why it matters**: HTTP is vulnerable to man-in-the-middle attacks.

#### #25: Button Without href
```tsx
❌ <Button>Click Me</Button>
✅ <Button href="https://example.com">Click Me</Button>
```
**Why it matters**: Buttons with no destination are useless.

#### #26: Link Without href
```tsx
❌ <Link>This link goes nowhere</Link>
✅ <Link href="https://example.com">Visit our site</Link>
```
**Why it matters**: Links must have a destination.

#### #27: Empty href
```tsx
❌ <Link href="">Empty link</Link>
✅ <Link href="https://example.com">Valid link</Link>
```
**Why it matters**: Empty href serves no purpose.

#### #29: Relative URLs
```tsx
❌ <Link href="/relative/path">Link</Link>
❌ <Img src="/images/photo.jpg" alt="..." />
✅ <Link href="https://yourdomain.com/page">Link</Link>
✅ <Img src="https://yourdomain.com/images/photo.jpg" alt="..." />
```
**Why it matters**: Relative URLs may break depending on email client context.

#### #30: Malformed URLs
```tsx
❌ <Link href="htp://typo.com">             // Protocol typo
❌ <Link href="https://example.com/path with spaces">
❌ <Link href="www.missing-protocol.com">
✅ <Link href="https://example.com/path-with-hyphens">
```
**Why it matters**: Malformed URLs won't work at all.

#### #37: Poor Link Text
```tsx
❌ <Link href="...">click here</Link>
❌ <Link href="...">read more</Link>
❌ <Link href="...">link</Link>
✅ <Link href="...">Download the pricing guide</Link>
✅ <Link href="...">View our Q4 financial report</Link>
```
**Why it matters**: Descriptive link text improves accessibility and user experience.

---

### 🔒 Security Issues

#### #28: JavaScript URLs
```tsx
❌ <Link href="javascript:alert('XSS')">Dangerous</Link>
✅ <Link href="https://example.com">Safe link</Link>
```
**Why it matters**: `javascript:` URLs are a major XSS vulnerability.

#### #33: Multiple Violations
```tsx
❌ <a href="http://insecure.com">
     <img src="http://insecure.com/image.jpg" />
   </a>
```
**Triple violation**: HTTP link + HTTP image + no alt text!

#### #40: Mixed Content
```tsx
<!-- HTTPS email with HTTP resources -->
❌ <Img src="http://cdn.example.com/image.jpg" alt="..." />
✅ <Img src="https://cdn.example.com/image.jpg" alt="..." />
```
**Why it matters**: Browsers block HTTP content on HTTPS pages.

---

### 🚫 Development Artifacts

#### #38: Localhost URLs
```tsx
❌ <Link href="http://localhost:3000/test">Dev link</Link>
❌ <Img src="http://127.0.0.1:8080/image.png" alt="..." />
✅ <Link href="https://production.com/test">Production link</Link>
```
**Why it matters**: Localhost only works on your machine.

#### #39: File Protocol URLs
```tsx
❌ <Link href="file:///Users/dev/document.pdf">Local file</Link>
✅ <Link href="https://cdn.example.com/document.pdf">Web file</Link>
```
**Why it matters**: `file://` URLs only work locally.

---

### 🎨 Component Usage

#### #34: Manual Button Styling
```tsx
❌ <a href="..." style={{ padding: '10px', background: 'blue' }}>
     Button-like link
   </a>
✅ <Button href="...">Proper Button</Button>
```
**Why it matters**: React Email's Button component ensures cross-client compatibility.

---

## How to Use the Linter

### 1. Start Dev Server
```bash
cd packages/demo-react-email
pnpm dev
```

### 2. Open Preview
Navigate to http://localhost:9001 (or whatever port is shown)

### 3. Access Linter Tab
- Click on the "problematic" template
- Look for the **Linter** tab in the preview interface
- Review all flagged issues

### 4. Fix Issues
The linter will show:
- ❌ **Errors** - Must fix (security/accessibility)
- ⚠️ **Warnings** - Should fix (best practices)
- ℹ️ **Info** - Nice to know (suggestions)

---

## Testing Checklist

Before sending any email, verify:

### Accessibility ✅
- [ ] All images have descriptive alt text
- [ ] Alt text is concise (< 125 chars)
- [ ] Decorative images use `alt=""`
- [ ] Link text is descriptive
- [ ] Images have explicit dimensions

### Security 🔒
- [ ] All URLs use HTTPS
- [ ] No `javascript:` URLs
- [ ] No mixed content (HTTP on HTTPS)
- [ ] No suspicious/malformed URLs

### Links & Images 🔗
- [ ] All links have valid href attributes
- [ ] All images have valid src URLs
- [ ] No relative URLs (use absolute)
- [ ] No development URLs (localhost, file://)
- [ ] All URLs are properly formatted

### Email Client Compatibility 📱
- [ ] No modern CSS (flexbox, grid, animations)
- [ ] No JavaScript or external stylesheets
- [ ] Using React Email components
- [ ] Tested across major email clients

---

## Quick Reference

| Issue | Bad | Good |
|-------|-----|------|
| Alt text | `<img src="...">` | `<Img src="..." alt="Description">` |
| HTTP | `http://example.com` | `https://example.com` |
| Empty link | `<Link>Text</Link>` | `<Link href="...">Text</Link>` |
| Relative URL | `src="/image.jpg"` | `src="https://domain.com/image.jpg"` |
| JS URL | `href="javascript:..."` | `href="https://..."` |
| Poor link text | `Click here` | `Download pricing guide` |
| No dimensions | `<Img src="...">` | `<Img src="..." width={200}>` |
| Button styling | `<a style={...}>` | `<Button href="...">` |

---

## Resources

- [React Email Documentation](https://react.email/docs)
- [Can I Email](https://www.caniemail.com/) - Email client support table
- [WebAIM](https://webaim.org/techniques/alttext/) - Alt text best practices
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards

---

## Summary

The problematic.tsx template demonstrates all these issues intentionally. Use it as:
- 📚 A learning resource to understand what NOT to do
- 🔍 A reference for linter warnings and their fixes
- ✅ A checklist before sending production emails
- 🎓 Training material for your team

**Remember**: The linter is your friend! It catches issues before they reach your users' inboxes.

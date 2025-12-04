# Problematic Email Template - Educational Demo

This email template (`problematic.tsx`) is **intentionally broken** to demonstrate common mistakes developers make when building HTML emails with React Email.

## ⚠️ Common Email Development Mistakes

This template contains 40+ issues divided into two categories:

1. **Email Client Compatibility Issues (20 issues)** - Things that don't work in email clients
2. **React Email Linter Issues (20+ issues)** - Things that React Email's linter will flag

Use this as a learning tool to understand what NOT to do.

---

## Part 1: Email Client Compatibility Issues

### 1. **React Hooks in Email Templates**
```tsx
const [count, setCount] = React.useState(0);
```
**Problem**: React hooks execute during rendering, but emails are static HTML. State management doesn't work.
**Solution**: Remove all hooks. Emails are rendered once to static HTML.

### 2. **Event Handlers**
```tsx
onClick={handleClick}
```
**Problem**: JavaScript doesn't execute in email clients for security reasons.
**Solution**: Use `<a>` tags with `href` attributes for interactivity.

### 3. **External Stylesheets**
```tsx
<link rel="stylesheet" href="..." />
```
**Problem**: Most email clients strip external CSS references.
**Solution**: Use inline styles or React Email's style prop.

### 4. **JavaScript in Emails**
```tsx
<script src="..."></script>
```
**Problem**: JavaScript is completely blocked in email clients.
**Solution**: Don't use JavaScript. Emails must be static HTML.

### 5. **Modern HTML5 Elements**
```tsx
<article>, <header>, <nav>, <section> (semantic)
```
**Problem**: Limited support in older email clients (Outlook, etc).
**Solution**: Use `<div>` and `<table>` elements instead.

### 6. **Flexbox Layout**
```tsx
display: 'flex'
```
**Problem**: Flexbox doesn't work in Outlook and many email clients.
**Solution**: Use tables for layout. React Email provides `<Row>` and `<Column>` components.

### 7. **CSS Grid**
```tsx
display: 'grid'
```
**Problem**: CSS Grid has zero support in email clients.
**Solution**: Use nested tables for grid-like layouts.

### 8. **Button Elements with onClick**
```tsx
<button onClick={...}>
```
**Problem**: Buttons have inconsistent rendering and no click handlers work.
**Solution**: Use React Email's `<Button>` component (renders as styled `<a>` tag).

### 9. **Dynamic State Display**
```tsx
<Text>You clicked {count} times</Text>
```
**Problem**: State doesn't persist; emails are static snapshots.
**Solution**: Pass all data as props at render time.

### 10. **Video/Audio Elements**
```tsx
<video>, <audio>
```
**Problem**: Not supported in email clients.
**Solution**: Use a thumbnail image with a link to the video on a webpage.

### 11. **Form Inputs**
```tsx
<input>, <textarea>, <select>
```
**Problem**: Limited support and security restrictions.
**Solution**: Link to a web form instead. Some basic inputs work but inconsistently.

### 12. **Absolute/Fixed Positioning**
```tsx
position: 'absolute'
```
**Problem**: Positioning doesn't work reliably across email clients.
**Solution**: Use table-based layouts for positioning.

### 13. **CSS Animations/Transitions**
```tsx
animation: 'slideIn 1s'
transition: 'all 0.3s'
```
**Problem**: Animations don't work in email clients.
**Solution**: Use GIFs for animated content.

### 14. **SVG Without Fallbacks**
```tsx
<svg>...</svg>
```
**Problem**: SVG support is limited (Outlook blocks it entirely).
**Solution**: Use PNG/JPG images or provide fallback images.

### 15. **Background Images on Divs**
```tsx
backgroundImage: 'url(...)'
```
**Problem**: Background images on divs don't work in Outlook.
**Solution**: Use VML for Outlook or React Email's background image solutions.

### 16. **Rem/Em Units**
```tsx
fontSize: '2rem'
```
**Problem**: Relative units render inconsistently.
**Solution**: Use `px` units for reliable sizing.

### 17. **CSS Pseudo-classes**
```tsx
:hover, :active, :focus
```
**Problem**: Limited support for pseudo-classes.
**Solution**: Avoid relying on hover states. Some webmail clients support :hover but not mobile.

### 18. **Complex CSS Selectors**
```tsx
.container > div:first-child
```
**Problem**: Complex selectors are often stripped.
**Solution**: Use inline styles on individual elements.

### 19. **Data Attributes**
```tsx
data-track="click"
```
**Problem**: May be stripped by email clients for security.
**Solution**: Use URL parameters for tracking instead.

### 20. **iframes**
```tsx
<iframe src="..." />
```
**Problem**: iframes are blocked for security reasons.
**Solution**: Use images with links to external content.

---

## Part 2: React Email Linter Issues

The React Email Linter tab checks your email for common issues related to accessibility, security, and broken content. Here are all the issues demonstrated:

### 21. **Images Without Alt Text**
```tsx
<img src="..." width="200" />
```
**Problem**: Missing alt attribute makes images inaccessible to screen readers.
**Solution**: Always provide descriptive alt text: `<Img src="..." alt="Description" />`

### 22. **Empty Alt Text on Meaningful Images**
```tsx
<Img src="logo.png" alt="" />
```
**Problem**: Important images with empty alt text are invisible to screen readers.
**Solution**: Use descriptive alt text. Only use empty alt (`alt=""`) for decorative images.

### 23. **Insecure HTTP URLs in Links**
```tsx
<Link href="http://example.com">
```
**Problem**: HTTP is insecure and vulnerable to man-in-the-middle attacks.
**Solution**: Always use HTTPS: `<Link href="https://example.com">`

### 24. **Images Served Over HTTP**
```tsx
<Img src="http://example.com/image.jpg" />
```
**Problem**: Images over HTTP are insecure and may be blocked by email clients.
**Solution**: Use HTTPS URLs for all images.

### 25. **Button Without href**
```tsx
<Button>Click Me</Button>
```
**Problem**: Button with no destination serves no purpose.
**Solution**: `<Button href="https://example.com">Click Me</Button>`

### 26. **Link Without href**
```tsx
<Link>This link goes nowhere</Link>
```
**Problem**: Links must have a destination.
**Solution**: Always include href: `<Link href="https://example.com">`

### 27. **Empty href Attribute**
```tsx
<Link href="">Empty link</Link>
```
**Problem**: Empty href is functionally useless.
**Solution**: Provide a valid URL or remove the link.

### 28. **JavaScript URLs**
```tsx
<Link href="javascript:alert('XSS')">
```
**Problem**: `javascript:` URLs are a major XSS security vulnerability.
**Solution**: Never use javascript: URLs. Use proper HTTPS links.

### 29. **Relative URLs**
```tsx
<Link href="/relative/path">
<Img src="/images/photo.jpg" />
```
**Problem**: Relative URLs may break depending on email client context.
**Solution**: Use absolute URLs: `https://yourdomain.com/images/photo.jpg`

### 30. **Malformed URLs**
```tsx
<Link href="htp://typo.com">          // Protocol typo
<Link href="https://example.com/path with spaces">
<Link href="www.missing-protocol.com">
```
**Problem**: URLs with typos, spaces, or missing protocols won't work.
**Solution**: Validate all URLs. Encode spaces as %20 or use hyphens.

### 31. **Poor Alt Text (Filename Only)**
```tsx
<Img src="photo.jpg" alt="photo.jpg" />
<Img src="image123.png" alt="image" />
```
**Problem**: Alt text should describe the content, not just name the file.
**Solution**: `<Img src="..." alt="Team celebrating product launch" />`

### 32. **Overly Long Alt Text**
```tsx
<Img alt="This is an extremely long alt text that goes on and on..." />
```
**Problem**: Alt text over 125 characters is verbose and hard for screen readers.
**Solution**: Keep alt text concise and descriptive (under 125 chars recommended).

### 33. **Multiple Violations Combined**
```tsx
<a href="http://insecure.com">
  <img src="http://insecure.com/image.jpg" />
</a>
```
**Problem**: HTTP link + HTTP image + no alt text = triple failure.
**Solution**: Fix all three: HTTPS links, HTTPS images, descriptive alt text.

### 34. **Styled Links vs Button Component**
```tsx
<a href="..." style={{ padding: '10px', background: 'blue' }}>
```
**Problem**: Manual button styling doesn't work well across email clients.
**Solution**: Use `<Button>` component for better cross-client support.

### 35. **Images Without Explicit Dimensions**
```tsx
<Img src="..." alt="..." />
```
**Problem**: Missing width/height causes layout shifts during loading.
**Solution**: Always specify dimensions: `<Img width={200} height={150} />`

### 36. **Tracking Pixels (1x1 Images)**
```tsx
<img src="tracking.gif" width="1" height="1" />
```
**Problem**: Tracking pixels should have empty alt text but raise privacy concerns.
**Solution**: Use empty alt (`alt=""`) and be transparent about tracking.

### 37. **Poor Link Text**
```tsx
<Link href="...">click here</Link>
<Link href="...">read more</Link>
<Link href="...">link</Link>
```
**Problem**: Generic link text isn't descriptive for accessibility.
**Solution**: Use descriptive text: "Download the pricing guide"

### 38. **Localhost URLs**
```tsx
<Link href="http://localhost:3000/test">
<Img src="http://127.0.0.1:8080/image.png" />
```
**Problem**: Localhost URLs are development artifacts that won't work in production.
**Solution**: Replace with production URLs before sending.

### 39. **File Protocol URLs**
```tsx
<Link href="file:///Users/dev/document.pdf">
```
**Problem**: `file://` URLs only work on the local machine.
**Solution**: Upload files to a web server and use HTTPS URLs.

### 40. **Mixed Content (HTTPS/HTTP)**
```tsx
<!-- HTTPS email with HTTP image -->
<Img src="http://cdn.example.com/image.jpg" />
```
**Problem**: Browsers may block HTTP content when viewing via HTTPS.
**Solution**: Ensure all resources (images, links) use HTTPS.

---

## How React Email Linter Helps

The React Email dev server includes a **Linter tab** that automatically checks for:

### 🔍 Accessibility Issues
- Missing alt text
- Empty alt on meaningful images
- Non-descriptive link text
- Images without dimensions

### 🔒 Security Issues  
- HTTP instead of HTTPS
- JavaScript URLs
- Potentially malicious links

### 🔗 Link/URL Issues
- Missing href attributes
- Empty or invalid URLs
- Relative URLs that might break
- Development URLs (localhost)
- Malformed URLs

### 📱 Compatibility Issues
- Mixed content warnings
- Resources that won't load
- Poor practices that break in email clients

---

## ✅ Best Practices (What to Do Instead)

### Use React Email Components
```tsx
import { Button, Container, Row, Column, Img } from '@react-email/components';

<Container>
  <Row>
    <Column>
      <Button href="https://example.com">Click Me</Button>
    </Column>
  </Row>
</Container>
```

### Use Table-Based Layouts
Email clients from the 1990s-2000s still dominate (Outlook uses Word's rendering engine!), so tables are the most reliable layout method.

### Inline Styles Only
```tsx
<div style={{ padding: '20px', backgroundColor: '#fff' }}>
  Content
</div>
```

### Test Across Email Clients
- Gmail (web, iOS, Android)
- Outlook (Windows, Mac, Web)
- Apple Mail (iOS, macOS)
- Yahoo Mail
- Thunderbird

### Use Email Testing Tools
- [Litmus](https://litmus.com)
- [Email on Acid](https://www.emailonacid.com)
- React Email's built-in preview

---

## How to View This Template

1. Start the dev server:
   ```bash
   pnpm dev
   ```

2. Open http://localhost:9001 in your browser

3. Click on "problematic" in the sidebar

4. Observe how it renders and what warnings appear

---

## Learning Resources

- [React Email Documentation](https://react.email/docs)
- [Email Client CSS Support](https://www.campaignmonitor.com/css/)
- [Can I Email](https://www.caniemail.com/) - Email equivalent of "Can I Use"

---

## Note

This template is for **educational purposes only**. Never use these patterns in production emails. Refer to `welcome.tsx` and `technical.tsx` for proper email development examples.

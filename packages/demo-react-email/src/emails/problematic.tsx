import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Button,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

/**
 * This email template intentionally contains common mistakes that developers
 * make when building emails. These will trigger React Email linter warnings
 * and demonstrate email client compatibility issues.
 * 
 * The React Email Linter checks for:
 * - Missing alt text on images
 * - Broken/invalid URLs
 * - Insecure HTTP links (should use HTTPS)
 * - Missing href attributes
 * - Accessibility issues
 * - Security vulnerabilities
 */

interface ProblematicEmailProps {
    username?: string;
}

export const ProblematicEmail = ({ username = 'Developer' }: ProblematicEmailProps) => {
    // ⚠️ Issue #1: Using React hooks in email templates (not supported during rendering)
    const [count, setCount] = React.useState(0);
    
    // ⚠️ Issue #2: Event handlers don't work in emails
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <Html>
            <Head>
                {/* ⚠️ Issue #3: External stylesheets often don't work in email clients */}
                <link rel="stylesheet" href="https://example.com/styles.css" />
                
                {/* ⚠️ Issue #4: JavaScript doesn't work in emails */}
                <script src="https://example.com/script.js"></script>
            </Head>
            <Preview>Email with Common Mistakes - Don't Do This!</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section>
                        <Heading>⚠️ Problematic Email Template</Heading>
                        
                        {/* ⚠️ Issue #5: Using modern HTML5 elements that aren't supported */}
                        <article style={article}>
                            <header>
                                <h1>Hello {username}!</h1>
                            </header>
                            
                            {/* ⚠️ Issue #6: Flexbox doesn't work reliably in email clients */}
                            <div style={flexContainer}>
                                <div style={flexItem}>Item 1</div>
                                <div style={flexItem}>Item 2</div>
                                <div style={flexItem}>Item 3</div>
                            </div>

                            {/* ⚠️ Issue #7: CSS Grid doesn't work in email clients */}
                            <div style={gridContainer}>
                                <div>Grid 1</div>
                                <div>Grid 2</div>
                                <div>Grid 3</div>
                            </div>

                            {/* ⚠️ Issue #8: Using button element with onClick (should use <a> tags) */}
                            <button onClick={handleClick} style={button}>
                                Click Me (Won't Work!)
                            </button>
                            
                            {/* ⚠️ Issue #9: Trying to display dynamic state */}
                            <Text>You clicked {count} times</Text>

                            {/* ⚠️ Issue #10: Using video/audio (not supported) */}
                            <video controls style={{ width: '100%' }}>
                                <source src="https://example.com/video.mp4" type="video/mp4" />
                            </video>

                            {/* ⚠️ Issue #11: Using form inputs (limited support) */}
                            <form action="https://example.com/submit" method="POST">
                                <input type="text" placeholder="Email" style={input} />
                                <input type="checkbox" /> Subscribe to newsletter
                                <button type="submit">Submit</button>
                            </form>

                            {/* ⚠️ Issue #12: Position absolute/fixed doesn't work */}
                            <div style={absolutePosition}>
                                This won't position correctly!
                            </div>

                            {/* ⚠️ Issue #13: CSS animations/transitions don't work */}
                            <div style={animatedBox}>
                                This won't animate in emails
                            </div>

                            {/* ⚠️ Issue #14: Using SVG without proper fallbacks */}
                            <svg width="100" height="100">
                                <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
                            </svg>

                            {/* ⚠️ Issue #15: Background images on divs (limited support) */}
                            <div style={backgroundImage}>
                                <Text style={{ color: '#fff' }}>Text over background image</Text>
                            </div>

                            {/* ⚠️ Issue #16: Using rem/em units extensively (px is safer) */}
                            <Text style={{ fontSize: '2rem', padding: '1.5em' }}>
                                Relative units may not work consistently
                            </Text>

                            {/* ⚠️ Issue #17: CSS pseudo-classes (limited support) */}
                            <div style={hoverEffect}>
                                Hover me (won't work in most email clients)
                            </div>

                            {/* ⚠️ Issue #18: Complex selectors in style tags */}
                            <style>{`
                                .container > div:first-child {
                                    color: red;
                                }
                                .item:hover {
                                    background: blue;
                                }
                                @media (max-width: 600px) {
                                    .responsive {
                                        font-size: 14px !important;
                                    }
                                }
                            `}</style>

                            {/* ⚠️ Issue #19: Using data attributes extensively */}
                            <div data-track="click" data-user-id="123" data-campaign="test">
                                Tracked div (may be stripped)
                            </div>

                            {/* ⚠️ Issue #20: iframes don't work in emails */}
                            <iframe 
                                src="https://example.com" 
                                width="600" 
                                height="400"
                                title="Embedded content"
                            />
                        </article>

                        {/* ========================================== */}
                        {/* LINTER ISSUES - These trigger React Email's Linter */}
                        {/* ========================================== */}
                        
                        <Section style={{ marginTop: '40px', borderTop: '3px solid red', paddingTop: '20px' }}>
                            <Heading as="h2">🔍 Linter Issues Below</Heading>
                            <Text style={{ color: '#d00' }}>
                                The following elements will trigger React Email's linter warnings
                            </Text>

                            {/* ⚠️ LINTER ISSUE #1: Images without alt text */}
                            <Heading as="h3" style={h3}>Image Without Alt Text</Heading>
                            <Text style={issueText}>
                                ❌ Example: {'<img src="https://example.com/image.jpg" width="200" />'}
                            </Text>
                            <Text style={issueText}>
                                Missing alt attribute - screen readers can't describe this image
                            </Text>

                            {/* ⚠️ LINTER ISSUE #2: Empty alt text on meaningful image */}
                            <Heading as="h3" style={h3}>Empty Alt Text on Important Image</Heading>
                            <Img 
                                src="https://example.com/logo.png"
                                alt=""
                                width={150}
                            />
                            <Text style={issueText}>
                                ❌ Alt text is empty but image conveys meaning
                            </Text>

                            {/* ⚠️ LINTER ISSUE #3: Insecure HTTP URLs */}
                            <Heading as="h3" style={h3}>Insecure HTTP Links</Heading>
                            <Link href="http://example.com/insecure">
                                Click this insecure link
                            </Link>
                            <Text style={issueText}>
                                ❌ Using HTTP instead of HTTPS - security risk
                            </Text>

                            {/* ⚠️ LINTER ISSUE #4: Image with HTTP URL */}
                            <Img 
                                src="http://example.com/http-image.jpg"
                                alt="Image served over HTTP"
                                width={200}
                            />
                            <Text style={issueText}>
                                ❌ Image loaded over insecure HTTP
                            </Text>

                            {/* ⚠️ LINTER ISSUE #5: Button without href */}
                            <Heading as="h3" style={h3}>Button Without URL</Heading>
                            <Button style={buttonStyle}>
                                Click Me (Goes Nowhere)
                            </Button>
                            <Text style={issueText}>
                                ❌ Button component missing href attribute
                            </Text>

                            {/* ⚠️ LINTER ISSUE #6: Link without href */}
                            <Heading as="h3" style={h3}>Link Without Destination</Heading>
                            <Link>This link goes nowhere</Link>
                            <Text style={issueText}>
                                ❌ Link missing href attribute
                            </Text>

                            {/* ⚠️ LINTER ISSUE #7: Empty href */}
                            <Heading as="h3" style={h3}>Empty Link</Heading>
                            <Link href="">Empty href link</Link>
                            <Text style={issueText}>
                                ❌ href is empty string
                            </Text>

                            {/* ⚠️ LINTER ISSUE #8: JavaScript URL */}
                            <Heading as="h3" style={h3}>JavaScript URL</Heading>
                            <Link href="javascript:alert('XSS')">
                                Dangerous JavaScript Link
                            </Link>
                            <Text style={issueText}>
                                ❌ javascript: URLs are a security vulnerability
                            </Text>

                            {/* ⚠️ LINTER ISSUE #9: Relative URLs that might break */}
                            <Heading as="h3" style={h3}>Relative URLs</Heading>
                            <Link href="/relative/path">Relative Link</Link>
                            <Img 
                                src="/images/relative.jpg"
                                alt="Relative image path"
                                width={100}
                            />
                            <Text style={issueText}>
                                ⚠️ Relative URLs might break depending on where email is viewed
                            </Text>

                            {/* ⚠️ LINTER ISSUE #10: Suspicious/broken URLs */}
                            <Heading as="h3" style={h3}>Potentially Broken URLs</Heading>
                            <Link href="htp://typo-in-protocol.com">Link with typo</Link>
                            <br />
                            <Link href="https://example.com/path with spaces">Link with spaces</Link>
                            <br />
                            <Link href="www.missing-protocol.com">Missing protocol</Link>
                            <Text style={issueText}>
                                ❌ Malformed URLs that won't work
                            </Text>

                            {/* ⚠️ LINTER ISSUE #11: Alt text that's just the filename */}
                            <Heading as="h3" style={h3}>Poor Alt Text Quality</Heading>
                            <Img 
                                src="https://example.com/photo.jpg"
                                alt="photo.jpg"
                                width={150}
                            />
                            <Img 
                                src="https://example.com/image123.png"
                                alt="image"
                                width={150}
                            />
                            <Text style={issueText}>
                                ⚠️ Alt text should be descriptive, not just the filename
                            </Text>

                            {/* ⚠️ LINTER ISSUE #12: Alt text that's too long */}
                            <Heading as="h3" style={h3}>Overly Long Alt Text</Heading>
                            <Img 
                                src="https://example.com/scene.jpg"
                                alt="This is an extremely long alt text that goes on and on describing every single detail of the image in exhaustive detail including things that don't really matter and making it very difficult for screen reader users to understand the actual purpose of the image because it's just too verbose and lengthy"
                                width={200}
                            />
                            <Text style={issueText}>
                                ⚠️ Alt text should be concise (recommended under 125 characters)
                            </Text>

                            {/* ⚠️ LINTER ISSUE #13: Multiple issues combined */}
                            <Heading as="h3" style={h3}>Multiple Issues</Heading>
                            <Text style={issueText}>
                                ❌ Example: HTTP link + HTTP image + no alt text
                            </Text>
                            <Text style={issueText}>
                                {'<a href="http://insecure.com"><img src="http://insecure.com/image.jpg" /></a>'}
                            </Text>
                            <Text style={issueText}>
                                This is a triple violation - fix all three issues!
                            </Text>

                            {/* ⚠️ LINTER ISSUE #14: Links that look like buttons but aren't */}
                            <Heading as="h3" style={h3}>Styled Link vs Button Component</Heading>
                            <Text style={issueText}>
                                ⚠️ Using anchor tags styled as buttons instead of Button component
                            </Text>
                            <Link href="https://example.com" style={buttonLikeLink}>
                                I look like a button but I'm an anchor tag
                            </Link>
                            <Text style={issueText}>
                                Use Button component instead for better email client support
                            </Text>

                            {/* ⚠️ LINTER ISSUE #15: Missing width/height on images */}
                            <Heading as="h3" style={h3}>Images Without Dimensions</Heading>
                            <Img 
                                src="https://example.com/no-dimensions.jpg"
                                alt="Image without explicit dimensions"
                            />
                            <Text style={issueText}>
                                ⚠️ Images should have explicit width/height to prevent layout shifts
                            </Text>

                            {/* ⚠️ LINTER ISSUE #16: Suspicious tracking pixels */}
                            <Heading as="h3" style={h3}>Tracking Pixel (1x1 image)</Heading>
                            <Text style={issueText}>
                                ℹ️ Example: {'<img src="https://tracking.com/pixel.gif" alt="" width="1" height="1" />'}
                            </Text>
                            <Text style={issueText}>
                                1x1 tracking pixels should have empty alt text, but be aware of privacy implications
                            </Text>

                            {/* ⚠️ LINTER ISSUE #17: Link text that says "click here" */}
                            <Heading as="h3" style={h3}>Poor Link Text</Heading>
                            <Link href="https://example.com">click here</Link>
                            {' | '}
                            <Link href="https://example.com">read more</Link>
                            {' | '}
                            <Link href="https://example.com">link</Link>
                            <Text style={issueText}>
                                ⚠️ Link text should be descriptive, not generic phrases
                            </Text>

                            {/* ⚠️ LINTER ISSUE #18: Localhost URLs (development artifacts) */}
                            <Heading as="h3" style={h3}>Development URLs</Heading>
                            <Link href="http://localhost:3000/test">
                                Development link
                            </Link>
                            <br />
                            <Img 
                                src="http://127.0.0.1:8080/image.png"
                                alt="Local image"
                                width={100}
                            />
                            <Text style={issueText}>
                                ❌ Localhost URLs won't work in production emails
                            </Text>

                            {/* ⚠️ LINTER ISSUE #19: File:// protocol URLs */}
                            <Heading as="h3" style={h3}>File Protocol URLs</Heading>
                            <Link href="file:///Users/dev/document.pdf">
                                Local file link
                            </Link>
                            <Text style={issueText}>
                                ❌ file:// URLs only work on the local machine
                            </Text>

                            {/* ⚠️ LINTER ISSUE #20: Mixed content (HTTPS page with HTTP resources) */}
                            <Heading as="h3" style={h3}>Mixed Content Warning</Heading>
                            <Text style={issueText}>
                                When viewing via HTTPS but loading HTTP resources:
                            </Text>
                            <Img 
                                src="http://cdn.example.com/image.jpg"
                                alt="HTTP image on HTTPS page"
                                width={150}
                            />
                            <Text style={issueText}>
                                ❌ Browsers may block HTTP content on HTTPS pages
                            </Text>
                        </Section>

                        {/* ========================================== */}
                        {/* SPAM TRIGGERS - These trigger SpamAssassin */}
                        {/* ========================================== */}
                        
                        <Section style={{ marginTop: '40px', borderTop: '3px solid orange', paddingTop: '20px' }}>
                            <Heading as="h2">🚨 Spam Filter Triggers Below</Heading>
                            <Text style={{ color: '#d00' }}>
                                The following content will trigger SpamAssassin and other spam filters
                            </Text>

                            {/* ⚠️ SPAM ISSUE #1: ALL CAPS IN SUBJECT/HEADINGS */}
                            <Heading as="h3" style={h3}>ALL CAPS SHOUTING</Heading>
                            <Text style={{ ...issueText, fontSize: '16px', fontWeight: 'bold' as const }}>
                                FREE MONEY!!! CLICK HERE NOW!!!
                            </Text>
                            <Text style={issueText}>
                                ❌ All caps text is a major spam indicator
                            </Text>

                            {/* ⚠️ SPAM ISSUE #2: Excessive Exclamation Marks */}
                            <Heading as="h3" style={h3}>Too Many Exclamation Marks!!!</Heading>
                            <Text style={issueText}>
                                Act Now!!! Limited Time Offer!!! Don't Miss Out!!!
                            </Text>
                            <Text style={issueText}>
                                ❌ Multiple exclamation marks trigger spam filters
                            </Text>

                            {/* ⚠️ SPAM ISSUE #3: Spammy Words and Phrases */}
                            <Heading as="h3" style={h3}>Spam Trigger Words</Heading>
                            <Text style={issueText}>
                                🚫 Common spam words and phrases:
                            </Text>
                            <Text style={{ ...issueText, marginBottom: '5px' }}>
                                • FREE MONEY - Make Money Fast - Get Rich Quick
                            </Text>
                            <Text style={{ ...issueText, marginBottom: '5px' }}>
                                • Winner! You've Won! Congratulations! Prize!
                            </Text>
                            <Text style={{ ...issueText, marginBottom: '5px' }}>
                                • Act Now! Limited Time! Urgent! Don't Delete!
                            </Text>
                            <Text style={{ ...issueText, marginBottom: '5px' }}>
                                • 100% FREE - No Cost - Absolutely Free
                            </Text>
                            <Text style={{ ...issueText, marginBottom: '5px' }}>
                                • Click Here Now! Buy Now! Order Now!
                            </Text>
                            <Text style={{ ...issueText, marginBottom: '5px' }}>
                                • Lose Weight Fast - Viagra - Pharmacy
                            </Text>
                            <Text style={{ ...issueText, marginBottom: '5px' }}>
                                • Dear Friend - This is not spam - Guaranteed
                            </Text>

                            {/* ⚠️ SPAM ISSUE #4: Excessive Money Symbols */}
                            <Heading as="h3" style={h3}>Money Symbols</Heading>
                            <Text style={{ fontSize: '20px', fontWeight: 'bold' as const }}>
                                $$$$ MAKE $10,000 IN 30 DAYS $$$$
                            </Text>
                            <Text style={issueText}>
                                ❌ Multiple dollar signs are spam indicators
                            </Text>

                            {/* ⚠️ SPAM ISSUE #5: Hidden Text (same color as background) */}
                            <Heading as="h3" style={h3}>Hidden Text</Heading>
                            <div style={{ backgroundColor: '#fff' }}>
                                <Text style={{ color: '#fff', fontSize: '1px' }}>
                                    This is hidden spam text that users can't see but filters detect
                                </Text>
                            </div>
                            <Text style={issueText}>
                                ❌ Hidden text (white on white) is a classic spam technique
                            </Text>

                            {/* ⚠️ SPAM ISSUE #6: Suspicious Links */}
                            <Heading as="h3" style={h3}>Suspicious URLs</Heading>
                            <Text style={issueText}>
                                Click here: bit.ly/suspicious (URL shorteners are flagged)
                            </Text>
                            <Text style={issueText}>
                                Visit: example.ru (certain TLDs like .ru, .cn are often flagged)
                            </Text>
                            <Text style={issueText}>
                                ❌ URL shorteners and suspicious domains trigger filters
                            </Text>

                            {/* ⚠️ SPAM ISSUE #7: Poor Text-to-Image Ratio */}
                            <Heading as="h3" style={h3}>Image-Heavy Email</Heading>
                            <Text style={issueText}>
                                ⚠️ Emails with mostly images and little text are flagged
                            </Text>
                            <Text style={issueText}>
                                (This email has mostly text, but image-only emails are suspicious)
                            </Text>

                            {/* ⚠️ SPAM ISSUE #8: Urgency and Pressure */}
                            <Heading as="h3" style={h3}>False Urgency</Heading>
                            <Text style={{ color: 'red', fontWeight: 'bold' as const, fontSize: '18px' }}>
                                ⏰ EXPIRES IN 5 MINUTES! ACT NOW OR LOSE THIS OPPORTUNITY FOREVER!
                            </Text>
                            <Text style={issueText}>
                                ❌ Creating false urgency is a spam technique
                            </Text>

                            {/* ⚠️ SPAM ISSUE #9: Deceptive Subject Lines */}
                            <Heading as="h3" style={h3}>Misleading Content</Heading>
                            <Text style={issueText}>
                                Re: Your Account (when there's no previous conversation)
                            </Text>
                            <Text style={issueText}>
                                Fwd: Important Message (when nothing was forwarded)
                            </Text>
                            <Text style={issueText}>
                                ❌ Deceptive subject prefixes trigger spam filters
                            </Text>

                            {/* ⚠️ SPAM ISSUE #10: Asking for Personal Information */}
                            <Heading as="h3" style={h3}>Phishing-Like Content</Heading>
                            <Text style={issueText}>
                                Please verify your account by clicking here and entering your:
                            </Text>
                            <Text style={issueText}>
                                • Social Security Number
                            </Text>
                            <Text style={issueText}>
                                • Bank Account Details
                            </Text>
                            <Text style={issueText}>
                                • Credit Card Number
                            </Text>
                            <Text style={issueText}>
                                ❌ Requesting sensitive information is a major red flag
                            </Text>

                            {/* ⚠️ SPAM ISSUE #11: Unsubscribe Issues */}
                            <Heading as="h3" style={h3}>No Unsubscribe Link</Heading>
                            <Text style={issueText}>
                                ❌ This email has no unsubscribe link (required by CAN-SPAM Act)
                            </Text>
                            <Text style={issueText}>
                                Missing unsubscribe = spam filter trigger + legal violation
                            </Text>

                            {/* ⚠️ SPAM ISSUE #12: Spelling and Grammar Errors */}
                            <Heading as="h3" style={h3}>Poor Writing Quality</Heading>
                            <Text style={issueText}>
                                Dear Freind, I am prince from Nigeria and I has great oportunity for you!!!
                            </Text>
                            <Text style={issueText}>
                                ❌ Multiple spelling/grammar errors indicate spam
                            </Text>

                            {/* ⚠️ SPAM ISSUE #13: Excessive Punctuation */}
                            <Heading as="h3" style={h3}>Punctuation Abuse</Heading>
                            <Text style={{ fontSize: '16px' }}>
                                !!!???!!! AMAZING OFFER !!!???!!!
                            </Text>
                            <Text style={issueText}>
                                ❌ Excessive or mixed punctuation is spammy
                            </Text>

                            {/* ⚠️ SPAM ISSUE #14: Missing Physical Address */}
                            <Heading as="h3" style={h3}>No Physical Address</Heading>
                            <Text style={issueText}>
                                ❌ CAN-SPAM requires a physical postal address in commercial emails
                            </Text>

                            {/* ⚠️ SPAM ISSUE #15: Misleading From/Reply-To */}
                            <Heading as="h3" style={h3}>Deceptive Sender Info</Heading>
                            <Text style={issueText}>
                                From: "Your Bank" &lt;not-a-bank@suspicious.com&gt;
                            </Text>
                            <Text style={issueText}>
                                ❌ Sender name doesn't match domain = phishing indicator
                            </Text>

                            {/* ⚠️ SPAM ISSUE #16: Attachment Warnings */}
                            <Heading as="h3" style={h3}>Suspicious Attachments</Heading>
                            <Text style={issueText}>
                                Open the attached file: invoice.exe
                            </Text>
                            <Text style={issueText}>
                                ❌ Executable attachments (.exe, .zip, .rar) are highly suspicious
                            </Text>

                            {/* ⚠️ SPAM ISSUE #17: Too Many Links */}
                            <Heading as="h3" style={h3}>Link Spam</Heading>
                            <Text style={issueText}>
                                <Link href="https://link1.example.com">Link 1</Link> | {' '}
                                <Link href="https://link2.example.com">Link 2</Link> | {' '}
                                <Link href="https://link3.example.com">Link 3</Link> | {' '}
                                <Link href="https://link4.example.com">Link 4</Link> | {' '}
                                <Link href="https://link5.example.com">Link 5</Link> | {' '}
                                <Link href="https://link6.example.com">Link 6</Link> | {' '}
                                <Link href="https://link7.example.com">Link 7</Link> | {' '}
                                <Link href="https://link8.example.com">Link 8</Link>
                            </Text>
                            <Text style={issueText}>
                                ⚠️ Too many links (especially to different domains) looks spammy
                            </Text>

                            {/* ⚠️ SPAM ISSUE #18: Lottery/Prize Scams */}
                            <Heading as="h3" style={h3}>Prize Scam Language</Heading>
                            <Text style={{ fontWeight: 'bold' as const }}>
                                Congratulations! You are the 1,000,000th visitor!
                            </Text>
                            <Text style={issueText}>
                                You've won a FREE iPhone! Click here to claim your prize!
                            </Text>
                            <Text style={issueText}>
                                ❌ Prize/lottery claims are classic spam
                            </Text>

                            {/* ⚠️ SPAM ISSUE #19: Get Rich Quick Schemes */}
                            <Heading as="h3" style={h3}>Financial Scams</Heading>
                            <Text style={issueText}>
                                Make $5,000 per week working from home! No experience needed!
                            </Text>
                            <Text style={issueText}>
                                Work from home and earn unlimited income! Join now!
                            </Text>
                            <Text style={issueText}>
                                ❌ Get-rich-quick schemes are heavily filtered
                            </Text>

                            {/* ⚠️ SPAM ISSUE #20: Suspicious Formatting */}
                            <Heading as="h3" style={h3}>Weird Character Spacing</Heading>
                            <Text style={issueText}>
                                F R E E   M O N E Y   (character spacing to avoid filters)
                            </Text>
                            <Text style={issueText}>
                                V!@gra (symbol substitution to avoid filters)
                            </Text>
                            <Text style={issueText}>
                                ❌ Attempts to bypass filters are themselves filtered
                            </Text>

                            {/* Summary Box */}
                            <Section style={{ 
                                backgroundColor: '#fff3cd', 
                                border: '2px solid orange',
                                padding: '20px',
                                marginTop: '30px',
                                borderRadius: '4px'
                            }}>
                                <Heading as="h3" style={{ color: '#856404', marginTop: 0 }}>
                                    📊 SpamAssassin Scoring
                                </Heading>
                                <Text style={{ color: '#856404', fontSize: '14px', marginBottom: '10px' }}>
                                    This email would score very high on SpamAssassin due to:
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '13px', marginBottom: '5px' }}>
                                    • All caps text (+3 points)
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '13px', marginBottom: '5px' }}>
                                    • Excessive exclamation marks (+2 points)
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '13px', marginBottom: '5px' }}>
                                    • Spam trigger words (+5 points)
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '13px', marginBottom: '5px' }}>
                                    • Money symbols (+2 points)
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '13px', marginBottom: '5px' }}>
                                    • Hidden text (+5 points)
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '13px', marginBottom: '5px' }}>
                                    • No unsubscribe link (+2 points)
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '13px', marginBottom: '5px' }}>
                                    • No physical address (+1 point)
                                </Text>
                                <Text style={{ color: '#856404', fontSize: '14px', fontWeight: 'bold' as const, marginTop: '10px' }}>
                                    Score over 5.0 = SPAM! (This email would score 20+)
                                </Text>
                            </Section>
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default ProblematicEmail;

// Styles with compatibility issues
const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '600px',
};

const article = {
    padding: '20px',
};

// ⚠️ Flexbox doesn't work reliably
const flexContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
};

const flexItem = {
    flex: '1',
    padding: '10px',
    backgroundColor: '#f0f0f0',
};

// ⚠️ CSS Grid doesn't work in emails
const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
};

const button = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const input = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '100%',
};

// ⚠️ Position absolute doesn't work reliably
const absolutePosition = {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    backgroundColor: 'red',
    color: 'white',
    padding: '5px',
};

// ⚠️ Animations don't work in emails
const animatedBox = {
    padding: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    transition: 'all 0.3s ease',
    animation: 'slideIn 1s ease-out',
};

// ⚠️ Background images on divs have limited support
const backgroundImage = {
    backgroundImage: 'url(https://example.com/background.jpg)',
    backgroundSize: 'cover',
    padding: '40px',
    minHeight: '200px',
};

// ⚠️ Hover effects don't work in emails
const hoverEffect = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    transition: 'background-color 0.3s',
};

// Styles for linter issues section
const h3 = {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    marginTop: '20px',
    marginBottom: '10px',
    color: '#d00',
};

const issueText = {
    fontSize: '14px',
    color: '#666',
    fontStyle: 'italic' as const,
    marginBottom: '20px',
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '4px',
    display: 'inline-block',
    textDecoration: 'none',
};

const buttonLikeLink = {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    display: 'inline-block',
};

# Spam Filter Triggers Guide

This guide documents all the spam filter triggers intentionally included in `problematic.tsx` (Part 3). These patterns will cause emails to be flagged by spam filters like SpamAssassin, Gmail, Outlook, and others.

## Overview

Spam filters use sophisticated algorithms to detect unwanted emails. They assign "spam scores" based on various patterns, and emails exceeding a threshold are marked as spam or rejected entirely. The `problematic.tsx` template includes 20+ spam triggers to demonstrate what to avoid.

## Spam Scoring Systems

- **SpamAssassin**: Most common open-source spam filter (used by React Email's linter)
  - Scores above 5.0 = likely spam
  - Scores above 10.0 = almost certainly spam
- **Gmail/Outlook**: Proprietary algorithms with similar pattern detection
- **ISP Filters**: Additional filtering at email provider level

## Part 3: Spam Filter Triggers in problematic.tsx

### 1. ALL CAPS Text
**Issue**: Excessive use of capital letters suggests shouting or urgency tactics.

```tsx
<Heading as="h1">CONGRATULATIONS!!!</Heading>
<Text>YOU ARE A WINNER!!!</Text>
<Text>ACT NOW BEFORE IT'S TOO LATE!!!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `UPPERCASE_50_75` (50-75% caps)
- SpamAssassin rule: `UPPERCASE_75_100` (75-100% caps)
- Increases spam score by 1.5-3.0 points

**How to Fix**:
- Use normal sentence case
- Limit capitals to proper nouns and acronyms
- Example: "Congratulations!" instead of "CONGRATULATIONS!!!"

### 2. Excessive Exclamation Marks
**Issue**: Multiple exclamation marks indicate desperation or deception.

```tsx
<Text>CLICK HERE NOW!!!!!!</Text>
<Text>LIMITED TIME OFFER!!!</Text>
<Text>DON'T MISS OUT!!!!!!!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `EXCUSE_REMOVE` (3+ exclamation marks)
- Indicates artificial urgency
- Increases spam score by 2.0+ points

**How to Fix**:
- Use single exclamation marks sparingly
- Let your content create urgency naturally
- Example: "Limited time offer" instead of "LIMITED TIME OFFER!!!"

### 3. Spam Trigger Words
**Issue**: Certain words are strongly associated with spam emails.

```tsx
<Text>This is 100% FREE and GUARANTEED to work!</Text>
<Text>You've WON our grand prize!</Text>
<Text>ACT NOW for this AMAZING opportunity!</Text>
<Text>RISK-FREE trial with INSTANT access!</Text>
<Text>Make $$$ FAST from home!</Text>
```

**Common Trigger Words**:
- **Money**: FREE, $$$$, CASH, MONEY, EARN, PROFIT, INCOME
- **Urgency**: ACT NOW, LIMITED TIME, EXPIRES, URGENT, HURRY
- **Guarantees**: GUARANTEED, 100%, RISK-FREE, NO RISK
- **Prizes**: WINNER, WON, CONGRATULATIONS, SELECTED
- **Superlatives**: AMAZING, INCREDIBLE, REVOLUTIONARY, BREAKTHROUGH

**SpamAssassin Rules Triggered**:
- `FREE_MONEY` (+2.5 points)
- `GUARANTEED_100_PERCENT` (+1.5 points)
- `URGENT_BUY` (+2.0 points)
- `YOU_WON` (+2.0 points)

**How to Fix**:
- Avoid spammy vocabulary entirely
- Use specific, factual language
- Example: "Try our service" instead of "FREE RISK-FREE GUARANTEED trial"

### 4. Multiple Dollar Signs
**Issue**: Repeated $ symbols suggest get-rich-quick schemes.

```tsx
<Text>Make $$$ FAST from home!</Text>
<Text>Earn $$$$ working part-time!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `MONEY_FORM` (+1.5 points)
- Associated with pyramid schemes and scams
- 3+ dollar signs = automatic red flag

**How to Fix**:
- Use actual dollar amounts: "$500" instead of "$$$"
- Avoid money symbols in subject lines
- Be specific about compensation

### 5. Hidden Text (White on White)
**Issue**: Hiding text to manipulate spam filters is a black-hat technique.

```tsx
<Text style={{ color: '#ffffff', backgroundColor: '#ffffff', fontSize: '1px' }}>
  spam filter bypass keywords hidden text
</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `INVISIBLE_TEXT` (+2.5 points)
- Indicates deliberate deception
- Major red flag for all spam filters

**How to Fix**:
- Never hide text from users
- All content should be visible
- Maintain reasonable text sizes (14px+ for body)

### 6. Suspicious Domains & URL Shorteners
**Issue**: Unknown domains and shortened URLs hide the true destination.

```tsx
<Link href="http://bit.ly/get-rich-quick">Click here!</Link>
<Link href="http://suspicious-domain-12345.com">Learn more</Link>
<Link href="http://free-money-now.biz">Claim prize</Link>
```

**Why It's Flagged**:
- SpamAssassin rule: `SHORT_URL` (+1.0 points)
- SpamAssassin rule: `SUSPICIOUS_TLD` (.biz, .info often flagged)
- Phishing risk: hides true destination
- Too many external domains = link farm

**How to Fix**:
- Use your own domain consistently
- Avoid URL shorteners (bit.ly, tinyurl, etc.)
- Use HTTPS, not HTTP
- Limit links to 2-3 different domains max

### 7. False Urgency & Pressure Tactics
**Issue**: Creating artificial scarcity to pressure users.

```tsx
<Text>URGENT: Your account will be closed in 24 hours!</Text>
<Text>FINAL WARNING: Click now or lose access forever!</Text>
<Text>Only 3 spots left! Act in the next 10 minutes!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `URGENT_ACTION_REQUIRED` (+2.0 points)
- Common phishing tactic
- Suggests scam or deception

**How to Fix**:
- Be honest about deadlines
- Provide specific dates, not countdowns
- Example: "Sale ends December 31" instead of "ONLY 24 HOURS LEFT!"

### 8. Phishing-Like Requests
**Issue**: Asking for sensitive information via email.

```tsx
<Text>Verify your account by providing:</Text>
<Text>- Social Security Number</Text>
<Text>- Credit card details</Text>
<Text>- Bank account information</Text>
<Text>Click here to update your password immediately!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `PHISHING_ATTEMPT` (+3.0 points)
- Major security risk
- Legitimate companies never request this via email

**How to Fix**:
- Never request sensitive info via email
- Link to secure web forms on your domain
- Use account-specific authentication flows

### 9. Missing Unsubscribe Link
**Issue**: CAN-SPAM Act requires clear opt-out mechanism.

```tsx
{/* NO unsubscribe link present */}
```

**Why It's Flagged**:
- SpamAssassin rule: `MISSING_UNSUBSCRIBE` (+2.0 points)
- **Legal violation**: CAN-SPAM Act (US), GDPR (EU)
- ISPs may block emails without unsubscribe

**How to Fix**:
```tsx
<Text style={{ fontSize: '12px', color: '#666' }}>
  Don't want these emails? 
  <Link href="https://yoursite.com/unsubscribe">Unsubscribe here</Link>
</Text>
```

**Legal Requirements**:
- Must be clearly visible and easy to find
- Must process unsubscribe requests within 10 business days
- Cannot require login to unsubscribe
- Must honor opt-out for at least 60 days

### 10. Missing Physical Address
**Issue**: CAN-SPAM Act requires valid postal address.

```tsx
{/* NO physical address present */}
```

**Why It's Flagged**:
- SpamAssassin rule: `MISSING_MAILING_ADDRESS` (+1.5 points)
- **Legal violation**: Required by CAN-SPAM Act
- Suggests sender is hiding identity

**How to Fix**:
```tsx
<Text style={{ fontSize: '12px', color: '#666' }}>
  Company Name, Inc.<br />
  123 Main Street, Suite 100<br />
  San Francisco, CA 94102<br />
  United States
</Text>
```

**Legal Requirements**:
- Must be valid physical postal address
- Can be street address or P.O. box registered with USPS
- Must be address where business operates or receives postal mail

### 11. Poor Spelling & Grammar
**Issue**: Typos and errors suggest unprofessional or automated spam.

```tsx
<Text>Congradulations on you're amazing oportunity!</Text>
<Text>This is an limited time offerr for you.</Text>
<Text>Dont loose out on this increadible deal!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `MISSPELLED_WORDS` (+1.0 points)
- Multiple errors compound the score
- Suggests low-quality automated content

**How to Fix**:
- Use spell checkers and grammar tools
- Have multiple people proofread
- Use professional copywriting

### 12. Excessive Punctuation
**Issue**: Overuse of multiple punctuation marks.

```tsx
<Text>What are you waiting for???!!!</Text>
<Text>Don't miss out?!?!?!</Text>
<Text>Act now!!!???!!!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `SUBJ_ILLEGAL_CHARS` (+1.5 points)
- Mixing punctuation types = desperation
- Unprofessional appearance

**How to Fix**:
- Use single punctuation marks
- Never mix question marks and exclamation marks
- Example: "What are you waiting for?" instead of "What are you waiting for???!!!"

### 13. Too Many Links to Different Domains
**Issue**: Links pointing to multiple unrelated domains.

```tsx
<Link href="http://domain1.com">Link 1</Link>
<Link href="http://domain2.net">Link 2</Link>
<Link href="http://domain3.org">Link 3</Link>
<Link href="http://domain4.biz">Link 4</Link>
<Link href="http://domain5.info">Link 5</Link>
```

**Why It's Flagged**:
- SpamAssassin rule: `MANY_DIFFERENT_DOMAINS` (+2.0 points)
- Suggests link farm or affiliate spam
- 5+ different domains = major red flag

**How to Fix**:
- Keep all links within your domain
- If linking externally, limit to 1-2 trusted domains
- Use tracking parameters instead of different domains

### 14. Prize/Lottery Scam Language
**Issue**: Language suggesting user won something they didn't enter.

```tsx
<Text>YOU'VE BEEN SELECTED as our GRAND PRIZE WINNER!</Text>
<Text>Claim your $10,000 prize NOW!</Text>
<Text>You're one of only 5 winners chosen today!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `LOTTERY_SCAM` (+3.5 points)
- SpamAssassin rule: `YOU_ARE_WINNER` (+2.5 points)
- Classic fraud pattern

**How to Fix**:
- Only notify people who actually entered contests
- Be specific about what contest/promotion
- Example: "Thanks for entering our December giveaway. You won!"

### 15. Get-Rich-Quick Schemes
**Issue**: Promises of easy money with no work.

```tsx
<Text>Make $5000/week working from home!</Text>
<Text>No experience needed! Start earning TODAY!</Text>
<Text>Financial freedom in just 30 days!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `WORK_FROM_HOME` (+2.0 points)
- SpamAssassin rule: `EASY_MONEY` (+2.5 points)
- Associated with MLM and pyramid schemes

**How to Fix**:
- Be realistic about income potential
- Describe actual job duties and requirements
- Avoid promising unrealistic results

### 16. Character Spacing to Avoid Filters
**Issue**: Adding spaces between letters to bypass word filters.

```tsx
<Text>F R E E   M O N E Y</Text>
<Text>C L I C K   H E R E</Text>
<Text>V I A G R A</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `OBFUSCATED_TEXT` (+3.0 points)
- Shows deliberate attempt to deceive filters
- Modern filters detect this easily

**How to Fix**:
- Write words normally
- Don't try to trick spam filters
- If a word triggers filters, use different vocabulary

### 17. Misleading Subject Lines
**Issue**: Subject line doesn't match email content (not directly in body, but related pattern).

```tsx
<Text>Re: Your order #12345</Text>
{/* But no actual order exists */}
```

**Why It's Flagged**:
- SpamAssassin rule: `FAKE_REPLY` (+1.5 points)
- SpamAssassin rule: `MISSING_SUBJECT_MATCH` (+1.0 points)
- Deceptive practice

**How to Fix**:
- Make subject line accurately describe content
- Don't use "Re:" unless actually replying
- Don't fake order confirmations

### 18. Attachments with Executable Files
**Issue**: Attachments that could contain malware (conceptual in HTML email).

```tsx
<Text>Download your prize: winner.exe</Text>
<Link href="http://suspicious.com/download.exe">Click to install</Link>
```

**Why It's Flagged**:
- SpamAssassin rule: `EXECUTABLE_LINK` (+3.0 points)
- Major security risk
- Often blocked by email gateways

**How to Fix**:
- Never send executable files via email
- Use secure download portals
- Provide installers in safe formats (.dmg, .pkg, through app stores)

### 19. Asking Users to Forward Email
**Issue**: Encouraging viral forwarding (chain letter pattern).

```tsx
<Text>Forward this to 10 friends to claim your bonus!</Text>
<Text>Share with everyone you know!</Text>
```

**Why It's Flagged**:
- SpamAssassin rule: `FORWARD_REQUEST` (+2.0 points)
- Chain letter/pyramid scheme pattern
- Violates most email policies

**How to Fix**:
- Provide social sharing buttons instead
- Don't incentivize forwarding
- Focus on organic sharing

### 20. Image-Only Emails (No Text)
**Issue**: Emails with only images and no readable text.

```tsx
{/* Email with large image and minimal text */}
<Img src="giant-promotion.jpg" alt="" width={600} height={800} />
```

**Why It's Flagged**:
- SpamAssassin rule: `IMAGE_ONLY_EMAIL` (+2.0 points)
- Used to bypass text-based filters
- Poor accessibility
- High spam score if image has no alt text

**How to Fix**:
- Include substantial text content
- Use images to complement text, not replace it
- Maintain 60/40 text-to-image ratio
- Always include descriptive alt text

## Cumulative Spam Score

The `problematic.tsx` template includes 20+ of these triggers, resulting in an estimated SpamAssassin score of:

**Total: 40-50+ points** (Spam threshold is typically 5.0)

## Testing Spam Scores

### Using React Email Preview
1. Start dev server: `pnpm dev`
2. Open http://localhost:9001
3. Select "problematic" template
4. Click "Spam" tab to see SpamAssassin score

### External Testing Tools
- **Mail-Tester.com**: Send test email, get spam score (free, 3 tests/day)
- **GlockApps**: Comprehensive inbox placement testing (paid)
- **Litmus**: Email testing suite with spam filter analysis (paid)

## Email Deliverability Best Practices

### Content Guidelines
1. **Use Natural Language**: Write like a human, not a marketer
2. **Be Specific**: Avoid vague claims and superlatives
3. **Maintain Ratio**: 60% text, 40% images
4. **Include Plain Text**: Send HTML + plain text versions
5. **Test Before Sending**: Use spam checkers on every campaign

### Technical Requirements
1. **SPF Record**: Authorize sending servers
2. **DKIM Signature**: Cryptographically sign emails
3. **DMARC Policy**: Define authentication handling
4. **Valid DNS**: Ensure domain records are correct
5. **Warm IP Address**: Gradually increase sending volume

### Legal Compliance
1. **CAN-SPAM (US)**:
   - Clear unsubscribe link
   - Physical postal address
   - Honor opt-outs within 10 days
   - Accurate from/subject lines

2. **GDPR (EU)**:
   - Explicit consent required
   - Clear privacy policy
   - Right to data deletion
   - Document consent records

3. **CASL (Canada)**:
   - Express or implied consent
   - Identification information
   - Unsubscribe mechanism
   - Two-year record keeping

### Sender Reputation
1. **Monitor Bounce Rates**: Keep below 5%
2. **Track Complaint Rates**: Keep below 0.1%
3. **Clean Your List**: Remove inactive subscribers
4. **Engagement Matters**: Opens/clicks improve reputation
5. **Avoid Spam Traps**: Never buy email lists

## Common Mistakes to Avoid

### Mistake #1: Using All Caps for Emphasis
❌ **Bad**: `IMPORTANT: Your account needs attention!`  
✅ **Good**: `Important: Action required for your account`

### Mistake #2: Creating False Urgency
❌ **Bad**: `LAST CHANCE! Offer expires in 3 hours!!!`  
✅ **Good**: `Sale ends December 31, 2025`

### Mistake #3: Vague Call-to-Action
❌ **Bad**: `Click here to learn more!`  
✅ **Good**: `View our new product features`

### Mistake #4: Too Many Exclamation Marks
❌ **Bad**: `Amazing deal!!! Don't miss out!!!`  
✅ **Good**: `Save 25% on your next purchase`

### Mistake #5: Requesting Sensitive Information
❌ **Bad**: `Verify your account by replying with your password`  
✅ **Good**: `Sign in to your account to update settings: [link]`

## Resources

### Tools
- [SpamAssassin](https://spamassassin.apache.org/) - Open-source spam filter
- [Mail-Tester](https://www.mail-tester.com/) - Free spam score testing
- [MXToolbox](https://mxtoolbox.com/) - DNS and blacklist checking

### Documentation
- [CAN-SPAM Act Compliance](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)
- [GDPR Email Marketing Requirements](https://gdpr.eu/email-marketing/)
- [React Email Best Practices](https://react.email/docs/introduction)

### Learning
- [Email on Acid Blog](https://www.emailonacid.com/blog/) - Email development tips
- [Litmus Community](https://litmus.com/community) - Email marketing community
- [Really Good Emails](https://reallygoodemails.com/) - Email design inspiration

## Conclusion

The spam triggers in `problematic.tsx` demonstrate patterns that will cause emails to be blocked or filtered. Modern spam filters are sophisticated and can detect these patterns easily. The key to good email deliverability is:

1. **Write naturally** - Avoid marketing hype and pressure tactics
2. **Be legitimate** - Follow legal requirements and best practices
3. **Build reputation** - Send quality content consistently
4. **Test thoroughly** - Check spam scores before sending campaigns
5. **Monitor metrics** - Track bounces, complaints, and engagement

Remember: If something feels "spammy" to you, it will feel spammy to filters too. When in doubt, write like you're emailing a colleague, not shouting at a stranger.

# Investor Landing Page Template
## For Entitled Land Development Projects

Use this template to build high-conversion investor landing pages like Vista Lake Estates.

---

## 📁 Project Structure

```
/[project-name]/
├── index.html          # Main single-page investor landing page
├── styles-v2.css       # All styling (copy from Vista Lake Estates)
├── script-v2.js        # Interactivity (copy from Vista Lake Estates)
├── images/             # Property photos, renderings, maps
│   ├── aerial.jpg          # Drone/satellite view
│   ├── site-overlay.jpg    # Current site with boundaries
│   ├── future-rendering.jpg # Vision rendering with homes
│   └── [other images]
├── video/              # Video assets
│   └── pitch-video.mov
├── documents/          # PDFs for data room
│   ├── title-report.pdf
│   ├── vesting-map.pdf
│   ├── financial-model.xlsx
│   └── [other docs]
└── README.md
```

---

## 🎨 Design System (Copy These)

### Color Palette
```css
:root {
    /* Primary - Trust & Stability */
    --navy-900: #0a1628;
    --navy-800: #0f2240;
    --navy-700: #1e3a5f;
    --navy-600: #2a4a72;
    
    /* Secondary - Premium & Luxury */
    --gold-500: #c9a961;
    --gold-400: #d4ba7a;
    
    /* Status Colors */
    --green-500: #2ecc71;   /* Verified/Confirmed */
    --amber-500: #f39c12;   /* In Progress */
    --red-500: #e74c3c;     /* Pending/Alert */
    --slate-500: #64748b;   /* Neutral */
}
```

### Typography
```css
/* Fonts to import from Google Fonts */
--font-display: 'Playfair Display', Georgia, serif;  /* Headings */
--font-body: 'Inter', -apple-system, sans-serif;     /* Body text */
--font-mono: 'JetBrains Mono', monospace;            /* Numbers/Data */
```

### Status Badges
```html
<!-- Verified -->
<span class="badge badge-verified"><i class="fas fa-check"></i> Verified</span>

<!-- In Progress -->
<span class="badge badge-progress"><i class="fas fa-clock"></i> In Progress</span>

<!-- Pending -->
<span class="badge badge-pending"><i class="fas fa-exclamation-triangle"></i> Pending</span>
```

---

## 📐 Page Architecture

### Section Order (Single-Page Scroll)

| # | Section | Purpose | User Question Answered |
|---|---------|---------|------------------------|
| 1 | **Hero** | Property intro, 30-second pitch | "What am I buying?" |
| 2 | **Video Pitch** | Embedded investor pitch video | Visual credibility |
| 3 | **Scarcity/Scale/Status** | Wow factor, unique positioning | "Why is this rare?" |
| 4 | **Deal Details** | Expandable tabs with deep info | Property, Entitlements, Location |
| 5 | **Returns** | Strategy comparison, IRR, multiples | "How much will I make?" |
| 6 | **Timeline** | 90-day plan, phases, milestones | "When do I get paid?" |
| 7 | **Why This Deal** | Risk analysis, comparisons | "Why not alternatives?" |
| 8 | **Data Room** | Email-gated document downloads | Due diligence |
| 9 | **Contact/CTA** | Schedule call, invest buttons | Conversion |

---

## 📝 Data Collection Checklist

### Property Details
- [ ] Project Name
- [ ] Full Address (Street, City, County, State, ZIP)
- [ ] Total Acreage (verified from assessor)
- [ ] APN Number(s)
- [ ] Lot Count
- [ ] Current Owner Name & Contact
- [ ] Zoning Designation
- [ ] General Plan Designation

### Entitlements
- [ ] Map Type (Vesting Tentative Map, Tentative Map, etc.)
- [ ] Map/File Number (e.g., PLN14-00221)
- [ ] Original Approval Date
- [ ] Extension History (all dates)
- [ ] Current Expiration Date
- [ ] Conditions of Approval (summary)
- [ ] Any pending modifications

### CEQA (Environmental)
- [ ] Document Type (MND, Categorical Exemption, EIR)
- [ ] State Clearinghouse Number
- [ ] Adoption Date
- [ ] Lead Agency
- [ ] Review Period Dates
- [ ] Key Mitigation Measures
- [ ] Reviewing State Agencies

### Market Data
- [ ] 3-5 Comparable Lot Sales (address, size, price, date)
- [ ] 3-5 Comparable Home Sales (address, size, price, date)
- [ ] Target Lot Price Range
- [ ] Target Home Price Range
- [ ] Absorption Rate (lots/year)
- [ ] Days on Market (DOM) averages

### Fee Schedule
- [ ] Sewer Connection/EDU Fees
- [ ] Water Connection Fees
- [ ] Fire Infrastructure Fees
- [ ] School Impact Fees
- [ ] Park Impact Fees
- [ ] Traffic Impact Fees
- [ ] Environmental (PCCP, etc.) Fees
- [ ] Total "Paper Costs" per Lot

### Capital Stack
- [ ] Purchase Price
- [ ] Horizontal Improvement Costs
- [ ] Soft Costs (engineering, legal, etc.)
- [ ] Interest Reserve
- [ ] Contingency
- [ ] Total Project Cost
- [ ] Equity Required
- [ ] Debt (if any)

### Returns (Per Strategy)
- [ ] Strategy A Name & Description
  - [ ] Equity Required
  - [ ] Target Multiple
  - [ ] Target IRR (range)
  - [ ] Timeline to Exit
- [ ] Strategy B Name & Description
  - [ ] Equity Required
  - [ ] Target Multiple
  - [ ] Target IRR (range)
  - [ ] Timeline to Exit
- [ ] Downside/Base/Upside Scenarios

### Unique Selling Points
- [ ] Scarcity Factor (what makes it rare?)
- [ ] Scale Factor (capital deployment opportunity)
- [ ] Status Factor (who is this for?)
- [ ] Location Premium (adjacent to what?)
- [ ] Entitlement Value (years/cost saved)
- [ ] Tax Benefits (passive losses, 1031, etc.)

### Team & Partners
- [ ] Developer/Sponsor
- [ ] Civil Engineer
- [ ] Builder Partner(s)
- [ ] Broker/Sales
- [ ] Legal Counsel
- [ ] Title Company

### Assets Needed
- [ ] Aerial/drone photo
- [ ] Site boundary overlay map
- [ ] Future vision rendering
- [ ] Pitch video (YouTube preferred)
- [ ] Title Report PDF
- [ ] Vesting Map PDF
- [ ] CEQA Document PDF
- [ ] Financial Model (Excel)
- [ ] Engineering ROM PDF

---

## 📋 Prompt Template

Copy and fill in for your next project:

```
PROJECT: [PROJECT NAME] Investor Landing Page

=== PROPERTY DETAILS ===
Project Name: [NAME]
Address: [FULL ADDRESS]
County: [COUNTY], [STATE]
Total Acreage: [X.XX] acres (verified)
APN(s): [XXX-XXX-XXX-XXX], [XXX-XXX-XXX-XXX]
Lot Count: [X] lots
Lot Size Range: [X.X] - [X.X] acres
Current Owner: [OWNER NAME]
Owner Address: [ADDRESS]
Zoning: [ZONING CODE - DESCRIPTION]

=== ENTITLEMENTS ===
Map Type: [Vesting Tentative Map / Tentative Map]
Map Number: [PLN-XX-XXXXX or FILE NUMBER]
Original Approval Date: [MONTH DD, YYYY]
Extension 1: [MONTH DD, YYYY]
Extension 2: [MONTH DD, YYYY]
Extension 3: [MONTH DD, YYYY]
Current Expiration: [MONTH DD, YYYY]
Approving Body: [Planning Commission / Board of Supervisors]

=== CEQA ENVIRONMENTAL ===
Document Type: [Mitigated Negative Declaration / Categorical Exemption / EIR]
State Clearinghouse #: [XXXXXXXXXX]
Adoption Date: [MONTH DD, YYYY]
Lead Agency: [AGENCY NAME]
Key Finding: [e.g., "No significant environmental impacts with mitigation"]

=== INVESTMENT STRUCTURE ===

Strategy A - [LOT SALES / WHOLESALE]:
- Equity Required: $[X.X]M
- Target Multiple: [X.Xx]
- Target IRR: [XX-XX]%
- Timeline: [XX-XX] months
- Exit: [Sell finished lots to builders]

Strategy B - [VERTICAL BUILD / JV / FULL BUILD]:
- Equity Required: $[X.X]M
- Target Multiple: [X.Xx]
- Target IRR: [XX-XX]%
- Timeline: [XX-XX] months
- Exit: [Sell completed homes to end buyers]

=== CAPITAL STACK ===
Purchase Price: $[X,XXX,XXX]
Horizontal Improvements: $[X,XXX,XXX]
Soft Costs: $[XXX,XXX]
Interest Reserve: $[XXX,XXX]
Contingency: $[XXX,XXX]
---
Total Project Cost: $[X,XXX,XXX]
Equity Required: $[X,XXX,XXX]
Debt: $[X,XXX,XXX] (if any)

=== MARKET DATA ===

Comparable Lot Sales:
1. [ADDRESS] - [X.XX] acres - $[XXX,XXX] - [DATE]
2. [ADDRESS] - [X.XX] acres - $[XXX,XXX] - [DATE]
3. [ADDRESS] - [X.XX] acres - $[XXX,XXX] - [DATE]

Comparable Home Sales:
1. [ADDRESS] - [X,XXX] SF - $[X,XXX,XXX] - [DATE]
2. [ADDRESS] - [X,XXX] SF - $[X,XXX,XXX] - [DATE]
3. [ADDRESS] - [X,XXX] SF - $[X,XXX,XXX] - [DATE]

Target Lot Price: $[XXX,XXX] - $[XXX,XXX]
Target Home Price: $[X.X]M - $[X.X]M
Absorption Rate: [X-X] lots/year

=== FEE SCHEDULE (Per Lot) ===
Sewer (EDU): $[XX,XXX]
Water Connection: $[XX,XXX]
Fire Infrastructure: $[XX,XXX]
School Impact: $[X,XXX]
Park Impact: $[X,XXX]
Traffic Impact: $[X,XXX]
Environmental (PCCP, etc.): $[X,XXX]
---
Total Paper Costs: $[XX,XXX] - $[XX,XXX] per lot

=== UNIQUE SELLING POINTS ===

Scarcity:
- [Why is this rare? e.g., "Last 35+ acre parcel in [AREA]"]
- [Build-out percentage, e.g., "95% built out"]

Scale:
- [Capital deployment, e.g., "$5M-$15M deployment opportunity"]
- [Control factor, e.g., "Control entire 15-home community"]

Status:
- [Target buyer, e.g., "UHNW families, multi-generational compounds"]
- [Adjacent prestige, e.g., "Adjacent to $2-4M Los Lagos estates"]

Differentiation:
- [Why this vs. alternatives?]
- [Tax benefits available]

=== TEAM ===
Developer/Sponsor: [NAME] - [COMPANY]
Civil Engineer: [NAME] - [COMPANY]
Builder Partner: [NAME] - [COMPANY]
Broker: [NAME] - [COMPANY]
Legal: [NAME] - [FIRM]

=== ASSETS PROVIDED ===
- [ ] Aerial photo: [FILENAME]
- [ ] Site overlay map: [FILENAME]
- [ ] Future rendering: [FILENAME]
- [ ] Pitch video: [YOUTUBE LINK or FILENAME]
- [ ] Title report: [FILENAME]
- [ ] Vesting map: [FILENAME]
- [ ] Financial model: [FILENAME]

=== BUILD REQUIREMENTS ===
- Single-page investor landing page
- Copy styles from Vista Lake Estates (styles-v2.css)
- Copy interactivity from Vista Lake Estates (script-v2.js)
- Expandable tabs for detailed content
- Status badges (verified/pending/in-progress)
- Two investment strategy comparison
- Email-gated data room
- Embedded pitch video (YouTube)
- Mobile responsive
- LOCAL PREVIEW BEFORE PUSHING LIVE
```

---

## 🚀 Deployment Checklist

### Before Going Live
- [ ] All data verified and sourced
- [ ] Images optimized (< 200KB each, WebP if possible)
- [ ] Video embedded and playing
- [ ] All links working
- [ ] Mobile responsive tested
- [ ] Page speed checked (target 90+ on PageSpeed Insights)
- [ ] Email capture working (Formspree, Mailchimp, etc.)
- [ ] Legal disclaimer present
- [ ] Contact info correct

### Local Preview
```bash
cd "/path/to/project"
python3 -m http.server 8080
# Open http://localhost:8080
```

### Push to GitHub Pages
```bash
git add -A
git commit -m "Initial investor landing page"
git push origin main
# Enable GitHub Pages in repo settings
```

---

## 📚 Reference Files (From Vista Lake Estates)

Copy these files as your starting point:
- `styles-v2.css` - Full design system (3,600+ lines)
- `script-v2.js` - All interactivity (tabs, accordions, gates)
- `index.html` - Page structure template

---

## 💡 Tips for High Conversion

1. **Answer the 4 questions immediately:**
   - What am I buying?
   - How much does it cost?
   - When do I get my money back?
   - Why this vs alternatives?

2. **Use status badges liberally** - Shows due diligence progress

3. **Keep hero scannable** - 30 seconds to understand the deal

4. **Gate the data room** - Captures leads, filters serious investors

5. **Include video** - 3x more engagement than text alone

6. **Show comparables** - Validates pricing thesis

7. **Highlight scarcity** - FOMO drives action

8. **Mobile-first** - 60%+ will view on phone

---

*Template created from Vista Lake Estates project - January 2026*



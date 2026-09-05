# Riverside Community Centre: Accessible Web Application

A fully accessible, multi-page community centre website prototype built to demonstrate **WCAG 2.2 Level AA compliance**. This project was developed as part of an academic dissertation exploring systematic approaches to web accessibility.

---

## Project Overview

The Riverside Community Centre website serves as a functional prototype that showcases comprehensive accessibility implementation across five interconnected pages. The prototype achieves:

- ✅ **100% WCAG 2.2 Level AA compliance** (26 defined requirements)
- ✅ **98.2 Lighthouse accessibility score**
- ✅ **0.41s page load time**
- ✅ Full keyboard navigation support
- ✅ NVDA screen reader compatibility
- ✅ High contrast mode & adjustable font sizing

---

## File Structure

```
/
├── index.html       # Home page: hero section, feature cards, CTAs
├── about.html       # About Us page: organisation background and values
├── services.html    # Programs & Services: full service listings
├── form.html        # Registration/Membership form
├── contact.html     # Contact page: address, phone, email, map
└── README.md        # Project documentation (this file)
```

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Welcome hero, feature cards (Fitness, Arts, Youth, Seniors, Events, Support), membership CTA |
| About Us | `about.html` | Organisation mission, history, and community values |
| Programs & Services | `services.html` | Detailed service listings across all programme areas |
| Register | `form.html` | Accessible membership/programme registration form |
| Contact | `contact.html` | Contact details, opening hours, and enquiry options |

---

## Accessibility Features

### Keyboard & Navigation
- **Skip navigation link**: allows keyboard users to bypass repeated navigation and jump directly to main content
- **Logical tab order**: all interactive elements follow a natural, sequential focus order
- **Visible focus indicators**: 3px solid outline on all focusable elements, with sufficient colour contrast

### Screen Reader Support
- Semantic HTML5 landmark regions (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA roles and labels on all interactive components
- `aria-current="page"` on active navigation link
- `aria-live` announcement region for dynamic content changes (font size, theme toggle)
- `aria-pressed` state on toggle buttons

### Visual Accessibility
- **High contrast mode**: toggleable theme switching between standard and high-contrast colour schemes (black/white/yellow)
- **Adjustable font size**: A−, A, A+ controls ranging from 12px to 24px
- User preferences persisted via `localStorage`
- Minimum 4.5:1 colour contrast ratio for normal text; 3:1 for large text

### Responsive Design
- Fluid grid layouts using CSS Grid and Flexbox
- Mobile-first breakpoints (collapses at ≤768px)
- Touch-friendly target sizes (minimum 44×44px for all interactive elements)

### Forms
- Explicit `<label>` elements associated with every input
- Descriptive error messages linked via `aria-describedby`
- Required field indicators with accessible text alternatives

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic page structure and landmark regions |
| CSS3 | Custom properties (variables), Grid, Flexbox, responsive design |
| Vanilla JavaScript | Accessibility controls, localStorage preferences, ARIA updates |

No external frameworks or libraries are used. The site runs as static HTML with zero build dependencies.

---

## Getting Started

### Running Locally

1. Clone or download the repository
2. Open any `.html` file directly in a modern browser,  no server required
3. Navigate to `http://localhost:8000` (if using a local server) or open `index.html` directly

### Browser Compatibility

Tested and confirmed working in:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (latest)

---

## Testing & Evaluation

Accessibility was validated using a combination of automated and manual testing methods:

| Tool | Type | Result |
|------|------|--------|
| Lighthouse (Chrome DevTools) | Automated | 98.2 / 100 |
| axe DevTools | Automated | 0 violations |
| NVDA Screen Reader | Manual | Fully navigable |
| Keyboard-only navigation | Manual | All content reachable |
| Colour contrast analyser | Manual | All text passes AA |

---

## Academic Context

This prototype was developed as part of a dissertation titled:

> *"Enhancing Web Accessibility Through Inclusive Design: A Systematic Approach to WCAG 2.2 Level AA Compliance"*

The project demonstrates that full WCAG 2.2 Level AA compliance is achievable in a real-world community website context through systematic implementation of accessibility guidelines, without sacrificing usability or visual design quality.

---

## Prototype Contact Details (Fictional)

> **Riverside Community Centre**  
> 123 Community Way, Riverside, RC1 2AB  
> Phone: 01234 567890  
> Email: info@riverside-cc.org.uk  
> Hours: Mon–Sat 7am–10pm | Sun 9am–6pm

---

## Licence

This project is submitted for academic purposes. All code is original work unless otherwise attributed.

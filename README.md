# Riverside Community Centre: Accessible Web Application

A multi-page community centre website prototype built to WCAG 2.2 Level AA. This project was developed as part of an academic dissertation exploring systematic approaches to web accessibility.

**Live site:** https://olaiya-sola.github.io/riverside_community_centre/
**Author:** Sola Olaiya

## Project Overview

The Riverside Community Centre website is a functional prototype demonstrating accessibility implementation across five interconnected pages. Features include:

- WCAG 2.2 Level AA as the design target, across 26 defined requirements
- Full keyboard navigation support
- NVDA screen reader compatibility
- High contrast mode and adjustable font sizing

## File Structure

```
index.html       Home page: hero section, feature cards, CTAs
about.html       About Us page: organisation background and values
services.html    Programs and Services: full service listings
form.html        Registration/Membership form
contact.html     Contact page: address, phone, email, map
css/             Stylesheets
scripts/         JavaScript
README.md        Project documentation (this file)
```

Note: index.html carries its CSS and JavaScript inline; the other pages link to
files in css/ and scripts/. Verify this against your own files and describe the
split accurately, or make all five pages consistent.

## Pages

| Page | File | Description |
|-|-|-|
| Home | `index.html` | Welcome hero, feature cards (Fitness, Arts, Youth, Seniors, Events, Support), membership CTA |
| About Us | `about.html` | Organisation mission, history, and community values |
| Programs and Services | `services.html` | Detailed service listings across all programme areas |
| Register | `form.html` | Accessible membership/programme registration form |
| Contact | `contact.html` | Contact details, opening hours, and enquiry options |

## Accessibility Features

### Keyboard and Navigation
- **Skip navigation link**: allows keyboard users to bypass repeated navigation and jump directly to main content
- **Logical tab order**: all interactive elements follow a natural, sequential focus order
- **Visible focus indicators**: 3px solid outline on all focusable elements, with sufficient colour contrast

### Screen Reader Support
- Semantic HTML5 landmark regions (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA roles and labels on interactive components
- `aria-current="page"` on the active navigation link
- `aria-live` announcement region for dynamic changes (font size, theme toggle)
- `aria-pressed` state on toggle buttons

### Visual Accessibility
- **High contrast mode**: toggleable theme switching between standard and high contrast colour schemes (black, white, yellow)
- **Adjustable font size**: A-, A, A+ controls ranging from 12px to 24px
- User preferences persisted via `localStorage`
- Minimum 4.5:1 colour contrast ratio for normal text; 3:1 for large text

### Responsive Design
- Fluid grid layouts using CSS Grid and Flexbox
- Mobile-first breakpoints (collapses at 768px and below)
- Buttons and links meet a 44x44px minimum target size. Native radios and
  checkboxes render at 20x20px and satisfy WCAG 2.5.8 through the spacing
  exception, with the associated label extending the effective target.

### Forms
- Explicit `<label>` elements associated with every input
- Descriptive error messages linked via `aria-describedby`
- Required field indicators with accessible text alternatives

## Technologies Used

| Technology | Purpose |
|-|-|
| HTML5 | Semantic page structure and landmark regions |
| CSS3 | Custom properties (variables), Grid, Flexbox, responsive design |
| Vanilla JavaScript | Accessibility controls, localStorage preferences, ARIA updates |

No external frameworks or libraries are used. The site runs as static HTML with
zero build dependencies.

## Getting Started

Clone or download the repository and open `index.html` in a modern browser.
There is nothing to install and no build step.

The preference-saving features rely on `localStorage`, which some browsers
restrict under the `file://` protocol. If your font size or theme choices do not
persist between pages, serve the folder over HTTP instead. Any static server
will do, for example the Live Server extension in VS Code, or a one line server
from a terminal in the project folder:

```
python3 -m http.server        # macOS, Linux
py -m http.server             # Windows
npx serve                     # if you have Node installed
```

Each prints the address to open, usually on port 8000 or 3000. The live site
linked at the top of this file is served over HTTPS, so preferences persist
there without any of this.

### Browser Compatibility

Tested in current versions of Google Chrome, Mozilla Firefox, Microsoft Edge and
Safari.

## Testing and Evaluation

Accessibility was assessed using a combination of automated and manual methods:

| Tool | Type |
|-|-|
| Lighthouse (Chrome DevTools) | Automated |
| axe DevTools | Automated |
| WAVE | Automated |
| W3C HTML and CSS validators | Automated |
| NVDA screen reader | Manual |
| Keyboard-only navigation | Manual |
| WebAIM Contrast Checker | Manual |

Results are recorded in the project report.

## Academic Context

This prototype was developed as part of a dissertation titled:

> *"Enhancing Web Accessibility Through Inclusive Design: A Systematic Approach
> to WCAG 2.2 Level AA Compliance"*

## Prototype Contact Details (Fictional)

> **Riverside Community Centre**
> 123 Community Way, Riverside, RC1 2AB
> Phone: 01234 567890
> Email: info@riversidecc.org
> Hours: Monday to Saturday 7am to 10pm, Sunday 9am to 6pm

## Licence

This project is submitted for academic purposes.

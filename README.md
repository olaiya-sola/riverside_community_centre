# Riverside Community Centre: an accessible community centre website

An accessible website built to WCAG 2.2 Level AA, developed as the practical
artefact for the project *Enhancing Web Accessibility Through Inclusive Design*.

**Live site:** https://olaiya-sola.github.io/riverside_community_centre/
**Author:** Sola Olaiya


## About the site

Riverside Community Centre is a fictional neighbourhood community centre used as
the subject for this artefact. A community centre was chosen because its
audience is unusually broad (older residents, disabled residents, parents,
children, and people with limited digital confidence), so accessibility is a
functional requirement of the service rather than a compliance exercise.

Five pages:

| File | Page | Purpose |
|-|-|-|
| `index.html` | Home | Introduces the centre and the week's programmes |
| `about.html` | About us | Background, and the design decisions behind the site |
| `services.html` | Programs and services | Programme listings with access information |
| `form.html` | Register | Registration form with accessible validation |
| `contact.html` | Contact | Contact routes, opening hours, and access on arrival |

## Built with

HTML5, CSS3, and vanilla JavaScript. No frameworks, no build step, and no
third-party requests. Each page is self-contained so that its accessibility
features keep working if any external resource fails.

## Accessibility features

- Skip link as the first focusable element
- Semantic HTML5 landmarks with ARIA roles retained for older assistive technology
- Current page marked with `aria-current="page"` and a non-colour visual indicator
- Text size control, persisted across pages and visits
- Light, dark, and high contrast themes
- Visible focus indicators throughout
- Registration form with visible labels, hints wired through `aria-describedby`,
  `autocomplete` tokens, and an error summary that links to each field
- Responsive down to 320px with no horizontal scrolling
- `prefers-reduced-motion` respected

## Running it locally

Clone the repository and open `index.html` in a browser. There is nothing to
install and no build step.

The preference-saving features rely on `localStorage`, which some browsers
restrict under the `file://` protocol. If your text size, theme or spacing
choices do not persist between pages, serve the folder over HTTP instead. Any
static server will do, for example the Live Server extension in VS Code, or a
one line server from a terminal in the project folder:

```
python3 -m http.server        # macOS, Linux
py -m http.server             # Windows
npx serve                     # if you have Node installed
```

Each prints the address to open, usually on port 8000 or 3000. The live site
linked at the top of this file is served over HTTPS, so preferences persist
there without any of this.

## Testing

| Tool | What it covers |
|-|-|
| W3C HTML and CSS validators | Markup and stylesheet conformance |
| Lighthouse | Automated accessibility, performance, best practices |
| axe DevTools | Automated WCAG rule checks |
| WAVE | Structural and contrast review |
| WebAIM Contrast Checker | Text and non-text contrast ratios |
| NVDA | Screen reader announcements, headings, landmarks, form errors |
| Keyboard-only navigation | Tab order, focus visibility, no keyboard traps |

Results are recorded in the project report.

## Repository structure

```
index.html        Home
about.html        About us
services.html     Programs and services
form.html         Registration form
contact.html      Contact
```

Five files, nothing else. The CSS and JavaScript are inline in each page rather
than in separate stylesheets and scripts. This is a deliberate trade-off. It
duplicates code across the pages, but it means each page is a single
self-contained file whose accessibility features cannot be broken by a missing
or failed external request, and it removes every network dependency from the
critical path. For a five-page site with no build step the duplication is
manageable; at a larger scale shared files would be the better choice.

## Known limitations

- The site is a prototype: form submissions are handled client-side and are not
  sent anywhere or stored.
- Content is illustrative. The centre, its programmes, and its contact details
  are fictional.
- Evaluation was carried out against the WCAG 2.2 standard using assistive
  technology and automated tooling. No usability testing with disabled
  participants was conducted; this is a stated limitation of the project.

## Licence

Released under the MIT Licence.

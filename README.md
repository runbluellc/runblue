# Runblue LLC — Corporate Website

Corporate website for **Runblue LLC**, a U.S.-based company focused on the e-commerce distribution of dietary supplements. Positioning is compliance-friendly and aligned with U.S. supplement marketplace standards.

## Repository contents

| File / folder       | Description |
|---------------------|-------------|
| `index.html`        | Homepage (Hero, products, commitments, intended consumers, mission, CTA, contact) and full About Us page |
| `cookie-policy.html`  | Cookie policy |
| `privacy-policy.html` | Privacy policy |
| `styles.css`        | Global styles: graphite/light gray palette, serif/sans typography, dark mode, responsive, accessibility |
| `script.js`         | Page navigation (Home / About Us), dark mode, loading screen, anchor scrolling |
| `cookie-consent.js` | Cookie consent (GDPR/LGPD compliant) |
| `assets/`           | Static assets |

## Local preview

The site is static. You can open `index.html` in a browser or serve the project folder with a local server. After starting the server, open `http://localhost:8000` (or the port shown) in your browser.

**Examples:**

```bash
# Python 3
python3 -m http.server 8000

# Node (npx)
npx serve .
```

## Tech stack

- Semantic HTML5, accessible (ARIA, skip link, focus-visible)
- CSS custom properties (colors, typography, spacing, radius, shadows)
- Vanilla JavaScript for navigation, theme toggle, and cookies
- No external dependencies for core site behavior

## Audience

- General adult consumers in the United States  
- People looking for convenient nutritional support  
- Customers purchasing through Amazon marketplace  

## Page structure

- **Home:** Hero → About products → Featured product → Commitments → Intended consumers → Mission → CTA → Contact.
- **About Us:** Company overview → Business model → Quality/regulatory approach → Market focus → Vision → Contact.

## Brand

- **Tone:** Professional, trustworthy, compliance-friendly, clear and concise.
- **Colors:** Graphite black, light gray, subtle accent (slate/gray).
- **Contact:** info@runbluellc.com · United States

---

© Runblue LLC. This repository describes the corporate website project; content and assets belong to the company.

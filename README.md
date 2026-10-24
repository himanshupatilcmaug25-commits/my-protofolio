# Himanshu Patil — Portfolio Website

Personal portfolio for Himanshu Patil, Java Full Stack Developer.
Built with **React 18 + Vite**, **Tailwind CSS**, **Framer Motion**, and **React Router**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Folder Structure

```
src/
├── assets/           # Images (profile photo, certificate, screenshots)
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ScrollProgress.jsx
│   ├── BackToTop.jsx
│   ├── ProjectModal.jsx
│   ├── StatCounter.jsx
│   ├── StackFlowDiagram.jsx
│   ├── ContactSection.jsx
│   └── CertLightbox.jsx
├── data/             # ← Edit content here, no component changes needed
│   ├── profile.js    # Name, email, phone, LinkedIn, GitHub, summary, stats
│   ├── education.js  # Education timeline + journey paragraph
│   ├── skills.js     # All skills by category + stack flow diagram data
│   ├── projects.js   # Projects + experience/achievements timeline
│   └── courses.js    # Certifications + PG-DAC modules
├── hooks/            # Custom React hooks
│   ├── useTheme.js
│   ├── useTyping.js
│   └── useCounter.js
├── pages/            # Route-level page components
│   ├── Home.jsx
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Courses.jsx
│   └── NotFound.jsx
└── App.jsx           # Router + layout
```

---

## ✏️ How to Edit Content

**All text content lives in `/src/data/*.js` files.** You never need to touch components.

| File | What to edit |
|------|-------------|
| `data/profile.js` | Name, email, phone, LinkedIn, GitHub, summary, typing strings, stat counters |
| `data/education.js` | Degree details, modules, journey paragraph |
| `data/skills.js` | Add/remove skills, change level (core/familiar), add stack flow nodes |
| `data/projects.js` | Project descriptions, highlights, GitHub links, live demo URLs |
| `data/courses.js` | Add certifications (Oracle, Udemy, etc.), edit PG-DAC module descriptions |

### Adding a new certification

Open `src/data/courses.js` and add to the `certifications` array:

```js
{
  id: "oracle-java",
  title: "Oracle Certified Associate – Java SE 11",
  issuer: "Oracle",
  date: "2026",
  credentialId: "YOUR_CREDENTIAL_ID",
  image: "/assets/oracle-cert.jpg",   // place file in /public/assets/
  downloadUrl: "/assets/oracle-cert.jpg",
  tags: ["Java", "Oracle"],
  featured: false,
},
```

---

## 🖼️ Assets to Replace

Place these files in `public/assets/` (or `src/assets/` for bundled imports):

| File | Description |
|------|-------------|
| `public/assets/profile-photo.jpg` | Your circular profile photo (recommended: 400×400px) |
| `public/resume.pdf` | Your resume PDF |
| `public/assets/pg-dac-certificate.jpg` | PG-DAC certificate image |
| `public/assets/krishisetu-screenshot.png` | KrishiSetu project screenshot |
| `public/assets/travel-planner-screenshot.png` | Travel Planner screenshot |
| `public/og-image.png` | Open Graph preview image (1200×630px) |

---

## 📬 Enable EmailJS (Contact Form)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service (Gmail/Outlook/etc.) and a template
3. Open `src/components/ContactSection.jsx` and replace:

```js
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

Until configured, the form falls back to `mailto:` automatically.

---

## 🌐 Deploy for Free

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) — it auto-detects Vite.

### Netlify
```bash
npm run build
# Drag the `dist/` folder to app.netlify.com/drop
```

Or connect via GitHub with build command `npm run build` and publish dir `dist`.

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
# Add to vite.config.js: base: '/your-repo-name/'
npm run build && npm run deploy
```

---

## 🔗 Update Project Links

In `src/data/projects.js`, update:

```js
github: "https://github.com/YOUR_ACTUAL_REPO",
liveDemo: "https://your-live-demo.vercel.app",
screenshot: "/assets/your-project-screenshot.png",
```

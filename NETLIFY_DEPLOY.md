# Netlify Deployment Guide for YS PEB Design Studio & Consultants

This project is fully configured and ready for 1-click deployment on [Netlify](https://www.netlify.com/).

---

## Pre-configured Files Included

1. **`netlify.toml`**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node.js Version**: `20`
   - **SPA Redirect**: `/*` ➔ `/index.html` (HTTP 200) to prevent 404s on page refresh or direct URLs.
   - **Security Headers**: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.
   - **Caching Rules**: 1-year immutable caching for `/assets/*` and optimal caching for images.

2. **`public/_redirects`**:
   - Redundant fallback redirect for Netlify Drop (drag-and-drop) or static hosting engines:
     `/*    /index.html   200`

---

## Deployment Options

### Option 1: Git Integration (Recommended for Continuous Deployment)
1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your Git provider and repository.
5. Netlify will automatically detect:
   - **Base directory**: `.` (leave empty / default)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**. Netlify will build and provide a live URL (`https://your-site-name.netlify.app`).

### Option 2: Netlify Drop (Manual Drag-and-Drop)
1. In your local terminal, build the project:
   ```bash
   npm run build
   ```
2. Navigate to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the drop zone.
4. Your site will be live instantly!

### Option 3: Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Login and deploy:
   ```bash
   netlify login
   netlify deploy --prod --dir=dist
   ```

---

## Custom Domain Setup (Optional)
1. In your Netlify Site dashboard, go to **Site configuration** > **Domain management**.
2. Add your custom domain (e.g., `yspeb.com`).
3. Follow the DNS instructions to point your DNS (A Record / CNAME) to Netlify.
4. Netlify will automatically provision a free Let's Encrypt SSL/TLS certificate.

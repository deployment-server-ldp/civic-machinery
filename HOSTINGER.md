# Hosting on Hostinger (without git)

This Next.js site can be hosted on Hostinger in two ways. Pick one.

---

## Option A — Shared / Premium / Business hosting (static upload) ✅ simplest

Hostinger's shared plans can't run a Node.js server, so we export the site to
plain HTML/CSS/JS and upload it with the File Manager. No git, no terminal on
the server.

### 1. Build the static site (on your computer)
```bash
npm install
EXPORT_STATIC=1 npm run build
```
This creates an **`out/`** folder containing the whole website.
(You can skip this step if you already have the ready-made
`civic-tobacco-machinery-hostinger.zip`.)

### 2. Upload to Hostinger
1. hPanel → **Files → File Manager** → open **`public_html`**.
2. Delete Hostinger's placeholder `default.php` / `index.html` if present.
3. Upload **everything inside `out/`** (or the provided ZIP) into
   `public_html`, then **Extract** if you uploaded a ZIP.
   - `index.html` must end up at `public_html/index.html` — **not** inside a
     sub-folder.
   - The hidden **`.htaccess`** file is generated into `out/` automatically
     (it lives in `public/.htaccess`), so it uploads with everything else.
     Enable "show hidden files" in File Manager to confirm it landed at
     `public_html/.htaccess`. It handles the old→new URL redirects, security
     headers, and — importantly — forces `sitemap.xml` to be served as XML so
     browsers and crawlers see a real XML document instead of stripped plain
     text.

### 3. Domain + HTTPS
1. Point **civic-tobacco-machinery.com** to Hostinger (hPanel → Domains, or set
   the domain's nameservers / A record to your Hostinger server).
2. hPanel → **SSL** → install a free SSL certificate, then force HTTPS.

### 4. Updating the site later
Because it's static, any content change means: edit the code → run
`EXPORT_STATIC=1 npm run build` again → re-upload the new `out/` files.

> Note: the site must live at the **domain root** (`public_html`). Hosting it in
> a sub-folder would break the `/_next/...` asset paths.

---

## Option B — Hostinger VPS (full Next.js server)

Use this if you want server features (on-the-fly image optimisation, real
redirects/headers without `.htaccess`, future SSR).

```bash
# on the VPS (Ubuntu), one-time
sudo apt update && sudo apt install -y nodejs npm nginx
npm install -g pm2

# upload the project (SFTP/File Manager — no git needed), then:
cd /var/www/civic-machinery
npm install
npm run build
pm2 start "npm run start" --name civic
pm2 save && pm2 startup
```
Then put Nginx in front as a reverse proxy to `http://localhost:3000` and add
SSL with `certbot`.

---

**Recommended:** Option A for a simple, fast, cheap setup — this site is
static-friendly and SEO-complete without a server.

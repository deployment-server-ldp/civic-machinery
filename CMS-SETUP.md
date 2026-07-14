# Blog CMS — Setup & Usage

Your site now has a built-in, WordPress-style content manager at **`/admin`**
(e.g. `https://civic-tobacco-machinery.com/admin`). You log in, write a post
with all the usual fields, hit **Publish**, and the site automatically rebuilds
and goes live on Hostinger.

There is **no separate server or database** — posts are saved as files in your
GitHub repository and the site is rebuilt by GitHub Actions. This keeps hosting
simple and cheap.

---

## How it works (the flow)

```
You open /admin  →  write a post  →  Publish
      → post saved to GitHub (content/blog/*.md)
      → GitHub Actions builds the site
      → uploads it to Hostinger  →  live in a few minutes
```

---

## One-time setup (about 10 minutes)

### 1. Create your "Access key" (a GitHub token)

The CMS logs in with a GitHub **fine-grained personal access token**. This is
your password for publishing.

1. Go to <https://github.com/settings/tokens?type=beta> → **Generate new token**.
2. **Token name:** `Civic CMS`. **Expiration:** 1 year (or "No expiration").
3. **Repository access:** *Only select repositories* →
   `deployment-server-ldp/civic-machinery`.
4. **Permissions → Repository permissions → Contents:** set to **Read and write**.
5. Generate the token and **copy it** (starts with `github_pat_...`).

That copied string is your **Access key**. Keep it safe — treat it like a
password. It is stored only in your own browser when you log in.

### 2. Add the Hostinger FTP secrets (so publishing goes live)

In GitHub → your repo → **Settings → Secrets and variables → Actions → New
repository secret**, add:

| Secret name | Value |
|---|---|
| `FTP_SERVER` | your Hostinger FTP host/IP (no `ftp://`, no port) |
| `FTP_USERNAME` | your Hostinger FTP username |
| `FTP_PASSWORD` | your Hostinger FTP password |

(Optional variable `FTP_SERVER_DIR` = `./` if the site ever lands inside
`public_html/public_html/`.)

### 3. Log in

Open `https://civic-tobacco-machinery.com/admin`, enter **your name** and your
**Access key**, and click **Log in**.

---

## Writing a post

| Field | What it's for |
|---|---|
| **Title (H1)** | The main headline — becomes the page's `<h1>`. |
| **URL slug** | Auto-generated from the title; you can edit it. |
| **Content** | The article body. Use the toolbar (**H2**, **H3**, **Bold**, **List**, **Link**) — it's Markdown. `##` makes a section heading. |
| **Excerpt** | Short summary shown on the blog list page. |
| **Meta description** | The Google snippet (keep it under ~160 characters). |
| **Featured image** | The main image. **Recommended: 1200 × 630 px, JPG or WebP, under 300 KB.** The CMS warns you if it's too big. |
| **Publish date** | Defaults to today. |
| **Categories** | Click to select one or more. |
| **Tags** | Comma separated (e.g. `HLP-200, Buying Guide`). |
| **Keywords (SEO)** | Comma separated, for search engines. |
| **Author name / title / bio** | Shown on the post; the bio appears in a box at the bottom of the article. |

Then click **Publish**. You'll see a confirmation, and your site goes live in a
few minutes. To change an existing post, use **Edit** on the posts list; to
remove one, use **Delete**.

---

## Notes

- Posts commit to the **`claude/sweet-heisenberg-qlvxuw`** branch (your live
  branch). If you change your production branch, update `branch` in
  `lib/cms.ts` and the branch list in
  `.github/workflows/deploy-hostinger.yml`.
- The `/admin` page is set to **noindex** and is disallowed in `robots.txt`, so
  search engines won't list it. It is not linked from anywhere on the public
  site.
- Your Access key never leaves your browser. If you ever think it's exposed,
  revoke it on GitHub and create a new one — the site is unaffected.

# Project notes for Claude

## Hosting: do NOT touch the IMS subdomain

- The main site deploys (static export via `.github/workflows/deploy-hostinger.yml`)
  to Hostinger `public_html/`.
- `public_html/ims/` (server path
  `/home/u804822705/domains/civic-tobacco-machinery.com/public_html/ims`) is a
  separate inventory management app served at `ims.civic-tobacco-machinery.com`.
  It is NOT part of this repo.
- Never modify, overwrite, or delete anything in `public_html/ims/`:
  - never add `--delete` (or any delete/clean-slate option) to the deploy;
  - keep the `--exclude '^ims/'` on the lftp mirror and the guard step;
  - never create an `app/ims` route or `public/ims/` folder;
  - keep the subdomain pass-through at the top of `public/.htaccess` so the
    main site's redirects don't apply to `ims.` requests.

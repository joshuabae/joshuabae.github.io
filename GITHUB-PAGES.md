# Deploying to GitHub Pages

This site builds to a fully static output that works on GitHub Pages.

## One-time setup

### 1. Create your GitHub Pages repository

If you don't have one already, create a repository named `<your-username>.github.io` on GitHub.

### 2. Set your base path

GitHub Pages serves a user site (e.g. `yourusername.github.io`) at the root `/`.  
If you're using a project site (e.g. `yourusername.github.io/my-site`), set `BASE_PATH=/my-site/` in the build step below.

---

## Building and deploying

### Option A: Manual deploy (recommended to start)

From the project root:

```bash
# Build the site (replace / with /your-repo-name/ for project sites)
BASE_PATH=/ pnpm --filter @workspace/personal-site run build
```

This outputs static files to `artifacts/personal-site/dist/public/`.

Then push the contents of that folder to the `gh-pages` branch of your repository:

```bash
# From the project root
cd artifacts/personal-site/dist/public

# Initialize a temporary git repo and push to gh-pages
git init
git add -A
git commit -m "Deploy"
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -f origin main
```

### Option B: Using `gh-pages` npm tool

```bash
# Install gh-pages globally (one time)
npm install -g gh-pages

# Build
BASE_PATH=/ pnpm --filter @workspace/personal-site run build

# Deploy
gh-pages -d artifacts/personal-site/dist/public --repo https://github.com/<your-username>/<your-username>.github.io.git --branch main
```

### Option C: GitHub Actions (automated on every push)

Create `.github/workflows/deploy.yml` in your GitHub Pages repository:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: BASE_PATH=/ pnpm --filter @workspace/personal-site run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: artifacts/personal-site/dist/public
```

---

## Updating your content

All content lives in two easy-to-edit TypeScript files:

- **`artifacts/personal-site/src/content/experience.ts`** — your career timeline entries
- **`artifacts/personal-site/src/content/posts.ts`** — your blog posts

Edit those files, rebuild, and redeploy. No CMS or backend needed.

---

## Custom domain (optional)

1. In your GitHub repository settings → Pages, add your custom domain.
2. Create a `CNAME` file in `artifacts/personal-site/public/` containing just your domain:
   ```
   yourname.com
   ```
3. Rebuild and redeploy. GitHub will serve the site at your custom domain.

---

## Troubleshooting

**Blank page after deploy** — Make sure `BASE_PATH` matches where the site is served. For a user site (`username.github.io`), use `BASE_PATH=/`. For a project site (`username.github.io/project`), use `BASE_PATH=/project/`.

**404 on page refresh** — GitHub Pages doesn't support SPA routing natively, so this project ships a `public/404.html` SPA fallback (the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) technique). It is copied into the build output automatically, and `index.html` contains the counterpart script that restores the original URL. Direct visits and refreshes on `/about` or `/blog/...` work out of the box for a **user site** (`username.github.io`).

If you deploy as a **project site** (`username.github.io/my-site`), edit `public/404.html` and change `pathSegmentsToKeep` from `0` to `1`.

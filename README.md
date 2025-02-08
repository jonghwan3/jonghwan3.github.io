## 1. Create a GitHub Repository

1. Go to GitHub and log in.
2. Click on the "+" button (top-right) → Select New repository.
3. Name the repository jonghwan3.github.io (this is important for GitHub Pages).
4. Choose Public and Initialize with a README (optional).
5. Click Create repository.
6. git clone

## 2. Set Up a React Project
```
npm create vite@latest my-portfolio --template react
cd my-portfolio
npm install
```

## 3. Connect the Project to GitHub
```
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 4. Configure GitHub Pages Deployment
1. Install gh-pages:
```
npm install gh-pages --save-dev
```
2. Open `vite.config.js` and add this configuration:
```
export default defineConfig({
  base: "/",
  plugins: [react()],
});
```

3. Add scripts to package.json:
```
"homepage": "https://jonghwan3.github.io/"
"scripts": {
  "dev": "vite",
  "build": "vite build", 
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy the project:
```
npm run build
npm run deploy
```

## 5. Enable GitHub Pages
1. Go to your GitHub repository (jonghwan3.github.io).
2. Navigate to Settings → Pages.
3. Under Source, select gh-pages branch.
4. Save changes and wait a few minutes.

Your portfolio should be live at https://jonghwan3.github.io/

## 6. Automate Deployment (CI/CD) (Optional)
1. Create .github/workflows/deploy.yml:
```
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

```
2. Push to main, and GitHub will deploy automatically. If build fails, check the following.

- Grant Write Permission to GitHub Actions
- Go to Your Repository on GitHub 
- 👉 Settings → Actions → General
- Scroll to "Workflow permissions"
- ✅ Select "Read and write permissions" - (instead of just "Read").
- ✅ Click "Save".
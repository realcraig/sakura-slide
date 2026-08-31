# Sakura Slide

[Play Sakura Slide](https://realcraig.github.io/sakura-slide/)

A peaceful third-person downhill skateboarding game.

This repository contains the published web export in `site/` and its GitHub Pages workflow. It does not contain the development project.

## Publish an update

1. In the development project, run `PUBLIC_SITE_URL=https://realcraig.github.io/sakura-slide/ pnpm build`.
2. Check the finished `dist/` export.
3. Replace this repository's `site/` contents with that export.
4. Commit and push to `main`. The Pages workflow publishes `site/` without rebuilding it.

The workflow can also be run manually from the Actions tab.

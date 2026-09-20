# COS30043 Lab 05

Vue 3 Lab05 application with two sections:

- Job Explorer using Vue Router and hardcoded job data.
- To-Do List using a separate Vue component with add, delete, and priority toggle actions.

## Run

```sh
pnpm install
pnpm run dev
```

## Build

```sh
pnpm run build
```

## Deploy (GitHub Pages)

The site is built into `docs/` (see `vite.config.js`). After running `pnpm run build`, commit and push `docs/`, then set
GitHub → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/docs`.

Live site: https://daniel-ymk.github.io/COS30043---Interface-Design-and-Development/

# Note

- two things: qwik framework and tailwind css.
- qwik is a new framework currently in beta created by ~ creator of angular
- it looks like react
- the outstanding/primary feature: the speed. not the evaluation. loading, time to interaction
- what the qwik team says - they measured the top e commerce websites - all of them are very good in delivering the data, image optimizations, css optimization, but all use js frameworks, they load the bundle, then evaluate it fully, and then they do hydration. The content initially loaded as html is not interactive, then the framework is being evaluated, and it processes the dom, even creates a new one, attaches listeners, rebinds, and only then the application starts working
- qwik framework was created to solve this issue. when you start using any website, you don't use the entire js from the start. then we can postpone the loading. it splits the monolith to pieces and it does not do hydration. 
- so many years in vue, when started creating the demo decided to use navbar, vuetify - ups, no vue. 
- tailwind is in use. 
- plain css + postcss + @apply and other helpers.
- how layout & routing works: (demos) folder; passing data to title.
- todo: load, do some stuff, then copy/paste html.

- qwik is different. 
    - react/vue care about state and rendering only. Bundling: webpack/vite, ssr: nuxt/next/vue ssr, etc. everything else is secondary.
    - qwik cares about the full flow: how to bundle, ssr, deliver, and get 100% score on google. 


# Qwik City App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just a extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/static-site-generation/static-site-config/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

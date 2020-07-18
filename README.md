# [LionTechNYC](https://liontech.nyc/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/be93657b-1f07-45e8-8d4c-356f24fcdc83/deploy-status)](https://app.netlify.com/sites/liontechnyc/deploys)

![LionTechNYC Logo](assets/logo.png)

> _Landing site for LionTechNYC._

## Palette

[![Palette](assets/palette.png)](https://coolors.co/343432-87cbac-90ffdc-8de4ff-8ac4ff)

## 🚀 Quick Start

1.  **Create an Aquarius site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Aquarius project using the default starter
    git clone  https://github.com/liontechnyc/Aquarius.git <project-name>
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm run develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:5000`!

    _Note: You'll also see a second link: _`http://localhost:5000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the project directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── scripts
    ├── src
    ├── test
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── jest.config.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── tslint.json

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/scripts`**: This directory contains utility scripts _e.g_ static image optimization.

3.  **`/test`**: This directory contains testing utilities and Jest preprocessing.

4.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`jest.config.js`**: Jest testing framework configuration.

12. **`LICENSE`**: Aquarius is licensed under the GPLv2 license.

13. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

14. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

15. **`README.md`**: A text file containing useful reference information about your project.

16. **`tsconfig.json`**: Typescript compiler configuration (see [reference](https://www.typescriptlang.org/docs/handbook/project-references.html)).

17. **`tslint.json`**: Typescript linter configuration (see [reference](https://palantir.github.io/tslint/usage/configuration/)).

## scripts

```shell
# Execute scripts with NPM
npm run <script>
```

| Script        | Function                                                      |
| ------------- | ------------------------------------------------------------- |
| `build`       | Compile project for production and distribution               |
| `develop`     | Run development server on port 5000                           |
| `format`      | Lint the codebase and assert style pattern                    |
| `lint-staged` | Same as `format` however, specifically for use with Git Hooks |
| `start`       | Same as `develop`                                             |
| `serve`       | Serve production build locally; _great for staging_           |
| `clean`       | Clean artifacts from `build` and `develop`                    |
| `test`        | Run unit test                                                 |
| `optimize`    | Optimize static images for web and mobile; in `src/images`    |
| `type-check`  | Assert Typescript typings                                     |

> - You may have to run `npm start` twice due to a glitch with the `sharp` and `gatsby-plugin-manifest` modules. Use this remedy only if it hangs on **non-square images** compilation \*

## 🎓 Learning Aquarius

> Aquarius essentially forks Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🔋 Batteries Included

- Built in pages for **Cookies Policy** and **Privacy Policy** found respectively at `/cookies` and `/privacy` routes. To edit these refer to `src/templates` and `src/markdown`. These templates are injected via the [Gatsby Node API](https://www.gatsbyjs.org/docs/node-apis/) so refer to `gatsby-node.js` for its configuration.

## 💫 Deploy

<!-- Configure your repository info to enable this button -->

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=liontechnyc)

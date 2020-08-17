# jupyterlab-racket

![Github Actions Status](https://github.com/lihebi/jupyterlab-racket/workflows/Build/badge.svg)

Instruct jupyterlab editor to use scheme syntax highlighting for `.rkt` files.

- Adapted from https://github.com/jupyterlab/jupyterlab/issues/7427

- This is diffenret from the iracket kernel. This is basically a syntax highlight editor extension, while iracket is the backend kernel for executing code.

## Requirements

* JupyterLab >= 2.0

## Install

I might need to make this available on registry. Currently, you'll have to install from source on Github.

```bash
jupyter labextension install jupyterlab-racket
```

## Contributing

### Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to jupyterlab-racket directory

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension install .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

Now every change will be built locally and bundled into JupyterLab. Be sure to refresh your browser page after saving file changes to reload the extension (note: you'll need to wait for webpack to finish, which can take 10s+ at times).

### Uninstall

```bash

jupyter labextension uninstall jupyterlab-racket
```

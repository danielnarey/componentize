# @danielnarey/componentize [![Build Status](https://travis-ci.com/danielnarey/componentize.svg?branch=master)](https://travis-ci.com/danielnarey/componentize) [![npm (scoped)](https://img.shields.io/npm/v/@danielnarey/componentize)](https://www.npmjs.com/package/@danielnarey/componentize) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@danielnarey/componentize)

**Create an updatable component from any function that generates HTML**

*Componentize* is a small module that implements a lightweight, functional approach to encapsulation for client-side JavaScript applications. It combines the ideas of HTML templating (Handlebars, Pug), functional components (React, Preact), and checking for equality of function arguments to avoid unnecessary diffing or DOM modification ([Elm](https://elm-lang.org/news/blazing-fast-html)). 

Unlike the last three frameworks mentioned, *componentize* does not implement a virtual DOM, which means there is no separate rendering step. This makes *componentize* less suitable for games and interactive animations with many, frequent DOM updates. For user interactions in a typical single-page application, however, no appreciable performance difference should be expected. When using this module, performance can be optimized by defining small components that do only one thing, and then using static templates for larger sections of content.

Another difference to more comprehensive frameworks is that *componentize* has no special syntax, and no specific build tools are required.


## Example

```js

```


## API

### `setRoot(doc, view, [data])`

### `setComponent(doc, id, view, [data, [listeners, [merge]]]) => updater`

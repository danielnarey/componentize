# @danielnarey/componentize [![Build Status](https://travis-ci.com/danielnarey/componentize.svg?branch=master)](https://travis-ci.com/danielnarey/componentize) [![npm (scoped)](https://img.shields.io/npm/v/@danielnarey/componentize)](https://www.npmjs.com/package/@danielnarey/componentize) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@danielnarey/componentize)

**Create an updatable component from any function that generates HTML**

---

*Componentize* is a small module that offers a lightweight, functional approach to encapsulation for client-side JavaScript applications. It combines the ideas of HTML templating ([Handlebars](https://www.npmjs.com/package/handlebars), [Pug](https://www.npmjs.com/package/pug)), functional components ([React](https://reactjs.org/), [Preact](https://preactjs.com/)), and checking for equality of function arguments to avoid unnecessary diffing or DOM modification ([Elm](https://elm-lang.org/news/blazing-fast-html)). 

Unlike the last three frameworks mentioned, **Componentize does not implement a virtual DOM**, so components are re-rendered on function execution, without diffing and batching DOM changes. This makes Componentize less suitable for games and interactive animations with many, frequent DOM updates. For user interactions in a typical client-side application, however, no appreciable performance difference should be expected in modern browsers. Performance can be optimized by defining small interactive components that do only one thing, and then using static templates for larger sections of content.

Another difference to more comprehensive frameworks is that **Componentize has no special syntax, and no specific build tools are required**.


## Example




```js




```


## API

### `setRoot(doc, view, [data])`

Replaces the inner HTML of the element at id "root" of *doc* with the HTML string returned by `view(data)`. If *data* is not given, the argument defaults to an empty object `{}`. In basic usage, the reference passed as *doc* should be the global variable `window.document`.

### `setComponent(doc, id, view, [data, [listeners, [merge]]]) => Function<* => Function>`

Replaces the inner HTML of the element at *id* of *doc* with the HTML string returned by `view(data)` and returns an update function that will re-render the component when it is passed new data. The optional *listeners* argument is an object where the keys are event names and the values are callback functions to invoke on the event.

Every call to an update function returns a new update function that encapsulates the previous state, allowing rendering to be skipped when the value of the data parameter on the next update would be identical to its value on the last update. The *merge* function specifies how data passed to an update function should be merged with the previous state; if not specified, *merge* defaults to `(previous, update) => { ...previous, ...update }`.

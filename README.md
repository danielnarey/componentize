# @danielnarey/componentize [![Build Status](https://travis-ci.com/danielnarey/componentize.svg?branch=master)](https://travis-ci.com/danielnarey/componentize) [![npm (scoped)](https://img.shields.io/npm/v/@danielnarey/componentize)](https://www.npmjs.com/package/@danielnarey/componentize) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@danielnarey/componentize)

**Create an updatable component from any function that generates HTML**

---

*Componentize* is a small module that offers a lightweight, functional approach to encapsulation for client-side JavaScript applications. It combines the ideas of HTML templating ([Handlebars](https://www.npmjs.com/package/handlebars), [Pug](https://www.npmjs.com/package/pug)), encapsulated components ([React](https://reactjs.org/), [Preact](https://preactjs.com/)), and checking for equality of function arguments to avoid unnecessary diffing or DOM modification ([Elm](https://elm-lang.org/news/blazing-fast-html)). 

Unlike the last three frameworks mentioned, **Componentize does not implement a virtual DOM**, so components are re-rendered on function execution, without diffing and batching DOM changes. This makes Componentize less suitable for games and interactive animations with many, frequent DOM updates. For user interactions in a typical client-side application, however, no appreciable performance difference should be expected in modern browsers. Performance can be optimized by defining small interactive components that do only one thing, and then using static templates for larger sections of content.

Another difference to more comprehensive frameworks is that **Componentize has no special syntax, and no specific build tools are required**.


## Example

```js




```


## API

### `setStatic(doc, id, view, [data, [listeners]])`

Replaces the inner HTML of the element at *id* of *doc* with the HTML string returned by `view(data)`. If *data* is not given, the argument defaults to an empty object `{}`. The optional *listeners* argument is an object where each key is an event name and each value is a callback function to invoke on the event. In basic usage, the reference passed as *doc* should be the global `window.document`.

### `setUpdatable(doc, id, view, [data, [listeners]]) => Function<Object>`

Identical to *setStatic*, but returns an update function that will re-render the component when it is passed new data.

### `setMergeable(doc, id, view, [data, [listeners, [merge]]]) => Function<* => Function>`

Like *setUpdatable*, except its return function encapsulates the previous state so that partial data updates can be merged. The *merge* function is an optional argument specifying how data passed to an update function should be merged with the previous state; if not specified, *merge* defaults to `(previous, update) => { ...previous, ...update }`. 

After rendering `view(merged)`, the update function returns a new function encapsulating the merged state, which must be assigned to a reference to be invoked on the next update. As a performance optimization, rendering is skipped when the value of the data parameter on the next update would be identical to its value on the last update, but a new (identical) function is still returned.

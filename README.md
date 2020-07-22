# @danielnarey/componentize 

**[Deprecated] Create an updatable component from any function that generates HTML**

> **Deprecation Warning**: *This experimental library is no longer in active development and will not be updated in response to Node.js version  releases or security vulnerabilities identified in the dependency tree.*

## Features

Componentize offers a lightweight, functional approach to encapsulation for client-side JavaScript applications. It combines the ideas of HTML templating ([Handlebars](https://www.npmjs.com/package/handlebars), [Pug](https://www.npmjs.com/package/pug)), encapsulated components ([React](https://reactjs.org/), [Preact](https://preactjs.com/)), and pure functions for rendering view and updating state ([Elm](https://guide.elm-lang.org/architecture/)). 

Unlike the last three frameworks mentioned, Componentize does not implement a virtual DOM, so components are re-rendered on function execution, without auto-magically diffing and batching DOM changes. For applications like animations and games where many, frequent DOM updates will be processed, `window.requestAnimationFrame(...)` should be used along with this package to batch calls to update functions and execute them at timed intervals. Performance in re-rendering may be optimized by defining small interactive components that do only one thing, and then using static templates for larger sections of content.

Another difference to more comprehensive frameworks is that Componentize has no special syntax, and no specific build tools are required. Using *some* modern build toolchain is recommended, as the package's source code targets ES2018+/Node 10+ with the expectation that application source code will be transpiled for distribution. The example modules included in the documentation are transpiled to browser targets with [Babel](https://babeljs.io/) and bundled with [Parcel](https://parceljs.org/).


## Example

```js

// mini-clock.js

import tinydate from 'tinydate';
import {
  setUpdatable,
  setStatic,
} from '@danielnarey/componentize';

const miniClock = (w, rootId) => {
  setStatic(w.document, rootId, () => `
    <p>The time is now
      <span id="clockTime"></span> 
    </p>
  `);
  
  const formatTime = tinydate('{HH}:{mm}:{ss}');
  
  const updateTime = setUpdatable(
    w.document,
    'clockTime',
    () => formatTime(),
  );
  
  w.setInterval(updateTime, 1000);
};

export default miniClock;


// index.js

import miniClock from './mini-clock';

(function index() {
  try {
    miniClock(window, 'miniClock');
  } catch (err) {
    console.log(err);
  }
}());


```


## API

### `setStatic(doc, id, view, [data, [listeners]])`

Set a static component by replacing an element's descendant tree (typically, an empty one) with the contents of the HTML string returned by `view(data)`.

- **`doc`** is a reference to a [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) or [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) (typically, the global `window.document`)
- **`id`** is the id string of the element in *doc* that will be the root element of the rendered component 
- **`view`** is a function with no more than one required argument that returns an HTML string
- **`data`** (defaults to `{}`) is an argument to *view* (typically, an Object)
- **`listeners`** (defaults to `{}`) may be used to add listeners to the root element of the component: it is an Object where each key is an event name and each value is a callback function to invoke on that event.


### `setUpdatable(doc, id, view, [data, [listeners]])`

Same arguments as *setStatic*, but returns an update function that will re-render the component when it is passed new data.

- **`RETURNS`** a function that takes one argument and re-renders `view(update)` with that argument as *update*.

Because both spellings are acceptable, `setUpdateable` (note the "e") is provided as an alias — but be consistent in your own code!

### `setMergeable(doc, id, view, [data, [listeners, [merge]]])`

Similar to *setUpdatable*, except its return function encapsulates the previous state so that partial data updates can be merged. 

- **`merge`** (defaults to `(a, b) => { ...a, ...b }`) is a function specifying how data passed to an update function should be merged with the previous state
- **`RETURNS`** a function that takes one argument and re-renders `view(merged)`, with the *merged* being result of `merge(data, update)`; after rendering, this function returns a new function encapsulating the merged state, and so on for every iteration.

As a performance optimization, rendering is skipped when the value of the data parameter on the next update would be identical to its value on the last update, but a new (identical) function is still returned.

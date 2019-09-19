import 'mini.css';
import setComponent from '../src/set-component';
import setRoot from '../src/set-root';


// Main application logic
(function index() {
  try {
    setRoot(
      document,
      (data) => `<header><h1>${data.message}</h1></header><main id='x'></main>`,
      { message: 'Hello, Everybody' },
    );
    
    const updater = setComponent(
      document,
      'x',
      (data) => `<p>This is a component, ${data.name}</p>`,
      { name: 'Dude' },
    );
    
    window.setTimeout(updater, 2000, { name: 'I mean, Sir' });
  } catch (err) {
    console.log(err);
  }
}());

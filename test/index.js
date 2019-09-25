import test from 'ava';
import {
  addListeners,
  setMergeable,
  setStatic,
  setUpdatable,
} from '../dist/index.cjs';


const doc = new DocumentFragment();
const rootElem = doc.createElement('div').setAttribute('id', 'root');
doc.appendChild(root);


test('setStatic', (t) => {
  setStatic(
    doc,
    'root',
    (name) => `<p id="pElem">Hello,<span>${name}</span></p>`,
    'Daniel',
  );
  
  const pElem = doc.getElementById('pElem');
  
  t.is(pElem.innerHTML, 'Hello,<span>Daniel</span>');
});

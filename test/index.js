import test from 'ava';
import { JSDOM } from 'jsdom';
import {
  addListeners,
  setMergeable,
  setStatic,
  setUpdatable,
} from '../dist/index.cjs';


const dom = new JSDOM(`<!DOCTYPE html><div id="root"></div>`);
const doc = dom.window.document;


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

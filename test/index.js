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
    (data) => `<p id="pElem">Hello,<em>${data.name}</em></p>`,
    { name: 'Daniel' },
  );
  
  t.is(
    doc.getElementById('pElem').innerHTML,
    'Hello,<em>Daniel</em>',
  );
});


test('setUpdatable', (t) => {
  const updateMessage = setUpdatable(
    doc,
    'root',
    (data) => `<p id="pElem">Hello,<em>${data.name}</em></p>`,
    { name: 'Robert' },
  );
  
  t.is(
    doc.getElementById('pElem').innerHTML,
    'Hello,<em>Robert</em>',
  );
  
  updateMessage({ name: 'Bob' });
  
  t.is(
    doc.getElementById('pElem').innerHTML,
    'Hello,<em>Bob</em>',
  );
});


test('setMergeable', (t) => {
  let updateMessage = setMergeable(
    doc,
    'root',
    (data) => `
      <p id="pElem">${data.greeting},
        <em>${data.name}${data.punctuation}</em>
      </p>
    `,
    { 
      greeting: 'Hello',
      name: 'Robert',
      punctuation: '.',
    },
  );
  
  t.is(
    doc.getElementById('pElem').innerHTML.replace(/\s/g, ''),
    'Hello,<em>Robert.</em>',
  );
  
  updateMessage = updateMessage({ punctuation: '!' });
  
  t.is(
    doc.getElementById('pElem').innerHTML.replace(/\s/g, ''),
    'Hello,<em>Robert!</em>',
  );
  
  updateMessage = updateMessage({ name: 'Bob' });
  
  t.is(
    doc.getElementById('pElem').innerHTML.replace(/\s/g, ''),
    'Hello,<em>Bob!</em>',
  );
  
  updateMessage({ greeting: 'Aloha' });
  
  t.is(
    doc.getElementById('pElem').innerHTML.replace(/\s/g, ''),
    'Aloha,<em>Bob!</em>',
  );
});

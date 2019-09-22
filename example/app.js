import {
  addListeners, 
  setUpdatable,
  setStatic,
} from '../dist/index.cjs';


const app = (w) => {
  setStatic(w.document, 'root', () => `
    <h1>Todo List</h1>
    <form id="formElement" action="javascript:">
      <label>
        <span>Add Item</span>
        <input id="textField"/>
      </label>
      <button type="submit">Enter</button>
      <button id="undoButton" type="button">Undo</button>
      <ul id="todoList">
      </ul>
    </form>
  `);

  const updateList = setUpdatable(
    w.document,
    'todoList',
    (todos) => todos.map(item => `<li>${item}</li>`).join(''),
    [],
  );
  
  const currentItems = [];

  addListeners(w.document, 'formElement', { 
    submit: (e) => {
      const textField = e.target.elements['textField'];
      e.preventDefault();
      currentItems.push(textField.value);
      updateList(currentItems);
      textField.value = '';
    },
  });
  
  addListeners(w.document, 'undoButton', { 
    click: (e) => {
      currentItems.pop();
      updateList(currentItems);
    },
  }); 
};


export default app;

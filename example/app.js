import {
  addListeners, 
  setUpdatable,
  setStatic,
} from '../dist/index.cjs';


const app = (w) => {
  setStatic(w.document, 'root', () => `
    <form id="formElement" action="javascript:">
      <label>
        <span>Add Todo</span>
        <input id="textField"/>
      </label>
      <button type="submit">Add</button>
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
};


export default app;

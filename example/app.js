import { setStatic, setUpdatable } from '../dist/index.cjs';


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
    (todos) => todos.map(item => `<li>${item}<li>`).join(),
    [],
  );
  
  const currentItems = [];

  addListeners(w.document, 'formElement', { 
    submit: (e) => {
      e.preventDefault();
      currentItems.push(e.target.elements['textField'].value);
      updateList(currentItems);
    },
  }); 
};


export default app;
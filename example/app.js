import {
  addListeners, 
  setUpdatable,
  setStatic,
} from '../dist/index.cjs';


const app = (w) => {
  setStatic(w.document, 'root', () => `
    <div class="card">
      <div class="section">
        <h1>Todo List</h1>
      </div>

      <div class="section">
        <form id="formElement" action="javascript:">
          <label>
            <strong>Add an item</strong>
            <input id="textField"/>
          </label>
          <button class="primary" type="submit">Add</button>
          <button id="undoButton" class="secondary" type="button">Undo</button>
        </form>
      </div>

      <div class="section">
        <ul id="todoList" class="card"><em>Nothing to do!</em></ul>
      </div>

    </div>
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

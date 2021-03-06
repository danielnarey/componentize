import {
  addListeners,
  setUpdatable,
  setStatic,
} from '../../dist/index';


const todoList = (w, rootId) => {
  setStatic(w.document, rootId, () => `
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
        <ul id="todoList"></ul>
      </div>

    </div>
  `);

  const updateList = setUpdatable(
    w.document,
    'todoList',
    (todos) => todos.map((item) => `<li>${item}</li>`).join(''),
    ['<em>Nothing to do!</em>'],
  );

  const currentItems = [];

  addListeners(w.document, 'formElement', {
    submit: (e) => {
      const { textField } = e.target.elements;
      e.preventDefault();
      currentItems.push(textField.value);
      updateList(currentItems);
      textField.value = '';
    },
  });

  addListeners(w.document, 'undoButton', {
    click: () => {
      currentItems.pop();
      updateList(currentItems);
    },
  });
};


export default todoList;

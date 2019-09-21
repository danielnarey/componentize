import 'mini.css';
import { static, updatable } from '../dist/index.cjs';


// Main application logic
(function index() {
  try {
    static(document, 'root', () => `
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

    const updateList = updatable(
      document,
      'todoList',
      (todos) => todos.map(item => `<li>${item}<li>`).join(),
      [],
    );
    
    const currentItems = [];

    addListeners(document, 'formElement', { 
      submit: (e) => {
        e.preventDefault();
        currentItems.push(e.target.elements['textField'].value);
        updateList(currentItems);
      },
    }); 
  } catch (err) {
    console.log(err);
  }
}());

/* global window */
import 'mini.css';
import clock from './apps/clock';
import todoList from './apps/todo-list';


(function index() {
  try {
    clock(window, 'example1');
    todoList(window, 'example2');
  } catch (err) {
    console.log(err);
  }
}());

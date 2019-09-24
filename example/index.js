/* global window */
import 'mini.css';
import todoList from './apps/todo-list';


(function index() {
  try {
    todoList(window, 'example1');
  } catch (err) {
    console.log(err);
  }
}());

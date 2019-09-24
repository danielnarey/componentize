/* global window */
import 'mini.css';
import todoList from './apps/todoList';


(function index() {
  try {
    todoList(window, 'example1');
  } catch (err) {
    console.log(err);
  }
}());

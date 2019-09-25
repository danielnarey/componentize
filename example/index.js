/* global window */
import 'mini.css';
import clock from './apps/clock';
import todoList from './apps/todo-list';
import spinner from './apps/spinner';


(function index() {
  try {
    clock(window, 'example1');
    todoList(window, 'example2');
    spinner(window, 'example3');
  } catch (err) {
    console.log(err);
  }
}());

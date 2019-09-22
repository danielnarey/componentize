/*global window*/
import 'mini.css';
import app from './app';


(function index() {
  try {
    app(window);
  } catch (err) {
    console.log(err);
  }
}());

/* global window */
import 'mini.css/dist/mini-nord.min.css';
import app from './app';


(function index() {
  try {
    app(window);
  } catch (err) {
    console.log(err);
  }
}());

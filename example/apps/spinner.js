import tinydate from 'tinydate';
import {
  setStatic,
} from '../../dist/index.cjs';


const spinner = (w, rootId) => {
  setStatic(w.document, rootId, () => `
    <div class="card">
      <div class="section">
        <h1>Spinner</h1>
      </div>

      <div class="section">
        <svg viewBox="0 0 100 100" width="300" height="300">
          <rect id="svgRect" x="50" y="49" width="45" height="2" fill="black"/>
        </svg>
      </div>

    </div>
  `);
};


export default spinner;
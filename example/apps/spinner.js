import {
  setMergeable,
  setStatic,
} from '../../dist/index.cjs';


const spinner = (w, rootId) => {
  setStatic(w.document, rootId, () => `
    <div class="card">
      <div class="section">
        <h1>Spinner</h1>
      </div>

      <div class="section">
        <svg viewBox="0 0 100 100" width="250" height="250">
          <g id="svgWrapper"></g>
        </svg>
      </div>

    </div>
  `);

  let rotateRect = setMergeable(
    w.document,
    'svgWrapper',
    (rotation) => `<rect x="50" y="50" width="45" height="2" fill="black" transform="rotate(${rotation},50,50)"/>`,
    0,
    {},
    (a, b) => ((a + b >= 360) ? (a + b - 360) : a + b),
  );

  const rate = 30 / 1000;
  let lastStamp;

  const transition = (currentStamp) => {
    lastStamp = lastStamp || currentStamp;
    rotateRect = rotateRect((currentStamp - lastStamp) * rate);
    lastStamp = currentStamp;
    w.requestAnimationFrame(transition);
  };

  w.requestAnimationFrame(transition);
};


export default spinner;

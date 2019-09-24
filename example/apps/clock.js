import tinydate from 'tinydate';
import {
  setUpdatable,
  setStatic,
} from '../../dist/index.cjs';


const clock = (w, rootId) => {
  setStatic(w.document, rootId, () => `
    <div class="card">
      <div class="section">
        <h1>Clock</h1>
      </div>

      <div class="section">
        <h2>The time is now<h2>
        <h2 id="clockTime"></h2> 
      </div>

      <div class="section">
        <h3>Today is
          <span id="clockDate"></span>
        </h3>
      </div>

    </div>
  `);
  
  const formatTime = tinydate('{HH}:{mm}:{ss}');
  const formatDate = tinydate('{DD}/{MM}/{YYYY}');
  
  const updateTime = setUpdatable(
    w.document,
    'clockTime',
    () => formatTime(),
  );
  
  const updateDate = setUpdatable(
    w.document,
    'clockTime',
    () => formatDate(),
  );
  
  w.setInterval(updateTime, 1000);
  w.setInterval(updateDate, 1000);
};


export default clock;
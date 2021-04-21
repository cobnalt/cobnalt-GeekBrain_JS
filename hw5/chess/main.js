function drawChess() {
  const chess = document.querySelector('#chess');
  const html = `<div class="hor_line">
  <p class="cell"></p><p class="cell">A</p><p class="cell">B</p><p class="cell">C</p><p class="cell">D</p>
  <p class="cell">E</p><p class="cell">F</p><p class="cell">G</p><p class="cell">H</p>
   </div>
   <div class="commonBoard">
  <div class="vert_line">
  <p class="cell">1</p><p class="cell">2</p><p class="cell">3</p><p class="cell">4</p>
  <p class="cell">5</p><p class="cell">6</p><p class="cell">7</p><p class="cell">8</p>
  </div>
  <div class="chess_board">
    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>
    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>

    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>
    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>

    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>
    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>

    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>
    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>

    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>
    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>

    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>
    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>

    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>
    <p class="cell"></p><p class="cell black"></p><p class="cell"></p><p class="cell black"></p>

    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>
    <p class="cell black"></p><p class="cell"></p><p class="cell black"></p><p class="cell"></p>
  </div>
  <div class="vert_line">
  <p class="cell">1</p><p class="cell">2</p><p class="cell">3</p><p class="cell">4</p>
  <p class="cell">5</p><p class="cell">6</p><p class="cell">7</p><p class="cell">8</p>
  </div>
  </div>
  <div class="hor_line">
  <p class="cell"></p><p class="cell">A</p><p class="cell">B</p><p class="cell">C</p><p class="cell">D</p>
  <p class="cell">E</p><p class="cell">F</p><p class="cell">G</p><p class="cell">H</p>
   </div>
  `
  chess.insertAdjacentHTML('beforeend', html);
}

drawChess();

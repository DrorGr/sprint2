`use strict`
var gImg;
var gMeme;
var gCanvas;
var gCtx;
var gAlign = {
  'center': 100,
  'left': 0,
  'right': 300
};
function onInit() {
  renderGallery()
}

function renderGallery() {
  var memes = getImages()
  var strHtmls = memes.map(function (meme) {
    return `  
    <div class="img-box">
    <img class="meme-image" src="${meme.url}" id="${meme.id}" onclick="onCreateMeme('${meme.id}')">
      <div class="transparent-box" onclick="onCreateMeme('${meme.id}')">
        <div class="caption">
          <p class="opacity-low">${meme.keywords}</p>
        </div>
      </div>
      </div>
    `
  })
  document.querySelector('.gallery').innerHTML = strHtmls.join('');
}

function renderCanvas() {

  gCanvas = document.getElementById('canvas')
  gCtx = gCanvas.getContext('2d');

  gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height)
  gMeme.lines.forEach((line, idx) => {
    gCtx.lineWidth = 1.5;
    gCtx.strokeStyle = line.stroke;
    gCtx.fillStyle = line.color;
    gCtx.font = `${line.size}px impact`;
    var cordX = gAlign[line.align];
    gCtx.fillText(line.txt, cordX, line.linehight);
    gCtx.strokeText(line.txt, cordX, line.linehight);

  });
}

function renderSetting() {
  var strHtmls = `
    <input class="input-txt" type="text" id="text" value="${gMeme.lines[gMeme.selectedLineIdx].txt}" onkeyup="onSetText(this.value)">
    `
  document.querySelector('.input').innerHTML = strHtmls;
}

function onCreateMeme(elMemeId) {
  gImg = document.getElementById(`${elMemeId}`);
  createMeme(elMemeId);
  gMeme = getMeme();
  renderCanvas()
  onGoToEdit();
}

function onSetText(elTxt) {
  setText(elTxt)
  renderCanvas();
}

function onGoToGallery() {
  console.log('hellow')
  document.querySelector('.edit-meme').style.display = "none";
  document.querySelector('.gallery').style.display = "flex";
  document.querySelector('.gallery-header').style.display = "flex";
}

function onGoToEdit() {
  document.querySelector('.edit-meme').style.display = "flex";
  document.querySelector('.gallery').style.display = "none";
  document.querySelector('.gallery-header').style.display = "flex";
  
}

function onGoToAbout() {

  alert ("The only 'About' you should care about is what about you making me laugh?")
}
function downloadCanvas(elLink) {
  const data = gCanvas.toDataURL()
  elLink.href = data
  elLink.download = 'youre art'
}

function onSetAlign(elAlign) {
  setAlign(elAlign);
  renderCanvas()
}


function onResizeTxt(diff) {
  setTxtSize(diff);
  renderCanvas()
}

function onSetColorText(elColor) {
  setColorText(elColor)
  renderCanvas()
}

function onSetColorStroke(elColor) {
  setColorStroke(elColor)
  renderCanvas()
}


function onSetLineHight(elLineHight) {
  setLineHight(elLineHight);
  renderCanvas()
}


function onAddLine() {
  addLine();
  renderCanvas()
  renderSetting()
}

function onMoveLine() {
  moveLine();
  renderCanvas()
  renderSetting()
  addRect()
}
function onDeleteLine(){
  deleteLine();
  renderCanvas()
  renderSetting()
}

function addRect() {
  var line = gMeme.lines[gMeme.selectedLineIdx];
  cordX = gAlign[line.align];
  var width = gCtx.measureText(line.txt).width;
  gCtx.strokeRect(cordX - 20, line.linehight - line.size, width + 40, line.size + 20);
}




function addMouseListeners() {
  gCanvas.addEventListener('mousemove', onMove);
  gCanvas.addEventListener('mousedown', onDown);
  gCanvas.addEventListener('mouseup', onUp);
  gCanvas.addEventListener('click', onClick);
}

function addTouchListeners() {
  gCanvas.addEventListener('touchstart', onDown);
  gCanvas.addEventListener('touchmove', onMove);
  gCanvas.addEventListener('touchend', onUp);
}


function onMove(ev) {
  if (gIsDragging) {
      const pos = getEvPos(ev);
      const dx = pos.x - gStartPos.x;
      const dy = pos.y - gStartPos.y;
      if (gDragging === 'line') setMemePosition(dx, dy);
      else setStickerPosition(dx, dy, findStickerPosition(pos));
      gStartPos = pos;
      renderCanvas();
  }
}

function onMoveText(distance) {
  moveText(distance);
  renderCanvas();
}

function addMouseListeners() {
  gCanvas.addEventListener('mousemove', onMove);
  gCanvas.addEventListener('mousedown', onDown);
  gCanvas.addEventListener('mouseup', onUp);
  gCanvas.addEventListener('click', onClick);
}

function addTouchListeners() {
  gCanvas.addEventListener('touchstart', onDown);
  gCanvas.addEventListener('touchmove', onMove);
  gCanvas.addEventListener('touchend', onUp);
}
































function onMove(ev) {
  if (gIsDragging) {
      const pos = getEvPos(ev);
      const dx = pos.x - gStartPos.x;
      const dy = pos.y - gStartPos.y;
      if (gDragging === 'line') setMemePosition(dx, dy);
      else setStickerPosition(dx, dy, findStickerPosition(pos));
      gStartPos = pos;
      renderCanvas();
  }
}
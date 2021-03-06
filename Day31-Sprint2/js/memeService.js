`use strict`

var gMemes = [];


var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
  { id: 1, url: './img/meme-imgs/1.jpg', keywords: ['trump'] },
  { id: 2, url: './img/meme-imgs/2.jpg', keywords: ['dogs'] },
  { id: 3, url: './img/meme-imgs/3.jpg', keywords: ['trump'] },
  { id: 4, url: './img/meme-imgs/4.jpg', keywords: ['dogs'] },
  { id: 5, url: './img/meme-imgs/5.jpg', keywords: ['trump'] },
  { id: 6, url: './img/meme-imgs/6.jpg', keywords: ['dogs'] },
  { id: 7, url: './img/meme-imgs/7.jpg', keywords: ['trump'] },
  { id: 8, url: './img/meme-imgs/8.jpg', keywords: ['dogs'] },
  { id: 9, url: './img/meme-imgs/9.jpg', keywords: ['trump'] },
  { id: 10, url: './img/meme-imgs/10.jpg', keywords: ['dogs'] },
  { id: 11, url: './img/meme-imgs/11.jpg', keywords: ['trump'] },
  { id: 12, url: './img/meme-imgs/12.jpg', keywords: ['dogs'] },
  { id: 13, url: './img/meme-imgs/13.jpg', keywords: ['dogs'] },
  { id: 14, url: './img/meme-imgs/14.jpg', keywords: ['trump'] },
  { id: 15, url: './img/meme-imgs/15.jpg', keywords: ['dogs'] },
  { id: 16, url: './img/meme-imgs/16.jpg', keywords: ['trump'] },
  { id: 17, url: './img/meme-imgs/17.jpg', keywords: ['dogs'] },
  { id: 18, url: './img/meme-imgs/18.jpg', keywords: ['dogs'] }



];
var gMeme = {};

function createMemes(meme) {
  gMemes.push(meme)
}

function createMeme(id) {
  var meme = {
    selectedImgId: id,
    selectedLineIdx: 0,
    lines: [
      {
        txt: '',
        size: 50,
        align: 'center',
        color: '#ffffff',
        stroke: 'black',
        linehight: 400
      }
    ]
  }
  gMeme = meme;
  createMemes(meme)
}
function getImages() {
  return gImgs;
}


function getMeme() {
  return gMeme;
}

function setSelectedImgId(id) {
  gMeme.selectedImgId = id;
}

function setText(elTxt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = elTxt;
}


function setAlign(elAlign) {
  gMeme.lines[gMeme.selectedLineIdx].align = elAlign;

}

function setTxtSize(diff) {
  gMeme.lines[gMeme.selectedLineIdx].size += diff;
}


function setColorText(elColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = elColor;
}

function  setColorStroke(elColor){
  gMeme.lines[gMeme.selectedLineIdx].stroke = elColor;
}


function addLine() {
  var newLine = {
    txt: '',
    size: 50,
    align: 'left',
    color: '#ffffff',
    stroke: 'black',
    linehight: 50
  }
  gMeme.lines.push(newLine);
  gMeme.selectedLineIdx=gMeme.lines.length-1;
}
function  deleteLine(){
  gMeme.lines.splice(gMeme.selectedLineIdx,gMeme.selectedLineIdx+1);
}


function moveLine() {
  if (gMeme.selectedLineIdx < gMeme.lines.length-1) {
    gMeme.selectedLineIdx++;
  } else gMeme.selectedLineIdx = 0;

}

function setLineHight(elLineHight){
  gMeme.lines[gMeme.selectedLineIdx].linehight += elLineHight;
}
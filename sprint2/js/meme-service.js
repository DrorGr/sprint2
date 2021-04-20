'use strict'


const IMAGESFILE = 18;

var gKeyswords = {'happy': 12, 'funny': 1};

var gImg = _loadImgs()

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'red',
            family: 'Impact'
        }
    ]
}
var gCurrline = 0;


function updateTxtLine(val) {
    gMeme.lines[gCurrline].txt = val;
    clearCanvas();
    drawDetails();
}

function drawDetails() {
    drawText();
}

function setImgCanvBg() {
    gCanvas.style = `background-image: url("img/memes/${gMeme.selectedImgId}.jpg");background-size: cover;`
}

function drawText(txt=gMeme.lines[0].txt, x=50, y=50) {
    gCtx.fillStyle = gMeme.lines[0].color;
    gCtx.strokeStyle = 'black'; 
    gCtx.font = `${gMeme.lines[0].size}px ${gMeme.lines[0].family}`;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
}

function drawImg() {
    const elImg = new Image()
    elImg.src = `img/memes/${gMeme.selectedImgId}.jpg`;
    elImg.onload = ()=>{
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
        drawDetails();
    }
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

// set new img to our meme
function setNewImg(imgId) {
    gMeme.selectedImgId = imgId;
}

// return all Imgs
function getImgs() {
    return gImg;
}

function _loadImgs() {
    let imgs = []
    for(var i = 1; i <= IMAGESFILE; i++) {
        let img = {
            id: i,
            url: `img/memes/${i}.jpg`,
            keywords: ['happy', 'funny']  
        }
        imgs.push(img);
    }
    return imgs;
}
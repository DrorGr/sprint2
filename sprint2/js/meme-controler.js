'use strict'

var gCanvas;
var gCtx;

function init() {
    renderImg();
}

function onUpdateTxtLine(val) {
    updateTxtLine(val);
}

function renderCanvas() {
    console.log('canvas rendered')
    var strHtml = `<canvas id="my-meme" onclick="">
    </canvas>`;
    document.querySelector('.canvas-container').innerHTML = strHtml;
    gCanvas = document.getElementById('my-meme');
    gCtx = gCanvas.getContext('2d');
    gCanvas.width = document.querySelector('.canvas-container').clientWidth * 95/100;
    gCanvas.height = document.querySelector('.canvas-container').clientHeight * 95/100;
    setImgCanvBg();
    drawDetails();
}

function openGallery() {
    elFadeOut('.modal-edit');
    elFadeIn('.container-gallery');
}

function openMemeEditor(elImg) {
    setNewImg(elImg.dataset.id)
    renderCanvas(elImg.dataset.id);
    elFadeIn('.modal-edit');

} 

function onOpenMemeEditor(elImg) {
    elFadeOut('.container-gallery');
    openMemeEditor(elImg)
}

function renderImg() {
    let imgs = getImgs()
    let galleryImgs = imgs.map(img => {
        return `<img class="card" src="img/memes/${img.id}.jpg" data-id="${img.id}" alt="Err" onclick="onOpenMemeEditor(this)"/>`
    }) 
    document.querySelector('.gallery').innerHTML = galleryImgs.join('');
}
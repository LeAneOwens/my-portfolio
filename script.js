//For Dark, Light, and Default Modes
const darkBtn =document.getElementById ('dark-mode');
const lightBtn =document.getElementById ('light-mode');
const resetBtn =document.getElementById ('reset-mode');

darkBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.backgroundImage = 'none';
});

lightBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.backgroundImage = 'none';
});

resetBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '';
    document.body.style.backgroundImage = '';
});

//For Small, Medium, Large Text
const smallBtn =document.getElementById ('small');
const mediumBtn =document.getElementById ('medium');
const largeBtn =document.getElementById ('large');

smallBtn.addEventListener('click', () => {
    document.body.style.fontSize = 'small';
});

mediumBtn.addEventListener('click', () => {
    document.body.style.fontSize = ''
});

largeBtn.addEventListener('click', () => {
    document.body.style.fontSize = '1.5em';
});
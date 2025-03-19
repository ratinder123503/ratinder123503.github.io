const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = [
    'Closeup of a human eye',
    'A rock sculpture',
    'Purple flowers',
    'Ancient wall painting',
    'A butterfly on a leaf',
];

/* Looping through images */
for (let i = 0; i <imagesFiles.length; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', 'images/' = imagesFiles[i]);
newImage.setAttribute('alt', altTexts[i]);
newImage.addEventListener('click', function () {
    displayedImage.src = this.src;
    displayedImage.alt = this.alt;
});
thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */ 
btn.addEventListener('click', function () { 
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})
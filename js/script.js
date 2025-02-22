const sections = document.querySelectorAll('section');
for ( const section of sections ){
    section.style.marginBottom = '10px';
    section.style.border = ' 5px solid steelblue';
    section.style.borderRadius = '8px';
    // section.style.textAlign = 'center';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray'
}
// const fruitsContainer = document.getElementById('fruits-container');
// fruitsContainer.style.backgroundColor = 'yellow'
const fruitsContainer = document.getElementsByClassName('text-center');
// fruitsContainer.add('text-center');
// fruitsContainer.classList.add('bangla');

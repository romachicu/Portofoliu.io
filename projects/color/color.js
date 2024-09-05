const btn = document.querySelector('#picker');
const colorDiv = document.getElementById('colorBox');
const colorDesc = document.getElementById('inner');

function random(number) {
    return Math.floor(Math.random() * number);
}

function getRandomHexCode() {
    const hexChars = '0123456789abcdef';
    let hexColor = '#';
    
    for (let i = 0; i < 6; i++) {
        hexColor += hexChars[random(16)];
    }
    
    return hexColor;
}

function hexToRGB(hexColor) {

    let h = hexColor.replace('#', '');


    if (h.length === 3) {
        h = h.split('').map(char => char + char).join('');
    }

  
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    

    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {
    const rndH = getRandomHexCode();
    colorDiv.style.backgroundColor = rndH;
    const rgbColor = hexToRGB(rndH); 
    colorDesc.textContent = `${rndH} | ${rgbColor}`; 
    console.log(colorDesc.textContent);
});



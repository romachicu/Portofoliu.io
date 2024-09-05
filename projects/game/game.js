

const againBtn=document.querySelector('.again');

againBtn.addEventListener('click',()=>{
    alert('Ati facut click pe "AGAIN" ');
}, {ONCE:true}
);

const questionDiv=document.getElementsByClassName('number')[0];



function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

questionDiv.addEventListener('click', ()=>{
    const ranCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    console.log((ranCol));
    document.body.style.backgroundColor = ranCol;

});

const paragraph=document.getElementsByTagName('p');
console.log(paragraph);

const messageP=document.querySelector('p.message');
console.log(messageP);

messageP.addEventListener('mouseover',()=>{
    console.log('Mouse over');
    messageP.style.cssText='color: green; font-size: 3rem;';

});

messageP.addEventListener('mouseleave', ()=>{
    console.log('Mouse out');
    messageP.style.cssText='color: #eeeeee; font-size: 1.4rem;';
});

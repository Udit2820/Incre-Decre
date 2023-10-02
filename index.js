const countValue =document.querySelector('#counter');
const Increment= () =>{
     let value = parseInt(countValue.innerText);
     value=value + 1;
     countValue.innerText=value;
};

const Decrement=()=>{
    let value=parseInt(countValue.innerText);
    value=value - 1;
    countValue.innerText=value;
};
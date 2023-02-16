document.getElementById("fist-button").addEventListener('click',function(e){
let inputValue = e.target.parentNode.children[1];
const valu2 = inputValue.value
const value = parseInt(valu2)


const depsitText = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].innerText;
const depsitText3 = e.target.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0]
const text = parseInt(depsitText)
const total = value + text

const balance = e.target.parentNode.parentNode.parentNode.children[0].children[2].children[1].children[0];
const balanceString = balance.innerText
const balanceValue = parseInt(balanceString);
const balanceTotal = balanceValue + value;
balance.innerText = balanceTotal

depsitText3.innerText = total;
inputValue.value ='';

})
document.getElementById("Withdraw").addEventListener('click',function(e){
    let inputValue = e.target.parentNode.children[1];
    const valu2 = inputValue.value
    const value = parseInt(valu2)
    
    
    const depsitText = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[1].children[0].innerText;
    const depsitText3 = e.target.parentNode.parentNode.parentNode.children[0].children[1].children[1].children[0]
    const text = parseInt(depsitText)
    const total = value + text
    
    const balance = e.target.parentNode.parentNode.parentNode.children[0].children[2].children[1].children[0];
    const balanceString = balance.innerText
    const balanceValue = parseInt(balanceString);
    const balanceTotal = balanceValue - value;
    balance.innerText = balanceTotal
    
    depsitText3.innerText = total;
    inputValue.value ='';
    
    })
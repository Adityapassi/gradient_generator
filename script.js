const gradientBox =document.querySelector(".gradient-box");
const inputs=document.querySelectorAll(".colors input");
const selectBox=document.querySelector(".select-box select");
const textarea=document.querySelector("textarea");
const refresh=document.querySelector(".refresh");
const copy=document.querySelector(".copy");


// Addind addEventListener on Inputs
inputs.forEach(input => {
    // Event listener for changing the grasdient when input color changes
    input.addEventListener("input",()=> gradient(false))
    
});

selectBox.addEventListener("change",()=> gradient(false))
refresh.addEventListener("click",()=>gradient(true))
copy.addEventListener("click",copyColor)


// Fo r setting Gradient value in Gradient Box and Boady
function gradient(isRandom){
    if(isRandom){
         inputs[0].value=randomColor()
         inputs[1].value=randomColor()
    }
    // genrated gradient value
    const gradientColor= `linear-gradient(${selectBox.value}, ${inputs[0].value}, ${inputs[1].value})`;
    
    gradientBox.style.backgroundImage=gradientColor;
    document.body.style.backgroundImage=gradientColor;
    textarea.textContent=gradientColor
}

// For Genrating Random color for Refresh button
function randomColor(){
    const color= Math.floor(Math.random()*0xFFFFFF).toString(16)
    return `#${color}`
}


// For Coping color on the clipboard for Copy Button
function copyColor(){
    navigator.clipboard.writeText(textarea.value)
    copy.textContent="Color Copied"
    setTimeout(()=>{copy.textContent="Copy Color"},2000)
}
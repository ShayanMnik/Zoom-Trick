// let colors = document.querySelectorAll(".color>div")
// let attr = document.getAttribute("data-color") 
// function rang(){
//     switch(attr){
//         case "1" : {
//             colors.style.border="1px solid red"
//         }
//     }
// }
const fig = document.querySelector(".cover-image")
const img = document.querySelector(".cover-image>img")
const imges = document.querySelectorAll(".small-image>img")
let colo = document.querySelectorAll(".color>div")
fig.addEventListener('mousemove', (e)=>{
    let x = ((e.offsetX)*3)-750
    let y = ((e.offsetY)*3)-750

    // let x = ((e.offsetX)*1.5)/2
    // let y = ((e.offsetY)*1.5)/2
    console.log(x);
    
    // let y = (e.offsetY)/2

    img.style.transform='translate('+(x/4.5)+'px, '+(y/4.5)+'px)'
})
fig.addEventListener('mouseleave', ()=>{
    img.style.transform='translate(0px, 0px)'
})


let lastImg 
function swap(){
    var imges = document.querySelectorAll(".small-image>img")
    var img = document.querySelector(".cover-image>img")
    var tempSrc = imges[0].src
    // for (var i = 0; i < imges.length - 1; i++) {
    //      imges[i].src = img.src; 
    // }
    imges.forEach((val)=>{
        val.addEventListener('click', ()=>{
            img.src = val.src
            if (lastImg) {
                lastImg.style.border = "none";
            }
              lastImg = img.parentElement;
        })
    })
    // imges[imges.length - 1].src = tempSrc;

}





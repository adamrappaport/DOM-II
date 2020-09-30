// Your code goes here
const busImg = document.querySelector('.intro img')

busImg.addEventListener('mouseover', function(event){
    busImg.style.width = '50%';
})

busImg.addEventListener('mouseover', function(event){
    busImg.style.width = '50%';
})

busImg.addEventListener('mouseleave', function(event){
    busImg.style.width = '100%';
})

const parColor = document.querySelector('.intro p')

parColor.addEventListener('mouseout', function(event){
    parColor.style.color = 'blue';
})

 let navAll = document.querySelector('nav a')

 document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      navAll.style.color = "green";
    }
})


let navBar = document.querySelector('nav')
navBar.addEventListener("click", function( event){
    event.preventDefault();
 });


 const letsGo = document.querySelector('.text-content h2')

 letsGo.addEventListener('dblclick',function(event){
     
    letsGo.style.fontSize = '500%'
 })


window.addEventListener('scroll', function(event){
    parColor.style.opacity = '0.2'
})


window.addEventListener('load', function(event){
    alert("Hello World")
    console.log('Hello World')
});

window.addEventListener("resize", function (event) {
    console.log('The resize force is with you');
  });


  const body = document.querySelector('body');

  document.addEventListener('keyup',(event)=>{
    body.style.backgroundColor = "grey"
  })

  document.addEventListener('keydown',(event)=>{
    body.style.backgroundColor = "white"
  })


//   const buttons = document.querySelectorAll('.btn');
// buttons.forEach((button, idx) => {
//     button.addEventListener('click', (event) => {
//         button.style.color = 'green';
//         event.stopPropagation();
//     })
// })
let input = document.getElementById("input");
let button = document.querySelectorAll("button");
let datetime =document.getElementById("date-time");
const calcColor = document.querySelector('.calc-color');
const audio=document.getElementById('audio');
audio.src = 'song.mp3';


let colors = ['#4CAF50', '#FF9800', '#2196F3', '#F44336', '#8BC34A'];
let currentColor = 0;

// Song ke sath color change karne ke liye
audio.addEventListener('play', () => {
  setInterval(() => {
    currentColor = (currentColor + 1) % colors.length;
    calcColor.style.background = colors[currentColor];
  }, );
  audio.play();
});



// Calculator ke color change karne ke liye
calcColor.addEventListener('click', () => {
  currentColor = (currentColor + 1) % colors.length;
  calcColor.style.background = colors[currentColor];
});
// Datetime update function
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    datetime.textContent = `${date} ${time}`;
  }
  
  // Update datetime every second
  setInterval(updateDateTime,);

button.forEach(element =>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.textContent)
        if(e.target.textContent === "C"){
            input.innerText = "";
           
        }
        else if(e.target.textContent === "&"){
            input.innerText = input.innerText.slice(0,-1);
        }
        else if (e.target.textContent === "="){
            input.innerText = eval(input.innerText)
        }
        else{
            input.innerText += e.target.textContent
        }
    })
   
})

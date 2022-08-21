// let red=document.getElementById('red')
// red.onclick= () =>console.log("This is red")
// let yellow=document.getElementById('yellow')
// yellow.onclick=() =>console.log("This is Yellow")
// let green=document.getElementById('green')
// green.onclick=() =>console.log("This is Green")

const squares = 
document.querySelectorAll('.colorname')
const timesclicked={'a':0, 'yellow':0, 'green':0}
const clearbtn=document.getElementById('clear')
function clearscores() {
  timesclicked.red=0
  timesclicked.yellow=0
  timesclicked.green=0
  squares.forEach(square=>square.innerText='')
}
clearbtn.onclick= () =>clearscores()

squares.forEach(square => { 
  square.onclick=() => {
  timesclicked[square.value] +=1
  square.innerText=timesclicked[square.value]
  // console.log(square.value)
}
})


function rollDice() {
    var numbersToScroll = [];
    const totalNumbers = 10
    for (var i = 0; i < totalNumbers; i++) {
      numbersToScroll.push(Math.floor(Math.random() * 6) + 1);
    }
    
    const dice = document.getElementById('number')
    for (let i =0; i < totalNumbers; i++ ){
        
        setTimeout(()=>{
            dice.innerText = Math.floor(Math.random() * 6) + 1
        },(totalNumbers-i)*totalNumbers*10)
    }
  }
  
const nextLine = document.createElement("button")

nextLine.innerText = "Next"

nextLine.addEventListener('click', () => {
    const storyLine = document.getElementById("output")
    storyLine.innerText += '\n' + story[currentLine]
    currentLine++
    storyLine.scrollTop=storyLine.scrollHeight
})

const menu = document.getElementsByClassName("menu")
menu[0].append(nextLine)
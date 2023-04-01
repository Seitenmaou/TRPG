const playerDiv = document.getElementsByClassName("players")
const addPlayerButton = document.createElement("button")
addPlayerButton.innerText = "Add Players"
addPlayerButton.id="addPlayerButton"

let playerCount = 0

const jobTypes = ['test1','test2','test3']

addPlayerButton.addEventListener('click', () => {
    const newPlayer = document.createElement("div")
    newPlayer.className="player"

    const numPlayer = document.getElementById("numPlayers")
    newPlayer.id = 'player' + playerCount
    
    newPlayer.innerHTML = "<div class='playerName' ondblclick='this.contentEditable = true;'><p>Name</p></div>"

    const playerJob = document.createElement("select")
    for (let i = 0; i < jobTypes.length; i++){
        playerJob.innerHTML += `<option value=${jobTypes[i]}>${jobTypes[i]}</option>`
    }
    newPlayer.append(playerJob)

    const playerNum = document.createElement("select")
    for (let i = 1; i <= 6; i++){
        playerNum.innerHTML += `<option value=${i}>${i}</option>`
    }
    newPlayer.append(playerNum)



    const hpBar = document.createElement("div")
    const minusHpButton = document.createElement("button")    
    minusHpButton.innerText = "-"
    const plusHpButton = document.createElement("button")    
    plusHpButton.innerText = "+"
    const playerHp = document.createElement("p")
    playerHp.className = 'playerHp'
    playerHp.innerText = 0
    minusHpButton.addEventListener('click', () => {
        if (parseInt(playerHp.innerText) > 0) {
            playerHp.innerText = parseInt(playerHp.innerText) - 1 
        }
    })
    plusHpButton.addEventListener('click', () => {
        playerHp.innerText = parseInt(playerHp.innerText) + 1 
    })

    const removePlayerButton = document.createElement("button")
    removePlayerButton.innerText = "X"
    removePlayerButton.id = 'removePlayer' + playerCount
    
    const removePlayerConfirmButton = document.createElement("button")
    removePlayerConfirmButton.innerText = 'X\n?'
    removePlayerConfirmButton.id= 'removePlayerConfirm' + playerCount

    removePlayerButton.addEventListener('click', () => {
        let removePlayer = 'removePlayer' + playerCount
        removePlayerButton.remove()
        newPlayer.append(removePlayerConfirmButton)
    })

    removePlayerConfirmButton.addEventListener('click', () => {
        removePlayerConfirmButton.parentNode.remove()
        playerCount--
        numPlayer.innerText = playerCount
    })
    


    hpBar.append(plusHpButton)
    hpBar.append(playerHp)
    hpBar.append(minusHpButton)
    
    newPlayer.append(removePlayerButton)

    const firstChild = newPlayer.firstChild;
    newPlayer.insertBefore(hpBar, firstChild)

    playerDiv[0].append(newPlayer)
    playerCount++
    numPlayer.innerText = playerCount
})



playerDiv[0].append(addPlayerButton)
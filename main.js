// score section

let playerScore = 0

const score = document.createElement('section')
document.body.append(score)
score.classList.add('score')
score.innerHTML = `Score: ${playerScore}`

// 4x4 grid visual elements

const gameSection = document.createElement('section')

const gridContainer = document.createElement('div')

document.body.append(gameSection)
gameSection.append(gridContainer)
gameSection.classList.add('game-section')
gridContainer.classList.add('grid-container')

for(let i = 1; i <= 16; i++){
    const griditem = document.createElement('div') 
    document.querySelector('.grid-container').append(griditem)
    griditem.classList.add(`grid-item-${i}`, 'grid-item')
}

// game logic

let gameOrder = [Math.floor(Math.random() * (16 - 1 + 1)) + 1]

let playerGuess = []

let count = playerGuess.length

const orderloop = () => {

    setTimeout(() => {

        console.log(gameOrder[count])
        
        
        document.querySelectorAll(`.grid-item`).forEach(e => e.style.backgroundColor = '')
        
        document.querySelector(`.grid-item-${gameOrder[count]}`).style.animation = ''
        document.querySelector(`.grid-item-${gameOrder[count]}`).offsetWidth
        document.querySelector(`.grid-item-${gameOrder[count]}`).style.animation = 'lightup 1s'
        
        count++
        if(count < gameOrder.length){
            orderloop()
        }
    }, 700)

}


console.log(gameOrder)
orderloop()

let currentIndex = 0 //         

for(let i = 0; i < 16; i++){
    document.querySelector(`.grid-item-${i+1}`).addEventListener('click', () => {
        playerGuess.push(i+1)

        if (gameOrder[currentIndex] === i+1){
            
            // console.log(true)

            document.querySelector(`.grid-item-${i+1}`).style.backgroundColor = 'blueviolet'

            const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

            for(let x = 0; x < 15; x++){
                document.querySelector(`.grid-item-${items.filter(e => e != i+1)[x]}`).style.backgroundColor = null
            }

            currentIndex++

            if(currentIndex === gameOrder.length){
                playerScore += 1
                score.innerHTML = `Score: ${playerScore}`    
            
                gameOrder.push(Math.floor(Math.random() * (16 - 1 + 1)) + 1)
                count = 0
                currentIndex = 0
                orderloop()
            }

        } else {

            console.log(false)
            playerGuess = []
            count = playerGuess.length

            playerScore = 0
            score.innerHTML = `Score: ${playerScore}`

            currentIndex = 0
            
            gameOrder = [Math.floor(Math.random() * (16 - 1 + 1)) + 1]            
            orderloop()

            console.log('try again')
        }

        
    })
}


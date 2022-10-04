// 4x4 grid visual elements

const gridContainer = document.createElement('div')

document.body.append(gridContainer)
gridContainer.classList.add('grid-container')

for(let i = 1; i <= 16; i++){
    const griditem = document.createElement('div') 
    document.querySelector('.grid-container').append(griditem)
    griditem.classList.add(`grid-item-${i}`, 'grid-item')
}

// shuffling function

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5)
}

// game logic

const gameOrder = [Math.floor(Math.random() * (16 - 1 + 1)) + 1]

const playerGuess = []

let i = 0

const orderloop = () => {
    setTimeout(() => {

        document.querySelector(`.grid-item-${gameOrder[i]}`).style.animation = 'lightup 1s'
        i++
        if(i < gameOrder.length){
            orderloop()
        }
    }, 700)
}

orderloop()

for(let i = 0; i < 16; i++){
    document.querySelector(`.grid-item-${i+1}`).addEventListener('click', () => {
        playerGuess.push(i+1)

        

        document.querySelector(`.grid-item-${i+1}`).style.backgroundColor = 'blueviolet'

        const griditems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

        for(let y = 0; y < 15; y++){
            document.querySelector(`.grid-item-${griditems.filter(number => number != i+1)[y]}`).style.backgroundColor = 'white'
        }    
        
        console.log(playerGuess[i])
        console.log(playerGuess)
        
        // console.log(gameOrder[i])
    })
}


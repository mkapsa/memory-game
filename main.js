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

let gameOrder = [Math.floor(Math.random() * (16 - 1 + 1)) + 1]

console.log(gameOrder)

for(let i = 0; i < gameOrder.length; i++){
    document.querySelector(`.grid-item-${gameOrder[i]}`).style.animation = 'lightup 2s'
}













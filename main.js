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

// delay function



// game logic

let gameOrder = [Math.floor(Math.random() * (16 - 1 + 1)) + 1, 5,6,7,8]

console.log(gameOrder)

let i = 0

const orderloop = () => {
    setTimeout(() => {

        document.querySelector(`.grid-item-${gameOrder[i]}`).style.animation = 'lightup 1s'

        i++
        if(i < gameOrder.length){
            orderloop()
        }
    }, 700);
}

orderloop()

// for(let i = 0; i < gameOrder.length; i++){
//     document.querySelector(`.grid-item-${gameOrder[i]}`).style.animation = 'lightup 2s'

// }













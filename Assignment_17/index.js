document.querySelector('h1').innerHTML = `<img class="normal-size" src="./rohit.jpg" />`

const imageElement = document.querySelector('img')

imageElement.addEventListener('mouseover' , increaseSize)

function increaseSize(){
    
    imageElement.classList = 'large-size'
    // imageElement.classList.remove('normal-size')
    // imageElement.classList.add('large-size')
}

imageElement.addEventListener('mouseout' , originalSize)

function originalSize(){
    // imageElement.classList.remove('large-size')
    imageElement.classList = 'normal-size'
}
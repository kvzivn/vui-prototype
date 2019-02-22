const wrapper = document.querySelector('.wrapper')
const speakBtn = document.querySelector('.js-speakBtn')
const onboardingText = document.querySelector('.js-onboardingText')
const onboardingTruck = document.querySelector('.js-onboardingTruck')

const highlightImg = document.querySelector('.js-highlightImg')
const highlightWeight = document.querySelector('.js-highlightWeight')
const organicBig = document.querySelector('.js-organicBig')

const mozzarella = document.querySelector('.js-mozzarella')
const mushrooms = document.querySelector('.js-mushrooms')
const chicken = document.querySelector('.js-chicken')
const pineapple = document.querySelector('.js-pineapple')
const olives = document.querySelector('.js-olives')
const ham = document.querySelector('.js-ham')
const peppers = document.querySelector('.js-peppers')
const onions = document.querySelector('.js-onions')
const pepperoni = document.querySelector('.js-pepperoni')

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

let organicMozzarella = false
let organicMushrooms = false
let organicChicken = false
let organicPineapple = false
let organicOlives = false
let organicHam = false
let organicPeppers = false
let organicOnions = false
let organicPepperoni = false

speakBtn.addEventListener('click', () => {
    wrapper.classList.toggle('recording')
    recognition.start()
})

onboardingTruck.addEventListener('click', () => {
    wrapper.classList.toggle('recording')
    recognition.start()
})

document.body.onkeyup = function (e) {
    e.preventDefault()

    if (e.keyCode == 32) {
        wrapper.classList.toggle('recording')
        recognition.start()
    }
}

recognition.onresult = function (event) {
    let current = event.resultIndex
    let transcript = event.results[current][0].transcript

    console.log('transcript: ' + transcript)

    if (transcript.includes('organic')) {
        makeOrganic(transcript)
    } else if (transcript.includes('more') || transcript.includes('double') || transcript.includes('bigger') || transcript.includes('increase') || transcript.includes('another') || transcript.includes('two')) {
        changeQuantity(transcript)
    } else if (transcript.includes('checkout') || transcript.includes('check out')) {
        checkout()
    } else {
        addItems(transcript)
    }
}

function checkout() {
    const checkoutTemplate = `
        <h1 class="checkout-heading">Thanks for ordering!</h1>
        <img class="checkout-img" src="/img/truck.png" />
        <h2 class="checkout-subtitle">Lettuce celebrate!</h2>
    `
    wrapper.innerHTML = checkoutTemplate
    wrapper.classList.add('checkout')
}

function changeQuantity(items) {
    highlightWeight.innerHTML = '2'

    if (items.includes('mozzarella') || items.includes('cheese')) {
        let weight = mozzarella.querySelector('.weight')
        highlightImg.src = '/img/mozzarella_big2.png'
        weight.innerHTML = '2'

        if (organicMozzarella) {
            mozzarella.classList.add('organic')
        }
    }

    if (items.includes('chicken')) {
        let weight = chicken.querySelector('.weight')
        highlightImg.src = '/img/chicken_big2.png'
        weight.innerHTML = '2'

        if (organicMushrooms) {
            mushrooms.classList.add('organic')
        }
    }

    if (items.includes('mushrooms') || items.includes('mushroom')) {
        let weight = mushrooms.querySelector('.weight')
        highlightImg.src = '/img/mushrooms_big2.png'
        weight.innerHTML = '2'

        if (organicChicken) {
            chicken.classList.add('organic')
        }
    }

    if (items.includes('pineapple')) {
        let weight = pineapple.querySelector('.weight')
        highlightImg.src = '/img/pineapple_big2.png'
        weight.innerHTML = '2'

        if (organicPineapple) {
            pineapple.classList.add('organic')
        }
    }

    if (items.includes('olives') || items.includes('Olive')) {
        let weight = olives.querySelector('.weight')
        highlightImg.src = '/img/olives_big2.png'
        weight.innerHTML = '2'

        if (organicOlives) {
            olives.classList.add('organic')
        }
    }

    if (items.includes('ham')) {
        let weight = ham.querySelector('.weight')
        highlightImg.src = '/img/ham_big2.png'
        weight.innerHTML = '2'

        if (organicHam) {
            ham.classList.add('organic')
        }
    }

    if (items.includes('peppers')) {
        let weight = peppers.querySelector('.weight')
        highlightImg.src = '/img/peppers_big2.png'
        weight.innerHTML = '2'

        if (organicPeppers) {
            peppers.classList.add('organic')
        }
    }

    if (items.includes('onions')) {
        let weight = onions.querySelector('.weight')
        highlightImg.src = '/img/onions_big2.png'
        weight.innerHTML = '2'

        if (organicOnions) {
            onions.classList.add('organic')
        }
    }

    if (items.includes('pepperoni')) {
        let weight = pepperoni.querySelector('.weight')
        highlightImg.src = '/img/pepperoni_big2.png'
        weight.innerHTML = '2'

        if (organicPepperoni) {
            pepperoni.classList.add('organic')
        }
    }

    recognition.stop()
    wrapper.classList.remove('recording')
}

function makeOrganic(items) {
    organicBig.style.display = 'block'
    onboardingText.style.display = 'none'
    highlightImg.style.opacity = '1'
    speakBtn.style.opacity = '1'
    onboardingTruck.style.display = 'none'

    if (items.includes('mozzarella') || items.includes('cheese')) {
        mozzarella.classList.add('organic')
        highlightImg.src = '/img/mozzarella_big2.png'
        organicMozzarella = true
        mozzarella.style.display = 'block'
    }

    if (items.includes('mushrooms')) {
        mushrooms.classList.add('organic')
        highlightImg.src = '/img/mushrooms_big2.png'
        organicMushrooms = true
        mushrooms.style.display = 'block'
    }

    if (items.includes('chicken')) {
        chicken.classList.add('organic')
        highlightImg.src = '/img/chicken_big2.png'
        organicChicken = true
        chicken.style.display = 'block'
    }

    if (items.includes('pineapple')) {
        pineapple.classList.add('organic')
        highlightImg.src = '/img/pineapple_big2.png'
        organicPineapple = true
        pineapple.style.display = 'block'
    }

    if (items.includes('olives')) {
        olives.classList.add('organic')
        highlightImg.src = '/img/olives_big2.png'
        organicOlives = true
        olives.style.display = 'block'
    }

    if (items.includes('ham')) {
        ham.classList.add('organic')
        highlightImg.src = '/img/ham_big2.png'
        organicHam = true
        ham.style.display = 'block'
    }

    if (items.includes('peppers')) {
        peppers.classList.add('organic')
        highlightImg.src = '/img/peppers_big2.png'
        organicPeppers = true
        peppers.style.display = 'block'
    }

    if (items.includes('onions') || items.includes('onion')) {
        onions.classList.add('organic')
        highlightImg.src = '/img/onions_big2.png'
        organicOnions = true
        onions.style.display = 'block'
    }

    if (items.includes('pepperoni')) {
        pepperoni.classList.add('organic')
        highlightImg.src = '/img/pepperoni_big2.png'
        organicPepperoni = true
        pepperoni.style.display = 'block'
    }

    recognition.stop()
    wrapper.classList.remove('recording')
}

function addItems(items) {
    console.log(items)
    highlightWeight.innerHTML = '1'
    organicBig.style.display = 'none'
    onboardingText.style.display = 'none'
    highlightImg.style.opacity = '1'
    speakBtn.style.opacity = '1'
    onboardingTruck.style.display = 'none'

    if (items.includes('mozzarella') || items.includes('cheese')) {
        mozzarella.style.display = 'block'
        highlightImg.src = '/img/mozzarella_big2.png'
    }

    if (items.includes('mushrooms') || items.includes('mushroom')) {
        mushrooms.style.display = 'block'
        highlightImg.src = '/img/mushrooms_big2.png'
    }

    if (items.includes('chicken')) {
        chicken.style.display = 'block'
        highlightImg.src = '/img/chicken_big2.png'
    }

    if (items.includes('pineapple')) {
        pineapple.style.display = 'block'
        highlightImg.src = '/img/pineapple_big2.png'
    }

    if (items.includes('olives') || items.includes('Olive')) {
        olives.style.display = 'block'
        highlightImg.src = '/img/olives_big2.png'
    }

    if (items.includes('ham')) {
        ham.style.display = 'block'
        highlightImg.src = '/img/ham_big2.png'
    }

    if (items.includes('peppers')) {
        peppers.style.display = 'block'
        highlightImg.src = '/img/peppers_big2.png'
    }

    if (items.includes('onions') || items.includes('onion')) {
        onions.style.display = 'block'
        highlightImg.src = '/img/onions_big2.png'
    }

    if (items.includes('pepperoni')) {
        pepperoni.style.display = 'block'
        highlightImg.src = '/img/pepperoni_big2.png'
    }

    recognition.stop()
    wrapper.classList.remove('recording')
}

mozzarella.addEventListener('click', () => mozzarella.style.display = 'none')
mushrooms.addEventListener('click', () => mushrooms.style.display = 'none')
chicken.addEventListener('click', () => chicken.style.display = 'none')
pineapple.addEventListener('click', () => pineapple.style.display = 'none')
olives.addEventListener('click', () => olives.style.display = 'none')
ham.addEventListener('click', () => ham.style.display = 'none')
peppers.addEventListener('click', () => peppers.style.display = 'none')
onions.addEventListener('click', () => onions.style.display = 'none')
pepperoni.addEventListener('click', () => pepperoni.style.display = 'none')

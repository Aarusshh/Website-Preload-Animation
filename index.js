gsap.to('.bar', 1, {
    height:0,
    delay:3.5,
    stagger:{
        amount:1,
    }
});

gsap.to('.counter', .8 , {
    delay:3,
    opacity:0,
})

gsap.from('.h1Text', 1, {

opacity:0,
y:500,
delay:4.5,
stagger:{
    amount:1,
}
})

function loadCounter(){

    const counterElement = document.querySelector('.counter')
    var currentCounter = 0;

    function startCounter(){
        if(currentCounter === 100){
            return;
        }

        currentCounter += Math.floor(Math.random() * 10) + 1

        if(currentCounter > 100){
            currentCounter = 100;
        }

        counterElement.textContent = currentCounter;

        var delayInTimeout = Math.floor(Math.random() * 200) + 50

        setTimeout(startCounter, delayInTimeout)
    }
    startCounter();
}
loadCounter();
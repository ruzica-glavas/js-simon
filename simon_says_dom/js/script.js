//Elementi richiamati con l'id da html
const countdown= document.getElementById(`countdown`)
const instructions= document.getElementById(`instructions`)
const numbersList= document.getElementById(`numbers-list`)
const answersForm= document.getElementById(`answers-form`)
const inputGroup= document.getElementById(`input-group`)
const message= document.getElementById (`message`)


//Funzione per numeri randomici
const numbers= [];

function getRandomNumbers(min, max){
    return Math.floor(Math.random()*max)+min
}

//Controllo che i numeri non si ripetano

    for(let i=0; numbers.length<5; i++){

        let numRandom= getRandomNumbers(1,50)

        if(!numbers.includes(numRandom)){
            numbers.push(numRandom)
       
        } 
    
        console.log(numbers) // 5 numeri randomici sono stati stampati in console
    }

//Far comparire i numeri in pagina
    
    for(let i=0; i<numbers.length; i++ ){
        numbersList.innerHTML+=`<li>${numbers[i]}</li>` //i numeri compaiono in pagina
    }


//Funzione temporale per mettere il limite di 30sec (per il countdown)

let countdownTime=30
const timer = setInterval(function(){
    countdown.innerHTML= countdownTime--

    //Mettere una codizione if per far fermare il countdown a zero
    if(countdownTime<0){
    clearInterval (timer)
    answersForm.classList.remove(`d-none`)
    numbersList.classList.add(`d-none`)
    instructions.classList.add (`d-none`)
    countdown.classList.add(`d-none`)
}

}, 1000)


//Controllo dei risultati che inserisce l'utente

const btnConferma= document.querySelector(`.btn-primary`)
const formControl= document.querySelectorAll(`.form-control`)
const numUtenteCorretto = []


console.log(formControl)

btnConferma.addEventListener(`click`, function (event){
event.preventDefault()

    for(let i=0; i<formControl.length; i++){

    if(numbers.includes(parseInt(formControl[i].value))){ //Confronto dei risultati che ha inserito l'utente con i numeri randomici
        numUtenteCorretto.push((formControl[i].value))
    }
}

    message.innerHTML=`Complimenti hai indovinato ${numUtenteCorretto.length} numero/i e sono: ${numUtenteCorretto.join(",")}`

    console.log(numUtenteCorretto)

})










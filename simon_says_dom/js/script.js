//Elementi richiamati con l'id da html
const countdown= document.getElementById(`countdown`)
const instructions= document.getElementById(`instructions`)
const numbersList= document.getElementById(`numbers-list`)
const answersForm= document.getElementById(`answers-form`)
const inputGroup= document.getElementById(`input-group`)
const message= document.getElementById (`message"`)

//Elementi che mi serviranno per i numeri randomici e il timer

let randomNumbers=[];
let timerSeconds= 30;

//Funzione per numeri randomici

function getRadomNumbers(){
    const numbers= [];

    for(i=0; numbers.size<5; i++){
        
       const num= Math.floor(Math.random()*50)+1
        /*if(!numbers.includes(num)){
            numbers.push(num);
        }*/
    }
    return numbers
}

//Mostrare i numeri nella pagina

function displayNumbers(numbers) {
    numbersList.innerHTML="";
    for(let i=0; i<numbers.length; i++){
        const num=numbers[i]

        console.log(num)

        const li = document.createElement("li");
        li.textContent = num; // Imposta il testo dell'elemento
        numbersList.appendChild(li);
    }
    
}


//Funzione per il countdown

function startCountdown(){

    countdown.innerHTML=timeLeft;
    const interval=setInterval(()=>{

        timeLeft--
    
     countdown.innerHTML=timeLeft;

    })

if(timeLeft===0){
    clearInterval(interval);
    numbersList.innerHTML="";
    instructions.innerHTML="Inserisci i numeri che ti sei ricordato"
    answersForm.classList.remove();
}

}

//Funzione per il controllo delle risposte

answersForm.addEventListener("submit", (event)=>{

    event.preventDefault();

    



})



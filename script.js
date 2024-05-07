//Chiedi all’utente/essa il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito



const userName = prompt("Inserisci il tuo nome")
const userSurname = prompt("Inserisci il tuo cognome")
const userColor = prompt("Inserisci il tuo colore preferito")

console.log(`La tua password è: ${userName}${userSurname}${userColor}24`)
document.getElementById('psw').innerHTML= `La tua password é: ${userName}${userSurname}${userColor}24`
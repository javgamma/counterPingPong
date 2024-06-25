
const containerPingPong = document.createElement("div");
containerPingPong.className = "bigContainer";
containerPingPong.style.border = "1px solid #ccc";
containerPingPong.style.borderRadius = "8px";
containerPingPong.style.padding = "10px";
containerPingPong.style.margin = "10px";
containerPingPong.style.textAlign = "center";
containerPingPong.style.width = "720px";
containerPingPong.style.height="720px";
containerPingPong.style.boxShadow = "0 4px 8px rgba(0, 0, 255, 0.3)";
containerPingPong.style.display = "flex";
containerPingPong.style.justifyContent = "center";
containerPingPong.style.flexDirection = "column"
containerPingPong.style.alignContent = "center";
containerPingPong.style.alignItems = "center";


document.querySelector("body").style.display = "flex"
document.querySelector("body").style.justifyContent="center"



document.querySelector("body").appendChild(containerPingPong);

const containerCounter = document.createElement("div");
containerCounter.id = "containerCounter";


containerCounter.style.border = "1px solid #ccc";
containerCounter.style.borderRadius = "8px";
containerCounter.style.padding = "10px";
containerCounter.style.margin = "10px";
containerCounter.style.textAlign = "center";
containerCounter.style.width = "600px";
containerCounter.style.height="600px";
// containerCounter.style.boxShadow = "0 4px 8px rgba(0, 0, 255, 0.3)";
containerCounter.style.display = "flex";

containerPingPong.appendChild(containerCounter)

// const titleGame = document.createElement("h1");
// titleGame.innerText = 

const divImage = document.createElement("div");
divImage.className = "divtoBanner";
containerCounter.appendChild(divImage)

const imageCentral = document.createElement("img");

imageCentral.src="/assets/pingPongg.png"
imageCentral.style.width = "300px"
imageCentral.style.height = "200px"

divImage.appendChild(imageCentral)


const divTitle = document.createElement("div");
const h1 = document.createElement("h1")
h1.innerHTML = "Ping-Pong Game 🏓"

containerCounter.appendChild(divTitle)
divTitle.appendChild(h1)

// let maxPoints = 3; // Valor por defecto
// let player1Points = 0;
// let player2Points = 0;

//

const divCounter = document.createElement("div")
const player1Div = document.createElement("div");
player1Div.id="player1Div"
divCounter.id = "divCounter"
containerCounter.appendChild(divCounter)

const playerOneTitle = document.createElement("h2");
playerOneTitle.innerHTML = 'Player One: <span id="player1Count">0</span> points';
playerOneTitle.id = "playerOneTitle"
player1Div.appendChild(playerOneTitle);


const player2Div = document.createElement("div");
player2Div.id= "player2Div"
const playerTwoTitle = document.createElement("h2");
playerTwoTitle.id="playerTwoTitle"
playerTwoTitle.innerHTML = 'Player 2: <span id="player2Count">0</span>';
player2Div.appendChild(playerTwoTitle);
divCounter.appendChild(player1Div)
player1Div.appendChild(playerOneTitle)
divCounter.appendChild(player2Div)
player2Div.appendChild(playerTwoTitle)


const divSelect = document.createElement("div");
divSelect.id = "divSelect"
const selectLabel = document.createElement("label");
selectLabel.setAttribute("for", "maxPointsSelect");
selectLabel.textContent = "Max Points: ";
divSelect.appendChild(selectLabel);



const maxPointsSelect = document.createElement("select");
maxPointsSelect.id = "maxPointsSelect";

// const maxPointsValues = [3, 5, 7, 10, 15];
// for (let i = 0; i < maxPointsValues.length; i++) {
//   const option = document.createElement("option");
//   option.value = maxPointsValues[i];
//   option.textContent = maxPointsValues[i];
//   maxPointsSelect.appendChild(option);
// }



const option1 =document.createElement("option");
const option2 =document.createElement("option");
const option3 =document.createElement("option");
const option4 =document.createElement("option");


divSelect.appendChild(maxPointsSelect);
containerCounter.appendChild(divSelect);

const divContainerButtons = document.createElement("div");
divContainerButtons.id = "divContainerButtons";
const player1Button = document.createElement("button");
player1Button.id = "playerOneButton";
player1Button.textContent = "+1 player 1";

const player2Button = document.createElement("button");
player2Button.id = "playerTwoButton";
player2Button.textContent = "+1 player two";

const resetButton = document.createElement("button");
resetButton.id = "resetButton";
resetButton.textContent = "Reset"

containerCounter.appendChild(divContainerButtons)

divContainerButtons.appendChild(player1Button);
divContainerButtons.appendChild(player2Button);
divContainerButtons.appendChild(resetButton);


player1Button.addEventListener("click", () =>{
    console.log(player1Button);
    player1Count.textContent ++;
    if(parseInt(player1Count.textContent > player2))
})
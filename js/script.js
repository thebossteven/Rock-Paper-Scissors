 
        // GET computer choice, either rock paper or scissor
    
        const rockButton = document.querySelector(".rock");
        const paperButton = document.querySelector(".paper");
        const scissorsButton = document.querySelector(".scissors");
        let results = document.querySelector(".results");
        let roundResult = document.createElement('p');
        let compChoice;
        //create the paragraph nodes
        let winCounter = document.createElement('p');
         let loseCounter = document.createElement('p');
        results.appendChild(roundResult);
        results.appendChild(winCounter);
        results.appendChild(loseCounter)
 
        let win = 0;
        let lose = 0;
 
        rockButton.addEventListener("click", function(){
            if(win < 5 && lose < 5){
         let gameResult = playRound("rock", getCompChoice());
         counter(gameResult);
         roundResult.textContent = gameResult;
            }else if(win === 5){
                alert("You have won it all");
            }else if(lose === 5){
                alert("Try again");
            }
        
 
        });
        paperButton.addEventListener("click", function(){
            if(win < 5 && lose < 5){
         let gameResult = playRound("paper", getCompChoice());
         counter(gameResult);
         roundResult.textContent = gameResult;
        }else if(win === 5){
            alert("You have won it all");
        }else if(lose === 5){
            alert("Try again");
        }
 
        });
        scissorsButton.addEventListener("click", function(){
            if(win < 5 && lose < 5){
            let gameResult = playRound("scissors", getCompChoice());
         counter(gameResult);
         roundResult.textContent = gameResult;
        }else if(win === 5){
            alert("You have won it all");
        }else if(lose === 5){
            alert("Try again");
        }
 
        });
 
 
         function getCompChoice(){
           let rand = Math.floor(Math.random() * 3);
             if(rand === 0 ){
                 return "rock";
             }else if(rand === 1){
                 return "paper";
             }else if(rand === 2){
                 return "scissors";
             }
         }
       
 
         function playRound(choice, cChoice){
            compChoice = cChoice;
             if(compChoice === "paper"){
                switch(choice){
                    case "rock":
                        return `You lose, Computer chose ${compChoice} `;
                    case "paper":
                        return `You tied, Computer chose ${compChoice} `
                    case "scissors":
                        return `You win, Computer chose ${compChoice} `;
                }
            }else if(compChoice === "scissors"){
                switch(choice){
                    case "rock":
                        return `You win, Computer chose ${compChoice} `;
                    case "paper":
                        return `You lose, Computer chose ${compChoice} ` ;
                    case "scissors":
                        return `You tied, Computer chose ${compChoice} `;
                }
            }else if(compChoice === "rock"){
                switch(choice){
                    case "rock":
                        return `You tied, Computer chose ${compChoice} `;
                    case "paper":
                        return `You win, Computer chose ${compChoice} `;
                    case "scissors":
                        return `You lose, Computer chose ${compChoice} `;
                }
            
         }
        };
 
         function counter(result){
         //IF the returning result is win, win counter goes up
         switch(result){
             case `You win, Computer chose ${compChoice} `:
                 ++win;
                 winCounter.textContent = `Wins: ${win}`
                 loseCounter.textContent = `Losses: ${lose}`
                 break;
             case `You lose, Computer chose ${compChoice} `:
                  ++lose;
                 winCounter.textContent = `Wins: ${win}`
                 loseCounter.textContent = `Losses: ${lose}`
                 break;
              case `You tied, Computer chose ${compChoice} `:
                 winCounter.textContent = `Wins: ${win}`
                 loseCounter.textContent = `Losses: ${lose}`
                 break;
         }
 
         }
         
        
 
 
    var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        
       
    var randomLetters = letters[Math.floor(Math.random() * 26 )];
    

    
    var win = 0; 
    var lose = 0;
    var guesses = 5;
    var attmpts = [];
    document.getElementById("guessrightfool").innerHTML = win;
    document.getElementById("guesswrongfool").innerHTML = lose;
    
    
    function reset()
    {
        guesses = 5;
        randomLetters = letters[Math.floor(Math.random() * 26 )];
        attmpts = [];
        document.getElementById("guessesLeftfool").innerHTML = guesses;
        document.getElementById("letter").innerHTML = attmpts;
    }
    
    reset()
    
    
    function checkGuess(letter) {
    
    if (randomLetters == letter) {
        
        win++;
        document.getElementById("guessrightfool").innerHTML = win;
        reset()
        }
        else { 
            attmpts.push(letter);
            document.getElementById("letter").innerHTML = attmpts;
            guesses--
            document.getElementById("guessesLeftfool").innerHTML = guesses;
            
            
        }

        if(guesses == 0){lose++;
            document.getElementById("guesswrongfool").innerHTML = lose;
        reset()
        } 




    };
    
    
    
    
    
    
    document.onkeyup = function(event) {

   userGuess = event.key
    
    { if (event.keyCode >= 65 && event.keyCode <= 90) {
    
            checkGuess(userGuess.toUpperCase());
            console.log(userGuess.toUpperCase());
        }
        
            
        }
    };
    
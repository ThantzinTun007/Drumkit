window.addEventListener("keypress", function(event){
    console.log(event.key);
    if (event.key=="w"){
        document.getElementById('sound1').play()
    }
    if (event.key=="a"){
        document.getElementById('sound2').play()
    }
    if (event.key=="s"){
        document.getElementById('sound3').play()
    }
    if (event.key=="d"){
        document.getElementById('sound4').play()
    }
    if (event.key=="j"){
        document.getElementById('sound5').play()
    }
    if (event.key=="k"){
        document.getElementById('sound6').play()
    }
    if (event.key=="l"){
        document.getElementById('sound7').play()
    }

  });
 
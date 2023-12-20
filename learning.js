
var counter=0;
var id=setInterval(function() {
    counter++;
    console.log("Прошло секунд: " + counter);

    if(counter==10)
    clearInterval(id);
}, 1000);


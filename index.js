var text = document.getElementById('text');

console.log();

//var spans = document.getElementsByTagName ('span');
var spans = document.getElementsByClassName('simple-text');
for(var i = 0; i< spans.length; i++){
    console.log(spans[i].innerHTML);
}

var inputtext = document.querySelector('input[type="text"]')
var inputText

var selection = document.querySelector('select')

// inputtext.oninput = function(event){
//     console.log(event.target.value)
    
// }
// selection.oninput = function(event){
//     console.log(event.target.value)
    
// }

inputtext.onkeydown = function(event){
    console.log(event.target.value)
    
}


document.getElementsByTagName('h1').innerHTML = inputText
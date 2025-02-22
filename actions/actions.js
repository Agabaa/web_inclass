document.getElementById('myContainer').onclick = function(){
    document.body.style.backgroundColor = 'red';
}

let number = 0;
function change_text(){
    if(number == 0){;
    document.getElementById('text').innerHTML = 'this is the second fusion'
    number = 1;
    }else{
        document.getElementById('text').innerHTML = 'this is the first html,css and javascript'
        number = 0;
    }
}
function send(){
    var valid = true;
    var elems = document.forms[0].elements;
    for(var i = 0; i < document.forms[0].length; i++){
        if( elems[i].getAttribute('type') == 'text' ||
            elems[i].getAttribute('type') == 'password' ||
            elems[i].getAttribute('type') == 'email'){
                if(elems[i].value == " "){
                    elems[i].style.border = '2px solid red';
                    valid = false;
                }
            }
    }
    if(!valid){
        alert('Заповніть всі поля!!!')
        return false;
    }
}

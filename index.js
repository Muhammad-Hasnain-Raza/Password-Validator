let in_visible = false

function see(){
    var input = document.getElementById("password")
    var see = document.getElementById("see")

    if(in_visible){
        input.type = 'password'
        is_visible = false
    }else{
        input.type = 'text'
        is_visible = true
    }
}

function check(){
    var input = document.getElementById("password").value

    if(input.match(/[0-9]/i)){
        document.getElementById("check0").style.color = "green";
    }else{
        document.getElementById("check0").style.color = "red";
    }

    
    if(input.match('')){
        document.getElementById("check1").style.color = "green";
    }else{
        document.getElementById("check1").style.color = "red";
    }

    if(input.length >= 5){
        document.getElementById("check2").style.color = "green";
    }else{
        document.getElementById("check2").style.color = "red";
    }

    if(input.length <= 15){
        document.getElementById("check3").style.color = "green";
    }else{
        document.getElementById("check3").style.color = "red";
    }

    if(input.match(/[^A-Za-z0-9-'']/i)){
        document.getElementById("check4").style.color = "green";
    }else{
        document.getElementById("check4").style.color = "red";
    }
}
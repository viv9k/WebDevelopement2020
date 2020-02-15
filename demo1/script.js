function submit(){
    var email = document.getElementById("email").value;
    console.log(email);

    if(email != "")
    {
        document.getElementById("result").style.color = "green";
        document.getElementById("showResult").innerHTML = email;
    }
    else
    {
        document.getElementById("result").style.color = "red";
        document.getElementById("showResult").innerHTML = "Please Enter Some data";
    }

    
    document.getElementById("result").style.textAlign = "center";
}
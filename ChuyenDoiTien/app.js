function result() {
    let inputnumber, inputnumber2, inputnumber3, result;
    inputnumber=parseInt(document.getElementById("inputnumber").value);
    inputnumber2=+document.getElementById("inputnumber2").value;
    inputnumber3=+document.getElementById("inputnumber3").value;
    result= (inputnumber3/inputnumber2)*inputnumber;
    document.getElementById("result").value=result;
}
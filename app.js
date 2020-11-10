function multiplyBy()
{
        num1 = Number(document.getElementById("num1").value)
        num2 = Number(document.getElementById("num2").value)
        document.getElementById("result").innerHTML = num1 * num2 + " is the answer";
}

function add()
{
        num1 = Number(document.getElementById("num1").value)
        num2 = Number(document.getElementById("num2").value)
        document.getElementById("result").innerHTML = num1 + num2 + " is the answer";

}

function subtract()
{
        num1 = Number(document.getElementById("num1").value)
        num2 = Number(document.getElementById("num2").value)
        document.getElementById("result").innerHTML = num1 - num2 + " is the answer";
}

function divide()
{
        num1 = Number(document.getElementById("num1").value)
        num2 = Number(document.getElementById("num2").value)
        document.getElementById("result").innerHTML = num1 / num2 + " is the answer";
}

function percentage()
{
        num1 = Number(document.getElementById("num1").value)
        num2 = Number(document.getElementById("num2").value)
        document.getElementById("result").innerHTML = num1 / num2 * 100 + "%" + " is the answer";
}


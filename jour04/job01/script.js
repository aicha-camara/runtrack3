async function afficherExpression(){
    const url = "expression.txt";
    const response = await fetch(url);
    const text = await response.text();
    document.querySelector("p").innerHTML = text;
}
document.getElementById("button").addEventListener("click",afficherExpression);
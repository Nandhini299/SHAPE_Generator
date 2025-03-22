// select button

var button = document.getElementById("button"); 
var numberInShape = 1;  //1 la irunthu dha shape start aagum
var oldvalue=0;  //continue ah vara old value use panrom

//click panna on aaga button onclick panrom
button.onclick =() =>
{
    let n = document.getElementById("number").value;
    const circle = document.getElementById("circle");
    const square = document.getElementById("square");
    const rectangle = document.getElementById("rectangle");
    const oval = document.getElementById("oval");
    const box = document.getElementById("box");
    const color = document.getElementById("color");

    n = Number(n)+Number(oldvalue); //5+0
    for(let j=numberInShape;j<=n;j++) 
    {
        let shape = document.createElement("div");  //creating new element
        shape.innerHTML += numberInShape  //for creating separate div 
        if(circle.checked) 
        {
            shape.classList.add("circle");
        }
        else if(square.checked)
        {
            shape.classList.add("square");
        }
        else if(rectangle.checked)
        {
            shape.classList.add("rectangle")
        }
        else if(oval.checked)
        {
            shape.classList.add("oval");
        }
        else
            document.write("Invalid Input");



        if(color.value)
            shape.style.backgroundColor = color.value; 
        
        numberInShape++;
        box.appendChild(shape);
        oldvalue= document.getElementById("box").lastElementChild.innerHTML; //updating old value
    }
};



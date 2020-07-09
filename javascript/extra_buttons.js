/*Created 7/7/2020 by Sean Michaels
Edited 7/9/2020 by Reema Gupta: added sin, cos and tan button generation
Edited 7/9/2020 by Duytan Tran: added factorial button
* Generation of the extra buttons.*/

/*
    Created 7/7/2020 by Sean Michaels
    Pi button generation
*/
developButton("extra", 'π', "pi", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = 3.14159265359;
});

/*
    Created 7/7/2020 by Sean Michaels
    Sign button generation
*/
developButton("extra", '+/-', "sign", e => {
    const display = document.getElementsByClassName("display")[0];
    if(display.innerHTML > 0){
        display.innerHTML = -display.innerHTML;
    }else {
        display.innerHTML = Math.abs(display.innerHTML);
    }
});

/*
    Created 7/7/2020 by Sean Michaels
    e button generation
*/
developButton("extra", 'e', "euler's", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = 2.71828;
});

/*
    Created 7/7/2020 by Sean Michaels
    square root button generation
*/
developButton("extra", '√x', "square_root", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = Math.sqrt(display.innerHTML);
});

/*
    Created 7/9/2020 by Reema Gupta
    trigonometry button generation (sin)
*/
developButton("ops", 'sin', "sin", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = Math.sin(display.innerHTML);
});

/*
    Created 7/9/2020 by Reema Gupta
    trigonometry button generation (cos)
*/
developButton("ops", 'cos', "cosine", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = Math.cos(display.innerHTML);
});

/*
    Created 7/9/2020 by Reema Gupta
    trigonometry button generation (tan)
*/
developButton("ops", 'tan', "tangent", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = Math.tan(display.innerHTML);
});

/*
    Created 7/9/2020 by Duytan Tran
    Factorial button generation, forces input to be integer
*/
developButton("extra1", '!', "factorial", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = factorial(parseInt(display.innerHTML));
});

/*
    Created 7/9/2020 by Duytan Tran
    Factorial algorithm that recursively calculates the factorial of a number
    @param input: integer to be calculated
*/
function factorial(input){
    if(input == 0){
        return 1;
    } else {
        return input * factorial(input - 1);
    }
}

/*
    Created 7/9/2020 by Duytan Tran
    Absolute value button generation
*/
developButton("extra1", 'abs', "absolute_value", e => {
    const display = document.getElementsByClassName("display")[0];
    display.innerHTML = Math.abs(parseFloat(display.innerHTML));
});

let calculus = [];
let x = 0;
let buttonPressed = 0;
let buttonPressed02 = 0;
let buttonPressed03 = 0;
let buttonPressed04 = 0;
let buttonPressedMaster = 0;
let dot = 0;



const buttons = document.getElementsByClassName('button');

Array.from(buttons).forEach(button => {
    button.addEventListener('click', doStuff);
});

function doStuff() {
    var value = this.getAttribute('value');
    if (value == 'reset'){
        location.reload();
    }

    if(buttonPressedMaster != 0){
        return;
    }else {

    if (this.classList.contains('num') == true){     
        buttonPressed02 = 0;                       //NUMBERS
        buttonPressed04 = 1;
        function showScreen02() {
            let screen = document.getElementById('screen02');
            let text = document.createTextNode(value);
        
            if(buttonPressed == 0){
                screen.textContent = (value);
                buttonPressed = 1;
                calculus[x] = 0;
            }
            else {
            screen.appendChild(text);
            }
        
            calculus[x] =  calculus[x] + value;
            console.log(calculus);
            buttonPressed03 = 1;
            return;
        }
    showScreen02();
    }

    else if (this.classList.contains('dig') == true){                         //DIGS
        const screen02 = document.getElementById('screen02');
        const screen01 = document.getElementById('screen01');

        screen01.appendChild(document.createTextNode(screen02.textContent));
        screen02.textContent = "0";
        
        buttonPressed = 0;
        buttonPressed04 = 0;

        if(buttonPressed02 == 0){
            buttonPressed02 = 1;
            dot = 0;

        const value = this.getAttribute('value');
        
        if(value == '-'){
            screen01.appendChild(document.createTextNode(' - '));
            if(buttonPressed03 == 0){
                calculus[x] = 0;
                x++;
                calculus[x] = value;
            console.log(calculus);
            x++;
                }else {
                    x++;
            calculus[x] = value;
            console.log(calculus);
            x++;
                }

        } else if(value == '+'){
            screen01.appendChild(document.createTextNode(' + '));
            if(buttonPressed03 == 0){
                calculus[x] = 0;
                x++;
                calculus[x] = value;
            console.log(calculus);
            x++;
                }else{
                    x++;
            calculus[x] = value;
            console.log(calculus);
            x++;
                }

        }else if(value == '*'){
            screen01.appendChild(document.createTextNode(' x '));
            if(buttonPressed03 == 0){
                calculus[x] = 0;
                x++;
                calculus[x] = value;
            console.log(calculus);
            x++;
                }else{
                x++;
            calculus[x] = value;
            console.log(calculus);
            x++;
                }

        }else if(value == '/'){
            screen01.appendChild(document.createTextNode(' ÷ '));
            if(buttonPressed03 == 0){
            calculus[x] = 0;
            x++;
            calculus[x] = value;
            console.log(calculus);
            x++;
            }else {
                x++;
            calculus[x] = value;
            console.log(calculus);
            x++;
            }

        }
        } else {
            calculus[x] = '0';
            buttonPressed02 = 0;
            console.log(calculus);
        }
        return;
    }

    }

    if(this.classList.contains('dot') == true){
        buttonPressed04 = 0;
        if(dot != 0){
            return;
        }else {
            buttonPressed02 = 0;  
            dot = 1;     
            function showScreen02() {
                let screen = document.getElementById('screen02');
                let text = document.createTextNode(value);
            
                if(buttonPressed == 0){
                    screen.textContent = ('0'+value);
                    buttonPressed = 1;
                    calculus[x] = 0;
                }
                else {
                screen.appendChild(text);
                }
            
                calculus[x] =  calculus[x] + value;
                console.log(calculus);
    
                return;
            }
            showScreen02();             
        }
return;
   
}}

function result() {
    const screen02 = document.getElementById('screen02');
    const screen01 = document.getElementById('screen01');
    buttonPressedMaster = 1;
    if(buttonPressed04 == 0){
        return;
    }else{

    screen01.appendChild(document.createTextNode(screen02.textContent));
    screen02.textContent = "0";
        
    buttonPressed = 0;

    let solved = 0;

    let conta = calculus.map(v => isFinite(v) ? +v : v);
    console.log(conta);

    while(conta.findIndex(y => y == '/') != -1){
        let sym = conta.findIndex(y => y == '/');
        let num1 = conta[sym - 1];
        let num2 = conta [sym + 1];
        conta.splice(sym-1, 1, (num1/num2));
        conta.splice(sym, 1);
        conta.splice(sym, 1);

        console.log(conta, 'div');
        if(conta.length == 2){
            conta.pop();
            console.log(conta);
        }

    }
    while(conta.findIndex(y => y == '*') != -1){
        let sym = conta.findIndex(y => y == '*');
        let num1 = conta[sym - 1];
        let num2 = conta [sym + 1];
        conta.splice(sym-1, 1, (num1*num2));
        conta.splice(sym, 1);
        conta.splice(sym, 1);

        console.log(conta, 'mult');
        if(conta.length == 2){
            conta.pop();
            console.log(conta);
        }

    }
    while(conta.findIndex(y => y == '-') != -1){
        let sym = conta.findIndex(y => y == '-');
        let num1 = conta[sym - 1];
        let num2 = conta [sym + 1];
        conta.splice(sym-1, 1, (num1-num2));
        conta.splice(sym, 1);
        conta.splice(sym, 1);

        console.log(conta, 'min');
        if(conta.length == 2){
            conta.pop();
            console.log(conta);
        }

    }
    while(conta.findIndex(y => y == '+') != -1){
        let sym = conta.findIndex(y => y == '+');
        let num1 = conta[sym - 1];
        let num2 = conta [sym + 1];
        conta.splice(sym-1, 1, (num1+num2));
        conta.splice(sym, 1);
        conta.splice(sym, 1);

        console.log(conta, 'add');
        if(conta.length == 2){
            conta.pop();
            console.log(conta);
        }

    }

    solved = conta[0];
    solved = Math.round(solved * 1000000000) / 1000000000;

    document.getElementById("screen02").textContent = solved;
    console.log(typeof solved);

    buttonPressed04 = 0;

    return;

}}
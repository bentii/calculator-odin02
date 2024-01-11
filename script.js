let calculus = [];
let x = 0;
let buttonPressed = 0;
let buttonPressed02 = 0;
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

    if (this.classList.contains('num') == true){     
        buttonPressed02 = 0;                       //NUMBERS
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

        if(buttonPressed02 == 0){
            buttonPressed02 = 1;
            dot = 0;

        const value = this.getAttribute('value');
        
        if(value == '+'){
            screen01.appendChild(document.createTextNode(' + '));
            x++;
            calculus[x] = value;
            console.log(calculus);
            x++;

        } else if(value == '-'){
            screen01.appendChild(document.createTextNode(' - '));
            x++;
            calculus[x] = value;
            console.log(calculus);
            x++;

        }else if(value == '*'){
            screen01.appendChild(document.createTextNode(' x '));
            x++;
            calculus[x] = value;
            console.log(calculus);
            x++;

        }else if(value == '/'){
            screen01.appendChild(document.createTextNode(' ÷ '));
            x++;
            calculus[x] = value;
            console.log(calculus);
            x++;

        }
        } else {
            calculus[x] = '0';
            buttonPressed02 = 0;
            console.log(calculus);
        }
        return;

    }

    if(this.classList.contains('dot') == true){
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
    while(conta.findIndex(y => y == '+') != -1){
        let sym = conta.findIndex(y => y == '+');
        let num1 = conta[sym - 1];
        let num2 = conta [sym + 1];
        conta.splice(sym-1, 1, (num1+num2));
        conta.splice(sym, 1);
        conta.splice(sym, 1);

        console.log(conta, 'sum');
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
    if(conta[0] % 1 != 0){
    solved = conta[0].toFixed(3);
    }else {solved = conta[0]};

    if(solved == 4){
        solved = 5;
    }

    document.getElementById("screen02").textContent = solved;

}
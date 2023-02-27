const buttons = document.querySelectorAll('button');

let currentOperandEl = document.querySelector('.current-operand');

let previousOperandEl = document.querySelector('.previous-operand');

// console.log(buttons);

let string = '';
Array.from(buttons).forEach((button) => {

    // console.log(button);
    button.addEventListener('click', (event) => {

        if (event.target.innerText === '=') {

            string=eval(string);
            previousOperandEl.innerText=string;

        }
        else if(event.target.innerText === 'AC'){

            string='';
            previousOperandEl.innerText=string;
            currentOperandEl.innerText=string;
        }
        else if(event.target.innerText === 'DEL'){

            string=string.slice(0,-1);
            currentOperandEl.innerText=string;
        }
        else {
            // console.log(event.target);
            string = string + event.target.innerText;
            currentOperandEl.innerText = string;
        }
    })

})
// ----------------------------------FUNCTIONS -------------------------------------

//  MATH OPERATION FUNCTIONS
function add(a,b){
    return  a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply ( a, b ){
     return a * b;
}

function divide (a, b){
    return a / b;
}

function operate (a , b , operator){
    if (operator === '+'){
        return add(a,b);
    } else if (operator === '-'){
        return subtract(a,b);
    }else if (operator === '*'){
        return multiply ( a, b );
    }else if (operator === '/'){
        return divide (a, b);
    }else{
        return 'retype pls';
    }
}


function calculate( array ){
   
        let partsOfOperation = [];
        let result=0;
    
    // Addition

        if (array.includes('+')){
           
           partsOfOperation = array.join('').split('+');
           result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'+')
           return result;
           
        }

    // Subtraction or Negative numbers
        if(array.includes('-')){

            let operatorCounter = array.filter(character => character == '-');
           
            // Negative number & 1 -
            if(operatorCounter.length === 1 && array[0] === '-'){
                    if (array.includes('+')){
            
                        partsOfOperation = array.join('').split('+');
                        result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'+')
                        return result;
                        
                    }

                    if (array.includes('*')){
            
                        partsOfOperation = array.join('').split('*');
                        result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'*')
                        return result;
                        
                    }

                    if (array.includes('/')){
            
                        partsOfOperation = array.join('').split('/');
                        result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'/')
                        return result;
                        
                    }

            }
            
            //Non negative number & 1 -
            if(operatorCounter.length === 1 && array[0] !== '-'){
                partsOfOperation = array.join('').split('-');
                result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'-')
                return result;

            }

            //Negative number & 2 -
            
            if (operatorCounter.length === 2 && array[0] === '-'){
                array[0]= 'n';
                partsOfOperation = array.join('').split('-');
                partsOfOperation[0] = partsOfOperation[0].replace('n', '-');
                result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'-')
                return result;

            }               
           
        }

    // Multiplication
        if (array.includes('*')){
           
            partsOfOperation = array.join('').split('*');
            result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'*')
            return result;
            
         }

    // Division
        if (array.includes('/')){
           
            partsOfOperation = array.join('').split('/');
            result = operate(parseFloat(partsOfOperation[0]),parseFloat(partsOfOperation[1]) ,'/')
            return result;
            
         }
    
}

//Display box
function display(showElement){
    
    resultBox.innerHTML = showElement;
};


//___________________ BUTTONS_______________

// select document elements to display
const btn = document.querySelectorAll('button');
const resultBox = document.getElementById('results');
const executeButtons = document.querySelectorAll('.give_result');

let btnValuesArray=[];
let previousValue=0;

//Digit & operator Buttons
btn.forEach((button)=>{button.addEventListener('click',() =>{
       btnValuesArray.push(button.value);
       console.log(btnValuesArray.length);
       console.log(btnValuesArray[btnValuesArray.length-1]);
       if ((btnValuesArray.includes('/') && btnValuesArray[0]!=='-' && btnValuesArray[btnValuesArray.length-1]==='0')||(btnValuesArray.includes('/') && btnValuesArray[0]==='-' && btnValuesArray[btnValuesArray.length-1]==='0')){
        alert('Will you divide by 0?🧐 --> Oh no!!🙀 ');   
    }
       display(btnValuesArray.join(''));
    
    //Automatically executing the result of 2 numbers(before 2nd operator exists except of negative values where 3 operator)
       let operator = btnValuesArray.filter((element)=> (element=='-'||element=='+'||element=='*' ||element=='/'));
       let operatorsLength = operator.length;

      if ((btnValuesArray.join('-')[0]!=='-' && operatorsLength>1) ||(btnValuesArray.join('-')[0]==='-' && operatorsLength>2)){
        let oper = btnValuesArray.pop();
        console.log(`test:${oper}`);
        console.log(btnValuesArray[2]);
        console.log(btnValuesArray);
        previousValue = calculate (btnValuesArray);
       
        let decimals = `${previousValue%1}`;
             console.log(decimals);
             
             if(decimals.length>3){
                display(previousValue.toFixed(3)); 
             }else{
                display(previousValue);
             }
        
        console.log(previousValue);
        btnValuesArray=[];
        btnValuesArray.push(previousValue.toString());
        btnValuesArray.push(oper);
               
        console.log(btnValuesArray);
      }
   
    
    });
});


// Calculate & clear Button
executeButtons.forEach((button)=>{button.addEventListener ('click', () =>{

        if (button.value == 'Calculate'){
            if ((btnValuesArray.includes('/') && btnValuesArray[0]!=='-' && btnValuesArray[btnValuesArray.length-1]==='0')||(btnValuesArray.includes('/') && btnValuesArray[0]==='-' && btnValuesArray[btnValuesArray.length-1]==='0')){
                alert('Will you divide by 0?🧐 --> Oh no!!🙀 ');   
            };
             let result = calculate (btnValuesArray);
             console.log(`test${result}`);
             let decimals = `${result%1}`;
             console.log(decimals);
             
             if(decimals.length>3){
                display(result.toFixed(3)); 
             }else{
                display(result);
             }
             
             return result;
                
        }else if (button.value == 'Clear All'){ 
            btnValuesArray=[];
            display(' ');
            console.clear();
        
        }else{
            btnValuesArray.pop();
            display(btnValuesArray.join(''));
            
        }
    })
  });
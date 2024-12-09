let num1=null
let num2=null
let operator=null

function calculate(val){
    const display=document.getElementById("display")
    if(Number.isInteger(val) || val=='.'){
        display.value+=val
        return

    }

    if(['+','-','*','/'].includes(val)){
            if(display != null){
                operator=val
                num1=parseFloat(display.value)
                display.value=""
                return
            }
    }

    if(val=="="){
        let result
        console.log(num1)
        
         num2=parseFloat(display.value)
        switch(operator){
             case '+':
                 result=num1+num2
                 display.value=result
                 return
             case '-':
                result=num1-num2
                display.value=result
                return
             case '*':
                 result=num1*num2
                 display.value=result
                 return
             case '/':
                 result=num1/num2
                 display.value=result
                 return    
          }
          console.log(result)
          num1=null
          num2=null
          operator=null      
    }

}
function clearCalc(){
    document.getElementById("display").value=""
    num1=null
    num2=null
    operator=null
}
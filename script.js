function calculate(val){
    if(Number.isInteger(val) || val=='.'){
         document.getElementById("display").value+=val;
        
    }
    var num1=document.getElementById("display").value;
    if(val=='+' || val=='-' || val=='*' || val=='/'){


        document.getElementById("display").value=""
        var operator=val;
        var num1
        num1=num
        num=0
    }
    else if(val=='='){
        console.log(num1);
        console.log(num);

        if(operator=='+'){
            document.getElementById("display").value=num+num1;
        }
        else if(operator=='-'){
            document.getElementById("display").value=num-num1;
        }
        else if(operator=='*'){
            document.getElementById("display").value=num*num1;
        }
        else if(operator=='/'){
            document.getElementById("display").value=num/num1;
        }
    }

    

}
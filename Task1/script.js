   function display(){
            let obj=document.getElementById("reverse")
            let number =obj.value.trim();
 
         function reverseTheNumber(number){

             var strnumber=number.toString();
             let num=Array.from(strnumber).reverse().join('')
             return parseInt(num);
             
         }

         let result=reverseTheNumber(number)
         document.getElementById("result").innerText=result;
        }
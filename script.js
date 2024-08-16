
numbers = ["0","1","2","3","4","5","6","7","8","9"]


function updateExpressions(expressions, index, result) {
    if (index >= expressions.length) return expressions;
    
    // Replace occurrences of the solved expression in the next expressions
    const updatedExpressions = expressions.map((expr, i) => {
        if (i === index + 1) {
            // Replace the solved expression with its result and remove parentheses
            return expr.replace(`(${expressions[index]})`, result);
        }
        return expr;
    });

    return updatedExpressions;
}




function brackestsBreaker(arg,arr){

    if(arg.includes("(")){
        arg = arg.substring(arg.indexOf("(")+1,arg.lastIndexOf(")"))
        arr.push(arg)
        return brackestsBreaker(arg,arr)
    }
    

    return math.caluclate(solveBracket(arr))

}

function solveBracket(arr){
    
    arr.reverse()
    arr.forEach((item , index) => {
        const result = math.caluclate(item)
        const temp = updateExpressions(arr,index,result)

        arr = temp
    });
    return arr[arr.length-1]
}
/*
base case if the index == the len of the string return 

if entered close == fasle  unitle didect ( in the closing 


*/

function numbersCorrector(str){
    if(str.includes("(")){
        
    }

    builder = []
let ss = str.split("")

ss.reduce((prv , cur,index)=>{

    if(index == 1){ builder.push(prv)}

    if(numbers.includes(cur)) {builder.pop();prv +=cur }

   
    else{
        
        prv = ""
        builder.push(cur)
    }

builder.push(prv)
return prv

})

builder = builder.map(function(item) {

    if(numbers.includes(item.charAt(0))){
       item=+item
    }

    return item

})

    

return builder
}

const math={

     addMethod : function(name,func){

        math[name] = func
    }
    ,eval:(arr)=>{
        let index= 1
        
        
        
        if(arr.length == 1){
            return arr[0]
        }

        if(arr.length == 3){
           
            return math.select(arr)
        }

        if(arr.includes("/")) index = arr.indexOf("/")

        else if(arr.includes("*")) index = arr.indexOf("*") 
        
        let start = index -1
        let end = index +2
        let temp = math.eval(arr.slice(start,end))
        arr.splice(start,end,temp)

        
        
        
    return math.eval(arr)
    }
    ,add : (a,b) => a+b
    ,subtract : (a,b) => a-b
    ,multiply : (a,b) => a*b
    ,divide : (a,b) => a/b

    ,select:(arr)=> {
       
        if(arr[1] === "+"){return math.add(arr[0],arr[2])}
        if(arr[1] === "-"){return math.subtract(arr[0],arr[2])}
        if(arr[1] === "/"){return math.divide(arr[0],arr[2])}
        if(arr[1] === "*"){return math.multiply(arr[0],arr[2])}
    }

    ,caluclate: (text)=>{

        let arr = numbersCorrector(text)
        return math.eval(arr)
    }
}

let temp = "1+((5+9)+9-2+5-8)"

temp = brackestsBreaker(temp,[])

console.log(temp)
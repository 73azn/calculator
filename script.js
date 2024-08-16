
const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const op = ["÷","x","-","+","=","AC"]


/*
base case if the index == the len of the string return 

if entered close == fasle  unitle didect ( in the closing 


*/

function numbersCorrector(str){


    builder = []
let ss = str.split("")

ss.reduce((prv , cur,index)=>{

    if(index == 1){ builder.push(prv)}
    // if(op.includes(prv) && op.includes(cur))
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

builder = builder.map((item,index,self)=>{
    
    if(item === ''&&self[index+1] ==="-"){

        self[index+2] = -self[index+2]
    }
 

    return item
})



    
console.log(builder)
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

        if(arr.includes("÷")) index = arr.indexOf("/")

        else if(arr.includes("x")) index = arr.indexOf("*") 
        
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
        if(arr[1] === "÷"){return math.divide(arr[0],arr[2])}
        if(arr[1] === "x"){return math.multiply(arr[0],arr[2])}
    }

    ,caluclate: (text)=>{

        let arr = numbersCorrector(text)
        let val = math.eval(arr)
        if(isNaN(val)) return "Error"
        return val
    }
}

const display = document.querySelector(".display")
const numberCon = document.querySelector(".func-op")

const button = document.querySelectorAll("button")

function loader(){

    op.forEach((number) =>{

        const btn = document.createElement("button")

       
        btn.textContent = number
        btn.addEventListener("click",(e)=>{
            let val = e.target.textContent
            
            if(val == "AC"){clear()}
            else if (val =="=")(display.textContent = math.caluclate(display.textContent))
            else display.textContent += val
        })
        numberCon.appendChild(btn)

    })
}

const clear = () =>{

    display.textContent = ""
}

loader()



button.forEach((item)=>{


    item.addEventListener("click",(e)=>{

        let value = e.target.textContent
       
        {display.textContent += value}

    })
})

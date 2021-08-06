const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0;
var recursionSum = function(){
    readLine.question("Enter number: ", num=>{
        if(num === "stop"){
            console.log(sum);
            readLine.close();
        }else{
            sum+= parseInt(num);
            recursionSum();
        }
            }
        )
}
recursionSum();
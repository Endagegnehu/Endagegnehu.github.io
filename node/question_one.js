const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('What is your name? ', inputs =>{
    console.log(`Welcome ${inputs}`);
    readLine.question('What is your age? ', input =>{
        if (input< 16) {
            console.log('You’re not allowed to drive in Iowa');
        }else{
            console.log(`You’re allowed to get a drivers license in Iowa`);
        }
        readLine.close()
    })
})

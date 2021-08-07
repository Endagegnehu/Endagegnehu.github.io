// module.exports.drive = function() {
//     console.log("The car moves forward");
//     }
//     module.exports.turn = function(degrees) {
//     console.log(`The car turns ${degrees}`);
//     }
//     module.exports.break = function() {
//     console.log("the car stops");
//     }


class Duck{
    Duck(flying = false, quaking= false,xPos = 0,yPos= 0){
        this.flying = flying;
        this.quaking = quaking;
        this.xPos = xPos;
        this.yPos = yPos;
    }
    takeOff(){
        this.flying = true;
    }
    land(){
        this.flying = false;
    }
    startQuacking(){
        this.quaking = true;
    }
    stopQuacking(){
        this.quaking = false;
    }
    moveTo(x,y){
        this.xPos = x;
        this.yPos = y;
    }
    status(){
        if(this.flying === false && this.quaking === false){
            console.log(`Duck is swimming to ${this.xPos},${this.yPos}`);
        }else if(this.flying === false && this.quaking === true){
            console.log(`Duck is swimming to ${this.xPos},${this.yPos} while quacking`);
        }else if(this.flying === true && this.quaking === false){
            console.log(`Duck is flying to ${this.xPos},${this.yPos}`);
        }else{
            console.log(`Duck is flying to ${this.xPos},${this.yPos} while quacking`);
        }
    }
}
module.exports = Duck;

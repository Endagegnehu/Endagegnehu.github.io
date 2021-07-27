// initialize mocha
mocha.setup('bdd');
// chai has a lot of stuff, let's make assert global
let assert = chai.assert;

function sum(array) {
  return array.reduce(function(accumulator, element){
       return accumulator += element;
   },0);
}
function multiply(array){
    return array.reduce(function(accumulator, element){
        return accumulator *= element;
    },1);
}

function reverse(str){
    return str.split('').reduce((acc,cur)=> cur+acc ,'')
}

function filterLongWords(strArray, i){
    return strArray.filter((ele)=>ele.length > i)
}

describe("Sum of Array", function () {
    it("Takes array = [1,2,3,4], and returns the sum = 10",
        function () {
            assert.equal(10,sum([1,2,3,4]));
        });
});

describe("Multiply Array", function () {
    it("Takes array = [1,2,3,4], and returns the sum = 24",
        function () {
            assert.equal(24,multiply([1,2,3,4]));
        });
});

describe("Revers string", function () {
    it("Takes lema is good, and returns doog si amel",
        function () {
            assert.equal('doog si amel',reverse('lema is good'));
        });
});

describe("Filter Long Words", function () {
    it("Takes ['lala','pop','amaha','cocacola'], 3, and returns ['lala', 'amaha', 'cocacola'] ",
        function () {
            assert.deepEqual(['lala', 'amaha', 'cocacola'],filterLongWords(['lala','pop','amaha','cocacola'],3));
        });
});
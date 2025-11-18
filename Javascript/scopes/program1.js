function createCounter(value = 0){
    let count = value || 0;

    return{
        increment : function(value = 1){
            count += value;
            return count;
        },
        decrement : function(value = 1){
            count -= value;
            return count;
        }
    } 
}

const counter = createCounter(10);
console.log(counter.increment(2)); //1
console.log(counter.increment(5)); //2
console.log(counter.increment()); //3

console.log(counter.decrement()); //2
console.log(counter.decrement()); //1
console.log(counter.decrement()); //0
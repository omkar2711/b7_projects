function createIdCounter(){
    let count = 0;

    return function(){
        count++;

        return "ID" + count;
    }
}


const Counter = createIdCounter();
console.log(Counter()); //ID1
console.log(Counter()); //ID2
console.log(Counter()); //ID3
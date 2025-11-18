function fetchData(cb){
    setTimeout(function(){
        const data = {name: "John", age: 30};
        cb(data);
    }, 2000);
}

function handleData(data){
    console.log(data.name);
}



fetchData(handleData);

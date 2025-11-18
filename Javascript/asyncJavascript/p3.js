//promises
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            const data = {name: "John", age: 30};
            resolve(data);
        }, 2000);
    });
}

function handleData(data){
    console.log(data.name);
}

fetchData().then(handleData)
.catch(function(err){
    console.log("Error occurred " + err.message);
}).finally(function(){

    //reTry Mechanism
    console.log("Fetch attempt finished");
});
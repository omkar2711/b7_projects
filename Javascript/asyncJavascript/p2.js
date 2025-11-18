function delayGreeting(name, cb){
    setTimeout(function(){
        cb(name);
    }, 3000);
}


function f2(){
    console.log("f2 executed");
}

function f3(){
    console.log("f3 executed");
}

function greet(name){
    f2(f3());
    console.log("Hello " + name);
}

delayGreeting("ABC", greet);
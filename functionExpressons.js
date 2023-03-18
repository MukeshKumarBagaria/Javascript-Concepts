function fun(){
    console.log("function fun is called");
}


function gun(fun){
    console.log("inside the function gun");

    fun();
    console.log("leaving the function gun");
}

gun(function(){
    console.log("some new function");
})


console.log("........................")

gun(fun);
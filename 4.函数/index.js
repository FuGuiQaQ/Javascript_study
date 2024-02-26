
// test(1,22,33);
// function test(current){
//     console.log(current);
//     console.log(arguments);    //arguments 实参列表
// }

// 任意数求和 

function sum(){
   var text=0;
    for(var i=0;i<arguments.length;i++){
        text+=arguments[i];
    }
    console.log(text);
}
sum(1,2,3);
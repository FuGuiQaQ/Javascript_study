// var a=1;
// switch(a){
//     case 1:
//         console.log("a");
//         break;
//     case 2:
//         console.log("b");
//     case 3:
//         console.log("c");
// }

// var arr =[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,]
// console.log(arr);
var obj={
    lastName:"富贵",
    age:19
}
console.log(obj)
var arr=[obj,obj];
console.log (typeof((arr[0].lastName)));
var last_name=[];
for(var i=0;i<arr.length;i++){
    last_name.push(arr[i].lastName);
}
console.log(last_name);


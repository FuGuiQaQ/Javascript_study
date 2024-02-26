// 返回动物叫声
// function animalCall(current){
//     var result="";
//     switch(current){
//         case "狗":
//             result="汪";
//             break;
//         case "猫":
//             result="喵";
//             break;
//         case "羊":
//             result="咩";
//             break;
//         default:
//             result="啥动物我咋不知道";
//             break;
//     }
//     return result;
// }
// var call=animalCall("咩");
// console.log(call);

// 加法运算
// function Sum(num1,num2){
//     var sum=num1+num2;
//     return sum;
// }
// var c=Sum(1,222)
// console.log(c);

// 输入数字逆转并输出汉字形式
// me
// function test(current) {
//   var obj0 = {
//     num: 0,
//     text: "零",
//   };
//   var obj1 = {
//     num: 1,
//     text: "一",
//   };
//   var obj2 = {
//     num: 2,
//     text: "二",
//   };
//   var obj3 = {
//     num: 3,
//     text: "叁",
//   };
//   var obj4 = {
//     num: 4,
//     text: "四",
//   };
//   var obj5 = {
//     num: 5,
//     text: "五",
//   };
//   var obj6 = {
//     num: 6,
//     text: "六",
//   };
//   var obj7 = {
//     num: 7,
//     text: "七",
//   };
//   var obj8 = {
//     num: 8,
//     text: "八",
//   };
//   var obj9 = {
//     num: 9,
//     text: "九",
//   };
//   var arr = [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];
//   var first = "";
//   var two = "";
//   var last_one = "";
//   first = parseInt(current / 100);
//   two = parseInt((current % 100) / 10);
//   last_one = parseInt(current % 10);
//   for (var i = 0; i < arr.length; i++) {
//     if (last_one == arr[i].num) {
//       console.log(arr[i]);
//       last_one = arr[i].text;
//     }
//     if (two == arr[i].num) {
//       console.log(arr[i]);
//       two = arr[i].text;
//     }
//     if (first == arr[i].num) {
//       console.log(arr[i]);
//       first = arr[i].text;
//     }
//   }
//   return last_one + two + first;
// }
// var content = test(231);
// console.log(content);

// jic
// 反转内容并输出
function reverse(){
  var num=window.prompt('input');
  var newString="";
  for(var i=num.length-1;i>=0;i--){
    newString+=transLators(num[i]);
  }
  console.log(newString);
}
function transLators(target){
  switch(target){
      case "1":
      return "一";
      case "2":
      return "二";
      case "3":
      return "三";
      case "4":
      return "四";
      case "5":
      return "五";
      case "6":
      return "六";
      case "7":
      return "七";
      case "8":
      return "八";
      case "9":
      return "九";
      case "0":
      return "零";
  }
}
reverse();
// n的阶乘
// function jC(score){
// var result=1;
// for(var i=1;i<=score;i++){
//     result*=i;
// }
// return result;
// }
// console.log(jC(3));

// 斐波娜数列
// function feiBoNa(score){
//   var first=1;
//   var mid=1;
//   var last_one;
//   var sum=0;
//   if(score>2){
//       for(var i=0;i<=score-2;i++){
//           last_one=first+mid;
//           first=mid;
//           mid=last_one;
//       }
//      return last_one;

//   }else{
//       return 1;
//   }

// }
// console.log(feiBoNa(12));

// 数组去重  !带BUG
// var arr = [1, 2, 3, 4, 5, 6, 7, 7, 8,8, 9, 9];

// function duplicateRemoval(arr) {
//   console.log("去重前"+arr)
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] == arr[j]) {
//         arr.splice(arr.indexOf(arr[i]),1);
//         // deleteIndex.push(arr.indexOf(arr[i]));
//       }
//     }
//   }
//  console.log("去重后"+arr)
// }
// duplicateRemoval(arr);

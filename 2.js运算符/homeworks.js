// 计算输入的数的二次幂 n为自然数
// var score = parseInt(window.prompt("input"));
// if(score<=0){
//     alert("请输入自然数");
//     location.reload();
// }
// else{
//     var n=score*score;
//     document.write(score+"的二次幂为:"+n);
// }

// 计算输入的数的阶层
// var score = parseInt(window.prompt("input"));
// var result=1;
// for(var i=1;i<=score;i++){
//     result*=i;
// }
// document.write(score+"的阶层为:"+result);

// 斐波娜数列
// 数组方法
// var score = parseInt(window.prompt("input"));
// // 1 1 2 3 5 8
// var arr=[1,1];
// var sum=0;
// for(var i=2;i<=score;i++){
//     arr[i]=arr[i-1]+arr[i-2];

// }
// for(var j=0;j<=score;j++){
//     sum+=arr[j];
// }
// document.write("斐波娜数列:"+arr+"合"+sum);
// console.log(arr)
//正常方法
// var score = parseInt(window.prompt("input"));
// var first=1;
// var mid=1;
// var last_one;
// var sum=0;
// if(score>2){
//     for(var i=0;i<=score-2;i++){
//         last_one=first+mid;
//         first=mid;
//         mid=last_one;
//     }
//     console.log(last_one);

// }else{
//     console.log(1);
// }

// 输入三位数的正整数反向输出
// var score = parseInt(window.prompt("input"));
// var first="";
// var two="";
// var last_one="";
// first=(parseInt(score/100));
// two=(parseInt(score%100/10));
// last_one=(parseInt(score%10));
// document.write(score+"反向输出为:"+last_one+two+first)

// 输入a,b,c打印最大
// var a = parseInt(window.prompt("input"));
// var b = parseInt(window.prompt("input"));
// var c = parseInt(window.prompt("input"));
// var max=0;
// if(a>b&&a>c){
//     max=a;
// }else if(b>a&&b>c){
//     max=b;
// }else{
//     max=c;
// }
// document.write("最大:"+max);
// console.log(a,b,c);

// 100以内质数
var count = 0;
for (var i = 1; i < 100; i++) {
    //查看每一个i是否为质数
  for (var j = 1; j <= i; j++) {
    //每次计算一次如果能整除就计算一次
    if (i % j == 0) {
      count++;
    }
  }
  //当count ==2的时候代表该数为质数，因为质数默认就是两次整数一次本身一次1
  if (count == 2) {
        console.log(i);
  }
  //最后将count清零放置后续的i继续使用该count
  count=0;
}

// 要求输入一串低于10位的数字,输出这串数字的中文大写
// eg: input:10000 output:壹万
// eg: input:1001010 output:壹佰万壹仟零壹拾
var num = window.prompt("input");
// 判断输入位数
if (num.length > 10) {
  alert("低于10位!");
  location.reload();
} else {
  scanner(num);
}
function scanner(myNum) {
  let newNum = "";
  for (var i = 0; i < myNum.length; i++) {
    newNum += transLators(myNum[i]);
  }
  console.log(rotoa(newNum));
}
function rotoa(current) {
  // 万判断
  let count = 0;
  let result = "";
  switch (current.length) {
    case 5:
      for (let i = 1; i <= 4; i++) {
        if (current[i] == "零") {
          count++;
        }
        if (count == 4) {
          result = current[0] + "万";
        } else if (count == 0) {
          result = current[0] + "万" + current[1] + "千" + current[2] + "百" + current[3] + "十" + current[4] + "元";
        } else {
          switch (i) {
            case 1:
              result = current[0] + "万" + current[1] + current[2] + "百" + current[3] + "十" + current[4] + "元";
              break;
            case 2:
              result = current[0] + "万" + current[1] + "千" + current[2] + current[3] + "十" + current[4] + "元";
              break;
            case 3:
              result = current[0] + "万" + current[1] + "千" + current[2] + "百" + current[3] + current[4] + "元";
              break;
            case 4:
              result = current[0] + "万" + current[1] + "千" + current[2] + "百" + current[3] + "十" + current[4] + "元";
              break;
          }
        }
      }

      return result;
  }

  // if(count==4){


  // }
  // else if(count==0) {

  // }
  // else{

  // }


  // if(current[1]=="零"){

  // }


}




function transLators(target) {
  switch (target) {
    case "1":
      return "壹";
    case "2":
      return "贰";
    case "3":
      return "叁";
    case "4":
      return "肆";
    case "5":
      return "伍";
    case "6":
      return "陆";
    case "7":
      return "仟";
    case "8":
      return "仈";
    case "9":
      return "镹";
    case "0":
      return "零";
  }
}

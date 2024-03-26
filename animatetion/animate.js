/**
 * 
 * @param {object} options
 *  from ==>起始值;
 *  to   ==>结束值 
 *  totalMS ==>变化的总时长//默认1000ms
 *  duration ==多少时间变化一次(ms)//默认15ms
 */
function createAnimation(options) {
    var from = options.from;//起始值
    var to = options.to;//结束值
    var totalMS = options.totalMS || 1000;//总时间
    var duration = options.duration || 15//每多少时间变化一次
    var times = Math.floor(totalMS / duration)//变化的次数
    var dis = (to - from) / times;//每一次变化改变的值
    var curTimes = 0;//当前变化的次数
    var timeId = setInterval(function () {
        from += dis;
        curTimes++;
        if (curTimes >= times) {
            //变化的次数达到了
            from = to;//变化完成了
            clearInterval(timeId);//不在变化了
            options.onend && options.onend();
        }
        options.onmove && options.onmove(from);
    }, duration)
}

// creatAnimation({
//     from: 0,
//     to: 120,
//     totalMS: 500,
//     onmove: function (n) {
//         //n为这一次变化的值

//     },
//     onend: function () {
//         //变化完成后运行该函数

//     }
// })

// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}
// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "🌸诶嘿嘿，复制成功",
                    message: "若要转载最好标注原文链接哦~",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300)
})

document.onkeydown = function (e) {
    debounce(function () {
        if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
            new Vue({
                data: function () {
                    this.$notify({
                        title: "❄️尼、嘻、嘻——发现你喽~",
                        message: "扒源要遵循 GPL 协议呦！",
                        position: 'top-left',
                        offset: 50,
                        showClose: true,
                        type: "warning",
                        duration: 5000
                    });
                }
            })
        }
    }, 300)
};
// 复制提醒
document.addEventListener("copy", function () {
    new Vue({
        data: function () {
            this.$notify({
                title: "🌸诶嘿嘿，复制成功",
                message: "若要转载最好保留原文链接哦~",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "success",
                duration: 5000
            });
        }
    })
})

document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
        new Vue({
            data: function () {
                this.$notify({
                    title: "❄️尼、嘻、嘻——发现你喽~",
                    message: "扒源要遵循GPL协议呦！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "warning",
                    duration: 5000
                });
            }
        })
    }
};
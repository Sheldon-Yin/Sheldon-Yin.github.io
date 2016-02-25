$(document).ready(function () {
    console.log("hello world！欢迎你们到我的小站，这里也许还比较简陋，请不要介意~有改进的意见欢迎告诉我~留言板功能正在开发。也可以联系我：383541990@qq.com");
    if (window.location.href == "http://wwww.sheldonyin.website/") {
        $("#sidebar").css({width: '100%'});
        $("#btnblog").click(function () {
            $("#sidebar").animate({width: '33.3333%'}, 'slow');
        });
    }
});

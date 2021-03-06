// 获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数

    //返回参数值
    if (r != null) {
        return unescape(r[2]);
    } else {
        return null;
    }
}

/// 获取语言代码
function getLangCode() {
    var langCode = getUrlParam("lang") || navigator.language || navigator.userLanguage;

    // 繁體特殊處理
    if (langCode.startsWith("zh-") && langCode != "zh-CN" && langCode != "zh-Hans") {
        langCode = "zh-Hant";
    }

    langCode = langCode.split('-')[0];

    return langCode;
}
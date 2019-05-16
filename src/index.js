// 引入样式
import './css/index.scss';

var numberMap = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾'];
var $ = function (id) {
    return document.getElementById(id);
}
var $cy = $('c-y');
var $cm = $('c-m');
var $cd = $('c-d');
var $ch = $('c-h');
var $cmin = $('c-min');
var $cs = $('c-s');
$cy.innerHTML = new Date().getFullYear() + '年';
// 触发状态
var mStatus = true;
var dStatus = true;
var hStatus = true;
var minStatus = true;
var sStatus = true;
// 开始计时
var changeClock = function () {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    // 转动设置
    var mangle = (m - 1) * 30;
    var dangle = (d - 1) * 11.61;
    var hangle = h * 15;
    var minangle = min * 6;
    var sangle = s * 6;
    // 赋值
    $cy.innerHTML = y + '年';
    if (m == 1 && mStatus) {
        if (mStatus) {
            $cm.setAttribute('style', 'transform: rotate(360deg); transition: transform .5s ease-in;');
            setTimeout(function () { $cm.setAttribute('style', 'transform: rotate(0deg);'); }, 500);
            mStatus = false;
        }
    } else {
        $cm.setAttribute('style', 'transform: rotate(' + mangle + 'deg); transition: transform .5s ease-in;');
        mStatus = true;
    }
    if (d == 1) {
        if (dStatus) {
            $cd.setAttribute('style', 'transform: rotate(360deg); transition: transform .5s ease-in;');
            setTimeout(function () { $cd.setAttribute('style', 'transform: rotate(0deg);'); }, 500);
            dStatus = false;
        }
    } else {
        $cd.setAttribute('style', 'transform: rotate(' + dangle + 'deg); transition: transform .5s ease-in;');
        dStatus = true;
    }
    if (h == 0) {
        if (hStatus) {
            $ch.setAttribute('style', 'transform: rotate(360deg); transition: transform .5s ease-in;');
            setTimeout(function () { $ch.setAttribute('style', 'transform: rotate(0deg);'); }, 500);
            hStatus = false;
        }
    } else {
        $ch.setAttribute('style', 'transform: rotate(' + hangle + 'deg); transition: transform .5s ease-in;');
        hStatus = true;
    }
    if (min == 0) {
        if (minStatus) {
            $cmin.setAttribute('style', 'transform: rotate(360deg); transition: transform .5s ease-in;');
            setTimeout(function () { $cmin.setAttribute('style', 'transform: rotate(0deg);'); }, 500);
            minStatus = false;
        }
    } else {
        $cmin.setAttribute('style', 'transform: rotate(' + minangle + 'deg); transition: transform .5s ease-in;');
        minStatus = true;
    }
    if (s == 0) {
        $cs.setAttribute('style', 'transform: rotate(360deg); transition: transform .5s ease-in;');
        setTimeout(function () { $cs.setAttribute('style', 'transform: rotate(0deg);'); }, 500);
        sStatus = false;
    } else {
        $cs.setAttribute('style', 'transform: rotate(' + sangle + 'deg); transition: transform .5s ease-in;');
        sStatus = true;
    }
}
// 定时
var infinite = function () {
    changeClock();
    setInterval(function () {
        changeClock();
    }, 1000);
}
setTimeout(function () {
    infinite();
}, 4000);

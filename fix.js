//获得屏幕大小
let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;  //浏览器兼容
console.log("屏幕宽度：" + htmlwidth);

//获得html DOM元素
let htmlDom = document.getElementsByTagName('html')[0];

//给DOM元素设置样式
htmlDom.style.fontSize = htmlwidth / 20 + 'px';

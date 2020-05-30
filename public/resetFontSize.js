const setFontSize = () => {
    const designSize = 1920; // 设计图尺寸
    const deviceWidth = document.documentElement.clientWidth;// 窗口宽度
    const remToPx = deviceWidth * 100 / designSize;  //1920宽度下设置1rem=100px
    document.documentElement.style.fontSize = remToPx + 'px';
};
setFontSize();
window.onresize = () => {
    setFontSize();
};

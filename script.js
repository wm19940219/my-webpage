// 当按钮被点击时，弹出一个提示
const btn = document.getElementById('myButton');
if (btn) {
    btn.addEventListener('click', () => {
        alert('JS 运行成功！按钮被点击了。');
    });
}
console.log('JS 文件已被加载');  // 这行会在浏览器控制台输出
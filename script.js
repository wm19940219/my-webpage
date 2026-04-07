// 当按钮被点击时，弹出一个提示
const btn = document.getElementById('myButton');
if (btn) {
    btn.addEventListener('click', () => {
        alert('JS 运行成功！按钮被点击了。');
    });
}
console.log('JS 文件已被加载');  // 这行会在浏览器控制台输出
// 获取元素
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const themeToggle = document.getElementById('themeToggle');
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');

// 发送消息函数
function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;

    // 添加用户消息
    addMessage(text, 'user');
    chatInput.value = '';

    // 模拟机器人回复（可替换为真实API）
    setTimeout(() => {
        let reply = '收到你的消息："' + text + '"。这是一个演示回复。';
        if (text.includes('你好')) reply = '你好呀！很高兴见到你😊';
        else if (text.includes('天气')) reply = '今天阳光明媚，适合写代码~';
        else if (text.includes('谢谢')) reply = '不客气！有问题随时问我。';
        addMessage(reply, 'bot');
        // 自动滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

// 添加消息到界面
function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 发送按钮点击
sendBtn.addEventListener('click', sendMessage);
// 按回车发送
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// 深色模式切换
let isDark = false;
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDark = !isDark;
    themeToggle.textContent = isDark ? '☀️ 浅色模式' : '🌙 深色模式';
});

// 字体大小调节（作用于整个页面，包括聊天）
let currentFontSize = 16;
function setPageFontSize(delta) {
    let newSize = currentFontSize + delta;
    if (newSize >= 12 && newSize <= 24) {
        currentFontSize = newSize;
        document.body.style.fontSize = currentFontSize + 'px';
    }
}
increaseFont.addEventListener('click', () => setPageFontSize(1));
decreaseFont.addEventListener('click', () => setPageFontSize(-1));
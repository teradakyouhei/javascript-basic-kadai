// HTML要素を取得し、定数に代入する
const changeText = document.getElementById('text')

const btn = document.getElementById('btn')

// クリックされた２秒後に文字を変更
btn.addEventListener('click',() => {
    setTimeout(() => {
        changeText.textContent = 'ボタンをクリックしました'
    }, 2000);
})
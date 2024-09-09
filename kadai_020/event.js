// HTML要素を取得し、定数に代入する
const changeText = document.getElementById('text')

const btn = document.getElementById('btn')


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() =>{
    changeText.textContent = 'ボタンをクリックしました'
})

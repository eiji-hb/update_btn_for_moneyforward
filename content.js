document.body.style.backgroundColor = '#fffaf0';
const btns = document.querySelectorAll('.btn');

const updateBtns = []
btns.forEach((btn) => {
    if (btn.value == "更新" && btn.name == "commit") {
        updateBtns.push(btn)
    }
})

let element = document.getElementById('registration-table');
let p = element.querySelector('p')

let newP = document.createElement('p')
newP.style.cssText = 'position: absolute; right: 420px; top: -8px'
let newA = document.createElement('a')
newA.className = 'btn btn-warning'
newA.innerHTML = '一括更新'
newA.id = 'updateAll'
console.log("@@", updateBtns.length)
if (!updateBtns.length) {
    newA.setAttribute('disabled', 'disabled');
}
newP.append(newA);

console.log(newP);
newP.addEventListener("click", updateAllBtn, false)
p.before(newP);


function updateAllBtn() {
    let counter = 0;

    var timerid = setInterval(function () {
        console.log(updateBtns[counter]);
        updateBtns[counter].click()
        counter++;
        if (counter >= updateBtns.length) {
            // タイマーをクリア
            clearInterval(timerid);
            // if (!updateBtns.length) {
            //     newA.setAttribute('disabled', 'disabled');
            // }
        }
    }, 1000);
}
// element
const element = document.getElementById('registration-table').querySelector('p')

const newP         = document.createElement('p')
newP.style.cssText = 'position: absolute; right: 420px; top: -8px'

const newA     = document.createElement('a')
newA.className = 'btn btn-warning'
newA.innerHTML = '一括更新'
newA.id = 'updateAll'
newP.append(newA);

element.before(newP);

// event
newP.addEventListener("click", updateAllBtn, false)

function updateAllBtn() {
    const updateBtns = getUpdateBtns()
    newA.setAttribute('disabled', 'disabled');
    if (!updateBtns.length) {
    } else {
        let counter = 0;
        const interval = setInterval(function () {
            updateBtns[counter].click()
            counter++;
            if (counter >= updateBtns.length) {
                clearInterval(interval);
            }
        }, 500);
    }
}

function getUpdateBtns() {
    const btns = document.querySelectorAll('.btn');
    // console.log("@@", btns)
    const updateBtns = []
    btns.forEach((btn) => {
        if (btn.value == "更新" && btn.name == "commit") {
            updateBtns.push(btn)
        }
    })
    return updateBtns
}

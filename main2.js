
let onAddC = document.getElementById('submitId1');
let addS = document.getElementById('addSymb')
console.log(onAddC)
onAddC.addEventListener("click", (e) => {
    addS.style.opacity = '0.9';
    setTimeout(() => {
        addS.style.display = 'none'
    }, 2000)
});
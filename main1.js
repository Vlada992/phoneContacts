var toggleR = false;
var takeTab = document.getElementById('myTabId');
var takeTab1 = document.getElementById('myTabId1');
var ShowHide = document.getElementById('showAll1');
var elmAll = document.getElementsByClassName('firstTd');
var elmAll1 = document.getElementsByClassName('secondTd');
let resDiv = document.getElementById('searchRes');
let searchBtn = document.getElementById('lastNameSr');
let trustedArr = [];
let trustedArr1 = [];
let pushDelEvn = [];

$('#showAll1').on('click', e => {
    if (pushDelEvn.length > 0) {
        takeTab.style.opacity = '0'
        return false;
    }
    e.preventDefault()
    trustedArr.push(e.isTrusted);
    if (toggleR == false) {
        var putInArr = [];
        takeTab.style.opacity = '0.8';
        var clengt = takeTab.children[0].children.length;
        for (let cc = 0; cc < elmAll.length; cc++) {
            if (elmAll[cc].innerHTML == '') {
                elmAll[cc].insertAdjacentHTML('beforeend', `&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fa fa-times fTms"></i></span>`);
            }
        }
        for (let ii = 1; ii < clengt; ii++) {
            var firstL = String(takeTab.children[0].children[ii].children[1].innerHTML).slice(0, 1) != "<" ? String(takeTab.children[0].children[ii].children[1].innerHTML).slice(0, 1).toUpperCase() : String(takeTab.children[0].children[ii].children[1].innerHTML).slice(17, 18).toUpperCase()
            putInArr.push(firstL);
        }
        var ee = 0;
        if (trustedArr.length <= 1) {
            var elm = document.getElementsByTagName('td');
            var elm1 = document.getElementsByTagName('td');
            for (let i = 1; i < elmAll.length; i += 4) {
                elm[i].insertAdjacentHTML('afterbegin', `<span id="circF">${putInArr[ee]}</span> &nbsp;&nbsp;`)
                elm1[i + 2].insertAdjacentHTML('afterbegin', `<span><i class="glyphicon glyphicon-earphone"></i></span> &nbsp;&nbsp;&nbsp;`)
                ee++
            };
        }
        ShowHide.innerText = 'Hide'
        ShowHide.innerHTML += `&nbsp;&nbsp; <i id='eyeSl' class="fa fa-eye-slash" aria-hidden="true"></i>`
        toggleR = true;
    } else {
        takeTab.style.opacity = '0';
        ShowHide.innerText = 'Show All'
        ShowHide.innerHTML += `&nbsp;&nbsp;<i class="fi-torsos-all"></i>`
        toggleR = false;
    }
});

function myAjax1() {
    takeTab.style.opacity = '0';
    takeTab1.style.opacity = '0';
    resDiv.style.opacity = '0'
    ShowHide.innerHTML = '<span class="onEmpt">empty &nbsp;<i class="fa fa-times-circle"></i></span>';
    let delBtn = document.getElementById('deleteAll')
    delBtn.innerHTML = '<soan class="onEmpt">deleted &nbsp; <i class="fa fa-times-circle"></i></span>';
    pushDelEvn.push('deletedPressed');
    $.ajax({
        method: "POST",
        url: './deleteAll.php',
        data: { action: 'call_this' },
        success: (html) => {}
    });
}

$('#formSearch').on('submit', e => {
    if (pushDelEvn.length > 0) {
        resDiv.style.opacity = '0.9';
        resDiv.innerHTML = '';
        resDiv.insertAdjacentHTML('afterbegin', `<p class='resId1'>&nbsp;0 &nbsp;<span class='resId2'> contacts. <p class='resId1'>&nbsp; Add some<br> &nbsp; contact</p></span></p>`)
        resDiv.style.height = '100px'
        return false;
    }
    e.preventDefault();
    trustedArr1.push(e.type);
    let elm1 = document.getElementsByClassName('secondTd')[0]
    let elm2 = document.getElementsByClassName('secondTd')[1]
    let elm3 = document.getElementsByClassName('secondTd')[2]
    let storephpA = [];
    let storephpB = [];
    let storephpC = [];
    let storeId = [];
    var takeId = []
    var formVal = searchBtn.value.toLowerCase();
    searchBtn.style.backgroundColor = "#d9d999";
    var arrLen = phpLastN.length;
    var forLen = (arrLen - 1) * 4;
    if (trustedArr1.length <= 1) {
        for (var b = 0; b <= forLen; b += 4) {
            storeId.push(Number(document.getElementsByClassName('firstTd')[b].innerHTML));
        }
        for (let p = 0; p < arrLen; p++) {
            storephpA.push(phpLastN[p].last_name.toLowerCase())
            storephpB.push(phpLastN[p].first_name.toLowerCase())
            storephpC.push(phpLastN[p].telephone_number.toLowerCase())
        }
        for (let i = 0; i < arrLen; i++) {
            if (storephpA[i] == formVal || storephpB[i] == formVal || storephpC[i] == formVal || storeId[i] == formVal) {
                $("html, body").animate({ scrollTop: $("#myTabId1").offset().top }, 600);
                elm2.insertAdjacentHTML('afterbegin', `<span class='toRed'><p class='howMany'>${storeId[i]}</p> &nbsp; ${storephpA[i]}</span>    &nbsp;&nbsp;`)
                elm1.insertAdjacentHTML('afterbegin', `<span class='toRed'><p class='howMany'>${storeId[i]}</p> &nbsp;  ${storephpB[i]}</span>   &nbsp;&nbsp;`)
                elm3.insertAdjacentHTML('afterbegin', `<span class='toRed'><p class='howMany'>${storeId[i]}</p> &nbsp; ${storephpC[i]}</span>    &nbsp;&nbsp;`)
                resDiv.innerHTML = '';
                resDiv.style.opacity = '0.9';
                takeId.push(formVal);
                let numbText = takeId.length == 1 ? 'contact' : 'contacts';
                resDiv.insertAdjacentHTML('afterbegin', `<p class='resId1'>&nbsp;${takeId.length} &nbsp;&nbsp;<span class='resId2'>${numbText}</span></p>`)
            }
            takeTab1.style.opacity = '0.9';
        };
        for (let ii = 0; ii < arrLen; ii++) {
            if (takeId.length == 0) {
                takeTab1.style.opacity = '0';
                resDiv.innerHTML = '';
                resDiv.style.opacity = '0.9';
                resDiv.insertAdjacentHTML('afterbegin', `<p class='resId1'>&nbsp;0 &nbsp;&nbsp;<span class='resId2'> contacts!</span></p>`)
            }
        }
    } else { //On more than 1 submit, start again 
        takeTab1.style.opacity = '0.9';
        elm1.innerHTML = '';
        elm2.innerHTML = '';
        elm3.innerHTML = '';
        for (let p = 0; p < arrLen; p++) {
            storephpA.push(phpLastN[p].last_name.toLowerCase())
            storephpB.push(phpLastN[p].first_name.toLowerCase())
            storephpC.push(phpLastN[p].telephone_number.toLowerCase())
        }
        for (var bb = 0; bb <= forLen; bb += 4) {
            storeId.push(Number(document.getElementsByClassName('firstTd')[bb].innerHTML));
        }
        for (let i = 0; i < arrLen; i++) {
            if (storephpA[i] == formVal || storephpB[i] == formVal || storephpC[i] == formVal || storeId[i] == formVal) {
                $("html, body").animate({ scrollTop: $("#myTabId1").offset().top }, 600);
                elm2.insertAdjacentHTML('afterbegin', `<span class='toRed'><span class='howMany'>${storeId[i]}</span> &nbsp;  ${storephpA[i]}</span>   &nbsp;&nbsp;`)
                elm1.insertAdjacentHTML('afterbegin', ` <span class='toRed'><span class='howMany'>${storeId[i]}</span> &nbsp; ${storephpB[i]}</span>  &nbsp;&nbsp;`)
                elm3.insertAdjacentHTML('afterbegin', ` <span class='toRed'><span class='howMany'>${storeId[i]}</span> &nbsp; ${storephpC[i]}</span>   &nbsp;&nbsp;`)
                resDiv.innerHTML = '';
                resDiv.style.opacity = '0.9';
                takeId.push(formVal);
                let numbText1 = takeId.length == 1 ? 'contact' : 'contacts';
                resDiv.insertAdjacentHTML('afterbegin', `<p class='resId1'>&nbsp;${takeId.length} &nbsp;<span class='resId2'>${numbText1}</span></p>`)
                //takeTab1.style.opacity ='0.9'; 
            }
        };
        for (let ii = 0; ii < arrLen; ii++) {
            if (takeId.length == 0) {
                takeTab1.style.opacity = '0';
                resDiv.innerHTML = '';
                resDiv.style.opacity = '0.9';
                resDiv.insertAdjacentHTML('afterbegin', `<p class='resId1'>&nbsp;0 &nbsp;<span class='resId2'> contacts!</span></p>`)
            }
        } //for loop for returning text 0 contact.
    };
});
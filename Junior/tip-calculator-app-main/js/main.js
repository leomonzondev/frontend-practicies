const bill = document.getElementById("billInput");
const people = document.getElementById("cantPeople");
const customTip = document.getElementById("customTip");
const tipBtns = document.querySelectorAll(".tip");
const results = document.querySelectorAll(".result")

bill.addEventListener('input', setBillValue);

tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick);
})

customTip.addEventListener('input', setTipCustomValue);
people.addEventListener('input', setPeopleValue)


let billValue = 0.0; //default value
let tipValue = 0.15;
let peopleValue = 1;

calculateTip();

function setBillValue () {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.')
    }
    billValue = parseFloat(bill.value);
    console.log(billValue);
}

function handleClick (event) {
    tipBtns.forEach(btn => {
        btn.classList.remove('btn-active')

        if(event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('btn-active')
            tipValue = parseFloat(btn.innerHTML)/100;
        }
    })
    console.log(tipValue)
}

function setTipCustomValue () {
    tipValue = parseFloat(customTip.value/100)

    //tipBtns.forEach(btn => {
       // btn.classList.remove('tip')
    //})

    console.log(tipValue)
}

//console.log(tipBtns[1].innerHTML)

function setPeopleValue () {
    peopleValue = parseFloat(people.value)

    console.log(peopleValue)
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = billValue * tipValue / peopleValue;
        let total = billValue * (tipValue + 1) / peopleValue;
        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML = '$' + total.toFixed(2);
    }
}
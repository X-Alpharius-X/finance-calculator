//income inputs

const incomeSalary = document.getElementById('income-salary'),
      incomeFreelance = document.getElementById('income-freelance'),
      incomeExtra1 = document.getElementById('income-extra-1'),
      incomeExtra2 = document.getElementById('income-extra-2');

//costs inputs

const costsFlat = document.getElementById('costs-flat'),
      costsHouseServices = document.getElementById('costs-house-services'),
      costsTransport = document.getElementById('costs-transport'),
      costsCredit = document.getElementById('costs-credit');

//total inputs

const totalMonthInput = document.getElementById('total-month'),
      totalDayInput = document.getElementById('total-day'),
      totalYearInput = document.getElementById('total-year');

let totalMonth,
    totalDay,
    totalYear;

//money box

const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationImput = document.getElementById('accumulation'),
      spend = document.getElementById('spend');

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs) {
    input.addEventListener('input', () => {
        coutingAvaibleMoney();
        calculationPrecents();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0


const coutingAvaibleMoney = () => {
     const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
     const totalCosts = strToNum(costsCredit) + strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport);

     totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
};

moneyBoxRange.addEventListener('input', e => {
    const totalPrecentsEl = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentsEl.innerHTML = totalPrecents;
    calculationPrecents();
});

const calculationPrecents = () => {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationImput.value = accumulation;

    spend.value = totalMonth - accumulation;

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}
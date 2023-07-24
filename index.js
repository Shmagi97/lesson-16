const inputValue = document.getElementById("inputJs");
const inputValueShedegi = document.getElementById("inputShedegiJs");

function kvadrati(a) {
  a = inputValue.value;
  const b = Math.pow(a, 2);
  inputValueShedegi.value = b;
  inputValue.value = "";
  return b;
}

const inputValueFasi = document.getElementById("inputFasi");
const inputValueProcenti = document.getElementById("inputJsProcenti");
const inputValueFasdaklebaShedegi = document.getElementById("inputJsShedegi");

function fasdakleba(fasi, procenti, shedegi) {
  fasi = inputValueFasi.value;
  procenti = inputValueProcenti.value;
  shedegi = fasi * (procenti / 100);
  inputValueFasdaklebaShedegi.value = shedegi;
  inputValueFasi.value = "";
  inputValueProcenti.value = "";
  return shedegi;
}

const inputValueRandom = document.getElementById("inputJsRandom");

function random() {
  inputValueRandom.value = Math.round(Math.random() * 100);
}

const inputValueString = document.getElementById("inputJsString");
const inputValueStringShedegi = document.getElementById("inputJsstringShedegi");

function string(raodenoba) {
  raodenoba = inputValueString.value.length;
  inputValueStringShedegi.value = raodenoba;
  inputValueString.value = "";
  return raodenoba;
}

const currencies = [
  {
    code: "AMD",
    quantity: 1000,
    rateFormated: "6.6742",
    diffFormated: "0.0202",
    rate: 6.6742,
    name: "სომხური დრამი",
    diff: 0.0202,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "EUR",
    quantity: 1,
    rateFormated: "2.8673",
    diffFormated: "0.0131",
    rate: 2.8673,
    name: "ევრო",
    diff: -0.0131,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "GBP",
    quantity: 1,
    rateFormated: "3.3111",
    diffFormated: "0.0046",
    rate: 3.3111,
    name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
    diff: -0.0046,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "TRY",
    quantity: 1,
    rateFormated: "0.0957",
    diffFormated: "0.0003",
    rate: 0.0957,
    name: "თურქული ლირა",
    diff: 0.0003,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },

  {
    code: "USD",
    quantity: 1,
    rateFormated: "2.5771",
    diffFormated: "0.0078",
    rate: 2.5771,
    name: "აშშ დოლარი",
    diff: 0.0078,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
];

const masivRate = currencies.map((elementebi) => {
  return elementebi.rate;
});
const minRate = Math.min(...masivRate);

console.log(minRate);

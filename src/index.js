// VARIABLES
const amount = document.querySelector(".amount");
const initialInput = document.querySelector(".initial");
const final = document.querySelector(".final");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

const fetchData = async (initialCurrency, finalCurrency) => {
  const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${initialCurrency}&to=${finalCurrency}&q=1.0`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bc22f11f37mshcbe9e742a1ed8cap1c4dbcjsna5ccd20c55bc",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com"
    }
  };

  const input = Number(amount.value); // Get the amount from the input field

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const convertedAmount = data * input;
    console.log(data);
    console.log(convertedAmount);
    return convertedAmount;
  } catch (error) {
    console.error(error);
  }
};

const renderData = async () => {
  const initialCurrency = initialInput.value; // Get the initial currency value from the input field
  const finalCurrency = final.value; // Get the final currency value from the input field
  const data = await fetchData(initialCurrency, finalCurrency);
  let content = `<h1>${data} ${finalCurrency}</h1>`;
  result.innerHTML = content;
};

btn.addEventListener("click", () => {
  renderData();
});

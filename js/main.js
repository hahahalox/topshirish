const pizzaPrices = {
  peperoni: {
    with: 45,
    without: 40,
  },
  classic: {
    with: 50,
    without: 30,
  },

  blueberry: {
    with: 70,
    without:65 ,
  },
};

const priceEl = document.querySelector("#price");

function getPrice() {
  let price = 0;
  const TypeSelect = document.getElementById("pizzaSelect");
  const withTypeEls = document.getElementsByName("question");

  const withType = withTypeEls[0].checked
    ? withTypeEls[0].value
    : withTypeEls[1].value;

  const hasTomatoPrice = document.getElementById("tomato").checked
    ? 10
    : 0;
    const size_mediumPrice = document.getElementById("size_thick").checked
    ? 25
    : 0;
    const size_thickPrice = document.getElementById("size_medium").checked
    ? 30
    : 0;

  const hasChiliPrice = document.getElementById("chili").checked ? 5 : 0;
  const daysPrice =
    +document.getElementById("days").value *
    pizzaPrices[TypeSelect.value][withType];

   price+= daysPrice + hasTomatoPrice + hasChiliPrice + size_mediumPrice + size_thickPrice;

  priceEl.innerHTML = price;
}

getPrice();


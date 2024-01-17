const carPrices = {
  bmw: {
    auto: 100,
    mech: 80,
  },
  mercedes: {
    auto: 150,
    mech: 120,
  },
  byd: {
    auto: 190,
    mech: 170,
  },
  kia: {
    auto: 200,
    mech: 190,
  },
  ferrari: {
    auto: 300,
    mech: 280,
  },
  chevrolet: {
    auto: 130,
    mech: 110,
  },
};

const priceEl = document.querySelector("#price");

function getPrice() {
  let price = 0;
  const brandSelect = document.getElementById("carSelect");
  const transferTypeEls = document.getElementsByName("transfer");

  const transferType = transferTypeEls[0].checked
    ? transferTypeEls[0].value
    : transferTypeEls[1].value;

  const hasTonirovkaPrice = document.getElementById("tonirovka").checked
    ? 10
    : 0;

  const hasRegisterPrice = document.getElementById("register").checked ? 5 : 0;
  const daysPrice =
    +document.getElementById("days").value *
    carPrices[brandSelect.value][transferType];

   price+= daysPrice + hasTonirovkaPrice + hasRegisterPrice;

  priceEl.innerHTML = price;
}

getPrice();

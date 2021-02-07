const init = function () {
  const sliderPrice = document.getElementById("myRange");
  const viewsOutput = document.getElementById("pageViewsAmount");
  const priceOutput = document.getElementById("chargeAmount");
  const discountBtn = document.getElementById("discount");

  const views = ["10K", "50K", "100K", "500K", "1M"];
  const prices = ["8", "12", "16", "24", "36"];

  function discountApplied() {
    if (discountBtn.checked) {
      priceOutput.innerHTML = `$${prices[sliderPrice.value] * 0.75}.00`;
      viewsOutput.innerHTML = `${views[sliderPrice.value]}`;
    } else {
      priceOutput.innerHTML = `$${prices[sliderPrice.value]}.00`;
      viewsOutput.innerHTML = `${views[sliderPrice.value]} `;
    }
  }

  sliderPrice.addEventListener("input", (e) => {
    e.preventDefault();
    discountApplied();
    const color = `linear-gradient(90deg, rgb(165, 243, 235) ${
      sliderPrice.value * 25
    }%, rgb(234, 238, 251) ${sliderPrice.value * 25}%)`;
    sliderPrice.style.background = color;
  });

  discountBtn.addEventListener("click", () => {
    discountApplied();
    console.log("Discount Applied");
  });
};
init();

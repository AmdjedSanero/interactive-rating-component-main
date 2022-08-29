let bulls = document.querySelectorAll("nav span");
let btn = document.querySelector(".btn.submit");
let reviewData;
bulls.forEach((e) =>
  e.addEventListener("click", function () {
    for (let i = 0; i < bulls.length; i++) {
      bulls[i].classList.remove("active");
    }
    e.classList.add("active");
    reviewData = e.innerHTML;
  })
);
btn.addEventListener("click", displayNone);
function displayNone() {
  let step1 = document.querySelector(".rating-state .step1");
  let step2 = document.querySelector(".rating-state .step2");
  let selectedText = document.querySelector(".rating-state .step2 .selected");

  step1.style.display = "none";
  step2.style.display = "flex";
  selectedText.innerHTML=`You selected ${reviewData} out of 5`;
}

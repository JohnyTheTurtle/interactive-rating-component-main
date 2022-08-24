const preview = document.querySelector(".preview")
const thankyou = document.querySelector(".thank-you")
const submitButton = document.querySelector(".btn-sub")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thankyou.classList.remove("hidden");
    preview.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
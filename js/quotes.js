const quotes = [
    {
        text: "Fantastic job. Fast Results. Great communication.",
        author: "Jack Black"
    },
    {
        text: "Wow! What a great people! I have never worked with anyone better then them!",
        author: "Logan Kowalski"
    },
    {
        text: "Outstanding job and exceeded all expectations. It was a pleasure to work with them on a sizable first project and am looking forward to start the next one asap.",
        author: "Micheal Hopkins"
    }
]
let activeQuoteIndex = 0;
const quoteText = document.querySelector(".quotes__item h3");
const quoteAuthor = document.querySelector(".quotes__item p");
const steps = document.querySelectorAll(".quotes .step");
setQuote(0);

steps.forEach((step, index) => {
    step.addEventListener("click", () => {
        steps.forEach(el => {
            el.classList.remove("step--active");
        });
        step.classList.add("step--active");
        activeQuoteIndex = index;
        setQuote(activeQuoteIndex);
    })
});

function setQuote(index) {
    quoteText.textContent = quotes[index].text;
    quoteAuthor.textContent = quotes[index].author;
}

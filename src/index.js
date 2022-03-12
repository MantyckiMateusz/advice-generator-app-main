const button = document.querySelector(".dice-container");
const adviceText = document.querySelector("#advice-text");
const adviceID = document.querySelector("#advice-id");

async function getAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let json = await response.json();
  return {
    id: json.slip.id,
    adviceText: json.slip.advice,
  };
}

button.addEventListener("click", () => {
  getAdvice()
    .then((result) => {
      adviceID.innerHTML = `ADVICE #${result.id}`;
      adviceText.innerHTML = result.adviceText;
    })
    .catch((err) => {
      console.log(err);
    });
});

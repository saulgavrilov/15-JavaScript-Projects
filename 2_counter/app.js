// Select value & buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll("button");

// Set initial count
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    count >= 0 ? (value.style.color = "green") : (value.style.color = "red");

    value.textContent = count;
  });
});

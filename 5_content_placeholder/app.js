const header = document.getElementById("header");
const title = document.getElementById("title");
const exceprt = document.getElementById("exceprt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated_bg");
const animated_bg_texts = document.querySelectorAll(".animated_bg_text");

const getData = () => {
  header.innerHTML = `<img
  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
  alt=""/>`;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  exceprt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, laboriosam.";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Oct 08, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated_bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated_bg_text"));
};

setTimeout(getData, 2500);

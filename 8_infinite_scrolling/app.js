const infiniteScrolling = document.getElementById("infiniteScrolling");
const loading = document.querySelector(".loading");

getPost();
getPost();
getPost();
getPost();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  console.log({ scrollTop, scrollHeight, clientHeight });

  if (clientHeight + scrollTop >= scrollHeight - 5) {
    showLoading(true);
    setTimeout(getPost, 1000);
  }
});

function showLoading(show = false) {
  if (show) {
    loading.classList.add("showLoading");
  } else {
    loading.classList.remove("showLoading");
  }
}

async function getPost() {
  // Post
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandom()}`
  );
  const postData = await postRes.json();

  // User
  const userRes = await fetch("https://randomuser.me/api");
  const userData = await userRes.json();

  const data = { post: postData, user: userData.results[0] };

  addToDOM(data);
}

function getRandom() {
  return Math.floor(Math.random() * 100) + 1;
}

function addToDOM(data) {
  const postElement = document.createElement("div");
  postElement.classList.add("blogPost");
  postElement.innerHTML = `
  <h2 class="blogPost__title">${data.post.title}</h2>
  <p class="blogPost__text">${data.post.body}</p>
  <div class="blogPost__userInfo">
    <img
      src="${data.user.picture.large}"
      alt="${data.user.name.first}"
    />
    <span>${data.user.name.first} ${data.user.name.last}</span>
  </div>
  `;

  infiniteScrolling.appendChild(postElement);

  showLoading(false);
}

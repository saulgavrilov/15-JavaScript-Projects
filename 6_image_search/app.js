import getImages from "./api.js";

const form = document.querySelector("form");
const loading = document.querySelector("#loading");
const imagesSection = document.querySelector(".images");

loading.style.display = "none";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const searchTerm = formData.get("searchTerm");
  loading.style.display = "";
  const images = await getImages(searchTerm);
  addImagesToPage(images);
});

const addImagesToPage = (images) => {
  images.forEach((item) => {
    const imageElement = document.createElement("img");
    imageElement.src = item.image;
    imagesSection.append(imageElement);
  });
  loading.style.display = "none";
};

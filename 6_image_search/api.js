const API_URL = ``;

const getImages = async (searchTerm) => {
  const response = await fetch(`${API_URL}${searchTerm}`);
  const json = await response.json();

  return json.images;
};

export default getImages;

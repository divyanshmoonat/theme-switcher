const getCookie = (key = "") => {
  const cookies = document.cookie;
  const cookiesArray = cookies.split(";");
  const cookiesMap = new Map();
  for (let cookie of cookiesArray) {
    const [key, value] = cookie.split("=");
    cookiesMap.set(key.trim(), value.trim());
  }
  return cookiesMap.get(key);
};

const helpers = {
  getCookie,
};

export default helpers;

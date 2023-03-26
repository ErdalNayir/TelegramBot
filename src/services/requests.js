import dotenv from "dotenv";
dotenv.config();

function parseData(data) {
  const formData = new FormData();
  for (let [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
}

function request(url, data = false, method = "GET", type = "JSON") {
  return new Promise(async (resolve, reject) => {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (data && method == "POST") {
      options.body = type == "JSON" ? JSON.stringify(data) : parseData(data);
    }
    const response = await fetch(
      `https://customsearch.googleapis.com/customsearch/v1?cx=${process.env.SEARCH_ENGINE_ID}&q=${url}&key=${process.env.SEARCH_API_KEY}`,
      options
    );
    const result = await response.json();
    if (response.ok) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const post = (url, data) => request(url, data, "POST");
export const postJSON = (url, data) => request(url, data, "POST", "JSON");
export const get = (url) => request(url);

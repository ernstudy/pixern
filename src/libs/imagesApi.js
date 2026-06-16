import { envConfig } from "../config/env.config.js";

const baseUrlApi = envConfig.baseApiUrl;
const apiKey = envConfig.apiKey;

const per_page = 10;
const numOfpages = 1;

const fetchImages = async (query = "random") => {
  const data = await fetch(
    `${baseUrlApi}/search/photos?query=${query}&page=${numOfpages}&per_page=${per_page}&client_id=${apiKey}`,
  );

  if (!data.ok) throw new Error(`Error: ${data.status} - ${data.statusText}`);

  const response = await data.json();
  return response.results;
};

export { fetchImages };

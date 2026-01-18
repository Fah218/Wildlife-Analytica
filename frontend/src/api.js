import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const fetchSpeciesList = async () => {
  const res = await axios.get(`${API_URL}/species-list`);
  return res.data.species;
};

export const predictSpecies = async (speciesName) => {
  const res = await axios.post(`${API_URL}/predict`, null, {
    params: { species: speciesName }
  });
  return res.data;
};

export const fetchSpeciesImage = async (speciesName) => {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${speciesName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data?.thumbnail?.source || "";
  } catch {
    return "";
  }
};

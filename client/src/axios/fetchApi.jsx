import axios from "axios";

const getPokemons = async (cb) => {
  try {
    const pokemons = await axios({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon",
    });
    cb(pokemons.data.results);
  } catch (error) {
    console.log(error);
  }
};

const getPokemonDetails = async (url, cb) => {
  try {
    const detail = await axios({
      method: "GET",
      url: url,
    });
    cb(detail.data);
  } catch (error) {
    console.log(error);
  }
};

const getTypes = async (cb) => {
  try {
    const types = await axios({
      method: "GET",
      url: "https://pokeapi.co/api/v2/type/",
    });
    cb(types.data.results);
  } catch (error) {
    console.log(error);
  }
};

const getPokemonsBySearch = async (cb) => {
  try {
    const pokemons = await axios({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon",
      params: {
        limit: 1302,
      },
    });
    cb(pokemons.data.results);
  } catch (error) {
    console.log(error);
  }
};


export { getPokemons, getPokemonDetails, getTypes, getPokemonsBySearch };

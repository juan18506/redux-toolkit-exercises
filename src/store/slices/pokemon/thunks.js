import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = ( page = 0 ) => {
  return async ( dispatch, getState ) => {
    dispatch( startLoadingPokemons() );

    //TODO: realizar peticion HTTP
    const res = await fetch(`https:pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
    const data = await res.json();
    console.log(data);

    dispatch( setPokemons({
      pokemons: data.results,
      page: page + 1,
    }) );
  };
};
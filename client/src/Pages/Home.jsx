import React from "react";
import Header from "../components/Header";
import DiscoverPokemon from "../components/DiscoverPokemon";

function Home() {
  return (
    <main className="container-fluid p-0">
      <Header />
      <DiscoverPokemon />
    </main>
  );
}

export default Home;

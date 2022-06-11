import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import Kart from "../card/Kart";
import Banner from "../banner/Banner";

const Home = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <div>
      <SearchBar search={search} searchChange={handleSearch} />
      <Banner />
      <Kart search={search} />
    </div>
  );
};

export default Home;

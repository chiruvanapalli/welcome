import React, { useState } from "react";
import "./Shop.scss";
import mockData from "../../mock-files/MockData";
import RestaurantCard from "../../components/cards/RestaurantCard";
import Search from "../../components/search/Search";
import NoResultsFound from "../../components/empty-templates/NoResulstFound";

const Shop = () => {
  const [data, setData] = useState<any[]>(mockData);
  const [searchTerm, setSearchTerm] = useState<string>("");

  console.log(searchTerm);

  const filteredData = data.filter((productItem) => {
    const info = productItem?.card?.card?.info;
    const name = info.name?.toLowerCase() || "";
    const cuisines = info.cuisines?.join(", ").toLowerCase() || "";
    const search = searchTerm.toLocaleLowerCase();

    return name.includes(search) || cuisines.includes(search);
  });

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="restaurant_shop">
        {filteredData.map((productItem: any, index: number) => {
          const info = productItem?.card?.card?.info;
          return (
            <RestaurantCard
              key={info.id}
              name={info.name}
              image={info.cloudinaryImageId}
              cuisine={info.cuisines?.join(", ")}
              rating={info.avgRating}
              price={info.costForTwo}
            />
          );
        })}
      </div>
      {filteredData.length === 0 && <NoResultsFound searchTerm={searchTerm} />}
    </>
  );
};

export default Shop;

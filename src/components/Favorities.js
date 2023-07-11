import React from "react";

export const favoritiesItems = [
  {
    url: "/f1.png",
    urlAlt: "Rasberry Pi",
    title: "Rasberry Pi",
    desc: "Raspberry Pi Computing for everybody From industries large and small, to the kitchen table tinkerer, to the classroom coder, we make computing accessible and affordable for everybody. Buy Raspberry Pi The classic compact camera for Raspberry Pi with a 12MP sensor, autofocus and your choice of standard or wide fields of view.",
  },
  {
    url: "/f1.png",
    urlAlt: "Rasberry Pi",
    title: "Rasberry Pi",
    desc: "Raspberry Pi Computing for everybody From industries large and small, to the kitchen table tinkerer, to the classroom coder, we make computing accessible and affordable for everybody. Buy Raspberry Pi The classic compact camera for Raspberry Pi with a 12MP sensor, autofocus and your choice of standard or wide fields of view.",
  },
  {
    url: "/f1.png",
    urlAlt: "Rasberry Pi",
    title: "Rasberry Pi",
    desc: "Raspberry Pi Computing for everybody From industries large and small, to the kitchen table tinkerer, to the classroom coder, we make computing accessible and affordable for everybody. Buy Raspberry Pi The classic compact camera for Raspberry Pi with a 12MP sensor, autofocus and your choice of standard or wide fields of view.",
  },
];
export const Favorities = () => {
  return (
    <section className="py-5" id="favorities">
      <h2 className="text-4xl font-bold text-center py-5">Favorite Article</h2>
      <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto lg:grid-cols-3">
        {favoritiesItems.map((item) => (
          <FavoriteCard key={item.url} {...item} />
        ))}
      </div>
    </section>
  );
};

export const FavoriteCard = (props) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={props.url} alt={props.urlAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

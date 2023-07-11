import React from "react";

export const placesItems = [
  {
    url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhotelesen.net%2Fwp-content%2Fuploads%2FBa%25C3%25B1os-de-Agua-Santa-Ecuador-destino-barato-de-aventura.png",
    title: "Rasberry Pi",
    desc: "Raspberry Pi Computing for everybody From industries large and small, to the kitchen table tinkerer, to the classroom coder, we make computing accessible and affordable for everybody. Buy Raspberry Pi The classic compact camera for Raspberry Pi with a 12MP sensor, autofocus and your choice of standard or wide fields of view.",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftalesfromthelens.com%2Fwp-content%2Fuploads%2F2018%2F10%2FCotopaxi-Secret-Garden.jpg",
    title: "Rasberry Pi",
    desc: "Raspberry Pi Computing for everybody From industries large and small, to the kitchen table tinkerer, to the classroom coder, we make computing accessible and affordable for everybody. Buy Raspberry Pi The classic compact camera for Raspberry Pi with a 12MP sensor, autofocus and your choice of standard or wide fields of view.",
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flonelyplanetimages.imgix.net%2Fa%2Fg%2Fhi%2Ft%2F3da88e15e0f4354a7555bc54a9e5130a-vilcabamba.jpg",
    title: "Rasberry Pi",
    desc: "Raspberry Pi Computing for everybody From industries large and small, to the kitchen table tinkerer, to the classroom coder, we make computing accessible and affordable for everybody. Buy Raspberry Pi The classic compact camera for Raspberry Pi with a 12MP sensor, autofocus and your choice of standard or wide fields of view.",
  },
];
export const Places = () => {
  return (
    <section className=" mx-auto bg-base-200 py-4" id="places">
      <h2 className="text-4xl font-bold text-center py-7">Places to visit</h2>
      <div className="max-w-5xl mx-auto">
        <div className="carousel w-full">
          {placesItems.map((item, index) => (
            <Place
              key={item.url}
              {...item}
              id={index}
              nextID={index == placesItems.length - 1 ? 0 : index + 1}
              lastID={index == 0 ? placesItems.length - 1 : index - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Place = (props) => {
  return (
    <div id={props.id} className="carousel-item relative w-full">
      <img src={props.url} className="w-full" />

      {/* <h2 className="text-4xl font-bold text-white">{props.title}</h2>
      <p className="text-2xl font-bold text-white">{props.desc}</p> */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#${props.lastID}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#${props.nextID}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

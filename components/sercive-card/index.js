import { SERVICES } from "../../data.js";

const serviceCardContainer = document.querySelector(".service-card__container");

export const serviceCard = ({ img, title, desc }) => {
  /*
    Used createElement instead of innerHTML for performance reasons.
    innerHTML re-renders the whole document.
    - Abraham 
  */
  const card = document.createElement("article");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("h3");
  const cardDesc = document.createElement("p");

  card.classList.add("service-card");
  cardImg.classList.add("sc__img");
  cardTitle.classList.add("sc__title");
  cardDesc.classList.add("sc__desc");

  cardImg.src = img;
  cardImg.alt = title;

  cardTitle.innerText = title;
  cardDesc.innerText = desc;

  card.appendChild(cardImg);
  card.appendChild(cardTitle);
  card.appendChild(cardDesc);

  return card;
};

const addServices = () =>
  SERVICES.forEach((service) =>
    serviceCardContainer.appendChild(serviceCard({ ...service }))
  );

export default addServices;

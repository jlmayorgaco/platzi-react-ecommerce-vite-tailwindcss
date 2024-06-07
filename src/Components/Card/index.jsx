import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { ShoppingCartContext } from "../../Context";

const Rating = ({ n }) => {
  const stars = [
    ...Array.from({ length: 5 }, (value, index) => ({
      index: index,
      filled: index < Math.floor(n),
    })),
  ];
  return (
    <ul className="flex flex-nowrap flex-row w-fit">
      {stars.map((item) => (
        <li key={item.index}>
          <span>{item.filled ? <FaStar /> : <FaRegStar />}</span>
        </li>
      ))}
    </ul>
  );
};

const Card = ({ data }) => {
  const title = data.name;
  const rating = data.userRating;
  const text = data.description;
  const price = data.price;
  const image = data.image;
  const payload = {
    title: title,
    rating: rating,
    text: text,
    price: price,
    image: image,
  };
  const context = useContext(ShoppingCartContext);

  const styles = {
    cardColor: "bg-slate-200",
    buttonColor: "bg-green-800",
    buttonTextColor: "text-white",
  };
  return (
    <article
      className={
        styles.cardColor +
        " relative drop-shadow-md w-44 h-80 p-2 rounded-lg  font-sans tracking-wide"
      }
    >
      <img
        className="cursor-pointer w-full h-40 object-cover rounded-lg "
        src={"/images/products/" + image}
        alt={title}
        loading="lazy"
      />
      <h1 className="cursor-pointer text-lg font-medium pt-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
        {title}
      </h1>
      <h2 className="">
        <Rating n={rating}></Rating>
      </h2>
      <h3 className="text-xs pt-2 text-zinc-600 h-10 text-ellipsis overflow-hidden truncate...">
        {text}
      </h3>
      <h4 className="text-xl font-semibold pt-2 absolute bottom-2.5 left-2.5 ">
        {price}
      </h4>
      <button
        onClick={() => context.addToCart(payload)}
        className={
          styles.buttonColor +
          " " +
          styles.buttonTextColor +
          " " +
          "absolute bottom-2.5 right-2.5 cursor-pointer rounded-full w-8 h-8 flex flex-row items-center justify-center"
        }
      >
        <span>
          <FaPlus />
        </span>
      </button>
    </article>
  );
};

export default Card;

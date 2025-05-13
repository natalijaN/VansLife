import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

export const VanCard = ({ id, imageUrl, name, price, type }: Props) => {
  return (
    <Link key={id} to={`/vans/${id}`}>
      <img
        src={imageUrl}
        alt={name}
        className="rounded-xl"
        width={400}
        height={400}
      />
      <div className="flex justify-between py-4 text-xl">
        <h4 className="font-semibold">{name}</h4>
        <p className="font-semibold">
          ${price}
          <br />
          <span className="font-thin">/day</span>
        </p>
      </div>
      <div className="flex justify-start -mt-8">
        <button
          className={`rounded-md text-white px-5 py-3 capitalize font-bold
            ${type === "luxury" && "bg-black"} 
            ${type === "rugged" && "bg-green-900"} 
            ${type === "simple" && "bg-orange-500"}`}
        >
          {type}
        </button>
      </div>
    </Link>
  );
};

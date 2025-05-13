import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: string;
};

export const HostVanCard = ({ id, imageUrl, name, price }: Props) => {
  return (
    <Link to={`/host/vans/${id}`} className="w-full">
      <div
        key={id}
        className="bg-white rounded-xl px-7 py-5 flex gap-10 w-full"
      >
        <img src={imageUrl} alt={name} width={200} height={200} />
        <div className="flex flex-col items-start justify-center gap-5">
          <h4 className="text-2xl font-bold rounded">{name}</h4>
          <p className="text-gray-600 font-semibold">${price}/day</p>
        </div>
      </div>
    </Link>
  );
};

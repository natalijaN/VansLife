import { useOutletContext } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: string;
};

export const HostVansPricing = () => {
  const van = useOutletContext<Van>();
  return (
    <section className="flex flex-col items-start justify-center bg-white w-full px-8 mb-20 gap-6">
      <h3 className="text-2xl font-semibold rounded mt-12 my-8">
        <span className="font-bold">$</span> {van?.price}/day
      </h3>
    </section>
  );
};

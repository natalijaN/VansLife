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

export const HostVansDetails = () => {
  const van = useOutletContext<Van>();

  return (
    <section className="flex flex-col items-start justify-start bg-white w-full pb-20 px-8 mb-20 gap-6">
      <h4 className="text-left text-gray-700 mt-12">
        <span className="font-bold">Name:</span>
        <span className="ml-1">{van.name}</span>
      </h4>
      <h4 className="text-left text-gray-700">
        <span className="font-bold">Category:</span>
        <span className="ml-1">{van.type}</span>
      </h4>
      <h4 className="text-left text-gray-700">
        <span className="font-bold">Description:</span>
        <span className="ml-1">{van.description}</span>
      </h4>
      <h4 className="text-left text-gray-700">
        <span className="font-bold">Visibility:</span>
        <span className="ml-1">Public</span>
      </h4>
    </section>
  );
};

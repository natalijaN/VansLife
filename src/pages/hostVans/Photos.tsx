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

export const HostVansPhotos = () => {
  const van = useOutletContext<Van>();

  return (
    <section className="flex flex-col items-start justify-center bg-white w-full px-8 py-8 mb-20 gap-6">
      <img src={van?.imageUrl} alt={van?.name} width={150} height={150} />
    </section>
  );
};

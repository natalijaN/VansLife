import { useEffect, useState } from "react";
import { HostVanCard } from "../../components/HostVanCard";

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: string;
};

export const HostVans = () => {
  const [hostVans, setHostVans] = useState<Van[]>([]);

  useEffect(() => {
    const fetchHostVans = async () => {
      const res = await fetch("/api/host/vans");
      const data = await res.json();
      setHostVans(data);
    };
    fetchHostVans();
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center w-full bg-orange-50 pb-20 px-44 gap-6">
      <h3 className="text-4xl font-bold rounded mt-12 my-8">
        Your listed vans
      </h3>
      {hostVans.map((hostVan) => (
        <HostVanCard key={hostVan.id} {...hostVan} />
      ))}
    </section>
  );
};

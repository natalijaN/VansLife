import { useEffect, useState } from "react";
import { VanCard } from "../../components/VanCard";

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

export const VansList = () => {
  const [vans, setVans] = useState<Van[]>([]);
  const [vanTypes, setVanTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");

  useEffect(() => {
    const fetchVans = async () => {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVans(data.vans);
      const types: string[] = data.vans.map((van: Van) => van.type);
      setVanTypes([...new Set(types)]);
    };
    fetchVans();
  }, []);

  const filteredVans =
    selectedType === ""
      ? vans
      : vans.filter((van) => van.type === selectedType);

  return (
    <section className="mt-[96px] min-h-screen flex items-center justify-center bg-orange-50 pb-20">
      <div>
        <h3 className="text-5xl font-bold rounded text-star mt-12 my-8">
          Explore our van options
        </h3>
        <div>
          {vanTypes.map((type, i) => (
            <button
              className="bg-orange-300 px-4 py-2 ml-4 mb-4 rounded-md capitalize"
              key={i}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
          <button
            className="underline underline-offset-2 font-mono ml-10"
            onClick={() => setSelectedType("")}
          >
            Clear filters
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10 px-40">
          {filteredVans &&
            filteredVans.map((van) => <VanCard key={van.id} {...van} />)}
        </div>
      </div>
    </section>
  );
};

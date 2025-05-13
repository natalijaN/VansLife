import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};
export const VanDetail = () => {
  const [vanDetail, setVanDetail] = useState<Van>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanDetail(data.van));
  }, []);

  return (
    <section className="mt-[96px] min-h-screen flex flex-col items-center justify-start px-80 bg-orange-50 pb-20 pt-14">
      <div className="flex flex-col items-start justify-start gap-10">
        <div className="flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <Link to="/vans" className="underline underline-offset-2">
            Back to all vans
          </Link>
        </div>
        <img
          src={vanDetail?.imageUrl}
          alt={vanDetail?.name}
          className="rounded-xl"
          height={600}
        />
        <div className="flex justify-start">
          <button
            className={`rounded-md text-white px-5 py-3 capitalize font-bold
            ${vanDetail?.type === "luxury" && "bg-black"} 
            ${vanDetail?.type === "rugged" && "bg-green-900"} 
            ${vanDetail?.type === "simple" && "bg-orange-500"}`}
          >
            {vanDetail?.type}
          </button>
        </div>
        <h4 className="text-4xl font-semibold">{vanDetail?.name}</h4>
        <p className="font-semibold">
          ${vanDetail?.price}
          <span className="font-thin">/day</span>
        </p>

        <div className="text-left">{vanDetail?.description}</div>
        <button className="w-full bg-orange-500 text-white font-bold rounded-md py-6">
          Rent you van
        </button>
      </div>
    </section>
  );
};

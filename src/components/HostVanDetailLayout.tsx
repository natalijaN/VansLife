import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
  hostId: string;
};

export const HostVanDetailLayout = () => {
  const [hostVanDetail, setHostVanDetail] = useState<Van | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchHostVanDetail = async () => {
      const res = await fetch(`/api/host/vans/${id}`);
      const data = await res.json();
      setHostVanDetail(data.vans[0]);
    };
    fetchHostVanDetail();
  }, []);

  return (
    <>
      {hostVanDetail ? (
        <div className="min-h-screen flex flex-col items-start justify-start bg-orange-50 px-80">
          <Link
            to=".."
            relative="path"
            className="flex items-start justify-center  mb-5"
          >
            &larr;
            <span className="ml-3 underline underline-offset-2">
              Back to all vans
            </span>
          </Link>
          <div className="flex flex-col items-start justify-center w-full bg-white ">
            <div className=" rounded-xl px-7 py-5 flex gap-10 w-full">
              <img
                src={hostVanDetail.imageUrl}
                alt={hostVanDetail.name}
                width={200}
                height={200}
              />
              <div className="flex flex-col items-start justify-center gap-5">
                <div className="flex justify-start">
                  <button
                    className={`rounded-md text-white px-5 py-3 capitalize font-bold
                        ${hostVanDetail?.type === "luxury" && "bg-black"} 
                        ${hostVanDetail?.type === "rugged" && "bg-green-900"} 
                        ${hostVanDetail?.type === "simple" && "bg-orange-500"}`}
                  >
                    {hostVanDetail?.type}
                  </button>
                </div>
                <h4 className="text-2xl font-bold rounded">
                  {hostVanDetail.name}
                </h4>
                <p className="text-gray-600 font-semibold">
                  ${hostVanDetail.price}/day
                </p>
              </div>
            </div>
            <div className="px-7 space-x-4 text-gray-700 font-semibold">
              <NavLink
                to="."
                end
                className={({ isActive }) =>
                  `font-semibold pr-4 focus:underline-offset-4 ${
                    isActive ? "underline underline-offset-4" : ""
                  }`
                }
              >
                Details
              </NavLink>
              <NavLink
                to={`/host/vans/${id}/pricing`}
                className={({ isActive }) =>
                  `font-semibold pr-4 focus:underline-offset-4 ${
                    isActive ? "underline underline-offset-4" : ""
                  }`
                }
              >
                Pricing
              </NavLink>
              <NavLink
                to={`/host/vans/${id}/photos`}
                className={({ isActive }) =>
                  `font-semibold pr-4 focus:underline-offset-4 ${
                    isActive ? "underline underline-offset-4" : ""
                  }`
                }
              >
                Photos
              </NavLink>
            </div>
          </div>
          <Outlet context={hostVanDetail} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

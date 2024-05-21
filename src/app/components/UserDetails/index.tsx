"use client";

import { DetailsState } from "@/app/page";

const UserDetails: React.FC<{ details: DetailsState | null }> = ({
  details,
}) => {
  console.log(details, "aa");
  if (!details || details.isError) {
    return <div className="text-red-400">Unable to fetch details!!</div>;
  }
  return (
    <div className="mt-2">
      <hr />
      <div className="text-center text-xl font-bold my-2 text-gray-500">
        Name: {details?.name}
      </div>
      <div className="flex gap-4  text-white">
        <div className="bg-pink-400 w-[200px] h-[100px] rounded-md flex flex-col items-center justify-center gap-1">
          <div>Age</div>
          <div className="text-xl font-bold">
            {details?.age ?? "No data found"}
          </div>
        </div>
        <div className="bg-purple-400 w-[200px] h-[100px] rounded-m flex flex-col items-center justify-center gap-1">
          <div>Gender</div>
          <div className="text-xl font-bold capitalize">
            {details?.gender ?? "No data found"}
          </div>
        </div>
      </div>
      <div className="mt-4 text-white bg-green-500  rounded-md p-4 flex  flex-col items-center ">
        <div className="text-xl font-bold">Nationality probability</div>
        <div className="mt-2">
          {!details.nationality?.length && <div>No data found</div>}
          {details.nationality.map((country, index) => (
            <div
              key={country.country_id}
              className={index === 0 ? "bg-yellow-400 px-6 font-bold" : "px-6"}
            >
              {`${country.country_id} with 
          ${Math.floor(country.probability * 100)} %`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

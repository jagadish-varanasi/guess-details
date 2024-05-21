"use client";
import { useState } from "react";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";

export interface DetailsState {
  name:string;
  age: number;
  gender: string;
  nationality: Array<{ country_id: string; probability: number }>;
  isError: boolean;
}

export default function Home() {
  const [details, setDetails] = useState<DetailsState | null>(null);

  return (
    <div className="w-full h-[100vh] flex flex-col gap-8 mt-10 items-center">
      <div className="font-bold text-2xl text-gray-400">
        Guess details by name!
      </div>
      <UserForm setDetails={setDetails} />
      {details && <UserDetails details={details} />}
    </div>
  );
}

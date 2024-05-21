"use client";
import { DetailsState } from "@/app/page";
import { guessAge, guessGender, GuessNationality } from "@/services/guess";
import React, { useState } from "react";

const UserForm: React.FC<{
  setDetails: React.Dispatch<React.SetStateAction<DetailsState | null>>;
}> = ({ setDetails }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const responses = await Promise.all([
        guessAge(name),
        guessGender(name),
        GuessNationality(name),
      ]);

      const data = await Promise.all(
        responses.map((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
      );

      const [data1, data2, data3] = data;

      setDetails({
        age: data1.age,
        gender: data2.gender,
        nationality: data3.country,
        name: data3.name,
        isError: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setDetails({
        isError: true,
        age: 0,
        gender: "NA",
        nationality: [],
        name: "",
      });
    } finally {
      setName("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-1">
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        className="border-2 border-gray-400 rounded-sm p-1"
      />
      <button
        type="submit"
        className="bg-slate-400 rounded-sm p-1.5 text-white"
        disabled={!name.length}
      >
        Guess
      </button>
    </form>
  );
};

export default UserForm;

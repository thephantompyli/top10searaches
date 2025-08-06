"use client"
import React, { useState } from "react";

import countries from '@/app/data/countries.json'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import InputInsideSelect from "@/components/InputInsideSelect"

type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function SelectInHome() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Trending Location" />
      </SelectTrigger>
      <SelectContent>
         <InputInsideSelect searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SelectGroup>

          <SelectLabel>Trending Locations</SelectLabel>
           {countries
             .filter((loc) =>
               loc[1].toLowerCase().includes(searchTerm.toLowerCase())
             )
             .map((loc) => (
               <SelectItem key={loc[1]} value={loc[1]}>
                 {loc[1]}
               </SelectItem>
             ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
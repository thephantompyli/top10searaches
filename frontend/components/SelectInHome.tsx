"use client"
import React, { useState, useCallback } from "react";
import { TreeView } from "@/components/tree-view";
import { Globe, Store, FolderOpen, Apple, Send, Folder, File, Share2, Download, Trash2 } from "lucide-react";
import { useRouter } from 'next/navigation';
import countries from '@/app/data/countries.json'
import data from '@/app/data/tree.json'
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

const data1 = [
  {
    id: "1",
    name: "Root",
    type: "region",
    children: [
      {
        id: "1.1",
        name: "Folder 1",
        type: "store",
        children: [
          {
            id: "1.1.1",
            name: "Subfolder",
            type: "department",
            children: [
              { id: "1.1.1.1", name: "File 1", type: "item" },
              { id: "1.1.1.2", name: "File 2", type: "item" },
            ],
          },
        ],
      },
    ],
  },
];

const customIconMap = {
  region: <Globe className="h-4 w-4 text-purple-500" />,
  store: <Folder className="h-4 w-4 text-blue-500" />,
  department: <FolderOpen className="h-4 w-4 text-green-500" />,
  item: <File className="h-4 w-4 text-orange-500" />,
};

const menuItems = [
  {
    id: "download",
    label: "Download",
    icon: <Download className="h-4 w-4" />,
    // action: (items) => console.log("Downloading:", items),
  },
];

 const handleItemClick =  (id: string,router) => {
    // try {
      // const res = await fetch(`/api/topSearches/${id}`);
      // if (!res.ok) throw new Error('Failed to fetch news');
      // const data = await res.json();
      router.push(`/topSearches/${id}`);
    // } catch (err) {
    //   console.error(err);
    // }
  };

export default function SelectInHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  let value;
  let data2 = data.slice(0, 15)
 const navigateToDetail = (selectedItems: TreeViewItem[]) => {
  console.log("Selected items:", selectedItems);
  
  if (selectedItems.length > 0) {
    handleItemClick(selectedItems[0].id+"_"+selectedItems[0].name, router);
  }
};
  const handleCheckChange = (item: TreeViewItem, checked: boolean) => {
    // console.log(`Item ${item.name} checked:`, checked);

  };
  return (

    <div className="w-full px-2 sm:px-134 overflow-x-auto">
      <TreeView
        data={data2}
        title="Tree View Demo"
        showCheckboxes={true}
        iconMap={customIconMap}
        menuItems={menuItems}
        onCheckChange={handleCheckChange}
        onSelectionChange={navigateToDetail}
        className="text-sm sm:text-base"
      />
    
    {/* <Select  value = {value} onValueChange={handleStringToInt}>
      <SelectTrigger className="w-[490px] h-100 px-4 text-base">
        <SelectValue placeholder="Trending Location"  >
					 </SelectValue>
      </SelectTrigger>
      <SelectContent>
         <InputInsideSelect searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SelectGroup>

          <SelectLabel>Trending Locations</SelectLabel>
           {countries
             .filter((loc) =>
               loc[1].toLowerCase().includes(searchTerm.toLowerCase())
             )
             .slice(0, 15)
             .map((loc) => (
               <SelectItem key={loc[0]} value={loc[0] }>
                 {loc[1] + " " +loc[2]} 
               </SelectItem>
             ))}
        </SelectGroup>
      </SelectContent>
    </Select> */}
    </div>
  );
}
"use client";
type Props = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export default function InputInsideSelect({ searchTerm, setSearchTerm }: Props) {
  return (
    <input
      type="text"
      placeholder="Search location..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-2 py-1 border rounded mb-2"
    />
  );
}
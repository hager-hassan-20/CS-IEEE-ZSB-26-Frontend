"use client";

import { useState } from "react";
import { searchLocation } from "@/services/weatherApi";

export default function SearchBar({ onSelectLocation }: { onSelectLocation: (loc: any) => void }) {
    const [params, setParams] = useState("");
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = async (value: string) => {
        setParams(value);
        if (value.length > 2) {
            const data = await searchLocation(value);
            setResults(data.results || []);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                value={params}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for a city..."
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            
            {results.length > 0 && (
                <ul className="absolute w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl overflow-hidden z-10 shadow-lg">
                    {results.map((loc) => (
                        <li
                            key={loc.id}
                            onClick={() => {
                                onSelectLocation(loc);
                                setResults([]);
                                setParams('');
                            }}
                            className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-white text-sm"
                        >
                            {loc.name}, {loc.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
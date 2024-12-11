"use client";
import Image from "next/image";
import { useState } from "react";
import TierList from "./newTemplate.js";

export default function createCustomPage() {
    const [templateName, setTemplateName] = useState("");
    const [category, setCategory] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let template = {
            name: templateName,
            category: category,
            
          };

        addTemplate(template);
        setCategory("");
        setTemplateName("");
    };

    const handleCategory = (event) => {   
        setCategory(event.target.value);
    };

    const handleTemplateName = (event) => {
        setTemplateName(event.target.value);
    };

    return (
        <div className="bg-stone-800 h-screen">
            <div className="w-screen h-20 bg-gradient-to-t from-gray-700 via-rose-500 to-orange-400 flex">
            <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="mr-auto bg-transparent mt-8 ml-8"
                />
            <button className="bg-blue-400 text-slate-800 font-bold h-8 mt-6 px-3 rounded-lg border-2 border-slate-800 ml-auto mr-10 hover:underline active:bg-blue-300">
                Login
            </button>
            </div>
            <div className="mt-20 text-center">
                <h2 className="text-4xl text-rose-500 font-semibold mt-4">Create Your Own Template</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="text-center">
                    <div className="text-2xl text-orange-400 font-bold mt-4">
                        <h2>Check if Template Already Exists: </h2>
                    </div>
                    <input
                    value={templateName}
                        required
                        className="py-2 px-2 mt-3 rounded text-black"
                        onChange={handleTemplateName}
                        placeholder="Template Name"
                ></input>
                <select
                    value={category}
                    className="py-2 px-2 mt-3 rounded-sm text-black"
                    onChange={handleCategory} 
                >
                    <option value="Brands">Brands</option>
                    <option value="Disney">Disney</option>
                    <option value="Pokemon">Pokemon</option>
                    <option value="Programming Languages">Programming Languages</option>
                    <option value="Sports">Sports</option>
                </select>
                </form>
            </div>
        </div>
    )
};
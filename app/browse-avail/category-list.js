"use client"

import Category from "./category";
import { useState } from "react";
import Option from "./option";

export default function CategoryList({categories}) {
        const sorted = categories.sort((a, b) => a.name.localeCompare(b.name));
        const [selected, setSelected] = useState(null);
        const optionsList = categories.map((category) => category.options);
        let index = 0;
        while (index < categories.length) {
            if (categories[index].name === selected) {

<<<<<<< Updated upstream
                break;
            }
            index++;
        }

        let subcategories = [];
        let options = [];
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].name === selected) {
                for (let j = 0; j < categories[i].optionsList.length; j++) {
                    options.push(categories[i].optionsList[j].option.name);
                }
                subcategories.push(options);
        }

        return(
            <div className="flex items-center bg-slate-800 w-screen h-screen text-slate-100">
                <h1 className="text-3xl font-semibold">Categories</h1>
                <ul className="list-item items-center">
                    {sorted.map((category) => (
                        <Category key={category.name} name={category.name} onClick={()=>setSelected(category.name)}/>
                    ))}
                </ul>
                <ul>
                    {selected && subcategories.map((subcategory) => (
                        
                    ))) />
                    ))}
                </ul>
                {selected}
            </div>
        )
    }
=======
    return(
        <main className="flex items-center">
            <h1 className="text-3xl font-semibold">Categories</h1>
            <ul className="list-item items-center">
                {sorted.map((category) => (
                    <Category key={category.name} name={category.name} />
                ))}
            </ul>
        </main>
    )
>>>>>>> Stashed changes
}
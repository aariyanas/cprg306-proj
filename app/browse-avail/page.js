"use client"

import CategoryList from "./category-list";
import categories from "./categories.json";
import { useState } from "react";

export default function Page() {
    const availCategories = [...categories];
    const [selectedCategory, setSelectedCategory] = useState(null);
    let selectedCategoryOptions;

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    for (let category in availCategories) {
        if (category === selectedCategory) {
            selectedCategoryOptions = category.optionsList;
        }
    }

    return(
        <main className="bg-slate-800 w-screen h-screen text-slate-100">
            <CategoryList categories={availCategories} onClick={handleCategoryClick}/>
            {selectedCategory && (selectedCategoryOptions.map((option) => {
            <div>
                <ul className="list-disc mb-4">
                    <li>{option}</li>
                </ul>
            </div>
        }))}
        </main>
    )
}
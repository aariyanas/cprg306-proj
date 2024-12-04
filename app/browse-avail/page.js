"use client"

import CategoryList from "./category-list";
import categories from "./categories.json";

export default function Page() {
    const availCategories = [...categories];
    return(
        <main className="bg-slate-800 w-screen h-screen text-slate-100">
            <CategoryList categories={availCategories} />
        </main>
    )
}
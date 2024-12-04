"use client"

import Category from "./category";
import { useState } from "react";

export default function CategoryList({categories}) {
    const sorted = categories.sort((a, b) => a.name.localeCompare(b.name));

    return(
        <main className="flex items-center">
            <h1 className="text-3xl font-semibold">Categories</h1>
            <ul className="list-item items-center">
                {sorted.map((category) => (
                    <Category key={category.id} name={category.name} />
                ))}
            </ul>
        </main>
    )
}
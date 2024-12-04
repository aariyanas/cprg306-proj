import React from "react";

export default function Category({id, name, optionsList}) {
    return(
        <div>
            <ul className="list-disc mb-4">
                <li>{name}</li>
            </ul>
        </div>
    )
}
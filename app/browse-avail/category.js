import React from "react";

<<<<<<< Updated upstream
export default function Category({name, optionsList}) {
=======
export default function Category({id, name, optionsList}) {
    const options = [selectedCategory.optionsList].map((option) => {   
        <div>
            <ul className="list-disc mb-4">
                <li>{option}</li>
            </ul>
        </div>
    });

>>>>>>> Stashed changes
    return(
        <li>{name}</li>
    )
}
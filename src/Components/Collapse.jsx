import React, { useState } from "react";
import chevronUp from "../Assets/ChevronUp.png";
import chevronDown from "../Assets/ChevronDown.png";
import "../Components/Collapse.css"; // Assure-toi que le chemin est bon

function Collapse({ title, content }) {
    const [contentVisible, setContentVisible] = useState(false);

    const toggleContent = () => {
        setContentVisible(!contentVisible);
    };

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img
                        src={contentVisible ? chevronUp : chevronDown}
                        alt={contentVisible ? "Réduire le contenu" : "Afficher le contenu"}
                    />
                </div>
            </div>

            <div className={`collapse__content ${contentVisible ? "visible" : ""}`}>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

export default Collapse;

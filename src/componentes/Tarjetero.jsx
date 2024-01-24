import DigimonCard from "./DigimonCard.jsx";
import React, {useEffect, useState} from "react";

function Tarjetero() {
    const [digimonData, setDigimonData] = useState([]);

    useEffect(function () {
        fetch("https://digimon-api.vercel.app/api/digimon")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setDigimonData(data)
            })
            .catch(function (error) {
                console.log("Error")
            })
    }, []);
    console.log(digimonData)

    return (
        digimonData.map(function (digimon) {
            return (
                <div className="col-sm-12 col-md-6 col-lg-3 mt-3">
                    <DigimonCard nombre={digimon.name} img={digimon.img} nivel={digimon.level}></DigimonCard>
                </div>

            )
        })
    )
}

export default Tarjetero;
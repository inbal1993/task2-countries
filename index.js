const getAll = () => {
    return $.ajax({
        method: "GET",
        url: "https://restcountries.com/v3.1/all", 
    });
}

const getBySearch = () => {
    let name = document.querySelector(".my-input").value;
    return $.ajax({
        method: "GET",
        url: `https://restcountries.com/v3.1/name/${name}`
    })
};


const bySearch = async () => {
    try {
        const countries = await getBySearch();
        const myDiv = document.querySelector(".my-table")
        myDiv.innerHTML = "";

        const childDiv = document.createElement("div");
        childDiv.className = "theMain";

        let populations = 0;
        let length = 0;
        console.log(countries);

        countries.forEach(country => {
            populations += country.population;
            length++;
        });
        let avg = populations / length;

        myDiv.appendChild(childDiv);

        childDiv.innerHTML += `<p> Total countries result <span>${length}</span></p>
        <p>Total Countries Population: <span>${populations}</span></p>
        <p>Average Population: <span>${avg}</span></p>`

        const table = document.createElement("table");
        table.className = "my-table";
        myDiv.appendChild(table);

        table.innerHTML = `<tr><th>Country Name</th>
        <th>Population</th>
        </tr>`

            console.log(myDiv);

            countries.forEach(country => {
                const tr = document.createElement("tr");
                tr.className = "picked-country";
                table.innerHTML += `<td>${country.name}</td>
                <td>${country.population}</td>`
            });

            const table2 = document.createElement("table");
            table2.className = "my-table";
            myDiv.appendChild(table2);

            table2.innerHTML = `<br><tr><th>Region</th>
            <th>Number of countries</th>
            </tr>`

            let OceaniaNum = 0;
            let AsiaNum = 0;
            let AfricaNum = 0;
            let AmericaNum = 0;
            let EuropeNum = 0;
            let AntarcticaNum =0;
            let AustraliaNum =0; 
            let regionArray = ["Oceania", "Asia", "Africa", "Americas", "Europe", "Antarctica", "Australia"] 

            countries.forEach(country => {
                for (let i = 0; i < 1; i++) {
                    if (country.region === "Oceania") {
                        OceaniaNum ++;

                    }else if (country.region === "Asia") {
                        AsiaNum ++;
                    
                    }else if (country.region === "Europe") {
                        EuropeNum ++;
                    
                    }else if (country.region === "Americas") {
                        AmericaNum ++;
                    
                    }else if (country.region === "Africa") {
                        AfricaNum ++;
                        
                    }else if (country.region === "Australia") {
                        AustraliaNum ++;
                    
                    }else if (country.region === "Antarctica") {
                        AntarcticaNum ++;
                    }
                    
                }
            });
            let regionArrayNum = [OceaniaNum, AsiaNum, AfricaNum, AmericaNum, EuropeNum, AustraliaNum, AntarcticaNum]
            
            for (let i = 0; i < regionArray.length; i++) {
                const tr = document.createElement("tr");
            tr.className = "picked-country";
            table2.innerHTML += `<td>${regionArray[i]}</td>
            <td>${regionArrayNum[i]}</td>`
            }

    } catch (error) {
        console.log("error", error);
    }
};


const byButtonClick = async () => {
    try {
        const countries = await getAll();
        const myDiv = document.querySelector(".my-table")
        myDiv.innerHTML = "";

        const childDiv = document.createElement("div");
        childDiv.className = "theMain";

        let populations = 0;
        let length = 0;
        console.log(countries);

        countries.forEach(country => {
            populations += country.population;
            length++;
        });
        let avg = populations / length;

        myDiv.appendChild(childDiv);

        childDiv.innerHTML += `<p>Total countries result: <span>${length}</span></p>
        <p>Total Countries Population:  <span>${populations}</span></p>
        <p>Average Population: <span>${avg}</span></p>`

        const table = document.createElement("table");
        table.className = "my-table";
        myDiv.appendChild(table);

        table.innerHTML = `<tr>
        <th>Country Name</th>
        <th>Number of citizens</th>
        </tr>`

        console.log(myDiv);

        countries.forEach(country => {
            const tr = document.createElement("tr");
            tr.className = "picked-country";
            table.innerHTML += `<td>${country.name}</td>
            <td>${country.population}</td>`;
        });

        const table2 = document.createElement("table");
        table2.className = "my-table";
        myDiv.appendChild(table2);

        table2.innerHTML = 
        `<br><tr>
        <th>Region</th>
        <th>Number of countries</th>
        </tr>`

        let OceaniaNum = 0;
        let AsiaNum = 0;
        let AfricaNum = 0;
        let AmericaNum = 0;
        let EuropeNum = 0;
        let AntarcticaNum =0;
        let AustraliaNum =0; 
        let regionArray = ["Oceania", "Asia", "Africa", "Americas", "Europe", "Australia", "Antarctica"]

        countries.forEach(country => {
            for (let i = 0; i < regionArray; i++) {
                if (country.region === "Oceania") {
                    OceaniaNum ++;
                }else if(country.region === "Asia") {
                    AsiaNum ++;

                }else if(country.region === "Africa") {
                    AfricaNum ++;

                }else if(country.region === "Americas") {
                    AmericaNum ++;

                }else if(country.region === "Europe") {
                    EuropeNum ++;

                }else if(country.region === "Antarctica"){
                    AntarcticaNum ++;

                }else if(country.region === "Australia"){
                    AustraliaNum++;
                }
            }
            });

            let regionArrayNum = [OceaniaNum, AsiaNum, AfricaNum, AmericaNum, AustraliaNum, AntarcticaNum, EuropeNum]
            for (let i = 0; i < regionArray.length; i++) {
                const tr = document.createElement("tr");
                tr.className = "picked-country";
                table2.innerHTML += `<td>${regionArray}</td>
                <td>${regionArrayNum[i]}</td>`
            }

    } catch (error) {
        console.log("error", error);
        
    }
}

const getOne = (oneCountry) => {
    $.ajax({
        method: "GET",
        url: `https://restcountries.com/v3.1/${oneCountry}`,
    })
}   
const getOneCountry = async (countries) => {
    try {
        const country = await getOne(countries)
    } catch (error) {
        console.log("error", error);
    }
};
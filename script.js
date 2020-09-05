// TODO: add code here

window.addEventListener("load", function(){
    let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
        let sorted = json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
        // json.sort(function(a, b){
        //     return b.hoursInSpace -a.hoursInSpace;
        // })
        const container = document.getElementById("container");
        const counts = document.getElementById("counts");
        counts.innerHTML = `Number of Austronauts: ${json.length}`
    
        let astronauts = "";   
        for(astronaut of sorted){
            let active = astronaut.active ?"green":"";
                 console.log(active)
            astronauts +=
                // container.innerHTML = 
                // `${Array(json.length).fill().map((item, i) =>`
                    `<div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li class="${active}">Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src = ${astronaut.picture}>
                    </div>`
                    //  ).join('')}
            // `;
            // i = (i+1)% json.length;
            container.innerHTML = astronauts;
            }
        })
    })
})
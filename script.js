

let pilot = document.getElementById('pilotName');
let copilot = document.getElementById('copilotName');
let faultyItems = document.getElementById('faultyItems');
let submit = document.getElementById('formSubmit');
let launchform = document.getElementById('launchForm');
let missionTarget = document.getElementById('missionTarget');
let launchStatusCheck = document.getElementById('launchStatusCheck');
let lanunchStatus = document.getElementById('launchStatus');
let cargoStatus = document.getElementById('cargoStatus');
let fuelStatus = document.getElementById('fuelStatus');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let cargoMass = document.getElementById('cargoMass');
let fuelLevel = document.getElementById('fuelLevel');


launchForm.addEventListener("submit", function(event){
   event.preventDefault();
      
   if(pilot.value === '' || copilot.value === '' || fuelLevel.value === '' || cargoMass.value === '' ){
      alert('All Fields Required with Correct Inputs');
   }
   else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)  || isNaN(Number(pilot.value)) === false || isNaN(Number(copilot.value)) === false){ 
      alert('Correct Data Types Require');
   }else{

      pilotStatus.innerHTML=`Pilot ${pilot.value} is Ready!`;
      copilotStatus.innerHTML =`Copilot ${copilot.value} is Ready!`;
      
      if (fuelLevel.value > 10000){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML="Shuttle not Ready for Launch!";
         launchStatus.style.color="red";
      }
      if (cargoMass.value < 10000){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML="Shuttle Ready for Launch!";
         launchStatus.style.color="green";
      }


   }
   

});
   

const fetchData = async ()=> {
   try{
      const res = await fetch(
         'https://handlers.education.launchcode.org/static/planets.json'
      );
      const data =  await res.json();
      // console.log(res);
      let rand = Math.floor(Math.random()*data.length);
      return data[rand];
   }catch (err) {
      console.log.error(err);
   }
   
}


setPlanetaryData = async ()=>{

   let planet = await fetchData();
   // console.log(planet)
   missionTarget.innerHTML=`
   <h2 >Mission Destination</h2>
   <ol>
      <li>Name:${planet.name} </li>
      <li>Diameter${planet.diameter} </li>
      <li>Star:${planet.star}</li>
      <li>Distance from Earth:${planet.distance}</li>
      <li>Number of Moons:${planet.moons}</li>
   </ol>
   <img src="${planet.image}">`;

}

setPlanetaryData()
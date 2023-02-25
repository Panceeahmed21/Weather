let listOfLocation = [];
let listOfCurrent = [];
let listOfForecast = [];

let temp
let nameOfDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let nameOfMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];


let getnextDate


let intDate;
let normalDate = new Date();

let inputSearch = document.getElementById("searchCode");

inputSearch.addEventListener("input", function () {
  searchValue = inputSearch.value;
  getDatafromApi(searchValue);
});

getDatafromApi((searchValue = "lond"));

async function getDatafromApi(code) {
  let apiElement = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=20b5423eb47a45d185984307232402&q=${code}&days=7&lang=en`
  );
  let finalElement = await apiElement.json();

  listOfLocation = [{ ...finalElement.location }];
  listOfCurrent = [{ ...finalElement.current }];
  listOfForecast = [{ ...finalElement.forecast }];


  getNextDate();

  function getNextDate() {
 
    for (var index = 0; index < listOfForecast.length; index++) {
temp =index
    }
console.log(listOfForecast);

  }

  displayData( );
}

function displayData() {
  let cartona = "";
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < listOfLocation.length; j++) {
      for (let k = 0; k < listOfCurrent.length; k++) {
        for (let g = 0; g < listOfForecast.length; g++) {
   
          
          cartona += `
    <div class="col-md-10 col-lg-4">
    <div class="card mt-5 py-1 pb-0 rounded-0">
     <div class="card-header d-flex justify-content-between">
      <div class="day">${nameOfDay[normalDate.getDay(intDate)]}</div>
      <div class="date">${ normalDate.getDate()} ${ nameOfMonth[normalDate.getMonth()]}</div>
     </div>
      <div class="card-body pb-lg-2 pb-xl-4">
        
        <div class="location">${listOfLocation[i].name}</div>

        <div class="mid d-flex mb-1 justify-content-between ">
          <div class="degree  w-75 text-white fw-bold fs-1 ">${
            listOfCurrent[k].temp_c
          }<sup>o</sup>C</div>
          <div class="iconCloudy  w-25"> <img src="${
            listOfCurrent[k].condition.icon
          }" class="img-fluid pt-4" alt=""></div>
        </div>
 <div class="status mb-3">${listOfCurrent[k].condition.text}</div>
<div class="cardFooter pb-lg-3 pb-xl-4">
  <span class="me-3"><img src="images/icon-umberella.png" alt=""> ${
    listOfCurrent[k].humidity
  }%</span>
  <span class="me-3"><img src="images/icon-wind.png" alt="">${
    listOfCurrent[k].wind_kph
  }km/h</span>
  <span><img src="images/icon-compass.png" alt=""> ${
    listOfLocation[i].tz_id
  }</span>

</div>

      </div>
    </div>
  </div>
  <div class="col-md-10 col-lg-4">
    <div class="card vipCard mt-5 py-2 rounded-0">
     <div class="card-header d-flex justify-content-between">
     <div class="day m-auto">${nameOfDay[getnextDate=new Date(listOfForecast[0].forecastday[temp+1].date).getDay()]}</div>

     </div>
      <div class="card-body py-4">
<div class="img-middle  d-flex justify-content-center m-auto"><img src="${listOfForecast[0].forecastday[temp+1].day.condition.icon}" alt="" class="img-fluid" ></div>        
<div class="degrNextDay m-auto pt-3 fs-5 w-25 d-flex justify-content-center align-content-center text-white fw-bold">${listOfForecast[0].forecastday[temp+1].day.maxtemp_c}<sup class=" pt-2" >o</sup>C</div>
<div class="degrNextDay m-auto w-25 d-flex justify-content-center align-content-center"><small>${listOfForecast[0].forecastday[temp+1].day.mintemp_c}<sup class=" pt-2" >o</sup></small> </div>

<div class="status mb-5 text-center mt-2 ">${listOfForecast[0].forecastday[temp+1].day.condition.text} </div>
</div>
    </div>
  </div>
  <div class="col-md-10 col-lg-4">
    <div class="card mt-5 py-2 rounded-0">
     <div class="card-header d-flex justify-content-between">
      <div class="day m-auto">${nameOfDay[getnextDate=new Date(listOfForecast[0].forecastday[temp+2].date).getDay()]}</div>

     </div>
      <div class="card-body py-4">
<div class="img-middle  d-flex justify-content-center m-auto"><img src="${listOfForecast[0].forecastday[temp+2].day.condition.icon}" alt="" class="img-fluid" ></div>        
<div class="degrNextDay m-auto pt-3 fs-5 w-25 d-flex justify-content-center align-content-center text-white fw-bold">${listOfForecast[0].forecastday[temp+2].day.maxtemp_c}<sup class=" pt-2" >o</sup>C</div>
<div class="degrNextDay m-auto w-25 d-flex justify-content-center align-content-center"><small>${listOfForecast[0].forecastday[temp+2].day.mintemp_c}<sup class=" pt-2" >o</sup></small> </div>

<div class="status mb-5 text-center mt-2 ">${listOfForecast[0].forecastday[temp+2].day.condition.text} </div>
</div>
    </div>
  </div>
    `;
        }
      }
    }
  
}

  document.getElementById("getData").innerHTML = cartona;
}

function openNav() {
  document.getElementById("side-navbar").style.width = "400px";

  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.6)";
  document.getElementById("main").style.width = "100vw";
  document.getElementById("main").style.height = "100vh";
  document.getElementById("main").style.position = "fixed";
  document.getElementById("main").style.top = "0";
  document.getElementById("main").style.left = "0";

  document.getElementById("main").addEventListener("click", () => {
    closeNav();
  });
}

function closeNav() {
  document.getElementById("side-navbar").style.width = "0";
  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("main").style.width = "0";
  document.getElementById("main").style.height = "0";
  document.getElementById("main").style.position = "none";
  document.getElementById("main").style.top = "0";
  document.getElementById("main").style.left = "0";
}

let carsDetails = [
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/57b1b1b9180a56fba0156135ea6dc8e9f058303d.jpg?1621260558",

    carname: "Maruti Wagon R",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "4.7 (66) 72,936 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1,601",
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d838660c8fd50d0f2e3ed28c2b0550cbe940c0e0.JPG?1628247230",

    carname: "Hyundai Santro",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "4.7 (66) 40,936 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1,497",
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c2fd725617ab00fc5db13c86298835c1825bc233.JPG?1627621607",

    carname: "Nissan Micra",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "4.5 (69) 89,977 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1,775",
  },

  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/14bbe6f0419d819891f9c4b76b798130fa2d7732.JPG?1627102878",

    carname: "Maruti S-Cross",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "5 (8) 26,057 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "2,700",
  },
];

function displayData(carsDetails) {
  carsDetails.forEach((car) => {
    let card = document.createElement("div");

    let imageDiv = document.createElement("div");

    let carImage = document.createElement("img");
    carImage.src = car.carimage;
    imageDiv.append(carImage);
    carImage.setAttribute("class", "carimage");

    let detailsDiv = document.createElement("div");

    let carname = document.createElement("p");
    carname.innerText = car.carname;
    carname.setAttribute("class", "carname");

    let seatsFuelTransmission = document.createElement("div");

    let transmission = document.createElement("p");
    transmission.innerText = car.transmission;

    let fueltype = document.createElement("p");
    fueltype.innerText = car.fueltype;

    let seats = document.createElement("p");
    seats.innerText = car.seats;

    seatsFuelTransmission.append(transmission, fueltype, seats);
    seatsFuelTransmission.setAttribute("class", "seatsFuelTransmission");

    let ratings = document.createElement("p");
    ratings.innerText = car.ratings;
    ratings.setAttribute("class", "ratings");

    let delivery = document.createElement("p");
    delivery.innerText = car.delivery;
    delivery.setAttribute("class", "delivery");

    detailsDiv.append(carname, seatsFuelTransmission, ratings, delivery);
    detailsDiv.setAttribute("Class", "detailsDiv");

    let priceDiv = document.createElement("div");

    let price = document.createElement("p");
    price.innerText = "₹" + "" + car.rentprice;
    price.setAttribute("class", "price");

    let bookBtn = document.createElement("button");
    bookBtn.innerText = "BOOK NOW";
    bookBtn.setAttribute("class", "bookBtn");

    priceDiv.append(price, bookBtn);

    card.append(imageDiv, detailsDiv, priceDiv);

    document.getElementById("cars-box").append(card);
  });
}

displayData(carsDetails);

let filterType = document.getElementsByClassName("filtertext");
// document.getElementByClassName("filtertext").style.backgroundColor =
// "#10a310;";
for (type of filterType) {
  type.addEventListener("click", (ele) => {
    let filterCriteria = ele.target.innerText;

    let filteredData = filterType.filter((e)=>{
      if ( filterCriteria == "5"){
        return true
      }
      else{
        return false
      }
    })
    displayData(filteredData)
  });
}

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
    transmission: "Automatic",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "4.7 (66) 72,936 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1601,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d838660c8fd50d0f2e3ed28c2b0550cbe940c0e0.JPG?1628247230",

    carname: "Hyundai Santro",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "SUV",
    deliverytype: "Airport",
    ratings: "4.7 (66) 40,936 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1497,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c2fd725617ab00fc5db13c86298835c1825bc233.JPG?1627621607",

    carname: "Nissan Micra",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "SUV",
    deliverytype: "Home Delivery",
    ratings: "4.5 (69) 89,977 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1775,
  },

  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/14bbe6f0419d819891f9c4b76b798130fa2d7732.JPG?1627102878",

    carname: "Maruti S-Cross",
    transmission: "Automatic",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "5 (8) 26,057 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 2700,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/4f978e418417cef5f069be1c013ee75b34c294ce.png?1613648724",

    carname: "Maruti Swift",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "4.5 (11) 34,245 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1757,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/d214904b8ea2db5eee94b476923ecb49e47c37a5.JPG?1624540855",

    carname: "Hyundai I20",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "4.9 (18) 12,679 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 2700,
  },

  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/464870b8c0460671f0f7c6da52a5577fd2fb089e.JPG?1630567517",

    carname: "Toyota Etios",
    transmission: "Manual",
    fueltype: "Diesel",
    seats: "5seats",
    cartype: "SUV",
    deliverytype: "Home Delivery",
    ratings: "4.7 (32) 70,450 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1625,
  },

  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/c5d25b436da0aeb9ca1c25c86d8e85a1e9115aaf.JPG?1623135458",

    carname: "Renault Triber",
    transmission: "Manual",
    fueltype: "Diesel",
    seats: "7seats",
    cartype: "SUV",
    deliverytype: "Home Delivery",
    ratings: "4.3 (8) 12,525 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1672,
  },

  {
    carimage:
      "https://zoomcar-assets.zoomcar.com/photographs/original/1a46bbfce3d72635ae64a06e6bbb8f8745d41108.png?1584524485",

    carname: "Tata Nexon",
    transmission: "Automatic",
    fueltype: "Diesel",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "5 (40) 60,437kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1672,
  },
  {
    carimage:
      "https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/caa0d4f0258c7da7e005a54df6eb930001af567b.JPG?1631171816",

    carname: "Maruti",
    transmission: "Automatic",
    fueltype: "Diesel",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "5 (40) 60,437kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1672,
  },
];

function displayData(carsDetails) {
  document.getElementById("cars-box").innerHTML = "";
  carsDetails.forEach((car, index) => {
    if (index > 3) {
      return;
    }
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

    bookBtn.addEventListener("click", () => {
      window.location.href = "checkout.html";
      let carDetails = [];
      carDetails.push(car);
      localStorage.setItem("carsDetailsData", JSON.stringify(carDetails));
    });

    priceDiv.append(price, bookBtn);

    card.append(imageDiv, detailsDiv, priceDiv);

    document.getElementById("cars-box").append(card);
  });
}

displayData(carsDetails);

// filters for each type

// filter for 5 seats
function filterFor5(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.seats == "5seats") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filter5").addEventListener("click", function () {
  let data = filterFor5(carsDetails);
  displayData(data);
});

// filter for 7 seats
function filterFor7(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.seats == "7seats") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filter7").addEventListener("click", function () {
  let data = filterFor7(carsDetails);
  displayData(data);
});

// filter for manual tranmission
function filterForManual(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.transmission == "Manual") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filtermanual").addEventListener("click", function () {
  let data = filterForManual(carsDetails);
  displayData(data);
});
//  filter for automatic transmission
function filterForAutomatic(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.transmission == "Automatic") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document
  .getElementById("filterautomatic")
  .addEventListener("click", function () {
    let data = filterForAutomatic(carsDetails);
    displayData(data);
  });
// filter for suv type
function filterForSuv(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.cartype == "SUV") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filtersuv").addEventListener("click", function () {
  let data = filterForSuv(carsDetails);
  displayData(data);
});

// filter for hatchback type

function filterForHatchback(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.cartype == "hatchback") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document
  .getElementById("filterhatchback")
  .addEventListener("click", function () {
    let data = filterForHatchback(carsDetails);
    displayData(data);
  });

// filter for home delivery

function filterForHomeDelivery(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.deliverytype == "Home Delivery") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filterhome").addEventListener("click", function () {
  let data = filterForHomeDelivery(carsDetails);
  displayData(data);
});

// filter for airport delivery

function filterForAirport(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.deliverytype == "Airport") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filterairport").addEventListener("click", function () {
  let data = filterForAirport(carsDetails);
  displayData(data);
});

document.querySelector(".bookBtn").addEventListener("click", () => {
  window.location.href = "checkout.html";
});

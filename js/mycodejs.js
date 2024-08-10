function displayPrice() {
    var tour = document.getElementById("tour");
    var selectedTourPrice = tour.options[tour.selectedIndex].value;
    var span = document.getElementById("tourPrice");
    span.innerHTML = `${selectedTourPrice}$ / Person`;
}

document.getElementById("tour").addEventListener("change", displayPrice);

window.onload = displayPrice;

function totalAmount(){
    const tour_element = document.getElementById("tour");
    const tour_value = parseInt(tour_element.value);
    const number_of_people = parseInt(document.getElementById("numOfPeople").value);
    const total = tour_value*number_of_people;
    const total_element = document.getElementById("total");
    total_element.textContent = "Total amount : "+total+"$"
}
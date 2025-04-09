$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        // alert("button clicked!");
        makePredictions();
    });
});

// Call flask api endpoint
function makePredictions() {
    let hour = $("#hour").val();
    let day = $("#day").val();
    let month = $("#month").val();
    let temperature = $("#temperature").val();
    let distance = $("#distance").val();
    let surge_multiplier = $("#surge_multiplier").val();
    let name = $("#name").val();
    let is_weekend = $("#is_weekend").val();
    let source = $("#source").val();
    let destination = $("#destination").val();
    let cab_type = $("#cab_type").val();

    // create the payload
    let payload = {
        "hour": hour,
        "day": day,
        "month": month,
        "temperature": temperature,
        "distance": distance,
        "surge_multiplier": surge_multiplier,
        "name": name,
        "is_weekend": is_weekend,
        "source": source,
        "destination": destination,
        "cab_type": cab_type,
    };

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/makePredictions",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);
            let predictedPrice = parseFloat(returnedData["predicted_price"]);

            if (predictedPrice > 0) {
                // Corrected this line to properly use template literals
                $("#output").text(`The predicted price for your ride is $${predictedPrice.toFixed(2)}.`);
            } else {
                $("#output").text("Sorry, there was an error with the prediction.");
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });
}

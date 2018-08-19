
// ### Level 1: Automatic Table and Date Search

// * Create a basic HTML web page.
// * Using the UFO dataset provided in the form of a JavaScript object, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
// * Add an `input` tag to your HTML document and write JavaScript code that will search through the `date/time` column to find rows that match user input.




// Console.log the UFO data from data.js
console.log(dataSet);


// Filter the data
// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#start-form-input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputStart = d3.select("#start-form-input").property("value");
    var inputEnd  = d3.select("#end-form-input").property("value");
    var inputState = d3.select("#state-form-input").property("value"); 

    console.log(inputValue);

    // DELETE OLD TABLE
    
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Select all row insidy table body and delete them
    var trows = tbody.selectAll("tr");
    trows.remove();

    // Filter the data
    var filteredData = dataSet.filter(ufo =>
        (ufo.datetime >= inputStart) & 
        (ufo.datetime <= inputEnd) & 
        (ufo.state === inputState));

    // INSERT TABLE
    filteredData.forEach( ufo => {
        console.log(ufo); 
        var tr= tbody.append("tr"); 
        Object.values(ufo).forEach(value => {
            console.log(value);
            tr.append("td").text(value);
        });
    });
}); 

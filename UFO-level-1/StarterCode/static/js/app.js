// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// function to display UFO sightings
var tbody = d3.select("tbody");
function table(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((value) => {
      var ufoInfo = row.append("td");
        ufoInfo.text(value);
      });
  });
}

// initial display of all UFO sightings
console.log(tableData);
table(tableData);

// 'Filter Table' button
// filter the database and display
function buttonClick() {

  d3.event.preventDefault();
   var date = d3.select("#datetime").property("value");
   var filteredData = tableData;
   if (date) {
     filteredData = filteredData.filter(row => row.datetime === date);
   }
// final display of all UFO sightings
   table(filteredData);
   console.log(filteredData);
// display message if no records found
 if (filteredData.length == 0) {
  d3.select("tbody")
    .append("tr")
    .append("td")
      .attr("colspan", 7)
      .html("<h4>No Records Found</h4>");
};
 }
 d3.selectAll("#filter-btn").on("click", buttonClick);
 
 

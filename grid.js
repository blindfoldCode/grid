function run(cb) {
  var tableBody = document.querySelector("table");

  for (var i = 0; i < 10; i++) {
    var row = document.createElement("tr");
    row.id = "row" + i;
    for (var td = 0; td < 10; td++) {
      var cell = document.createElement("td");
      cell.className = cb(td, i);
      cell.textContent = i + " - " + td;
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}

run(function(td, i) {
  return (td <= i) ? "bg-blue" : "bg-orange";
})

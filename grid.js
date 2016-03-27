function run(cb) {
  var body = document.querySelector("body"),
    tableBody = document.createElement("table");

  for (var i = 0; i < 10; i++) {
    var row = document.createElement("tr");
    row.id = "row" + i;
    for (var td = 0; td < 10; td++) {
      var cell = document.createElement("td");
      cell.className = (cb(td, i) !== undefined) ? cb(td, i) : "";
      cell.textContent = i + " - " + td;
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
    body.appendChild(tableBody);
  }
}

run(function(td, i) {
  return (td <= i) ? "bg-blue" : "bg-orange";
});

run(function(td, row) {
  if (row % 2 == 0) {
    return (td % 2 == 0) ? "bg-orange" : "bg-blue";
  } else {
    return  (td % 2 == 0) ? "bg-blue" : "bg-orange";
  }

});

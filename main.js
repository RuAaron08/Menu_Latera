const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var apellido = document.getElementById("apellido").value;

  var table = document.createElement("table");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = name;
  cell2.innerHTML = apellido;
  cell3.innerHTML = email;
  

  var gridContainer = document.getElementById("gridContainer");
  gridContainer.appendChild(table);

  document.getElementById("myForm").reset();

  return false;
}
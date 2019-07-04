//ajax
const search = (e) => {

  e.preventDefault();

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {

    if (this.readyState == 4) {
      if (this.status == 200) {

        var response = JSON.parse(this.responseText);

        //mostrar as infos
        document.querySelector("#street").innerHTML = response.street;
        document.querySelector("#neighborhood").innerHTML = response.neighborhood;
        document.querySelector("#city").innerHTML = response.city;
        document.querySelector("#state").innerHTML = response.state;

      }
    }
  };

  //variável para pegar o cep
  var cep = document.querySelector("#cep").value;

  xhttp.open("GET", `http://localhost:5000/address/cep/${cep}`, true);

  xhttp.send();

};

//aparecer quando clico no botão
document.querySelector("#submit").addEventListener("click", (event) => {
  search(event);
});
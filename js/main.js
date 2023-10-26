const ciudades = ["cusco", "lima", "arequipa", "pucallpa", "iquique"];
const apiKey = "your-api-key";

function getClima(ciudad) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperatura = data.main.temp;
      const condicion = data.weather[0].main;
      const humedad = data.main.humidity;
      const velocidad_viento = data.wind.speed;

      document.getElementById("temperatura").innerHTML = temperatura;
      document.getElementById("condicion").innerHTML = condicion;
      document.getElementById("humedad").innerHTML = humedad;
      document.getElementById("velocidad_viento").innerHTML = velocidad_viento;
    });
}

document.querySelector("input[name='ciudad']").addEventListener("change", () => {
  const ciudad = document.querySelector("input[name='ciudad']:checked").value;
  getClima(ciudad);
});

getClima(ciudades[0]);

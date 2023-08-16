//Async and Await
async function fetchMovies() {
  try {
    const resp = await fetch("https://www.techgatha.com/movies.php");
    const movies = await resp.json();
    let data='';
    movies.forEach(details => {
        data+=`<div class="col-12 col-sm-3">
        <div class="card" style="width: 18rem;">
        <img src="${details.cover}" class="card-img-top" alt="${details.name}">
                        <div class="card-body">
                          <h5 class="card-title">${details.name}</h5>
                          <p class="card-text">${details.desc}</p>
                        </div>
        </div>
                </div>`;
    });

  document.getElementById("moviedetails").innerHTML = data;
  } catch(err) {
    console.log("Error: ", err);
  }
}
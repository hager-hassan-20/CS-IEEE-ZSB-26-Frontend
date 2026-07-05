let myPromise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();

  request.open("GET", "articles.json");
  request.send();

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("Failed To Load Data"));
      }
    }
});

myPromise.then((articles) => {
  articles.length = 5;

  let data = document.getElementById("data");

  articles.forEach((article) => {
    data.innerHTML += `
      <div>
        <h3>${article.title}</h3>
        <p>${article.description}</p>
      </div>
    `;
  });
}).catch((error) => {
  console.log(error);
});
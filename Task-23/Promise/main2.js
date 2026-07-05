fetch("articles.json")
  .then((res) => res.json())
  .then((articles) => {
    articles.length = 5;

    articles.forEach((article) => {
      document.getElementById("data").innerHTML += `
        <div>
          <h3>${article.title}</h3>
          <p>${article.description}</p>
        </div>
      `;
    });
  });
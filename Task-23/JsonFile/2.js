let Req = new XMLHttpRequest();

Req.open("GET", "1.json");
Req.send();

Req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

Req.onload = function () {
  console.log("Data Loaded");
};
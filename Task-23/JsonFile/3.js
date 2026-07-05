let Req = new XMLHttpRequest();

Req.open("GET", "1.json");
Req.send();

Req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    
let mainData = JSON.parse(this.responseText);

    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
    }

    console.log(mainData);

    let updatedData = JSON.stringify(mainData);

    console.log(updatedData);
  }
};


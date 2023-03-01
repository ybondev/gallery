fetch("./json/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let placeholder = document.querySelector(".test");
    let out = "";

    var filtered = data.filter(function (x) {
      return x.date !== undefined;
    });

    for (let datas of data) {
      out += `
      <img src='${datas.img}' width='227px' class='img-fluid'>
      `;
    }

    placeholder.innerHTML = out;
  });

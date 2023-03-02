fetch("./json/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let placeholder = document.querySelector(".page");
    let out = "";

    var filtered = data.filter(function (x) {
      return x.date !== undefined;
    });

    for (let datas = 0; datas < data.l) {
      out += `
      <div class="side-1" id="p1">
        <div class="content">
          <h1>The Pilgrim&apos;s Path</h1>
          <img src="${datas.img}" class="img-fluid" alt="" />
        </div>
      </div>
      `;
    }

    let elem = document.getElementsByClassName("id");

    for (let x = 0; x < data.length; x++) {
      elem[x].innerHTML = x;
    }

    // placeholder.innerHTML = out;
  });

// let elem = document.getElementsByClassName("id");

// for (let x = 0; x < elem.length; x++) {
//   elem[x].innerHTML = "test";
// }

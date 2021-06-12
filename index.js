const icons = Array.from(document.getElementsByClassName("icon"));
const symbol = document.getElementById("sym");

let start = 0;
fetch("https://api.coinlore.net/api/tickers/?start" + start + "&limit=20")
  .then((res) => res.json())

  .then((data) => {
    addInfo(data);
  });

function addInfo(data) {
  // console.log(data.data[0].nameid) ;
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      console.log(icon.id);
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].nameid === icon.id) {
          document.getElementById("title").innerText = data.data[i].name;
          console.log(data.data[i].symbol);
          document.getElementById("sym").innerText = data.data[i].symbol;

          document.getElementById("price").innerText = data.data[i].price_usd;

          document.getElementById("1hrblank").innerText =
            data.data[i].percent_change_1h;

          document.getElementById("24hblank").innerText =
            data.data[i].percent_change_24h;

          document.getElementById("csblank").innerText = data.data[i].csupply;
        }
      }
    });
  });
}

addInfo();

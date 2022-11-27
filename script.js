const boredBtn = document.getElementById("bored-button");

const colorArr = [
  "linear-gradient(-225deg, #e1eec3 0%, #f05053 100%)",
  "linear-gradient(-225deg, #d9a7c7 0%, #fffcdc 100%)",
  "linear-gradient(-225deg, #D76D77 0%, #FFAF7B 100%)",
  "linear-gradient(-225deg, #D66D75 0%, #E29587 100%)",
  "linear-gradient(-225deg, #6190E8 0%, #A7BFE8 100%)",
];

const getRandomColor = () => {
  return colorArr[Math.floor(Math.random() * colorArr.length)];
};

const getRandomImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById(
        "dog"
      ).innerHTML = `<img src="${data.message}" />`;
    });
};

boredBtn.addEventListener("click", function () {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      document.body.style.backgroundImage = getRandomColor();
    });
  getRandomImage();
});

boredBtn.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    document.getElementById("activity").textContent = data.activity;
  }
});

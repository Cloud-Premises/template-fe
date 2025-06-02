@import url("https://fonts.googleapis.com/css?family=Open+Sans:800|Roboto+Condensed:700i");

.starter {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 50px;
  margin-top: -25px;
  margin-left: -150px;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 2em;
  font-weight: 600;
  cursor: pointer;
}

.curtain {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
}

.left,
.right {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  filter: brightness(180%);
  background-image: url("/curtain.svg");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 4s ease-in-out;
}

.left {
  left: 0;
  transform-origin: top right;
}

.right {
  left: 50%;
  transform-origin: top left;
}

.open .left {
  filter: brightness(100%);
  transform: translate(-100%) rotate(20deg) scale(0, 2);
}

.open .right {
  filter: brightness(100%);
  transform: translate(100%) rotate(-20deg) scale(0, 2);
}

.scene {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 1200px;
  height: 600px;
  overflow: hidden;
  margin-top: -300px;
  margin-left: -600px;
  background-color: rgb(0, 0, 0);
  box-shadow: 0 0 0 2px orange inset;
  transition: all 2.5s ease-in-out;
}

.expand {
  width: 140%;
  left: -20%;
  background-color: rgb(32, 32, 32);
  box-shadow: 0 0 0 0 orange inset;
}

.ground {
  position: absolute;
  left: 50%;
  top: 133%;
  width: 10000px;
  height: 10000px;
  margin-left: -5000px;
  border-radius: 100%;
  box-shadow: 0 0 100px 100px orange;
  transition: top 6s ease-out;
}

.title {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 500px;
  height: 150px;
  margin-top: -90px;
  margin-left: -250px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 10em;
  color: orange;
  transform: scale(0.75);
  opacity: 0;
  transition: opacity 1s ease-in-out, transform 5s ease-out;
}

.visible {
  opacity: 1;
  transform: scale(1);
}

@keyframes ground-rising {
  from {
    top: 133%;
  }
  to {
    top: 105%;
  }
}

@keyframes text-glowing {
  0% {
    text-shadow: 0 0 10px orange;
  }
  100% {
    text-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 30px dodgerblue;
  }
}

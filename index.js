function insertImage() {
  document.querySelectorAll(".box").forEach((image) => {
    if (image.innerText.length !== 0) {
      if (image.innerText == "Wpawn" || image.innerText == "Bpawn") {
        image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      } else {
        image.innerHTML = `${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">`;
        image.style.cursor = "pointer";
      }
    }
  });
}
insertImage();

function coloring() {
  const color = document.querySelectorAll(".box");

  color.forEach((color) => {
    getId = color.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    aup = eval(arr.shift());
    a = aside + aup;

    if (a % 2 == 0) {
      color.style.backgroundColor = "#332722";
    }
    if (a % 2 !== 0) {
      color.style.backgroundColor = "#78624C";
    }
  });
}
coloring();

function reddish() {
  document.querySelectorAll(".box").forEach((i1) => {
    if (i1.style.backgroundColor == "maroon") {
      document.querySelectorAll(".box").forEach((i2) => {
        if (i2.style.backgroundColor == "tan" && i2.innerText.length !== 0) {
          tanText = i2.innerText;

          maroonText = i1.innerText;

          maroonColor = Array.from(maroonText).shift().toString();
          tanColor = Array.from(tanText).shift().toString();

          getId = i2.id;
          arr = Array.from(getId);
          arr.shift();
          aside = eval(arr.pop());
          aup = eval(arr.shift());
          a = aside + aup;

          if (a % 2 == 0 && maroonColor == tanColor) {
            i2.style.backgroundColor = "#332722";
          }
          if (a % 2 !== 0 && maroonColor == tanColor) {
            i2.style.backgroundColor = "#78624C";
          }
        }
      });
    }
  });
}

document.getElementById("reset-btn").addEventListener("click", function () {
  location.reload();
});

tog = 1;

document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("click", function () {
    if (item.style.backgroundColor == "tan" && item.innerText.length == 0) {
      tog = tog + 1;
    } else if (
      item.style.backgroundColor == "tan" &&
      item.innerText.length !== 0
    ) {
      document.querySelectorAll(".box").forEach((i) => {
        if (i.style.backgroundColor == "maroon") {
          maroonId = i.id;
          maroonText = i.innerText;

          document.getElementById(maroonId).innerText = "";
          item.innerText = maroonText;
          coloring();
          insertImage();
          tog = tog + 1;
        }
      });
    }

    getId = item.id;
    arr = Array.from(getId);
    arr.shift();
    aside = eval(arr.pop());
    arr.push("0");
    aup = eval(arr.join(""));
    a = aside + aup;

    function whosTurn(toggle) {
      if (item.innerText == `${toggle}pawn`) {
        item.style.backgroundColor = "maroon";

        if (tog % 2 !== 0 && aup < 800) {
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "tan";
            if (
              document.getElementById(`b${a + 200}`).innerText.length == 0 &&
              aup < 300
            ) {
              document.getElementById(`b${a + 200}`).style.backgroundColor =
                "tan";
            }
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "tan";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "tan";
          }
        }

        if (tog % 2 == 0 && aup > 100) {
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "tan";
            if (
              document.getElementById(`b${a - 200}`).innerText.length == 0 &&
              aup > 600
            ) {
              document.getElementById(`b${a - 200}`).style.backgroundColor =
                "tan";
            }
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "tan";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "tan";
          }
        }
        if (tog % 2 !== 0 && aup >= 800) {
          if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
            document.getElementById(`b${a + 100}`).style.backgroundColor =
              "tan";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
              "tan";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
              "tan";
          }
        }
        if (tog % 2 == 0 && aup <= 100) {
          if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
            document.getElementById(`b${a - 100}`).style.backgroundColor =
              "tan";
          }
          if (
            aside < 8 &&
            document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
              "tan";
          }
          if (
            aside > 1 &&
            document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0
          ) {
            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
              "tan";
          }
        }
      }

      if (item.innerText == `${toggle}king`) {
        if (aside < 8) {
          document.getElementById(`b${a + 1}`).style.backgroundColor = "tan";
        }
        if (aside > 1) {
          document.getElementById(`b${a - 1}`).style.backgroundColor = "tan";
        }
        if (aup < 800) {
          document.getElementById(`b${a + 100}`).style.backgroundColor = "tan";
        }
        if (aup > 100) {
          document.getElementById(`b${a - 100}`).style.backgroundColor = "tan";
        }

        if (aup > 100 && aside < 8) {
          document.getElementById(`b${a - 100 + 1}`).style.backgroundColor =
            "tan";
        }
        if (aup > 100 && aside > 1) {
          document.getElementById(`b${a - 100 - 1}`).style.backgroundColor =
            "tan";
        }
        if (aup < 800 && aside < 8) {
          document.getElementById(`b${a + 100 + 1}`).style.backgroundColor =
            "tan";
        }
        if (aup < 800 && aside > 1) {
          document.getElementById(`b${a + 100 - 1}`).style.backgroundColor =
            "tan";
        }

        item.style.backgroundColor = "maroon";
      }

      if (item.innerText == `${toggle}knight`) {
        if (aside < 7 && aup < 800) {
          document.getElementById(`b${a + 100 + 2}`).style.backgroundColor =
            "tan";
        }
        if (aside < 7 && aup > 200) {
          document.getElementById(`b${a - 100 + 2}`).style.backgroundColor =
            "tan";
        }
        if (aside < 8 && aup < 700) {
          document.getElementById(`b${a + 200 + 1}`).style.backgroundColor =
            "tan";
        }
        if (aside > 1 && aup < 700) {
          document.getElementById(`b${a + 200 - 1}`).style.backgroundColor =
            "tan";
        }
        if (aside > 2 && aup < 800) {
          document.getElementById(`b${a - 2 + 100}`).style.backgroundColor =
            "tan";
        }
        if (aside > 2 && aup > 100) {
          document.getElementById(`b${a - 2 - 100}`).style.backgroundColor =
            "tan";
        }
        if (aside < 8 && aup > 200) {
          document.getElementById(`b${a - 200 + 1}`).style.backgroundColor =
            "tan";
        }
        if (aside > 1 && aup > 200) {
          document.getElementById(`b${a - 200 - 1}`).style.backgroundColor =
            "tan";
        }

        item.style.backgroundColor = "maroon";
      }

      if (item.innerText == `${toggle}queen`) {
        for (let i = 1; i < 9; i++) {
          if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "tan";
          } else if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "tan";
          } else if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText == 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor = "tan";
          } else if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText == 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor = "tan";
          } else if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        item.style.backgroundColor = "maroon";
      }

      if (item.innerText == `${toggle}bishop`) {
        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < (900 - aup) / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a + i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 + i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < aup / 100 &&
            i < 9 - aside &&
            document.getElementById(`b${a - i * 100 + i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 + i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < (900 - aup) / 100 &&
            i < aside &&
            document.getElementById(`b${a + i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a + i * 100 - i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "tan";
          } else if (
            i < aup / 100 &&
            i < aside &&
            document.getElementById(`b${a - i * 100 - i}`).innerText.length !==
              0
          ) {
            document.getElementById(
              `b${a - i * 100 - i}`
            ).style.backgroundColor = "tan";
            break;
          }
        }

        item.style.backgroundColor = "maroon";
      }

      if (item.innerText == `${toggle}rook`) {
        for (let i = 1; i < 9; i++) {
          if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "tan";
          } else if (
            a + i * 100 < 900 &&
            document.getElementById(`b${a + i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i * 100}`).style.backgroundColor =
              "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText == 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "tan";
          } else if (
            a - i * 100 > 100 &&
            document.getElementById(`b${a - i * 100}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i * 100}`).style.backgroundColor =
              "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText == 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor = "tan";
          } else if (
            a + i < aup + 9 &&
            document.getElementById(`b${a + i}`).innerText !== 0
          ) {
            document.getElementById(`b${a + i}`).style.backgroundColor = "tan";
            break;
          }
        }

        for (let i = 1; i < 9; i++) {
          if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText == 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor = "tan";
          } else if (
            a - i > aup &&
            document.getElementById(`b${a - i}`).innerText !== 0
          ) {
            document.getElementById(`b${a - i}`).style.backgroundColor = "tan";
            break;
          }
        }

        item.style.backgroundColor = "maroon";
      }
    }

    if (tog % 2 !== 0) {
      document.getElementById("tog").innerText = "White's Turn";
      whosTurn("W");
    }
    if (tog % 2 == 0) {
      document.getElementById("tog").innerText = "Black's Turn";
      whosTurn("B");
    }

    reddish();
  });
});

document.querySelectorAll(".box").forEach((hathiTest) => {
  hathiTest.addEventListener("click", function () {
    if (hathiTest.style.backgroundColor == "maroon") {
      maroonId = hathiTest.id;
      maroonText = hathiTest.innerText;

      document.querySelectorAll(".box").forEach((hathiTest2) => {
        hathiTest2.addEventListener("click", function () {
          if (
            hathiTest2.style.backgroundColor == "tan" &&
            hathiTest2.innerText.length == 0
          ) {
            document.getElementById(maroonId).innerText = "";
            hathiTest2.innerText = maroonText;
            coloring();
            insertImage();
          }
        });
      });
    }
  });
});

z = 0;
document.querySelectorAll(".box").forEach((ee) => {
  ee.addEventListener("click", function () {
    z = z + 1;
    if (z % 2 == 0 && ee.style.backgroundColor !== "tan") {
      coloring();
    }
  });
});

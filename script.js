let count = 0;

function noClick() {
  count++;

  // YES button bigger
  document.getElementById("yes").style.transform =
    `scale(${1 + count * 0.2})`;

  // NO hide slowly
  if (count >= 3) {
    document.getElementById("no").style.display = "none";
  }

  // Teddy getting sadder
  if (count == 1) teddy.src = "sad2.gif";
  if (count == 2) teddy.src = "sad3.gif";
}

function yesClick() {
  document.getElementById("teddy").src = "happy.gif";
  document.getElementById("text").innerText =
    "Yayyy! I love you so much 💋❤️";
  document.getElementById("no").style.display = "none";
}

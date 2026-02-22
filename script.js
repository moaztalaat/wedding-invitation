const weddingDate = new Date("2026-04-08T20:00:00");

function updateCountdown(){
  const now = new Date();
  const diff = weddingDate - now;

  if(diff <= 0){
    document.getElementById("countdown").innerText = "TODAY IS THE DAY";
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${days} DAYS : ${hours} HOURS : ${minutes} MINUTES : ${seconds} SECONDS`;
}

updateCountdown();
setInterval(updateCountdown,1000);

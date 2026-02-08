let isArabic = false;

function toggleLang() {
  const title = document.getElementById("title");
  const text = document.getElementById("text");
  const btn = document.getElementById("langBtn");

  if (!isArabic) {
    title.innerText = "دعوة زفاف";
    text.innerText = "يسعدنا دعوتكم لحضور حفل زفافنا";
    btn.innerText = "English";
    document.body.dir = "rtl";
  } else {
    title.innerText = "Wedding Invitation";
    text.innerText = "We are delighted to invite you to celebrate our wedding";
    btn.innerText = "عربي";
    document.body.dir = "ltr";
  }

  isArabic = !isArabic;
}const weddingDate = new Date("April 8, 2026 20:00:00").getTime();

const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "🎉 Today is the Wedding Day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML =
    `⏳ ${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
}, 1000);

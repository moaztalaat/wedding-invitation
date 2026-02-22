// Safe script: only updates text nodes, never overwrites the whole card

const weddingDate = new Date("2026-04-08T20:00:00"); // 8:00 PM

function updateCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    el.textContent = "TODAY IS THE DAY";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  el.textContent = `${days} DAYS : ${hours} HOURS : ${minutes} MINUTES : ${seconds} SECONDS`;
}

let isArabic = false;

function setEnglish() {
  document.getElementById("langBtn").textContent = "عربي";
  document.getElementById("titleSmall").textContent = "WEDDING";
  document.getElementById("titleBig").textContent = "INVITATION";
  document.getElementById("names").innerHTML = `MOAZ TALAAT <br><span class="amp">&amp;</span><br> VJOLLCA ZENKO`;
  <p class="invite-text" id="text">
  WE ARE DELIGHTED TO INVITE YOU TO CELEBRATE OUR WEDDING
</p>  document.getElementById("dateLine").textContent = "ON WEDNESDAY, 8TH OF APRIL 2026";
  document.getElementById("timeLine").textContent = "AT 8 PM";
  document.getElementById("locationLink").textContent = "AT OCIEL HALL – AIN EL HAYAT RESORT, CAIRO";
  document.getElementById("viewLocation").textContent = "VIEW LOCATION";
  document.getElementById("footer").textContent = "YOUR PRESENCE WILL HONOR US";
}

function setArabic() {
  document.getElementById("langBtn").textContent = "English";
  document.getElementById("titleSmall").textContent = "دعوة";
  document.getElementById("titleBig").textContent = "زفاف";
  document.getElementById("names").innerHTML = `معاذ طلعت <br><span class="amp">&amp;</span><br> فيولكا زينكو`;
  document.getElementById("text").textContent = "يشرفنا دعوتكم لمشاركتنا فرحتنا يوم";
  document.getElementById("dateLine").textContent = "الأربعاء ٨ أبريل ٢٠٢٦";
  document.getElementById("timeLine").textContent = "الساعة ٨ مساءً";
  document.getElementById("locationLink").textContent = "قاعة أوسيل – منتجع عين الحياة، القاهرة";
  document.getElementById("viewLocation").textContent = "فتح اللوكيشن";
  document.getElementById("footer").textContent = "حضوركم يشرفنا";
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      isArabic = !isArabic;
      if (isArabic) setArabic(); else setEnglish();
    });
  }

  // start in English
  setEnglish();
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

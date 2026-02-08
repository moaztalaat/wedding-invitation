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
}

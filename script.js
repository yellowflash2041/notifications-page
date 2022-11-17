const divs = document.querySelectorAll(".unread");
const notifNumber = document.querySelector(".notif-number");
const mark = document.querySelector(".mark");

function updateNotifNumber() {
  let divs = document.querySelectorAll(".unread");
  notifNumber.innerHTML = divs.length;
}

mark.addEventListener("click", () => {
  divs.forEach((el) => {
    el.classList.remove("unread");
  });
  updateNotifNumber();
});

document.addEventListener("DOMContentLoaded", updateNotifNumber);

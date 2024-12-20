//sliding navbar - not working
/*const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

const dropdowns = document.querySelectorAll('.menu > li');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const currentDropdown = dropdown.querySelector('.dropdown');
        currentDropdown.classList.toggle('show-dropdown');
    });
});
*/
// just use classlist add remove no man, why fancy it up
// to debug it , console.log everything
// like you defined dropdowns, console.log and see if they are what you expected.


//tabs creation - works
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    // hide others
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});
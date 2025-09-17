document.addEventListener("DOMContentLoaded", () => {
  const sectionClientes = document.querySelector(".section-clientes");
  const itemsH3 = document.querySelectorAll(".hr-item h3");
  const itemsP = document.querySelectorAll(".hr-item p");
  const raulreview = document.querySelectorAll(".raul-review p");
  const formh3 = document.querySelector(".formulario h3");
  const nav = document.querySelector(".nav");
  const coachingSection = document.querySelector("#sobrenosotros");

  if (sectionClientes) {
    const observerClientes = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          raulreview.forEach(el => el.style.color = "");
          itemsH3.forEach(el => el.style.color = "goldenrod");
          itemsP.forEach(el => el.style.color = "white");
          document.body.style.backgroundColor = "black";
          if (formh3) formh3.style.color = "white";
        } else {
          raulreview.forEach(el => el.style.color = "black");
          itemsH3.forEach(el => el.style.color = "black");
          itemsP.forEach(el => el.style.color = "black");
          document.body.style.backgroundColor = "white";
          if (formh3) formh3.style.color = "black";
        }
      });
    }, { threshold: 0.5 });

    observerClientes.observe(sectionClientes);
  }

  if (coachingSection) {
    const observerCoaching = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nav.style.backgroundColor = "black";
        } else {
          nav.style.backgroundColor = "";
        }
      });
    }, { threshold: 0.3 });

    observerCoaching.observe(coachingSection);
  }
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  sidebar.classList.remove("hide");
  sidebar.classList.add("show");
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("show");
  sidebar.classList.add("hide");
  sidebar.addEventListener("animationend", function handler() {
    if (sidebar.classList.contains("hide")) {
      sidebar.style.display = "none";
    }
    sidebar.removeEventListener("animationend", handler);
  });
}

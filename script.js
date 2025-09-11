document.addEventListener("DOMContentLoaded", () => {
  const sectionClientes = document.querySelector(".section-clientes");
  const itemsH3 = document.querySelectorAll(".hr-item h3");
  const itemsP= document.querySelectorAll(".hr-item p");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        itemsH3.forEach(el => el.style.color = "white")
        itemsP.forEach(el => el.style.color = "white")
        document.body.style.backgroundColor = "black";
      } else {
        
        itemsH3.forEach(el => el.style.color = "black")
        itemsP.forEach(el => el.style.color = "black")
        document.body.style.backgroundColor = "white";
      }
    });
  }, { threshold: 0.5 });

  observer.observe(sectionClientes);
});

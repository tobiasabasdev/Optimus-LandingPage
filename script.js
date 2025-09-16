document.addEventListener("DOMContentLoaded", () => {
  const sectionClientes = document.querySelector(".section-clientes");
  const itemsH3 = document.querySelectorAll(".hr-item h3");
  const itemsP= document.querySelectorAll(".hr-item p");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        itemsH3.forEach(el => el.style.color = "goldenrod")
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


function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
    sidebar.classList.remove('hide');
    sidebar.classList.add('show');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');
    sidebar.classList.add('hide');
    sidebar.addEventListener('animationend', function handler() {
        if (sidebar.classList.contains('hide')) {
            sidebar.style.display = "none";
        }
        sidebar.removeEventListener('animationend', handler);
    });
}


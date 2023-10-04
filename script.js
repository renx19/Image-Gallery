document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("#filter-buttons button");

  // Function to filter cards based on filter buttons
  const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    const selectedFilter = e.target.getAttribute("data-filter");

    document.querySelectorAll(".filterable-cards, .filterable-cards1").forEach(container => {
      let hasVisibleCard = false; // Track if the container has any visible cards

      container.querySelectorAll(".card, .card1").forEach(card => {
        const cardName = card.getAttribute("data-name");
        if (selectedFilter === "all" || cardName === selectedFilter) {
          card.style.display = "block";
          hasVisibleCard = true; // Set to true if at least one card is visible
        } else {
          card.style.display = "none";
        }
      });

      // Show or hide the container based on whether it has visible cards
      if (hasVisibleCard) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  };

  // Add click event listeners to filter buttons
  filterButtons.forEach(button => button.addEventListener("click", filterCards));

  // Initially, show all cards
  filterCards({ target: document.querySelector("[data-filter='all']") });
});


function search() {
  let filter = document.getElementById('find').value.trim().toUpperCase();
  let smContainers = document.querySelectorAll('.filterable-cards, .filterable-cards1');

  smContainers.forEach(container => {
    let hasVisibleCard = false; // Track if the container has any visible cards

    container.querySelectorAll('.card').forEach(card => {
      let cardTitle = card.querySelector('.card-title').textContent.toUpperCase();
      let cardText = card.querySelector('.card-text').textContent.toUpperCase();

      if (cardTitle.includes(filter) || cardText.includes(filter)) {
        card.style.display = "block";
        hasVisibleCard = true; // Set to true if at least one card is visible
      } else {
        card.style.display = "none";
      }
    });

    // Show or hide the container based on whether it has visible cards
    if (hasVisibleCard) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}




let sword= document.getElementById("Images");

let swordUser = () => {
  const generatedHTML = smImages.map((x) => {
    let { imageId, image, name, anime, title } = x;
    return `
      <div class="filterable-cards" id="filterable-cards">
        <div class="card" data-name="${x.title}">
          <img src="${x.image}" alt="img">
          <div class="card-body">
            <h6 class="card-title">${x.name}</h6>
            <p class="card-text">${x.anime}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  document.querySelector("#Images").innerHTML = generatedHTML; // Change ".Images" to "#Images" to match the element ID.
}

swordUser(); // Correct the function name when calling it.



let sword1= document.getElementById("Images1");

let swordUser1 = () => {
  const generatedHTML = smlImages.map((x) => {
    let { imageId, image, name, anime, title } = x;
    return `
      <div class="filterable-cards1" id="filterable-cards1">
        <div class="card1" data-name="${x.title}">
          <img src="${x.image}" alt="img">
          <div class="card-body1">
            <h6 class="card-title">${x.name}</h6>
            <p class="card-text">${x.anime}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  document.querySelector("#Images1").innerHTML = generatedHTML; // Change ".Images" to "#Images" to match the element ID.
}

swordUser1();  // Correct the function name when calling it.




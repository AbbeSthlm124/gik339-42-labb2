console.log("HejHej");

const localUrl = "http://localhost:3000/users";
const responsePromise = fetch(localUrl);

responsePromise
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add(
      "container",
      "row",
      "row-cols-1",
      "row-cols-md-2",
      "row-cols-lg-3",
      "g-4"
    );

    users.forEach((user) => {
      const userColumn = document.createElement("div");
      userColumn.classList.add("col", "d-flex", "justify-content-center");

      const userCard = document.createElement("div");
      userCard.classList.add("card");
      userCard.style.width = "16rem";
      userCard.style.border = `3px solid ${user.color}`;
      userCard.innerHTML = `
      <img src="https://picsum.photos/200/100" class="card-img-top" alt="...">
      <div class="card-body" style="background-color:#c3c6c9">
        <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
        <p class="card-text">Username: ${user.username}</p>
        <div class="btn-group">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Social media
        </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Facebook</a></li>
        <li><a class="dropdown-item" href="#">X (Twitter)</a></li>
        </ul>
      </div>
      </div>
    `;

      userColumn.appendChild(userCard);
      cardContainer.appendChild(userColumn);
    });

    const wrapper = document.createElement("div");
    wrapper.classList.add("d-flex", "justify-content-center");
    wrapper.appendChild(cardContainer);
    document.body.appendChild(wrapper);
    document.body.style.backgroundColor = "#297478";
  });

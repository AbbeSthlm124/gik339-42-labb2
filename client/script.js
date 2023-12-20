console.log("HejHej");

const localUrl = "http://localhost:3000/users";
const responsePromise = fetch(localUrl);

responsePromise
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("row");

    users.forEach((user) => {
      const column = document.createElement("div");
      column.classList.add("col-6", "mb-4");
      const userCard = document.createElement("div");
      userCard.classList.add("card");
      userCard.innerHTML = `
      
      <div class="card-body">
        <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
        <p class="card-text">Username: ${user.username}</p>
        <p class="card-text">ID: ${user.id}</p>
      </div>
    `;
      userCard.style.backgroundColor = user.color;
      column.appendChild(userCard);
      cardContainer.appendChild(userCard);
    });

    document.body.appendChild(cardContainer);
  });

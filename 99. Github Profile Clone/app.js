const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const reposContainer = document.querySelector(".repos");
const aboutUserContainer = document.querySelector(".about-user");

const API = "https://api.github.com/users/";

async function fetchData(username) {
  try {
    const response = await fetch(`${API}${username}`);
    if (!response.ok) throw new Error("User not found");

    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      location,
      login,
      twitter_username,
    } = await response.json();

    const html = `
      <div
        class="user-avatar"
        style="background-image: url(${avatar_url})"
      ></div>
      <p class="user-name">${login}</p>
      <button class="follow">Follow</button>
      <p class="user-bio">${bio || "No bio available"}</p>
      <div class="followers-info">
        <a href="#">
          <i class="fa-solid fa-person"></i>
          <span class="followers">${followers}</span> followers
        </a>
        <a href='#'>
          <span class="following">${following}</span> following
        </a>
      </div>
      <div class="icon-container">
        <i class="fa-regular fa-building"></i>
        <a href="#" class="company">${company || "No company"}</a>
      </div>
      <div class="icon-container">
        <i class="fa-sharp fa-solid fa-location-dot"></i>
        <a href="#" class="location">${location || "No location"}</a>
      </div>
      <div class="icon-container">
        <i class="fa-regular fa-solid fa-link"></i>
        <a href="#" class="blog">${blog || "No blog"}</a>
      </div>
      <div class="icon-container">
        <i class="fa-brands fa-twitter"></i>
        <a href="#" class="twitter_username">${
          twitter_username ? `@${twitter_username}` : "No Twitter"
        }</a>
      </div>
    `;

    aboutUserContainer.innerHTML = html;
  } catch (error) {
    aboutUserContainer.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

async function fetchRepos(username) {
  try {
    const response = await fetch(`${API}${username}/repos`);
    if (!response.ok) throw new Error("Repositories not found");

    const data = await response.json();
    reposContainer.innerHTML = "";

    data.forEach(
      ({
        name,
        description,
        forks_count,
        language,
        stargazers_count,
        html_url,
      }) => {
        const repoCard = document.createElement("div");
        repoCard.classList.add("repo-card");
        repoCard.innerHTML = `
          <a href=${html_url} class="repo-title">${name}</a>
          <p class="repo-subtitle">${description || "No description"}</p>
          <div class="popularity">
            <p class="technology-used">${language || "Unknown"}</p>
            <p class="stars"><i class="fa-regular fa-star"></i>${stargazers_count}</p>
            <p class="fork"><i class="fa-solid fa-code-fork"></i>${forks_count}</p>
          </div>
          <p class="pill">Public</p>
        `;
        reposContainer.appendChild(repoCard);
      }
    );
  } catch (error) {
    reposContainer.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = input.value.trim();

  if (username) {
    await fetchData(username);
    await fetchRepos(username);
    input.value = "";
  }
});
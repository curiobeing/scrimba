const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "avatar-vangogh.jpg",
    post: "post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    isLiked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "avatar-courbet.jpg",
    post: "post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    isLiked: false,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "avatar-ducreux.jpg",
    post: "post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    isLiked: false,
  },
];

// We add posts as li to this ul
const ulEl = document.getElementById("ul-el");

// The main render function that renders posts in li format
function render() {
  // we do this so that the page is rendered again with increased like count on click of like button and not add posts to the existing list
  ulEl.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    let currentPost = posts[i];

    let liEl = document.createElement("li");
    liEl.innerHTML = `
    <div class="poster-details">

        <img src="/oldogram/assets/${currentPost.avatar}" alt="posted user image" class="user-avatar">

        <div class="name-location">
            <p class="poster-name">${currentPost.name}</p>
            <p class="location">${currentPost.location}</p>
        </div>

    </div>
    `;

    // We create the posted image like this to add double click event listener on it to like/dislike
    const postedImg = document.createElement("img");
    postedImg.setAttribute("class", "posted-img");
    postedImg.setAttribute("src", `/oldogram/assets/${currentPost.post}`);
    // we call the update likes function on dbl click of posted img to update likes count and like button icon
    postedImg.addEventListener("dblclick", () => updateLikes(currentPost));

    liEl.appendChild(postedImg);

    // we create a div that holds all 3 icon buttons
    const iconsDiv = document.createElement("div");
    // We add last 2 icon buttons directly to the div
    iconsDiv.innerHTML = `
      <img src="/oldogram/assets/icon-comment.png" alt="comment-button" class="icon-btn" id="comment-btn">
      <img src="/oldogram/assets/icon-dm.png" alt="dm-button" class="icon-btn" id="dm-btn">
    `;

    // we use this to set the heart icon dynamically on the like button
    let heartIcon = currentPost.isLiked ? "heart-filled.png" : "heart.png";

    // we create the like/heart icon button separately as we need to attach click event listener
    const likeBtn = document.createElement("img");
    likeBtn.setAttribute("src", `/oldogram/assets/${heartIcon}`);
    likeBtn.setAttribute("class", "icon-btn");
    likeBtn.setAttribute("id", "heart-btn");

    // we call the update likes function on dbl click of posted img to update likes count and like button icon
    likeBtn.addEventListener("click", () => updateLikes(currentPost));

    // we insert like button at the start of icon buttons div
    iconsDiv.prepend(likeBtn);

    // we insert icons button div at the end of li element
    liEl.append(iconsDiv);

    // we insert the last p elements at the end of li element after icon buttons div
    /*
    liEl.innerHTML += `
    <p class="likes">${currentPost.likes} likes</p>
    <p class="comments"> <span class="commented-user">${currentPost.username}</span> ${currentPost.comment}</p>
    `;
     instead of the above, we use insertAdjacentElement, as innerHTML destroys eventlisteners on the img and like btn attached earlier
     */

    const pDiv = document.createElement("div");
    pDiv.innerHTML = `
    <p class="likes">${currentPost.likes} likes</p>
    <p class="comments"> <span class="commented-user">${currentPost.username}</span> ${currentPost.comment}</p>
    `;
    liEl.insertAdjacentElement("beforeend", pDiv);

    ulEl.appendChild(liEl);
  }
}

// We use this function to update likes and likea button icon
// We refactored to a separate function as we use it twice
function updateLikes(currentPost) {
  let likeStatus = currentPost.isLiked;
  likeStatus ? currentPost.likes-- : currentPost.likes++;
  currentPost.isLiked = !likeStatus;
  // we render the page again to show updated likes button
  render();
}

render();

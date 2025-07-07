console.log("Script loaded!");

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const imageUrl = document.getElementById("image-url").value;
    const topText = document.getElementById("top-text").value;
    const bottomText = document.getElementById("bottom-text").value;

    const memeWrapper = document.createElement("div");
    memeWrapper.className = "meme-wrapper";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "&#x274C;";
    deleteButton.onclick = () => {
        memeWrapper.remove();
    }

    const topTextDiv = document.createElement("div");
    topTextDiv.className = "top-text";
    topTextDiv.textContent = topText;

    const memeImage = document.createElement("img");
    memeImage.src = imageUrl;

    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.className = "bottom-text";
    bottomTextDiv.textContent = bottomText;

    memeWrapper.appendChild(deleteButton);
    memeWrapper.appendChild(topTextDiv);
    memeWrapper.appendChild(memeImage);
    memeWrapper.appendChild(bottomTextDiv);

    const memeSection = document.getElementById("meme-section");
    memeSection.appendChild(memeWrapper);

    event.target.reset();

});
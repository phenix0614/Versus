const retrieveImg = (way, name) => {
    const block = document.querySelector(name);

    const img = document.createElement("img");
    img.src = way;
    block.appendChild(img);

}
export default retrieveImg;

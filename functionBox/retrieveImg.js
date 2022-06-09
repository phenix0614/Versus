const retrieveImg = (way, name) => {
    const block = document.querySelector(name);

    const img = document.createElement("img");
    img.src = way;
    block.appendChild(img);
    

}

export default retrieveImg;
// if( elem.getElementsByTagName('img').length > 0) {
//     //there is an image
// }

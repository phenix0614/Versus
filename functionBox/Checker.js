const checker = (Idnbr) => {

    const map = document.querySelectorAll('td');

    const check = map[Idnbr];
    if (check.classList.length === 0) {
        return true
    } else {
        return false
    }

}
 export default checker;
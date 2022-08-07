
const creatTable = (tableLenght) => {

    const tBody = document.getElementById("tableBody");

    for (let i = 0; i < tableLenght; i++) {

        const tr = document.createElement('tr');

        for (let j = 0; j < tableLenght; j++) {
            const td = document.createElement('td');
            td.id = `${i}${j}`;
            tr.append(td);
        }
        tBody.append(tr);
    };
    return tBody;
};

export default creatTable
function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

const getResult = async () => {
    for (let person in ["Tina", "Jorge", "Julien"])
 {await luckyDraw(person).then(res => console.log(res), err => console.log(err))}
}

getResult()
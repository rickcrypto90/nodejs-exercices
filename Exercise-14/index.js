// Challenge 1:
//
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log("Frase:", surprisingFact)
console.log(`Frase \n ${surprisingFact}`)
// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
    {
        name: "Person 1",
        children: [
            {
                name: "Person 2",
                children: [
                    {
                        name: "Person 3",
                        children: [
                            {
                                name: "Person 4",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
const flatten = data => {
    return data.reduce((r, { children, ...rest }) => {
        r.push(rest);
        if (children) r.push(...flatten(children));
        return r;
    }, [])
}
console.table(flatten(familyTree));
console.dir(familyTree, { depth: null })
// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

function importantTask() {
   console.count()
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset()
importantTask();
importantTask();

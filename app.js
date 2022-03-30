
let total = 0;

devs.map(data => {

if (data.skill == 'MERN') {
    console.log(`
    Name :${data.name} - stack : ${data.skill} - income  : ${data.income}

    `);

    total = total + data.income
}

    
});

console.log(`
Total Income = ${total}
`);




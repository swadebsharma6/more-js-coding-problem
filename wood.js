/*
1.chair = 3cft
2. table = 10 cft
3. bed = 50 cft

vary: quantity
*/ 

function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
    
}

const totalWood = woodCalculation(5, 6, 4);
console.log('total wood requared:', totalWood)


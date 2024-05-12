function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    let perChairWood = 3;
    let perTableWood = 7;
    let perBedWood = 25;
    const chairWood = perChairWood * chairQuantity;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;
    const totalWood = chairWood + tableWood + bedWood;
return totalWood;
}
const woodReq = woodCalculation(1, 0, 0);
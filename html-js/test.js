// 去除原始饮品后的选项
const parseDrinkName = (drinkName) => {
    let endIndex;
    let pureDrinkName;
    endIndex = drinkName.indexOf('(');
    pureDrinkName = drinkName.substring(0,endIndex);
    return pureDrinkName;
}

dN = '原味奶茶(冷.不加糖)'
console.log(parseDrinkName(dN));
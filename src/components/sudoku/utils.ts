//Retourne le tableau de doublons
export function getDuplicatesNumber(valueArray:number[]):number[]{
  let duplicates:number[]=[];
  for (let i = 0; i < valueArray.length; i++) {
    if(valueArray[i] >= 1 && valueArray[i] <= 9){
      if (valueArray.indexOf(valueArray[i]) !== i) {
        duplicates.push(i);
        duplicates.push(valueArray.indexOf(valueArray[i]));
      }
    }
  }
  return duplicates;
}
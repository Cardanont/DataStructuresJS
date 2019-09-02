function mergeSortedArrays(arr1, arr2){
    
    const merged = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check empty arrays 
    if(arr1 === 0){
        return arr2;
    }
    if(arr2 === 0){
        return arr1;
    }

    while(arr1Item || arr2Item){

        if(!arr2Item || arr1Item < arr2Item){
            merged.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            merged.push(arr2Item);
            arr2Item = arr2[j];
            j++
        }
    }
    return merged;
}
mergeSortedArrays([0,3,4,31],[4,6,30]);

function mergeTheFish(arr1, arr2) {
	let arr1Item = arr1[0];
	let arr2Item = arr2[0];
    const result = [];
	let i = 1;
    let j = 1;    
    
    // Check empty arrays 
    if(arr1 === 0){
        return arr2;
    }
    if(arr2 === 0){
        return arr1;
    }

    while(arr1Item & arr2Item) {
        if(!arr2Item || arr1Item < arr2Item) {
        result.push(arr1Item);
        arr1Item = arr1[i];
        i++;
        }else{
            result.push(arr2Item);
            arr2Item = arr2[j];
            j++;    
        }
    }
    return result;
}

mergeTheFish(['Cod','Herring','Marling'],['Asp','Carp','Ide','Trout']);
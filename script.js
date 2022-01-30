let id=[11,12,13,15,11,12,13,15];
let result=[];
for(i=0;i<id.length;i++){
    let id2=id[i];
    if(result.indexOf(id2)==-1){
        result.push(id2)
    }
    console.log(result)
}


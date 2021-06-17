function somando(){
    res.value = parseFloat(vl1.value) + parseFloat(vl2.value)

}

function subtraindo(){
    res.value = parseFloat(vl1.value) - parseFloat(vl2.value)

}

function multiplicando(){
    res.value = parseFloat(vl1.value) * parseFloat(vl2.value)

}

function dividindo(){
    if(parseFloat(vl2.value)==0)
    res.value = "Erro"  
    
    else{
        res.value = parseFloat(vl1.value) / parseFloat(vl2.value)
    }

}
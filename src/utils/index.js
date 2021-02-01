const assending = (item, target) => {
    return item && item.sort(function (a, b) {
        return a[target] - b[target];
    })
}
const descending = (item, target) => {
    return item && item.sort(function (a, b) {
        return b[target] - a[target];
    })
}
const guid = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function utils({name, item, target}) {
    if(name === "assending") {
        return assending(item, target);
    }
    if(name === "descending") {
       return  descending(item, target);
    }
    if(name === "guid") {
        return guid();
    }
}


export default utils;
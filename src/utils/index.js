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
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
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
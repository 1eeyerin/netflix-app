const common = {
    Sort: {
        assending: (item, target) => {
            return item && item.sort(function (a, b) {
                return a[target] - b[target];
            })
        },
        descending: (item, target) => {
            return item && item.sort(function (a, b) {
                return b[target] - a[target];
            })
        }
    }
}

export default common;
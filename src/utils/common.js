export const assendingSort = (item, target) => {
    return item && item.sort(function (a, b) {
        return a[target] - b[target];
    })
}
export const descendingSort = (item, target) => {
    return item && item.sort(function (a, b) {
        return b[target] - a[target];
    })
}
export const guid = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
export const setAccessToken = (token) => {
    window.localStorage.setItem('access_token', token);
}
export const getAccessToken = () => {
    return window.localStorage.getItem('access_token');
}
export const removeAccessToken = () => {
    return window.localStorage.removeItem('access_token');
}
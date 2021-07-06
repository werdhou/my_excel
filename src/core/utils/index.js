export const capitalize = (string ='') => {
    if (typeof string !== 'string') {
        return ''
    }
    return string[0].toUpperCase() + string.slice(1)
}


export const getMethodName =(eventName) => {
    return 'on' + capitalize(eventName)
}

const getPromise = (promise) => {
    return promise
    .then((data) => [null, data])
    .catch((err) => {
        console.log(err)
        return [err]
    })
}

// ARREGLO -> [ 0 => ERROR, 1=> DATA ]

module.exports = getPromise
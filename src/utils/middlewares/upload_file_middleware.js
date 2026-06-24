const multer = require('multer')

const fileFilter = (req, file, cb) => {
    const extName = file.mimetype.includes('image')
    return (extName) ? cb(null, true) : cb('Error: Solo imagenes')
}

const myStorage = (destination) => multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `public/${destination}/`)
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.').pop()
        const baseName = file.originalname.split('.')[0].replaceAll(' ', '_')
        const nombre = `${baseName}_${Date.now()}`
        cb(null, `${nombre}.${extension}`)
    }
})

const uploadFileMiddleware = ({
    destination,
    nameField,
}) => multer({
    fileFilter: fileFilter,
    storage: myStorage(destination),
}).single(nameField)

module.exports = {
    uploadFileMiddleware
}

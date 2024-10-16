import express from "express";
import getHomePage from '../controllers/HomeController.js';
import products from '../controllers/productsController.js'
import upload from "../../middleware/upload.js";
// import aboutPage from "../controllers/AboutController.js";
// import getContact from "../controllers/ContactController.js";
// import userController from '../controllers/userController.js';
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)

    router.get('/listTProduct', products.getAllProductType)
    router.get('/detailTProduct/:id', products.detailProductType)
    router.post('/addProductType', products.insertTProducts)
    router.get('/editProductType/:id', products.editProductType)
    router.post('/updateProductType/:id', products.updateTProduct)
    router.delete('/deleteType/:id', products.deleteTProduct)

    router.get('/listNSX', products.getAllNSX)
    router.get('/detailNSX/:id', products.detailNSX)
    router.post('/addNSX', products.insertNSX)
    router.get('/editNSX/:id', products.editNSX)
    router.post('/updateNSX/:id', products.updateNSX)
    router.delete('/deleteNSX/:id', products.deleteNSX)

    router.get('/listProduct', products.getAllProduct)
    router.get('/detailProduct/:id', products.detailProduct)
    router.post('/addProduct', upload, products.insertProducts)
    router.get('/editProduct/:id', products.editProduct)
    router.post('/updateProduct/:id', upload, products.updateProduct)
    router.delete('/deleteProduct/:id', products.deleteProduct)

    return app.use('/', router)
}
export default initWebRoute
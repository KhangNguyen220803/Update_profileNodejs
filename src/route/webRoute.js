import express from "express";
import getHomePage from '../controllers/HomeController.js';
import products from '../controllers/productsController.js';
import user from '../controllers/userControllder.js'
import mdw from "../../middleware/upload.js";
// import aboutPage from "../controllers/AboutController.js";
// import getContact from "../controllers/ContactController.js";
// import userController from '../controllers/userController.js';
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', mdw.isAuth, getHomePage)
    
    router.get('/listTProduct', mdw.isAuth, products.getAllProductType)
    router.get('/detailTProduct/:id', products.detailProductType)
    router.post('/addProductType', products.insertTProducts)
    router.get('/editProductType/:id', products.editProductType)
    router.post('/updateProductType/:id', products.updateTProduct)
    router.delete('/deleteType/:id', products.deleteTProduct)

    router.get('/listNSX', mdw.isAuth, products.getAllNSX)
    router.get('/detailNSX/:id', products.detailNSX)
    router.post('/addNSX', products.insertNSX)
    router.get('/editNSX/:id', products.editNSX)
    router.post('/updateNSX/:id', products.updateNSX)
    router.delete('/deleteNSX/:id', products.deleteNSX)

    router.get('/listProduct', mdw.isAuth, products.getAllProduct)
    router.get('/detailProduct/:id', products.detailProduct)
    router.post('/addProduct', mdw.upload, products.insertProducts)
    router.get('/editProduct/:id', products.editProduct)
    router.post('/updateProduct/:id', mdw.upload, products.updateProduct)
    router.delete('/deleteProduct/:id', products.deleteProduct)

    router.get('/login', user.loginAdmin)
    router.post('/login', user.getAdmin)

    return app.use('/', router)
}
export default initWebRoute
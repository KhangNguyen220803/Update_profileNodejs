import express from "express";
import getHomePage from '../controllers/HomeController.js';
import products from '../controllers/productsController.js';
import user from '../controllers/userControllder.js'
import mdw from "../../middleware/upload.js";
import auth from "../../middleware/jwt.js";

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
    router.get('/logout', user.logout);

    router.get('/listCart', mdw.isAuth, products.getAllCart)
    router.get('/detailCart/:id', mdw.isAuth, products.getAllDetailCart)
    router.post('/listCart', mdw.isAuth, products.updateCart)

    // API
    router.get('/product', products.getAPIAllProduct)
    router.get('/APIlogout', auth.authMiddleware, user.logoutAPI)
    router.post('/register', user.insertAdmin)
    router.post('/profile', user.insertProfile)
    router.get('/profile/:username', user.getProfile)
    router.put('/profile/:username', user.updateProfile)
    router.post('/APIlogin', user.loginUser)
    router.post('/cart', products.insertCart)
    router.post('/detailCart', products.insertDetailCart)
    router.get('/orders/:username', products.getAllAPICart)
    router.get('/orderCart/:madh', products.getCartAPI)


    return app.use('/', router)
}
export default initWebRoute
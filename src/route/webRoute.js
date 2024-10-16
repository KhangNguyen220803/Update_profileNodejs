import express from "express";
import getHomePage from '../controllers/HomeController.js';
import products from '../controllers/productsController.js'
// import aboutPage from "../controllers/AboutController.js";
// import getContact from "../controllers/ContactController.js";
// import userController from '../controllers/userController.js';
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/', products.getAllProductType)

    // router.get('/about', aboutPage)

    // router.get('/contact', getContact)

    // router.get('/list-user', userController.getAllUser)

    // router.get('/list-user/:username', userController.detailUser)

    // router.get('/edit-user/:username', userController.editUser)

    // // router.post('/edit-user/:username', userController.updateUser)

    // router.post('/update-user/:username', userController.updateUser)

    // router.post('/delete-user', userController.deleteUser)

    // router.get('/login', userController.formLoginUser)

    // router.get('/logout', userController.logOut)

    // router.post('/verify-login', userController.loginUser)

    // router.get('/create-new-user', userController.createUser)

    // router.post('/insert-new-user', userController.insertUser)

    // router.get('/upload-file', userController.uploadFile)

    // router.post('/save-file', userController.saveFileUpload)

    return app.use('/', router)
}
export default initWebRoute
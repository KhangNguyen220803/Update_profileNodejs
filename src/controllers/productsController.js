import express from "express";
import productsModel from "../services/productsModel.js"
const getAllProductType = async (req, res) => {
    let productsTypeLists = await productsModel.getAllProductType();
    res.render('home', { data: { title: 'List User', page: 'main' ,rows:productsTypeLists} });
}

const insertProducts = async (req, res) => {
    let {maloaisp, tenloaisp} = req.body
    await productsModel.insertProducts(maloaisp, tenloaisp)
    res.redirect("/")

    // if (!userModel.isUserExist(username)) {
    //     await userModel.insertUser(username, password, fullname, address, sex, email)
    //     res.redirect("/")
    // }
    // else
    //     res.send("User exist")
}

export default {getAllProductType, insertProducts}
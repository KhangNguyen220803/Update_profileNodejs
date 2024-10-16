import express from "express";
import productsModel from "../services/productsModel.js"

const getHomePage = async (req, res) => {
    let productsTypeLists = await productsModel.getAllProductType();
    return res.render("home", { data: { title: 'Home page', page: 'main', rows: productsTypeLists} })
}
export default getHomePage
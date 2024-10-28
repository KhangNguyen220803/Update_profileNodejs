import express from "express";
import productsModel from "../services/productsModel.js"

const getHomePage = async (req, res) => {
    let productsTypeLists = await productsModel.getAllProductType();
    let NSXLists = await productsModel.getAllNSX();
    return res.render("home", { data: { title: 'Home page', page: 'main', listNSX: NSXLists, rows: productsTypeLists} })
}
export default getHomePage
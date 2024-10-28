import express from "express";
import productsModel from "../services/productsModel.js"

// Loai
const getAllProductType = async (req, res) => {
    let productsTypeLists = await productsModel.getAllProductType();
    let NSXLists = await productsModel.getAllNSX();
    res.render('home', { data: { title: 'List Type Product', page: 'tablesProduct', listNSX: NSXLists, rows: productsTypeLists } });
}
const insertTProducts = async (req, res) => {
    let {maloaisp, tenloaisp} = req.body
    await productsModel.insertTProducts(maloaisp, tenloaisp)
    
    res.redirect(req.get('referer'));
}
const detailProductType = async (req, res) => {
    let id = req.params.id
    let dataProductType = await productsModel.detailProductType(id)
    res.render('home', {data: {title: 'Detail Product Type', page: 'detailTablesProduct', rows: dataProductType} })
}
const editProductType = async (req, res) => {
    let id = req.params.id
    let dataPT = await productsModel.detailProductType(id)
    res.render('home', {data: {title: 'Edit Product Type', page: 'editTablesProduct', rows: dataPT} })
}
const updateTProduct = async (req, res) => {
    let id = req.params.id
    let tenloaisp = req.body.tenloai
    await productsModel.editProductType(tenloaisp, id)
    res.redirect("/listTProduct");
}
const deleteTProduct = async (req, res) => {
    let id = req.params.id
    await productsModel.deleteType(id)
}
// Loai

// NSX
const getAllNSX = async (req, res) => {
    let NSXLists = await productsModel.getAllNSX();
    let productsTypeLists = await productsModel.getAllProductType();
    res.render('home', { data: { title: 'NSX', page: 'tablesNSX', listNSX: NSXLists, rows: productsTypeLists } });
}
const insertNSX = async (req, res) => {
    let {mansx, tennsx, loaisp, emailnsx, diachinsx} = req.body
    await productsModel.insertNSX(mansx, tennsx, loaisp, emailnsx, diachinsx)
    res.redirect(req.get('referer'));
}
const detailNSX = async (req, res) => {
    let id = req.params.id
    let dataNSX = await productsModel.detailNSX(id)
    res.render('home', {data: {title: 'Detail NSX', page: 'detailNSX', rows: dataNSX} })
}
const editNSX = async (req, res) => {
    let id = req.params.id
    let dataNSX = await productsModel.detailNSX(id)
    let productsTypeLists = await productsModel.getAllProductType();
    res.render('home', {data: {title: 'Edit NSX', page: 'editNSX', rows: productsTypeLists, rowNSX: dataNSX} })
}
const updateNSX = async (req, res) => {
    let id = req.params.id
    let {tennsx, loaisp, emailnsx, diachinsx} = req.body
    await productsModel.editNSX(id, tennsx, loaisp, emailnsx, diachinsx)
    res.redirect("/listNSX");
}
const deleteNSX = async (req, res) => {
    let id = req.params.id
    await productsModel.deleteNSX(id)
}
// NSX

// SanPham
const getAllProduct = async (req, res) => {
    let Product = await productsModel.getAllProduct();
    let NSXLists = await productsModel.getAllNSX();
    let productsTypeLists = await productsModel.getAllProductType();
    res.render('home', { data: { title: 'product', page: 'product', product: Product, listNSX: NSXLists, rows: productsTypeLists } });
}
const getAPIAllProduct = async (req, res) => {
    let Product = await productsModel.getAllProduct();

    return res.status(200).json({ product: Product});
}
const insertProducts = async (req, res) => {
    let { masp, tensp, thongtinchitiet, soluongsp, maloai, mansx } = req.body;
    let hinhanh = req.file ? req.file.filename : null;

    await productsModel.insertProducts(masp, tensp, thongtinchitiet, soluongsp, hinhanh, maloai, mansx)
    res.redirect(req.get('referer'));
}
const detailProduct = async (req, res) => {
    let id = req.params.id
    let dataProduct = await productsModel.detailProduct(id)
    res.render('home', {data: {title: 'Detail Product ', page: 'detailProduct', rows: dataProduct} })
}
const editProduct = async (req, res) => {
    let id = req.params.id
    let dataProduct = await productsModel.detailProduct(id)
    let NSXLists = await productsModel.getAllNSX();
    let productsTypeLists = await productsModel.getAllProductType();
    res.render('home', {data: {title: 'Edit Product', page: 'editProduct', rows: productsTypeLists, listNSX: NSXLists, rowProduct: dataProduct} })
}
const updateProduct = async (req, res) => {
    let id = req.params.id;
    let { tensp, thongtinchitiet, soluongsp, maloai, mansx } = req.body;
    let hinhanh = req.file ? req.file.filename : null;

    await productsModel.editProduct(id, tensp, thongtinchitiet, soluongsp, hinhanh, maloai, mansx);

    res.redirect("/listProduct");
}
const deleteProduct = async (req, res) => {
    let id = req.params.id
    await productsModel.deleteProduct(id)
}

export default {getAllProductType, getAPIAllProduct, insertTProducts, editProductType, updateTProduct, deleteTProduct, detailProductType, insertNSX, editNSX, updateNSX, getAllNSX, detailNSX, deleteNSX, insertProducts, getAllProduct, updateProduct, editProduct, detailProduct, deleteProduct}
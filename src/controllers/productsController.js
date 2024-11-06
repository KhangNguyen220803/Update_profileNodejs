import express from "express";
import productsModel from "../services/productsModel.js"

// Loai
const getAllProductType = async (req, res) => {
    let productsTypeLists = await productsModel.getAllProductType();
    let NSXLists = await productsModel.getAllNSX();
    res.render('home', { data: { title: 'List Type Product', page: 'tablesProduct', listNSX: NSXLists, rows: productsTypeLists } });
}
const insertTProducts = async (req, res) => {
    let { maloaisp, tenloaisp } = req.body
    await productsModel.insertTProducts(maloaisp, tenloaisp)

    res.redirect(req.get('referer'));
}
const detailProductType = async (req, res) => {
    let id = req.params.id
    let dataProductType = await productsModel.detailProductType(id)
    res.render('home', { data: { title: 'Detail Product Type', page: 'detailTablesProduct', rows: dataProductType } })
}
const editProductType = async (req, res) => {
    let id = req.params.id
    let dataPT = await productsModel.detailProductType(id)
    res.render('home', { data: { title: 'Edit Product Type', page: 'editTablesProduct', rows: dataPT } })
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
    let { mansx, tennsx, loaisp, emailnsx, diachinsx } = req.body
    await productsModel.insertNSX(mansx, tennsx, loaisp, emailnsx, diachinsx)
    res.redirect(req.get('referer'));
}
const detailNSX = async (req, res) => {
    let id = req.params.id
    let dataNSX = await productsModel.detailNSX(id)
    res.render('home', { data: { title: 'Detail NSX', page: 'detailNSX', rows: dataNSX } })
}
const editNSX = async (req, res) => {
    let id = req.params.id
    let dataNSX = await productsModel.detailNSX(id)
    let productsTypeLists = await productsModel.getAllProductType();
    res.render('home', { data: { title: 'Edit NSX', page: 'editNSX', rows: productsTypeLists, rowNSX: dataNSX } })
}
const updateNSX = async (req, res) => {
    let id = req.params.id
    let { tennsx, loaisp, emailnsx, diachinsx } = req.body
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

    return res.status(200).json({ products: Product });
}
const insertProducts = async (req, res) => {
    let { masp, tensp, thongtinchitiet, soluongsp, gia, maloai, mansx } = req.body;
    let hinhanh = req.file ? req.file.filename : null;

    await productsModel.insertProducts(masp, tensp, thongtinchitiet, soluongsp, gia, hinhanh, maloai, mansx)
    res.redirect(req.get('referer'));
}
const detailProduct = async (req, res) => {
    let id = req.params.id
    let dataProduct = await productsModel.detailProduct(id)
    res.render('home', { data: { title: 'Detail Product ', page: 'detailProduct', rows: dataProduct } })
}
const editProduct = async (req, res) => {
    let id = req.params.id
    let dataProduct = await productsModel.detailProduct(id)
    let NSXLists = await productsModel.getAllNSX();
    let productsTypeLists = await productsModel.getAllProductType();
    res.render('home', { data: { title: 'Edit Product', page: 'editProduct', rows: productsTypeLists, listNSX: NSXLists, rowProduct: dataProduct } })
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
// CartAdmin
const getAllCart = async (req, res) => {
    let listCart = await productsModel.getAllCart();
    res.render('home', { data: { title: 'cart', page: 'cart', listCarts: listCart} });
}
// cart
const insertCart = async (req, res) => {
    try {
        const { madh, username, ngaydat, trangthai, tonggia, diachinhanhang } = req.body;

        if (!madh || !username || !ngaydat || !trangthai || !tonggia || !diachinhanhang) {
            return res.status(400).send({ message: "Thiếu thông tin đặt hàng." });
        }
        await productsModel.insertCart(madh, username, ngaydat, trangthai, tonggia, diachinhanhang);
        res.status(200).send({ message: "Đơn hàng đã được lưu thành công!" });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).send({ message: "Đã xảy ra lỗi khi lưu đơn hàng." });
    }
};

const insertDetailCart = async (req, res) => {
    const orderDetails = req.body;
    console.log("Order details received:", orderDetails);

    try {
  
        if (!Array.isArray(orderDetails) || orderDetails.length === 0) {
            return res.status(400).send({ message: "Chi tiết đơn hàng không hợp lệ." });
        }
        await Promise.all(
            orderDetails.map(detail => {
                const { madh, masp, gia, soluong } = detail;
                if (!madh || !masp || !gia || !soluong) {
                    throw new Error("Thông tin chi tiết đơn hàng không đầy đủ.");
                }
                return productsModel.insertDetailCart(madh, masp, gia, soluong);
            })
        );

        res.status(200).send({ message: "Chi tiết đơn hàng đã được lưu thành công!" });
    } catch (error) {
        console.error("Error saving order details:", error);
        res.status(500).send({ message: "Đã xảy ra lỗi khi lưu chi tiết đơn hàng." });
    }
};

export default { getAllProductType, getAllCart, insertCart, insertDetailCart, getAPIAllProduct, insertTProducts, editProductType, updateTProduct, deleteTProduct, detailProductType, insertNSX, editNSX, updateNSX, getAllNSX, detailNSX, deleteNSX, insertProducts, getAllProduct, updateProduct, editProduct, detailProduct, deleteProduct }
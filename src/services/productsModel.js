import connectDB from "../configs/connectDB.js";
// Loai
const getAllProductType = async () => {
    const [rows, fields] = await connectDB.execute('SELECT `maloai`, `tenloai` FROM `loaisanpham`')
    return rows
}
const insertTProducts = async (maloaisp, tenloaisp) => {
    await connectDB.execute("INSERT INTO `loaisanpham` VALUES (?, ?)", [maloaisp, tenloaisp]);
}
const detailProductType= async (id) => {
        const [rows, fields] = await connectDB.execute('SELECT * FROM `loaisanpham` WHERE maloai=?', [id])
        return rows[0]
}
const editProductType = async (tenloaisp, maloaisp) => {
    await connectDB.execute('UPDATE `loaisanpham` SET tenloai=? WHERE maloai =?',[tenloaisp, maloaisp])
}
const deleteType = async(maloaisp) => {
    await connectDB.execute("DELETE FROM `loaisanpham` WHERE maloai=?", [maloaisp])
}
// Loai

// NSX
const getAllNSX = async () => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `nhasanxuat`')
    return rows
}
const insertNSX = async (mansx, tennsx, loaisp, emailnsx, diachinsx) => {
    await connectDB.execute("INSERT INTO `nhasanxuat` VALUES (?, ?, ?, ?, ?)", [mansx, tennsx, loaisp, emailnsx, diachinsx]);
}
const detailNSX= async (id) => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `nhasanxuat` WHERE mansx=?', [id])
    return rows[0]
}
const editNSX = async (mansx, tennsx, loaisp, emailnsx, diachinsx) => {
    await connectDB.execute('UPDATE `nhasanxuat` SET tennsx=?, loaisp =?, emailnsx=?, diachinsx=? WHERE mansx =?',[tennsx, loaisp, emailnsx, diachinsx, mansx])
}
const deleteNSX = async(mansx) => {
    await connectDB.execute("DELETE FROM `nhasanxuat` WHERE mansx=?", [mansx])
}
// NSX

// SP
const getAllProduct = async () => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `sanpham`, `loaisanpham`, `nhasanxuat` WHERE `sanpham`.maloai = `loaisanpham`.maloai AND `sanpham`.mansx = `nhasanxuat`.mansx')
    return rows
}

const insertProducts = async (masp, tensp, thongtinchitiet, soluongsp, gia, hinhanh, maloai, mansx) => {
    await connectDB.execute("INSERT INTO `sanpham` VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [masp, tensp, thongtinchitiet, soluongsp, gia, hinhanh, maloai, mansx]);
}
const detailProduct= async (id) => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `sanpham` WHERE masp=?', [id])
    return rows[0]
}
const editProduct = async (id, tensp, thongtinchitiet, soluongsp, hinhanh, maloai, mansx) => {
    let query = 'UPDATE `sanpham` SET tensp=?, thongtinchitiet=?, soluongsp=?, maloai=?, mansx=?';
    let params = [tensp, thongtinchitiet, soluongsp, maloai, mansx];
    if (hinhanh) {
        query += ', hinhanh=?';
        params.push(hinhanh);
    }

    query += ' WHERE masp=?';
    params.push(id);

    await connectDB.execute(query, params);
}
const deleteProduct = async(masp) => {
    await connectDB.execute("DELETE FROM `sanpham` WHERE masp=?", [masp])
}
// SP

export default {getAllProductType, insertTProducts, editProductType, detailProductType, deleteType, insertNSX, editNSX, getAllNSX, detailNSX, deleteNSX, insertProducts, getAllProduct, editProduct, detailProduct, deleteProduct}
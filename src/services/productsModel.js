import connectDB from "../configs/connectDB.js";
const getAllProductType = async () => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `loaisanpham`')
    return rows
}

export default getAllProductType
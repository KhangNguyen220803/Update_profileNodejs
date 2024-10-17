import connectDB from "../configs/connectDB.js";
const getAdmin = async (username, password) => {
    const [rows, fields] = await connectDB.execute('SELECT * FROM `admin` WHERE `username`=? AND `password` =?', [username, password])
    return rows[0]
}
export default {getAdmin}
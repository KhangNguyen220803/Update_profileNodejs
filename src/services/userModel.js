import connectDB from "../configs/connectDB.js";
// const getAllUser = async () => {
//     const [rows, fields] = await connectDB.execute('SELECT * FROM `users`')
//     return rows
// }
// const createNewUser = async (userData) => {
//     const { username, password, fullname, address, sex, email } = userData; // Lấy thông tin từ userData
//     const [rows] = await connectDB.execute(
//         'INSERT INTO users (username, password, fullname, address) VALUES (?, ?, ?, ?)',
//         [username, password, fullname, address, sex, email]
//     );
//     return rows; // Trả về kết quả của thao tác chèn
// }
// const isUserExist = async (username) => {
//     const [rows] = await connectDB.execute('SELECT * FROM users WHERE username = ?', [username]);
//     return rows.length > 0; 
// }
// const insertUser = async (username, password, fullname, address, sex, email) => {
//     await connectDB.execute("INSERT INTO users VALUE (?,?,?,?,?,?)", [username, password, fullname, address, sex, email])
// }
// const detailUser = async (user) => {
//     const [rows, fields] = await connectDB.execute('SELECT * FROM `users` WHERE username=?', [user])
//     return rows[0]
// }
// const updateUser = async (username, password, fullname, address, sex, email) => {
//     await connectDB.execute('UPDATE users SET username=?, password=?, fullname=?, address=?, sex=?, email=?',[username, password, fullname, address, sex, email])
// }
// const deleteUser = async(user) => {
//     await connectDB.execute("DELETE FROM users WHERE username=?", [user])
// }
// export default { getAllUser, detailUser, updateUser, deleteUser, insertUser, isUserExist}
// export default { getAllUser}
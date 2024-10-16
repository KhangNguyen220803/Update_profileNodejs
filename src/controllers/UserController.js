import express from "express";
// import userModel from "../services/userModel.js";
// const getAllUser = async (req, res) => {
//     // let userList = await userModel.getAllUser();
//     res.render('home', { data: { title: 'List User', page: 'listUser'} });
// }
// const createUser = (req, res) => {
//     res.render('home', {data: {title: 'Create New User', page: 'insertUser'} })
// }

// // const insertUser = async (req, res) => {
// //     let {username, password, fullname, address, sex, email} = req.body
// //     if (!userModel.isUserExist(username)) {
// //         await userModel.insertUser(username, password, fullname, address, sex, email)
// //         res.redirect("/")
// //     }
// //     else
// //         res.send("User exist")
// // }

// const insertUser = async (req, res) => {
//     let { username, password, fullname, address, sex, email } = req.body;

//     // Chờ kết quả của isUserExist
//     const userExists = await userModel.isUserExist(username);

//     if (!userExists) {
//         await userModel.insertUser(username, password, fullname, address, sex, email);
//         res.redirect("/");
//     } else {
//         res.send("User exist");
//     }
// }


// const detailUser = async (req, res) => {
//     // if (isAuthentication(req, res) == true) {}
//     let user = req.params.username
//     let dataUser = await userModel.detailUser(user)
//     res.render('home', {data: {title: 'Detail User', page: 'detailUser', rows: dataUser} })
// }

// const editUser = async (req, res) => {
//     let user = req.params.username
//     let dataUser = await userModel.detailUser(user)
//     res.render('home', {data: {title: 'Edit User', page: 'editUser', rows: dataUser} })
// }

// const updateUser = async (req, res) => {
//     console.log(req.body);
//     let { username, password, fullname, address, sex, email } = req.body;
//     await userModel.updateUser(username, password, fullname, address, sex, email);
//     res.redirect("/list-user");
// }

// const deleteUser = async (req, res) => {
//     let {username} = req.body
//     await userModel.deleteUser(username)
//     res.redirect("/list-user")
// }
// export default {getAllUser, createUser, detailUser, updateUser, editUser, insertUser, deleteUser}
// export default getAllUser
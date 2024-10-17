import express from "express";
import userModel from '../services/userModel.js'
const loginAdmin = async (req, res) => {
    // let admin = await userModel.getAdmin();
    res.render('login', {data: {title: 'Login'}});
    // res.render('login', {rows: admin });
}
const getAdmin = async (req, res) => {
    let { username, password } = req.body;
    const acc = await userModel.getAdmin(username, password);
    console.log(acc);
    if (!acc) {
        return res.redirect('/login');
    }
    req.session.isAuth = true
    req.session.user = acc;
    console.log(req.session.user)
    return res.redirect('/');
}
export default {loginAdmin, getAdmin}
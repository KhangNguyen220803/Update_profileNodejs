import express from "express";
import userModel from '../services/userModel.js'
const loginAdmin = async (req, res) => {
    res.render('login', {data: {title: 'Login'}});
}
const getAdmin = async (req, res) => {
    let { username, password } = req.body;
    const acc = await userModel.getAdmin(username, password);
    if (!acc) {
        return res.redirect('/login');
    }
    req.session.isAuth = true
    req.session.user = acc;
    console.log(req.session)
    return res.redirect('/');
}
const logout = (req, res) => {
    res.clearCookie('connect.sid');
    return res.redirect('/login');
};
export default {loginAdmin, getAdmin, logout}
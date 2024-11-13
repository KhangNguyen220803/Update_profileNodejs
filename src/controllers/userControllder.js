import express from "express";
import bcrypt from "bcrypt";
import userModel from '../services/userModel.js';
import JWTAction from '../../middleware/jwt.js';
import jwt from 'jsonwebtoken';
import sequelize from '../configs/sequelize.js';


//Guest

const getAllGuest = async (req, res) => {
    let role = "user"
    let getAllGuests = await userModel.getAllGuest(role);
    
    res.render('home', { data: { title: 'List Guests', page: 'ListGuest', rows: getAllGuests } });
}

const detailGuest = async (req, res) => {
    let username = req.params.username
    let detailGuest = await userModel.detailGuest(username)
    res.render('home', { data: { title: 'detail Guest', page: 'detailGuest', rows: detailGuest } })
}

const editGuest = async (req, res) => {
    let username = req.params.username
    let dataGuest = await userModel.detailGuest(username)
    res.render('home', { data: { title: 'Edit Guest', page: 'editGuest', rows: dataGuest, } })
}

const updateGuest = async (req, res) => {
    let username = req.params.username
    let { role  } = req.body;
    await userModel.editGuest(role, username);

    res.redirect("/");
}

const deleteGuest = async (req, res) => {
    let username = req.params.username
    await userModel.deleteGuest(username)
}

//end Guest



const loginAdmin = async (req, res) => {
    res.render('login', { data: { title: 'Login' } });
}

const getAdmin = async (req, res) => {
    let { username, password } = req.body;
    
    const acc = await userModel.getAdmin(username);
    // console.log(acc);
    if (!acc) {
        return res.redirect('/login');
    }

    const isPasswordValid = await bcrypt.compare(password, acc.password);
    if (!isPasswordValid) {
        return res.redirect('/');
    }

    req.session.isAuth = true;
    req.session.user = acc;
    // console.log(req.session);
    return res.redirect('/');
}
const insertAdmin = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        const acc = await userModel.getAdmin(username);
        if (acc) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await userModel.insertAdmin(username, hashedPassword, role);

        res.status(200).json({ message: 'Created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
const getProfile = async (req, res) => {
    let username = req.params.username;
    
    const acc = await userModel.getProfile(username);
    if(!acc){
        return res.status(400).json({ message: 'Chưa có thông tin' });
    }
    res.status(200).json({ message: 'Created successfully', profile: acc });
}
const insertProfile = async (req, res) => {
    try {
        const { username, fullname, address } = req.body;

        await userModel.insertProfile(username, fullname, address);

        res.status(200).json({ message: 'Created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
const updateProfile = async (req, res) => {
    try {
        let username = req.params.username;

        const {fullname, address } = req.body;
        console.log(username, fullname, address);
        await userModel.updateProfile(username, fullname, address);

        res.status(200).json({ message: 'Created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.clearCookie('connect.sid');
        return res.redirect('/login');
    });
};


const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;

      const acc = await userModel.getAdmin(username);      
      if (!acc) {
        return res.status(400).json({ message: 'Username không tồn tại' });
      }
      
      // Compare the entered password with the hashed password in the database
      const isPasswordMatch = await bcrypt.compare(password, acc.password);
      
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Mật khẩu không đúng' });
      }

      const payload = {
        username: acc.username,
        role: acc.role,
      };
  
      const token = JWTAction.createJWT(payload);
      console.log(token);
      res.cookie("jwt", token, { path: "/", httpOnly: false, secure: false, sameSite: 'Lax' });
      
      
      // If password matches, return success message
      return res.status(200).json({ message: 'Đăng nhập thành công', token, user: acc });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Lỗi xảy ra bên server' });
    }
  };

  const logoutAPI = (req, res) => {
    
      res.clearCookie('jwt');
      res.status(200).json({ message: 'Đăng xuất thành công'})
    
};



export default {getAllGuest,detailGuest,editGuest,updateGuest, deleteGuest, loginAdmin, getAdmin, updateProfile, logout, insertAdmin, insertProfile, loginUser, logoutAPI, getProfile};

// import connectDB from "../configs/connectDB.js";

// const getAdmin = async (username) => {
//     const [rows, fields] = await connectDB.execute('SELECT * FROM `admin` WHERE `username`=?', [username])
//     return rows[0]
// }

// const getProfile = async (username) => {
//     const [rows, fields] = await connectDB.execute('SELECT * FROM `hoso` WHERE `username`=?', [username])
//     return rows[0]
// }

// const insertAdmin = async (username, password, role) => {
//     const [rows, fields] = await connectDB.execute('INSERT INTO `admin` VALUES (?, ?, ?)', [username, password, role])
//     return rows
// }
// const insertProfile = async (username, fullname, address) => {
//     const [rows, fields] = await connectDB.execute('INSERT INTO `hoso` VALUES (?, ?, ?)', [username, fullname, address])
//     return rows
// }
// const updateProfile = async (username, fullname, address) => {
//     const [rows, fields] = await connectDB.execute(
//         'UPDATE `hoso` SET fullname = ?, address = ? WHERE username = ?',
//         [fullname, address, username]
//     );
//     return rows;
// };

// export default {getAdmin, insertAdmin, getProfile, insertProfile, updateProfile}

import user from '../models/user.js';
import profile from '../models/profile.js';

const userModel = {
  async getAdmin(username) {
    return await user.findOne({ where: { username } });
  },

  async insertAdmin(username, hashedPassword, role) {
    return await user.create({
      username,
      password: hashedPassword,
      role
    });
  },

  async getProfile(username) {
    return await profile.findOne({ where: { username } });
  },

  async insertProfile(username, fullname, address) {
    return await profile.create({
      username,
      fullname,
      address
    });
  },

  async updateProfile(username, fullname, address) {
    return await profile.update(
      { fullname, address },
      { where: { username } }
    );
  }
};

export default userModel;

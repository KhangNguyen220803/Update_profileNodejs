import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';


const profile = sequelize.define('hoso', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'users',  
      key: 'username' 
    }
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false 
});

export default profile;
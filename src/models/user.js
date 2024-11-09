import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';
import profile from './profile.js';

const user = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
  timestamps: false 
});

user.hasOne(profile, { foreignKey: 'username' });
profile.belongsTo(user, { foreignKey: 'username' });


export default user;
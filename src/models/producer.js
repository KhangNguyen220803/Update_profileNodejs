import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';
import product from './product.js';
const producer = sequelize.define('nhasanxuat', {
    mansx: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    tennsx: {
        type: DataTypes.STRING(255)
    },
    loaisp: {
        type: DataTypes.STRING(50)
    },
    emailnsx: {
        type: DataTypes.STRING(255)
    },
    diachinsx: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false
});

producer.hasMany(product, { foreignKey: 'mansx' });
product.belongsTo(producer, { foreignKey: 'mansx' });
export default producer;

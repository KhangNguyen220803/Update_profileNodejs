import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';
import product from './product.js';

const category = sequelize.define('loaisanpham', {
    maloai: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    tenloai: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false
});
category.hasMany(product, { foreignKey: 'maloai' });
product.belongsTo(category, { foreignKey: 'maloai' });
export default category;
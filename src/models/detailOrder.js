import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';
import cart from './cart.js';
import product from './product.js';
const detailOrder = sequelize.define('chitietdathang', {
    madh: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        references: {
            model: 'donhangs',
            key: 'madh'
        }
    },
    masp: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        references: {
            model: 'sanphams',
            key: 'masp'
        }
    },
    gia: {
        type: DataTypes.INTEGER
    },
    soluong: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});
detailOrder.belongsTo(cart, { foreignKey: 'madh' });
cart.hasMany(detailOrder, { foreignKey: 'madh' });

detailOrder.belongsTo(product, { foreignKey: 'masp' });
product.hasMany(detailOrder, { foreignKey: 'masp' });

export default detailOrder;
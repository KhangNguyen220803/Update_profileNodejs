import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';
// import detailOrder from './detailOrder.js';
import user from './user.js';

const cart = sequelize.define('donhang', {
    madh: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(255),
        references: {
            model: 'users',
            key: 'username'
        }
    },
    ngaydat: {
        type: DataTypes.DATE
    },
    trangthai: {
        type: DataTypes.STRING(50)
    },
    tonggia: {
        type: DataTypes.INTEGER
    },
    diachinhanhang: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: false
});
cart.belongsTo(user, { foreignKey: 'username' });
user.hasMany(cart, { foreignKey: 'username' });

// cart.hasMany(detailOrder, { foreignKey: 'madh' });
// detailOrder.belongsTo(cart, { foreignKey: 'madh' });
export default cart;
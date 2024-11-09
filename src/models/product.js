import { DataTypes } from 'sequelize';
import sequelize from '../configs/sequelize.js';
// import detailOrder from './detailOrder.js';

const product = sequelize.define('sanpham', {
    masp: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    tensp: {
        type: DataTypes.STRING(50)
    },
    thongtinchitiet: {
        type: DataTypes.STRING(255)
    },
    soluongsp: {
        type: DataTypes.INTEGER
    },
    giasp: {
        type: DataTypes.INTEGER
    },
    hinhanh: {
        type: DataTypes.STRING(255)
    },
    maloai: {
        type: DataTypes.STRING(50),
        references: {
            model: 'loaisanphams',
            key: 'maloai'
        }
    },
    mansx: {
        type: DataTypes.STRING(50),
        references: {
            model: 'nhasanxuats',
            key: 'mansx'
        }
    }
}, {
    timestamps: false
});
// product.hasMany(detailOrder, { foreignKey: 'masp' });
// detailOrder.belongsTo(product, { foreignKey: 'masp' });
export default product;

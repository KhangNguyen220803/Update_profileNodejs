
import sequelize from '../configs/sequelize.js';    
import cart from './cart.js';
import category from './category.js';
import detailOrder from './detailOrder.js';
import producer from './producer.js';
import product from './product.js';
import profile from './profile.js';
import user from './user.js';

user.hasOne(profile, { foreignKey: 'username' });
profile.belongsTo(user, { foreignKey: 'username' });

// Thiết lập mối quan hệ giữa User và Cart
user.hasMany(cart, { foreignKey: 'username' });
cart.belongsTo(user, { foreignKey: 'username' });

// Thiết lập mối quan hệ giữa Cart và DetailOrder
cart.hasMany(detailOrder, { foreignKey: 'madh' });
detailOrder.belongsTo(cart, { foreignKey: 'madh' });

// Thiết lập mối quan hệ giữa Product và DetailOrder
product.hasMany(detailOrder, { foreignKey: 'masp' });
detailOrder.belongsTo(product, { foreignKey: 'masp' });

// Đồng bộ cơ sở dữ liệu
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Các bảng đã được đồng bộ hóa thành công!");
  })
  .catch((error) => {
    console.error("Lỗi khi đồng bộ hóa bảng:", error);
  });

export { sequelize, profile, user, cart, category, detailOrder, producer, product };

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const userRoutes = require('./routers/userRoutes');
const expenseRoutes = require('./routers/expenseRoutes');
const productRoutes = require('./routers/productRoutes');

const app = express();
const port = 5000;

// Cấu hình CORS cho phép tất cả các nguồn truy cập
app.use(cors());
app.use(express.json());

// Kết nối PostgreSQL
const pool = new Pool({
  user: 'user',
  host: 'db', // Tên service database trong Docker Compose
  database: 'your_db',
  password: 'password',
  port: 5432
});

// Kết nối API routes
app.use('/users', userRoutes(pool));
app.use('/expenses', expenseRoutes(pool));
app.use('/products', productRoutes(pool));

// Thêm route mặc định '/'
app.get('/', (req, res) => {
  res.send('API is up and running!');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

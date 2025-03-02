const getAllProducts = async (pool) => {
    const result = await pool.query('SELECT * FROM products');
    return result.rows;
  };
  
  const createProduct = async (pool, productData) => {
    const { name, description, price } = productData;
    const result = await pool.query(
      'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *',
      [name, description, price]
    );
    return result.rows[0];
  };
  
  module.exports = { getAllProducts, createProduct };
  
const getAllUsers = async (pool) => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  };
  
  const createUser = async (pool, userData) => {
    const { username, password, email } = userData;
    const result = await pool.query(
      'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
      [username, password, email]
    );
    return result.rows[0];
  };
  
  module.exports = { getAllUsers, createUser };
  
const getAllExpenses = async (pool) => {
    const result = await pool.query('SELECT * FROM expenses');
    return result.rows;
  };
  
  const createExpense = async (pool, expenseData) => {
    const { user_id, amount, description } = expenseData;
    const result = await pool.query(
      'INSERT INTO expenses (user_id, amount, description) VALUES ($1, $2, $3) RETURNING *',
      [user_id, amount, description]
    );
    return result.rows[0];
  };
  
  module.exports = { getAllExpenses, createExpense };
  
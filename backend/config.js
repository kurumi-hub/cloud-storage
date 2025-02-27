
module.exports = {
    dbConfig: {
      user: 'user',            // Tên người dùng DB (bạn có thể thay đổi theo thông tin của bạn)
      host: 'db',              // Tên service của database trong Docker Compose
      database: 'your_db',     // Tên database
      password: 'password',    // Mật khẩu của database
      port: 5432               // Cổng mặc định của PostgreSQL
    },
    serverConfig: {
      port: 5000               // Cổng mà API backend sẽ chạy trên đó
    }
  };
  
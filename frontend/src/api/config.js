
const config = {
  // Địa chỉ API của ứng dụng
  apiUrl: "https://api.yourdomain.com",

  // Các thông số môi trường
  environment: process.env.NODE_ENV || "development",

  // Cấu hình cho việc đăng nhập
  auth: {
    clientId: "your-client-id",
    clientSecret: "your-client-secret"
  },

  // Các thông số khác (ví dụ như môi trường phát triển)
  development: {
    apiUrl: "http://localhost:3000/api"
  }
};

export default config;

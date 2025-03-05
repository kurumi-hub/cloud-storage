# Dockerfile cho Backend (Express app)
FROM node:16

# Set thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào container
COPY backend/package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY backend/ .

# Cấu hình cổng mà backend sẽ chạy
EXPOSE 5000

# Lệnh để chạy backend
CMD ["node", "server.js"]

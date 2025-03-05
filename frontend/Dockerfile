# Dockerfile cho Frontend (React app)
FROM node:16

# Set thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json vào container
COPY frontend/package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY frontend/ .

# Build ứng dụng React
RUN npm run build

# Cài đặt Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép ứng dụng đã build vào thư mục mà Nginx sẽ phục vụ
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Cấu hình cổng mà Nginx sẽ chạy
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]

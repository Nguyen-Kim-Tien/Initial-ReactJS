# Sử dụng hình ảnh Node.js
FROM node:18

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn ứng dụng
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Chạy ứng dụng React trên localhost:3000
EXPOSE 3000
CMD [ "npm", "start" ]
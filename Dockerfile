# 使用Node.js官方镜像作为基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制package.json和yarn.lock到工作目录
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn install

# 复制其他项目文件到工作目录
COPY . .

# 构建应用
RUN yarn build

# 指定运行时的命令
CMD ["yarn", "start"]

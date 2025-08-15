# Chemistry AI - 部署指南

## Cloudflare Pages 部署

### 1. 自动部署配置

**构建设置：**
- 构建命令: `npm run build`
- 输出目录: `out`
- Node.js 版本: `18`

### 2. 手动部署步骤

```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build

# 3. 部署 (上传 out 目录到 Cloudflare Pages)
```

### 3. 自定义域名设置

**域名：** `chemistryai.online`

#### 在 Cloudflare Pages 控制台：
1. 进入项目设置 → Custom domains
2. 添加域名: `chemistryai.online`
3. 设置 DNS 记录:
   - `A` 记录：`chemistryai.online` → Cloudflare Pages IP
   - `CNAME` 记录：`www.chemistryai.online` → `chemistryai.online`

#### DNS 配置示例：
```
Type    Name                Value
A       chemistryai.online  [Cloudflare Pages IP]
CNAME   www                 chemistryai.online
```

### 4. 环境变量

在 Cloudflare Pages 设置中添加：
```
NEXT_PUBLIC_SITE_URL=https://chemistryai.online
NEXT_PUBLIC_SITE_NAME=Chemistry AI
```

### 5. 性能优化

- ✅ 静态文件缓存
- ✅ CDN 分发
- ✅ Gzip 压缩
- ✅ HTTP/2 支持

### 6. 监控和分析

可选集成：
- Cloudflare Analytics
- Google Analytics
- Real User Monitoring (RUM)

### 7. 故障排除

如果部署失败：
1. 检查构建日志
2. 确认 Node.js 版本
3. 验证输出目录
4. 检查环境变量

### 8. 更新部署

推送到 GitHub 仓库会自动触发重新部署：
```bash
git add .
git commit -m "Update deployment configuration"
git push origin master
```
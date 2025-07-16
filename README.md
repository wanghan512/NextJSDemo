# Next.js Monorepo 项目

这是一个使用 pnpm 工作区构建的 Next.js Monorepo 项目，包含多个应用程序和共享包。

## 项目结构

```
├── apps/
│   ├── web/          # Web 应用 (端口 3000)
│   └── admin/        # 管理后台 (端口 3001)
├── packages/
│   └── ui/           # 共享 UI 组件库
├── package.json      # 根配置文件
└── pnpm-workspace.yaml # pnpm 工作区配置
```

## 功能特性

- 🚀 **多应用支持**: 包含 Web 应用和管理后台
- 📦 **共享组件**: 可复用的 UI 组件库
- 🎨 **Tailwind CSS**: 现代化的样式框架
- 🔧 **TypeScript**: 完整的类型支持
- ⚡ **pnpm**: 高效的包管理器
- 🔄 **并行开发**: 同时运行多个应用

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
# 同时启动所有应用
pnpm dev

# 或者单独启动某个应用
pnpm --filter web dev      # 启动 Web 应用
pnpm --filter admin dev    # 启动管理后台
```

### 3. 访问应用

- Web 应用: http://localhost:3000
- 管理后台: http://localhost:3001

## 可用脚本

```bash
# 开发
pnpm dev          # 启动所有应用的开发服务器
pnpm build        # 构建所有应用
pnpm start        # 启动所有应用的生产服务器
pnpm lint         # 运行所有应用的代码检查
pnpm clean        # 清理所有构建文件
```

## 共享组件使用

在应用中使用共享 UI 组件：

```tsx
import { Button, Card } from "@monorepo/ui";

export default function MyPage() {
  return (
    <Card title="示例卡片">
      <Button variant="primary" size="md">
        点击我
      </Button>
    </Card>
  );
}
```

## 添加新应用

1. 在 `apps/` 目录下创建新的 Next.js 应用
2. 配置不同的端口避免冲突
3. 在根目录的 `package.json` 中添加相应的脚本

## 添加新包

1. 在 `packages/` 目录下创建新包
2. 配置 `package.json` 和 `tsconfig.json`
3. 在需要的应用中引入使用

## 技术栈

- **Next.js 15.4.1** - React 框架
- **React 18** - UI 库
- **TypeScript** - 类型系统
- **Tailwind CSS** - 样式框架
- **pnpm** - 包管理器
- **ESLint** - 代码检查

## 开发建议

1. 使用 TypeScript 进行类型安全的开发
2. 共享组件放在 `packages/ui` 中
3. 每个应用保持独立的配置
4. 使用 pnpm 的过滤器功能操作特定应用

## 部署

每个应用都可以独立部署：

```bash
# 构建特定应用
pnpm --filter web build
pnpm --filter admin build

# 启动生产服务器
pnpm --filter web start
pnpm --filter admin start
```

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个 GitHub Profile README 自动生成器，通过 GitHub Actions 每 24 小时自动运行，从 GitHub API 和 xLog 平台获取数据，动态生成个人主页 README。

## 常用命令

```bash
# 安装依赖 (使用 pnpm)
pnpm install

# 开发模式 (监听文件变化)
pnpm dev

# 构建/生成 README
pnpm build
```

## 架构

**模板驱动的内容生成系统：**

1. `readme.template.md` - 包含 HTML 注释占位符的模板文件
2. `index.ts` - 主入口，读取模板并替换占位符，生成 `readme.md` 和 `index.html`
3. `constants.ts` - 定义占位符标记（如 `<!-- opensource_dashboard:active -->`）
4. `config.ts` - 配置开源项目列表、motto、GitHub 用户名、xlog 用户名等

**数据流：**
- GitHub API: 获取 starred repos、开源项目详情
- xLog API (`apis/xlog.ts`): 通过 Crossbell indexer 获取博客文章
- 模板替换后输出到 `readme.md`，同时通过 markdown-it 渲染为 `index.html`

## 配置说明

在 `config.ts` 中修改：
- `opensource.active`: 活跃的开源项目列表
- `opensource.toys`: 个人玩具项目配置
- `github.name`: GitHub 用户名
- `xlog`: xLog 用户名
- `motto`: 页面底部 motto

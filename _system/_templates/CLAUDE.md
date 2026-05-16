# CLAUDE.md — 子库速查

> **所属大库**: Soara知识库
> **领域**: 领域标签
> **版本**: v3.8

---

## 初始化检查清单

创建子库后，请修改以下文件：

- [ ] `.claude.json` - 修改 `name`、`description`、`area`
- [ ] `CLAUDE.md` - 修改标题和领域描述
- [ ] `rules/local.md` - 添加领域特定的标签和规则

---

## 快速命令

| 命令 | 用途 |
|------|------|
| `compile 子库名称` | 编译本子库 |
| `health 子库名称` | 健康检查 |
| `query <问题> --sub 子库名称` | 查询本子库 |

---

## 目录结构

```
wiki/子库名称/
├── raw/              ← 源文件（分拣后接收）
├── wiki/
│   ├── index.md      ← 概念索引
│   ├── log.md        ← 操作日志
│   ├── concepts/     ← 概念页
│   ├── entities/     ← 实体页
│   ├── queries/      ← 查询记录
│   └── comparisons/  ← 对比分析
└── rules/
    └── local.md      ← 子库扩展规则
```

---

*此文件由 AI 自动生成，请根据实际情况修改*

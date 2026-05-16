# 输出规范

## 概念页模板
必须包含：`# 概念名`、`## 核心定义`、`## 关键特性`、`## 参考文献`
可选：详细阐述、五步分析章节

## 实体页模板
```yaml
---
title: 实体名
type: entity
category: person/location/organization/product/event/other
related_concepts: ["[[../concepts/概念]]"]
---
# 实体名
## 简介
## 出现位置
```

## 对比页模板
```yaml
---
title: A vs B
type: comparison
concepts: ["[[A]]","[[B]]"]
similarity_score: 0.0-1.0
status: draft/confirmed
---
# 对比
## 相同点
## 不同点（表格）
## 结论
```

## 涌现笔记模板
```yaml
---
title: 标题
type: emergence
trigger: manual/auto
related_subs: [子库]
related_concepts: ["[[wiki/子库/concepts/概念]]"]
emergence_confidence: 0-1
testable_hypothesis: "..."
confirmed: pending/confirmed/rejected
---
# 标题
## 触发背景
## 类比/连接发现
## 创新组合
## 待验证假设
## 影响评估
```

## 源文件 YAML（子库 raw/）
```yaml
---
title: 文件标题
source_type: user_upload/web_fetch
status: pending/sorted/compiled
sorted: true
target: 子库名
sorted_date: YYYY-MM-DD
content_hash: "md5"
compile_date: YYYY-MM-DD
---
```

## 日志格式
`### [YYYY-MM-DD HH:MM:SS] {操作类型} - {用户名}`

## 健康指标
（见第五节）

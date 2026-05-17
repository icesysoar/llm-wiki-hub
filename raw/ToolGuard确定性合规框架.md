---
type: guide
title: ToolGuard确定性合规框架
status: raw
source_type: web_fetch
created: 2026-05-14
content_hash: "84ba6400c4da"
---

# ToolGuard: 确定性合规框架

## 核心问题

把业务策略塞进Prompt里靠LLM"尽力遵守"，结果总是：
- **不可靠**: 不同调用场景下执行结果不一致
- **难追溯**: 违规行为发生后难以定位具体条款
- **难规模化**: 策略增多，Prompt愈发臃肿
- **无前置拦截**: 违规调用在执行后才被发现

## ToolGuard核心原理

**编译时 + 运行时双重保障**:

```
策略文档 → ToolGuardSpec规范 → Python守卫代码 → 运行时拦截
(编译时)     (编译时)            (编译时)          (运行时)
```

### 三步流程

1. **策略解析(编译时)**: 输入策略文档和工具定义，自动生成ToolGuardSpec
2. **代码生成(编译时)**: 将规范转化为Python守卫函数 + 测试用例
3. **运行时拦截**: 工具调用前执行守卫函数，违规直接抛出PolicyViolationException

## 核心优势: 确定性

- 不依赖LLM的临场判断
- 策略定义清晰 → 守卫代码严格执行
- 所有合规/违规行为都可追溯、可审计

## 多场景兼容

| 工具形态 | 适配方式 |
|----------|----------|
| 普通Python函数 | ToolFunctionsInvoker |
| 类方法工具 | ToolMethodsInvoker |
| LangChain工具 | LangchainToolInvoker |
| OpenAPI接口 | OpenAPI规范转换 |
| MCP服务工具 | mcp_tools_to_openapi |

## 适用场景

- **金融AI Agent**: 管控交易工具，禁止越权操作
- **办公AI Agent**: 限制敏感文件操作
- **工业AI Agent**: 拦截危险参数、非法控制指令
- **客服AI Agent**: 遵守话术规范、数据隐私规则

## 来源

- EMNLP 2025论文: "Towards Enforcing Company Policy Adherence in Agentic Workflows"
- GitHub: https://github.com/AgentToolkit/toolguard

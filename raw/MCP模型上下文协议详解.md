---
type: guide
title: MCP模型上下文协议详解
status: raw
source_type: web_fetch
created: 2026-05-14
content_hash: "b9a5ba93d69a"
---

# MCP模型上下文协议详解

## MCP是什么

MCP(Model Context Protocol，模型上下文协议)是Anthropic 2024年11月推出的开放协议，旨在通过标准化接口连接大语言模型与外部数据源(文件、数据库、API)和工具。

**核心目标**: 让大语言模型不仅能生成文本，还能安全、动态地访问和操作本地及远程资源。

**类比**: 相当于大模型的"HTTP协议"或"USB-C接口"。

## MCP架构

### 五大组成部分

| 组件 | 说明 |
|------|------|
| **MCP Hosts** | 大模型应用程序，如Cursor、Claude Desktop、Cline |
| **MCP Clients** | 在Hosts内维护与Server之间连接的客户端 |
| **MCP Servers** | 通过标准化协议提供上下文、工具和提示 |
| **Local Data Sources** | 本地文件、数据库和API |
| **Remote Services** | 外部文件、数据库和API |

### 三者关系

- **主机与客户端**: 主机内部包含MCP客户端，一个主机可同时运行多个客户端
- **主机与服务器**: 主机通过客户端向服务器发送指令，服务器执行后返回结果
- **客户端与服务器**: 客户端翻译传输需求，服务器被动接受并满足需求

## MCP通信机制

### 1. stdio传输

- 客户端将MCP服务器作为子进程启动
- 服务器从标准输入(stdin)读取消息，发送到标准输出(stdout)
- 消息由换行符分隔

### 2. HTTP with SSE

- 服务器作为独立进程运行，可处理多个客户端连接
- 提供SSE端点(建立连接)和HTTP POST端点(发送消息)

### 3. Streamable HTTP (推荐)

- 通过统一端点(如/message)按需升级为流式传输
- 支持会话恢复，兼容标准HTTP协议
- 允许服务器无状态运行，降低连接压力

## MCP Server核心能力组件

| 组件 | 说明 |
|------|------|
| **Prompts(提示模板)** | 指导和语言模型交互的预定义模板或指令 |
| **Resources(资源库)** | 结构化的数据或内容，为模型提供额外上下文 |
| **Tools(工具集)** | 允许模型执行或检索信息的函数 |

## MCP Server开发

### 使用MCP Inspector调试

```bash
npx @modelcontextprotocol/inspector <command>
```

### 集成方式

| 方式 | 适用场景 |
|------|----------|
| stdio | 本地开发、简单集成 |
| HTTP with SSE | 需要多客户端连接 |
| Streamable HTTP | 生产环境、推荐方式 |

## MCP的价值

### 1. 数据无缝对接

- 直接对接本地及外部数据库
- 数据实时更新
- 数据保密性保障

### 2. 工具调用标准化

- 统一的工具调用格式
- 无需为每个模型单独适配
- 降低跨工具协作成本

### 3. 预设提示词模板

- 开发者提前写好最佳实践模板
- 终端用户只需填少量变量即可复用

## 与其他协议的关系

| 协议 | 提出者 | 用途 |
|------|--------|------|
| **MCP** | Anthropic | 模型与工具/数据的连接标准 |
| **A2A** | Google | Agent之间的协作协议 |
| **Function Calling** | 各厂商 | 单模型工具调用(格式不统一) |

## 生态发展

- **2024年11月**: Anthropic发布MCP
- **2025年**: OpenAI宣布支持MCP
- **2025年底**: 数千个MCP服务器
- **治理**: 捐献给Linux Foundation

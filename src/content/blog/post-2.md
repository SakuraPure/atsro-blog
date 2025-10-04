---
title: "深入Astro：View Transitions的魔力"
description: "聚焦模式的核心技术揭秘。了解 Astro 的 View Transitions API 如何以声明式的方式实现平滑的页面过渡动画。"
publishDate: "2024-10-05"
tags: ["Astro", "动画", "性能"]
---

Astro 的 View Transitions 是一个游戏规则改变者。

在过去，实现类似“聚焦模式”的 `morphing` 动画需要复杂的 JavaScript 动画库和状态管理。现在，我们只需要给两个不同页面上的元素赋予相同的 `transition:name`，Astro 就会自动处理剩下的事情。
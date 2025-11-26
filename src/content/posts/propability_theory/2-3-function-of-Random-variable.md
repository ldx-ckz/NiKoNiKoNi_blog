---
title: 2.3 随机变量的函数
pubDate: 2025-11-26
pinned: false
description: Probability Theory note
published: 2025-11-26 
tags: [math,probability theory,notes]
category: Probability Theory
licenseName: "Unlicensed"
author: nikonikoni
draft: false
---
# 2.3 随机变量的函数

## 随机变量函数的定义
- 设$Y = g(X)$，其中$g$是实值函数
- $Y$也是一个随机变量

## 函数分布列的计算
- **一般公式**：
  $$p_Y(y) = \sum_{\{x|g(x)=y\}} p_X(x)$$
- **特殊情况**：$Y = |X|$，$Z = X^2$等

## 期望规则
- **基本公式**：$E[g(X)] = \sum\limits_{x} g(x)p_X(x)$
- **验证**：通过$Y = g(X)$的分布列定义推导得出
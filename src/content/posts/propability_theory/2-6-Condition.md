---
title: 2.6 条件
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
# 2.6 条件

## 条件分布列的定义

### 给定事件的条件分布
- $p_{X|A}(x) = P(X = x | A) = \dfrac{P(\{X=x\} \cap A)}{P(A)}$
- 满足分布列的性质：$\sum\limits_{x} p_{X|A}(x) = 1$

### 给定随机变量的条件分布
- $p_{X|Y}(x|y) = P(X = x | Y = y) = \dfrac{p_{X,Y}(x,y)}{p_Y(y)}$
- 固定$y$时，$p_{X|Y}(x|y)$是$x$的合格分布列

## 联合分布列的计算
- $p_{X,Y}(x,y) = p_Y(y)p_{X|Y}(x|y)$
- $p_{X,Y}(x,y) = p_X(x)p_{Y|X}(y|x)$
- 类似于第1章中的乘法规则

## 全概率公式的应用
- $p_X(x) = \sum\limits_{y} p_Y(y)p_{X|Y}(x|y)$
- 用于通过条件分布求边缘分布
- 
## 条件期望

### 定义
- **给定事件**：$E[X|A] = \sum\limits_{x} xp_{X|A}(x)$
- **给定随机变量**：$E[X|Y=y] = \sum\limits_{x} xp_{X|Y}(x|y)$
- **随机变量函数**：$E[g(X)|A] = \sum\limits_{x} g(x)p_{X|A}(x)$

### 全期望定理
1. $E[X] = \sum\limits_{i=1}^{n} P(A_i)E[X|A_i]$
2. $E[X|B] = \sum\limits_{i=1}^{n} P(A_i|B)E[X|A_i \cap B]$
3. $E[X] = \sum\limits_{y} p_Y(y)E[X|Y=y]$

**核心思想**：无条件平均可以由条件平均再求平均得到

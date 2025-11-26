---
title: 2.2 分布列
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
# 2.2 分布列

## 分布列的定义
- **分布列**：$p_X(x) = P(X = x)$
- 表示随机变量$X$取值为$x$的概率
- 省去花括号的简写：$P(X = x)$代替$P(\{X = x\})$

## 分布列的性质
- **非负性**：$p_X(x) \geq 0$ 对所有$x$
- **归一性**：$\sum\limits_{x} p_X(x) = 1$

## 分布列的计算方法
1. 找出与事件$\{X = x\}$相对应的所有试验结果
2. 将相应的试验结果的概率相加得到$p_X(x)$

## 常见离散分布

### 伯努利随机变量
- **描述**：单次伯努利试验（成功/失败）
- **分布列**：
  $$p_X(k) = \begin{cases} 
  p, & k = 1 \\
  1-p, & k = 0 
  \end{cases}$$
- **应用**：两状态系统的建模

### 二项随机变量
- **描述**：$n$次独立伯努利试验中成功的次数
- **参数**：$n$（试验次数），$p$（单次成功概率）
- **分布列**：
  $$p_X(k) = \binom{n}{k}p^k(1-p)^{n-k}, \quad k = 0,1,\cdots,n$$
- **归一性验证**：$\sum\limits_{k=0}^{n} \binom{n}{k}p^k(1-p)^{n-k} = 1$

### 几何随机变量
- **描述**：独立试验序列中直到第一次成功所需的试验次数
- **分布列**：
  $$p_X(k) = (1-p)^{k-1}p, \quad k = 1,2,\cdots$$
- **归一性验证**：$\sum\limits_{k=1}^{\infty}(1-p)^{k-1}p = 1$

### 泊松随机变量
- **描述**：单位时间/空间内随机事件发生的次数
- **参数**：$\lambda > 0$（平均发生率）
- **分布列**：
  $$p_X(k) = e^{-\lambda}\frac{\lambda^k}{k!}, \quad k = 0,1,2,\cdots$$
- **归一性验证**：$\sum\limits_{k=0}^{\infty} e^{-\lambda}\frac{\lambda^k}{k!} = 1$
- **与二项分布关系**：当$n \to \infty$，$p \to 0$，$np = \lambda$时，二项分布近似于泊松分布
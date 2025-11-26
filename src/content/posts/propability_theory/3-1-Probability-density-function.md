---
title: 3.1 连续随机变量和概率密度函数
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
# 3.1 连续随机变量和概率密度函数

## 基本概念

### 连续随机变量
- 取值于连续区域的随机变量
- 概率规律由**概率密度函数(PDF)**描述

### 概率密度函数(PDF)
对于随机变量$X$，若存在非负函数$f_X$，使得对任意实数轴上的集合$B$：
$$P(X \in B) = \int_B f_X(x) dx$$
则$X$称为连续随机变量，$f_X$称为其PDF。

### PDF的性质
1. **非负性**：$f_X(x) \geq 0$ 对所有$x$成立
2. **归一化条件**：$\int_{-\infty}^{\infty} f_X(x) dx = 1$
3. **区间概率**：$P(a \leq X \leq b) = \int_a^b f_X(x) dx$
4. **单点概率**：$P(X = a) = 0$
5. **局部近似**：对于小$\delta > 0$，$P([x, x+\delta]) \approx f_X(x) \cdot \delta$

## 期望与方差

### 期望定义
$$E[X] = \int_{-\infty}^{\infty} x f_X(x) dx$$

### 期望规则
对于函数$g(X)$：
$$E[g(X)] = \int_{-\infty}^{\infty} g(x) f_X(x) dx$$

### 方差定义
$$\text{var}(X) = E[(X - E[X])^2] = \int_{-\infty}^{\infty} (x - E[X])^2 f_X(x) dx$$

### 方差公式
$$\text{var}(X) = E[X^2] - (E[X])^2$$

### 线性变换
若$Y = aX + b$，则：
$$E[Y] = aE[X] + b, \quad \text{var}(Y) = a^2 \text{var}(X)$$

## 特殊分布

### 均匀随机变量
**PDF**：
$$f_X(x) = 
\begin{cases}
\frac{1}{b-a}, & a \leq x \leq b \\
0, & \text{其他}
\end{cases}$$

**期望推导**：
$$E[X] = \int_a^b x \cdot \frac{1}{b-a} dx = \frac{1}{b-a} \left[ \frac{1}{2}x^2 \right]_a^b = \frac{a+b}{2}$$

**方差推导**：
$$E[X^2] = \int_a^b x^2 \cdot \frac{1}{b-a} dx = \frac{a^2 + ab + b^2}{3}$$
$$\text{var}(X) = E[X^2] - (E[X])^2 = \frac{(b-a)^2}{12}$$

### 指数随机变量
**PDF**：
$$f_X(x) = 
\begin{cases}
\lambda e^{-\lambda x}, & x \geq 0 \\
0, & \text{其他}
\end{cases}$$

**期望推导（分部积分）**：
$$E[X] = \int_0^\infty x \lambda e^{-\lambda x} dx = \frac{1}{\lambda}$$

**方差推导**：
$$E[X^2] = \int_0^\infty x^2 \lambda e^{-\lambda x} dx = \frac{2}{\lambda^2}$$
$$\text{var}(X) = E[X^2] - (E[X])^2 = \frac{1}{\lambda^2}$$

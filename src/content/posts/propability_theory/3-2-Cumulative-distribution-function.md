---
title: 3.2 分布函数
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
# 3.2 分布函数

## 分布函数定义

### 累积分布函数(CDF)
对于随机变量$X$，其CDF定义为：
$$F_X(x) = P(X \leq x)$$

- **离散情况**：$F_X(x) = \sum_{k \leq x} p_X(k)$
- **连续情况**：$F_X(x) = \int_{-\infty}^x f_X(t) dt$

## CDF的性质

1. **单调非减**：若$x \leq y$，则$F_X(x) \leq F_X(y)$
2. **极限行为**：
   $$\lim_{x \to -\infty} F_X(x) = 0, \quad \lim_{x \to \infty} F_X(x) = 1$$
3. **离散随机变量**：$F_X(x)$为阶梯函数
4. **连续随机变量**：$F_X(x)$为连续函数

## CDF与PDF的关系

### 离散情况（整数值）
$$F_X(k) = \sum_{i=-\infty}^k p_X(i), \quad p_X(k) = F_X(k) - F_X(k-1)$$

### 连续情况
$$F_X(x) = \int_{-\infty}^x f_X(t) dt, \quad f_X(x) = \frac{dF_X}{dx}(x) \quad (\text{在可微点})$$

## 几何与指数随机变量的CDF

### 几何随机变量（参数$p$）
$$F_{\text{geo}}(n) = 1 - (1-p)^n, \quad n = 1, 2, \dots$$

### 指数随机变量（参数$\lambda$）
$$F_{\text{exp}}(x) = 
\begin{cases}
1 - e^{-\lambda x}, & x > 0 \\
0, & x \leq 0
\end{cases}$$

### 两者关系推导

令$\delta = -\frac{\ln(1-p)}{\lambda}$，则$e^{-\lambda \delta} = 1-p$

在$x = n\delta$处：
$$F_{\text{exp}}(n\delta) = 1 - e^{-\lambda n\delta} = 1 - (1-p)^n = F_{\text{geo}}(n)$$

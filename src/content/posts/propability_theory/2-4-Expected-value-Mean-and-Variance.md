---
title: 2.4 期望、均值和方差
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
# 2.4 期望、均值和方差

## 期望的定义与解释
- **定义**：$E[X] = \sum\limits_{x} xp_X(x)$
- **物理解释**：质量分布的重心
- **频率解释**：大量重复试验的平均值

## 期望的存在性
- 当$\sum\limits_{x} |x|p_X(x) < \infty$时，期望有确切定义
- 本书默认所涉随机变量的期望都有定义

## 方差的定义
- **方差**：$\text{var}(X) = E[(X - E[X])^2]$
- **标准差**：$\sigma_X = \sqrt{\text{var}(X)}$

## 方差的计算方法
1. **直接法**：$\text{var}(X) = \sum\limits_{x} (x - E[X])^2 p_X(x)$
2. **矩表达法**：$\text{var}(X) = E[X^2] - (E[X])^2$

## 矩的定义
- **$n$阶矩**：$E[X^n] = \sum\limits_{x} x^n p_X(x)$
- 均值就是一阶矩：$E[X]$

## 线性函数的性质
对于$Y = aX + b$：
- **期望**：$E[Y] = aE[X] + b$
- **方差**：$\text{var}(Y) = a^2\text{var}(X)$

## 常见分布的均值和方差

### 伯努利分布
- $E[X] = 1 \cdot p + 0 \cdot (1-p) = p$
- $E[X^2] = 1^2 \cdot p + 0^2 \cdot (1-p) = p$
- $\text{var}(X) = E[X^2] - (E[X])^2 = p - p^2 = p(1-p)$
- 
### 离散均匀分布
- 取值范围：$a, a+1, \cdots, b$
- $E[X] = \frac{a+b}{2}$
- $\text{var}(X) = \frac{(b-a)(b-a+2)}{12}$

### 泊松分布
- $E[X] = \lambda$
- $\text{var}(X) = \lambda$

## 期望运算的注意事项
- 一般情况下$E[g(X)] \neq g(E[X])$
- 反例：平均速度的倒数不等于平均时间的倒数
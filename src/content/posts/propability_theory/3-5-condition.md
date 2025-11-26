---
title: 3.5 条件
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
# 3.5 条件

## 以事件为条件的随机变量

### 条件PDF定义
给定事件$A$（$P(A) > 0$），条件PDF $f_{X|A}$满足：
$$P(X \in B | A) = \int_B f_{X|A}(x) dx$$

### 特殊情况
若$A = \{X \in A\}$，则：
$$f_{X|A}(x) = 
\begin{cases}
\frac{f_X(x)}{P(X \in A)}, & x \in A \\
0, & \text{其他}
\end{cases}$$

### 全概率公式
若$A_1, \dots, A_n$为分割，则：
$$f_X(x) = \sum_{i=1}^n P(A_i) f_{X|A_i}(x)$$

## 一个随机变量对另一个随机变量的条件

### 条件PDF定义
给定$Y = y$（$f_Y(y) > 0$）：
$$f_{X|Y}(x|y) = \frac{f_{X,Y}(x,y)}{f_Y(y)}$$

### 归一化性质
$$\int_{-\infty}^{\infty} f_{X|Y}(x|y) dx = 1$$

### 局部解释
对于小$\delta_1, \delta_2 > 0$：
$$P(x \leq X \leq x+\delta_1 | Y = y) \approx f_{X|Y}(x|y) \cdot \delta_1$$

### 乘法规则
$$f_{X,Y}(x,y) = f_Y(y) f_{X|Y}(x|y) = f_X(x) f_{Y|X}(y|x)$$

## 条件期望

### 条件期望定义
- 给定事件$A$：$E[X|A] = \int_{-\infty}^{\infty} x f_{X|A}(x) dx$
- 给定$Y = y$：$E[X|Y=y] = \int_{-\infty}^{\infty} x f_{X|Y}(x|y) dx$

### 期望规则
$$E[g(X)|A] = \int_{-\infty}^{\infty} g(x) f_{X|A}(x) dx$$
$$E[g(X)|Y=y] = \int_{-\infty}^{\infty} g(x) f_{X|Y}(x|y) dx$$

### 全期望定理

**离散情况**：
$$E[X] = \sum_{i=1}^n P(A_i) E[X|A_i]$$

**推导**：
由$f_X(x) = \sum_{i=1}^n P(A_i) f_{X|A_i}(x)$，两边乘以$x$并积分得证。

**连续情况**：
$$E[X] = \int_{-\infty}^{\infty} E[X|Y=y] f_Y(y) dy$$

**推导**：
$$E[X] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x f_{X,Y}(x,y) dx dy = \int_{-\infty}^{\infty} E[X|Y=y] f_Y(y) dy$$

## 独立性

### 独立性定义
$X$和$Y$独立当且仅当：
$$f_{X,Y}(x,y) = f_X(x) f_Y(y) \quad \forall x,y$$

### 等价条件
- $f_{X|Y}(x|y) = f_X(x)$（对于$f_Y(y) > 0$）
- $f_{Y|X}(y|x) = f_Y(y)$（对于$f_X(x) > 0$）

### 独立性性质
1. $E[g(X)h(Y)] = E[g(X)] E[h(Y)]$
2. $\text{var}(X+Y) = \text{var}(X) + \text{var}(Y)$

### 多个变量独立
$X, Y, Z$相互独立当且仅当：
$$f_{X,Y,Z}(x,y,z) = f_X(x) f_Y(y) f_Z(z) \quad \forall x,y,z$$

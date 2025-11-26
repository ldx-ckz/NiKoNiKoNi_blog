---
title: 3.4 多个随机变量的联合概率密度
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
# 3.4 多个随机变量的联合概率密度

## 联合连续随机变量

### 联合PDF定义
若存在联合PDF $f_{X,Y}(x,y)$，使得对任意平面集合$B$：
$$P((X,Y) \in B) = \iint_B f_{X,Y}(x,y) dx dy$$

### 归一化条件
$$\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x,y) dx dy = 1$$

### 局部近似
对于小$\delta > 0$：
$$P(a \leq X \leq a+\delta, c \leq Y \leq c+\delta) \approx f_{X,Y}(a,c) \cdot \delta^2$$

## 边缘PDF

### 边缘PDF定义
- $X$的边缘PDF：$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) dy$
- $Y$的边缘PDF：$f_Y(y) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) dx$

**推导**：从联合概率到边缘概率的积分转换。

## 联合分布函数

### 联合CDF定义
$$F_{X,Y}(x,y) = P(X \leq x, Y \leq y) = \int_{-\infty}^x \int_{-\infty}^y f_{X,Y}(s,t) ds dt$$

### 与联合PDF的关系
$$f_{X,Y}(x,y) = \frac{\partial^2 F_{X,Y}}{\partial x \partial y}(x,y) \quad (\text{在连续点})$$

## 期望

### 函数期望
对于函数$g(X,Y)$：
$$E[g(X,Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x,y) f_{X,Y}(x,y) dx dy$$

### 线性函数期望
$$E[aX + bY + c] = aE[X] + bE[Y] + c$$

## 多个随机变量

### 三个随机变量
联合PDF为$f_{X,Y,Z}(x,y,z)$，边缘PDF通过积分得到。

### 期望规则推广
$$E[g(X,Y,Z)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x,y,z) f_{X,Y,Z}(x,y,z) dx dy dz$$
 
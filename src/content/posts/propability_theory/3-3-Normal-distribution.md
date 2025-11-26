---
title: 3.3 正态随机变量
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
# 3.3 正态随机变量

## 正态分布定义

### 正态随机变量
**PDF**：
$$f_X(x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-(x-\mu)^2/(2\sigma^2)}$$
其中$\mu$为均值，$\sigma > 0$为标准差。

### 标准正态随机变量
**PDF**：
$$\phi(y) = \frac{1}{\sqrt{2\pi}} e^{-y^2/2}, \quad \text{CDF为} \Phi(y)$$

## 正态分布的性质

### 期望和方差
$$E[X] = \mu, \quad \text{var}(X) = \sigma^2$$

### 线性变换
若$X \sim N(\mu, \sigma^2)$，则$Y = aX + b$也服从正态分布：
$$E[Y] = a\mu + b, \quad \text{var}(Y) = a^2 \sigma^2$$

### 标准化
若$X \sim N(\mu, \sigma^2)$，则：
$$Y = \frac{X - \mu}{\sigma} \sim N(0,1)$$

## 重要推导

### 归一化条件证明
需要证明：$\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}\sigma} e^{-(x-\mu)^2/(2\sigma^2)} dx = 1$

**证明**：
令$I = \int_{-\infty}^{\infty} e^{-x^2/2} dx$，考虑$I^2$：
$$I^2 = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^2+y^2)/2} dx dy$$

转换为极坐标：$x = r\cos\theta$, $y = r\sin\theta$, $dx dy = r dr d\theta$
$$I^2 = \int_0^{2\pi} \int_0^{\infty} e^{-r^2/2} r dr d\theta = 2\pi$$

所以$I = \sqrt{2\pi}$，归一化条件成立。

### 方差推导
$$\text{var}(X) = \int_{-\infty}^{\infty} (x-\mu)^2 \frac{1}{\sqrt{2\pi}\sigma} e^{-(x-\mu)^2/(2\sigma^2)} dx$$

令$y = \frac{x-\mu}{\sigma}$，则：
$$\text{var}(X) = \frac{\sigma^2}{\sqrt{2\pi}} \int_{-\infty}^{\infty} y^2 e^{-y^2/2} dy = \sigma^2$$

## 概率计算

### 使用标准正态分布表
$$P(X \leq x) = \Phi\left( \frac{x - \mu}{\sigma} \right)$$

### 负值处理
$$\Phi(-y) = 1 - \Phi(y)$$
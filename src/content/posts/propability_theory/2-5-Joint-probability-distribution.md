---
title: 2.5 多个随机变量的联合分布列
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
# 2.5 多个随机变量的联合分布列

## 联合分布列的定义
- $p_{X,Y}(x,y) = P(X = x, Y = y)$
- 描述两个随机变量同时取特定值的概率

## 边缘分布列
- $p_X(x) = \sum\limits_{y} p_{X,Y}(x,y)$
- $p_Y(y) = \sum\limits_{x} p_{X,Y}(x,y)$
- **计算方法**：表格的行和与列和

## 随机变量函数的期望

- **一般函数**：$E[g(X,Y)] = \sum\limits_{x} \sum\limits_{y} g(x,y)p_{X,Y}(x,y)$
- **线性函数**：$E[aX + bY + c] = aE[X] + bE[Y] + c$

## 多个随机变量的推广
- **三个随机变量**：$p_{X,Y,Z}(x,y,z) = P(X = x, Y = y, Z = z)$
- **边缘分布**：$p_{X,Y}(x,y) = \sum\limits_{z} p_{X,Y,Z}(x,y,z)$
- **线性函数期望**：$E[aX + bY + cZ + d] = aE[X] + bE[Y] + cE[Z] + d$

## 一般线性组合
对于$X_1, X_2, \cdots, X_n$和常数$a_1, a_2, \cdots, a_n$：
$$E\left[\sum_{i=1}^n a_iX_i\right] = \sum_{i=1}^n a_iE[X_i]$$

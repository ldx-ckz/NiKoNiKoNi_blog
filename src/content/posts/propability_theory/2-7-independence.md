---
title: 2.7 独立性
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
# 2.7 独立性

## 随机变量与事件的独立性
- $X$独立于$A$当且仅当：$p_{X|A}(x) = p_X(x)$ 对所有$x$成立
- 等价条件：$P(X=x \text{ 和 } A) = p_X(x)P(A)$

## 随机变量间的独立性
- $X$和$Y$独立当且仅当：$p_{X,Y}(x,y) = p_X(x)p_Y(y)$ 对所有$x,y$成立
- 等价条件：$p_{X|Y}(x|y) = p_X(x)$ 对所有$x$和$p_Y(y)>0$的$y$成立

## 条件独立性
- 在给定事件$A$下，$X$和$Y$条件独立当且仅当：
  $$p_{X,Y|A}(x,y) = p_{X|A}(x)p_{Y|A}(y)$$
- 等价条件：$p_{X|Y,A}(x|y) = p_{X|A}(x)$

## 独立随机变量的重要性质

### 期望性质
1. **乘积期望**：$E[XY] = E[X]E[Y]$
2. **函数独立性**：对任意函数$g$和$h$，有
   $$E[g(X)h(Y)] = E[g(X)]E[h(Y)]$$

### 方差性质
- **方差可加性**：$\text{var}(X + Y) = \text{var}(X) + \text{var}(Y)$
- **推导关键**：$E[\hat{X}\hat{Y}] = E[\hat{X}]E[\hat{Y}] = 0$，其中$\hat{X} = X - E[X]$

## 多个随机变量的独立性
- $X_1, X_2, \cdots, X_n$相互独立当且仅当：
  $$p_{X_1,X_2,\cdots,X_n}(x_1,x_2,\cdots,x_n) = \prod_{i=1}^n p_{X_i}(x_i)$$
- 独立随机变量的函数也独立

## 独立随机变量和的性质
- 对于相互独立的$X_1, \cdots, X_n$：
  $$\text{var}\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n \text{var}(X_i)$$

## 应用实例

### 样本均值的性质
- 定义：$S_n = \dfrac{X_1 + \cdots + X_n}{n}$
- 对于独立同分布的$X_1, \cdots, X_n$：
  - $E[S_n] = E[X]$
  - $\text{var}(S_n) = \dfrac{\text{var}(X)}{n}$

### 二项分布的方差
- $X \sim \text{Binomial}(n,p)$，可表示为$n$个独立伯努利随机变量之和
- $\text{var}(X) = np(1-p)$

### 泊松分布的方差
- 作为二项分布的极限，$\text{var}(X) = \lambda$

## 独立性与条件独立性的关系
- 独立性不蕴含条件独立性
- 条件独立性不蕴含独立性
- 两者是不同概念，互不包含
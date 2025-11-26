---
title: 3.6 连续贝叶斯准则
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
# 3.6 连续贝叶斯准则

## 贝叶斯准则

### 连续随机变量的贝叶斯公式
$$f_{X|Y}(x|y) = \frac{f_X(x) f_{Y|X}(y|x)}{f_Y(y)} = \frac{f_X(x) f_{Y|X}(y|x)}{\int_{-\infty}^{\infty} f_X(t) f_{Y|X}(y|t) dt}$$

**推导**：
从乘法规则：$f_{X,Y}(x,y) = f_X(x) f_{Y|X}(y|x) = f_Y(y) f_{X|Y}(x|y)$
因此：$f_{X|Y}(x|y) = \frac{f_X(x) f_{Y|X}(y|x)}{f_Y(y)}$

## 离散未观察变量

### 离散随机变量的贝叶斯公式
对于离散随机变量$N$和连续随机变量$Y$：
$$P(N=n|Y=y) = \frac{p_N(n) f_{Y|N}(y|n)}{f_Y(y)} = \frac{p_N(n) f_{Y|N}(y|n)}{\sum_i p_N(i) f_{Y|N}(y|i)}$$

### 事件的条件概率
对于事件$A$：
$$P(A|Y=y) = \frac{P(A) f_{Y|A}(y)}{P(A) f_{Y|A}(y) + P(A^c) f_{Y|A^c}(y)}$$

## 基于离散观察值的推断

### 反解公式
$$f_{Y|A}(y) = \frac{f_Y(y) P(A|Y=y)}{P(A)} = \frac{f_Y(y) P(A|Y=y)}{\int_{-\infty}^{\infty} f_Y(t) P(A|Y=t) dt}$$
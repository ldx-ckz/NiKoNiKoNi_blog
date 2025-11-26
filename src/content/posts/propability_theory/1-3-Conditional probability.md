---
title: 1.3 条件概率
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
# 1.3 条件概率

## 定义
- **条件概率**（$P(B) > 0$）：
  $$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
- 等可能模型：
  $$P(A \mid B) = \frac{\text{事件}A \cap B\text{的结果数}}{\text{事件}B\text{的结果数}}$$

## 性质
- $P(\cdot \mid B)$ 是合格的概率律
- 满足非负性、归一化、可加性
- 可将 $B$ 视为新的样本空间

## 乘法规则
- **两个事件**：
  $$P(A \cap B) = P(A)P(B \mid A) = P(B)P(A \mid B)$$
- **多个事件**：
  $$P(\bigcap_{i=1}^n A_i) = P(A_1)P(A_2 \mid A_1)P(A_3 \mid A_1 \cap A_2) \cdots P(A_n \mid \bigcap_{i=1}^{n-1} A_i)$$

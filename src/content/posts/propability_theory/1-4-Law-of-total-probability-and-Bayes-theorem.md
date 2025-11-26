---
title: 1.4 全概率定理和贝叶斯准则
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
# 1.4 全概率定理和贝叶斯准则

## 全概率定理
设 $A_1, A_2, \dots, A_n$ 是样本空间的分割，且 $P(A_i) > 0$，则：
$$P(B) = \sum_{i=1}^n P(A_i)P(B \mid A_i)$$

## 贝叶斯准则
在相同条件下，若 $P(B) > 0$，则：
$$P(A_i \mid B) = \frac{P(A_i)P(B \mid A_i)}{\sum_{j=1}^n P(A_j)P(B \mid A_j)}$$

## 因果推理
- **先验概率**：$P(A_i)$
- **后验概率**：$P(A_i \mid B)$
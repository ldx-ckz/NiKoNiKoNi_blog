---
title: 1.2 概率模型
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
# 1.2 概率模型

## 基本构成
- **样本空间** $\Omega$：试验的所有可能结果集合
- **事件**：样本空间的子集
- **概率律** $P(A)$：为事件 $A$ 分配一个数，满足：

## 概率公理
1. **非负性**：$P(A) \geq 0$
2. **可加性**：
   - 若 $A \cap B = \emptyset$，则 $P(A \cup B) = P(A) + P(B)$
   - 对互不相容序列：$P(\bigcup_{i=1}^{\infty} A_i) = \sum_{i=1}^{\infty} P(A_i)$
3. **归一化**：$P(\Omega) = 1$

## 概率律性质
- 若 $A \subset B$，则 $P(A) \leq P(B)$
- $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- $P(A \cup B) \leq P(A) + P(B)$
- $P(A \cup B \cup C) = P(A) + P(A^c \cap B) + P(A^c \cap B^c \cap C)$
- 一般形式：$P(\bigcup_{i=1}^n A_i) \leq \sum_{i=1}^n P(A_i)$

## 离散概率模型
- **离散概率律**：
  $$P(A) = \sum_{s_i \in A} P(s_i)$$
- **离散均匀概率律（古典概型）**：
  $$P(A) = \frac{\text{事件}A\text{中结果数}}{n}$$

## 连续概率模型
- 样本空间为连续集合
- 概率律通过度量（长度、面积）定义
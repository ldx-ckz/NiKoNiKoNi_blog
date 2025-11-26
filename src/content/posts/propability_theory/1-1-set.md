---
title: 1.1 集合
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
# 1.1 集合

## 基本概念
- **集合**：由研究对象（元素）组成的整体
- **元素与集合关系**：
  - $x \in S$：$x$ 是 $S$ 的元素
  - $x \notin S$：$x$ 不是 $S$ 的元素
- **空集**：不含任何元素的集合，记作 $\emptyset$
- **集合表示方法**：
  - 列举法：$S = \{x_1, x_2, \dots, x_n\}$
  - 描述法：$S = \{x \mid x \text{ 满足性质 } P\}$
- **可数无限集**：元素可排成无限序列的集合
- **子集**：$S \subset T$ 表示 $S$ 的所有元素都属于 $T$
- **空间**：包含所有感兴趣元素的集合 $\Omega$

## 集合运算
- **补集**：$S^c = \{x \in \Omega \mid x \notin S\}$
- **并集**：$S \cup T = \{x \mid x \in S \text{ 或 } x \in T\}$
- **交集**：$S \cap T = \{x \mid x \in S \text{ 和 } x \in T\}$
- **无限并和交**：
  $$\bigcup_{n=1}^{\infty} S_n = \{x \mid x \in S_n \text{ 对某个 } n\}$$
  $$\bigcap_{n=1}^{\infty} S_n = \{x \mid x \in S_n \text{ 对一切 } n\}$$
- **不相交集合**：$S \cap T = \emptyset$
- **分割**：互不相交的集合组，其并为 $S$

## 集合代数性质
- **交换律**：$S \cup T = T \cup S$，$S \cap T = T \cap S$
- **结合律**：$S \cup (T \cup U) = (S \cup T) \cup U$
- **分配律**：
  $$S \cap (T \cup U) = (S \cap T) \cup (S \cap U)$$
  $$S \cup (T \cap U) = (S \cup T) \cap (S \cup U)$$
- **补集性质**：
  - $(S^c)^c = S$
  - $S \cap S^c = \emptyset$
  - $S \cup \Omega = \Omega$
  - $S \cap \Omega = S$
- **德摩根定律**：
  $$\left( \bigcup_n S_n \right)^c = \bigcap_n S_n^c$$
  $$\left( \bigcap_n S_n \right)^c = \bigcup_n S_n^c$$
---
title: 1.1 集合
pubDate: 2025-11-24
pinned: false
description: Analysis note
published: 2025-11-24
tags: [math,analysis,notes]
category: Analysis
licenseName: "Unlicensed"
author: nikonikoni
draft: false
---
# 1.1 集合

## 1.集合的基本概念

- **集合**：数学中的基本概念，直观理解为"一些东西的总体"
- **元素**：集合中的个体
- **属于**：若 $x$ 是集合 $E$ 的元素，记作 $x \in E$ 或 $E \ni x$
- **不属于**：若 $x$ 不是集合 $E$ 的元素，记作 $x \notin E$

---

## 2.集合的相等

**定义 1.1.1**：两个集合 $A$ 和 $B$ 相等（记作 $A = B$），当且仅当它们的元素完全相同：
$$
(A = B) \Longleftrightarrow (x \in A \Longleftrightarrow x \in B)
$$

---

## 3.逻辑符号说明

| 符号 | 含义 | 说明 |
|------|------|------|
| $\Longleftrightarrow$ | 当且仅当 | 两个命题等价 |
| $\Longrightarrow$ | 蕴含 | 前一个命题成立 ⇒ 后一个命题成立 |
| $\Longleftarrow$ | 反向蕴含 | 后一个命题成立 ⇒ 前一个命题成立 |

---

## 4.集合的表示方法

### 4.1列举法
将所有元素列在花括号中，如：$\{1, 2, 3\}$

### 4.2描述法
用条件描述元素：$\{x \in E : P(x)\}$，表示 $E$ 中满足性质 $P$ 的所有元素

---

## 5.子集与真子集

**定义 1.1.2**：集合 $A$ 是集合 $B$ 的**子集**（记作 $A \subset B$），当且仅当：

$$
(A \subset B) \Longleftrightarrow (x \in A \Longrightarrow x \in B)
$$

也可写作 $B \supseteq A$。

- **真子集**：若 $A \subset B$ 且 $A \neq B$，则称 $A$ 是 $B$ 的真子集

---

## 6.区间与空集

### 6.1有限区间
- **开区间**：$(a, b) = \{x \in \mathbb{R} : a < x < b\}$
- **闭区间**：$[a, b] = \{x \in \mathbb{R} : a \leq x \leq b\}$
- **半开区间**：
  - $[a, b) = \{x \in \mathbb{R} : a \leq x < b\}$
  - $(a, b] = \{x \in \mathbb{R} : a < x \leq b\}$

### 6.2无限区间
- $(-\infty, \infty) = \mathbb{R}$
- $(a, \infty) = \{x \in \mathbb{R} : x > a\}$
- $[a, \infty) = \{x \in \mathbb{R} : x \geq a\}$
- $(-\infty, b) = \{x \in \mathbb{R} : x < b\}$
- $(-\infty, b] = \{x \in \mathbb{R} : x \leq b\}$

### 6.3空集
- **空集**：不含任何元素的集合，记作 $\emptyset$
- **意义**：类比数字0，引入空集便于数学表达与运算



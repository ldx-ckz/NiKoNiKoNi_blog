---
title: 1.5 独立性
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
# 1.5 独立性

## 两个事件的独立性
- **定义**：$P(A \cap B) = P(A)P(B)$
- **等价形式**（$P(B) > 0$）：$P(A \mid B) = P(A)$
- **性质**：若 $A$ 和 $B$ 独立，则 $A$ 和 $B^c$ 也独立

## 条件独立性
- **定义**：$P(A \cap B \mid C) = P(A \mid C)P(B \mid C)$
- **等价形式**（$P(B \cap C) > 0$）：$P(A \mid B \cap C) = P(A \mid C)$
- 独立性与条件独立性互不蕴含

## 一组事件的独立性
事件 $A_1, A_2, \dots, A_n$ 相互独立当且仅当：
$$P(\bigcap_{i \in S} A_i) = \prod_{i \in S} P(A_i) \quad \text{对任意子集 } S \subseteq \{1,2,\dots,n\}$$

**注**：
- 两两独立不蕴含相互独立
- 相互独立要求所有子集满足乘积关系

## 可靠性应用
- **串联系统**：$P(\text{有效}) = \prod_{i=1}^m p_i$
- **并联系统**：$P(\text{有效}) = 1 - \prod_{i=1}^m (1 - p_i)$

## 独立试验与二项概率
- **独立伯努利试验**：每次试验成功概率 $p$，失败概率 $1-p$
- **二项概率**：
  $$p(k) = \binom{n}{k} p^k (1-p)^{n-k}$$
  其中 $\binom{n}{k} = \frac{n!}{k!(n-k)!}$
- **二项公式**：
  $$\sum_{k=0}^n \binom{n}{k} p^k (1-p)^{n-k} = 1$$
---
title: 2.1 实数域的完备性
pubDate: 2025-11-25
pinned: false
description: Analysis note
published: 2025-11-25
tags: [math,analysis,notes]
category: Analysis
licenseName: "Unlicensed"
author: nikonikoni
draft: false
---
# 2.1 实数域的完备性

## 1.戴德金分割

### 1.1定义
将所有实数划分为 $A$, $B$ 两组，满足：
- $A$ 中的每一个数都小于 $B$ 中的每一个数
- 任一实数必属于且仅属于 $A$ 或 $B$ 之一
- $A$, $B$ 均非空集

称这样的划分 $(A, B)$ 为**戴德金分割**，$A$ 称为**下类**，$B$ 称为**上类**。

### 1.2戴德金定理

**定理 2.1.1（戴德金定理）** 实数的分割确定某数为下类和上类的边界。

即：对于任意戴德金分割 $(A, B)$，存在实数 $s$，使得：
- 或是 $s$ 为 $A$ 的最大数（此时 $B$ 无最小数）
- 或是 $s$ 为 $B$ 的最小数（此时 $A$ 无最大数）

**意义**：此定理表达了实数的连续性，是有理数域与实数域的本质区别。

---

## 2.上下确界

### 2.1基本概念
**定义 2.1.2** 设集合 $A \subset \mathbb{R}$：
- $M \in \mathbb{R}$ 是 $A$ 的**上界**：$\forall x \in A (x \leq M)$
- $m \in \mathbb{R}$ 是 $A$ 的**下界**：$\forall x \in A (x \geq m)$
- $A$ 是**有界集**：既有上界又有下界

**定义 2.1.3** 设集合 $A \subset \mathbb{R}$：
- $\alpha = \sup A$（上确界）：$\alpha$ 是 $A$ 的上界，且对 $A$ 的任何上界 $\beta$，有 $\alpha \leq \beta$
- $\alpha = \inf A$（下确界）：$\alpha$ 是 $A$ 的下界，且对 $A$ 的任何下界 $\beta$，有 $\alpha \geq \beta$

### 2.2确界存在定理
**定理 2.1.2（魏尔斯特拉斯定理）** 
- 若数集 $S$ 在上方有界，则 $S$ 的上确界存在
- 若数集 $S$ 在下方有界，则 $S$ 的下确界存在

**证明**（下确界存在性）：
设 $S$ 在下方有界，$a$ 是 $S$ 的一个下界。定义分割 $(A, B)$：
- $A$：所有能作为 $S$ 下界的数的集合
- $B$：其他数的集合

由戴德金定理，存在边界数 $s$。

假设 $s \in B$，则 $s$ 不是 $S$ 的下界，存在 $x \in S$ 使 $x < s$。
取 $b \in (x, s)$，则 $b \in B$（因 $b > x \in S$，不是下界）但 $b < s$，与 $s$ 是 $B$ 的最小元矛盾。

故 $s \in A$ 且是 $A$ 的最大元，即 $S$ 的最大下界（下确界）。

上确界存在性证明类似。

---

## 3.实数域的完备性

### 3.1完备性公理
任何有上界的非空实数集都有在实数域中的上确界。

**意义**：此性质将实数域与有理数域区分开。

**命题 2.1.1** 集合 $\{x \in \mathbb{Q} : x^2 < 2\}$ 在 $\mathbb{Q}$ 中无上确界。

**证明**：
假设有理数 $p/q$ 是其上确界，分两种情况：

1. $(p/q)^2 < 2$：
   令 $r = (2 - p^2/q^2)(2 + 2p/q)^{-1}$，有 $0 < r < 2$
   计算得 $(p/q + r)^2 < 2$，与 $p/q$ 是上确界矛盾

2. $(p/q)^2 > 2$：
   令 $s = (p^2/q^2 - 2)q/(2p)$，有 $0 < s < p/(2q)$
   计算得 $(p/q - s)^2 > 2$，且 $p/q - s > 0$ 是上界，与 $p/q$ 是最小上界矛盾

---

## 4.阿基米德原理

### 4.1定理与推论
**定理 2.1.3（阿基米德原理）** 自然数集合 $\mathbb{N}$ 是无上界的。

**证明**：
假设 $\mathbb{N}$ 有上界，则存在上确界 $M$。
由于 $\forall n \in \mathbb{N}(n+1 \in \mathbb{N})$，故 $\forall n \in \mathbb{N}(n+1 \leq M)$
即 $\forall n \in \mathbb{N}(n \leq M-1)$，所以 $M-1$ 也是上界
但 $M \leq M-1$ 矛盾。

**推论 2.1.1** $\forall \varepsilon > 0 \exists N \in \mathbb{N} \forall n \in \mathbb{N}(n \geq N \implies 1/n < \varepsilon)$

**证明**：
假设结论不成立，则 $\exists \varepsilon > 0 \forall N \in \mathbb{N} \exists n \in \mathbb{N}(n \geq N \land 1/n > \varepsilon)$
由此得 $\forall N \in \mathbb{N}(N < 1/\varepsilon)$，即 $1/\varepsilon$ 是 $\mathbb{N}$ 的上界，与阿基米德原理矛盾。

---

## 5.补充约定

为方便起见，约定：
- 无上界的非空实数集 $E$：$\sup E = \infty$
- 无下界的非空实数集 $E$：$\inf E = -\infty$
- 空集：$\sup \emptyset = -\infty$，$\inf \emptyset = \infty$





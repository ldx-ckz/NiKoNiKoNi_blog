---
title: 2.3 区间套法
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
# 2.3 区间套法

## 1.区间套定理

**定理 7（区间套定理）**  
设闭区间列  
$$
I_n = [a_n, b_n] \quad (n = 1, 2, \dots)
$$
满足以下两个条件：

1. **包含性**：每个区间 $I_n$ 都包含在前一个区间 $I_{n-1}$ 中，即  
   $$
   I_1 \supset I_2 \supset I_3 \supset \cdots
   $$

2. **长度趋于零**：当 $n \to \infty$ 时，区间长度  
   $$
   b_n - a_n \to 0
   $$

则存在唯一的实数 $\alpha$，使得  
$$
\alpha \in \bigcap_{n=1}^{\infty} I_n
$$

---

## 2.定理证明

### 2.1存在性证明

由包含性条件可得：  
$$
a_1 \leq a_2 \leq \cdots \leq a_n \leq \cdots \leq b_n \leq \cdots \leq b_2 \leq b_1
$$

因此：

- $\{a_n\}$ 单调递增且有上界（如 $b_1$）；
- $\{b_n\}$ 单调递减且有下界（如 $a_1$）。

由单调有界收敛定理（定理 6），存在极限：  
$$
\lim_{n \to \infty} a_n = \alpha, \quad \lim_{n \to \infty} b_n = \beta
$$

对任意 $m, n$，有 $a_n < b_m$，令 $n \to \infty$ 得 $\alpha \leq b_m$，再令 $m \to \infty$ 得 $\alpha \leq \beta$。

又由区间长度趋于零，对任意 $\varepsilon > 0$，存在 $N$，使得  
$$
b_N - a_N < \varepsilon
$$

由于  
$$
a_N \leq \alpha \leq \beta \leq b_N
$$
可得  
$$
0 \leq \beta - \alpha < \varepsilon
$$

由 $\varepsilon$ 的任意性，得 $\alpha = \beta$。

因此，对任意 $n$，有  
$$
a_n \leq \alpha \leq b_n
$$
即 $\alpha \in I_n$ 对所有 $n$ 成立。

---

### 2.2唯一性证明

设还存在另一个公共点 $\alpha' \neq \alpha$，不妨设 $\alpha' > \alpha$，则对充分大的 $n$，有  
$$
b_n - a_n < \alpha' - \alpha
$$
但 $\alpha, \alpha' \in I_n$，矛盾。故唯一性得证。

---

## 3.闭区间条件的必要性

- 区间必须是**闭区间**，否则结论不一定成立。
- 若为开区间 $(a_n, b_n)$，则极限点 $\alpha$ 可能不属于任何开区间。
- 闭区间保证了端点属于区间，从而确保极限点 $\alpha$ 属于所有区间。

---

## 4.区间套法与实数连续性定理的等价性

实数连续性的四个基本定理：

1. **戴德金定理**
2. **魏尔斯特拉斯定理**
3. **单调有界收敛定理**
4. **区间套定理**

### 4.1等价性证明结构：

已知：

$$
\text{(I) 戴德金定理} \Rightarrow \text{(II) 确界定理} \Rightarrow \text{(III) 单调有界定理} \Rightarrow \text{(IV) 区间套定理}
$$

下面说明 **从区间套定理推出戴德金定理** 的过程：

---

### 4.2从区间套定理证明戴德金定理

**目标**：给定实数的一个分割 $(A, B)$，证明要么 $A$ 有最大数，要么 $B$ 有最小数。

**证明步骤**：

1. 从 $A$ 中取 $a$，从 $B$ 中取 $b$，构造初始区间 $I_0 = [a, b]$。
2. 取中点 $m = \frac{a+b}{2}$，根据分割定义，$m$ 属于 $A$ 或 $B$：
   - 若 $m \in A$，则取 $I_1 = [m, b]$
   - 若 $m \in B$，则取 $I_1 = [a, m]$
   确保 $I_1$ 左端点在 $A$ 中，右端点在 $B$ 中。
3. 重复上述二分过程，得到区间列：
   $$
   I_0 \supset I_1 \supset I_2 \supset \cdots
   $$
   满足：
   $$
   I_n = [a_n, b_n], \quad b_n - a_n = \frac{b-a}{2^n} \to 0
   $$
4. 由区间套定理，存在唯一的 $s \in \bigcap I_n$。
5. 证明 $s$ 是分割的界：
   - 若 $s \in A$，则 $s$ 是 $A$ 的最大数；
   - 若 $s \in B$，则 $s$ 是 $B$ 的最小数。

---



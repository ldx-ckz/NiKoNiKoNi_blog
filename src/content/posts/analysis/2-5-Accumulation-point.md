---
title: 2.5 聚点
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
# 2.5 聚点

## 基本概念

###  点集与有界性

- **点集**：符合某一定条件的点的全体
- **有界点集**：所有点 $P = (x_1, x_2, \cdots, x_n)$ 的各坐标 $x_k$ 都有界
  - 一维：处于一定区间内
  - 二维：处于一定正方形或圆内
  - 三维及以上：处于一定超立方体或球内

---

###  聚点定义

点 $A$ 是集合 $S$ 的**聚点**，如果：
> 在任意接近 $A$ 的范围内都存在无穷多个 $S$ 中的点

**注意**：
- 聚点 $A$ 不一定属于集合 $S$
- 聚点的聚点仍然是聚点

---

## 重要定理

### 定理1：魏尔斯特拉斯聚点定理

**定理陈述**：
> 有界无穷点集必存在聚点

#### 证明（二维情形）

**第一步：构造正方形序列**
- 设 $S$ 包含在正方形 $Q$ 内（边与坐标轴平行）
- 将 $Q$ 四等分，至少有一个小正方形包含无穷多个 $S$ 中的点，记为 $Q_1$
- 重复此过程，得正方形序列：
  $$
  Q \supset Q_1 \supset Q_2 \supset \cdots \supset Q_n \supset \cdots
  $$
- 当 $n \to \infty$ 时，$Q_n$ 的边长 $\to 0$

**第二步：确定极限点**
- 设 $Q_n$ 的左下顶点为 $(a_n, b_n)$
- 由包含关系得：
  $$
  a \leq a_1 \leq a_2 \leq \cdots \leq a_n \leq \cdots
  $$
  $$
  b \leq b_1 \leq b_2 \leq \cdots \leq b_n \leq \cdots
  $$
- 两数列单调有界，故收敛：
  $$
  \lim_{n \to \infty} a_n = \alpha, \quad \lim_{n \to \infty} b_n = \beta
  $$

![Figure 1](Figure2.5.1.png)

**第三步：验证聚点性质**

- 对任意 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时 $Q_n$ 完全包含在以 $(\alpha, \beta)$ 为中心、$\varepsilon$ 为半径的圆内
- 而每个 $Q_n$ 都包含无穷多个 $S$ 中的点
- 故 $(\alpha, \beta)$ 是 $S$ 的聚点

---

###  聚点与收敛序列的关系

**命题**：如果 $A$ 是集合 $S$ 的聚点，则存在 $S$ 中的点列 $\{P_n\}$（$P_n \neq A$）收敛于 $A$

#### 构造方法：
1. 取 $P_1 \in S$，$P_1 \neq A$，满足 $AP_1 < \frac{1}{2}AP$
2. 取 $P_2 \in S$，$P_2 \neq A$，满足 $AP_2 < \frac{1}{2}AP_1$
3. 依此类推，得点列 $\{P_n\}$ 满足：
   $$
   AP_n < \frac{1}{2^n}AP
   $$
4. 故 $P_n \to A$

---

###  闭集

**定义**：如果集合 $S$ 的所有聚点都属于 $S$，则称 $S$ 为**闭集**

**例子**：
- 闭区间 $[a, b]$
- 包含圆周的圆形
- 包含四边的正方形

**闭包**：对任意集合 $S$，将其所有聚点添加到 $S$ 中得到的集合 $[S]$ 是闭集

---

## 推广的区间套法

### 定理2：闭集套定理

**定理陈述**：
> 若有界闭集列 $S_1, S_2, \cdots$ 满足：
> 1. $S_1 \supset S_2 \supset \cdots \supset S_n \supset \cdots$
> 2. 当 $n \to \infty$ 时，$S_n$ 的直径 $\to 0$
>
> 则存在唯一的点 $A$ 属于所有 $S_n$

**注**：点集 $S$ 的**直径** = $\sup\{PQ : P, Q \in S\}$

#### 证明：

**第一步：构造点列**
- 从每个 $S_n$ 中任取一点 $P_n$
- 由包含关系，$P_n, P_{n+1}, \cdots \in S_n$

**第二步：验证柯西条件**
- 由直径条件：$\forall \varepsilon > 0, \exists N, \forall n > N$，$S_n$ 直径 $< \varepsilon$
- 故当 $m, n > N$ 时，$P_m, P_n \in S_N$，从而 $P_mP_n < \varepsilon$
- $\{P_n\}$ 是 Cauchy 列，收敛于某点 $A$

**第三步：证明 $A \in \bigcap S_n$**
- 情况1：从某序号起 $P_m = A$，则 $A \in S_n$
- 情况2：$A$ 是 $\{P_n, P_{n+1}, \cdots\}$ 的聚点
- 由于 $S_n$ 是闭集，$A \in S_n$

**第四步：唯一性**
- 由直径条件易证唯一

---

## 覆盖定理

### 定理3：Heine-Borel 覆盖定理

**定理陈述**：
> 若有界闭集 $F$ 被一组无穷多个圆整体覆盖，则 $F$ 能被这些圆中的有限多个覆盖

**注**：
- "覆盖"指 $F$ 中每点都至少在一个圆的内部
- 定理对任意开集族也成立

#### 证明（反证法）：

**第一步：假设定理不成立**
- 设 $F$ 不能被有限个给定圆覆盖

**第二步：构造闭集套**
- 取包围 $F$ 的正方形 $Q$，四等分
- 至少有一个小正方形 $Q_1$ 使得 $F \cap Q_1$ 也不能被有限覆盖
- 令 $F_1 = F \cap Q_1$（闭集）
- 重复此过程，得闭集套：
  $$
  F \supset F_1 \supset F_2 \supset \cdots
  $$
- 各 $F_n$ 直径 $\to 0$

**第三步：应用闭集套定理**
- 存在唯一 $P_0 \in \bigcap F_n \subset F$
- $P_0$ 被某个给定圆覆盖

**第四步：导出矛盾**
- 对充分大 $n$，$F_n$ 和 $Q_n$ 完全落入该圆内
- 这与 $F_n$ 不能被有限覆盖矛盾

**关键假设**：
- $F$ 是闭集：保证 $P_0 \in F$
- 各点在圆内部：保证 $F_n$ 能完全落入圆内

---




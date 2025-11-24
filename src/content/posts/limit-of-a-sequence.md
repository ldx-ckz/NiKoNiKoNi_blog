---
title: 2.2 数列的极限
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
# 2.2 数列的极限

## 1.数列极限的定义

### 1.1基本定义
**定义 2.2.1** 实数列 $\{a_n\}$ 收敛于极限 $\alpha \in \mathbb{R}$，如果：
$$
\forall \varepsilon > 0 \exists N \in \mathbb{N} \forall n \geq N (|a_n - \alpha| < \varepsilon)
$$
记作 $\lim_{n \to \infty} a_n = \alpha$ 或 $a_n \to \alpha$。

### 1.2等价表述
- 任给 $\varepsilon > 0$，使得 $|a_n - \alpha| \geq \varepsilon$ 的项只有有限个
- 对于复数列，定义类似，要求实部和虚部分别收敛

### 1.3发散情形
**定义 2.2.2** 
- $\lim_{n \to \infty} a_n = \infty$：$\forall M \in \mathbb{R} \exists N \in \mathbb{N} \forall n \geq N (a_n > M)$
- $\lim_{n \to \infty} a_n = -\infty$：$\forall M \in \mathbb{R} \exists N \in \mathbb{N} \forall n \geq N (a_n < M)$

---

## 2.基本性质

### 2.1唯一性
**定理 2.2.1** 收敛数列的极限唯一

### 2.2有界性
**定理 2.2.2** 收敛数列必有界

**证明**：
设 $\lim_{n \to \infty} a_n = \alpha$，取 $\varepsilon = 1$，则存在 $N$ 使得：
$$
\forall n \geq N (|a_n - \alpha| < 1) \implies |a_n| < |\alpha| + 1
$$
令 $M = \max(|a_1|, \cdots, |a_{N-1}|, |\alpha| + 1)$，则 $\forall n \in \mathbb{N} (|a_n| \leq M)$。

### 2.3保序性
**定理 2.2.3** 若 $a_n \to \alpha$，$b_n \to \beta$，且 $a_n \leq b_n$，则 $\alpha \leq \beta$

**证明**：
假设 $\alpha > \beta$，取 $\varepsilon = (\alpha - \beta)/2 > 0$
存在 $N$ 使得 $n \geq N$ 时：
$$
|a_n - \alpha| < \varepsilon, \quad |b_n - \beta| < \varepsilon
$$
则 $a_n > \alpha - \varepsilon = (\alpha + \beta)/2 = \beta + \varepsilon > b_n$，矛盾。

---

## 3.极限运算法则

### 3.1四则运算
**定理 2.2.4** 设 $a_n \to \alpha$，$b_n \to \beta$，则：

**(1)** $\lim_{n \to \infty} (a_n + b_n) = \alpha + \beta$

**证明**：
$\forall \varepsilon > 0$，存在 $N_1, N_2$ 使得：
$$
n \geq N_1 \implies |a_n - \alpha| < \frac{\varepsilon}{2}, \quad n \geq N_2 \implies |b_n - \beta| < \frac{\varepsilon}{2}
$$
取 $N = \max(N_1, N_2)$，则 $n \geq N$ 时：
$$
|(a_n + b_n) - (\alpha + \beta)| \leq |a_n - \alpha| + |b_n - \beta| < \varepsilon
$$

**(2)** $\lim_{n \to \infty} (a_n \cdot b_n) = \alpha \cdot \beta$

**证明**：
由有界性，存在 $M$ 使得 $|a_n| \leq M$，$|b_n| \leq M$
$$
|a_n b_n - \alpha \beta| \leq |a_n||b_n - \beta| + |a_n - \alpha||\beta| \leq M(|b_n - \beta| + |a_n - \alpha|)
$$
$\forall \varepsilon > 0$，存在 $N$ 使得 $n \geq N$ 时：
$$
|a_n - \alpha| < \frac{\varepsilon}{2M}, \quad |b_n - \beta| < \frac{\varepsilon}{2M}
$$
则 $|a_n b_n - \alpha \beta| < \varepsilon$

**(3)** 若 $\beta \neq 0$，则 $\lim_{n \to \infty} \frac{a_n}{b_n} = \frac{\alpha}{\beta}$

**证明**：
先证 $\lim_{n \to \infty} \frac{1}{b_n} = \frac{1}{\beta}$
存在 $N_1$ 使得 $n \geq N_1$ 时 $|b_n| > |\beta|/2$
$$
\left| \frac{1}{b_n} - \frac{1}{\beta} \right| = \frac{|b_n - \beta|}{|b_n \beta|} \leq \frac{2}{|b_n - \beta|}{|\beta|^2}
$$
由乘积法则即得结论。

---

## 4.重要定理

### 4.1夹逼定理
**定理 2.2.5** 设 $a_n \to \alpha$，$b_n \to \alpha$，且 $a_n \leq c_n \leq b_n$，则 $c_n \to \alpha$

**证明**：
$\forall \varepsilon > 0$，存在 $N$ 使得 $n \geq N$ 时：
$$
a_n, b_n \in (\alpha - \varepsilon, \alpha + \varepsilon) \implies c_n \in (a_n, b_n) \subset (\alpha - \varepsilon, \alpha + \varepsilon)
$$

### 4.2子列定理
**定理 2.2.6** 收敛数列的任意子列收敛于同一极限
**证明**：
设 $\{a_n\}$ 是收敛数列，$\lim_{n \to \infty} a_n = \alpha$，$\{a_{n_k}\}$ 是 $\{a_n\}$ 的任意子列。

由 $\lim_{n \to \infty} a_n = \alpha$ 得：
$$
\forall \varepsilon > 0 \exists N \in \mathbb{N} \forall n \geq N (|a_n - \alpha| < \varepsilon)
$$

由于 $\{n_k\}$ 是严格递增的自然数列，对于上述 $N$，存在 $K \in \mathbb{N}$ 使得当 $k \geq K$ 时 $n_k \geq N$。

因此：
$$
\forall \varepsilon > 0 \exists K \in \mathbb{N} \forall k \geq K (|a_{n_k} - \alpha| < \varepsilon)
$$

即 $\lim_{k \to \infty} a_{n_k} = \alpha$。

---

## 5.单调数列收敛定理

### 5.1单调数列定义
- **单调递增**：$\forall n \in \mathbb{N} (a_n < a_{n+1})$
- **单调不减**：$\forall n \in \mathbb{N} (a_n \leq a_{n+1})$
- **单调递减**：$\forall n \in \mathbb{N} (a_n > a_{n+1})$
- **单调不增**：$\forall n \in \mathbb{N} (a_n \geq a_{n+1})$

### 5.2收敛定理
**定理 2.2.7** 
- 单调不减且有上界的数列收敛于其上确界
- 单调不增且有下界的数列收敛于其下确界
- 单调不减且无上界的数列发散到 $+\infty$
- 单调不增且无下界的数列发散到 $-\infty$

**证明**（单调不减有上界情形）：
设 $\alpha = \sup a_n$，则：
$$
\forall \varepsilon > 0 \exists n_0 (\alpha - \varepsilon < a_{n_0} \leq \alpha)
$$
由单调性，$n \geq n_0 \implies a_n \geq a_{n_0} > \alpha - \varepsilon$
又 $a_n \leq \alpha$，故 $|a_n - \alpha| < \varepsilon$

---

## 6.无穷小序列

### 6.1定义
**定义 2.2.3** 极限为零的序列称为无穷小序列

### 6.2性质
- 无穷小序列的和、差、积仍为无穷小
- 有界序列与无穷小序列的乘积为无穷小



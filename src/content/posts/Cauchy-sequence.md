---
title: 2.4 柯西收敛准则
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
# 2.4 柯西收敛准则

## 1.上下极限

###  1.1定义

**定义 3.2.2** 序列 $\{a_n\}$ 的**上极限**定义为：
$$
\limsup_{n \to \infty} a_n = \lim_{n \to \infty} a_n = \lim_{n \to \infty} \left( \sup_{k \geq n} a_k \right)
$$

**下极限**定义为：
$$
\liminf_{n \to \infty} a_n = \lim_{n \to \infty} a_n = \lim_{n \to \infty} \left( \inf_{k \geq n} a_k \right)
$$

**注记**：
- $\sup_{k \geq n} a_k$ 单调不增，$\inf_{k \geq n} a_k$ 单调不减，故极限一定存在
- 允许取值为 $\pm\infty$：
  - 若 $\{a_n\}$ 无上界，则 $\sup a_n = +\infty$
  - 若 $\{a_n\}$ 无下界，则 $\inf a_n = -\infty$

---

###  1.2基本性质

**命题 3.2.1** 对任意序列 $\{a_n\}$：
$$
\limsup_{n \to \infty} a_n \geq \liminf_{n \to \infty} a_n
$$

**定理 3.2.2** 序列 $\{a_n\}$ 收敛的充分必要条件是：
$$
\limsup_{n \to \infty} a_n = \liminf_{n \to \infty} a_n
$$
此时：
$$
\lim_{n \to \infty} a_n = \limsup_{n \to \infty} a_n = \liminf_{n \to \infty} a_n
$$

---

###  1.3等价刻画

上极限 $\lambda = \limsup a_n$ 满足：

1. 对任意 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，$a_n < \lambda + \varepsilon$
2. 对任意 $\varepsilon > 0$，存在无穷多个 $n$，使得 $a_n > \lambda - \varepsilon$

下极限 $\mu = \liminf a_n$ 满足（大小关系相反）：

1. 对任意 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，$a_n > \mu - \varepsilon$
2. 对任意 $\varepsilon > 0$，存在无穷多个 $n$，使得 $a_n < \mu + \varepsilon$

---

## 2.柯西收敛准则

###  2.1定义

**定义 3.2.3** 序列 $\{a_n\}$ 称为 **Cauchy 列**（基本列），如果：
$$
\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall n, m \geq N \quad (|a_n - a_m| < \varepsilon)
$$

---

###  2.2定理陈述

**定理 8 / 定理 3.2.3（Cauchy 收敛准则）**  
序列 $\{a_n\}$ 收敛的充分必要条件是：$\{a_n\}$ 是 Cauchy 列。

即：
$$
\{a_n\} \text{ 收敛} \iff \forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall p, q \geq N \quad (|a_p - a_q| < \varepsilon)
$$

---

###  2.3证明一：利用上下极限

#### 2.3.1必要性证明

设 $a_n \to \alpha$，则：
$$
\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall n \geq N \quad (|a_n - \alpha| < \varepsilon/2)
$$

于是当 $p, q \geq N$ 时：
$$
|a_p - a_q| \leq |a_p - \alpha| + |a_q - \alpha| < \varepsilon/2 + \varepsilon/2 = \varepsilon
$$
故 $\{a_n\}$ 是 Cauchy 列。

---

#### 2.3.2充分性证明

设 $\{a_n\}$ 是 Cauchy 列。

**第一步：证明有界性**  
取 $\varepsilon = 1$，存在 $N$，当 $n, m \geq N$ 时 $|a_n - a_m| < 1$  
特别地，当 $n \geq N$ 时 $|a_n - a_N| < 1$，故：
$$
|a_n| \leq |a_N| + 1
$$
令 $M = \max\{|a_1|, \dots, |a_{N-1}|, |a_N| + 1\}$，则 $\{a_n\}$ 有界。

**第二步：构造上下确界序列**  
令：
$$
l_n = \sup_{k \geq n} a_k, \quad m_n = \inf_{k \geq n} a_k
$$
则：
- $\{l_n\}$ 单调递减，$\{m_n\}$ 单调递增
- $m_n \leq l_n$，且两者均有有限极限

**第三步：证明上下极限相等**  
由 Cauchy 条件：
$$
\forall \varepsilon > 0, \exists N, \forall n, m \geq N \quad (a_n - \varepsilon < a_m < a_n + \varepsilon)
$$
于是：
$$
a_N - \varepsilon \leq \inf_{n \geq N} a_n \leq \sup_{n \geq N} a_n \leq a_N + \varepsilon
$$
即：
$$
0 \leq l_N - m_N \leq 2\varepsilon
$$
由于 $l_n$ 递减、$m_n$ 递增，对 $k \geq N$ 有：
$$
0 \leq l_k - m_k \leq 2\varepsilon
$$
令 $n \to \infty$ 得：
$$
0 \leq \limsup a_n - \liminf a_n \leq 2\varepsilon
$$
由 $\varepsilon$ 任意性，$\limsup a_n = \liminf a_n$。

**第四步：得出结论**  
由定理 3.2.2，$\{a_n\}$ 收敛。

---

###  2.4证明二：利用区间套法

#### 2.4.1必要性证明
同上。

#### 2.4.2充分性证明

设 $\{a_n\}$ 满足 Cauchy 条件。

**第一步：证明有界性**  
同上。

**第二步：构造区间套**  
令：
$$
l_n = \sup_{k \geq n} a_k, \quad m_n = \inf_{k \geq n} a_k, \quad I_n = [m_n, l_n]
$$
则：
- $I_1 \supset I_2 \supset \cdots$
- $l_n - m_n \to 0$（由 Cauchy 条件保证）

**第三步：应用区间套定理**  
由区间套定理，存在唯一 $\lambda \in \bigcap I_n$，且：
$$
l_n \to \lambda, \quad m_n \to \lambda
$$

**第四步：证明收敛性**  
由于 $a_n \in [m_n, l_n]$，故：
$$
|a_n - \lambda| \leq l_n - m_n
$$
而 $l_n - m_n \to 0$，所以 $a_n \to \lambda$。

---

### 2.5点列的柯西收敛准则

对点列 $\{P_n = (x_n, y_n)\}$，收敛的充分必要条件是：
$$
\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall m, n \geq N \quad (P_m P_n < \varepsilon)
$$
其中 $P_m P_n$ 表示两点间的欧几里得距离。

等价地：
$$
P_n \to A \iff x_n \to a, \quad y_n \to b
$$




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

## 上下极限

###  定义

**定义 1** 序列 $\{a_n\}$ 的**上极限**定义为：
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

###  基本性质

**命题 2** 对任意序列 $\{a_n\}$：
$$
\limsup_{n \to \infty} a_n \geq \liminf_{n \to \infty} a_n
$$

**定理 1** 序列 $\{a_n\}$ 收敛的充分必要条件是：
$$
\limsup_{n \to \infty} a_n = \liminf_{n \to \infty} a_n
$$
此时：
$$
\lim_{n \to \infty} a_n = \limsup_{n \to \infty} a_n = \liminf_{n \to \infty} a_n
$$

**命题 2** 设 $ a_n \in \mathbb{R} $, $ n = 1, 2, \cdots $, $ a \in [-\infty, +\infty] $。则 $\limsup_{n \to \infty} a_n = a$ 当且仅当

- (C1) 如果 $\{a_{n_k}\}$ 是 $\{a_n\}$ 的子列，且 $\lim_{k \to \infty} a_{n_k} = s \in [-\infty, +\infty]$，则 $s \leq a$；
- (C2) 存在 $\{a_n\}$ 的子列 $\{a_{n_k}\}$，使得 $\lim_{k \to \infty} a_{n_k} = a$。

**证明：**

**1.**若 $\limsup_{n \to \infty} a_n = a$，则 (C1) 和 (C2) 成立

记 $ L = \limsup_{n \to \infty} a_n = a $。  
令 $ b_n = \sup_{k \geq n} a_k $，则 $ b_n $ 单调递减且 $\lim_{n \to \infty} b_n = a$。

(C1) 的证明：

设 $\{a_{n_k}\}$ 是任意收敛子列，且 $\lim_{k \to \infty} a_{n_k} = s$。需证 $ s \leq a $。

分三种情况讨论：

1. **$ a = +\infty $**  
   此时 $ s \leq +\infty $ 恒成立，故 (C1) 成立。

2. **$ a = -\infty $**  
   由于 $ b_n \to -\infty $，对任意 $ M > 0 $，存在 $ N $ 使得当 $ n \geq N $ 时 $ b_n < -M $。  
   于是当 $ n \geq N $ 时 $ a_n \leq b_n < -M $，故 $ a_n \to -\infty $。  
   从而子列 $ a_{n_k} \to -\infty $，即 $ s = -\infty $，满足 $ s \leq a $。

3. **$ a \in \mathbb{R} $**  
   由于 $ b_n \to a $ 且 $ b_n $ 单调递减，对任意子列 $ a_{n_k} $，有 $ a_{n_k} \leq b_{n_k} $。  
   又 $ b_{n_k} \to a $（因为 $ n_k \to \infty $），故 $ \limsup_{k \to \infty} a_{n_k} \leq \lim_{k \to \infty} b_{n_k} = a $。  
   由于子列收敛， $ \lim_{k \to \infty} a_{n_k} = s $，所以 $ s \leq a $。

综上，(C1) 成立。

(C2) 的证明：

需构造子列 $\{a_{n_k}\}$ 使得 $\lim_{k \to \infty} a_{n_k} = a$。

分三种情况：

1. **$ a = +\infty $**  
   由于 $ L = +\infty $，对任意 $ K > 0 $，存在无限多个 $ n $ 使得 $ a_n > K $。  
   递归构造子列：  
   - 取 $ n_1 $ 使 $ a_{n_1} > 1 $；  
   - 取 $ n_2 > n_1 $ 使 $ a_{n_2} > 2 $；  
   - 依此类推，取 $ n_k > n_{k-1} $ 使 $ a_{n_k} > k $。  
   则 $ \lim_{k \to \infty} a_{n_k} = +\infty = a $。

2. **$ a = -\infty $**  
   由于 $ b_n \to -\infty $，有 $ a_n \to -\infty $。  
   取子列为整个序列，即 $ n_k = k $，则 $ \lim_{k \to \infty} a_{n_k} = -\infty = a $。

3. **$ a \in \mathbb{R} $**  
   由于 $ b_n \to a $，对每个 $ k \in \mathbb{N} $，存在 $ N_k $ 使得当 $ n \geq N_k $ 时 $ |b_n - a| < \frac{1}{k} $。  
   递归构造子列：  
   - 取 $ n_1 \geq N_1 $ 使 $ a_{n_1} > b_{N_1} - \frac{1}{1} $。  
     由于 $ b_{N_1} > a - \frac{1}{1} $，有 $ a_{n_1} > a - 2 $。  
     又 $ a_{n_1} \leq b_{n_1} \leq b_{N_1} < a + \frac{1}{1} $，故 $ |a_{n_1} - a| < 2 $。  
   - 取 $ n_2 > n_1 $ 且 $ n_2 \geq N_2 $ 使 $ a_{n_2} > b_{N_2} - \frac{1}{2} $。  
     则 $ a_{n_2} > a - \frac{1}{2} - \frac{1}{2} = a - 1 $，且 $ a_{n_2} \leq b_{n_2} \leq b_{N_2} < a + \frac{1}{2} $，故 $ |a_{n_2} - a| < 1 $。  
   - 继续此过程，取 $ n_k > n_{k-1} $ 且 $ n_k \geq N_k $ 使 $ a_{n_k} > b_{N_k} - \frac{1}{k} $。  
     则 $ a_{n_k} > a - \frac{1}{k} - \frac{1}{k} = a - \frac{2}{k} $，且 $ a_{n_k} \leq b_{n_k} \leq b_{N_k} < a + \frac{1}{k} $，  
     所以 $ |a_{n_k} - a| < \frac{2}{k} $。  
     故 $ \lim_{k \to \infty} a_{n_k} = a $。

综上，(C2) 成立。

**2.**若 (C1) 和 (C2) 成立，则 $\limsup_{n \to \infty} a_n = a$

设 (C1) 和 (C2) 成立。  
令 $ L = \limsup_{n \to \infty} a_n $。由定义，$ L $ 是所有收敛子列极限的上确界。

- 由 (C2)，存在子列收敛于 $ a $，故 $ L \geq a $。
- 由 (C1)，任何收敛子列的极限 $ s $ 满足 $ s \leq a $，故 $ L \leq a $。

因此 $ L = a $，即 $\limsup_{n \to \infty} a_n = a$。

---

###  等价刻画

上极限 $\lambda = \limsup a_n$ 满足：

1. 对任意 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，$a_n < \lambda + \varepsilon$
2. 对任意 $\varepsilon > 0$，存在无穷多个 $n$，使得 $a_n > \lambda - \varepsilon$

下极限 $\mu = \liminf a_n$ 满足（大小关系相反）：

1. 对任意 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时，$a_n > \mu - \varepsilon$
2. 对任意 $\varepsilon > 0$，存在无穷多个 $n$，使得 $a_n < \mu + \varepsilon$

---

## 柯西收敛准则

###  定义

**定义 2** 序列 $\{a_n\}$ 称为 **Cauchy 列**（基本列），如果：
$$
\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall n, m \geq N \quad (|a_n - a_m| < \varepsilon)
$$

---

###  定理陈述

**定理 2（Cauchy 收敛准则）**  
序列 $\{a_n\}$ 收敛的充分必要条件是：$\{a_n\}$ 是 Cauchy 列。

即：
$$
\{a_n\} \text{ 收敛} \iff \forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall p, q \geq N \quad (|a_p - a_q| < \varepsilon)
$$

---

###  证明一：利用上下极限

1.必要性证明

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

2，充分性证明

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
所以，$\{a_n\}$ 收敛。

---

###  证明二：利用区间套法

1.必要性证明
同上。

2.充分性证明

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

### 点列的柯西收敛准则

对点列 $\{P_n = (x_n, y_n)\}$，收敛的充分必要条件是：
$$
\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall m, n \geq N \quad (P_m P_n < \varepsilon)
$$
其中 $P_m P_n$ 表示两点间的欧几里得距离。

等价地：
$$
P_n \to A \iff x_n \to a, \quad y_n \to b
$$

---

## 致密性原理

### 定理陈述
**致密性原理（波尔查诺-魏尔斯特拉斯定理）**：任何有界的实数序列必定包含收敛的子列。

---

### 证明

**1.**设 $\{a_n\}$ 为有界实数序列，即存在 $m, M \in \mathbb{R}$ 使得对所有 $n$，有 $m \leq a_n \leq M$。

**2.**考虑序列的上极限：
$$
L = \limsup_{n \to \infty} a_n
$$

由于序列有界，上极限 $L$ 为有限实数。

**3.**由上极限的性质，存在 $\{a_n\}$ 的子列 $\{a_{n_k}\}$ 满足：
$$
\lim_{k \to \infty} a_{n_k} = L
$$

该子列收敛于有限实数 $L$，故 $\{a_n\}$ 存在收敛子列。
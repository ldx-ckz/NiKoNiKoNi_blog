---
title: 1.7 向量
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
# 1.7 向量

## 欧式空间定义

###  二维欧式空间
$$
\mathbb{R}^2 = \{(x, y) : x, y \in \mathbb{R}\}
$$

###  三维欧式空间
$$
\mathbb{R}^3 = \{(x, y, z) : x, y, z \in \mathbb{R}\}
$$

###  n维欧式空间
**定义1**：设 $x: \{1, 2, \ldots, n\} \to \mathbb{R}$，记
$$
x_i = x(i), \quad i = 1, 2, \ldots, n, \quad x = (x_1, \ldots, x_n)
$$
称 $(x_1, \ldots, x_n)$ 为 **n元有序数组**

**定义2**：
$$
\mathbb{R}^n = \{(x_1, \ldots, x_n) : x_i \in \mathbb{R}\}
$$
$\mathbb{R}^n$ 为 **n维欧式空间**

**术语**：
- $x \in \mathbb{R}^n$ 称为**点**或**向量**
- $x_i$ 称为点 $x$ 的第 $i$ 个**坐标**，或向量 $x$ 的第 $i$ 个**分量**
- $0 = (0, \ldots, 0) \in \mathbb{R}^n$ 称为**零向量**

---

## 基本运算与性质

###  单位向量
第 $i$ 个**单位向量**：
$$
\mathbf{e}_i = (0, \ldots, 1, \ldots, 0) \quad (\text{第 } i \text{ 个分量为 } 1)
$$

###  向量运算
**定义3**：设 $x = (x_1, \ldots, x_n), y = (y_1, \ldots, y_n) \in \mathbb{R}^n, k \in \mathbb{R}$

- **数乘**：$kx = (kx_1, \ldots, kx_n)$
- **加法**：$x + y = (x_1 + y_1, \ldots, x_n + y_n)$

**命题1**：设 $x = (x_1, \ldots, x_n) \in \mathbb{R}^n$，则
$$
x = \sum_{i=1}^{n} x_i \mathbf{e}_i
$$

**命题2**：$x \in \mathbb{R}^n, k \in \mathbb{R}$，若 $kx = 0$，则 $k = 0$ 或 $x = 0$

---

## 向量的关系

###  线性相关与平行
- $x, y \in \mathbb{R}^n$，$\alpha, \beta \in \mathbb{R}$，$\alpha x + \beta y$ 称为 $x, y$ 的**线性组合**
- $x, y \in \mathbb{R}^n$，若存在不全为零的 $\alpha, \beta \in \mathbb{R}$，使得 $\alpha x + \beta y = 0$，则称 $x, y$ **平行**，记作 $x \parallel y$

###  同向
$x, y \in \mathbb{R}^n, x, y \neq 0$，若存在 $k > 0$ 使得 $y = kx$，则称 $x, y$ **同向**

###  平行判定
**命题3**：$x, y \in \mathbb{R}^n$，下列叙述等价：
1. $x \parallel y$
2. 存在 $k \in \mathbb{R}$，使得 $x = ky$ 或 $y = kx$
3. $x_i y_j = x_j y_i, \quad i, j = 1, 2, \ldots, n$

**命题4**：$x, y, z \in \mathbb{R}^n \backslash \{0\}$，则：
1. $x \parallel y$ 当且仅当存在 $k \in \mathbb{R}$，使得 $y = kx$
2. 若 $x \parallel y$ 且 $y \parallel z$，则 $x \parallel z$

---

## 内积（点积）

###  定义
设 $x, y \in \mathbb{R}^n$，定义：
$$
x \cdot y = \langle x, y \rangle = \sum_{i=1}^{n} x_i y_i
$$
称 $x \cdot y$ 为 $x, y$ 的**内积**或**点积**

###  性质
**命题5**：$x, y, z \in \mathbb{R}^n, a, b \in \mathbb{R}$，下列结论成立：

1. **非负性**：$\langle x, x \rangle \geq 0$，等号成立当且仅当 $x = 0$
2. **对称性**：$\langle x, y \rangle = \langle y, x \rangle$
3. **线性性**：$\langle ax + by, z \rangle = a\langle x, z \rangle + b\langle y, z \rangle$

---

## 向量的模（范数）

###  定义
$x \in \mathbb{R}^n$，定义：
$$
|x| = \|x\| = \sqrt{\langle x, x \rangle} = \sqrt{\sum_{i=1}^{n} x_i^2}
$$
称 $|x|$ 为 $x$ 的**长度**或**模**

若 $|x| = 1$，称 $x$ 为**单位向量**

###  性质
**命题6**：$x, y \in \mathbb{R}^n, k \in \mathbb{R}$，则：

1. **非负性**：$|x| \geq 0$，等号成立当且仅当 $x = 0$
2. **齐次性**：$|kx| = |k||x|$
3. **三角不等式**：$|x + y| \leq |x| + |y|$

---

## 夹角与正交性

###  夹角定义
$x, y \in \mathbb{R}^n, x, y \neq 0$，由 Cauchy 不等式：
$$
-1 \leq \frac{x \cdot y}{|x||y|} \leq 1
$$
存在唯一 $\theta \in [0, \pi]$，使得：
$$
\cos \theta = \frac{x \cdot y}{|x||y|}
$$
称 $\theta$ 为 $x, y$ 的**夹角**

###  正交性
若 $x \cdot y = 0$，称 $x, y$ **垂直**或**正交**，记作 $x \perp y$

若 $x, y \neq 0$，则：
$$
x \perp y \iff \cos \theta = 0 \iff |x + y|^2 = |x|^2 + |y|^2
$$

---

## 正交投影

###  单位化
设 $x \in \mathbb{R}^n \backslash \{0\}$，记：
$$
x^0 = \frac{x}{|x|}
$$
则 $|x^0| = 1$，称 $x^0$ 为 $x$ 对应的**单位向量**

###  投影定义
设 $a \in \mathbb{R}^n, a \neq 0$，$b \in \mathbb{R}^n$：
- $b \cdot a^0$ 称为 $b$ 在 $a$ 上的**投影**
- $(b \cdot a^0)a^0$ 称为 $b$ 在 $a$ 上的**投影向量**

###  正交分解
$a, b \in \mathbb{R}^n, a \neq 0$，设：
$$
b_1 = (b \cdot a^0)a^0, \quad b_2 = b - b_1
$$
则：
- $b_1 \perp b_2$
- $|b|^2 = |b_1|^2 + |b_2|^2$
- $b = b_1 + b_2$ 称为 $b$ 的**正交分解**

---

## 面积与距离

###  平行四边形面积
$a \in \mathbb{R}^n, x, y \in \mathbb{R}^n \backslash \{0\}$，且 $x, y$ 不平行，夹角为 $\theta$

设：
$$
P = \{a + \lambda x + \mu y : 0 \leq \lambda, \mu \leq 1\}
$$
称 $P$ 为以 $a$ 为顶点，$x, y$ 为邻边的**平行四边形**

$P$ 的**面积**：
$$
S(P) = |x||y|\sin \theta = \sqrt{|x|^2|y|^2 - (x \cdot y)^2}
$$

###  距离公式
$x, y \in \mathbb{R}^n$，$|x - y|$ 称为 $x, y$ 的**距离**

**命题8**：$x, y, z \in \mathbb{R}^n$，下列结论成立：

1. **非负性**：$|x - y| \geq 0$，等号成立当且仅当 $x = y$
2. **对称性**：$|x - y| = |y - x|$
3. **三角不等式**：$|x - z| \leq |x - y| + |y - z|$

---

## 一般范数

###  p-范数定义
设 $x = (x_1, \ldots, x_n) \in \mathbb{R}^n$，$p \geq 1$，记：
$$
|x|_p = \left( \sum_{i=1}^{n} |x_i|^p \right)^{1/p}
$$
称 $|x|_p$ 为 $x$ 的 **p-范数**

**无穷范数**：
$$
|x|_\infty = \max_{1 \leq i \leq n} |x_i|
$$

###  Hölder 不等式
设 $p > 1$，$\frac{1}{p} + \frac{1}{q} = 1$，$x, y \in \mathbb{R}^n$，则：
$$
|\langle x, y \rangle| \leq |x|_p |y|_q
$$
**证明**：
当 $|x|_p = 0$ 或 $|y|_q = 0$ 时，不等式显然成立。

设 $|x|_p > 0, |y|_q > 0$。考虑函数 $f(t) = t^p/p + s^q/q - ts$，其中 $t, s \geq 0$。

令 $u = |x_i|/|x|_p, v = |y_i|/|y|_q$，由 Young 不等式：
$$
uv \leq \frac{u^p}{p} + \frac{v^q}{q}
$$

即：
$$
\frac{|x_i y_i|}{|x|_p |y|_q} \leq \frac{|x_i|^p}{p|x|_p^p} + \frac{|y_i|^q}{q|y|_q^q}
$$

对 $i = 1, \ldots, n$ 求和：
$$
\frac{\sum |x_i y_i|}{|x|_p |y|_q} \leq \frac{1}{p} + \frac{1}{q} = 1
$$

因此：
$$
\sum |x_i y_i| \leq |x|_p |y|_q
$$

再由 $|\langle x, y \rangle| \leq \sum |x_i y_i|$，得证。
###  Minkowski 不等式（三角不等式）
**命题7**：$p \geq 1$ 或 $p = \infty$，$x, y \in \mathbb{R}^n, k \in \mathbb{R}$，则：

1. **非负性**：$|x|_p \geq 0$，等号成立当且仅当 $x = 0$
2. **齐次性**：$|kx|_p = |k||x|_p$
3. **三角不等式**：$|x + y|_p \leq |x|_p + |y|_p$
4. **证明**：
当 $p = 1$ 或 $p = \infty$ 时，不等式显然成立。

设 $p > 1$，$\frac{1}{p} + \frac{1}{q} = 1$。考虑：
$$
|x + y|_p^p = \sum_{i=1}^n |x_i + y_i|^p
$$

将 $|x_i + y_i|^p$ 写成：
$$
|x_i + y_i|^p = |x_i + y_i| \cdot |x_i + y_i|^{p-1}
$$

由三角不等式：
$$
|x_i + y_i|^p \leq |x_i| \cdot |x_i + y_i|^{p-1} + |y_i| \cdot |x_i + y_i|^{p-1}
$$

对 $i$ 求和：
$$
|x + y|_p^p \leq \sum |x_i| \cdot |x_i + y_i|^{p-1} + \sum |y_i| \cdot |x_i + y_i|^{p-1}
$$

应用 Hölder 不等式：
$$
\sum |x_i| \cdot |x_i + y_i|^{p-1} \leq |x|_p \cdot \left( \sum |x_i + y_i|^{(p-1)q} \right)^{1/q}
= |x|_p \cdot |x + y|_p^{p/q}
$$

同理：
$$
\sum |y_i| \cdot |x_i + y_i|^{p-1} \leq |y|_p \cdot |x + y|_p^{p/q}
$$

因此：
$$
|x + y|_p^p \leq (|x|_p + |y|_p) \cdot |x + y|_p^{p/q}
$$

由于 $p - p/q = 1$，两边除以 $|x + y|_p^{p/q}$ 得：
$$
|x + y|_p \leq |x|_p + |y|_p
$$

证毕。
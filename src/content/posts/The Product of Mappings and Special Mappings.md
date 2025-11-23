---
title: 1.4 映射的乘积与特殊映射
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
# §1.4 映射的乘积与特殊映射

## 📌 复合映射的定义与性质

### 定义
设 $\varphi : E \rightarrow F$ 和 $\psi : H \rightarrow G$ 是两个映射，且满足 $F \subset H$，则复合映射 $\psi \circ \varphi$ 定义为：
$$
\psi \circ \varphi : E \rightarrow G, \quad \psi \circ \varphi(x) = \psi(\varphi(x))
$$

### 运算律
- **结合律**：$\vartheta \circ (\psi \circ \varphi) = (\vartheta \circ \psi) \circ \varphi$
- **无交换律**：一般情况下 $\psi \circ \varphi \neq \varphi \circ \psi$

---

## 📌 特殊映射类型

### 单射 (Injection)
**定义**：$f:A \rightarrow B$ 是单射，如果：
$$
f(x_1) = f(x_2) \implies x_1 = x_2, \quad \forall x_1, x_2 \in A
$$

### 满射 (Surjection)  
**定义**：$f:A \rightarrow B$ 是满射，如果：
$$
R_f = B \quad (\text{值域等于目标域})
$$

### 双射 (Bijection)
**定义**：$f:A \rightarrow B$ 是双射，如果 $f$ 既是单射又是满射。

---

## 📌 逆映射

### 定义
仅对双射 $f:A \rightarrow B$ 定义逆映射 $f':B \rightarrow A$：
$$
f'(f(x)) = x, \quad \forall x \in A
$$

### 基本性质

**命题1**：若 $f(x) = y$，则 $x = f'(y)$

**证明**：由逆映射定义直接可得 $f'(f(x)) = x$，因此 $f'(y) = x$。

---

**命题2**：$f(f'(y)) = y, \quad \forall y \in B$

**证明**：由定义 $f'(f(x)) = x$，$x \in A$。设 $f'(y) = x$，由 $y = f(x)$ 得 $f(f'(y)) = f(x) = y$。

---

**命题3**：$f$ 可逆 $\implies$ $f'$ 可逆，且 $(f')' = f$

**证明**：
- **单射性**：设 $y_1, y_2 \in B$，$f'(y_1) = f'(y_2)$，则：
  $$y_1 = f(f'(y_1)) = f(f'(y_2)) = y_2$$
- **满射性**：设 $x \in A$，则 $x = f'(f(x))$
- **逆映射相等**：设 $x \in A$，记 $y = f(x)$，则 $x = f'(y)$，所以 $f'(y) = f(x)$，即 $(f')' = f$

---

**命题4**：$f \circ f^{-1} = I_B, \quad f^{-1} \circ f = I_A$

**证明**：
- 设 $y \in B$，$f(f^{-1}(y)) = y = I_B(y)$
- 设 $x \in A$，$f^{-1}(f(x)) = x = I_A(x)$

---

### 逆映射的等价刻画

**命题5**：$f:A \rightarrow B$ 可逆 $\iff$ 存在 $g:B \rightarrow A$ 使得：
$$
g \circ f = I_A \quad \text{且} \quad f \circ g = I_B
$$
此时 $g = f^{-1}$

**证明**：
（$\Rightarrow$）若 $f$ 可逆，取 $g = f^{-1}$ 即满足条件。

（$\Leftarrow$）假设存在 $g$ 满足条件：
- **单射性**：设 $x_1, x_2 \in A$，$f(x_1) = f(x_2)$，则：
  $$x_1 = I_A(x_1) = g(f(x_1)) = g(f(x_2)) = I_A(x_2) = x_2$$
- **满射性**：$\forall y \in B$，$f(g(y)) = I_B(y) = y$，即 $x = g(y)$ 满足 $f(x) = y$
- **唯一性**：$\forall y \in B$，$f(g(y)) = I_B(y) = y$，所以 $g(y) = f^{-1}(y)$

---

### 复合映射的逆

**命题6**：若 $f:A \rightarrow B$ 和 $g:B \rightarrow C$ 都可逆，则：
$$
(g \circ f)^{-1} = f^{-1} \circ g^{-1}
$$

**证明**：
$$(f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ I_B \circ f = I_A$$
$$(g \circ f) \circ (f^{-1} \circ g^{-1}) = g \circ I_B \circ g^{-1} = I_C$$

---

## 📌 像集与原像集

### 定义
- **像集**：$f(A) = \{f(x) \mid x \in A\}, \quad A \subset X$
- **原像集**：$f^{-1}(B) = \{x \in X \mid f(x) \in B\}, \quad B \subset Y$

### 单调性

**命题7**：
- 若 $A_1 \subset A_2 \subset X$，则 $f(A_1) \subset f(A_2)$
- 若 $B_1 \subset B_2 \subset Y$，则 $f^{-1}(B_1) \subset f^{-1}(B_2)$

**证明**：
- 若 $y \in f(A_1)$，则 $\exists x \in A_1$ 使 $y = f(x)$，由于 $A_1 \subset A_2$，所以 $x \in A_2$，故 $y \in f(A_2)$
- 若 $x \in f^{-1}(B_1)$，则 $f(x) \in B_1 \subset B_2$，所以 $x \in f^{-1}(B_2)$

---

## 📌 幂集与不动点

### 幂集
**定义**：$2^X = \{A : A \subset X\}$ 称为 $X$ 的幂集

### 单调映射与不动点

**定义**：$F:2^X \rightarrow 2^X$ 是单调增的，如果：
$$
S_1 \subset S_2 \subset X \implies F(S_1) \subset F(S_2)
$$

**定义**：$A \subset X$ 是 $F$ 的不动点，如果 $F(A) = A$

---

**命题8**：若 $F:2^X \rightarrow 2^X$ 单调增，则 $F$ 有不动点

**证明**：
记 $\Omega = \{S \subset X : S \subset F(S)\}$，由于 $\emptyset \in \Omega$，故 $\Omega \neq \emptyset$。

令 $A = \bigcup_{S \in \Omega} S$，下证 $F(A) = A$：

1. 设 $s \in \Omega$，则 $s \in F(s) \subset F(A)$，所以 $A \subset F(A)$
2. 由 $A \subset F(A)$ 得 $F(A) \subset F(F(A))$，所以 $F(A) \subset \Omega$
3. 由 $F(A) \subset \Omega$ 得 $F(A) \subset A$

综上，$F(A) = A$。

---

## 📌 重要变换简介

### Galileo 变换
- **公式**：$\xi = x - vt, \quad \tau = t$
- **性质**：双射，$(G_v)^{-1} = G_{-v}$，$G_u \circ G_v = G_{u+v}$

### Lorentz 变换  
- **公式**：$\xi = \frac{x - vt}{\sqrt{1-(v/c)^2}}, \quad \tau = \frac{t-(v/c^2)x}{\sqrt{1-(v/c)^2}}$
- **性质**：双射，$L_v^{-1} = L_{-v}$，$L_u \circ L_v = L_w$（$w = \frac{u + v}{1+(uv)/c^2}$）

---

## 📌 核心要点总结

1. **复合映射**：满足结合律但不满足交换律
2. **映射分类**：单射、满射、双射的定义与区别
3. **逆映射**：仅双射有逆，满足复合恒等关系
4. **像与原像**：保持集合包含关系的单调性
5. **幂集与不动点**：单调映射在幂集上必有不动点
6. **物理变换**：Galileo变换（经典力学）与Lorentz变换（相对论）

---



---
title: 1.6 基数的比较
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
# §1.6 基数的比较

## 📌 基数比较的定义

**定义 1.8.1** 设 $A$ 和 $B$ 是两个集合，基数分别为 $\alpha$ 和 $\beta$：

- $\alpha = \beta$：若 $A$ 和 $B$ 之间存在双射
- $\alpha \leq \beta$（或 $\beta \geq \alpha$）：若 $A$ 和 $B$ 的某个子集之间存在双射
- $\alpha < \beta$（或 $\beta > \alpha$）：若 $\alpha \leq \beta$ 但 $\alpha \neq \beta$

---

## 📌 Schroeder-Bernstein 定理

### 定理 1.8.1 (Schroeder-Bernstein 定理)
设 $\alpha$ 和 $\beta$ 是两个基数，若 $\alpha \leq \beta$ 且 $\alpha \geq \beta$，则 $\alpha = \beta$

等价表述：若 $A_0$ 与 $B_0$ 的某个子集有双射，且 $B_0$ 与 $A_0$ 的某个子集有双射，则 $A_0$ 与 $B_0$ 有双射。

**证明**：

设 $A_1 \subset A_0$，$B_1 \subset B_0$，且存在双射：
$$\varphi : A_0 \rightarrow B_1, \quad \psi : B_0 \rightarrow A_1$$

定义序列：
$$B_{n+1} = \varphi(A_n), \quad A_{n+1} = \psi(B_n)$$

得到递减序列：
$$A_0 \supset A_1 \supset A_2 \supset \cdots, \quad B_0 \supset B_1 \supset B_2 \supset \cdots$$

双射关系：
$$\varphi|_{A_n \setminus A_{n+1}} : A_n \setminus A_{n+1} \rightarrow B_{n+1} \setminus B_{n+2}$$
$$\psi|_{B_n \setminus B_{n+1}} : B_n \setminus B_{n+1} \rightarrow A_{n+1} \setminus A_{n+2}$$

分解：
$$A_0 = \left( \bigcup_{n=0}^{\infty} (A_{2n} \setminus A_{2n+1}) \right) \cup \left( \bigcup_{n=0}^{\infty} (A_{2n+1} \setminus A_{2n+2}) \right) \cup \left( \bigcap_{n=0}^{\infty} A_n \right)$$
$$B_0 = \left( \bigcup_{n=0}^{\infty} (B_{2n} \setminus B_{2n+1}) \right) \cup \left( \bigcup_{n=0}^{\infty} (B_{2n+1} \setminus B_{2n+2}) \right) \cup \left( \bigcap_{n=0}^{\infty} B_n \right)$$

构造双射 $\vartheta : A_0 \rightarrow B_0$：
$$
\vartheta(x) = \begin{cases}\varphi(x), & x \in \left( \bigcup_{n=0}^{\infty} (A_{2n} \setminus A_{2n+1}) \right) \cup \left( \bigcap_{n=0}^{\infty} A_n \right) \\\psi^{-1}(x), & x \in\bigcup_{n=0}^{\infty} (A_{2n+1} \setminus A_{2n+2})\end{cases}
$$

$\vartheta$ 是 $A_0$ 到 $B_0$ 的双射。

---

## 📌 Cantor 定理

### 定理 1.8.2 (Cantor 定理)
设 $A$ 是一个集合，$2^A$ 表示 $A$ 的幂集（全体子集组成的集合），则 $A$ 与 $2^A$ 之间不可能建立双射。

**证明**：

假设存在双射 $\varphi : A \rightarrow 2^A$。

定义集合：
$$B = \{ x \in A : x \notin \varphi(x) \}$$

由于 $\varphi$ 是双射，存在 $y \in A$ 使得 $\varphi(y) = B$。

考虑两种情况：
1. 若 $y \in B$，则 $y \notin \varphi(y) = B$，矛盾
2. 若 $y \notin B$，则 $y \notin \varphi(y)$，由定义 $y \in B$，矛盾

因此假设错误，不存在这样的双射。

**推论**：任何基数都有比它更大的基数，最大基数不存在。

---

## 📌 自然数的良序性

### 定理 1.7.2
自然数集 $\mathbb{N}$ 是良序的，即任何非空子集 $S \subset \mathbb{N}$ 有最小元。

**证明**：

设 $S \neq \emptyset$ 且无最小元。显然 $1 \notin S$。

定义：
$$T = \{ n \in \mathbb{N} : \forall m \in S (n < m) \}$$

证明 $T$ 满足归纳性质：
- 设 $n \in \mathbb{N}$ 满足 $\forall x < n (x \in T)$
- 若 $n \notin T$，则 $\exists m \in S (m \leq n)$
  - 若 $m < n$，则 $m \in T$，由 $T$ 定义得 $m < m$，矛盾
  - 若 $m = n$，则 $m$ 是 $S$ 的最小元，矛盾
- 故 $n \in T$

由归纳法，$T = \mathbb{N}$，从而 $S = \emptyset$，矛盾。

---

## 📌 核心要点总结

1. **基数比较**：通过双射和单射定义基数的大小关系
2. **Schroeder-Bernstein定理**：基数的"三明治"性质，是证明集合等势的有力工具
3. **Cantor定理**：幂集的基数严格大于原集的基数，不存在最大基数
4. **自然数良序性**：自然数集的任何非空子集都有最小元

---





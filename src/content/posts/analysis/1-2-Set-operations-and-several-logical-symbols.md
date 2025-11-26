---
title: 1.2 集合运算及几个逻辑符号
pubDate: 2025-11-24
pubTime: "09:00:00"
pinned: false
description: Analysis note
published: 2025-11-24
tags: [math,analysis,notes]
category: Analysis
licenseName: "Unlicensed"
author: nikonikoni
draft: false
---
# §1.2 集合运算及几个逻辑符号

## 逻辑符号补充

| 符号 | 含义 | 说明 |
|------|------|------|
| $\lor$ | 或 | 命题 $P$ 与命题 $Q$ 中至少有一个成立 |
| $\land$ | 与 | 命题 $P$ 与命题 $Q$ 同时成立 |
| $\exists$ | 存在 | (至少)有一个 |
| $\forall$ | 任意 | 对于一切 |

---

## 集合的基本运算

### 并集 (Union)
**定义 1.2.1**：设 $A, B$ 是两个集合，$A, B$ 之并定义为：
$$
A \cup B = \{x : (x \in A) \lor (x \in B)\}
$$

**推广**：设 $\{E_\alpha : \alpha \in I\}$ 是集合族，则：
$$
\bigcup_{\alpha \in I} E_\alpha = \{x : \exists \alpha \in I(x \in E_\alpha)\}
$$

### 交集 (Intersection)
**定义 1.2.3**：设 $\{E_\alpha : \alpha \in I\}$ 是集合族，则：
$$
\bigcap_{\alpha \in I} E_\alpha = \{x : \forall \alpha \in I(x \in E_\alpha)\}
$$

### 差集 (Difference)
**定义 1.2.4**：两个集合之差定义为：
$$
A \backslash B = \{x \in A : x \notin B\}
$$

### 余集 (Complement)
**定义 1.2.5**：设 $X$ 为空间，$A \subset X$，则 $A$ 的余集定义为：
$$
A^C = X \backslash A
$$

**性质**：
$$
(A^C)^C = A
$$

---

## 常用数集记号

| 记号 | 涵义 | 记号 | 涵义 |
|------|------|------|------|
| $\mathbb{N}$ | 自然数全体 | $\mathbb{Z}$ | 整数全体 |
| $\mathbb{Q}$ | 有理数全体 | $\mathbb{R}$ | 实数全体 |
| $\mathbb{C}$ | 复数全体 | $\mathbb{Z}^+$ | 非负整数全体 |
| $\mathbb{Q}^+$ | 非负有理数全体 | $\mathbb{R}^+$ | 非负实数全体 |

---

## 集合运算律

### 结合律
$$
(A \cup B) \cup C = A \cup (B \cup C), \quad (A \cap B) \cap C = A \cap (B \cap C)
$$

### 交换律
$$
A \cup B = B \cup A, \quad A \cap B = B \cap A
$$

### 分配律
$$
A \cap \left( \bigcup_{\alpha \in I} B_\alpha \right) = \bigcup_{\alpha \in I} (A \cap B_\alpha)
$$
$$
A \cup \left( \bigcap_{\alpha \in I} B_\alpha \right) = \bigcap_{\alpha \in I} (A \cup B_\alpha)
$$

**证明**：这里给出了第二个等式的证明：

**第一部分**：$A \cup \left( \bigcap_{\alpha \in I} B_\alpha \right) \subset \bigcap_{\alpha \in I} (A \cup B_\alpha)$

因 $\forall \beta \in I ((A \subset A \cup B_\beta) \land (\bigcap_{\alpha \in I} B_\alpha \subset A \cup B_\beta))$，故
$$
\forall \beta \in I \left( A \cup \left( \bigcap_{\alpha \in I} B_\alpha \right) \subset A \cup B_\beta \right)
$$
这就证明了
$$
A \cup \left( \bigcap_{\alpha \in I} B_\alpha \right) \subset \bigcap_{\alpha \in I} (A \cup B_\alpha)
$$

**第二部分**：$\bigcap_{\alpha \in I} (A \cup B_\alpha) \subset A \cup \left( \bigcap_{\alpha \in I} B_\alpha \right)$

设 $x \in \bigcap_{\alpha \in I} (A \cup B_\alpha)$，则 $(x \in A)$ 或 $\forall \alpha \in I (x \in B_\alpha)$，所以
$$
x \in A \cup \left( \bigcap_{\alpha \in I} B_\alpha \right)
$$

第一个分配律的证明同上。

---

## 重要定理

### 定理 1.2.1 (de Morgan对偶原理)

设 $\{E_\alpha : \alpha \in I\}$ 是一族集合，则：

$$
\left( \bigcup_{\alpha \in I} E_\alpha \right)^C = \bigcap_{\alpha \in I} E_\alpha^C
$$
$$
\left( \bigcap_{\alpha \in I} E_\alpha \right)^C = \bigcup_{\alpha \in I} E_\alpha^C
$$
**证明**：

**第一个等式**：

**包含关系 1**：$\left( \bigcup_{\alpha \in I} E_\alpha \right)^C \subseteq \bigcap_{\alpha \in I} E_\alpha^C$

若 $x \in \left( \bigcup_{\alpha \in I} E_\alpha \right)^C$，则 $x \notin \bigcup_{\alpha \in I} E_\alpha$。
因此，$\forall \alpha \in I(x \notin E_\alpha)$。
换言之，$\forall \alpha \in I(x \in E_\alpha^C)$，即 $x \in \bigcap_{\alpha \in I} E_\alpha^C$。

**包含关系 2**：$\bigcap_{\alpha \in I} E_\alpha^C \subseteq \left( \bigcup_{\alpha \in I} E_\alpha \right)^C$

若 $x \in \bigcap_{\alpha \in I} E_\alpha^C$，即 $\forall \alpha \in I(x \in E_\alpha^C)$。
换言之，$\forall \alpha \in I(x \notin E_\alpha)$。
因而，$x \notin \bigcup_{\alpha \in I} E_\alpha$，故 $x \in \left( \bigcup_{\alpha \in I} E_\alpha \right)^C$。

**第二个等式**：

作为第一个等式的推论：
$$
\begin{aligned}
\left( \bigcap_{\alpha \in I} E_\alpha \right)^C 
&= \left[ \bigcap_{\alpha \in I} (E_\alpha^C)^C \right]^C \\
&= \left[ \left( \bigcup_{\alpha \in I} E_\alpha^C \right)^C \right]^C \\
&= \bigcup_{\alpha \in I} E_\alpha^C
\end{aligned}
$$

---

## 空间概念

- **空间**：在一个数学问题中，使得问题中出现的所有集合都是其子集的集合 $X$
- **余集**总是相对于某个特定的空间而言的


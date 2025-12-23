---
title: 2.6 函数极限
pubDate: 2025-12-23
pinned: false
description: Analysis note
published: 2025-12-23 
tags: [math,analysis,notes]
category: Analysis
licenseName: "Unlicensed"
author: nikonikoni
draft: false
---

# 2.6 函数极限

**定义 1 (聚点):**
设 $A \subset \mathbb{R}, A \neq \emptyset$，设 $x_0 \in \mathbb{R}$。如果 $\forall \varepsilon > 0$，满足：
$$
A \cap ((x_0 - \varepsilon, x_0 + \varepsilon) \setminus \{x_0\}) \neq \emptyset
$$
称 $x_0$ 是 $A$ 的**聚点** (accumulation point / cluster point)。

**Remark:**
1.  $A$ 不一定有聚点。
2.  若 $A$ 有聚点，该聚点不一定属于 $A$。
3.  若 $x_0$ 是 $A$ 的聚点，则 $\forall \varepsilon > 0$，
$$
A \cap ((x_0 - \varepsilon, x_0 + \varepsilon) \setminus \{x_0\}) \text{ 为无限集}
$$

> **证明 (iii):**
> 假设 $A \cap ((x_0 - \varepsilon, x_0 + \varepsilon) \setminus \{x_0\})$ 为有限集，等于 $\{x_1, x_2, \dots, x_n\}$。
> 取
> $$
> \varepsilon' = \frac{1}{2} \min \{|x_0 - x_1|, \dots, |x_0 - x_n|\} > 0
> $$
> 则
> $$
> A \cap ((x_0 - \varepsilon', x_0 + \varepsilon') \setminus \{x_0\}) = \emptyset
> $$
> 这与 $x_0$ 是聚点矛盾！

**定义 2 (孤立点):**
设 $A \subset \mathbb{R}, A \neq \emptyset$，设 $x_0 \in \mathbb{R}$。若 $\exists \varepsilon > 0$，使得
$$
A \cap (x_0 - \varepsilon, x_0 + \varepsilon) = \{x_0\}
$$
称 $x_0$ 是 $A$ 的**孤立点**。

**Remark:**
1.  $A$ 的孤立点是 $A$ 中的点。
2.  设 $x_0 \in A$，则 $x_0$ 要么是 $A$ 的聚点，要么是 $A$ 的孤立点。

**Eg 1:** 设 $A = [0, 1] \cup \{2\}$，则 $2$ 是 $A$ 的孤立点。

**命题 1 (聚点的序列刻画):**
设 $A \subset \mathbb{R}, A \neq \emptyset$。设 $x_0 \in \mathbb{R}$，则 $x_0$ 是 $A$ 的聚点当且仅当存在 $x_n \in A \setminus \{x_0\}$ ($n=1,2,\dots$) 使得
$$
x_n \to x_0
$$

> **证明:**
> $(\Leftarrow)$ 设 $\varepsilon > 0$，则 $\exists N \in \mathbb{N}^*$ 使 $|x_n - x_0| < \varepsilon, \forall n \ge N$。
> 则
> $$
> x_N \in A \cap ((x_0 - \varepsilon, x_0 + \varepsilon) \setminus \{x_0\}) \neq \emptyset
> $$
>
> $(\Rightarrow)$ 设 $n \in \mathbb{N}^*$。则 $A \cap ((x_0 - \frac{1}{n}, x_0 + \frac{1}{n}) \setminus \{x_0\}) \neq \emptyset$。
> 设 $x_n \in A \cap ((x_0 - \frac{1}{n}, x_0 + \frac{1}{n}) \setminus \{x_0\}), n=1,2,\dots$
> 则 $x_n \in A \setminus \{x_0\}$ 且
> $$
> x_0 - \frac{1}{n} \le x_n \le x_0 + \frac{1}{n}
> $$
> 由夹逼定理，$x_n \to x_0$。

**定义 3 ($\varepsilon-\delta$ 定义):**
设 $f: A \subset \mathbb{R} \to \mathbb{R}$，$x_0$ 是 $A$ 的聚点，$a \in \mathbb{R}$。
若 $\forall \varepsilon > 0, \exists \delta > 0$，使得
$$
|f(x) - a| < \varepsilon, \quad \forall x \in A, 0 < |x - x_0| < \delta
$$
称 $a$ 是 $f$ 在 $x_0$ 的极限，记为 $\lim_{x \to x_0} f(x) = a$。

**Remark:** $f$ 在 $x_0$ 不一定有定义，且 $\lim_{x \to x_0} f(x)$ 与 $f(x_0)$ 并不总相等。

**Eg 2:** 设 $f(x) = x^2, x \in (0, +\infty)$。证：$0$ 是 $f$ 在 $x=0$ 处的极限。
> **证明:** 设 $\varepsilon > 0$，令 $\delta = \varepsilon^{1/2}$。则
> $$
> |f(x) - 0| = x^2 < \varepsilon, \quad \forall 0 < |x| < \delta
> $$

**Eg 3:** 设 $H: \mathbb{R} \to \mathbb{R}$ (Heaviside函数):
$$
H(x) = \begin{cases} 1, & x > 0 \\ 0, & x \le 0 \end{cases}
$$
证明 $H$ 在 $0$ 点没极限。
> **证明:** 假设 $a \in \mathbb{R}$ 是 $H$ 在 $x=0$ 处的极限。
> 则 $\exists \delta > 0$ s.t. $|H(x) - a| < \frac{1}{2}, \forall 0 < |x| < \delta$。
> $$
> \therefore |H(\frac{\delta}{2}) - a| < \frac{1}{2} \Rightarrow |1-a| < \frac{1}{2}
> $$
> 且
> $$
> |H(-\frac{\delta}{2}) - a| < \frac{1}{2} \Rightarrow |0-a| < \frac{1}{2} \Rightarrow |a| < \frac{1}{2}
> $$
> 由三角不等式
> $$
> 1 = |1-a+a| \le |1-a| + |a| < \frac{1}{2} + \frac{1}{2} = 1
> $$
> 矛盾！

**命题 2 (唯一性):**
若极限存在，则唯一。即若 $a, b$ 是 $f$ 在 $x_0$ 的极限，则 $a=b$。
> **证明:** 反证法。取 $\varepsilon = \frac{|a-b|}{2}$，可得 $|a-b| < |a-b|$，矛盾。

**命题 3 (等价叙述):**
设 $f: A \subset \mathbb{R} \to \mathbb{R}$，$x_0$ 是 $A$ 聚点，$a \in \mathbb{R}$，设 $C > 0$。则下列叙述等价：
(i) $a$ 是 $f$ 在 $x_0$ 点极限。
(ii) $\forall \varepsilon > 0, \exists \delta > 0$ 使得：
$$
|f(x) - a| \le C\varepsilon, \quad \forall x \in A \cap (x_0 - \delta, x_0 + \delta) \setminus \{x_0\}
$$
> **证明:**
> $(\Rightarrow)$ 设 $\varepsilon > 0, \exists \delta > 0 \to |f(x) - a| < C\varepsilon$ (显然成立，因为 $C\varepsilon$ 也是任意正数)。
> $(\Leftarrow)$ 设 $\varepsilon' > 0$。取 $\varepsilon = \varepsilon'/C$。
> $$
> \exists \delta > 0 \to |f(x) - a| \le C (\varepsilon'/C) = \varepsilon'
> $$

**命题 4 (局部性):**
设 $\delta_0 > 0$。下列叙述等价：
(i) $a$ 是 $f$ 在 $x_0$ 点极限。
(ii) $\forall \varepsilon > 0, \exists 0 < \delta < \delta_0$ 使得：
$$
|f(x) - a| < \varepsilon, \quad \forall x \in A, 0 < |x - x_0| < \delta
$$
> **证明:** $(i) \Rightarrow (ii)$。设 $\varepsilon > 0$，由定义 $\exists \delta' > 0 \to |f(x) - a| < \varepsilon, \forall x \in A, 0 < |x - x_0| < \delta'$。
> 令 $\delta = \frac{1}{2} \min\{\delta_0, \delta'\}$，则 $0 < \delta < \delta_0$ 且满足条件。

**命题 5 (限制):**
设 $f: A \to \mathbb{R}$，$x_0$ 是 $A$ 聚点。设 $\delta_0 > 0$。定义 $g: B \to \mathbb{R}$，其中 $B = A \cap (x_0 - \delta_0, x_0 + \delta_0)$，$g(x) = f(x), x \in B$。
则 $x_0$ 是 $B$ 聚点，且
$$
a = \lim_{x \to x_0} f(x) \iff a = \lim_{x \to x_0} g(x)
$$
*Remark: 又称 $g$ 为 $f$ 在 $B$ 上的限制，记为 $g = f|_B$。*

**命题 6 (Sequential Criterion):**
设 $f: A \to \mathbb{R}$，$x_0$ 是聚点，$a = \lim_{x \to x_0} f(x)$。若 $x_n \in A \setminus \{x_0\}, x_n \to x_0$，则
$$
f(x_n) \to a
$$
*Remark: 由此，我们可以利用函数极限来求数列极限。*

> **证明:**
> 设 $\varepsilon > 0$，存在 $\delta > 0$ 使得
> $$
> |f(x) - a| < \varepsilon, \quad \forall x \in A, 0 < |x - x_0| < \delta
> $$
> 同时存在 $N \in \mathbb{N}^*$，使 $|x_n - x_0| < \delta, \forall n \ge N$。
> 故 $|f(x_n) - a| < \varepsilon \implies f(x_n) \to a$。

**Eg 4:** 求 $\lim_{n \to +\infty} n^2 (\frac{1}{n} - \ln(1+\frac{1}{n}))$。
> **解:** 令 $x = \frac{1}{n}$，原式变为：
> $$
> \lim_{x \to 0} \frac{x - \ln(1+x)}{x^2} = \frac{1}{2} \quad (\text{洛必达法则})
> $$

**命题 7 (Heine 归结原理):**
设 $f: A \to \mathbb{R}$，$x_0$ 是 $A$ 聚点，则下列叙述等价：
(i) $f$ 在 $x_0$ 点有极限。
(ii) 若 $x_n \in A \setminus \{x_0\}, x_n \to x_0$，则 $\{f(x_n)\}$ 收敛。

> **证明:**
> $(i) \Rightarrow (ii)$: 由命题 6，若 $\lim f(x) = a$，则 $f(x_n) \to a$，即收敛。
> $(ii) \Rightarrow (i)$:
> (第一步) 证明极限唯一。设 $x_n \to x_0$，由 (ii) $f(x_n)$ 收敛，记 $a = \lim f(x_n)$。需证对任意序列极限均为 $a$。
> 反证：假设存在 $y_n \to x_0$ 使得 $f(y_n) \to b$ 且 $b \neq a$。
> 令 $z_{2n-1} = x_n, z_{2n} = y_n$。则 $z_n \to x_0$。
> 但 $f(z_{2n-1}) \to a, f(z_{2n}) \to b$，故 $f(z_n)$ 不收敛，矛盾！
> (第二步) 证明 $a$ 是函数极限。
> 反证：假设 $a$ 不是 $f$ 在 $x_0$ 的极限。
> $$
> \exists \varepsilon_0 > 0, \forall \delta > 0, \exists x \in A, 0 < |x - x_0| < \delta \text{ s.t. } |f(x) - a| \ge \varepsilon_0
> $$
> 取 $\delta = \frac{1}{n}$，则
> $$
> \exists y_n \in A, 0 < |y_n - x_0| < \frac{1}{n} \text{ s.t. } |f(y_n) - a| \ge \varepsilon_0
> $$
> $y_n \to x_0$，由 (ii) $f(y_n)$ 应收敛，且由第一步极限应为 $a$，但 $|f(y_n) - a| \ge \varepsilon_0$，矛盾！

**推论 8:** 设 $f: A \to \mathbb{R}$，$x_0$ 聚点。若 $\forall x_n \in A \setminus \{x_0\}, x_n \to x_0$ 都有 $f(x_n) \to a$，则 $a = \lim_{x \to x_0} f(x)$。

**定义 4:** 设 $f: A \to \mathbb{R}, B \subset A, B \neq \emptyset$。若存在 $M > 0$ 使
$$
|f(x)| \le M, \quad \forall x \in B
$$
称 $f$ 在 $B$ 上有界。

**命题 9 (局部有界性):**
设 $f: A \to \mathbb{R}, x_0$ 是聚点。若 $f$ 在 $x_0$ 有极限，则存在 $\delta > 0$，使 $f$ 在 $A \cap (x_0 - \delta, x_0 + \delta)$ 上有界。

> **证明:** 由定义，$\exists \delta > 0$ s.t. $|f(x) - a| \le 100$，$\forall x \in A \cap (x_0 - \delta, x_0 + \delta) \setminus \{x_0\}$。
> 其中 $a = \lim f(x)$。则 $|f(x)| \le |a| + 100$。
> 令 $M = \max\{|a|+100, |f(x_0)| \text{ (若 } x_0 \in A)\}$。则 $|f(x)| \le M$。

**命题 10 (保号性):**
设 $f: A \to \mathbb{R}, x_0$ 聚点，$\lim_{x \to x_0} f(x) = a$。
(i) 若 $a < b$，则 $\exists \delta > 0$ 使得
$$
f(x) < b, \quad \forall x \in A, 0 < |x - x_0| < \delta
$$
(ii) 若 $a > b$，则 $\exists \delta > 0$ 使得
$$
f(x) > b, \quad \forall x \in A, 0 < |x - x_0| < \delta
$$
(iii) 若 $a \neq 0$ (即 $a > 0$ 或 $a < 0$)，则 $\exists \delta > 0$ s.t. $|f(x)| > r = |a|/2$。

**命题 11 (夹逼定理):**
设 $f, g, h: A \to \mathbb{R}, x_0$ 聚点。$a = \lim f(x) = \lim h(x)$。
若 $\exists \delta_0 > 0$ 使得
$$
f(x) \le g(x) \le h(x), \quad \forall x \in A, 0 < |x - x_0| < \delta_0
$$
则 $a = \lim_{x \to x_0} g(x)$。

> **证明:** 设 $x_n \in A \setminus \{x_0\}, x_n \to x_0$。
> $\exists N \in \mathbb{N}^*$ s.t. $|x_n - x_0| < \delta_0, \forall n \ge N$。
> 则 $f(x_n) \le g(x_n) \le h(x_n), \forall n \ge N$。
> 故 $f(x_n) \to a, h(x_n) \to a$，由数列夹逼定理 $g(x_n) \to a$。
> $\therefore \lim_{x \to x_0} g(x) = a$。

**命题 12 (不等式取极限):**
设 $f, g: A \to \mathbb{R}, a = \lim f, b = \lim g$。若 $\exists \delta_0 > 0$ s.t. $f(x) \le g(x)$，则
$$
a \le b
$$
*Remark: 即使 $f(x) < g(x)$，我们也只能得到 $a \le b$ 而非 $a < b$。*

**推论 13:**
(i) 若 $\exists \delta_0 > 0$ s.t. $f(x) \le b$，则 $a \le b$。
(ii) 若 $\exists \delta_0 > 0$ s.t. $f(x) \ge b$，则 $a \ge b$。

**命题 14 (四则运算):**
设 $f, g: A \to \mathbb{R}, a = \lim f, b = \lim g$。
(i)
$$
\lim (\alpha f(x) + \beta g(x)) = \alpha a + \beta b
$$
(ii)
$$
\lim (f(x) g(x)) = ab
$$
(iii) 若 $b \neq 0, g(x) \neq 0$，则
$$
\lim \frac{f(x)}{g(x)} = \frac{a}{b}
$$

**定理 15 (Cauchy 收敛定理):**
设 $f: A \to \mathbb{R}, x_0$ 是聚点。则 $f$ 在 $x_0$ 有极限当且仅当 $\forall \varepsilon > 0, \exists \delta > 0$ 使得
$$
|f(x) - f(y)| < \varepsilon, \quad \forall x, y \in A \cap ((x_0 - \delta, x_0 + \delta) \setminus \{x_0\})
$$

> **证明:**
> **必要性 ($\Rightarrow$):** 设 $\lim f(x) = a$。
> $$
> |f(x) - f(y)| \le |f(x) - a| + |a - f(y)| < \varepsilon/2 + \varepsilon/2 = \varepsilon
> $$
> **充分性 ($\Leftarrow$):**
> 设 $x_n \in A \setminus \{x_0\}, x_n \to x_0$。
> $\forall \varepsilon > 0, \exists \delta > 0$ 满足条件。$\exists N$ s.t. $x_n, x_m \in (x_0-\delta, x_0+\delta)$。
> 则 $|f(x_n) - f(x_m)| < \varepsilon$。
> $\therefore \{f(x_n)\}$ 是柯西列 $\implies \{f(x_n)\}$ 收敛。
> $\therefore f$ 在 $x_0$ 有极限。

**Eg 5:** 设 $f: (-\sigma, \sigma) \to \mathbb{R}, f(0)=0, \lim_{x \to 0} \frac{f(x)}{x^2} = 1$。
(i) 求 $\lim_{x \to 0} f(x)$。
(ii) $x_0=0$ 是否是 $f(x)$ 极值点？
(iii) 求 $f'(0)$。

> **解:**
> (i)
> $$
> \lim_{x \to 0} f(x) = \lim_{x \to 0} \left(\frac{f(x)}{x^2} \cdot x^2\right) = 1 \cdot 0 = 0
> $$
> (ii) 因为 $\lim \frac{f(x)}{x^2} = 1 > 0$，$\exists \delta > 0$ 使得
> $$
> \frac{f(x)}{x^2} > 0, \quad \forall x \in (-\sigma, \sigma) \cap ((-\delta, \delta) \setminus \{0\})
> $$
> 令 $\delta' = \min\{\delta, \sigma\}$。则
> $$
> f(x) > 0, \quad \forall x \in (-\delta', \delta') \setminus \{0\}
> $$
> 又 $f(0)=0$，故 $x_0=0$ 是 $f$ 的极小值点。
> (iii)
> $$
> f'(0) = \lim_{x \to 0} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0} \frac{f(x)}{x} = \lim_{x \to 0} \left(\frac{f(x)}{x^2} \cdot x\right) = 1 \cdot 0 = 0
> $$

**Eg 6 (单调有界原理):**
设 $f: [a, +\infty) \to \mathbb{R}$ 单调增，证：$f$ 在 $x \to +\infty$ 处有极限。
> **法一 (序列法):** 令 $x_n = a + n$。$\{f(x_n)\}$ 单调减且有界 $\implies$ 收敛。
> **法二 (确界法):**
> $\forall x > a$，有 $f(x) \ge f(a)$。令 $V = \{f(x) \mid x \in (a, +\infty)\}$。
> 若 $f$ 有上界，记 $L = \sup V$。
> $$
> \forall \varepsilon > 0, \exists x_0 \in (a, +\infty) \text{ s.t. } f(x_0) > L - \varepsilon
> $$
> 取 $\delta = x_0 - a$ (或 $M = x_0$)，则
> $$
> L - \varepsilon < f(x_0) \le f(x) \le L < L + \varepsilon
> $$

**定义 5 (极小值点):**
设 $f: (a, b) \to \mathbb{R}, x_0 \in (a, b)$。
若 $\exists 0 < \delta < \min\{b-x_0, x_0-a\}$ 使得
$$
f(x) \ge f(x_0), \quad \forall x \in (x_0-\delta, x_0+\delta)
$$
称 $x_0$ 是 $f$ 的极小值点。
若不等号为 $f(x) > f(x_0)$ (在去心邻域内)，则称为严格极小值点。

**定义 6 ($\mathbb{R}^n$ 中的极限):**
设 $x_k, x_0 \in \mathbb{R}^n, k=1,2,\dots$。若 $\forall \varepsilon > 0, \exists N \in \mathbb{N}^*$ 使得
$$
|x_k - x_0| < \varepsilon, \quad \forall k \ge N
$$
称 $x_0$ 是 $\{x_k\}$ 的极限。

**Eg 7:** 设 $x_k, y_k, x_0, y_0 \in \mathbb{R}^n, x_k \to x_0, y_k \to y_0$。
证:
(i) $|x_k| \to |x_0|$
(ii) $x_k \cdot y_k \to x_0 \cdot y_0$

> **证明 (ii):**
> $$
> 0 \le |x_k y_k - x_0 y_0| = |x_k y_k - x_k y_0 + x_k y_0 - x_0 y_0|
> $$
> $$
> \le |x_k| |y_k - y_0| + |y_0| |x_k - x_0| \to 0
> $$

**定义 7 (正无穷远点的极限):**
设 $f: A \subset \mathbb{R} \to \mathbb{R}$，设 $A \cap (M, +\infty) \neq \emptyset, \forall M \in \mathbb{R}$。设 $a \in \mathbb{R}$。若 $\forall \varepsilon > 0, \exists M \in \mathbb{R}$ s.t.
$$
|f(x) - a| < \varepsilon, \quad \forall x \in A \cap (M, +\infty)
$$
称 $a$ 是 $f$ 在正无穷远点的极限，记为 $\lim_{x \to +\infty} f(x) = a$。
同时 $\sup A = +\infty$，即 $A$ 无上界。
同理定义 $x \to -\infty$ 时，$f(x) \to a \in \mathbb{R}$ 的情况。

**Eg 8:** 设 $a > 0, f(x) = \frac{1}{x^a}, x > 0$。则 $0$ 是 $f$ 在正无穷远点的极限。
> **证明:**
> 设 $\varepsilon > 0$，令 $M = \frac{1}{\varepsilon^{1/a}}$。则
> $$
> |f(x) - a| < \varepsilon, \quad \forall x > M
> $$

**Eg 9:** 设 $f(x) = \cos x$。证：$f$ 在正无穷远点没极限。
> **证明:**
> 设 $f$ 在正无穷远点有极限，且极限为 $a \in \mathbb{R}$。
> 则 $\exists M \in \mathbb{R}$ s.t.
> $$
> |\cos x - a| < 0.1, \quad \forall x > M
> $$
> 因为 $\lim_{n \to \infty} 2n\pi = +\infty$，故 $\exists n \in \mathbb{N}^*$ 使 $2n\pi > M$。
> 则
> $$
> |\cos(2n\pi) - a| = |1 - a| < 0.1
> $$
> 因为 $\lim_{n \to \infty} (2n+1)\pi = +\infty$，故 $\exists m \in \mathbb{N}^*$ 使 $(2m+1)\pi > M$。
> 则
> $$
> |\cos((2m+1)\pi) - a| = |-1 - a| < 0.1
> $$
> 由三角不等式：$2 = |1 - (-1)| \le |1-a| + |-1-a| < 0.2$，矛盾！

**命题 16 (唯一性 - 正无穷):**
设 $f: A \subset \mathbb{R} \to \mathbb{R}, A \cap (M, +\infty) \neq \emptyset, \forall M \in \mathbb{R}$。若 $a, b$ 都是 $f$ 在正无穷远点的极限，则 $a = b$。
> **证明:**
> 设 $\varepsilon > 0$，则 $\exists M_1, M_2 \in \mathbb{R}$ s.t.
> $$
> |f(x) - a| < \varepsilon, \quad \forall x \in A \cap (M_1, +\infty)
> $$
> $$
> |f(x) - b| < \varepsilon, \quad \forall x \in A \cap (M_2, +\infty)
> $$
> 令 $M = \max\{M_1, M_2\}$，则 $A \cap (M, +\infty) \neq \emptyset$。任取 $x_0 \in A \cap (M, +\infty)$。
> 则
> $$
> |a - b| \le |f(x_0) - a| + |f(x_0) - b| \le 2\varepsilon
> $$
> 由 $\varepsilon$ 的任意性，$\therefore a = b$。
> *负无穷极限情况同理。*

**Eg 10:** 设 $f: (0, +\infty) \to \mathbb{R}, a \in \mathbb{R}$。证：$\lim_{x \to +\infty} f(x) = a \iff \lim_{t \to 0^+} f(\frac{1}{t}) = a$。
> **证明:**
> $(\Leftarrow)$ 设 $\varepsilon > 0$，则 $\exists \delta > 0$ s.t.
> $$
> |f(\frac{1}{t}) - a| < \varepsilon, \quad \forall 0 < t < \delta
> $$
> 令 $M = \frac{1}{\delta}$，则当 $x > M$ 时，
> $$
> |f(x) - a| < \varepsilon
> $$
> $(\Rightarrow)$ 设 $\varepsilon > 0$，则 $\exists M \in \mathbb{R}$ s.t.
> $$
> |f(x) - a| < \varepsilon, \quad \forall x \in A \cap (M, +\infty)
> $$
> 令 $\delta = \frac{1}{|M|+1}$，则
> $$
> |f(\frac{1}{t}) - a| < \varepsilon, \quad \forall 0 < t < \delta
> $$

**Eg 11:** $f(x) = e^x, x \in \mathbb{R}$。则 $0$ 是 $f$ 在负无穷远极限。
> **证明:**
> 设 $\varepsilon > 0$，令 $M = \ln \varepsilon$。则
> $$
> |f(x) - 0| = e^x < \varepsilon, \quad \forall x < M \quad \square
> $$

**命题 17:** 设 $f: A \subset \mathbb{R} \to \mathbb{R}$。若 $a, b$ 都是 $x$ 在负无穷远极限，则 $a = b$。

**命题 18 (正无穷远点和负无穷远点极限可互相关换):**
设 $f: A \subset \mathbb{R} \to \mathbb{R}$，其中 $A$ 满足：$\forall M \in \mathbb{R}, A \cap (-\infty, M) \neq \emptyset$。定义 $g: -A \to \mathbb{R}$，其中：
$$
-A = \{-x : x \in A\}, \quad g(x) = f(-x), \quad x \in -A
$$
设 $a \in \mathbb{R}$，则：
(i) $\forall M \in \mathbb{R}, (-A) \cap (M, +\infty) \neq \emptyset$
(ii) $\lim_{x \to -\infty} f(x) = a \iff \lim_{x \to +\infty} g(x) = a$

> **证明:**
> (i) 设 $x \in A \cap (-\infty, -M)$。
> 则 $-x \in (-A) \cap (M, +\infty)$。
> $$
> \therefore (-A) \cap (M, +\infty) \neq \emptyset
> $$
> (ii) $(\Rightarrow)$ 设 $\varepsilon > 0$。$\because \lim_{x \to -\infty} f(x) = a$，$\therefore \exists m \in \mathbb{R}$ s.t.
> $$
> |f(x) - a| < \varepsilon, \quad \forall x \in A, x < m
> $$
> 令 $M = -m$。设 $y \in -A, y > M$。则 $-y \in A, -y < m$。
> $$
> \therefore |f(-y) - a| < \varepsilon \implies |g(y) - a| < \varepsilon \quad \square
> $$
> $(\Leftarrow)$ 同理。

**Eg 12:** $\lim_{x \to +\infty} \frac{\ln x}{x^a} = 0, \quad a > 0$。
> **证明:**
> $\because \ln x \le \frac{x^d}{d} \quad (d > 0)$。
> $$
> \therefore 0 \le \frac{\ln x}{x^a} \le \frac{2}{a} \frac{1}{x^{a/2}}, \quad x \ge 1
> $$
> 由夹逼定理，
> $$
> \frac{\ln x}{x^a} \to 0 \quad (x \to +\infty)
> $$

**Eg 13:** $\lim_{x \to +\infty} \frac{x^m}{e^x} = 0, \quad m > 0$。
> **证明:**
> $e^x \ge \frac{x^n}{n!}, \quad x > 0$。
> 取 $n > m$。则
> $$
> 0 \le \frac{x^m}{e^x} \le \frac{x^m}{x^n} \cdot n!
> $$
> 由夹逼定理：
> $$
> \frac{x^m}{e^x} \to 0 \quad (x \to +\infty)
> $$

**定义 8:**
设 $f: A \subset \mathbb{R} \to \mathbb{R}, x_0 \in \mathbb{R}$ 是 $A$ 聚点。若 $\forall M > 0, \exists \delta > 0$ 使：
$$
f(x) > M, \quad \forall x \in A, 0 < |x - x_0| < \delta
$$
我们称当 $x$ 趋于 $x_0$ 时，$f(x)$ 趋于正无穷，记为 $\lim_{x \to x_0} f(x) = +\infty$。
同理定义 $x \to x_0, f(x) \to -\infty$ 的情况。

**Remark:**
1.  若当 $x \to x_0$ 时，$f(x)$ 趋于正（或负）无穷，则 $f$ 在 $x_0$ 的任意邻域内无界。
2.  因此 $f$ 在 $x_0$ 无极限。
3.  极限符号转换：

$$
\lim_{x \to x_0} f(x) = -\infty \iff \lim_{x \to x_0} -f(x) = +\infty
$$

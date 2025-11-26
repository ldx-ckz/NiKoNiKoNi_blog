---
title: 1.6 计数法
pubDate: 2025-11-26
pinned: false
description: Probability Theory note
published: 2025-11-26 
tags: [math,probability theory,notes]
category: Probability Theory
licenseName: "Unlicensed"
author: nikonikoni
draft: false
---
# 1.6 计数法

## 引入背景

在概率计算中，经常需要计算事件中试验结果的数量：

- **等概率模型**：$P(A) = \dfrac{A\text{中元素数目}}{\Omega\text{中元素数目}}$
- **相同概率事件**：$P(A) = p \cdot (A\text{中元素数目})$

## 计数准则

### 基本计数准则

考虑由 $r$ 个阶段组成的试验：
- 第1阶段有 $n_1$ 个可能结果
- 对第1阶段的任何结果，第2阶段有 $n_2$ 个可能结果
- 一般地，前 $r-1$ 阶段的任何结果，第 $r$ 阶段有 $n_r$ 个结果

则试验结果总数为：
$$n_1 n_2 \cdots n_r$$

### 应用场景
- 序贯过程计数
- 多阶段选择问题

## n选k排列

### 定义
从 $n$ 个不同对象中顺序选出 $k$ 个对象的方法数

### 排列数公式
- **k排列数**：$\dfrac{n!}{(n-k)!}$
- **全排列数**（$k=n$）：$n!$

### 性质
- 考虑对象的顺序
- $0! = 1$（约定）

## 组合

### 定义
从 $n$ 个元素的集合中选出 $k$ 个元素的子集数（不考虑顺序）

### 组合数公式
$$\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$$

### 与排列的关系
- 每个组合对应 $k!$ 个不同的排列
- $\dfrac{n!}{(n-k)!} = \binom{n}{k} \cdot k!$

### 重要性质
- **二项公式**：$\sum\limits_{k=0}^{n} \binom{n}{k} p^k (1-p)^{n-k} = 1$
- **特例**（$p=1/2$）：$\sum\limits_{k=0}^{n} \binom{n}{k} = 2^n$
- 组合解释：$n$ 元集合的所有子集个数为 $2^n$

## 分割

### 定义
将 $n$ 个元素的集合分解成 $r$ 个不相交子集，第 $i$ 个子集大小为 $n_i$，且 $\sum n_i = n$

### 多项系数公式
$$\binom{n}{n_1, n_2, \cdots, n_r} = \dfrac{n!}{n_1!n_2!\cdots n_r!}$$

### 推导过程
分阶段选择：
1. 从 $n$ 个元素选 $n_1$ 个：$\binom{n}{n_1}$
2. 从剩余 $n-n_1$ 个选 $n_2$ 个：$\binom{n-n_1}{n_2}$
3. 依此类推，乘积化简得上述公式

### 应用
- 相同字母异序词计数
- 分组问题

## 计数法汇总

| 计数类型 | 公式 | 说明 |
|---------|------|------|
| 排列数 | $n!$ | $n$ 个对象的全排列 |
| k排列数 | $\dfrac{n!}{(n-k)!}$ | $n$ 个对象取 $k$ 个的排列 |
| 组合数 | $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ | $n$ 个对象取 $k$ 个的组合 |
| 分割数 | $\binom{n}{n_1, n_2, \cdots, n_r} = \dfrac{n!}{n_1!n_2!\cdots n_r!}$ | 将 $n$ 个对象分成指定大小的 $r$ 组 |

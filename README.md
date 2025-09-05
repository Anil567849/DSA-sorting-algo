# Sorting Algorithms

This document provides an overview of different types of sorting algorithms, their complexities, and use cases.

## 1. Simple Sorts (Basic, O(n²))

### 1.1 Bubble Sort
- **Time Complexity**: O(n²) average & worst  
- **Space Complexity**: O(1) (in-place)  
- **When to use**: Small arrays  

### 1.2 Insertion Sort
- **Time Complexity**: O(n²) average & worst  
- **Space Complexity**: O(1)  
- **When to use**: Small or nearly sorted arrays  

### 1.3 Selection Sort
- **Time Complexity**: O(n²) always  
- **Space Complexity**: O(1)  
- **When to use**: Simple in-place sorting  

---

## 2. Efficient Sorts (O(n log n))

### 2.1 Merge Sort
- **Time Complexity**: O(n log n) all cases  
- **Space Complexity**: O(n) (requires extra array)  
- **When to use**: Large datasets; stable sort; linked lists  

### 2.2 Quick Sort
- **Time Complexity**: O(n log n) average, O(n²) worst  
- **Space Complexity**: O(log n) (recursive stack)  
- **When to use**: General-purpose, in-place sorting; fast for arrays.  

### 2.3 Heap Sort
- **Time Complexity**: O(n log n) all cases  
- **Space Complexity**: O(1) (in-place)  
- **When to use**: Large datasets; when O(n log n) guaranteed time is needed; not stable.  

---

## 3. Linear-time Sorts (O(n)), Limited Use Cases

### 3.1 Counting Sort
- **Time Complexity**: O(n + k), k = range of input  
- **Space Complexity**: O(n + k)  
- **When to use**: Integers with small range; stable.  

### 3.2 Radix Sort
- **Time Complexity**: O(d*(n + k)), d = number of digits  
- **Space Complexity**: O(n + k)  
- **When to use**: Integers or strings; fixed length; stable.  

### 3.3 Bucket Sort
- **Time Complexity**: O(n + k) average, O(n²) worst  
- **Space Complexity**: O(n + k)  
- **When to use**: Uniformly distributed data; floating-point numbers; stable.  

### 3.4 Dutch National Flag (DNF) / 3-way Partitioning
- **Time Complexity**: O(n)  
- **Space Complexity**: O(1)  
- **When to use**: Arrays with three distinct values; in-place partitioning.  

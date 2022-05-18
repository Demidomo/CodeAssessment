# Coderbyte



**_Product Rule **
_If the big O is the product of multiple terms, drop the constant terms. 
Recognize the constant 

O(4*n)  4 is the constant 
O(n) 

O(512*n) no matter how big is the constant it is still a constant 
O(n) 

O(n/3) = O((1.3)*n)
O(n)

O(5*n*n) = O(n*n) 
O(n^2) 

O(765) = O(1) 
Constant time 



**Sum Rule 
**O(n + 1000) 1000 is the constant value 
= O(n) 

O(n^2 + n) choose the term that is bigger 
O(n^2) 

O(n + 500 + n^3 + n^2) drop every value that is smaller
O(n^3) 


**Apply the Product Rule and then the Sum Rule 
**


O(5n^2 + 100n + 17) 
= O(n^2 + n + 1) 


O((n/3)^6 + 10n) 
= O(((1/3)n)^6 + n) 
= n^6 + n


**
Time Complexity **





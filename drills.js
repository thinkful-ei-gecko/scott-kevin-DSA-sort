/*
2.2 the pivot could have been 14 or 17. Both could yield the provided output.
We know that it had to have been 14 or 17 becuase no other number is in the correct spot if it had been the pivot



14, 17, 13, 15, 19, 10, 3, 16, 9,      12
10, 17, 13, 15, 19, 14, 3, 16, 9,      12
10, 3, 13, 15, 19, 14, 17, 16, 9,      12
10, 3, 9, 15, 19, 14, 17, 16, 13,      12

10, 3, 9,   12,   15, 19, 14, 17, 16, 13

10, 3,    9

3,   9,    10 -- list after second partitioning using last item 


14,      17, 13, 15, 19, 10, 3, 16, 9, 12

14,      13, 17, 15, 19, 10, 3, 16, 9, 12

14,      13, 10, 15, 19, 17, 3, 16, 9, 12

14,      13, 10, 3, 19, 17, 15, 16, 9, 12

14,      13, 10, 3, 9, 17, 15, 16, 19, 12

14,      13, 10, 3, 9, 12, 15, 16, 19, 17


13, 10, 3, 9, 12,      14,     15, 16, 19, 17

13,      10, 3, 9, 12

10, 3, 9, 12, 13 -- list after second partitioning using first item

*/
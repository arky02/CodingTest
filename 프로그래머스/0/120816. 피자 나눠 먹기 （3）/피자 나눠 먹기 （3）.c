#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>

int solution(int slice, int n) {
    double answer = 0;
    answer = ceil((double)n/slice);
    
    return answer;
}
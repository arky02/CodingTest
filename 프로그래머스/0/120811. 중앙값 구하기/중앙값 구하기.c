#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// array_len은 배열 array의 길이입니다.
int solution(int array[], size_t array_len) {
    for(int i = 0; i<array_len; i++){
         int min = 1000;
        int min_index = i;
        for(int j = i; j<array_len; j++){
           
            if(min>array[j]){
                 min = array[j];
                min_index = j;
            }
            }
                int temp = array[i];
                array[i]= array[min_index];
                array[min_index] = temp;
               
        }
    
    for(int i = 0; i< array_len; i++){
        printf("%d", array[i]);
    }
     
    int answer = 0;
    int ans_index = array_len/2;
    return array[ans_index];
}
def solution(clothes):
    clothesMap = {}
    answer = 1
    
    for [cloth, kind] in clothes:
        if kind not in clothesMap:
            clothesMap[kind] = []
            
        clothesMap[kind].append(cloth)
        
    for value in clothesMap.values():
        answer *= len(value)+1
    
    return answer - 1

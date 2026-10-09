dict = {
    "code": 0,
    "date": 1,
    "maximum": 2,
    "remain": 3
}
    
def solution(data, ext, val_ext, sort_by):
    index = len(data)-1
    data.sort(key=lambda x: x[dict[ext]])
    
    for idx, x in enumerate(data): 
        if x[dict[ext]] >= val_ext: 
            index = idx
            break
    
    data = data[:index]
    data.sort(key=lambda x: x[dict[sort_by]])
    return data
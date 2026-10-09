code = ["code", "date", "maximum", "remain"]

def solution(data, ext, val_ext, sort_by):
    index = len(data)-1
    data.sort(key=lambda x: x[code.index(ext)])
    
    for idx, x in enumerate(data): 
        if x[code.index(ext)] >= val_ext: 
            index = idx
            break
    
    data = data[:index]
    data.sort(key=lambda x: x[code.index(sort_by)])
    return data
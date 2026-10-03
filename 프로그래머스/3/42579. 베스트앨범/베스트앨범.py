def solution(genres, plays):
    answer = []
    genresMap = {}
    
    for idx, genre in enumerate(genres):
        if genre not in genresMap.keys():
            genresMap[genre] = {"playsSum": plays[idx], "items": [[idx, plays[idx]]]}
        else:
            genresMap[genre]["playsSum"] += plays[idx]
            genresMap[genre]["items"].append([idx, plays[idx]])
            
    
    genresList = list(genresMap.values())
    genresList.sort(key=lambda x:x["playsSum"], reverse=True)
    
    for genreItem in genresList:
        genreItem["items"].sort(key=lambda x: x[0])
        genreItem["items"].sort(key=lambda x: x[1], reverse=True)
    
        for num,_ in genreItem["items"][0:2]:
            answer.append(num)
    
    return answer
                                 
def solution(participant, completion):
    participantMap = {}
    
    for name in participant:
        if name not in participantMap:
            participantMap[name] = 1
        else: 
            participantMap[name] +=1
    
    for name in completion:
        participantMap[name] -=1
        
    for key, value in participantMap.items():
        if value == 1:
            return key;
function solution(id_pw, db) {
    return db.find(([id,pw])=> id===id_pw[0] && pw===id_pw[1]) ? 'login' : db.find(el=> el[0]===id_pw[0]) ? 'wrong pw': 'fail'
}
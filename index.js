function solution(s){
  const regexp = /([a-z])\1*/g;
  const array = [...s.matchAll(regexp)];
  array.forEach((it)=>{
    var tmp = it[0].length>1?it[0].length +it[0]:it[0];
    console.log(tmp);
  })
  let result="";
  array.forEach((it)=>(result +=it[0].length>1?it[0].length+it[1]:it[1]));
  console.log(result);
}
solution('abbcabb');
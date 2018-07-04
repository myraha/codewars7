//Given a string, you have to return a string in which each
//character (case-sensitive) is repeated once.

function doubleChar(str) {
var str1 = ""
  for ( i = 0; i < str.length; i ++){
    str1 = (str1 + str[i]) + (str[i])
}
  return str1
}

  
/**
 * A string is a palindrome if it is read the same from forward or backward is know as Palindrome.
 * Checking Palindrome by using Split,reverse,Jion Methods.
 * Author :Vijay
 */

let a="vijay";
let b=a.split("");
let c=b.reverse();
let d=c.join("")
console.log(d)

if(a===d){
    console.log("Yes it is palindrome :)")
}else{
    console.log("No it's not a Palindrome :(")
}

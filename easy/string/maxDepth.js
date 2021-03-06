/*
    Maximum Nesting Depth of the parentheses
    A string is a valid parentheses string (denoted VPS) if it meets one of the following:
        ● It is an empty string '', or a single character not equal to '(' or ')',
        ● It can be written as AB (A concatencated with B), where A and B are VPS's or
        ● It can be written as (A), where A is a VPS.
    We can similarly define the nesting depth depth(S) of any VPS S as follows:
        ● depth('') = 0
        ● depth(A+B) = max(depth(A), depth(B)), where A and B are VPS's.
        ● depth('('+A+')') = 1+depth(A), where A is a VPS.
    ** Given a VPS represented as string s, return the nesting depth of s.

    Constrainis:
        ● 1 <= s.length <= 100
        ● s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
        ● It is guaranteed that parentheses expression s is a VPS
 */
var maxDepth = function(s) {
    if(s.length == 0) return 0;
    var answer = 0;
    var count = 0;
    
    //The depth of any character in the VPS is the (number of left brackets before it) - (number of right brackets before it).
    for(var i=0; i<s.length; i++){
        if(s[i] == '(') {
            count++;
        } else if(s[i] == ')'){
            count--;
            //s[i]가 숫자가 들어오면 answer값에 최대 depth 값을 재할당함
        } else if(!isNaN(s[i])) {
            answer = Math.max(answer, count);
        }
    }
    return answer;
    
/* stack
        var max = 0;
        var totalMax = 0;
        var stack = [];
        
        for(var i=0; i<s.length; i++){
            if(s[i] == '('){
                max++;
                stack.push('(');
                
                if(max>totalMax) totalMax=max;

            } else if(s[i] == ')'){
                var close = stack.pop();
                if(max>0 && close == '('){
                    max--;
                }else {return -1;}
            }
        }
        if(stack.length != 0) return -1;
        
        return totalMax;
*/
};
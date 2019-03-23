
function replaceSpace (str) 
{
    
/*方法1 replace的字符串替换，考察点不是这个*/
    
	return str.replace(/ /g,'%20');
 
    
/*方法2 字符串的查询*/
    
	let output = '';
    
	for (let i=0,len = str.length; i<len; i++) {
        
		if (str[i] == ' ') {
            
			output+='%20';
        
		} else {
            
			output+=str[i];
		}
    
	}
    
	return output;
}
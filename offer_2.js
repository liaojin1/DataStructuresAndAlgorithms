
function replaceSpace (str) 
{
    
/*����1 replace���ַ����滻������㲻�����*/
    
	return str.replace(/ /g,'%20');
 
    
/*����2 �ַ����Ĳ�ѯ*/
    
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
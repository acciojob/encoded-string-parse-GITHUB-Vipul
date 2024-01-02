const parseCode = (str) => {
  // your code here
	let arr=[];
	let j=0;
	let s="";
	for(let i=0;i<str.length;i++)
		{
			if(str.at(i)=='0')
			{
				
				if(s!="")
				{
					arr[j]=s;
					j++;
				}
				s="";
			}
			else
			s+=str.at(i);
		}
	arr[j]=s;
	let obj={
	};
obj.firstName=`${arr[0]}`;
	obj.lastName=`${arr[1]}`;
	obj.id=`${arr[2]}`;
	return obj;
	
};

// Do not change the code below
const str =  prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

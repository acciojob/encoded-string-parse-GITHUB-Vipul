const parseCode = (str) => {
  // your code here
	let s=str.split("000");
	let obj={
	};
obj.firstName=`${s[0]}`;
	obj.lastName=`${s[1]}`;
	obj.id=`${s[2]}`;
	return obj;
	
};

// Do not change the code below
const str =  prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));

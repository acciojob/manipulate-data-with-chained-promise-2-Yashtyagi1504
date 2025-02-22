let output = document.getElementById("output");
let arr = [1,2,3,4];
let newarr = [];
let newarr1 = [];
let promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		for(let value of arr){
			if(value%2==0){
				newarr.push(value);
			}
		}
		resolve(newarr)
	},1000);
})
promise1.then(newarr => {
	output.innerText = newarr;
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			for(let value of newarr){
				newarr1.push(value*2);
			}
			resolve(newarr1)
		},2000)
	})
	.then(newarr=>{
		output.innerText = "";
		output.innerText = newarr;
	})



	
})
//your JS code here. If required.
let button = document.getElementById("btn");
button.addEventListener("click", getdisplaydata);

async function getdisplaydata(){
	let text = document.getElementById("text").value;
	let delay =  document.getElementById("delay").value
    let div = document.getElementById("output");
	let promisedata = new Promise ((resoleve,reject)=>{
		setTimeout(()=>{
			resoleve(text);
			console.log("wfhbvhvbhb");
		},delay)
	})

	promisedata.then((value)=>{
		div.textContent = value
	}).catch((error)=>{
		div.innerHtml =error
	})
}
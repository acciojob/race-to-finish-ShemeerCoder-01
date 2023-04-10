window.promises = [promise1,promise2,promise3,promise4,promise5];

// Do not change the code above this
// add your promises to the array `promises`

const promise1 = new promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Race has started");
	},Math.floor(Math.random()*5 + 1));
});

const promise2 = new promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Athletes running");
	},Math.floor(Math.random()*5 + 1));
});

const promise3 = new promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("A competitive Race");
	},Math.floor(Math.random()*5 + 1));
});

const promise4 = new promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Ahead of finish");
	},Math.floor(Math.random()*5 + 1));
});

const promise5 = new promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Race has finished");
	},Math.floor(Math.random()*5 + 1));
});

Promise.any(promises).then((value) =>{
	document.getElementById('output').innerHTML = value;
} );
//id로 테그 선택하기
   const myTag = document.getElementById('btns');
   console.log(myTag);

//class로 테그 선택
 const myClass = document.getElementsByClassName("color-btn");
 console.log(myClass);
 console.log(myClass[1]);
 console.log(myClass.length);

for (let tag of myClass) {
	console.log(tag);
}


const myTags3 = document.getElementsByClassName('white');
console.log(myTags3);
console.log(myTags3 === null); //false ==> undefined
console.log(myTags3.length); //0
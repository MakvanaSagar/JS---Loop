/*_____________________for loop__________________

//Example - 1

for(let s=1; s<=10; s++){
	console.log("Sagar D Makvana");
}


//Example - 2

for(let a=5; a>0; a--){
	console.log(a);
}


//Example - 3

for(let t=1; t<=9; ++t){
	if(t==6){
		break;
	}
	console.log(t);
}


//Example - 4

for(let t=1; t<=5; ++t){
	if(t==4){
		continue;	//Skip the current condition in only number!
	}
	console.log(t);
}
*/













/*_____________________while loop__________________

//Example - 1

i = 5;
while(i>0)
{
	i--;
	console.log(i);	
}



//Example - 2

i = 0;
while(i<5)
{
	i++;
	console.log(i);	
}



// Example - 3

i = 0;
while(i<5)
{
	if(i==3)
	{
		break;
	}
	i++;
	console.log(i);	
}



// Example - 4

let i = 0;
while(i < 5) {
    if(i == 3) {
        i++;       
        continue;  
    }
    console.log(i);
    i++;
}

*/












/*_____________________do-while loop__________________*/

//Example - 1

let u = 1;

do{
	console.log(u);
	u++;
}while(u<=5);
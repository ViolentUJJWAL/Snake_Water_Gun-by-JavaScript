const swg=(a)=>{
	if (a==1){
		return "Snake"
	}
	else if (a==2){
		return "Water"
	}
	else if (a==3){
		return "Gun"
	}
	else{
		return 0
	}
}


let ask = true
while (ask){
	let computerScore=0
	let userScore=0
	let i = prompt("Enter number of round:\n(note- enter only 1 to 50) ")
	if (0<i<=50){
		let j=0
		while(j<i){
			let computer = swg(Math.floor(Math.random()*3 + 1))
			let user = swg(prompt(`ROUND ${j+1}/${i}\n1 for Snake\n2 for Water\n3 for Gun`))
			if (user!=0 && computer!=0){
				if (user==computer){
					alert(`you choose ${user}\ncomputer choose ${computer}\nBoth Are Same`)

				}
				else if (user == "Snake"){
					if (computer == "Water"){
						alert(`you choose ${user}\ncomputer choose ${computer}\nYou are WIN`)
						userScore++;
					}
					else{
						alert(`you choose ${user}\ncomputer choose ${computer}\nComputer are WIN`)
						computerScore++;
					}
				}
				else if (user == "Water"){
					if (computer == "Snake"){
						alert(`you choose ${user}\ncomputer choose ${computer}\nYou are WIN`)
						userScore++;
					}
					else{
						alert(`you choose ${user}\ncomputer choose ${computer}\nComputer are WIN`)
						computerScore++;
					}
				}
				else if (user == "Gun"){
					if (computer == "Snake"){
						alert(`you choose ${user}\ncomputer choose ${computer}\nYou are WIN`)
						userScore++;
					}
					else{
						alert(`you choose ${user}\ncomputer choose ${computer}\nComputer are WIN`)
						computerScore++;
					}
				}
				j++;
			}
		}
	}
	else{
		alert("Enter valid number")
		console.error("unvalid number")
	}
	alert(`Computer Score is ${computerScore}\nUser Score is ${userScore}`)
	if (computerScore == userScore){
		document.write(" Score_Same ")
	}
	else if (computerScore<userScore){
		document.write(" User_Win ")
	}
	else{
		document.write( "Computer_Win ")
	}
	ask = confirm("Re play")
}
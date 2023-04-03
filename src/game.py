import random

def get_choices():
	player_choice = input("enter your choice(rock,pepper of cissors): ")
	
	options = ["rock", "pepper", "scissors"]
	computer_choice = random.choice(options)

	choices = {"player":player_choice, "computer":computer_choice}
	return choices

def check_winner(player, computer):
	print(f"you chose {player} and computer Chose: {computer} ")

	if player == computer:
		print("draw")
	elif player =="rock":
		if computer=="scissors":
			return "rock smashes scissors you win"
		else :
			return "pepper covers rock . you loose"

	elif player =="pepper":
		if computer=="rock":
			return "pepper covers rock. you Win"
		else:
			return "scissors cutes pepper. You loose"

	elif player =="scissors":
		if computer=="pepper":
			return "scissors cutes pepper. You win"
		else:
			return "rock broke scissors. You loose"
choices = get_choices()
result = check_winner(choices["player"],choices["computer"])
print(result)
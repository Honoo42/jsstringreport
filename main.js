console.log("Is This Working!?")
var userinput= prompt("Please enter a word", "word")
alert("You entered: "+userinput +'\n'+ "There are "
	+userinput.length+" characters in the word."+'\n'+ "The third character is "+userinput.charAt(3)+'\n'+
	"lowercase: "+userinput.toLowerCase()+'\n'+"UPPERCASE: "+userinput.toUpperCase()+'\n'+
	"I really hope "+ userinput+ " makes sense in a sentence!"+'\n'+"Subword: "+
	userinput.substring(1,4))
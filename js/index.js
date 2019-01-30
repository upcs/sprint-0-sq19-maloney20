function display(){
	var num1Str = document.getElementById("num1").value;
	var num2Str = document.getElementById("num2").value;

	var result = ""+add(parseInt(num1Str, 10), parseInt(num2Str, 10))

	document.write("the result is " + result);
}
function valid() {
  const input = document.getElementById("MyInput").value;
  let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
  console.log("The condition is:", regex.test(input));

  if (!input) {
    document.getElementById("msg").innerHTML = "Please Input String and Number";
    document.getElementById("msg").style.color = "red";
    alert("Failed");
  } else if (input.match(regex)) {
    document.getElementById("msg").innerHTML = "Success, data in the form of strings and number";
    document.getElementById("msg").style.color = "green";
    alert("Success");
  } else {
    document.getElementById("msg").innerHTML = "Sorry, data is not in the form of strings and numbers";
    document.getElementById("msg").style.color = "red";
    alert("Failed");
  }
}

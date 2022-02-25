function convert() {
    var temp = document.getElementById("initialtemp");
    var valueSelected = temp.value;
   if(document.getElementById("tempinput").value.length ==0)
	{
		alert("Temprature must be filled out");
		return false;
	}
	else{
    if (valueSelected == "c") {
      var convertedF = cToF();
      var convertedK = cToK();

      return document.getElementById("result").value = convertedF + "F" + " and " + convertedK + "K";
    } else if (valueSelected == "f") {
      var convertedC = fToC();
      var convertedK = fToK();

      return document.getElementById("result").value = convertedC + "C" + " and " + convertedK + "K";
    } else if (valueSelected == "k") {
      var convertedF = kToF();
      var convertedC = kToC();

      return document.getElementById("result").value = convertedF + "F" + " and " + convertedC + "C";
    }
    }

  }
  // celcius to rest

function cToF() {
  var c = document.getElementById("tempinput").value;
  return (c * 9 / 5) + 32;
}

function cToK() {
    var c = document.getElementById("tempinput").value;
	c = parseFloat(c);
    r = c + 273.15;
	return r;
	
  }
  // fahrenheit to rest

function fToC() {
  var f = document.getElementById("tempinput").value;
  return (f - 32) * 5 / 9;
}

function fToK() {
    var f = document.getElementById("tempinput").value;
    return (f - 32) * 5 / 9 + 273.15;
  }
  // kelvin to rest

function kToC() {
  var k = document.getElementById("tempinput").value;
  return k - 273.15;
}

function kToF() {
  var k = document.getElementById("tempinput").value;
  return (k - 273.15) * 9 / 5 + 32;
}

var rom = null;
var name = null;

function loadRom(file) {
	// Read the file
	var reader = new FileReader();
	reader.readAsArrayBuffer(file);
	reader.onload = function() {
		rom = new Uint8Array(this.result);
		name = file.name;

		// Simple check if GBA ROM
		if(rom[0xB2] != 0x96) {
			document.getElementById("tid-input").value = "";
			document.getElementById("tid-input").disabled = true;
			document.getElementById("save").disabled = true;
			alert("Error! File is not a valid GBA ROM.");
			return;
		}

		// Get the title ID
		var titleId = "";
		for(var i = 0; i < 4; i++)
			titleId += String.fromCharCode(rom[0xAC + i]);

		// Enable TID input
		document.getElementById("tid-input").value = titleId;
		document.getElementById("tid-input").disabled = false;
	};
}

function updateTid(newTid) {
	// Check that it's the right length
	if(newTid.length != 4) {
		document.getElementById("save").disabled = true;
		alert("Error! Title ID must be exactly 4 ASCII letters long");
		return;
	}

	// Set the new TID
	for(var i = 0; i < 4; i++) {
		var charCode = newTid.charCodeAt(i);
		if(charCode > 0x7F) {
			document.getElementById("save").disabled = true;
			alert("Error! Title ID must be exactly 4 ASCII letters long");
			return;
		}
		rom[0xAC + i] = charCode;
	}

	// Enable saving
	document.getElementById("save").disabled = false;
}

function save() {
	// Save the updated file
	var blob = new Blob([rom], {type: "application/octet-stream"});
	var a = document.createElement("a");
	var url = window.URL.createObjectURL(blob);
	a.href = url;
	a.download = name;
	a.click();
	window.URL.revokeObjectURL(url);
}

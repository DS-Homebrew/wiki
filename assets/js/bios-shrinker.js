const gbaSha = "fd2547724b505f487e6dcb29ec2ecff3af35a841a77ab2e85fd87350abd36570";
const dsSha = "782eb3894237ec6aa411b78ffee19078bacf10413856d33cda10b44fd9c2856b";

function shrinkBios(file) {
    // Check that the file is 32 KiB
    if(file.size != 32 << 10)
        return alert("Error! This is not a correct GBA BIOS dumper save.");

    // Read the file
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function() {
        var array = new Uint8Array(this.result);

        // Trim to 16 KiB
        array = array.subarray(0, 16 << 10);

        // Check hash
        var bStr = "";
        for(i in array)
            bStr += String.fromCharCode(array[i]);
        var sha = sha256(bStr);

        if(sha == gbaSha || sha == dsSha) {
            // Download trimmed file
            var blob = new Blob([array], {type: "application/octet-stream"});
            var a = document.createElement("a");
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = "bios.bin";
            a.click();
            window.URL.revokeObjectURL(url);

            alert("Done! Checksum matches as a correct BIOS dump from a " + (sha == gbaSha ? "GBA" : "DS") + ".\n\nSHA-256: " + sha);
        } else {
            alert("Error! Trimmed BIOS checksum does not match a valid GBA BIOS checksum.\n\nSHA-256: " + sha);
        }
    };
}

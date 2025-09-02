function setfonts(item){ document.getElementById("txt1").style.fontFamily = item.value; }
    function setsize(item){ document.getElementById("txt1").style.fontSize = item.value; }
    function settextcolor(item){ document.getElementById("txt1").style.color = item.value; }

    // Save file
    function saveFile() {
      let text = document.getElementById("txt1").innerText;
      download(text, "notes.txt");
    }

    // Save As file
    function saveAsFile() {
      let text = document.getElementById("txt1").innerText;
      let filename = prompt("Enter filename:", "my_notes.txt");
      if (filename) download(text, filename);
    }

    // Download helper
    function download(content, filename) {
      let blob = new Blob([content], { type: "text/plain" });
      let a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
    }
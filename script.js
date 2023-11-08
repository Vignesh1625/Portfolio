const textElement = document.getElementById("textAnimation");
    const texts = ["Student", "developer", "ML enthusiast", "web developer"];
    let textIndex = 0;
    let text = texts[textIndex];
    let index = 0;
    let isTyping = true;

    function typeAndDelete() {
      if (isTyping) {
        textElement.textContent = text.substring(0, index);
        index++;
        if (index > text.length) {
          isTyping = false;
          setTimeout(typeAndDelete, 1000); // Wait for a second before deleting
        } else {
          setTimeout(typeAndDelete, 100); // Type one character at a time
        }
      } else {
        if (index >= 0) {
          textElement.textContent = text.substring(0, index);
          index--;
          setTimeout(typeAndDelete, 50); // Delete one character at a time
        } else {
          isTyping = true;
          textIndex = (textIndex + 1) % texts.length;
          text = texts[textIndex];
          setTimeout(typeAndDelete, 1000); // Wait for a second before typing the next text
        }
      }
    }

    typeAndDelete();
const textElement = document.getElementById("textAnimation");
const texts = ["Student", "RPA developer", "ML Enthusiast", "Web Developer"];
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

function showContent(event) {
  // Get the target data attribute
  const target = event.target.dataset.target;

  // Define the content for each target
  const content = {
    skills: `
      <div class="grid-container">
        <div class="grid-item"><strong>Back-End Development:</strong>
          <ul>
            <li>Data Structures & Alogrithms</li>
            <li>Java,OOPS</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div class="grid-item"><strong>Front-End Development:</strong>
          <ul>
            <li>HTML,CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div class="grid-item"><strong>Data Science/Analysis:</strong>
          <ul>
            <li>Scikit-learn</li>
            <li>NumPy,Pandas</li>
            <li>Seaborn</li>
          </ul>
        </div>

        <div class="grid-item"><strong>DevOps:</strong>
          <ul>
            <li>Docker</li>
            <li>Git and GitHub</li>
            <li>Azure & Heroku</li>
          </ul>
        </div>
      </div>
    `,
    education: `
    <div id="Education">
        <div class="education-item">
            <p><strong>B-Tech</strong>  CMR College of Engineering and Technology November 2021 – Present </p>
        </div>

        <div class="education-item">
            <p><strong>Intermediate MPC</strong> Sri Chaithanya Junior College, Narsingi, Hyderabad(2019 – 2021)</p>
        </div>

        <div class="education-item">
            <p><strong>Secondary School Certificate (SSC)</strong> T.S.R. School (Boys), Pochampad(2013 – 2019)</p>
            <p></p>
        </div>
    </div>`,
    experience: 'Your experience content goes here.'
  };

  // Check if the target is defined in the content object
  if (content.hasOwnProperty(target)) {
    // Update the content container
    document.getElementById('contentContainer').innerHTML = content[target];
  } else {
    // Handle undefined case (optional)
    document.getElementById('contentContainer').innerHTML = 'Content not available.';
  }

  // Remove the "active" class from all tabs
  const tabs = document.querySelectorAll('.aboutlinks div');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add the "active" class to the clicked tab
  event.target.classList.add('active');
}

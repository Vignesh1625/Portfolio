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
      setTimeout(typeAndDelete, 100); // Delete one character at a time
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
      <div id="Skills">
        <div class="skills-item">
            <p><strong>Back-End Development:</strong>   Data Structures & Alogrithms,Java,OOPS,Java,OOPS</p>
\        </div>

        <div class="skills-item">
          <p><strong>Front-End Development:</strong>HTML,CSS,JavaScript</p>
        </div>

        <div class="skills-item">
          <p><strong>Data Science/Analysis:</strong>Scikit-learn,NumPy,Pandas,Seaborn</p>
        </div>

        <div class="skills-item">
            <p><strong>DevOps:</strong>Docker,Git and GitHub,Azure & Heroku</p>
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
    experience: `
    <div id="Experience">
        <div class="experience-item">
            <p><strong>AICTE RPA Devleoper</strong>  Virtual Intenship (September2023 -November 2023) <a href="./AICTE RPA.pdf" alt="">Certificate</a></p>
        </div>

        <div class="experience-item">
            <p><strong>CodSoft </strong> Virtual Internship on <strong>Machine Learning </strong>(October 2023)<a href="https://drive.google.com/file/d/1i_t-dCEnk1GeJSkiWpggbXDe43C1edPA/view" alt="">Certificate</a></p>
        </div>
    </div>`
  };

  // Check if the target is defined in the content object
  if (content.hasOwnProperty(target)) {
    // Update the content container
    document.getElementById('contentContainer').innerHTML = content[target];
  } else {
    // Handle undefined case (optional)
    document.getElementById('contentContainer').innerHTML = '';
  }

  // Remove the "active" class from all tabs
  const tabs = document.querySelectorAll('.aboutlinks div');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add the "active" class to the clicked tab
  event.target.classList.add('active');
}
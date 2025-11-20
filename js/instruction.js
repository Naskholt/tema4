console.log("Loaded instructions");
document.querySelector("#AI-Core").addEventListener("click", AI_CoreFunction);

function AI_CoreFunction() {
  console.log("AI-Core is activated!");
  resetAllScales();
  document.querySelector("#AI_Core").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 5: Singularity";
  document.querySelector(".info-text p").textContent =
    "AI surpasses human intelligence, leading to unpredictable changes in society. In this final stage, AI systems achieve a level of intelligence that exceeds human capabilities, resulting in profound and often unforeseeable transformations across all aspects of life. The singularity ushers in an era where AI drives innovation at an exponential rate, reshaping economies, cultures, and even the very fabric of human existence. As AI takes on roles previously unimaginable, humanity must confront new ethical, philosophical, and practical challenges in this brave new world.";
  document.querySelector("#efficiency").innerHTML = `<ul>
      <li>Unprecedented technological advancements</li>
      <li>Potential solutions to complex global issues</li>
      <li>New frontiers in science and exploration</li>
    </ul>`;
  document.querySelector("#requirement").innerHTML = `<ul>
      <li>Loss of human control</li>
      <li>Existential risks to humanity</li>
      <li>Ethical and philosophical dilemmas</li>
    </ul>`;
}
document.querySelector("#learning").addEventListener("click", learningFunction);

function learningFunction() {
  console.log("learning is activated!");
  resetAllScales();
  document.querySelector("#Learning").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 2: The Rise";
  document.querySelector(".info-text p").textContent =
    "AI systems evolve to learn and adapt autonomously, leading to significant advancements in various fields. This stage sees AI taking on more complex roles, from decision-making to creative endeavors. As AI systems become more sophisticated, they start to outperform humans in specific tasks, leading to widespread adoption across industries. This era is marked by rapid innovation, with AI driving breakthroughs in healthcare, finance, and technology.";
  document.querySelector("#efficiency").innerHTML = `<ul>
      <li>Autonomous learning and adaptation</li>
      <li>Significant advancements in various fields</li>
      <li>Widespread adoption across industries</li>
    </ul>`;
  document.querySelector("#requirement").innerHTML = `<ul>
      <li>Loss of human oversight</li>
      <li>Increased ethical dilemmas</li>
      <li>Potential for unintended consequences</li>
    </ul>`;
}
document
  .querySelector("#collaboration")
  .addEventListener("click", collaborationFunction);

function collaborationFunction() {
  console.log("collaboration is activated!");
  resetAllScales();
  document.querySelector("#Collaboration").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 1: Symbiosis";
  document.querySelector(".info-text p").textContent =
    "Humans and AI begin working together, enhancing productivity and creativity. This stage marks the start of a new era where technology amplifies human capabilities rather than replacing them. AI started as a helper. It enhanced creativity, solved complex problems, and performed tasks faster than humans. From smart assistants to advanced medical diagnostics, the line between tool and partner began to blur.";
  document.querySelector("#efficiency").innerHTML = `<ul>
      <li>Increased productivity and creativity</li>
      <li>Enhanced problem-solving capabilities</li>
      <li>Faster task completion</li>
    </ul>`;
  document.querySelector("#requirement").innerHTML = `<ul>
      <li>Dependence on technology</li>
      <li>Potential job displacement</li>
      <li>Ethical concerns regarding AI use</li>
    </ul>`;
}
document
  .querySelector("#automation")
  .addEventListener("click", automationFunction);

function automationFunction() {
  console.log("automation is activated!");
  resetAllScales();
  document.querySelector("#Automation").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 3: The Rise";
  document.querySelector(".info-text p").textContent =
    "AI systems take over routine tasks, leading to increased efficiency but also raising concerns about job displacement. In this stage, AI technologies become more prevalent in everyday life, automating tasks that were once the sole domain of humans. From manufacturing to customer service, AI-driven automation transforms industries, leading to significant economic shifts. While efficiency soars, society grapples with the implications of widespread job displacement and the need for new skill sets.";
  document.querySelector("#efficiency").innerHTML = `<ul>
      <li>Increased efficiency and productivity</li>
      <li>Reduction in human error</li>
    </ul>`;
  document.querySelector("#requirement").innerHTML = `<ul>
      <li>Job displacement concerns</li>
      <li>Need for reskilling and upskilling</li>
      <li>Ethical implications of automation</li>
    </ul>`;
}
document
  .querySelector("#surveillance")
  .addEventListener("click", surveillanceFunction);

function surveillanceFunction() {
  console.log("surveillance is activated!");
  resetAllScales();
  document.querySelector("#Surveillance").classList.add("my_scale");
  document.querySelector(".info-text h2").textContent = "Stage 4: The Watchers";
  document.querySelector(".info-text p").textContent =
    "AI is extensively used for monitoring and data collection, raising significant privacy and ethical concerns. In this stage, AI technologies are deployed on a massive scale for surveillance purposes, from public safety to corporate monitoring. The ability of AI to analyze vast amounts of data in real-time leads to enhanced security measures but also sparks debates about privacy rights and the potential for abuse. Society must navigate the fine line between safety and freedom as AI-driven surveillance becomes ubiquitous.";
  document.querySelector("#efficiency").innerHTML = `<ul>
      <li>Enhanced security measures</li>
      <li>Real-time data analysis</li>
      <li>Improved public safety</li>
    </ul>`;
  document.querySelector("#requirement").innerHTML = `<ul>
      <li>Privacy concerns</li>
      <li>Ethical dilemmas regarding surveillance</li>
      <li>Potential for misuse of data</li>
    </ul>`;
}

function resetAllScales() {
  document.querySelector("#AI_Core").classList.remove("my_scale");
  document.querySelector("#Learning").classList.remove("my_scale");
  document.querySelector("#Collaboration").classList.remove("my_scale");
  document.querySelector("#Automation").classList.remove("my_scale");
  document.querySelector("#Surveillance").classList.remove("my_scale");
}

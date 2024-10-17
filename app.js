document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    const fullName = document.getElementById("fullName").value;
    const developerProfile = document.getElementById("developerProfile").value;
    const bio = document.getElementById("bio").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const skills = document
      .getElementById("skills")
      .value.split(",")
      .map((skill) => skill.trim());
    const projects = document
      .getElementById("projects")
      .value.split(",")
      .map((project) => project.trim());
    const links = document
      .getElementById("links")
      .value.split(",")
      .map((link) => link.trim());

    // Handle profile picture upload
    const profilePicture = document.getElementById("profilePicture").files[0];
    if (profilePicture) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("profilePicPreview").src = e.target.result;
        document.getElementById("profilePicPreview").classList.remove("hidden");
      };
      reader.readAsDataURL(profilePicture);
    }

    // Populate the resume display with the user input
    document.getElementById("resumeName").textContent = fullName;
    document.getElementById("resumeProfile").textContent = developerProfile;
    document.getElementById("resumeBio").textContent = bio;
    document.getElementById("resumeEmail").textContent = `Email: ${email}`;
    document.getElementById("resumeMobile").textContent = `Mobile: ${mobile}`;

    // Display skills as pills
    const resumeSkills = document.getElementById("resumeSkills");
    resumeSkills.innerHTML = "";
    skills.forEach((skill) => {
      const span = document.createElement("span");
      span.textContent = skill;
      span.classList.add(
        "bg-gray-200",
        "text-gray-700",
        "py-1",
        "px-3",
        "rounded-full",
        "text-sm"
      );
      resumeSkills.appendChild(span);
    });

    // Display projects
    const resumeProjects = document.getElementById("resumeProjects");
    resumeProjects.innerHTML = "";
    for (let i = 0; i < projects.length; i += 2) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${projects[i]}</strong> - ${
        projects[i + 1] || ""
      }`;
      resumeProjects.appendChild(li);
    }

    // Display links
    const resumeLinks = document.getElementById("resumeLinks");
    resumeLinks.innerHTML = "";
    for (let i = 0; i < links.length; i += 2) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${
        links[i + 1]
      }" target="_blank" class="text-blue-600 underline">${links[i]}</a>`;
      resumeLinks.appendChild(li);
    }

    // Hide input form and show the resume display
    document.getElementById("inputForm").classList.add("hidden");
    document.getElementById("resumeDisplay").classList.remove("hidden");
  });

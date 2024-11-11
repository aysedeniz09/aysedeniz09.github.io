document.addEventListener("DOMContentLoaded", () => {
    const cvData = getCvData(); // Retrieve data from cv-data.js
    console.log("CV Data Loaded:", cvData); // Debugging: Check if data is loaded

    const cvContent = document.getElementById("cv-content");

    // Helper function to create a new section
    function renderSection(title, items, renderFunction) {
        const section = document.createElement("section");
        section.className = "cv-section";
        section.id = title.toLowerCase().replace(" ", "-");
        section.innerHTML = `<h2>${title}</h2>`;
        items.forEach(item => section.appendChild(renderFunction(item)));
        cvContent.appendChild(section);
    }

    // Render Basics section
    function renderBasics(basics) {
        console.log("Rendering Basics:", basics); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <h3>${basics.name} - ${basics.label}</h3>
            <p>Email: <a href="mailto:${basics.email}">${basics.email}</a></p>
            <p>Website: <a href="${basics.url}" target="_blank">${basics.url}</a></p>
        `;
        return div;
    }

    // Render Work Experience section
    function renderWork(work) {
        console.log("Rendering Work:", work); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <h3>${work.position} (${work.startDate} - ${work.endDate || "Present"})</h3>
            <p>${work.summary}</p>
        `;
        if (work.highlights && work.highlights.length > 0) {
            const highlightsList = document.createElement("ul");
            work.highlights.forEach(highlight => {
                const li = document.createElement("li");
                li.textContent = highlight;
                highlightsList.appendChild(li);
            });
            div.appendChild(highlightsList);
        }
        return div;
    }

    // Render Affiliations section
    function renderAffiliation(affiliation) {
        console.log("Rendering Affiliation:", affiliation); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <h3>${affiliation.position} at ${affiliation.organization}</h3>
            <p>${affiliation.startDate} - ${affiliation.endDate || "Present"}</p>
            <p><a href="${affiliation.url}" target="_blank">${affiliation.url}</a></p>
        `;
        return div;
    }

    // Render Education section
    function renderEducation(education) {
        console.log("Rendering Education:", education); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <h3>${education.studyType} in ${education.area}</h3>
            <p><strong>${education.institution}</strong>, ${education.startDate}</p>
            <p>${education.summary}</p>
        `;
        if (education.honors && education.honors.length > 0) {
            const honorsList = document.createElement("ul");
            education.honors.forEach(honor => {
                const li = document.createElement("li");
                li.textContent = honor;
                honorsList.appendChild(li);
            });
            div.appendChild(honorsList);
        }
        return div;
    }

    // Render Awards section
    function renderAward(award) {
        console.log("Rendering Award:", award); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <p>${award.title} - ${award.date}</p>
        `;
        return div;
    }

    // Render Publications section
    function renderPublication(publication) {
        console.log("Rendering Publication:", publication); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        // Check if the URL contains "doi" and add DOI styling if true
        const isDOI = publication.url.includes("doi");
        div.innerHTML = `
            <h3>${publication.name}</h3>
            <p>${publication.publisher}, ${publication.releaseDate}</p>
            <p><a href="${publication.url}" target="_blank" class="${isDOI ? 'doi-link' : ''}">
                ${isDOI ? 'DOI: ' + publication.url.split('/').pop() : publication.url}
            </a></p>
        `;
        return div;
    }

    // Render Skills section
    function renderSkill(skill) {
        console.log("Rendering Skill:", skill); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <h3>${skill.name} - ${skill.level}</h3>
            <p>${skill.keywords.join(", ")}</p>
        `;
        return div;
    }

    // Render Languages section
    function renderLanguage(language) {
        console.log("Rendering Language:", language); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <h3>${language.language} - ${language.fluency}</h3>
        `;
        return div;
    }

    // Render Projects section
    function renderProject(project) {
        console.log("Rendering Project:", project); // Debugging
        const div = document.createElement("div");
        div.className = "cv-item";
        div.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.summary}</p>
            <p>Role: ${project.role}</p>
            <p>Funding Source: ${project.fundingSource}</p>
            <p><a href="${project.url}" target="_blank">${project.url}</a></p>
        `;
        return div;
    }

    // Render sections with data
    renderSection("Basics", [cvData.basics], renderBasics);
    renderSection("Work Experience", cvData.work, renderWork);
    renderSection("Affiliations", cvData.affiliations, renderAffiliation);
    renderSection("Education", cvData.education, renderEducation);
    renderSection("Awards", cvData.awards, renderAward);
    renderSection("Publications", cvData.publications, renderPublication);
    renderSection("Skills", cvData.skills, renderSkill);
    renderSection("Languages", cvData.languages, renderLanguage);
    renderSection("Projects", cvData.projects, renderProject);
});

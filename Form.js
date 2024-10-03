document.addEventListener("DOMContentLoaded", function() {
    const launchBtn = document.getElementById("launchWizard");
    const modal = document.getElementById("modalForm");
    const closeModal = document.getElementById("closeModal");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const steps = document.querySelectorAll(".steps li");
    const stepContents = document.querySelectorAll(".step-content");
    const progressBar = document.getElementById("progressBar");

    let currentStep = 1;
    const totalSteps = steps.length;

    // Show modal
    launchBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close modal
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Update the progress bar
    function updateProgressBar(step) {
        const progress = (step - 1) / (totalSteps - 1) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Show the current step
    function showStep(step) {
        steps.forEach((item, index) => {
            item.classList.toggle("active", index + 1 === step);
        });

        stepContents.forEach((content) => {
            content.classList.toggle("active", parseInt(content.getAttribute("data-step")) === step);
        });

        prevBtn.style.display = step === 1 ? "none" : "inline";
        nextBtn.textContent = step === steps.length ? "Soumettre" : "Suivant";
        updateProgressBar(step);
    }

    // Next button
    nextBtn.addEventListener("click", function() {
        if (currentStep < steps.length) {
            currentStep++;
            showStep(currentStep);
        } else {
            alert("Formulaire soumis !");
            modal.style.display = "none";
        }
    });

    // Previous button
    prevBtn.addEventListener("click", function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Initial state
    showStep(currentStep);
});
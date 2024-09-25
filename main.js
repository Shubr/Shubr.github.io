document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const ITExperienceSlider = document.querySelector(
    ".IT-experience-container .slider"
  );
  const experience_container = document.querySelector(".experience-container");

  let scrollSpeed = 5;
  let isHovering = false;
  let scrollDirection = 0;

  let isHoveringExp = false;
  let scrollDirectionExp = 0;

  let isHoveringITExperience = false;
  let scrollDirectionITExperience = 0;

  slider.addEventListener("mousemove", (event) => {
    const containerRect = slider.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = event.clientX - containerRect.left;

    if (mouseX < containerWidth / 2) {
      scrollDirection = -1;
      // Add your logic for the left side here
    } else {
      scrollDirection = 1;
      // Add your logic for the right side here
    }

    if (!isHovering) {
      isHovering = true;
      scrollContent();
    }
  });

  slider.addEventListener("mouseleave", () => {
    isHovering = false;
  });
  function scrollContent() {
    if (isHovering) {
      slider.scrollLeft += scrollDirection * scrollSpeed;
      requestAnimationFrame(scrollContent);
    }
  }

  ITExperienceSlider.addEventListener("mousemove", (event) => {
    console.log("Mouse is over IT Experience Slider");
    const containerRect = ITExperienceSlider.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const mouseX = event.clientX - containerRect.left;

    if (mouseX < containerWidth / 2) {
      scrollDirectionITExperience = -1;
    } else {
      scrollDirectionITExperience = 1;
    }

    if (!isHoveringITExperience) {
      isHoveringITExperience = true;
      scrollITExperienceContent();
    }
  });

  ITExperienceSlider.addEventListener("mouseleave", () => {
    isHoveringITExperience = false;
  });

  function scrollITExperienceContent() {
    if (isHoveringITExperience) {
      ITExperienceSlider.scrollLeft +=
        scrollDirectionITExperience * scrollSpeed;
      requestAnimationFrame(scrollITExperienceContent);
    }
  }

  experience_container.addEventListener("mousemove", (event) => {
    const containerRect = experience_container.getBoundingClientRect();
    const containerHeight = containerRect.height;
    const mouseY = event.clientY - containerRect.top;

    if (mouseY < containerHeight / 2) {
      scrollDirectionExp = -1;
    } else {
      scrollDirectionExp = 1;
    }

    if (!isHoveringExp) {
      isHoveringExp = true;
      scrollContentExp();
    }
  });

  experience_container.addEventListener("mouseleave", () => {
    isHoveringExp = false;
  });

  function scrollContentExp() {
    if (isHoveringExp) {
      experience_container.scrollTop += scrollDirectionExp * scrollSpeed;
      requestAnimationFrame(scrollContentExp);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let planeElement = null;
  document.addEventListener("mousemove", function (event) {
    const trail = document.getElementById("trail");
    const textNode = document.createTextNode("💨");
    const span = document.createElement("span");
    span.appendChild(textNode);
    span.classList.add("springboot-text");
    span.style.left = event.clientX + "px";
    span.style.top = event.clientY + "px";
    span.style.setProperty(
      "--x",
      `${(window.innerWidth - event.clientX) / 2}px`
    );
    span.style.setProperty("--y", `200px`);
    trail.appendChild(span);
    span.addEventListener("animationend", function () {
      span.remove();
    });

    if (!planeElement) {
      const trail1 = document.getElementById("trail1");
      planeElement = document.createElement("span");
      planeElement.innerHTML = "✈️";
      planeElement.classList.add("plane", "springboot-text1"); // Add classes here
      trail1.appendChild(planeElement);
  }
  
  // Update the position of the plane element
  planeElement.style.left = event.clientX + "px";
  planeElement.style.top = event.clientY + "px";
  planeElement.style.setProperty("--x", `${(window.innerWidth - event.clientX)/2}px`);
  planeElement.style.setProperty("--y", `200px`);
  });
});

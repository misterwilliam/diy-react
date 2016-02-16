function render(component, container) {
  container.innerHTML = component;
}

function main() {
  const wrapper = document.getElementById('wrapper');
  render("<div>yo</div>", wrapper);
}

document.addEventListener("DOMContentLoaded", main);

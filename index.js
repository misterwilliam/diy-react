function hello(props) {
  return "<div>Hello " + props.name + "</div>";
}

function main() {
  const wrapper = document.getElementById('wrapper');
  render(hello({name: "William"}), wrapper);
}

document.addEventListener("DOMContentLoaded", main);

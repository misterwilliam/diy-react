function hello(props) {
  return "<div>Hello " + props.name + "</div>";
}

function textInput(props) {
  return "<input type='text' value='" + props.value + "' />";
}

function todoItem(props) {
  return "<div>" + props.item + "</div>";
}

function todoList(props, children) {
  return "<div>" +
         "  <h1>Todos</h1>" +
         children +
         "</div>";
}

function main() {
  const wrapper = document.getElementById('wrapper');
  render(compose(todoList, null, [
    todoItem({item: "Take out trash"}),
    todoItem({item: "Fold laundry"})
  ]), wrapper);
}

document.addEventListener("DOMContentLoaded", main);

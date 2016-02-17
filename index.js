function div(props, children) {
  return "<div>" + children + "</div>";
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
  const root = compose(
    div, null, [
      textInput({value: "Enter in a todo"}),
      compose(todoList, null, [
        todoItem({item: "Take out trash"}),
        todoItem({item: "Fold laundry"})
      ])
    ]
  );
  const wrapper = document.getElementById('wrapper');
  render(root, wrapper);
}

document.addEventListener("DOMContentLoaded", main);

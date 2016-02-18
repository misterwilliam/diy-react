
function todoItem(props) {
  return compose(Div, null, [props.item]);
}

function todoList(props, children) {
  return "<div>" +
         "  <h1>Todos</h1>" +
         children +
         "</div>";
}

function main() {
  // const root = compose(
  //   div, null, [
  //     textInput({value: "Enter in a todo"}),
  //     compose(todoList, null, [
  //       todoItem({item: "Take out trash"}),
  //       todoItem({item: "Fold laundry"})
  //     ])
  //   ]
  // );
  const root = compose(Div, null, [
    "hello",
    Input({type: "text", value: "Yo"}),
    todoItem({item: "Take out trash"})
  ]);
  const wrapper = document.getElementById('wrapper');
  const store = createStore({});
  render(root, wrapper, store);
}

document.addEventListener("DOMContentLoaded", main);

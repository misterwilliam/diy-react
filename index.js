
function todoItem(props) {
  return compose(Div, null, [props.item]);
}

// TODO: support this method of defining components
// function todoList(props, children) {
//   return "<div>" +
//          "  <h1>Todos</h1>" +
//          children +
//          "</div>";
// }

function todoList(props, children, store) {
  const todos = store.getState().todos;
  return compose(Div, null, [
    compose(H1, null, ["Todos"]),
    ...todos.map(function(todo) {
      return todoItem(todo);
    })
  ])
}

function app(props, children, store) {
  return compose(Div, null, [
    compose(Form, {
      onSubmit: function(event) {
        const inputElement = document.getElementById("input");
        var state = store.getState();
        state.todos = state.todos.concat([{item: inputElement.value}]);
        store.setState(state);

        event.preventDefault();
      }
    }, [
      Input({id: "input", type: "text", placeholder: "Enter todo here"}),
    ]),
    compose(todoList, null)
  ]);
}

function main() {
  const store = createStore({
    todos: []
  });
  const wrapper = document.getElementById('wrapper');

  render(wrapper, app, {}, store);
}

document.addEventListener("DOMContentLoaded", main);

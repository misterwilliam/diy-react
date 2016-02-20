"use strict";

// props: Object
// Component: (props, children: Array<Element>, store) => null | string | Element
// Compose:
//   (component, props, children: Array<null|string|Element>) => Element

function createStore(initialState) {
  var _state = initialState || {}
  var _listeners = [];

  function updateListeners(state) {
    _listeners.forEach(function(listener) {
        listener.callback(state);
    });
  }
  return {
    setState: function(state) {
      _state = state;
      updateListeners(state);
    },

    getState: function() {
      return _state;
    },

    onUpdate: function(name, callback) {
      _listeners.push({name: name, callback: callback});
    }
  };
}

function createDomElement(elementName) {
  return function(props, children) {
    const element = document.createElement(elementName);
    if (props != null) {
      _.forEach(props, function(key, value) {
        // TODO: add support for adding other kinds of event listeners
        if (key === "onSubmit") {
          element.addEventListener("submit", value);
        } else {
          element.setAttribute(key, value);
        }
      })
    }
    if (children != null) {
      children.forEach(function(child) {
        element.appendChild(child);
      })
    }
    return element;
  }
}
const H1 = createDomElement('h1');
const Div = createDomElement('div');
const Form = createDomElement('form');
const Input = createDomElement("input");

let globalStore = null;
function compose(component, props, children) {
  if (children == null) {
    return component(props, null, globalStore);
  } else {
    const _normalizedChildren = [];
    // Normalize children to HTMLElement's
    children.forEach(function(child) {
      if (child == null) {
        return;
      }
      if (_.isString(child)) {
        child = document.createTextNode(child);
      }
      _normalizedChildren.push(child);
    })
    return component(props, _normalizedChildren, globalStore);
  }
}

function render(container, component, props, store) {
  globalStore = store;
  container.innerHTML = "";
  container.appendChild(component(props, [], store));
  store.onUpdate("render", function() {
    container.innerHTML = "";
    container.appendChild(component(props, [], store));
  })
}

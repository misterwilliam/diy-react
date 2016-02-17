"use strict";

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

function compose(component, props, children) {
  return component(props, children.join(""));
}

function render(component, container) {
  container.innerHTML = component;
}

"use strict";

const _ = {
  isString: function(val) {
    return (typeof val === 'string' || val instanceof String);
  },
  forEach: function(obj, callback) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        callback(key, obj[key]);
      }
    }
  }
}

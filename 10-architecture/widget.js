var Widget = {
  render: function(el) {
    el.innerHTML = document.querySelector('#' + this._templateId).innerHTML;
  },

  addEventListener: function(name, handler) {
    this._handlers = this._handlers || {};
    this._handlers[name] = this._handlers[name] || [];

    this._handlers[name].push(handler);
  },

  trigger: function(name) {
    this._handlers = this._handlers || {};
    var handlers = this._handlers[name] || [];

    for (var i=0; i < handlers.length; i++) {
      handlers[i]();
    }
  },
};


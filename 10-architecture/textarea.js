function CountedTextarea(el) {
  this._templateId = 'textarea-template';
  this.render(el);

  this.el = el;  
  this.lengthPanel = el.querySelector('.len');
  this.textarea = el.querySelector('textarea');

  this.textarea.addEventListener('input', 
                                 this.textChanged.bind(this));
}

CountedTextarea.prototype = Object.assign({}, Widget);

CountedTextarea.prototype.textChanged = function() {
  var newLength = this.textarea.value.length;
  this.lengthPanel.textContent = newLength;
};


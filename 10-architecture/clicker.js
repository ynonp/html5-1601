function Counter(el) {
  this._templateId = 'clicker-template';
  this.render(el);

  this.count = 0;
  this.el = el;
  this._handlers = {};
  
  el.addEventListener('click', this.inc.bind(this));
}

Counter.prototype = Object.assign({}, Widget);


Counter.prototype.inc = function() {
  this.count++;
  this.el.querySelector('.clicks').innerHTML = this.count;

  if ( this.count % 2 === 0 ) {
    this.trigger('even');
  }


};


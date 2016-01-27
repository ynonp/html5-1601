var widgets = document.querySelectorAll('.widget');

SupportedWidgets = {
  "counted-textarea": CountedTextarea,
  "clicker" : Counter
};


for (var i=0; i < widgets.length; i++) {
  var type = widgets[i].dataset.type;

  var w = new SupportedWidgets[type](widgets[i]);
}


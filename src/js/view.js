app.view = function (templateId, model) {
  var templateFn = _.template($('#' + templateId).html(), { variable: 'm' });
  return templateFn(model);
};

$(function () {
  'use strict';

  function formToObj(form) {
    var obj = {};

    $(form).find('input').each(function (i, input) {
      obj[input.name] = input.value;
    });

    return obj;
  }

  $('.appt-form').on('submit', function (e) {
    e.preventDefault();

    app.appointments.push(formToObj(this));

    var listHtml = app.view('appointment-list-tmpl', { appointments: app.appointments });
    $('.appointment-list').html(listHtml);
  });

});

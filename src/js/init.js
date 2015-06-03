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

    console.log(formToObj(this));
  });

});

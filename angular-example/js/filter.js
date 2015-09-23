shrutiApp.filter('widthLimit', function () {
  return function (items) {
    return items.filter(function (item) {
      return /a/i.test(item.name.substring(0, 1));
    });
  };
});
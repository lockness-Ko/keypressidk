function simulateKeyPress(character) {
  jQuery.event.trigger({
    type: 'keypress',
    which: character
  });
}

document.onkeypress = function(e) {
  alert(e.which);
}

for (var i = 0; i < 100; i++) {
  simulateKeyPress(90);
  simulateKeyPress(88);
}

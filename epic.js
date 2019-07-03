function pK(o, p) {
  var keyboardEvent = document.createEvent("KeyboardEvent");
  var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
  keyboardEvent[initMethod](
    "keydown", // event type : keydown, keyup, keypress
    true, // bubbles
    true, // cancelable
    window, // viewArg: should be window
    false, // ctrlKeyArg
    false, // altKeyArg
    false, // shiftKeyArg
    false, // metaKeyArg
    o, // keyCodeArg : unsigned long the virtual key code, else 0
    p // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
  );
  document.dispatchEvent(keyboardEvent);
}
document.onkeypress = function(e){
  alert(e);
}
try {
  for (var i = 0; i < 100; i++) {
    pK(90, 0);
    pK(88, 0);
  }
} catch(Exception)
{
  alert();
}

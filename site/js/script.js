
/*Allows for 3 states checkboxes. Source: http://jsfiddle.net/chriscoyier/mGg85/2/ */
function ts(cb) {
    if (cb.readOnly) cb.checked = cb.readOnly = false;
    else if (!cb.checked) cb.readOnly = cb.indeterminate = true;
  }
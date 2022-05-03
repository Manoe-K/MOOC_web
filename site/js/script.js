
/*Allows for 3 states checkboxes. Source: http://jsfiddle.net/chriscoyier/mGg85/2/ */
function ts(cb) {
    if (cb.readOnly) {
        cb.checked = cb.readOnly = false;
    }
    else if (!cb.checked) {
        cb.readOnly = cb.indeterminate = true;
    }
  }



var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var k;
        var toCollapse = this.nextElementSibling;
        console.log(this.nextElementSibling)
        var lis = toCollapse.getElementsByTagName("li");
        if (toCollapse.toHide === "true") {
            toCollapse.toHide= "false";
            
            for(k = 0; k < lis.length; k++) {
                /* if the checkbox is check or indeterminate, we let it be visible to the user */
                if (!(lis[k].getElementsByTagName("input")[0].checked || lis[k].getElementsByTagName("input")[0].indeterminate)) {
                    lis[k].hidden = "hidden";
                }
            }
        } else {
            toCollapse.toHide= "true";
            for(k = 0; k < lis.length; k++) {
                lis[k].hidden = "";
            }
    }
  });
}
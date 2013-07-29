/*
 * jQuery Bootstrap Toggle plugin v0.1
 * http://dingyu.me/portfolio/jquery-bootstrap-toggle
 * 
 * by Felix Ding
 *
 * MIT License. 
 */
(function($) {
	$.fn.bootstrap_toggle = function(options) {

    return this.each(function() {
      var $this = $(this);
      var $buttons = $this.find("button");
      var $checkbox = $this.find(":checkbox");
      
      $checkbox.hide();

      $buttons.on("state_change", function() {
        if($(this).data("status") == "turned_on") {
          $checkbox.prop("checked", true);
        }
        else {
          $checkbox.prop("checked", false);
        }
      });
    });
	};
})(jQuery);
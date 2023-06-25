AFRAME.registerComponent("easy-slide", {
  schema: {
    target: { type: "selector" },
    destination: { type: "vec3" },
    duration: { type: "number", default: 2000 }
  },
  init: function() {
    var data = this.data;
    var destination = data.destination;
    var duration = data.duration;

    this.el.addEventListener("click", function(e) {
      var targetEl = data.target;
      var origin = targetEl.getAttribute("position");
      var animationData = {
        property: "position",
        dur: duration,
        easing: "linear"
      };
      animationData.to = destination; 
      targetEl.setAttribute("animation", animationData); 
    });
  },
});

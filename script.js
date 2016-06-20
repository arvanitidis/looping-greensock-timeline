  var t1 = new TimelineLite();

  t1.from("#div1", 1, {delay: .75, x: "-20", y: "-20", opacity: 0, ease: "Strong.easeInOut"});
  t1.from("#div2", 1, {x: "+20", y: "-20", opacity: 0, ease: "Strong.easeInOut"}, "-=.75");
  t1.from("#div3", 1, {x: "-20", opacity: 0, ease: "Strong.easeInOut"}, "-=.75");
  t1.eventCallback("onComplete", loopAnimation, [t1]);
  t1.eventCallback("onReverseComplete", loopAnimation, [t1]);

  function loopAnimation(timeline){
    console.log(timeline)
    if (timeline.reversed()) {
        timeline.play();
    } else {
        timeline.reverse();
    }
  }

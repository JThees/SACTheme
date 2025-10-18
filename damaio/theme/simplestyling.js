// ===== Custom Simplestyling JS =====

// Scroll Progress Bar
(function(){
  var bar = document.getElementById('sac-progress');
  if(!bar) return;
  function onScroll(){
    var doc = document.documentElement;
    var scrollTop = doc.scrollTop || document.body.scrollTop;
    var scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  onScroll();
})();

// Back to Top Comet
(function(){
  var comet = document.getElementById('sac-comet');
  if(!comet) return;

  function toggle(){
    var y = window.scrollY || document.documentElement.scrollTop;
    if(y > 400) comet.classList.add('is-visible');
    else comet.classList.remove('is-visible');
  }
  function scrollTop(){
    window.scrollTo({top:0, behavior:'smooth'});
  }
  comet.addEventListener('click', scrollTop);
  window.addEventListener('scroll', toggle, {passive:true});
  toggle();
})();

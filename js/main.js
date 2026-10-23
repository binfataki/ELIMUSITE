(()=>{
  const C=window.ELIMU_CONFIG;
  document.getElementById('whatsapp').href=`https://wa.me/${C.whatsappPhone}?text=${encodeURIComponent(C.whatsappMessage)}`;
  document.getElementById('email').href=`mailto:${C.emails[0]}`;
  document.getElementById('year').textContent=new Date().getFullYear();
})();

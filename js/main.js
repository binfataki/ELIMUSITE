(()=>{
const C=window.ELIMU_CONFIG;
const I='assets/img/';
const F=[['Gestion des élèves','Fiches complètes, matricules, recherche et filtres.','liste-eleves'],['Gestion des parents','Chaque élève relié à son parent ou responsable.','portail-parent'],['Gestion des enseignants','Équipe pédagogique et suivi des salaires.','tableau-de-bord'],['Gestion des classes','Classes par niveau avec effectifs à jour.','tableau-de-bord'],['Présences','Suivi des présences des élèves au quotidien.',0,'✓'],['Paiements et recouvrement','Encaissement, soldes et restes à recouvrer.','nouveau-paiement'],['Autres frais','Inscription, examen et autres frais par élève.','fiche-eleve'],['Cartes d\'élèves','Cartes personnalisées avec photo et code QR.','cartes-eleves'],['Génération de reçus','Reçu professionnel pour chaque paiement.','recu'],['Rapports financiers','Entrées, sorties, solde et taux de recouvrement.','rapport-financier'],['Sauvegardes et restauration','Copies de sécurité et retour à un état antérieur.','sauvegardes'],['Localisation géographique','Adresses relevées via Google Maps et intégrées au logiciel.',0,'◎'],['Portail parent','Le parent consulte la situation de son enfant.','portail-parent-mobile'],['Portail propriétaire','Le propriétaire suit l\'école à distance.','portail-proprietaire'],['Application mobile QR','Scan des cartes d\'élèves depuis le téléphone.',0,'▦']];
document.getElementById('features').innerHTML=F.map(f=>`<article class="card feat reveal"><div class="th">${f[2]?`<img src="${I}${f[2]}-t.webp" alt="" loading="lazy">`:f[3]}</div><div class="tx"><h3>${f[0]}</h3><p>${f[1]}</p></div></article>`).join('');
const G=[['Logiciel','tableau-de-bord','Tableau de bord'],['Logiciel','liste-eleves','Liste des élèves'],['Logiciel','fiche-eleve','Fiche élève'],['Logiciel','connexion','Écran de connexion'],['Portails','portail-parent','Portail parent'],['Portails','portail-parent-mobile','Portail parent sur mobile',1],['Portails','portail-proprietaire','Portail propriétaire'],['Portails','portail-proprietaire-2','Portail propriétaire — situation financière'],['Portails','portail-proprietaire-mobile','Portail propriétaire sur mobile',1],['Paiements','nouveau-paiement','Nouveau paiement'],['Paiements','suivi-financier','Suivi financier'],['Cartes','cartes-eleves','Cartes d\'élèves'],['Reçus','recu','Reçu de paiement'],['Rapports','rapport-financier','Rapport financier'],['Sauvegardes','sauvegardes','Sauvegardes et restauration']];
const gal=document.getElementById('gallery');
gal.innerHTML=G.map((g,i)=>`<button class="gi${g[3]?' tall':''}" data-i="${i}" data-c="${g[0]}"><img src="${I}${g[1]}.webp" alt="${g[2]}" loading="lazy"><span>${g[2]}</span></button>`).join('');
const fl=document.getElementById('filters');
fl.innerHTML=['Tous',...new Set(G.map(g=>g[0]))].map((c,i)=>`<button aria-pressed="${!i}" data-f="${c}">${c}</button>`).join('');
fl.onclick=e=>{const b=e.target.closest('button');if(!b)return;fl.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));gal.querySelectorAll('.gi').forEach(x=>x.hidden=b.dataset.f!=='Tous'&&x.dataset.c!==b.dataset.f)};
// modale
const m=document.getElementById('modal'),mi=m.querySelector('img'),mp=m.querySelector('p');let list=[],cur=0;
const show=n=>{cur=(n+list.length)%list.length;mi.src=list[cur].s;mi.alt=mp.textContent=list[cur].t;if(!m.open)m.showModal();m.querySelectorAll('.nv').forEach(b=>b.hidden=list.length<2)};
gal.onclick=e=>{const b=e.target.closest('.gi');if(!b)return;list=[...gal.querySelectorAll('.gi:not([hidden])')].map(x=>({s:I+G[x.dataset.i][1]+'.webp',t:G[x.dataset.i][2]}));show(list.findIndex(x=>x.t===G[b.dataset.i][2]))};
document.querySelectorAll('.zoom').forEach(b=>b.onclick=()=>{list=[{s:b.dataset.src,t:b.dataset.cap}];show(0)});
m.querySelector('.x').onclick=()=>m.close();m.querySelector('.p').onclick=()=>show(cur-1);m.querySelector('.n').onclick=()=>show(cur+1);
m.onclick=e=>{if(e.target===m)m.close()};
m.onkeydown=e=>{if(list.length>1){if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)}};
// menu
const bg=document.querySelector('.burger'),mn=document.getElementById('menu');
bg.onclick=()=>{const o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
mn.onclick=e=>{if(e.target.tagName==='A'){mn.classList.remove('open');bg.setAttribute('aria-expanded',false)}};
// Coordonnées publiques : toutes les valeurs modifiables sont centralisées dans config.js.
document.getElementById('contact-name').textContent=C.contactName;
document.getElementById('contact-title').textContent=C.contactTitle;
document.getElementById('contact-address').textContent=C.address;
C.phones.forEach((p,i)=>{const a=document.getElementById(`phone-${i+1}`);if(a){a.textContent=`Appeler ${p.label}`;a.href=`tel:${p.value}`}});
C.emails.forEach((email,i)=>{const a=document.getElementById(`email-${i+1}`);if(a){a.textContent=email;a.href=`mailto:${email}`}});
const wa=document.getElementById('whatsapp');wa.href=`https://wa.me/${C.whatsappPhone}?text=${encodeURIComponent(C.whatsappMessage)}`;
// formulaire (aucun serveur : message préparé pour WhatsApp ou email)
const f=document.getElementById('demo'),out=document.getElementById('fmsg');let to='wa';
f.querySelectorAll('[data-to]').forEach(b=>b.onclick=()=>to=b.dataset.to);
f.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
 if(!d.nom.trim()||!d.ecole.trim()||!d.tel.trim()){out.textContent='Merci de renseigner votre nom, votre établissement et votre téléphone.';return}
 out.textContent='';const t=`Bonjour ELIMU,\nJe souhaite : ${d.offre}.\nNom : ${d.nom}\nÉtablissement : ${d.ecole}\nTéléphone : ${d.tel}\n${d.msg||''}`;
 if(to==='wa')window.open(`https://wa.me/${C.whatsappPhone}?text=${encodeURIComponent(t)}`,'_blank','noopener');
 else location.href=`mailto:${C.emails[1]}?subject=${encodeURIComponent('Demande de contact ELIMU')}&body=${encodeURIComponent(t)}`};
// apparition douce
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1}):null;
document.querySelectorAll('.reveal').forEach(x=>io?io.observe(x):x.classList.add('in'));
document.getElementById('yr').textContent=new Date().getFullYear();
})();

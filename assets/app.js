const journey={
 pain:{title:"Urgence / douleur",intent:"Ici, la priorité n'est pas de parcourir un site. C'est de savoir quoi faire maintenant.",steps:["Identifier l'urgence","Donner une action immédiate","Orienter vers Fusion"],cta:"Appeler Fusion"},
 esthetic:{title:"Projet esthétique",intent:"Le patient veut d'abord comprendre si son projet correspond à son besoin avant de s'engager.",steps:["Exprimer le projet","Comprendre les possibilités","Poser une première question"],cta:"Parler à Fusion"},
 replace:{title:"Remplacer une dent",intent:"Le patient cherche à comprendre les options avant de choisir son parcours.",steps:["Comprendre les options","Être orienté","Demander une consultation"],cta:"Demander une orientation"},
 align:{title:"Alignement",intent:"Le besoin commence par un objectif — pas nécessairement par le nom d'un traitement.",steps:["Exprimer l'objectif","Comprendre le parcours","Passer à la consultation"],cta:"Commencer le parcours"},
 question:{title:"Simple renseignement",intent:"Le visiteur n'est peut-être pas prêt à appeler. La première victoire est de réduire la friction.",steps:["Poser sa question","Obtenir une direction claire","Choisir quand contacter Fusion"],cta:"Poser une question"}
};
const serviceText={
"Soins dentaires":["PROBLÈME","Partir du problème exprimé par le patient, puis rendre la prochaine étape simple."],
"Prothèses fixes":["BESOIN","Commencer par le besoin avant d'exposer les options techniques."],
"Implantologie":["COMPRENDRE","Donner un chemin de compréhension sans promesse médicale."],
"Botox & filler":["PROJET","Présenter le projet avec une direction sobre avant toute demande."],
"Orthodontie (ODF)":["OBJECTIF","Partir de l'objectif du patient puis l'orienter vers la consultation."],
"Chirurgie orale":["ORIENTER","Réduire l'incertitude avec une explication courte et une action claire."],
"Facettes dentaires":["PROJET ESTHÉTIQUE","Faire comprendre le projet et la prochaine étape sans promesse de résultat."]
};

const result=document.getElementById("journeyResult");
document.querySelectorAll("#choices button").forEach(btn=>btn.addEventListener("click",()=>{
 const item=journey[btn.dataset.type];
 result.innerHTML=`<span class="result-kicker">PARCOURS PROPOSÉ · ${item.title.toUpperCase()}</span>
 <h3>${item.title}</h3><p>${item.intent}</p>
 <div class="result-steps">${item.steps.map((x,i)=>`<div><span>0${i+1}</span><strong>${x}</strong></div>`).join("")}</div>
 <div class="result-action"><strong>${item.cta}</strong><small>Dans la version connectée, cette étape utiliserait le canal choisi par Fusion.</small></div>
 <a class="result-link" href="#value">Voir ce que cela change →</a>`;
 result.classList.add("active");
 result.scrollIntoView({behavior:"smooth",block:"center"});
}));

document.querySelectorAll(".service-board button").forEach(btn=>btn.addEventListener("click",()=>{
 const d=document.getElementById("serviceDetail"), data=serviceText[btn.dataset.service];
 d.innerHTML=`<span>${data[0]}</span><strong>${btn.dataset.service}</strong> — ${data[1]}`;
 d.classList.add("active");
}));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});
document.querySelectorAll(".section-head,.hero-copy,.hero-visual,.signal-card,.test-shell,.difference-top,.compare-card,.space-copy,.space-gallery,.why-card,.services,.value-grid,.direction-card,.final").forEach(el=>{el.classList.add("reveal");io.observe(el)});

function progress(){const max=document.documentElement.scrollHeight-innerHeight;document.getElementById("progressBar").style.width=(max>0?scrollY/max*100:0)+"%"}
window.addEventListener("scroll",progress,{passive:true});progress();

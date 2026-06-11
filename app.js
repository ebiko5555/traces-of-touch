const rooms = [
  {
    id: "skin", no: "01", name: "皮膚", en: "SKIN / INNER BODY", color: "#17130f",
    intro: "描かれた身体は、輪郭の内側で熱を持つ。肉、骨、神経、そして身体の内側からだけ感じられる感覚。",
    artists: [
      ["Lucian Freud","ルシアン・フロイド","1922–2011 · UNITED KINGDOM","Benefits Supervisor Sleeping, 1995","assets/freud.jpg","厚く重ねた絵具が、皮膚のたるみ、温度、重力までを生々しく立ち上げる。フロイドはモデルを美化せず、長時間の観察から身体をひとつの風景として描いた。","絵具の隆起を、皮膚の重さとして見る。"],
      ["Maria Lassnig","マリア・ラスニック","1919–2014 · AUSTRIA","Body Awareness Paintings","assets/lassnig.jpg","鏡に映る外見ではなく、自分の内側から感じる身体を描いた。「感じる場所」だけが肥大し、奇妙な色と形になって画面に残る。","身体の輪郭が、感覚によって変形する瞬間。"],
      ["Egon Schiele","エゴン・シーレ","1890–1918 · AUSTRIA","The Green Hand","assets/schiele.jpg","長い指、張り詰めた腱、不自然に折れ曲がる関節。シーレの線は身体を説明するのではなく、内面の緊張を皮膚の表面へ押し出す。","指先を見ながら、自分の手の強張りを感じる。"],
      ["Francesco Clemente","フランチェスコ・クレメンテ","1952– · ITALY","Self Portrait","assets/clemente.jpg","身体のパーツを引き伸ばし、重ね、時に切り離す。東西の精神文化と私的な象徴が、皮膚の境界を曖昧にしていく。","自分と世界の境目が溶ける感覚。"],
      ["Takahashi Yuichi","高橋由一","1828–1894 · JAPAN","花魁","assets/takahashi.jpg","日本で油彩という粘りのある物質に挑み、生身の存在感を定着させた。顔や手の肉厚な描写には、初期油彩特有の執念が宿る。","油絵具の重さと、人間の肉の重さを重ねる。"]
    ]
  },
  {
    id: "matter", no: "02", name: "物質", en: "MATTER / RESISTANCE", color: "#111310",
    intro: "麻袋、灰、鉛、土、樹木、絵具。作品はイメージである前に、重さを持ち、乾き、裂け、抵抗する物質である。",
    artists: [
      ["Alberto Burri","アルベルト・ブッリ","1915–1995 · ITALY","Sacco / Combustioni","assets/burri.jpg","古い麻袋、木、鉄、プラスチックを縫い、裂き、燃やした。絵画の表面は傷を負った皮膚のように、物質そのものの記憶を語る。","焦げ、裂け目、縫い目を目でなぞる。"],
      ["Anselm Kiefer","アンゼルム・キーファー","1945– · GERMANY","Material Paintings","assets/kiefer.jpg","巨大な画面に藁、灰、泥、鉛を塗り込み、歴史の重さを風景として積層する。崩れ落ちそうな表面が、部屋の空気まで変える。","乾いた大地の温度と、鉛の重さ。"],
      ["Eva Hesse","エヴァ・ヘス","1936–1970 · USA","Contingent, 1969","assets/hesse.jpg","ラテックスやファイバーグラスを用い、柔らかく垂れ下がる反復形態を作った。素材は老化し、変色することまで作品の時間になる。","半透明の膜が、呼吸しているように見える。"],
      ["Giuseppe Penone","ジュゼッペ・ペノーネ","1947– · ITALY","Continuerà a crescere tranne che in quel punto","assets/penone.jpg","樹木の成長と人間の手の接触を重ねる。触れた一点だけを避けて成長する木は、接触が時間に残す彫刻になる。","触れた場所と、触れられなかった成長を見る。"],
      ["Roni Horn","ロニ・ホーン","1955– · USA","Well and Truly","assets/horn.jpg","ガラス、水、光、反復を通して、同じものが決して同じではないことを示す。透明な塊は固体でありながら、深い水面にも見える。","冷たさ、深さ、透明さを同時に想像する。"],
      ["Nobuo Sekine","関根伸夫","1942–2019 · JAPAN","位相—大地, 1968","assets/sekine.jpg","地面から巨大な円柱状の土を掘り出し、穴の隣にそのまま立ち上げた。物質は制作材料ではなく、世界の相そのものとして現れる。","土の湿気、圧力、掘られた空洞。"],
      ["Kazuo Shiraga","白髪一雄","1924–2008 · JAPAN","泥に挑む / Foot Painting","assets/shiraga.jpg","全身で泥に飛び込み、吊ったロープにつかまり足で絵具を押し広げた。制作行為そのものが、絵画に残る身体の記録になる。","絵具の滑りと、身体を支える力。"]
    ]
  },
  {
    id: "hands", no: "03", name: "手", en: "HANDS / BETWEEN", color: "#171311",
    intro: "握る、祈る、伸ばす、拒む。手は身体の一部でありながら、世界とのあいだにある最も雄弁な器官である。",
    artists: [
      ["Louise Bourgeois","ルイーズ・ブルジョワ","1911–2010 · FRANCE / USA","Maman","assets/bourgeois.jpg","身体、家族、保護、傷を彫刻へ変えた。巨大な蜘蛛は恐怖の姿でありながら、織り、修復する母の手の記憶でもある。","細い脚が支える、巨大な身体の緊張。"],
      ["Michelangelo","ミケランジェロ","1475–1564 · ITALY","アダムの創造, c.1512","assets/michelangelo.jpg","神とアダムの指先は、触れ合う直前で止まる。その数センチの空白に、生命が移る瞬間の緊張が凝縮される。","接触そのものではなく、接触直前の空気。"],
      ["Albrecht Dürer","アルブレヒト・デューラー","1471–1528 · GERMANY","祈る手, 1508","assets/durer.jpg","浮き出た血管、節くれ立った関節、爪、細かな皺。一本一本の線が、乾いた皮膚と長い時間を触覚的に伝える。","線を皮膚の皺として、ゆっくり追う。"],
      ["Auguste Rodin","オーギュスト・ロダン","1840–1917 · FRANCE","大教堂, 1908","assets/rodin.jpg","異なる人物の二つの右手が、触れそうで触れない距離に立つ。その間の空間が、ゴシック聖堂の穹窿になる。","石の冷たさと、指の間の温かな空間。"],
      ["Alfred Stieglitz","アルフレッド・スティーグリッツ","1864–1946 · USA","Georgia O’Keeffe — Hands, 1919","assets/stieglitz.jpg","オキーフの手を何年にもわたり撮影した。白い指、爪の光、身振りの強さが、肖像としての手を生み出す。","光が撫でる、皮膚の滑らかさ。"],
      ["Maurizio Cattelan","マウリツィオ・カテラン","1960– · ITALY","L.O.V.E., 2010","assets/cattelan.jpg","ミラノ証券取引所前に立つ巨大な大理石の手。他の四本の指が切断され、中指だけが残る構造は、権力と歴史への冷たい皮肉となる。","磨かれた大理石と、切断面の暴力。"]
    ]
  },
  {
    id: "memory", no: "04", name: "記憶", en: "MEMORY / AFTERTOUCH", color: "#101215",
    intro: "誰かがいた場所。着ていた服。塞がれた壁。記憶は姿を持たないが、物に触れた痕跡として残り続ける。",
    artists: [
      ["Doris Salcedo","ドリス・サルセド","1958– · COLOMBIA","Atrabiliarios","assets/salcedo.jpg","失踪者の靴を壁の窪みに収め、半透明の動物繊維で縫い塞ぐ。見えることと失われることの間に、沈黙の記憶を留める。","曇った膜の向こうにある、不在の輪郭。"],
      ["Christian Boltanski","クリスティアン・ボルタンスキー","1944–2021 · FRANCE","Personnes, 2010","assets/boltanski.jpg","大量の古着を積み上げ、個人の不在を物質の群れとして示した。衣服は身体を失ったあとも、その温度の残骸を持つ。","布の擦れる音と、残された体温。"],
      ["Odilon Redon","オディロン・ルドン","1840–1916 · FRANCE","眼は奇妙な気球のように無限へ向かう, 1882","assets/redon.jpg","黒い木炭や石版画で、眼、植物、浮遊する頭部を描いた。現実には触れられないものが、夢の表面に質感を持って現れる。","黒の粉、まぶた、夢の中の湿度。"],
      ["Bernard Buffet","ベルナール・ビュフェ","1928–1999 · FRANCE","Tête de clown","assets/buffet.jpg","鋭い黒線と乾いた絵肌で、人物や静物を緊張の中に閉じ込めた。線は輪郭ではなく、画面を引っ掻く傷のように見える。","硬い線に触れたときの、指先の痛み。"]
    ]
  }
];

const allArtists = rooms.flatMap(room => room.artists.map(artist => ({ room, artist })));
const exhibition = document.querySelector("#exhibition");
const indexList = document.querySelector("#index-list");

rooms.forEach(room => {
  const section = document.createElement("section");
  section.className = "room";
  section.id = room.id;
  section.dataset.roomName = room.en;
  section.dataset.roomNumber = room.no;
  section.dataset.ghost = room.no;
  section.style.setProperty("--room-color", room.color);
  section.innerHTML = `
    <header class="room-heading">
      <span class="room-no">ROOM ${room.no}</span>
      <h2>${room.name}<small>${room.en}</small></h2>
      <p>${room.intro}</p>
    </header>
    <div class="art-grid"></div>`;
  const grid = section.querySelector(".art-grid");
  room.artists.forEach(artist => {
    const globalIndex = allArtists.findIndex(entry => entry.artist === artist);
    const card = document.createElement("button");
    card.className = "art-card";
    card.dataset.artist = globalIndex;
    card.innerHTML = `
      <span class="card-number">${String(globalIndex + 1).padStart(2, "0")}</span>
      <span class="card-image"><img src="${artist[4]}" alt="${artist[1]}の代表作品" loading="lazy"></span>
      <span class="card-meta"><i></i><h3>${artist[0]}<small>${artist[1]}</small></h3><p>${artist[3]}</p></span>`;
    grid.appendChild(card);
  });
  exhibition.appendChild(section);
});

allArtists.forEach(({room, artist}, index) => {
  const item = document.createElement("button");
  item.className = "index-item";
  item.dataset.artist = index;
  item.innerHTML = `<strong>${artist[0]}</strong><span>${artist[1]} · ${artist[3]}</span><small>ROOM ${room.no}</small>`;
  indexList.appendChild(item);
});

const entrance = document.querySelector("#entrance");
const indexPanel = document.querySelector("#artist-index");
const dialog = document.querySelector("#art-dialog");
let currentArtist = 0;

document.querySelector("#enter-button").addEventListener("click", () => entrance.classList.add("gone"));
document.querySelector("#restart-button").addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => entrance.classList.remove("gone"), 700);
});
document.querySelector("#index-button").addEventListener("click", () => {
  indexPanel.classList.add("open");
  indexPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
});
document.querySelector("#close-index").addEventListener("click", closeIndex);
function closeIndex() {
  indexPanel.classList.remove("open");
  indexPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
}

function openArtist(index) {
  currentArtist = (index + allArtists.length) % allArtists.length;
  const {room, artist} = allArtists[currentArtist];
  document.querySelector("#dialog-image").src = artist[4];
  document.querySelector("#dialog-image").alt = `${artist[1]}の代表作品`;
  document.querySelector("#dialog-image-number").textContent = `${String(currentArtist + 1).padStart(2, "0")} / ${allArtists.length}`;
  document.querySelector("#dialog-room").textContent = `ROOM ${room.no} · ${room.name} / ${room.en}`;
  document.querySelector("#dialog-artist").textContent = artist[0];
  document.querySelector("#dialog-life").textContent = `${artist[1]} · ${artist[2]}`;
  document.querySelector("#dialog-work").textContent = artist[3];
  document.querySelector("#dialog-description").textContent = artist[5];
  document.querySelector("#dialog-focus").textContent = artist[6];
  if (!dialog.open) dialog.showModal();
  document.body.classList.add("locked");
}
function closeDialog() {
  dialog.close();
  document.body.classList.remove("locked");
}
document.addEventListener("click", e => {
  const trigger = e.target.closest("[data-artist]");
  if (!trigger) return;
  closeIndex();
  openArtist(Number(trigger.dataset.artist));
});
document.querySelector("#dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("cancel", () => document.body.classList.remove("locked"));
document.querySelector("#previous-art").addEventListener("click", () => openArtist(currentArtist - 1));
document.querySelector("#next-art").addEventListener("click", () => openArtist(currentArtist + 1));
document.addEventListener("keydown", e => {
  if (!dialog.open) return;
  if (e.key === "Escape") closeDialog();
  if (e.key === "ArrowLeft") openArtist(currentArtist - 1);
  if (e.key === "ArrowRight") openArtist(currentArtist + 1);
});

const cards = document.querySelectorAll(".art-card");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: .16});
cards.forEach(card => revealObserver.observe(card));

const roomSections = document.querySelectorAll("[data-room-name]");
const roomName = document.querySelector("#room-name");
const roomNumber = document.querySelector("#room-number");
const navLinks = document.querySelectorAll(".rooms-nav a");
const roomObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      roomName.textContent = entry.target.dataset.roomName;
      roomNumber.textContent = entry.target.dataset.roomNumber;
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, {threshold: .42});
roomSections.forEach(section => roomObserver.observe(section));

const cursor = document.querySelector(".cursor");
let mouseX = innerWidth / 2, mouseY = innerHeight / 2, cursorX = mouseX, cursorY = mouseY;
addEventListener("pointermove", e => { mouseX = e.clientX; mouseY = e.clientY; });
document.addEventListener("pointerover", e => cursor.classList.toggle("active", !!e.target.closest("button,a")));
function animateCursor() {
  cursorX += (mouseX - cursorX) * .18;
  cursorY += (mouseY - cursorY) * .18;
  cursor.style.transform = `translate(${cursorX - 21}px,${cursorY - 21}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

const canvas = document.querySelector("#trace-canvas");
const ctx = canvas.getContext("2d");
let points = [];
function resizeCanvas() {
  const dpr = Math.min(devicePixelRatio, 2);
  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(dpr,0,0,dpr,0,0);
}
resizeCanvas();
addEventListener("resize", resizeCanvas);
addEventListener("pointermove", e => {
  if (Math.random() > .46) return;
  points.push({x:e.clientX,y:e.clientY,r:Math.random()*3+1,a:.22});
  if (points.length > 80) points.shift();
});
function drawTrace() {
  ctx.clearRect(0,0,innerWidth,innerHeight);
  points.forEach(p => {
    p.r += .13; p.a *= .97;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.strokeStyle = `rgba(164,81,54,${p.a})`; ctx.stroke();
  });
  points = points.filter(p => p.a > .008);
  requestAnimationFrame(drawTrace);
}
drawTrace();

addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.querySelector("#progress").style.width = `${(scrollY / max) * 100}%`;
  document.querySelectorAll(".hero-image img,.epilogue-image img").forEach(img => {
    const rect = img.parentElement.getBoundingClientRect();
    img.style.transform = `scale(1.08) translateY(${rect.top * -.025}px)`;
  });
}, {passive: true});

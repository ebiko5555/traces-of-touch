const rooms = [
  {
    id: "skin", no: "01", name: "皮膚", en: "SKIN / INNER BODY", color: "#17130f",
    intro: "描かれた身体は、輪郭の内側で熱を持つ。肉、骨、神経、そして身体の内側からだけ感じられる感覚。",
    artists: [
      ["Lucian Freud","ルシアン・フロイド","1922–2011 · UNITED KINGDOM","Benefits Supervisor Sleeping, 1995","assets/freud.jpg","厚く重ねた絵具が、皮膚のたるみ、温度、重力までを生々しく立ち上げる。フロイドはモデルを美化せず、長時間の観察から身体をひとつの風景として描いた。","絵具の隆起を、皮膚の重さとして見る。"],
      ["Maria Lassnig","マリア・ラスニック","1919–2014 · AUSTRIA","Expressive Self-Portrait, 1945","assets/lassnig.jpg","鏡に映る外見ではなく、自分の内側から感じる身体を描いた。「感じる場所」だけが肥大し、奇妙な色と形になって画面に残る。","身体の輪郭が、感覚によって変形する瞬間。"],
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
      ["Anselm Kiefer","アンゼルム・キーファー","1945– · GERMANY","Von den Verlorenen gerührt…","assets/kiefer.jpg","巨大な画面に藁、灰、泥、鉛を塗り込み、歴史の重さを風景として積層する。崩れ落ちそうな表面が、部屋の空気まで変える。","乾いた大地の温度と、鉛の重さ。"],
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
      ["Bernard Buffet","ベルナール・ビュフェ","1928–1999 · FRANCE","Tête de clown, 1961","assets/buffet.jpg","鋭い黒線と乾いた絵肌で、人物や静物を緊張の中に閉じ込めた。線は輪郭ではなく、画面を引っ掻く傷のように見える。","硬い線に触れたときの、指先の痛み。"]
    ]
  }
];

const researchNotes = {
  "Lucian Freud": {
    bio: "ベルリン生まれ。精神分析家ジークムント・フロイトの孫で、1933年に家族とイギリスへ移住した。戦後イギリス具象絵画を代表する画家の一人で、モデルと長期間同じ空間を過ごしながら、観察によって肖像を組み立てた。",
    work: "描かれているのは、職業安定所の監督官だったスー・ティリー。パフォーマーのリー・バウリーを介してフロイドと出会い、1990年代に複数の大画面裸婦像のモデルとなった。本作は油彩・カンヴァス、151.3 × 219 cm。眠る身体を英雄化せず、ソファに沈む肉の重量と静かな存在感を描く。",
    facts: ["長時間のポーズを重ねて制作", "油絵具を厚く置き、色を皮膚の構造として扱う", "1995年制作・個人蔵"],
    source: ["Christie’s｜作品記録", "https://www.christies.com/en/lot/lot-5074074"]
  },
  "Maria Lassnig": {
    bio: "オーストリア南部ケルンテン生まれ。1940年代後半から、自分の身体を外から見るのではなく、内側で感じられる部位だけを描く「身体感覚絵画（Körpergefühlmalerei）」を展開した。1980年、ウィーン応用美術大学で女性として初めて絵画教授に就任した。",
    work: "掲載図版は初期の《表現的自画像》（1945）。のちの身体感覚絵画につながる、顔と皮膚を安定した外形ではなく、圧力や感情によって変化する場として扱う姿勢がすでに見える。ラスニックの不自然な色は、肌色の再現ではなく、痛み、緊張、接触の強度を示す。",
    facts: ["鏡像よりも身体内部の感覚を優先", "絵画に加えて実験アニメーションも制作", "2013年ヴェネチア・ビエンナーレ金獅子賞"],
    source: ["Stedelijk Museum｜Maria Lassnig", "https://www.stedelijk.nl/en/exhibitions/maria-lassnig"]
  },
  "Egon Schiele": {
    bio: "ウィーン美術アカデミーで学び、グスタフ・クリムトの支援を受けながら独自の表現主義へ進んだ。自画像、裸体、手の身振りを通して、欲望、脆弱さ、死の気配を鋭い輪郭線に定着させた。1918年、スペインかぜにより28歳で死去。",
    work: "《緑の手》（1910）は鉛筆、黒チョーク、グワッシュによる29.1 × 29.2 cmの紙作品。ほぼ正方形の画面で、身体全体ではなく、衣服から突き出る小さな緑の手へ視線を集中させる。手の縮尺と色彩の異様さが、人物の心理を身体の末端へ集約する。",
    facts: ["1910年制作", "鉛筆・黒チョーク・グワッシュ／紙", "レオポルド美術館蔵"],
    source: ["Leopold Museum｜The Green Hand", "https://onlinecollection.leopoldmuseum.org/en/object/2470-the-green-hand/"]
  },
  "Francesco Clemente": {
    bio: "ナポリ生まれ。1970年代末にイタリアのトランスアヴァングァルディアと結びつき、具象絵画を現代美術へ再導入した。イタリア、インド、ニューヨークを往来し、タントラ美術、チベット仏教、古典神話、ビート詩などを私的な象徴体系へ織り込む。",
    work: "クレメンテの自画像では、自己は固定された一つの顔ではない。身体は伸び、分裂し、別の存在や風景と接続する。薄い色層と乾いた線は、肉体を重い物質としてではなく、記憶や精神が通過する半透明の器として見せる。",
    facts: ["絵画・フレスコ・水彩・手漉き紙など多様な技法", "インドの職人との共同制作を継続", "身体を変容する象徴として扱う"],
    source: ["Guggenheim｜Francesco Clemente", "https://www.guggenheim.org/artwork/artist/francesco-clemente"]
  },
  "Takahashi Yuichi": {
    bio: "江戸に生まれ、幕末から明治にかけて日本の油彩画を切り拓いた洋画家。西洋絵画の写実性と油絵具の物質感に衝撃を受け、人物、静物、風景を通じて新しい「迫真」の表現を追求した。《鮭》と《花魁》はいずれも重要文化財。",
    work: "《花魁》（1872）は吉原の遊女を描き、当時の風俗を記録する目的も持っていたとされる。写真を参照した可能性が指摘されており、伝統的な美人画の理想化から離れ、顔の陰影、衣服の重量、手の存在感を油彩で捉える。",
    facts: ["1872年制作", "油彩による日本近代洋画の初期代表作", "東京藝術大学大学美術館蔵・重要文化財"],
    source: ["京都国立近代美術館｜高橋由一展", "https://www.momak.go.jp/English/exhibitionArchive/2012/393.html"]
  },
  "Alberto Burri": {
    bio: "イタリア中部チッタ・ディ・カステッロ生まれ。医学を学び軍医となったが、第二次世界大戦中に捕虜として米国テキサス州へ送られ、収容所で絵を描き始めた。帰国後は医師ではなく作家として、絵画の材料と傷の関係を徹底して探究した。",
    work: "《サッキ（麻袋）》シリーズでは、使い古された麻袋の穴、染み、印字、縫い目を構図そのものとして用いる。布は支持体ではなく、すでに歴史と損傷を帯びた主体である。後年には木、鉄、燃焼させたプラスチック、亀裂状の表面へ展開した。",
    facts: ["廃棄された麻袋を縫い合わせる", "穴や焦げを消さずに造形要素とする", "戦後の物質絵画とアルテ・ポーヴェラに大きな影響"],
    source: ["Guggenheim｜Alberto Burri: Sacchi", "https://www.guggenheim.org/video/alberto-burri-sacchi"]
  },
  "Anselm Kiefer": {
    bio: "第二次世界大戦終結の年、ドイツに生まれた。戦後社会が避けてきたナチズム、ホロコースト、ドイツ神話、文学、錬金術を巨大な絵画と彫刻で問い直す。詩人パウル・ツェランの言葉は、長く作品の重要な参照点となった。",
    work: "掲載図版の題名は《Von den Verlorenen gerührt, die der Glaube nicht trug…》。キーファーは絵具だけでなく、藁、灰、土、鉛、シェラックなど、変質し続ける材料を画面へ積層する。崩壊や酸化は劣化ではなく、歴史が現在進行形で変化することの比喩でもある。",
    facts: ["鉛は錬金術や惑星サトゥルヌスを想起させる材料", "藁は黄金色と燃焼による変容を担う", "絵画と彫刻の境界を越える巨大な表面"],
    source: ["Tate｜Anselm Kiefer", "https://www.tate.org.uk/art/artists/anselm-kiefer-1406"]
  },
  "Eva Hesse": {
    bio: "ハンブルクのユダヤ系家庭に生まれ、幼少期にナチス・ドイツを逃れて米国へ移住した。イェール大学でヨーゼフ・アルバースに学び、1960年代後半にはミニマリズムの反復や幾何学へ、身体性、不均衡、偶然性を持ち込んだ。",
    work: "《コンティンジェント》（1969）は、ラテックスで覆ったチーズクロスとファイバーグラスによる、吊り下げられた八つの要素からなる。規則的に並びながら、それぞれの膜は厚み、透明度、垂れ方が異なる。変色し脆くなるラテックスの時間も、作品の意味から切り離せない。",
    facts: ["1969年制作・八つの吊り下げ要素", "ラテックス、ファイバーグラス、チーズクロス", "ポスト・ミニマリズムの重要作家"],
    source: ["National Gallery of Art｜Test Piece for Contingent", "https://www.nga.gov/artworks/97499-test-piece-contingent"]
  },
  "Giuseppe Penone": {
    bio: "イタリア・ピエモンテ州の農村に生まれた。1960年代末からアルテ・ポーヴェラに参加し、樹木、石、土、水、呼吸、皮膚、指紋を通して、人間の身体と自然の成長が互いに刻む痕跡を作品化している。",
    work: "《それはその点を除いて成長し続ける》では、生きたニワウルシの幹をブロンズの手が握る。木は手に遮られた一点を除いて成長し、年月とともに接触の圧力を自らの形へ記録する。彫刻は完成品ではなく、植物との長い共同制作になる。",
    facts: ["原案は1968年", "樹木とブロンズの手による作品", "接触を数十年単位の時間として可視化"],
    source: ["Archivio Penone｜作品ページ", "https://giuseppepenone.com/it/works/1250-continuera-a-crescere-tranne-che-in-quel-punto"]
  },
  "Roni Horn": {
    bio: "ニューヨーク生まれ。彫刻、写真、ドローイング、書物を横断し、同一性、反復、天候、言葉、知覚の不安定さを探究する。1970年代半ばから繰り返し訪れたアイスランドの地形と気象が、作品の重要な基盤となった。",
    work: "《Well and Truly》は、青みを帯びた円筒形の鋳造ガラス群からなる。側面は曇り、上面は火で磨かれて水面のように滑らかである。巨大な固体でありながら、見る位置や光によって液体、穴、空、氷へと知覚が揺れ動く。",
    facts: ["固体ガラスを水のように見せる", "反復する要素は似ているが同一ではない", "鑑賞者の移動と光で表情が変化"],
    source: ["Pola Museum of Art｜Roni Horn", "https://www.polamuseum.or.jp/en/sp/roni-horn/"]
  },
  "Nobuo Sekine": {
    bio: "埼玉県生まれ。多摩美術大学で学び、1960年代末の「もの派」を切り拓いた中心作家。素材を加工して別の形を作るより、物と場所の関係をわずかに変え、世界がすでに持つ状態を露わにすることを目指した。",
    work: "《位相—大地》（1968）は、神戸・須磨離宮公園の地面に直径約2.2 m、深さ約2.7 mの穴を掘り、同量の土を隣に円柱として立てた一時的作品。空洞と土塊は正と負、存在と不在のように対応し、もの派誕生の契機とみなされる。",
    facts: ["1968年「第1回現代彫刻展」で発表", "穴と土の円柱は同寸法・同体積", "作品は展覧会後に埋め戻された"],
    source: ["Dallas Museum of Art｜Phase—Mother Earth", "https://blog.dma.org/2012/08/22/focus-on-sekine-nobuo/"]
  },
  "Kazuo Shiraga": {
    bio: "兵庫県尼崎市生まれ。ゼロ会を経て1955年に具体美術協会へ参加した。「人の真似をするな」という具体の精神のもと、身体と素材が直接衝突する制作を行い、国際的なアクション・ペインティングに先行する実践を残した。",
    work: "《泥に挑む》（1955）では、屋外に積まれた泥とセメントの中へ半裸で入り、全身で押し、掻き、格闘した。同時期に始めたフット・ペインティングでは、天井から吊ったロープにつかまり、足で絵具を滑走させる。作品は結果であると同時に、行為の記録である。",
    facts: ["1955年、第1回具体美術展で発表", "泥・セメントと全身で格闘", "足による絵画制作を長年継続"],
    source: ["MoMA｜Kazuo Shiraga", "https://www.moma.org/collection/artists/38972"]
  },
  "Louise Bourgeois": {
    bio: "パリのタペストリー修復業の家庭に生まれ、1938年にニューヨークへ移住した。幼少期の家族関係、母性、恐怖、怒り、修復を、彫刻、版画、布、インスタレーションへ繰り返し変換した。大規模な評価を得たのは70代以降だった。",
    work: "高さ9 mを超える《ママン》（1999）は、腹部に大理石の卵を抱える巨大な蜘蛛。蜘蛛は脅威であると同時に、織り、修復し、家族を守った母ジョゼフィーヌへの賛歌である。細い脚の下へ入ると、鑑賞者は保護と危険を同時に体験する。",
    facts: ["蜘蛛は母・織工・修復者の象徴", "鋼鉄と大理石による原作、後にブロンズ版", "親密な記憶を公共空間の巨大彫刻へ変換"],
    source: ["Guggenheim Bilbao｜Maman", "https://www.guggenheim-bilbao.eus/en/the-collection/works/maman"]
  },
  "Michelangelo": {
    bio: "フィレンツェ共和国領に生まれた彫刻家、画家、建築家、詩人。人体を精神と力の器として捉え、大理石彫刻《ダヴィデ》や《ピエタ》、システィーナ礼拝堂天井画など、ルネサンスを代表する仕事を残した。",
    work: "《アダムの創造》は、1508–1512年に制作されたシスティーナ礼拝堂天井画の中央場面の一つ。創世記1章27節を主題とし、力を帯びた神の手と、まだ完全には目覚めていないアダムの手を対置する。指先が触れない空白が、生命付与の瞬間を永遠に引き延ばす。",
    facts: ["フレスコ技法による天井画", "創世記の物語を描く中央連作の一場面", "接触直前の空白が構図の焦点"],
    source: ["Vatican Museums｜Creation of Adam", "https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/volta/storie-centrali/creazione-di-adamo.html"]
  },
  "Albrecht Dürer": {
    bio: "ニュルンベルク生まれの画家、版画家、理論家。精密な観察と印刷による複製力を結びつけ、北方ルネサンスの美術をヨーロッパ規模へ広げた。人体比例、遠近法、自然研究について著作も残した。",
    work: "《祈る手》（1508）は、青く調製した紙に黒インクと白のハイライトで描かれた。一般には、火災で失われた《ヘラー祭壇画》の使徒の手のための習作とされる。白線は光を足し、黒線は皺と腱を刻み、紙の青が皮膚を包む空気になる。",
    facts: ["1508年制作", "青色の紙、筆と黒インク、白のハイライト", "アルベルティーナ美術館蔵"],
    source: ["Albertina Museum｜Albrecht Dürer", "https://www.albertina.at/en/press/exhibitions/albrecht-duerer/"]
  },
  "Auguste Rodin": {
    bio: "近代彫刻を大きく変えたフランスの彫刻家。滑らかな完成度より、粘土を押した痕跡、断片化された身体、光を受けて揺れる表面を重視した。手だけを独立した主題とする彫刻も数多く制作した。",
    work: "《大教堂》は、別々の人物に由来する二つの右手を組み合わせた石彫。指先は接触せず、その内側に生まれる空間がゴシック建築のアーチを思わせる。表面には工具痕が残り、石から肉体が現れる途中のように見える。",
    facts: ["二人の人物の右手を組み合わせる", "旧題は《契約の箱》", "内部の空間がゴシック聖堂を想起させる"],
    source: ["Musée Rodin｜The Cathedral", "https://www.musee-rodin.fr/en/musee/collections/oeuvres/cathedral"]
  },
  "Alfred Stieglitz": {
    bio: "米国近代写真の形成を主導した写真家、編集者、ギャラリスト。Photo-Secessionやギャラリー291を通じて、写真を美術として確立するとともに、欧米の前衛美術を米国へ紹介した。画家ジョージア・オキーフとは公私にわたるパートナーだった。",
    work: "《Georgia O’Keeffe — Hands》（1919）はゼラチン・シルバー・プリント。オキーフの木炭画の前に手を置き、左手が画中の球体をつまみ出すように写す。スティーグリッツは約20年間に彼女を300点以上撮影し、顔や全身だけでなく手を独立した肖像として扱った。",
    facts: ["1919年・ゼラチン・シルバー・プリント", "オキーフの木炭画と手を重ねる構図", "手を創造する人格の象徴として撮影"],
    source: ["Georgia O’Keeffe Museum｜作品記録", "https://prints.okeeffemuseum.org/detail/475209/stieglitz-georgia-o%E2%80%99keeffe-%E2%80%93-hands-1919"]
  },
  "Maurizio Cattelan": {
    bio: "パドヴァ生まれ。制度、宗教、権力、死、アート市場を、ブラックユーモアと精巧なイメージで揺さぶる現代作家。作品は明快な冗談のように見えながら、一つの道徳的結論へ回収されることを拒む。",
    work: "《L.O.V.E.》（2010）はミラノ証券取引所前のアッファーリ広場に立つ大理石彫刻。遠目には中指を立てた手だが、近づくと他の四指は曲げられたのではなく切断されている。題名は Libertà、Odio、Vendetta、Eternità（自由・憎悪・復讐・永遠）の頭文字でもある。",
    facts: ["2010年、ミラノ証券取引所前に設置", "古典彫刻を思わせる大理石の巨大な手", "侮蔑、ファシズム、金融権力など複数の読みを誘う"],
    source: ["Marian Goodman Gallery｜Maurizio Cattelan", "https://www.mariangoodman.com/artists/maurizio-cattelan/"]
  },
  "Doris Salcedo": {
    bio: "ボゴタを拠点とするコロンビアの彫刻家。政治的暴力や失踪の被害を受けた人々への聞き取りをもとに、家具、衣服、靴、建築空間を沈黙の証言へ変える。直接的な惨状ではなく、不在が残した物を通して喪失を示す。",
    work: "《Atrabiliarios》（1992–2004）では、失踪した女性たちの履き古された靴を壁の窪みに収め、半透明の牛の膀胱を外科用糸で粗く縫い付ける。題名は黒胆汁と喪の憂鬱を意味するラテン語 atra bilis に由来する。膜は皮膚であり、曇った記憶の表面でもある。",
    facts: ["靴、牛の膀胱、外科用糸、壁面を使用", "失踪者の不在を個人の持ち物で示す", "見ることを妨げる膜が記憶の距離をつくる"],
    source: ["ICA Boston｜Atrabiliarios", "https://www.icaboston.org/art/doris-salcedo/atrabiliarios/"]
  },
  "Christian Boltanski": {
    bio: "パリ生まれ。写真、古着、裸電球、ブリキ箱、録音された鼓動を用い、個人の記憶と集合的な死、記録の不確かさを扱った。ユダヤ系の父が占領下で身を隠して生き延びたという家族史も、作品の背景にある。",
    work: "《Personnes》（2010）は、パリのグラン・パレの巨大な身廊に古着を格子状に敷き、中央の山をクレーンが無作為につかんでは落とすインスタレーション。暖房を止めた寒い空間に心音が響いた。仏語の personne は「人」であると同時に、否定文では「誰もいない」を意味する。",
    facts: ["MONUMENTA 2010のための巨大インスタレーション", "古着、クレーン、心音、冷気で構成", "個人と群衆、存在と不在を重ねる"],
    source: ["Pirelli HangarBicocca｜Personnes", "https://pirellihangarbicocca.org/en/exhibition/christian-boltanski-personnes/"]
  },
  "Odilon Redon": {
    bio: "ボルドー生まれの象徴主義画家・版画家。初期には木炭と石版画による幻想的な「ノワール（黒）」を制作し、後年は鮮烈なパステルと油彩へ移った。夢、文学、科学、見えない精神世界を、現実感のある異形として描いた。",
    work: "掲載作《眼は奇妙な気球のように無限へ向かう》（1882）は、エドガー・アラン・ポーに捧げた石版画集の一枚。巨大な眼球が気球となり、切断された頭部を皿に載せて暗い風景から浮上する。黒の粒子とぼかしが、物体よりも夢の湿度を描き出す。",
    facts: ["1882年・石版画", "連作《エドガー・ポーに》の一枚", "眼、気球、切断された頭部を結合"],
    source: ["LACMA｜To Edgar Poe", "https://collections.lacma.org/object/75383"]
  },
  "Bernard Buffet": {
    bio: "パリ生まれ。15歳で国立高等美術学校へ入り、20歳で批評家賞を受賞した。戦後の不安や貧困を描く具象絵画で急速に名声を得た一方、大衆的人気ゆえに批評界から激しく反発され、再評価が続く作家でもある。",
    work: "ビュフェは1955年頃から道化師を主要主題とした。掲載作《Tête de clown》（1961）では、長く尖った黒線が顔を仮面のように固定し、華やかなはずの道化師を孤独で硬質な存在へ変える。署名さえ画面を切り裂く線の一部となる。",
    facts: ["道化師は1950年代半ばからの重要主題", "鋭い黒線、扁平な空間、乾いた色面", "戦後フランス具象絵画の人気と論争を象徴"],
    source: ["Sotheby’s｜Tête de clown", "https://www.sothebys.com/en/auctions/ecatalogue/2018/modernits-pf1816/lot.13.html"]
  }
};

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
  const notes = researchNotes[artist[0]];
  document.querySelector("#dialog-image").src = artist[4];
  document.querySelector("#dialog-image").alt = `${artist[1]}の代表作品`;
  document.querySelector("#dialog-image-number").textContent = `${String(currentArtist + 1).padStart(2, "0")} / ${allArtists.length}`;
  document.querySelector("#dialog-room").textContent = `ROOM ${room.no} · ${room.name} / ${room.en}`;
  document.querySelector("#dialog-artist").textContent = artist[0];
  document.querySelector("#dialog-life").textContent = `${artist[1]} · ${artist[2]}`;
  document.querySelector("#dialog-work").textContent = artist[3];
  document.querySelector("#dialog-description").textContent = artist[5];
  document.querySelector("#dialog-focus").textContent = artist[6];
  document.querySelector("#dialog-bio").textContent = notes.bio;
  document.querySelector("#dialog-work-note").textContent = notes.work;
  document.querySelector("#dialog-facts").innerHTML = notes.facts.map(fact => `<li>${fact}</li>`).join("");
  document.querySelector("#dialog-source").href = notes.source[1];
  document.querySelector("#dialog-source-label").textContent = notes.source[0];
  document.querySelector(".dialog-copy").scrollTop = 0;
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
const cursorDot = document.querySelector(".cursor-dot");
let mouseX = innerWidth / 2, mouseY = innerHeight / 2, cursorX = mouseX, cursorY = mouseY;
let isCursorVisible = false;
let isClicking = false;

function updateDotTransform() {
  if (cursorDot) {
    const dotScale = isClicking ? " scale(1.3)" : "";
    cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)${dotScale}`;
  }
}

addEventListener("pointermove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (!isCursorVisible) {
    isCursorVisible = true;
    cursor.style.opacity = "1";
    if (cursorDot) cursorDot.style.opacity = "1";
    cursorX = mouseX;
    cursorY = mouseY;
  }
  updateDotTransform();
});

document.addEventListener("pointerdown", () => {
  isClicking = true;
  cursor.classList.add("clicking");
  if (cursorDot) cursorDot.classList.add("clicking");
  updateDotTransform();
});

document.addEventListener("pointerup", () => {
  isClicking = false;
  cursor.classList.remove("clicking");
  if (cursorDot) cursorDot.classList.remove("clicking");
  updateDotTransform();
});

document.addEventListener("pointerover", e => {
  const isInteractive = !!e.target.closest("button, a, input, dialog, .art-card, .index-item");
  cursor.classList.toggle("active", isInteractive);
  if (cursorDot) cursorDot.classList.toggle("active", isInteractive);
});

document.addEventListener("pointerleave", () => {
  cursor.style.opacity = "0";
  if (cursorDot) cursorDot.style.opacity = "0";
  isCursorVisible = false;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * .22;
  cursorY += (mouseY - cursorY) * .22;
  const scale = isClicking ? " scale(0.86)" : "";
  cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)${scale}`;
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

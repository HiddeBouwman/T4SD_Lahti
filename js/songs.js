// Song database
const songsDatabase = [
    {
        id: 1,
        title: "Lapin Kesä",
        artist: "Vesa-Matti Loiri",
        year: 1983,
        duration: "4:30",
        level: "beginner",
        cover: "https://cdnaws.recis.io/i/img/02/3f/d6/a2_624286_sq250.jpg",
        audioUrl: "assets/audio/id1.mp3",
        lyrics: [
            { finnish: "Lapissa kaikki kukkii nopeasti", english: "In Lapland everything blooms quickly", spanish: "En Laponia todo florece rápidamente", french: "En Laponie tout fleurit rapidement", arabic: "في لابلاند كل شيء يزهر بسرعة", dutch: "In Lapland bloeit alles snel", time: 0 },
            { finnish: "Maa, ruoho, ohra, vaivaiskoivutkin", english: "Earth, grass, barley, even dwarf birches", spanish: "Tierra, hierba, cebada, incluso abedules enanos", french: "Terre, herbe, orge, même les bouleaux nains", arabic: "الأرض، العشب، الشعير، حتى أشجار البتولا القزمة", dutch: "Aarde, gras, gerst, zelfs dwergberken", time: 6 },
            { finnish: "Tuon usein tuntenut oon raskaasti", english: "That I have often felt heavily", spanish: "Eso a menudo he sentido pesadamente", french: "Que j'ai souvent ressenti lourdement", arabic: "لقد شعرت بذلك غالباً بشكل ثقيل", dutch: "Dat heb ik vaak zwaar gevoeld", time: 12 },
            { finnish: "Kun katson kansan tämän vaiheisiin", english: "When I look at the phases of this people", spanish: "Cuando miro las fases de este pueblo", french: "Quand je regarde les phases de ce peuple", arabic: "عندما أنظر إلى مراحل هذا الشعب", dutch: "Als ik kijk naar de fasen van dit volk", time: 18 },
            { finnish: "Miks meillä kaikki kaunis tahtoo kuolla", english: "Why does everything beautiful want to die here", spanish: "Por qué todo lo bello quiere morir aquí", french: "Pourquoi tout ce qui est beau veut mourir ici", arabic: "لماذا كل شيء جميل يريد أن يموت هنا", dutch: "Waarom wil hier alles moois sterven", time: 24 },
            { finnish: "Ja suuri surkastua alhaiseen", english: "And the great wither to the lowly", spanish: "Y lo grande marchitarse a lo bajo", french: "Et le grand se flétrir vers le bas", arabic: "والعظيم يذبل إلى الحقير", dutch: "En het grote verwelken tot het lage", time: 30 },
            { finnish: "Miks meillä niin on monta mielipuolta", english: "Why do we have so many mad people", spanish: "Por qué tenemos tantos locos", french: "Pourquoi avons-nous tant de fous", arabic: "لماذا لدينا الكثير من المجانين", dutch: "Waarom hebben we zoveel gekken", time: 36 },
            { finnish: "Miks vähän käyttäjiä kanteleen", english: "Why so few players of the kantele", spanish: "Por qué tan pocos intérpretes del kantele", french: "Pourquoi si peu de joueurs de kantele", arabic: "لماذا عازفو الكانتيلي قليلون جداً", dutch: "Waarom zo weinig kantelespelers", time: 42 },
            { finnish: "Miks miestä täällä kaikkialla kaatuu", english: "Why do men fall everywhere here", spanish: "Por qué caen hombres por todas partes aquí", french: "Pourquoi les hommes tombent-ils partout ici", arabic: "لماذا يسقط الرجال في كل مكان هنا", dutch: "Waarom vallen hier overal mannen", time: 48 },
            { finnish: "Kuin heinää, miestä toiveen tosiaan", english: "Like grass, men of true hope", spanish: "Como hierba, hombres de verdadera esperanza", french: "Comme l'herbe, des hommes de vrai espoir", arabic: "مثل العشب، رجال الأمل الحقيقي", dutch: "Als gras, mannen van echte hoop", time: 54 },
            { finnish: "Miest' aatteen, tunteen miestä, kaikki maatuu", english: "Men of ideals and feelings, all decay", spanish: "Hombres de ideales y sentimientos, todo decae", french: "Hommes d'idéaux et de sentiments, tout se décompose", arabic: "رجال المثل والمشاعر، الكل يتحلل", dutch: "Mannen van idealen en gevoelens, alles vergaat", time: 60 },
            { finnish: "Tai kesken toimiansa katkeaa", english: "Or break in the midst of their actions", spanish: "O se rompen en medio de sus acciones", french: "Ou se brisent au milieu de leurs actions", arabic: "أو ينكسرون في خضم أفعالهم", dutch: "Of breken midden in hun daden", time: 66 },
            { finnish: "Muualla tulta sähkyy harmaahapset", english: "Elsewhere gray hairs sparkle with fire", spanish: "En otros lugares las canas brillan con fuego", french: "Ailleurs les cheveux gris étincellent de feu", arabic: "في أماكن أخرى الشعر الرمادي يتألق بالنار", dutch: "Elders fonkelen grijze haren van vuur", time: 72 },
            { finnish: "Vanhoissa hehkuu hengen aurinko", english: "In the old glows the sun of spirit", spanish: "En los viejos brilla el sol del espíritu", french: "Dans les vieux brille le soleil de l'esprit", arabic: "في الكبار تتوهج شمس الروح", dutch: "In de ouden gloeit de zon van de geest", time: 78 },
            { finnish: "Meill' ukkoina jo syntyy sylilapset", english: "Here as old men are born infants in arms", spanish: "Aquí como ancianos nacen bebés en brazos", french: "Ici en tant que vieillards naissent des nourrissons", arabic: "هنا كرجال كبار يولدون أطفالاً رضعاً", dutch: "Hier worden als oude mannen baby's geboren", time: 84 },
            { finnish: "Ja nuori mies on hautaan valmis jo", english: "And the young man is ready for the grave", spanish: "Y el joven ya está listo para la tumba", french: "Et le jeune homme est déjà prêt pour la tombe", arabic: "والشاب جاهز للقبر بالفعل", dutch: "En de jongeman is al klaar voor het graf", time: 90 },
            { finnish: "--- Musiikkitauko 25 sekuntia ---", english: "--- Musical pause 25 seconds ---", spanish: "--- Pausa musical 25 segundos ---", french: "--- Pause musicale 25 secondes ---", arabic: "--- توقف موسيقي 25 ثانية ---", dutch: "--- Muzikale pauze 25 seconden ---", time: 96 },
            { finnish: "Ja minä itse, miksi näitä mietin", english: "And I myself, why do I ponder these", spanish: "Y yo mismo, por qué pienso en esto", french: "Et moi-même, pourquoi je réfléchis à cela", arabic: "وأنا نفسي، لماذا أفكر في هذا", dutch: "En ik zelf, waarom overdenk ik dit", time: 115 },
            { finnish: "Se merkki varhaisen on vanhuuden", english: "It's a sign of early old age", spanish: "Es señal de vejez temprana", french: "C'est un signe de vieillesse précoce", arabic: "إنها علامة على الشيخوخة المبكرة", dutch: "Het is een teken van vroege ouderdom", time: 121 },
            { finnish: "Miks seuraa käskyä en veren yietin", english: "Why I don't follow the command of blood's voice", spanish: "Por qué no sigo el mandato de la voz de la sangre", french: "Pourquoi je ne suis pas le commandement de la voix du sang", arabic: "لماذا لا أتبع أمر صوت الدم", dutch: "Waarom volg ik het bevel van de stem van het bloed niet", time: 127 },
            { finnish: "Vaan kansain kohtaloita huokailen", english: "But sigh over the fates of nations", spanish: "Sino que suspiro por los destinos de las naciones", french: "Mais soupire sur les destins des nations", arabic: "لكنني أتنهد على مصائر الأمم", dutch: "Maar zucht over het lot van naties", time: 133 },
            { finnish: "On vastaus vain yksi, Lapin suvi", english: "There is only one answer, Lapland's summer", spanish: "Hay una sola respuesta, el verano de Laponia", french: "Il n'y a qu'une seule réponse, l'été lapon", arabic: "هناك إجابة واحدة فقط، صيف لابلاند", dutch: "Er is maar één antwoord, de Laplandse zomer", time: 139 },
            { finnish: "Sit' aatellessa mieli apeutuu", english: "Thinking of it, the mind becomes sad", spanish: "Al pensar en ello, la mente se entristece", french: "En y pensant, l'esprit devient triste", arabic: "عند التفكير في ذلك، يصبح العقل حزيناً", dutch: "Als ik eraan denk, wordt de geest verdrietig", time: 145 },
            { finnish: "On lyhyt Lapin linnunlaulu, huvi", english: "Short is Lapland's birdsong, joy", spanish: "Breve es el canto de los pájaros de Laponia, la alegría", french: "Court est le chant d'oiseau lapon, la joie", arabic: "قصيرة تغريدة طيور لابلاند، الفرح", dutch: "Kort is het vogelgezang van Lapland, vreugde", time: 151 },
            { finnish: "Ja kukkain kukoistus ja riemu muu", english: "And the blooming of flowers and other joy", spanish: "Y el florecimiento de las flores y otra alegría", french: "Et la floraison des fleurs et autre joie", arabic: "وازدهار الزهور وفرح آخر", dutch: "En de bloei van bloemen en andere vreugde", time: 157 },
            { finnish: "Mut' pitkä vain on talven valta", english: "But long is winter's reign alone", spanish: "Pero largo es solo el reinado del invierno", french: "Mais long est seulement le règne de l'hiver", arabic: "لكن طويل هو حكم الشتاء فقط", dutch: "Maar lang is alleen de heerschappij van de winter", time: 163 },
            { finnish: "Hetken täällä aatteet levähtää kuin lennostaan", english: "For a moment ideas rest here as if from their flight", spanish: "Por un momento las ideas descansan aquí como de su vuelo", french: "Un instant les idées se reposent ici comme de leur vol", arabic: "للحظة تستريح الأفكار هنا كما من طيرانها", dutch: "Even rusten ideeën hier als van hun vlucht", time: 169 },
            { finnish: "Kun taas ne alkaa aurinkoisen retken", english: "When again they begin their sunny journey", spanish: "Cuando de nuevo comienzan su viaje soleado", french: "Quand à nouveau ils commencent leur voyage ensoleillé", arabic: "عندما يبدأون مرة أخرى رحلتهم المشمسة", dutch: "Wanneer ze opnieuw hun zonnige reis beginnen", time: 175 },
            { finnish: "Ja jättävät jo jäisen Lapinmaan", english: "And leave behind the icy Lapland", spanish: "Y dejan atrás la helada Laponia", french: "Et laissent derrière eux la Laponie glacée", arabic: "ويتركون وراءهم لابلاند الجليدية", dutch: "En het ijzige Lapland achterlaten", time: 181 },
            { finnish: "Oi, valkolinnut, vieraat Lapin kesän", english: "Oh, white birds, guests of Lapland's summer", spanish: "Oh, pájaros blancos, huéspedes del verano de Laponia", french: "Oh, oiseaux blancs, invités de l'été lapon", arabic: "أيها الطيور البيضاء، ضيوف صيف لابلاند", dutch: "O, witte vogels, gasten van de Laplandse zomer", time: 187 },
            { finnish: "Te suuret aatteet, teitä tervehän", english: "You great ideas, I greet you", spanish: "Ustedes grandes ideas, los saludo", french: "Vous grandes idées, je vous salue", arabic: "أيتها الأفكار العظيمة، أحييكم", dutch: "Jullie grote ideeën, ik groet jullie", time: 193 },
            { finnish: "Oi, tänne jääkää, tänne tehden pesän", english: "Oh, stay here, making your nest here", spanish: "Oh, quédense aquí, haciendo su nido aquí", french: "Oh, restez ici, faisant votre nid ici", arabic: "أوه، ابقوا هنا، اصنعوا عشكم هنا", dutch: "O, blijf hier, maak hier je nest", time: 199 },
            { finnish: "Jos muutattekin maihin etelän", english: "Even if you move to southern lands", spanish: "Aunque se muden a tierras del sur", french: "Même si vous déménagez vers les terres du sud", arabic: "حتى لو انتقلتم إلى الأراضي الجنوبية", dutch: "Zelfs als je naar zuidelijke landen verhuist", time: 205 },
            { finnish: "Oi, oppi ottakaatte joutsenista", english: "Oh, take a lesson from the swans", spanish: "Oh, tomen una lección de los cisnes", french: "Oh, prenez une leçon des cygnes", arabic: "أوه، خذوا درساً من البجع", dutch: "O, neem een les van de zwanen", time: 211 },
            { finnish: "Ne lähtee syksyin, palaa kevaisin", english: "They leave in autumn, return in spring", spanish: "Se van en otoño, regresan en primavera", french: "Ils partent en automne, reviennent au printemps", arabic: "يغادرون في الخريف، يعودون في الربيع", dutch: "Ze vertrekken in de herfst, keren terug in de lente", time: 217 },
            { finnish: "On meidän rannoillamme rauhallista", english: "On our shores it is peaceful", spanish: "En nuestras costas es tranquilo", french: "Sur nos rivages c'est paisible", arabic: "على شواطئنا الأمر هادئ", dutch: "Aan onze kusten is het vredig", time: 223 },
            { finnish: "Ja turvaista on rinne tunturin", english: "And safe is the slope of the fell", spanish: "Y segura es la ladera de la montaña", french: "Et sûre est la pente du mont", arabic: "وآمن منحدر الجبل", dutch: "En veilig is de helling van de berg", time: 229 },
            { finnish: "Havisten halki ilman lentäkääte", english: "Rustling fly through the air", spanish: "Susurrando vuelen por el aire", french: "Bruissant volez à travers l'air", arabic: "حفيف اطيروا في الهواء", dutch: "Ruisend vlieg door de lucht", time: 235 },
            { finnish: "Tekoja luokaa, maita valaiskaa", english: "Create deeds, enlighten lands", spanish: "Creen obras, iluminen tierras", french: "Créez des actes, éclairez les terres", arabic: "اخلقوا الأعمال، أنيروا الأراضي", dutch: "Creëer daden, verlicht landen", time: 241 },
            { finnish: "Mut' talven poistuneen kun täältä näätte", english: "But when you see winter has departed from here", spanish: "Pero cuando vean que el invierno se ha ido de aquí", french: "Mais quand vous voyez que l'hiver est parti d'ici", arabic: "لكن عندما ترون أن الشتاء قد غادر من هنا", dutch: "Maar wanneer je ziet dat de winter hier is vertrokken", time: 247 },
            { finnish: "Ma rukoilen, ma pyydän, palatkaa", english: "I pray, I ask, return", spanish: "Ruego, pido, regresen", french: "Je prie, je demande, revenez", arabic: "أدعو، أطلب، عودوا", dutch: "Ik bid, ik vraag, keer terug", time: 253 }
        ]
    },
    {
        id: 2,
        title: "Sata Salamaa",
        artist: "Virve Rosti",
        year: 1982,
        duration: "2:49",
        level: "beginner",
        cover: "https://cdnaws.recis.io/i/img/02/3f/c6/33_f88f88_sq250.jpg",
        audioUrl: "assets/audio/SataSalamaa.mp3",
        lyrics: [
            // NOTE: Timestamps here are placeholders.
            // If you want accurate karaoke sync, update the `time` values based on your MP3.
            { finnish: "♪", english: "♪", spanish: "♪", french: "♪", arabic: "♪", dutch: "♪", time: 0 },
            { finnish: "Pimeenee valkeat maat", english: "The pale lands grow dark", spanish: "Se oscurecen las tierras claras", french: "Les terres blanches s'assombrissent", arabic: "تُظلم الأراضي البيضاء", dutch: "De witte landen worden donker", time: 20 },
            { finnish: "Laulupuut valkenevat", english: "The trees of song turn white", spanish: "Los árboles del canto se blanquean", french: "Les arbres du chant blanchissent", arabic: "أشجار الغناء تبيضّ", dutch: "De zangbomen worden wit", time: 23.4 },
            { finnish: "Katunjat lapset piiloutuu", english: "Street kids hide away", spanish: "Los niños de la calle se esconden", french: "Les enfants des rues se cachent", arabic: "أطفال الشوارع يختبئون", dutch: "Straatkinderen verstoppen zich", time: 27 },
            { finnish: "Kun raju ilma nousee", english: "When the wild weather rises", spanish: "Cuando se levanta el tiempo feroz", french: "Quand le temps sauvage se lève", arabic: "عندما يهبّ الطقس العنيف", dutch: "Als het ruige weer opstijgt", time: 30.5 },
            { finnish: "Pelätään pelkomme pois", english: "We fear our fear away", spanish: "Ahuyentamos nuestro miedo", french: "On chasse nos peurs", arabic: "نُبعد خوفنا", dutch: "We jagen onze angst weg", time: 34 },
            { finnish: "Mikään ei viedä mua vois", english: "Nothing could take me away", spanish: "Nada podría llevarme lejos", french: "Rien ne pourrait m'emporter", arabic: "لا شيء يمكنه أن يأخذني", dutch: "Niets zou me kunnen wegnemen", time: 37.4 },
            { finnish: "Kun rakkaus kiinni painautuu", english: "When love presses close", spanish: "Cuando el amor se aferra", french: "Quand l'amour se serre contre moi", arabic: "عندما يلتصق الحب", dutch: "Als liefde zich vastdrukt", time: 41 },
            { finnish: "Ja sydän lämpenee", english: "And the heart warms", spanish: "Y el corazón se calienta", french: "Et le cœur se réchauffe", arabic: "ويَدفأ القلب", dutch: "En het hart wordt warm", time: 45 },
            { finnish: "Vaik sata salamaa iskee tulta", english: "Even if a hundred lightning bolts strike fire", spanish: "Aunque cien relámpagos prendan fuego", french: "Même si cent éclairs frappent en feu", arabic: "حتى لو ضربت مئة صاعقة ناراً", dutch: "Al slaan honderd bliksems vuur", time: 50 },
            { finnish: "Ja koko elämä räjähtää", english: "And the whole life explodes", spanish: "Y toda la vida estalla", french: "Et toute la vie explose", arabic: "وإن انفجرت الحياة كلها", dutch: "En het hele leven ontploft", time: 54 },
            { finnish: "Ei rakkautta voi riistää multa", english: "No one can steal love from me", spanish: "Nadie puede arrebatarme el amor", french: "Personne ne peut m'arracher l'amour", arabic: "لا أحد يستطيع أن يسلبني الحب", dutch: "Niemand kan de liefde van me afpakken", time: 57 },
            { finnish: "Toivon jäljelle jää", english: "Hope remains", spanish: "Queda la esperanza", french: "Il reste l'espoir", arabic: "يبقى الأمل", dutch: "Er blijft hoop over", time: 61 },
            { finnish: "Kun sata aurinkoo meille paistaa", english: "When a hundred suns shine for us", spanish: "Cuando cien soles brillan para nosotros", french: "Quand cent soleils brillent pour nous", arabic: "عندما تشرق لنا مئة شمس", dutch: "Als honderd zonnen voor ons schijnen", time: 64.5 },
            { finnish: "Ja laiva valmis on nousemaan", english: "And the ship is ready to rise", spanish: "Y el barco está listo para zarpar", french: "Et le navire est prêt à partir", arabic: "والسفينة جاهزة للإقلاع", dutch: "En het schip is klaar om te vertrekken", time: 68 },
            { finnish: "Minä turvaan vien tämän rakkauden", english: "I will carry this love to safety", spanish: "Llevaré este amor a un lugar seguro", french: "Je mettrai cet amour à l'abri", arabic: "سأحمل هذا الحب إلى الأمان", dutch: "Ik breng deze liefde in veiligheid", time: 71 },
            { finnish: "Ja me löydämme uuden maan", english: "And we will find a new land", spanish: "Y encontraremos una nueva tierra", french: "Et nous trouverons une nouvelle terre", arabic: "وسنجد أرضاً جديدة", dutch: "En we vinden een nieuw land", time: 75 },
            { finnish: "Lähellä lämpösi saan", english: "Close to you I can feel your warmth", spanish: "Cerca de ti siento tu calor", french: "Près de toi je sens ta chaleur", arabic: "قريباً منك أشعر بدفئك", dutch: "Dicht bij jou voel ik je warmte", time: 81 },
            { finnish: "Unelma uupuvan maan", english: "A dream of a weary land", spanish: "Un sueño de una tierra agotada", french: "Un rêve d'une terre épuisée", arabic: "حلم لأرض مُنهكة", dutch: "Een droom van een uitgeput land", time: 84.5 },
            { finnish: "Viimeinen haave viimeiseltä yöltä", english: "The last dream from the last night", spanish: "El último sueño de la última noche", french: "Le dernier rêve de la dernière nuit", arabic: "آخر حلم من آخر ليلة", dutch: "De laatste droom van de laatste nacht", time: 87.8 },
            { finnish: "Meille suojaa antaa", english: "Gives us shelter", spanish: "Nos da refugio", french: "Nous donne un abri", arabic: "يمنحنا مأوى", dutch: "Geeft ons beschutting", time: 91.7 },
            { finnish: "Totuuden toivossas nään", english: "In your hope of truth, I see", spanish: "En tu esperanza de verdad, veo", french: "Dans ton espoir de vérité, je vois", arabic: "في أملك بالحقيقة أرى", dutch: "In jouw hoop op waarheid zie ik", time: 95.4 },
            { finnish: "Liekin luot kuiskaten tän", english: "You whisper a flame into this", spanish: "Susurras una llama en esto", french: "Tu murmures une flamme en ceci", arabic: "تهمس بلهبٍ في هذا", dutch: "Je fluistert een vlam in dit", time: 98.7 },
            { finnish: "Vain rakkaus meidät perille vie", english: "Only love will lead us there", spanish: "Solo el amor nos llevará hasta allí", french: "Seul l'amour nous y mènera", arabic: "فقط الحب سيقودنا إلى هناك", dutch: "Alleen liefde brengt ons ernaartoe", time: 101.5 },
            { finnish: "Se meidät pelastaa", english: "It will save us", spanish: "Nos salvará", french: "Il nous sauvera", arabic: "سينقذنا", dutch: "Het redt ons", time: 106 },
            { finnish: "Vaik sata salamaa iskee tulta", english: "Even if a hundred lightning bolts strike fire", spanish: "Aunque cien relámpagos prendan fuego", french: "Même si cent éclairs frappent en feu", arabic: "حتى لو ضربت مئة صاعقة ناراً", dutch: "Al slaan honderd bliksems vuur", time: 111.4 },
            { finnish: "Ja koko elämä räjähtää", english: "And the whole life explodes", spanish: "Y toda la vida estalla", french: "Et toute la vie explose", arabic: "وإن انفجرت الحياة كلها", dutch: "En het hele leven ontploft", time: 115 },
            { finnish: "Ei rakkautta voi riistää multa", english: "No one can steal love from me", spanish: "Nadie puede arrebatarme el amor", french: "Personne ne peut m'arracher l'amour", arabic: "لا أحد يستطيع أن يسلبني الحب", dutch: "Niemand kan de liefde van me afpakken", time: 118.5 },
            { finnish: "Toivon jäljelle jää", english: "Hope remains", spanish: "Queda la esperanza", french: "Il reste l'espoir", arabic: "يبقى الأمل", dutch: "Er blijft hoop over", time: 121.8 },
            { finnish: "Kun sata aurinkoo meille paistaa", english: "When a hundred suns shine for us", spanish: "Cuando cien soles brillan para nosotros", french: "Quand cent soleils brillent pour nous", arabic: "عندما تشرق لنا مئة شمس", dutch: "Als honderd zonnen voor ons schijnen", time: 125.5 },
            { finnish: "Ja laiva valmis on nousemaan", english: "And the ship is ready to rise", spanish: "Y el barco está listo para zarpar", french: "Et le navire est prêt à partir", arabic: "والسفينة جاهزة للإقلاع", dutch: "En het schip is klaar om te vertrekken", time: 129 },
            { finnish: "Minä turvaan vien tämän rakkauden", english: "I will carry this love to safety", spanish: "Llevaré este amor a un lugar seguro", french: "Je mettrai cet amour à l'abri", arabic: "سأحمل هذا الحب إلى الأمان", dutch: "Ik breng deze liefde in veiligheid", time: 132.3 },
            { finnish: "Ja me löydämme uuden maan", english: "And we will find a new land", spanish: "Y encontraremos una nueva tierra", french: "Et nous trouverons une nouvelle terre", arabic: "وسنجد أرضاً جديدة", dutch: "En we vinden een nieuw land", time: 136.7 },
            { finnish: "On tuolla tuhannet maailmat", english: "Out there are thousands of worlds", spanish: "Allá afuera hay miles de mundos", french: "Là dehors il y a des milliers de mondes", arabic: "هناك آلاف العوالم", dutch: "Daarbuiten zijn duizenden werelden", time: 140 },
            { finnish: "Ja yksi niistä meidän on", english: "And one of them is ours", spanish: "Y uno de ellos es nuestro", french: "Et l'un d'eux est à nous", arabic: "وأحدها لنا", dutch: "En één daarvan is van ons", time: 143.3 },
            { finnish: "♪", english: "♪", spanish: "♪", french: "♪", arabic: "♪", dutch: "♪", time: 146.5 },
            { finnish: "Vaik sata salamaa iskee tulta", english: "Even if a hundred lightning bolts strike fire", spanish: "Aunque cien relámpagos prendan fuego", french: "Même si cent éclairs frappent en feu", arabic: "حتى لو ضربت مئة صاعقة ناراً", dutch: "Al slaan honderd bliksems vuur", time: 154.4 },
            { finnish: "Ja koko elämä räjähtää", english: "And the whole life explodes", spanish: "Y toda la vida estalla", french: "Et toute la vie explose", arabic: "وإن انفجرت الحياة كلها", dutch: "En het hele leven ontploft", time: 157.7 },
            { finnish: "Minä turvaan vien tän tämän rakkauden", english: "I will carry this love to safety", spanish: "Llevaré este amor a un lugar seguro", french: "Je mettrai cet amour à l'abri", arabic: "سأحمل هذا الحب إلى الأمان", dutch: "Ik breng deze liefde in veiligheid", time: 159.8 },
            { finnish: "Ja me löydämme uuden maan", english: "And we will find a new land", spanish: "Y encontraremos una nueva tierra", french: "Et nous trouverons une nouvelle terre", arabic: "وسنجد أرضاً جديدة", dutch: "En we vinden een nieuw land", time: 164.3 },
            { finnish: "Minä turvaan vien tämän rakkauden", english: "I will carry this love to safety", spanish: "Llevaré este amor a un lugar seguro", french: "Je mettrai cet amour à l'abri", arabic: "سأحمل هذا الحب إلى الأمان", dutch: "Ik breng deze liefde in veiligheid", time: 168 },
            { finnish: "Vaihdan vaan maahan valkeaan", english: "I'll just trade it for a white land", spanish: "Solo lo cambiaré por una tierra blanca", french: "Je l'échangerai juste pour une terre blanche", arabic: "سأستبدله فقط بأرض بيضاء", dutch: "Ik ruil het gewoon voor een wit land", time: 171.6 }
        ]
    },
    {
        id: 3,
        title: "Armo",
        artist: "Apulanta",
        year: 1999,        duration: "3:30",        level: "intermediate",
        cover: "https://cdnaws.recis.io/i/img/02/3f/d1/c4_3ae569_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
        lyrics: [
            { finnish: "Tämä on kotikaupunkini", english: "This is my hometown", spanish: "Esta es mi ciudad natal", french: "C'est ma ville natale", arabic: "هذه مدينتي", dutch: "Dit is mijn geboortestad", time: 0 },
            { finnish: "Tunnen jokaisen kadun", english: "I know every street", spanish: "Conozco cada calle", french: "Je connais chaque rue", arabic: "أعرف كل شارع", dutch: "Ik ken elke straat", time: 7 },
            { finnish: "Muistot täyttää sydämen", english: "Memories fill the heart", spanish: "Los recuerdos llenan el corazón", french: "Les souvenirs remplissent le cœur", arabic: "الذكريات تملأ القلب", dutch: "Herinneringen vullen het hart", time: 14 },
            { finnish: "Täällä aina palaan", english: "Here I always return", spanish: "Aquí siempre regreso", french: "Ici je reviens toujours", arabic: "هنا أعود دائماً", dutch: "Hier keer ik altijd terug", time: 21 },
            { finnish: "Lapsuuteni talot seisovat vielä", english: "My childhood houses still stand", spanish: "Las casas de mi infancia aún permanecen", french: "Les maisons de mon enfance sont toujours là", arabic: "منازل طفولتي لا تزال قائمة", dutch: "De huizen van mijn jeugd staan er nog", time: 28 },
            { finnish: "Ystäväni asuvat lähellä", english: "My friends live nearby", spanish: "Mis amigos viven cerca", french: "Mes amis vivent à proximité", arabic: "أصدقائي يعيشون قريباً", dutch: "Mijn vrienden wonen dichtbij", time: 35 },
            { finnish: "Tämä paikka on minun kotini", english: "This place is my home", spanish: "Este lugar es mi hogar", french: "Cet endroit est ma maison", arabic: "هذا المكان هو بيتي", dutch: "Deze plek is mijn thuis", time: 43 },
            { finnish: "En vaihda sitä mihinkään", english: "I wouldn't trade it for anything", spanish: "No lo cambiaría por nada", french: "Je ne l'échangerais pour rien", arabic: "لن أبادله بأي شيء", dutch: "Ik zou het voor niets ruilen", time: 50 },
            { finnish: "Joka nurkan takana on tarina", english: "Behind every corner is a story", spanish: "Detrás de cada esquina hay una historia", french: "Derrière chaque coin il y a une histoire", arabic: "خلف كل زاوية قصة", dutch: "Achter elke hoek is een verhaal", time: 57 },
            { finnish: "Puistossa leikimme lapsena", english: "We played in the park as children", spanish: "Jugábamos en el parque de niños", french: "Nous jouions dans le parc enfants", arabic: "لعبنا في الحديقة كأطفال", dutch: "We speelden in het park als kinderen", time: 64 },
            { finnish: "Koulun piha näyttää pienemmältä nyt", english: "The schoolyard looks smaller now", spanish: "El patio de la escuela se ve más pequeño ahora", french: "La cour d'école semble plus petite maintenant", arabic: "ساحة المدرسة تبدو أصغر الآن", dutch: "Het schoolplein ziet er nu kleiner uit", time: 71 },
            { finnish: "Mutta tunteet ovat samat", english: "But the feelings are the same", spanish: "Pero los sentimientos son los mismos", french: "Mais les sentiments sont les mêmes", arabic: "لكن المشاعر هي نفسها", dutch: "Maar de gevoelens zijn hetzelfde", time: 78 },
            { finnish: "Kesäisin kävelemme rantaan", english: "In summers we walk to the beach", spanish: "En verano caminamos a la playa", french: "En été nous marchons vers la plage", arabic: "في الصيف نمشي إلى الشاطئ", dutch: "In de zomer lopen we naar het strand", time: 86 },
            { finnish: "Talvisin luistelemme jäällä", english: "In winters we skate on ice", spanish: "En invierno patinamos sobre hielo", french: "En hiver nous patinons sur la glace", arabic: "في الشتاء نتزلج على الجليد", dutch: "In de winter schaatsen we op het ijs", time: 93 },
            { finnish: "Vuodenajat vaihtuvat", english: "Seasons change", spanish: "Las estaciones cambian", french: "Les saisons changent", arabic: "المواسم تتغير", dutch: "Seizoenen veranderen", time: 100 },
            { finnish: "Mutta kaupunki pysyy samana", english: "But the city stays the same", spanish: "Pero la ciudad permanece igual", french: "Mais la ville reste la même", arabic: "لكن المدينة تبقى كما هي", dutch: "Maar de stad blijft hetzelfde", time: 107 },
            { finnish: "Se on osa identiteettiäni", english: "It is part of my identity", spanish: "Es parte de mi identidad", french: "C'est une partie de mon identité", arabic: "إنها جزء من هويتي", dutch: "Het is een deel van mijn identiteit", time: 114 },
            { finnish: "Kantamassa mukanani kaikkialle", english: "Carrying with me everywhere", spanish: "Llevándola conmigo a todas partes", french: "La portant avec moi partout", arabic: "أحملها معي في كل مكان", dutch: "Het overal met me meedragen", time: 121 },
            { finnish: "Kun matkan päälle lähden", english: "When I set out to travel", spanish: "Cuando me pongo en viaje", french: "Quand je pars en voyage", arabic: "عندما أبدأ السفر", dutch: "Wanneer ik op reis ga", time: 129 },
            { finnish: "Kaipaan aina takaisin", english: "I always miss coming back", spanish: "Siempre extraño volver", french: "Je regrette toujours de revenir", arabic: "أشتاق دائماً للعودة", dutch: "Ik verlang altijd naar terugkomen", time: 136 },
            { finnish: "Kotikaupunkini kutsuu", english: "My hometown calls", spanish: "Mi ciudad natal llama", french: "Ma ville natale appelle", arabic: "مدينتي تناديني", dutch: "Mijn geboortestad roept", time: 143 },
            { finnish: "Sen rauha ja lämpö", english: "Its peace and warmth", spanish: "Su paz y calidez", french: "Sa paix et sa chaleur", arabic: "سلامها ودفؤها", dutch: "Haar vrede en warmte", time: 150 },
            { finnish: "Tutut kasvot kadulla", english: "Familiar faces on the street", spanish: "Caras familiares en la calle", french: "Des visages familiers dans la rue", arabic: "وجوه مألوفة في الشارع", dutch: "Vertrouwde gezichten op straat", time: 157 },
            { finnish: "Tervehdykset ja hymyt", english: "Greetings and smiles", spanish: "Saludos y sonrisas", french: "Salutations et sourires", arabic: "التحيات والابتسامات", dutch: "Begroetingen en glimlachen", time: 164 },
            { finnish: "Tämä on minun paikkani", english: "This is my place", spanish: "Este es mi lugar", french: "C'est mon endroit", arabic: "هذا مكاني", dutch: "Dit is mijn plek", time: 172 },
            { finnish: "Täällä kuulun", english: "Here I belong", spanish: "Aquí pertenezco", french: "Ici j'appartiens", arabic: "هنا أنتمي", dutch: "Hier hoor ik thuis", time: 179 },
            { finnish: "Täällä olen kotona", english: "Here I am home", spanish: "Aquí estoy en casa", french: "Ici je suis chez moi", arabic: "هنا أنا في بيتي", dutch: "Hier ben ik thuis", time: 186 },
            { finnish: "Kotikaupunkini, rakas kaupunkini", english: "My hometown, my dear city", spanish: "Mi ciudad natal, mi querida ciudad", french: "Ma ville natale, ma chère ville", arabic: "مدينتي، مدينتي العزيزة", dutch: "Mijn geboortestad, mijn lieve stad", time: 193 },
            { finnish: "Ikuisesti sydämessäni", english: "Forever in my heart", spanish: "Por siempre en mi corazón", french: "Pour toujours dans mon cœur", arabic: "إلى الأبد في قلبي", dutch: "Voor altijd in mijn hart", time: 200 },
            { finnish: "Tämä on minun tarinani", english: "This is my story", spanish: "Esta es mi historia", french: "C'est mon histoire", arabic: "هذه قصتي", dutch: "Dit is mijn verhaal", time: 207 }
        ]
    },
    {
        id: 4,
        title: "Cha cha cha (reggae mix)",
        artist: "Käärijä",
        year: 2023,
        duration: "3:32",
        level: "intermediate",
        cover: "https://cdn.recis.io/i/img/02/3f/e5/f2_0d7045_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-november.mp3",
        lyrics: [
            { finnish: "Lehdet putoaa maahan", english: "Leaves fall to the ground", spanish: "Las hojas caen al suelo", french: "Les feuilles tombent au sol", arabic: "الأوراق تسقط على الأرض", dutch: "Bladeren vallen op de grond", time: 0 },
            { finnish: "Värit vaihtuvat kultaan", english: "Colors change to gold", spanish: "Los colores cambian a oro", french: "Les couleurs changent en or", arabic: "الألوان تتحول إلى ذهبي", dutch: "Kleuren veranderen in goud", time: 7 },
            { finnish: "Tuuli humisee puissa", english: "Wind whispers in the trees", spanish: "El viento susurra en los árboles", french: "Le vent murmure dans les arbres", arabic: "الريح تهمس في الأشجار", dutch: "De wind fluistert in de bomen", time: 14 },
            { finnish: "Syksy on saapunut", english: "Autumn has arrived", spanish: "El otoño ha llegado", french: "L'automne est arrivé", arabic: "وصل الخريف", dutch: "De herfst is aangekomen", time: 21 },
            { finnish: "Ilma muuttuu viileämmäksi", english: "The air becomes cooler", spanish: "El aire se vuelve más fresco", french: "L'air devient plus frais", arabic: "الهواء يصبح أبرد", dutch: "De lucht wordt koeler", time: 28 },
            { finnish: "Päivät lyhenevät nopeasti", english: "Days shorten quickly", spanish: "Los días se acortan rápidamente", french: "Les jours raccourcissent rapidement", arabic: "الأيام تقصر بسرعة", dutch: "Dagen worden snel korter", time: 35 },
            { finnish: "Luonto valmistautuu talveen", english: "Nature prepares for winter", spanish: "La naturaleza se prepara para el invierno", french: "La nature se prépare pour l'hiver", arabic: "الطبيعة تستعد للشتاء", dutch: "De natuur bereidt zich voor op de winter", time: 43 },
            { finnish: "Mutta kauneus on kaikkialla", english: "But beauty is everywhere", spanish: "Pero la belleza está en todas partes", french: "Mais la beauté est partout", arabic: "لكن الجمال في كل مكان", dutch: "Maar schoonheid is overal", time: 50 },
            { finnish: "Punainen, oranssi ja keltainen", english: "Red, orange and yellow", spanish: "Rojo, naranja y amarillo", french: "Rouge, orange et jaune", arabic: "أحمر وبرتقالي وأصفر", dutch: "Rood, oranje en geel", time: 57 },
            { finnish: "Väriloisto ympärilläni", english: "Blaze of colors around me", spanish: "Resplandor de colores a mi alrededor", french: "Éclat de couleurs autour de moi", arabic: "وهج الألوان من حولي", dutch: "Kleurenpracht om me heen", time: 64 },
            { finnish: "Metsä näyttää maalaukset", english: "Forest looks like a painting", spanish: "El bosque parece una pintura", french: "La forêt ressemble à une peinture", arabic: "الغابة تبدو كلوحة", time: 71 },
            { finnish: "Luonnon taideteos", english: "Nature's artwork", spanish: "Obra de arte de la naturaleza", french: "Œuvre d'art de la nature", arabic: "عمل فني للطبيعة", time: 78 },
            { finnish: "Sade piiskainen ikkunaan", english: "Rain lashes against the window", spanish: "La lluvia azota la ventana", french: "La pluie fouette la fenêtre", arabic: "المطر يضرب النافذة", time: 86 },
            { finnish: "Harmaa taivas peittää kaiken", english: "Gray sky covers everything", spanish: "El cielo gris cubre todo", french: "Le ciel gris couvre tout", arabic: "السماء الرمادية تغطي كل شيء", time: 93 },
            { finnish: "Mutta minä rakastan syksyä", english: "But I love autumn", spanish: "Pero amo el otoño", french: "Mais j'aime l'automne", arabic: "لكنني أحب الخريف", time: 100 },
            { finnish: "Sen melankolinen kauneus", english: "Its melancholic beauty", spanish: "Su belleza melancólica", french: "Sa beauté mélancolique", arabic: "جماله الكئيب", time: 107 },
            { finnish: "Sateenvarjo kädessäni", english: "Umbrella in my hand", spanish: "Paraguas en mi mano", french: "Parapluie à la main", arabic: "مظلة في يدي", time: 114 },
            { finnish: "Kävelen läpi kaupungin", english: "I walk through the city", spanish: "Camino por la ciudad", french: "Je marche à travers la ville", arabic: "أمشي عبر المدينة", time: 121 },
            { finnish: "Lätäköt heijastaa valoja", english: "Puddles reflect lights", spanish: "Los charcos reflejan luces", french: "Les flaques reflètent les lumières", arabic: "البرك تعكس الأضواء", time: 129 },
            { finnish: "Autot ajavat hitaasti", english: "Cars drive slowly", spanish: "Los coches conducen lentamente", french: "Les voitures roulent lentement", arabic: "السيارات تقود ببطء", time: 136 },
            { finnish: "Ihmiset kiiruhtavat sisälle", english: "People hurry inside", spanish: "La gente se apresura adentro", french: "Les gens se dépêchent à l'intérieur", arabic: "الناس يسرعون للداخل", dutch: "Mensen haasten zich naar binnen", time: 143 },
            { finnish: "Mutta minä nautin hetkestä", english: "But I enjoy the moment", spanish: "Pero disfruto el momento", french: "Mais je profite du moment", arabic: "لكنني أستمتع باللحظة", dutch: "Maar ik geniet van het moment", time: 150 },
            { finnish: "Kylmä tuuli poskillani", english: "Cold wind on my cheeks", spanish: "Viento frío en mis mejillas", french: "Vent froid sur mes joues", arabic: "الريح الباردة على خدودي", dutch: "Koude wind op mijn wangen", time: 157 },
            { finnish: "Elossa tunnen olevani", english: "I feel alive", spanish: "Me siento vivo", french: "Je me sens vivant", arabic: "أشعر بالحياة", dutch: "Ik voel me levend", time: 164 },
            { finnish: "Syksy opettaa arvostamaan", english: "Autumn teaches to appreciate", spanish: "El otoño enseña a apreciar", french: "L'automne enseigne à apprécier", arabic: "الخريف يعلم التقدير", dutch: "De herfst leert waarderen", time: 172 },
            { finnish: "Jokaista vuodenaikaa", english: "Every season", spanish: "Cada estación", french: "Chaque saison", arabic: "كل موسم", dutch: "Elk seizoen", time: 179 },
            { finnish: "Muutosta ja uudistumista", english: "Change and renewal", spanish: "Cambio y renovación", french: "Changement et renouveau", arabic: "التغيير والتجديد", dutch: "Verandering en vernieuwing", time: 186 },
            { finnish: "Elämän sykliä", english: "The cycle of life", spanish: "El ciclo de la vida", french: "Le cycle de la vie", arabic: "دورة الحياة", dutch: "De cyclus van het leven", time: 193 },
            { finnish: "Pian tulee talvi", english: "Soon winter will come", spanish: "Pronto llegará el invierno", french: "Bientôt l'hiver viendra", arabic: "قريباً سيأتي الشتاء", dutch: "Binnenkort komt de winter", time: 200 },
            { finnish: "Mutta nyt on syksy", english: "But now it's autumn", spanish: "Pero ahora es otoño", french: "Mais maintenant c'est l'automne", arabic: "لكن الآن هو الخريف", dutch: "Maar nu is het herfst", time: 207 }
        ]
    },
    {
        id: 5,
        title: "Ei Kenenkään Maa",
        artist: "Movetron",
        year: 1997,
        duration: "3:00",
        level: "advanced",
        cover: "https://cdn.recis.io/i/img/02/40/3e/c9_44af97_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-endlessmotion.mp3",
        lyrics: [
            { finnish: "Kulkiessani elämän polkua kohtaan monia haasteita", english: "As I walk life's path I face many challenges", spanish: "Mientras camino por el sendero de la vida enfrento muchos desafíos", french: "En marchant sur le chemin de la vie je fais face à de nombreux défis", arabic: "بينما أمشي في طريق الحياة أواجه العديد من التحديات", dutch: "Terwijl ik over het levenspad loop, krijg ik veel uitdagingen te zien", time: 0 },
            { finnish: "Jokainen askel opettaa viisautta", english: "Every step teaches wisdom", spanish: "Cada paso enseña sabiduría", french: "Chaque pas enseigne la sagesse", arabic: "كل خطوة تعلم الحكمة", dutch: "Elke stap leert wijsheid", time: 10 },
            { finnish: "Virheistä opin eniten", english: "I learn most from mistakes", spanish: "Aprendo más de los errores", french: "J'apprends le plus des erreurs", arabic: "أتعلم أكثر من الأخطاء", dutch: "Ik leer het meest van fouten", time: 20 },
            { finnish: "Onnistumiset antavat voimaa", english: "Successes give strength", spanish: "Los éxitos dan fuerza", french: "Les succès donnent de la force", arabic: "النجاحات تعطي القوة", dutch: "Successen geven kracht", time: 30 },
            { finnish: "Matka on tärkeämpi kuin määränpää", english: "Journey is more important than destination", spanish: "El viaje es más importante que el destino", french: "Le voyage est plus important que la destination", arabic: "الرحلة أهم من الوجهة", dutch: "De reis is belangrijker dan de bestemming", time: 40 },
            { finnish: "Joskus polku on kivikkoinen", english: "Sometimes the path is rocky", spanish: "A veces el camino es rocoso", french: "Parfois le chemin est rocheux", arabic: "أحياناً يكون الطريق صخرياً", dutch: "Soms is het pad rotsachtig", time: 50 },
            { finnish: "Toisinaan se on sileä ja helppo", english: "Other times it's smooth and easy", spanish: "Otras veces es suave y fácil", french: "D'autres fois c'est lisse et facile", arabic: "أوقات أخرى يكون سلساً وسهلاً", dutch: "Andere keren is het glad en gemakkelijk", time: 60 },
            { finnish: "Molemmat opettavat jotain tärkeää", english: "Both teach something important", spanish: "Ambos enseñan algo importante", french: "Les deux enseignent quelque chose d'important", arabic: "كلاهما يعلم شيئاً مهماً", dutch: "Beide leren iets belangrijks", time: 70 },
            { finnish: "Vastustus kasvattaa voimaa", english: "Resistance builds strength", spanish: "La resistencia construye fuerza", french: "La résistance construit la force", arabic: "المقاومة تبني القوة", dutch: "Weerstand bouwt kracht op", time: 80 },
            { finnish: "Pettymykset kehittävät sinnikkyyttä", english: "Disappointments develop perseverance", spanish: "Las decepciones desarrollan perseverancia", french: "Les déceptions développent la persévérance", arabic: "خيبات الأمل تطور المثابرة", dutch: "Teleurstellingen ontwikkelen doorzettingsvermogen", time: 90 },
            { finnish: "Ilo vahvistaa toivoa", english: "Joy strengthens hope", spanish: "La alegría fortalece la esperanza", french: "La joie renforce l'espoir", arabic: "الفرح يقوي الأمل", dutch: "Vreugde versterkt hoop", time: 100 },
            { finnish: "Rakkaus antaa merkityksen", english: "Love gives meaning", spanish: "El amor da significado", french: "L'amour donne un sens", arabic: "الحب يعطي المعنى", dutch: "Liefde geeft betekenis", time: 110 },
            { finnish: "Ystävyys tukee vaikeina aikoina", english: "Friendship supports in difficult times", spanish: "La amistad apoya en tiempos difíciles", french: "L'amitié soutient dans les moments difficiles", arabic: "الصداقة تدعم في الأوقات الصعبة", dutch: "Vriendschap ondersteunt in moeilijke tijden", time: 120 },
            { finnish: "Yksinäisyys opettaa itsetuntemusta", english: "Solitude teaches self-knowledge", spanish: "La soledad enseña autoconocimiento", french: "La solitude enseigne la connaissance de soi", arabic: "العزلة تعلم معرفة الذات", dutch: "Eenzaamheid leert zelfkennis", time: 130 },
            { finnish: "Yhteisöllisyys muistuttaa kuulumisesta", english: "Community reminds of belonging", spanish: "La comunidad recuerda la pertenencia", french: "La communauté rappelle l'appartenance", arabic: "المجتمع يذكر بالانتماء", dutch: "Gemeenschap herinnert aan verbondenheid", time: 140 },
            { finnish: "Jokaisella kohtaamisella on tarkoitus", english: "Every encounter has a purpose", spanish: "Cada encuentro tiene un propósito", french: "Chaque rencontre a un but", arabic: "كل لقاء له غرض", dutch: "Elke ontmoeting heeft een doel", time: 150 },
            { finnish: "Jokaisella kokemuksella on opetus", english: "Every experience has a lesson", spanish: "Cada experiencia tiene una lección", french: "Chaque expérience a une leçon", arabic: "كل تجربة لها درس", dutch: "Elke ervaring heeft een les", time: 160 },
            { finnish: "En tiedä minne polku vie", english: "I don't know where the path leads", spanish: "No sé a dónde lleva el camino", french: "Je ne sais pas où mène le chemin", arabic: "لا أعرف إلى أين يؤدي الطريق", dutch: "Ik weet niet waar het pad leidt", time: 170 },
            { finnish: "Mutta luotan prosessiin", english: "But I trust the process", spanish: "Pero confío en el proceso", french: "Mais je fais confiance au processus", arabic: "لكنني أثق في العملية", dutch: "Maar ik vertrouw het proces", time: 180 },
            { finnish: "Hyväksyn epävarmuuden", english: "I accept uncertainty", spanish: "Acepto la incertidumbre", french: "J'accepte l'incertitude", arabic: "أقبل عدم اليقين", dutch: "Ik accepteer onzekerheid", time: 190 },
            { finnish: "Nautin matkasta", english: "I enjoy the journey", spanish: "Disfruto del viaje", french: "Je profite du voyage", arabic: "أستمتع بالرحلة", dutch: "Ik geniet van de reis", time: 200 }
        ]
    },
    {
        id: 6,
        title: "Vasten Auringon Siltaa",
        artist: "Katri Helena",
        year: 1984,
        duration: "4:48",
        level: "advanced",
        cover: "https://cdn.recis.io/i/img/02/3f/f0/3a_1ae56c_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-relaxing.mp3",
        lyrics: [
            { finnish: "Unelmien maailmassa vaeltaen", english: "Wandering in the world of dreams", spanish: "Vagando en el mundo de los sueños", french: "Errant dans le monde des rêves", arabic: "أتجول في عالم الأحلام", dutch: "Wandelen in de wereld van dromen", time: 0 },
            { finnish: "Mielikuvitus lentää vapaana", english: "Imagination flies free", spanish: "La imaginación vuela libre", french: "L'imagination vole librement", arabic: "الخيال يطير حراً", dutch: "Verbeelding vliegt vrij", time: 10 },
            { finnish: "Luon oman todellisuuteni", english: "I create my own reality", spanish: "Creo mi propia realidad", french: "Je crée ma propre réalité", arabic: "أخلق واقعي الخاص", dutch: "Ik creëer mijn eigen realiteit", time: 20 },
            { finnish: "Missä mikään ei ole mahdotonta", english: "Where nothing is impossible", spanish: "Donde nada es imposible", french: "Où rien n'est impossible", arabic: "حيث لا شيء مستحيل", dutch: "Waar niets onmogelijk is", time: 30 },
            { finnish: "Unelmat voivat toteutua", english: "Dreams can come true", spanish: "Los sueños pueden hacerse realidad", french: "Les rêves peuvent se réaliser", arabic: "الأحلام يمكن أن تتحقق", dutch: "Dromen kunnen uitkomen", time: 40 },
            { finnish: "Jos vain uskallan uskoa", english: "If I only dare to believe", spanish: "Si solo me atrevo a creer", french: "Si seulement j'ose y croire", arabic: "إذا تجرأت فقط على الإيمان", dutch: "Als ik maar durf te geloven", time: 50 },
            { finnish: "Silmät kiinni, mieli auki", english: "Eyes closed, mind open", spanish: "Ojos cerrados, mente abierta", french: "Yeux fermés, esprit ouvert", arabic: "عيون مغلقة، عقل منفتح", dutch: "Ogen dicht, geest open", time: 60 },
            { finnish: "Uppoudun syvyyksiin", english: "I dive into the depths", spanish: "Me sumerjo en las profundidades", french: "Je plonge dans les profondeurs", arabic: "أغوص في الأعماق", dutch: "Ik duik in de diepten", time: 70 },
            { finnish: "Oman tietoisuuteni", english: "Of my own consciousness", spanish: "De mi propia conciencia", french: "De ma propre conscience", arabic: "من وعيي الخاص", dutch: "Van mijn eigen bewustzijn", time: 80 },
            { finnish: "Löydän maailman sisältäni", english: "I find a world within me", spanish: "Encuentro un mundo dentro de mí", french: "Je trouve un monde en moi", arabic: "أجد عالماً بداخلي", dutch: "Ik vind een wereld in mezelf", time: 90 },
            { finnish: "Täynnä värejä ja ääniä", english: "Full of colors and sounds", spanish: "Lleno de colores y sonidos", french: "Plein de couleurs et de sons", arabic: "مليء بالألوان والأصوات", dutch: "Vol kleuren en geluiden", time: 100 },
            { finnish: "Joita en ole koskaan nähnyt", english: "That I've never seen before", spanish: "Que nunca he visto antes", french: "Que je n'ai jamais vus auparavant", arabic: "التي لم أرها من قبل", dutch: "Die ik nog nooit heb gezien", time: 110 },
            { finnish: "Unien kieli on symbolinen", english: "The language of dreams is symbolic", spanish: "El lenguaje de los sueños es simbólico", french: "Le langage des rêves est symbolique", arabic: "لغة الأحلام رمزية", dutch: "De taal van dromen is symbolisch", time: 120 },
            { finnish: "Metaforat elävät omaa elämäänsä", english: "Metaphors live their own life", spanish: "Las metáforas viven su propia vida", french: "Les métaphores vivent leur propre vie", arabic: "الاستعارات تعيش حياتها الخاصة", dutch: "Metaforen leven hun eigen leven", time: 130 },
            { finnish: "Lennan yli vuorten", english: "I fly over mountains", spanish: "Vuelo sobre montañas", french: "Je vole au-dessus des montagnes", arabic: "أطير فوق الجبال", dutch: "Ik vlieg over bergen", time: 140 },
            { finnish: "Sukellан valtamerten syvyyksiin", english: "I dive into ocean depths", spanish: "Me sumerjo en las profundidades del océano", french: "Je plonge dans les profondeurs de l'océan", arabic: "أغوص في أعماق المحيطات", dutch: "Ik duik in oceaandiepten", time: 150 },
            { finnish: "Puhun eläinten kanssa", english: "I speak with animals", spanish: "Hablo con animales", french: "Je parle avec les animaux", arabic: "أتحدث مع الحيوانات", dutch: "Ik spreek met dieren", time: 160 },
            { finnish: "Ymmärrän kasvien kielen", english: "I understand the language of plants", spanish: "Entiendo el lenguaje de las plantas", french: "Je comprends le langage des plantes", arabic: "أفهم لغة النباتات", dutch: "Ik begrijp de taal van planten", time: 170 },
            { finnish: "Aikaja avaruus sulautuvat", english: "Time and space merge", spanish: "El tiempo y el espacio se fusionan", french: "Le temps et l'espace fusionnent", arabic: "الزمان والمكان يندمجان", dutch: "Tijd en ruimte versmelten", time: 180 },
            { finnish: "Menneisyys ja tulevaisuus kohtaavat", english: "Past and future meet", spanish: "El pasado y el futuro se encuentran", french: "Le passé et le futur se rencontrent", arabic: "الماضي والمستقبل يلتقيان", dutch: "Verleden en toekomst ontmoeten elkaar", time: 190 },
            { finnish: "Nykyhetkessä", english: "In the present moment", spanish: "En el momento presente", french: "Dans le moment présent", arabic: "في اللحظة الحالية", dutch: "In het huidige moment", time: 200 },
            { finnish: "Joka on ikuinen", english: "Which is eternal", spanish: "Que es eterno", french: "Qui est éternel", arabic: "الذي هو أبدي", dutch: "Dat eeuwig is", time: 210 }
        ]
    },
    {
        id: 7,
        title: "Ohikiitävää",
        artist: "Juha Tapio",
        year: 2003,
        duration: "2:34",
        level: "beginner",
        cover: "https://cdn.recis.io/i/img/02/3f/ca/17_b35d44_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3",
        lyrics: [
            { finnish: "Aurinko paistaa kirkkaasti taivaalla", english: "The sun shines brightly in the sky", spanish: "El sol brilla intensamente en el cielo", french: "Le soleil brille vivement dans le ciel", arabic: "الشمس تشرق بشدة في السماء", dutch: "De zon schijnt helder aan de hemel", time: 0 },
            { finnish: "Linnut laulavat iloisia lauluja", english: "Birds sing happy songs", spanish: "Los pájaros cantan canciones alegres", french: "Les oiseaux chantent des chansons joyeuses", arabic: "الطيور تغني أغاني سعيدة", dutch: "Vogels zingen vrolijke liedjes", time: 6 },
            { finnish: "Kesä on täällä taas", english: "Summer is here again", spanish: "El verano está aquí de nuevo", french: "L'été est de retour", arabic: "الصيف هنا مرة أخرى", dutch: "Zomer is er weer", time: 12 },
            { finnish: "Olen niin onnellinen", english: "I am so happy", spanish: "Estoy tan feliz", french: "Je suis si heureux", arabic: "أنا سعيد جداً", dutch: "Ik ben zo gelukkig", time: 18 },
            { finnish: "Taivas on kirkas ja sininen", english: "The sky is bright and blue", spanish: "El cielo está brillante y azul", french: "Le ciel est lumineux et bleu", arabic: "السماء مشرقة وزرقاء", dutch: "De lucht is helder en blauw", time: 24 },
            { finnish: "Lämpö tuntuu ihollani", english: "Warmth feels on my skin", spanish: "El calor se siente en mi piel", french: "La chaleur se sent sur ma peau", arabic: "الدفء يُشعر على جلدي", dutch: "Warmte voelt op mijn huid", time: 30 },
            { finnish: "Kukat kukkivat kauniisti", english: "Flowers bloom beautifully", spanish: "Las flores florecen bellamente", french: "Les fleurs fleurissent magnifiquement", arabic: "الزهور تتفتح بجمال", dutch: "Bloemen bloeien prachtig", time: 36 },
            { finnish: "Perhoset lentävät ympärilläni", english: "Butterflies fly around me", spanish: "Las mariposas vuelan a mi alrededor", french: "Les papillons volent autour de moi", arabic: "الفراشات تطير حولي", dutch: "Vlinders vliegen om me heen", time: 42 },
            { finnish: "Haluan nauttia tästä hetkestä", english: "I want to enjoy this moment", spanish: "Quiero disfrutar este momento", french: "Je veux profiter de ce moment", arabic: "أريد الاستمتاع بهذه اللحظة", dutch: "Ik wil van dit moment genieten", time: 48 },
            { finnish: "Kesä on paras vuodenaika", english: "Summer is the best season", spanish: "El verano es la mejor estación", french: "L'été est la meilleure saison", arabic: "الصيف هو أفضل موسم", dutch: "Zomer is het beste seizoen", time: 54 },
            { finnish: "Lapset leikkivät ulkona", english: "Children play outside", spanish: "Los niños juegan afuera", french: "Les enfants jouent dehors", arabic: "الأطفال يلعبون في الخارج", dutch: "Kinderen spelen buiten", time: 60 },
            { finnish: "He nauravat ja juoksevat", english: "They laugh and run", spanish: "Ríen y corren", french: "Ils rient et courent", arabic: "يضحكون ويركضون", dutch: "Ze lachen en rennen", time: 66 },
            { finnish: "Jäätelöä syömme kaikki", english: "We all eat ice cream", spanish: "Todos comemos helado", french: "Nous mangeons tous de la glace", arabic: "نأكل جميعاً البوظة", dutch: "We eten allemaal ijs", time: 72 },
            { finnish: "Vedessä uimme viileästi", english: "We swim in cool water", spanish: "Nadamos en agua fresca", french: "Nous nageons dans l'eau fraîche", arabic: "نسبح في الماء البارد", dutch: "We zwemmen in koel water", time: 78 },
            { finnish: "Vihreä nurmikko on pehmeä", english: "Green grass is soft", spanish: "La hierba verde es suave", french: "L'herbe verte est douce", arabic: "العشب الأخضر ناعم", dutch: "Groen gras is zacht", time: 84 },
            { finnish: "Istun sen päällä rentoutuneena", english: "I sit on it relaxed", spanish: "Me siento sobre ella relajado", french: "Je m'assieds dessus détendu", arabic: "أجلس عليه مسترخياً", dutch: "Ik zit er ontspannen op", time: 90 },
            { finnish: "Katselen pilviä taivaalla", english: "I watch clouds in the sky", spanish: "Miro las nubes en el cielo", french: "Je regarde les nuages dans le ciel", arabic: "أراقب الغيوم في السماء", dutch: "Ik kijk naar wolken aan de hemel", time: 96 },
            { finnish: "Ne muuttavat muotoaan", english: "They change their shape", spanish: "Cambian de forma", french: "Ils changent de forme", arabic: "يغيرون شكلهم", dutch: "Ze veranderen van vorm", time: 102 },
            { finnish: "Tuuli on lämmin ja pehmeä", english: "Wind is warm and soft", spanish: "El viento es cálido y suave", french: "Le vent est chaud et doux", arabic: "الريح دافئة وناعمة", dutch: "Wind is warm en zacht", time: 108 },
            { finnish: "Rakastan tätä päivää", english: "I love this day", spanish: "Amo este día", french: "J'aime ce jour", arabic: "أحب هذا اليوم", dutch: "Ik hou van deze dag", time: 114 },
            { finnish: "Kesä tuo iloa sydämeen", english: "Summer brings joy to the heart", spanish: "El verano trae alegría al corazón", french: "L'été apporte de la joie au cœur", arabic: "الصيف يجلب الفرح إلى القلب", dutch: "Zomer brengt vreugde in het hart", time: 120 },
            { finnish: "Nautin jokaisesta hetkestä", english: "I enjoy every moment", spanish: "Disfruto cada momento", french: "Je profite de chaque moment", arabic: "أستمتع بكل لحظة", dutch: "Ik geniet van elk moment", time: 126 },
            { finnish: "Tämä on täydellistä", english: "This is perfect", spanish: "Esto es perfecto", french: "C'est parfait", arabic: "هذا مثالي", dutch: "Dit is perfect", time: 132 },
            { finnish: "Ei huolia ole", english: "There are no worries", spanish: "No hay preocupaciones", french: "Il n'y a pas de soucis", arabic: "لا توجد همom", dutch: "Er zijn geen zorgen", time: 138 },
            { finnish: "Vain rauha ja ilo", english: "Only peace and joy", spanish: "Solo paz y alegría", french: "Seulement paix et joie", arabic: "فقط السلام والفرح", dutch: "Alleen vrede en vreugde", time: 144 },
            { finnish: "Kesäinen päivä jatkuu", english: "Summer day continues", spanish: "El día de verano continúa", french: "La journée d'été continue", arabic: "يوم الصيف يستمر", dutch: "Zomerdag gaat door", time: 150 },
            { finnish: "Haluan että se kestää", english: "I want it to last", spanish: "Quiero que dure", french: "Je veux que ça dure", arabic: "أريد أن يستمر", dutch: "Ik wil dat het blijft duren", time: 156 },
            { finnish: "Ikuisesti tässä hetkessä", english: "Forever in this moment", spanish: "Para siempre en este momento", french: "Pour toujours dans ce moment", arabic: "إلى الأبد في هذه اللحظة", dutch: "Voor altijd in dit moment", time: 162 },
            { finnish: "Aurinko paistaa edelleen", english: "The sun still shines", spanish: "El sol sigue brillando", french: "Le soleil brille toujours", arabic: "الشمس لا تزال تشرق", dutch: "De zon schijnt nog steeds", time: 168 },
            { finnish: "Kesä on ihanaa", english: "Summer is wonderful", spanish: "El verano es maravilloso", french: "L'été est merveilleux", arabic: "الصيف رائع", dutch: "Zomer is heerlijk", time: 174 },
            { finnish: "Tämä on minun aikani", english: "This is my time", spanish: "Este es mi tiempo", french: "C'est mon moment", arabic: "هذا وقتي", dutch: "Dit is mijn tijd", time: 180 },
            { finnish: "Nautin siitä täysillä", english: "I enjoy it fully", spanish: "Lo disfruto plenamente", french: "J'en profite pleinement", arabic: "أستمتع به بالكامل", dutch: "Ik geniet er volledig van", time: 186 },
            { finnish: "Kesä on täällä", english: "Summer is here", spanish: "El verano está aquí", french: "L'été est là", arabic: "الصيف هنا", dutch: "Zomer is hier", time: 192 }
        ]
    },
    {
        id: 10,
        title: "Aikuinen Nainen",
        artist: "Paula Koivuniemi",
        year: 1977,
        duration: "1:29",
        level: "beginner",
        cover: "https://cdnaws.recis.io/i/img/02/3f/cd/3b_3b7f32_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-clearday.mp3",
        lyrics: [
            { finnish: "Pieni talo metsässä", english: "Small house in the forest", spanish: "Pequeña casa en el bosque", french: "Petite maison dans la forêt", arabic: "منزل صغير في الغابة", dutch: "Klein huis in het bos", time: 0 },
            { finnish: "Siellä asun yksin", english: "There I live alone", spanish: "Allí vivo solo", french: "Là je vis seul", arabic: "هناك أعيش وحيداً", dutch: "Daar woon ik alleen", time: 11 },
            { finnish: "Rauhallinen ja hiljainen", english: "Peaceful and quiet", spanish: "Pacífico y tranquilo", french: "Paisible et calme", arabic: "هادئ وساكن", dutch: "Vredig en stil", time: 23 },
            { finnish: "Täällä on hyvä olla", english: "It's good to be here", spanish: "Es bueno estar aquí", french: "C'est bon d'être ici", arabic: "من الجيد أن أكون هنا", dutch: "Het is goed om hier te zijn", time: 35 },
            { finnish: "Puut ovat korkeita ja vihreitä", english: "Trees are tall and green", spanish: "Los árboles son altos y verdes", french: "Les arbres sont grands et verts", arabic: "الأشجار طويلة وخضراء", dutch: "Bomen zijn hoog en groen", time: 47 },
            { finnish: "Aamulla herään linnuille", english: "In the morning I wake to birds", spanish: "Por la mañana me despierto con pájaros", french: "Le matin je me réveille avec les oiseaux", arabic: "في الصباح أستيقظ على الطيور", dutch: "In de ochtend word ik wakker door vogels", time: 59 },
            { finnish: "Katso kuinka kaunis on päivä", english: "See how beautiful the day is", spanish: "Mira qué hermoso es el día", french: "Regarde comme le jour est beau", arabic: "انظر كم هو جميل اليوم", dutch: "Kijk hoe mooi de dag is", time: 71 },
            { finnish: "Illalla katson auringonlaskua", english: "In the evening I watch the sunset", spanish: "Por la tarde veo la puesta de sol", french: "Le soir je regarde le coucher du soleil", arabic: "في المساء أشاهد غروب الشمس", dutch: "In de avond kijk ik naar de zonsondergang", time: 83 },
            { finnish: "Tämä on minun paikkani", english: "This is my place", spanish: "Este es mi lugar", french: "C'est mon endroit", arabic: "هذا مكاني", dutch: "Dit is mijn plek", time: 95 },
            { finnish: "Täällä tunnen oloni kotoisaksi", english: "Here I feel at home", spanish: "Aquí me siento en casa", french: "Ici je me sens chez moi", arabic: "هنا أشعر بأنني في بيتي", dutch: "Hier voel ik me thuis", time: 107 },
            { finnish: "Luonto ympärilläni", english: "Nature around me", spanish: "Naturaleza a mi alrededor", french: "La nature autour de moi", arabic: "الطبيعة حولي", dutch: "Natuur om me heen", time: 119 },
            { finnish: "Eläimet tulevat käymään", english: "Animals come to visit", spanish: "Los animales vienen a visitar", french: "Les animaux viennent visiter", arabic: "الحيوانات تأتي للزيارة", dutch: "Dieren komen op bezoek", time: 191 },
            { finnish: "Oravat ja linnut", english: "Squirrels and birds", spanish: "Ardillas y pájaros", french: "Écureuils et oiseaux", arabic: "السناجب والطيور", dutch: "Eekhoorns en vogels", time: 143 },
            { finnish: "Illalla sytytän tulen", english: "In the evening I light a fire", spanish: "Por la tarde enciendo un fuego", french: "Le soir j'allume un feu", arabic: "في المساء أشعل ناراً", dutch: "In de avond steek ik een vuur aan", time: 155 },
            { finnish: "Se lämmittää taloa", english: "It warms the house", spanish: "Calienta la casa", french: "Il réchauffe la maison", arabic: "يدفئ المنزل", dutch: "Het verwarmt het huis", time: 167 },
            { finnish: "Minä rakastan tätä elämää", english: "I love this life", spanish: "Amo esta vida", french: "J'aime cette vie", arabic: "أحب هذه الحياة", dutch: "Ik hou van dit leven", time: 179 },
            { finnish: "Metsä on minun ystäväni", english: "The forest is my friend", spanish: "El bosque es mi amigo", french: "La forêt est mon amie", arabic: "الغابة صديقتي", dutch: "Het bos is mijn vriend", time: 131 },
            { finnish: "Pieni talo, suuri rauha", english: "Small house, great peace", spanish: "Pequeña casa, gran paz", french: "Petite maison, grande paix", arabic: "منزل صغير، سلام عظيم", dutch: "Klein huis, grote vrede", time: 203 }
        ]
    },
    {
        id: 11,
        title: "Ievan Polkka",
        artist: "Loituma",
        year: 1996,
        duration: "2:02",
        level: "beginner",
        cover: "https://cdnaws.recis.io/i/img/00/76/03/91_0f5590_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-buddy.mp3",
        lyrics: [
            { finnish: "Sinä olet hyvä ystävä", english: "You are a good friend", spanish: "Eres un buen amigo", french: "Tu es un bon ami", arabic: "أنت صديق جيد", dutch: "Je bent een goede vriend", time: 0 },
            { finnish: "Aina vierelläni", english: "Always by my side", spanish: "Siempre a mi lado", french: "Toujours à mes côtés", arabic: "دائماً بجانبي", dutch: "Altijd aan mijn zijde", time: 11 },
            { finnish: "Kun tarvitsen apua", english: "When I need help", spanish: "Cuando necesito ayuda", french: "Quand j'ai besoin d'aide", arabic: "عندما أحتاج للمساعدة", dutch: "Wanneer ik hulp nodig heb", time: 22 },
            { finnish: "Olet siellä minua varten", english: "You are there for me", spanish: "Estás ahí para mí", french: "Tu es là pour moi", arabic: "أنت هناك من أجلي", dutch: "Ben je er voor mij", time: 33 },
            { finnish: "Voimme puhua mistä tahansa", english: "We can talk about anything", spanish: "Podemos hablar de cualquier cosa", french: "Nous pouvons parler de n'importe quoi", arabic: "يمكننا التحدث عن أي شيء", dutch: "We kunnen over alles praten", time: 44 },
            { finnish: "Nauramme yhdessä", english: "We laugh together", spanish: "Reímos juntos", french: "Nous rions ensemble", arabic: "نضحك معاً", dutch: "We lachen samen", time: 55 },
            { finnish: "Joskus myös itken", english: "Sometimes I also cry", spanish: "A veces también lloro", french: "Parfois je pleure aussi", arabic: "أحياناً أبكي أيضاً", dutch: "Soms huil ik ook", time: 66 },
            { finnish: "Mutta sinä ymmärrät", english: "But you understand", spanish: "Pero tú entiendes", french: "Mais tu comprends", arabic: "لكنك تفهم", dutch: "Maar jij begrijpt het", time: 77 },
            { finnish: "Et tuomitse minua", english: "You don't judge me", spanish: "No me juzgas", french: "Tu ne me juges pas", arabic: "أنت لا تحكم علي", dutch: "Je oordeelt niet over mij", time: 88 },
            { finnish: "Kiitos että olet olemassa", english: "Thank you for existing", spanish: "Gracias por existir", french: "Merci d'exister", arabic: "شكراً لوجودك", dutch: "Bedankt dat je bestaat", time: 100 },
            { finnish: "Ystävyys on tärkeää", english: "Friendship is important", spanish: "La amistad es importante", french: "L'amitié est importante", arabic: "الصداقة مهمة", dutch: "Vriendschap is belangrijk", time: 111 },
            { finnish: "Ilman sinua olisin yksin", english: "Without you I would be alone", spanish: "Sin ti estaría solo", french: "Sans toi je serais seul", arabic: "بدونك سأكون وحيداً", dutch: "Zonder jou zou ik alleen zijn", time: 122 },
            { finnish: "Mutta nyt olen onnellinen", english: "But now I am happy", spanish: "Pero ahora soy feliz", french: "Mais maintenant je suis heureux", arabic: "لكني الآن سعيد", dutch: "Maar nu ben ik gelukkig", time: 133 },
            { finnish: "Koska sinä olet täällä", english: "Because you are here", spanish: "Porque estás aquí", french: "Parce que tu es là", arabic: "لأنك هنا", dutch: "Omdat jij hier bent", time: 144 },
            { finnish: "Rakastan meidän hetkiämme", english: "I love our moments", spanish: "Amo nuestros momentos", french: "J'aime nos moments", arabic: "أحب لحظاتنا", dutch: "Ik hou van onze momenten", time: 155 },
            { finnish: "Ystävyys kestää ikuisesti", english: "Friendship lasts forever", spanish: "La amistad dura para siempre", french: "L'amitié dure pour toujours", arabic: "الصداقة تدوم إلى الأبد", dutch: "Vriendschap duurt voor altijd", time: 166 },
            { finnish: "Olemme ystäviä aina", english: "We are friends forever", spanish: "Somos amigos para siempre", french: "Nous sommes amis pour toujours", arabic: "نحن أصدقاء للأبد", dutch: "We zijn voor altijd vrienden", time: 177 },
            { finnish: "Sinä olet kultaa kalliimpi", english: "You are more precious than gold", spanish: "Eres más valioso que el oro", french: "Tu es plus précieux que l'or", arabic: "أنت أثمن من الذهب", dutch: "Je bent kostbaarder dan goud", time: 188 }
        ]
    },
    {
        id: 12,
        title: "Ei Yksinäinen Unta Saa",
        artist: "Neon 2",
        year: 1984,
        duration: "1:45",
        level: "beginner",
        cover: "https://cdnaws.recis.io/i/img/02/3f/c7/2e_657b28_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
        lyrics: [
            { finnish: "Minulla on koira", english: "I have a dog", spanish: "Tengo un perro", french: "J'ai un chien", arabic: "لدي كلب", dutch: "Ik heb een hond", time: 0 },
            { finnish: "Ja myös kissa", english: "And also a cat", spanish: "Y también un gato", french: "Et aussi un chat", arabic: "وأيضاً قطة", dutch: "En ook een kat", time: 11 },
            { finnish: "He ovat ystäviä", english: "They are friends", spanish: "Son amigos", french: "Ils sont amis", arabic: "هم أصدقاء", dutch: "Ze zijn vrienden", time: 22 },
            { finnish: "Leikkivät yhdessä", english: "They play together", spanish: "Juegan juntos", french: "Ils jouent ensemble", arabic: "يلعبون معاً", dutch: "Ze spelen samen", time: 33 },
            { finnish: "Koiran nimi on Rex", english: "The dog's name is Rex", spanish: "El nombre del perro es Rex", french: "Le nom du chien est Rex", arabic: "اسم الكلب ريكس", dutch: "De naam van de hond is Rex", time: 44 },
            { finnish: "Koira haukkuu", english: "The dog barks", spanish: "El perro ladra", french: "Le chien aboie", arabic: "الكلب ينبح", dutch: "De hond blaft", time: 55 },
            { finnish: "Kissa kehräätää", english: "The cat purrs", spanish: "El gato ronronea", french: "Le chat ronronne", arabic: "القطة تخرخر", dutch: "De kat spint", time: 66 },
            { finnish: "Kissan nimi on Mirri", english: "The cat's name is Mirri", spanish: "El nombre del gato es Mirri", french: "Le nom du chat est Mirri", arabic: "اسم القطة ميري", dutch: "De naam van de kat is Mirri", time: 77 },
            { finnish: "Molemmat ovat söpöjä", english: "Both are cute", spanish: "Ambos son lindos", french: "Les deux sont mignons", arabic: "كلاهما لطيف", dutch: "Beide zijn schattig", time: 88 },
            { finnish: "Rakastan heitä", english: "I love them", spanish: "Los amo", french: "Je les aime", arabic: "أحبهما", dutch: "Ik hou van ze", time: 100 },
            { finnish: "He tekevät minut onnelliseksi", english: "They make me happy", spanish: "Me hacen feliz", french: "Ils me rendent heureux", arabic: "يجعلونني سعيداً", dutch: "Ze maken me gelukkig", time: 111 },
            { finnish: "Syötän heitä joka päivä", english: "I feed them every day", spanish: "Los alimento cada día", french: "Je les nourris chaque jour", arabic: "أطعمهما كل يوم", dutch: "Ik voed ze elke dag", time: 122 },
            { finnish: "He syövät yhdessä", english: "They eat together", spanish: "Comen juntos", french: "Ils mangent ensemble", arabic: "يأكلون معاً", dutch: "Ze eten samen", time: 133 },
            { finnish: "Illalla nukkuvat vierekkäin", english: "In the evening they sleep side by side", spanish: "Por la noche duermen uno al lado del otro", french: "Le soir ils dorment côte à côte", arabic: "في المساء ينامون جنباً إلى جنب", dutch: "In de avond slapen ze naast elkaar", time: 144 },
            { finnish: "Koira ja kissa ovat perheeni", english: "The dog and cat are my family", spanish: "El perro y el gato son mi familia", french: "Le chien et le chat sont ma famille", arabic: "الكلب والقطة عائلتي", dutch: "De hond en kat zijn mijn familie", time: 155 },
            { finnish: "He ilahduttavat sydämeni", english: "They delight my heart", spanish: "Alegran mi corazón", french: "Ils réjouissent mon cœur", arabic: "يسعدون قلبي", dutch: "Ze verblijden mijn hart", time: 166 },
            { finnish: "Olen kiitollinen heistä", english: "I am grateful for them", spanish: "Estoy agradecido por ellos", french: "Je leur suis reconnaissant", arabic: "أنا ممتن لهم", dutch: "Ik ben dankbaar voor ze", time: 177 },
            { finnish: "Joka päivä", english: "Every day", spanish: "Cada día", french: "Chaque jour", arabic: "كل يوم", dutch: "Elke dag", time: 188 }
        ]
    },
    {
        id: 8,
        title: "Moottoritie On Kuuma",
        artist: "Pelle Miljoona",
        year: 1980,
        duration: "2:33",
        level: "intermediate",
        cover: "https://cdn.recis.io/i/img/02/3f/c6/b4_4b245e_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-betterdays.mp3",
        lyrics: [
            { finnish: "Sininen meri aaltoilee", english: "The blue sea waves", spanish: "El mar azul ondula", french: "La mer bleue ondule", arabic: "البحر الأزرق يتموج", dutch: "De blauwe zee golft", time: 0 },
            { finnish: "Purjevene liukuu hiljaa", english: "Sailboat glides quietly", spanish: "El velero se desliza en silencio", french: "Le voilier glisse silencieusement", arabic: "القارب الشراعي ينزلق بهدوء", dutch: "Zeilboot glijdt stil", time: 7 },
            { finnish: "Tuuli vie minut kauas", english: "Wind takes me far away", spanish: "El viento me lleva lejos", french: "Le vent m'emporte au loin", arabic: "الرياح تأخذني بعيداً", dutch: "De wind voert me ver weg", time: 14 },
            { finnish: "Vapaus on minun", english: "Freedom is mine", spanish: "La libertad es mía", french: "La liberté est mienne", arabic: "الحرية ملكي", dutch: "Vrijheid is van mij", time: 21 },
            { finnish: "Aaltojen ääni rauhoittaa", english: "Sound of waves calms", spanish: "El sonido de las olas calma", french: "Le bruit des vagues apaise", arabic: "صوت الأمواج يهدئ", dutch: "Het geluid van golven kalmeert", time: 28 },
            { finnish: "Horisontissa ei näy maata", english: "No land visible on horizon", spanish: "No hay tierra visible en el horizonte", french: "Aucune terre visible à l'horizon", arabic: "لا يمكن رؤية أرض في الأفق", dutch: "Geen land zichtbaar aan de horizon", time: 35 },
            { finnish: "Olen yksin mutta en yksinäinen", english: "I am alone but not lonely", spanish: "Estoy solo pero no solitario", french: "Je suis seul mais pas solitaire", arabic: "أنا وحيد لكن غير منعزل", dutch: "Ik ben alleen maar niet eenzaam", time: 43 },
            { finnish: "Meri on minun kotini", english: "The sea is my home", spanish: "El mar es mi hogar", french: "La mer est mon foyer", arabic: "البحر هو بيتي", dutch: "De zee is mijn thuis", time: 50 },
            { finnish: "Lokit lentävät yläpuolella", english: "Seagulls fly overhead", spanish: "Las gaviotas vuelan arriba", french: "Les mouettes volent au-dessus", arabic: "طيور النورس تحلق فوقنا", dutch: "Meeuwen vliegen boven", time: 57 },
            { finnish: "Niiden huudot kaikuvat", english: "Their cries echo", spanish: "Sus gritos resuenan", french: "Leurs cris résonnent", arabic: "صراخها يتردد صداه", dutch: "Hun kreten weergalmen", time: 64 },
            { finnish: "Aurinko laskee merelle", english: "Sun sets over the sea", spanish: "El sol se pone sobre el mar", french: "Le soleil se couche sur la mer", arabic: "الشمس تغرب فوق البحر", dutch: "De zon zakt over de zee", time: 71 },
            { finnish: "Taivas muuttuu punaiseksi", english: "Sky turns red", spanish: "El cielo se vuelve rojo", french: "Le ciel devient rouge", arabic: "السماء تصبح حمراء", dutch: "De hemel wordt rood", time: 78 },
            { finnish: "Oranssi ja violetti", english: "Orange and violet", spanish: "Naranja y violeta", french: "Orange et violet", arabic: "برتقالي وبنفسجي", dutch: "Oranje en violet", time: 86 },
            { finnish: "Värit tanssivat taivaalla", english: "Colors dance in the sky", spanish: "Los colores bailan en el cielo", french: "Les couleurs dansent dans le ciel", arabic: "الألوان ترقص في السماء", dutch: "Kleuren dansen aan de hemel", time: 93 },
            { finnish: "Vesi heijastaa kaiken", english: "Water reflects everything", spanish: "El agua refleja todo", french: "L'eau reflète tout", arabic: "الماء يعكس كل شيء", dutch: "Water weerspiegelt alles", time: 100 },
            { finnish: "Kaksinkertainen kauneus", english: "Double beauty", spanish: "Doble belleza", french: "Double beauté", arabic: "جمال مضاعف", dutch: "Dubbele schoonheid", time: 107 },
            { finnish: "Yö laskeutuu hitaasti", english: "Night descends slowly", spanish: "La noche desciende lentamente", french: "La nuit descend lentement", arabic: "الليل يهبط ببطء", dutch: "De nacht daalt langzaam", time: 114 },
            { finnish: "Tähdet alkavat loistaa", english: "Stars begin to shine", spanish: "Las estrellas comienzan a brillar", french: "Les étoiles commencent à briller", arabic: "النجوم تبدأ بالتألق", dutch: "Sterren beginnen te schijnen", time: 121 },
            { finnish: "Navigoin niiden avulla", english: "I navigate by them", spanish: "Navego por ellas", french: "Je navigue grâce à elles", arabic: "أبحر بواسطتها", dutch: "Ik navigeer ermee", time: 129 },
            { finnish: "Kuten merimiehet ennen", english: "Like sailors before", spanish: "Como los marineros antes", french: "Comme les marins avant", arabic: "مثل البحارة من قبل", dutch: "Zoals zeelieden voorheen", time: 136 },
            { finnish: "Vuosisatojen ajan", english: "For centuries", spanish: "Durante siglos", french: "Pendant des siècles", arabic: "لقرون", dutch: "Eeuwenlang", time: 143 },
            { finnish: "Meri kutsuu seikkailijoi ta", english: "Sea calls adventurers", spanish: "El mar llama a los aventureros", french: "La mer appelle les aventuriers", arabic: "البحر يدعو المغامرين", dutch: "De zee roept avonturiers", time: 150 },
            { finnish: "Rohkeita sieluja", english: "Brave souls", spanish: "Almas valientes", french: "Âmes courageuses", arabic: "نفوس شجاعة", dutch: "Dappere zielen", time: 157 },
            { finnish: "Jotka etsivät jotain enemmän", english: "Who seek something more", spanish: "Que buscan algo más", french: "Qui cherchent quelque chose de plus", arabic: "الذين يبحثون عن شيء أكثر", dutch: "Die iets meer zoeken", time: 164 },
            { finnish: "Kuin tavallinen elämä", english: "Than ordinary life", spanish: "Que la vida ordinaria", french: "Que la vie ordinaire", arabic: "من الحياة العادية", dutch: "Dan het gewone leven", time: 172 },
            { finnish: "Meri antaa vapauden", english: "Sea gives freedom", spanish: "El mar da libertad", french: "La mer donne la liberté", arabic: "البحر يمنح الحرية", dutch: "De zee geeft vrijheid", time: 179 },
            { finnish: "Mutta vaatii kunnioitusta", english: "But demands respect", spanish: "Pero exige respeto", french: "Mais exige le respect", arabic: "لكنه يطلب الاحترام", dutch: "Maar vereist respect", time: 186 },
            { finnish: "Se on voimakas ja arvaamaton", english: "It is powerful and unpredictable", spanish: "Es poderoso e impredecible", french: "Il est puissant et imprévisible", arabic: "إنه قوي ولا يمكن التنبؤ به", dutch: "Het is krachtig en onvoorspelbaar", time: 193 },
            { finnish: "Kaunis ja vaarallinen", english: "Beautiful and dangerous", spanish: "Hermoso y peligroso", french: "Beau et dangereux", arabic: "جميل وخطير", dutch: "Mooi en gevaarlijk", time: 200 },
            { finnish: "Rakastan sitä kaikesta huolimatta", english: "I love it nonetheless", spanish: "Lo amo a pesar de todo", french: "Je l'aime malgré tout", arabic: "أحبه على الرغم من كل شيء", dutch: "Ik hou ervan ondanks alles", time: 207 }
        ]
    },
    {
        id: 13,
        title: "Pojat",
        artist: "Ritva Kinnunen & Laila Kinnunen",
        year: 1961,
        duration: "3:26",
        level: "intermediate",
        cover: "https://cdnaws.recis.io/i/img/02/3f/cc/3f_9aa47b_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
        lyrics: [
            { finnish: "Lumi peittää kaiken valkoiseksi", english: "Snow covers everything white", spanish: "La nieve cubre todo de blanco", french: "La neige couvre tout en blanc", arabic: "الثلج يغطي كل شيء بالأبيض", dutch: "Sneeuw bedekt alles wit", time: 0 },
            { finnish: "Hiljainen ja kaunis talvimaa", english: "Silent and beautiful winter land", spanish: "Tierra invernal silenciosa y hermosa", french: "Terre hivernale silencieuse et belle", arabic: "أرض شتوية صامتة وجميلة", dutch: "Stil en mooi winterlandschap", time: 7 },
            { finnish: "Pakkanen puree poskia", english: "Frost bites the cheeks", spanish: "La escarcha muerde las mejillas", french: "Le gel mord les joues", arabic: "الصقيع يلدغ الخدود", dutch: "Vorst bijt in de wangen", time: 14 },
            { finnish: "Mutta sydämeni on lämmin", english: "But my heart is warm", spanish: "Pero mi corazón está cálido", french: "Mais mon cœur est chaud", arabic: "لكن قلبي دافئ", dutch: "Maar mijn hart is warm", time: 21 },
            { finnish: "Lapset rakentavat lumiukkoja", english: "Children build snowmen", spanish: "Los niños construyen muñecos de nieve", french: "Les enfants construisent des bonshommes de neige", arabic: "الأطفال يبنون رجال الثلج", dutch: "Kinderen bouwen sneeuwpoppen", time: 28 },
            { finnish: "Laskevat mäkeä pulkalla", english: "Sled down the hill", spanish: "Deslizan por la colina en trineo", french: "Descendent la colline en luge", arabic: "ينزلقون على التل بالزلاجة", dutch: "Sleeën de heuvel af", time: 35 },
            { finnish: "Nauru täyttää ilman", english: "Laughter fills the air", spanish: "La risa llena el aire", french: "Le rire remplit l'air", arabic: "الضحك يملأ الهواء", dutch: "Gelach vult de lucht", time: 43 },
            { finnish: "Talvi on iloinen aika", english: "Winter is a joyful time", spanish: "El invierno es una época alegre", french: "L'hiver est une période joyeuse", arabic: "الشتاء وقت سعيد", dutch: "Winter is een vrolijke tijd", time: 50 },
            { finnish: "Illalla sytän kynttilöitä", english: "In the evening I light candles", spanish: "Por la tarde enciendo velas", french: "Le soir j'allume des bougies", arabic: "في المساء أشعل الشموع", dutch: "'s Avonds steek ik kaarsen aan", time: 57 },
            { finnish: "Istun takkatulen ääressä", english: "I sit by the fireplace", spanish: "Me siento junto a la chimenea", french: "Je m'assieds près de la cheminée", arabic: "أجلس بجانب المدفأة", dutch: "Ik zit bij de open haard", time: 64 },
            { finnish: "Luen hyvää kirjaa", english: "I read a good book", spanish: "Leo un buen libro", french: "Je lis un bon livre", arabic: "أقرأ كتاباً جيداً", dutch: "Ik lees een goed boek", time: 71 },
            { finnish: "Juon kuumaa kaakaota", english: "I drink hot cocoa", spanish: "Bebo cacao caliente", french: "Je bois du cacao chaud", arabic: "أشرب الكاكاو الساخن", dutch: "Ik drink warme chocolademelk", time: 78 },
            { finnish: "Ulkona on pimeää ja kylmää", english: "Outside it's dark and cold", spanish: "Afuera está oscuro y frío", french: "Dehors il fait sombre et froid", arabic: "في الخارج مظلم وبارد", dutch: "Buiten is het donker en koud", time: 86 },
            { finnish: "Mutta täällä sisällä on kodikasta", english: "But here inside it's cozy", spanish: "Pero aquí adentro es acogedor", french: "Mais ici à l'intérieur c'est confortable", arabic: "لكن هنا في الداخل مريح", dutch: "Maar hier binnen is het gezellig", time: 93 },
            { finnish: "Revontulet tanssivat taivaalla", english: "Northern lights dance in the sky", spanish: "Las auroras boreales bailan en el cielo", french: "Les aurores boréales dansent dans le ciel", arabic: "الشفق القطبي يرقص في السماء", dutch: "Noorderlicht danst aan de hemel", time: 100 },
            { finnish: "Vihreä valo liikkuu hitaasti", english: "Green light moves slowly", spanish: "La luz verde se mueve lentamente", french: "La lumière verte bouge lentement", arabic: "الضوء الأخضر يتحرك ببطء", dutch: "Groen licht beweegt langzaam", time: 107 },
            { finnish: "Se on luonnon magia", english: "It's nature's magic", spanish: "Es la magia de la naturaleza", french: "C'est la magie de la nature", arabic: "إنها سحر الطبيعة", dutch: "Het is de magie van de natuur", time: 114 },
            { finnish: "Jota vain pohjoisessa nähdään", english: "That's only seen in the north", spanish: "Que solo se ve en el norte", french: "Qu'on ne voit que dans le nord", arabic: "التي تُرى فقط في الشمال", dutch: "Die alleen in het noorden te zien is", time: 121 },
            { finnish: "Talvi opettaa kärsivällisyyttä", english: "Winter teaches patience", spanish: "El invierno enseña paciencia", french: "L'hiver enseigne la patience", arabic: "الشتاء يعلم الصبر", dutch: "Winter leert geduld", time: 129 },
            { finnish: "Odottamaan kevättä", english: "To wait for spring", spanish: "A esperar la primavera", french: "À attendre le printemps", arabic: "انتظار الربيع", dutch: "Om te wachten op de lente", time: 136 },
            { finnish: "Mutta myös nauttimaan tästä hetkestä", english: "But also to enjoy this moment", spanish: "Pero también a disfrutar este momento", french: "Mais aussi à profiter de ce moment", arabic: "ولكن أيضاً للاستمتاع بهذه اللحظة", dutch: "Maar ook om van dit moment te genieten", time: 143 },
            { finnish: "Talven hiljaisuudesta ja rauhasta", english: "Of winter's silence and peace", spanish: "Del silencio y paz del invierno", french: "Du silence et de la paix de l'hiver", arabic: "من صمت وسلام الشتاء", dutch: "Van de stilte en vrede van de winter", time: 150 },
            { finnish: "Jokaisella vuodenajalla on tarkoitus", english: "Every season has a purpose", spanish: "Cada estación tiene un propósito", french: "Chaque saison a un but", arabic: "كل موسم له هدف", dutch: "Elk seizoen heeft een doel", time: 157 },
            { finnish: "Talvi antaa aikaa pysähtyä", english: "Winter gives time to stop", spanish: "El invierno da tiempo para detenerse", french: "L'hiver donne le temps de s'arrêter", arabic: "الشتاء يعطي وقتاً للتوقف", dutch: "Winter geeft tijd om te stoppen", time: 164 },
            { finnish: "Miettiä ja levätä", english: "To think and rest", spanish: "Para pensar y descansar", french: "Pour réfléchir et se reposer", arabic: "للتفكير والراحة", dutch: "Om na te denken en te rusten", time: 172 },
            { finnish: "Valmistautua uuteen alkuun", english: "To prepare for a new beginning", spanish: "Para prepararse para un nuevo comienzo", french: "Pour préparer un nouveau départ", arabic: "للاستعداد لبداية جديدة", dutch: "Om je voor te bereiden op een nieuw begin", time: 179 },
            { finnish: "Kun kevät lopulta saapuu", english: "When spring finally arrives", spanish: "Cuando finalmente llega la primavera", french: "Quand le printemps arrive enfin", arabic: "عندما يأتي الربيع أخيراً", dutch: "Wanneer de lente eindelijk komt", time: 186 },
            { finnish: "Olemme valmiita", english: "We are ready", spanish: "Estamos listos", french: "Nous sommes prêts", arabic: "نحن مستعدون", dutch: "Zijn we klaar", time: 193 },
            { finnish: "Kiitollisia talvesta", english: "Grateful for winter", spanish: "Agradecidos por el invierno", french: "Reconnaissants pour l'hiver", arabic: "ممتنون للشتاء", dutch: "Dankbaar voor de winter", time: 200 },
            { finnish: "Ja sen antamista lahjoista", english: "And its gifts", spanish: "Y sus regalos", french: "Et ses cadeaux", arabic: "وهداياه", dutch: "En zijn geschenken", time: 207 }
        ]
    },
    {
        id: 9,
        title: "Koneeseen Kadonnut",
        artist: "Apulanta",
        year: 2006,
        duration: "1:50",
        level: "advanced",
        cover: "https://cdn.recis.io/i/img/02/3f/c3/0b_38376b_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
        lyrics: [
            { finnish: "Tähtitaivas loistaa yllä", english: "Starry sky shines above", spanish: "El cielo estrellado brilla arriba", french: "Le ciel étoilé brille au-dessus", arabic: "السماء المرصعة بالنجوم تتألق في الأعلى", dutch: "Sterrenhemel schijnt boven", time: 0 },
            { finnish: "Kuu valaisee polkuni", english: "Moon illuminates my path", spanish: "La luna ilumina mi camino", french: "La lune éclaire mon chemin", arabic: "القمر ينير طريقي", dutch: "Maan verlicht mijn pad", time: 10 },
            { finnish: "Äärettömyys ympäröi minua", english: "Infinity surrounds me", spanish: "La infinidad me rodea", french: "L'infini m'entoure", arabic: "اللانهاية تحيط بي", dutch: "Oneindigheid omringt mij", time: 20 },
            { finnish: "Löydän rauhan syvällä sisimmässäni", english: "I find peace deep within myself", spanish: "Encuentro paz profundamente dentro de mí", french: "Je trouve la paix profondément en moi", arabic: "أجد السلام عميقاً في داخلي", dutch: "Ik vind vrede diep in mezelf", time: 30 },
            { finnish: "Tähdet kertovat tarinoita", english: "Stars tell stories", spanish: "Las estrellas cuentan historias", french: "Les étoiles racontent des histoires", arabic: "النجوم تروي القصص", dutch: "Sterren vertellen verhalen", time: 40 },
            { finnish: "Universumin salaisuuksista", english: "About secrets of the universe", spanish: "Sobre secretos del universo", french: "Sur les secrets de l'univers", arabic: "عن أسرار الكون", dutch: "Over geheimen van het universum", time: 50 },
            { finnish: "Tunnen olevani osa jotain suurempaa", english: "I feel part of something greater", spanish: "Siento ser parte de algo más grande", french: "Je me sens partie de quelque chose de plus grand", arabic: "أشعر أنني جزء من شيء أعظم", dutch: "Ik voel me deel van iets groters", time: 60 },
            { finnish: "Yö antaa minulle perspektiivin", english: "Night gives me perspective", spanish: "La noche me da perspectiva", french: "La nuit me donne de la perspective", arabic: "الليل يمنحني المنظور", dutch: "Nacht geeft me perspectief", time: 70 },
            { finnish: "Galaksit pyörivät pimeydessä", english: "Galaxies spin in the darkness", spanish: "Las galaxias giran en la oscuridad", french: "Les galaxies tournent dans l'obscurité", arabic: "المجرات تدور في الظلام", dutch: "Sterrenstelsels draaien in de duisternis", time: 80 },
            { finnish: "Miljoonien valovuosien päässä", english: "Millions of light years away", spanish: "A millones de años luz de distancia", french: "À des millions d'années-lumière", arabic: "على بعد ملايين السنوات الضوئية", dutch: "Miljoenen lichtjaren ver", time: 90 },
            { finnish: "Silti näen niiden valon", english: "Yet I see their light", spanish: "Sin embargo veo su luz", french: "Pourtant je vois leur lumière", arabic: "ومع ذلك أرى ضوءها", dutch: "Toch zie ik hun licht", time: 100 },
            { finnish: "Tänä yönä täällä Maassa", english: "Tonight here on Earth", spanish: "Esta noche aquí en la Tierra", french: "Ce soir ici sur Terre", arabic: "الليلة هنا على الأرض", dutch: "Vanavond hier op Aarde", time: 110 },
            { finnish: "Olemme kaikki tähtipölyä", english: "We are all stardust", spanish: "Todos somos polvo de estrellas", french: "Nous sommes tous de la poussière d'étoiles", arabic: "كلنا غبار نجوم", dutch: "We zijn allemaal sterrenstof", time: 120 },
            { finnish: "Syntyneet samasta alkuräjähdyksestä", english: "Born from the same Big Bang", spanish: "Nacidos del mismo Big Bang", french: "Nés du même Big Bang", arabic: "ولدنا من نفس الانفجار العظيم", dutch: "Geboren uit dezelfde oerknal", time: 130 },
            { finnish: "Yhdistyneitä kaikkien kanssa", english: "Connected with everyone", spanish: "Conectados con todos", french: "Connectés avec tout le monde", arabic: "متصلون بالجميع", dutch: "Verbonden met iedereen", time: 140 },
            { finnish: "Ja kaiken kanssa", english: "And with everything", spanish: "Y con todo", french: "Et avec tout", arabic: "ومع كل شيء", dutch: "En met alles", time: 150 },
            { finnish: "Tähtitieteen kautta", english: "Through astronomy", spanish: "A través de la astronomía", french: "À travers l'astronomie", arabic: "من خلال علم الفلك", dutch: "Door astronomie", time: 160 },
            { finnish: "Ymmärrän paikkani", english: "I understand my place", spanish: "Entiendo mi lugar", french: "Je comprends ma place", arabic: "أفهم مكاني", dutch: "Ik begrijp mijn plaats", time: 170 },
            { finnish: "Tässä valtavassa kosmoksessa", english: "In this vast cosmos", spanish: "En este vasto cosmos", french: "Dans ce vaste cosmos", arabic: "في هذا الكون الشاسع", dutch: "In deze uitgestrekte kosmos", time: 180 },
            { finnish: "Pieni mutta merkityksellinen", english: "Small but meaningful", spanish: "Pequeño pero significativo", french: "Petit mais significatif", arabic: "صغير لكن ذو معنى", dutch: "Klein maar betekenisvol", time: 190 },
            { finnish: "Osa suurempaa kokonaisuutta", english: "Part of a greater whole", spanish: "Parte de un todo mayor", french: "Partie d'un tout plus grand", arabic: "جزء من كل أعظم", dutch: "Deel van een groter geheel", time: 200 },
            { finnish: "Tähtitaivaan alla tunnen olevani kotona", english: "Under the starry sky I feel at home", spanish: "Bajo el cielo estrellado me siento en casa", french: "Sous le ciel étoilé je me sens chez moi", arabic: "تحت السماء المرصعة بالنجوم أشعر بأنني في المنزل", dutch: "Onder de sterrenhemel voel ik me thuis", time: 210 }
        ]
    },
    {
        id: 14,
        title: "Marilyn",
        artist: "Juice Leskinen",
        year: 1978,
        duration: "3:26",
        level: "advanced",
        cover: "https://cdnaws.recis.io/i/img/02/3f/c0/76_54c6f0_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
        lyrics: [
            { finnish: "Syvällä metsässä kävelen", english: "Deep in the forest I walk", spanish: "Profundo en el bosque camino", french: "Profond dans la forêt je marche", arabic: "عميقاً في الغابة أمشي", dutch: "Diep in het bos loop ik", time: 0 },
            { finnish: "Puiden juuret muodostavat verkoston", english: "Tree roots form a network", spanish: "Las raíces de los árboles forman una red", french: "Les racines des arbres forment un réseau", arabic: "جذور الأشجار تشكل شبكة", dutch: "Boomwortels vormen een netwerk", time: 10 },
            { finnish: "Näkymättömän yhteyden", english: "An invisible connection", spanish: "Una conexión invisible", french: "Une connexion invisible", arabic: "ارتباط غير مرئي", dutch: "Een onzichtbare verbinding", time: 20 },
            { finnish: "Joka yhdistää kaiken elävän", english: "That connects all living things", spanish: "Que conecta todo lo vivo", french: "Qui connecte tout ce qui vit", arabic: "الذي يربط كل شيء حي", dutch: "Die alles levends verbindt", time: 30 },
            { finnish: "Metsä hengittää minun kanssani", english: "The forest breathes with me", spanish: "El bosque respira conmigo", french: "La forêt respire avec moi", arabic: "الغابة تتنفس معي", dutch: "Het bos ademt met mij", time: 40 },
            { finnish: "Happi ja hiilidioksidi vaihtuvat", english: "Oxygen and carbon dioxide exchange", spanish: "Oxígeno y dióxido de carbono se intercambian", french: "L'oxygène et le dioxyde de carbone s'échangent", arabic: "الأكسجين وثاني أكسيد الكربون يتبادلان", dutch: "Zuurstof en kooldioxide wisselen uit", time: 50 },
            { finnish: "Symbioottisessa tanssissa", english: "In a symbiotic dance", spanish: "En una danza simbiótica", french: "Dans une danse symbiotique", arabic: "في رقصة تكافلية", dutch: "In een symbiotische dans", time: 60 },
            { finnish: "Sammalet peittävät kivet", english: "Mosses cover the stones", spanish: "Los musgos cubren las piedras", french: "Les mousses couvrent les pierres", arabic: "الطحالب تغطي الحجارة", dutch: "Mossen bedekken de stenen", time: 70 },
            { finnish: "Vihreä vaippa kaiken päällä", english: "A green blanket over everything", spanish: "Una manta verde sobre todo", french: "Une couverture verte sur tout", arabic: "بطانية خضراء على كل شيء", dutch: "Een groene deken over alles", time: 80 },
            { finnish: "Sienet kasvavat pimeydessä", english: "Mushrooms grow in the darkness", spanish: "Los hongos crecen en la oscuridad", french: "Les champignons poussent dans l'obscurité", arabic: "الفطر ينمو في الظلام", dutch: "Paddenstoelen groeien in de duisternis", time: 90 },
            { finnish: "Hajoittaen kuollutta ainesta", english: "Decomposing dead matter", spanish: "Descomponiendo materia muerta", french: "Décomposant la matière morte", arabic: "يحلل المادة الميتة", dutch: "Afbrekend dood materiaal", time: 100 },
            { finnish: "Palauttaen ravinteita maaperään", english: "Returning nutrients to the soil", spanish: "Devolviendo nutrientes al suelo", french: "Retournant les nutriments au sol", arabic: "يعيد العناصر الغذائية إلى التربة", dutch: "Voedingsstoffen teruggeven aan de bodem", time: 110 },
            { finnish: "Kierto jatkuu loputtomiin", english: "The cycle continues endlessly", spanish: "El ciclo continúa sin fin", french: "Le cycle continue sans fin", arabic: "الدورة تستمر إلى ما لا نهاية", dutch: "De cyclus gaat eindeloos door", time: 120 },
            { finnish: "Kuolema ruokkii elämää", english: "Death feeds life", spanish: "La muerte alimenta la vida", french: "La mort nourrit la vie", arabic: "الموت يطعم الحياة", dutch: "Dood voedt het leven", time: 130 },
            { finnish: "Elämä johtaa kuolemaan", english: "Life leads to death", spanish: "La vida lleva a la muerte", french: "La vie mène à la mort", arabic: "الحياة تؤدي إلى الموت", dutch: "Het leven leidt tot de dood", time: 140 },
            { finnish: "Mutta mikään ei katoa", english: "But nothing disappears", spanish: "Pero nada desaparece", french: "Mais rien ne disparaît", arabic: "لكن لا شيء يختفي", dutch: "Maar niets verdwijnt", time: 150 },
            { finnish: "Vain muuttaa muotoaan", english: "Only changes its form", spanish: "Solo cambia su forma", french: "Change seulement de forme", arabic: "يغير شكله فقط", dutch: "Verandert alleen van vorm", time: 160 },
            { finnish: "Vanhat puut kaatuvat", english: "Old trees fall", spanish: "Los árboles viejos caen", french: "Les vieux arbres tombent", arabic: "الأشجار القديمة تسقط", dutch: "Oude bomen vallen", time: 170 },
            { finnish: "Niiden lahopuu luo elinympäristöjä", english: "Their decaying wood creates habitats", spanish: "Su madera en descomposición crea hábitats", french: "Leur bois en décomposition crée des habitats", arabic: "خشبها المتحلل يخلق موائل", dutch: "Hun rottend hout creëert habitats", time: 180 },
            { finnish: "Sadoille lajeille", english: "For hundreds of species", spanish: "Para cientos de especies", french: "Pour des centaines d'espèces", arabic: "لمئات الأنواع", dutch: "Voor honderden soorten", time: 190 },
            { finnish: "Metsä on elävä kokonaisuus", english: "The forest is a living whole", spanish: "El bosque es un todo vivo", french: "La forêt est un tout vivant", arabic: "الغابة كل حي", dutch: "Het bos is een levend geheel", time: 200 },
            { finnish: "Täynnä elämää ja tarkoitusta", english: "Full of life and purpose", spanish: "Lleno de vida y propósito", french: "Plein de vie et de but", arabic: "مليء بالحياة والهدف", dutch: "Vol leven en doel", time: 210 }
        ]
    },
    {
        id: 15,
        title: "Suuret Setelit",
        artist: "Four Cats",
        year: 1967,
        duration: "2:03",
        level: "advanced",
        cover: "https://cdnaws.recis.io/i/img/02/3f/cc/02_cfb164_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
        lyrics: [
            { finnish: "Aika virtaa kuin joki", english: "Time flows like a river", spanish: "El tiempo fluye como un río", french: "Le temps coule comme une rivière", arabic: "الوقت يتدفق كالنهر", dutch: "Tijd stroomt als een rivier", time: 0 },
            { finnish: "Ei koskaan pysähdy", english: "Never stops", spanish: "Nunca se detiene", french: "Ne s'arrête jamais", arabic: "لا يتوقف أبداً", dutch: "Stopt nooit", time: 10 },
            { finnish: "Ei koskaan palaa taaksepäin", english: "Never goes back", spanish: "Nunca vuelve atrás", french: "Ne revient jamais en arrière", arabic: "لا يعود أبداً", dutch: "Gaat nooit terug", time: 20 },
            { finnish: "Vain eteenpäin", english: "Only forward", spanish: "Solo hacia adelante", french: "Seulement en avant", arabic: "فقط إلى الأمام", dutch: "Alleen vooruit", time: 30 },
            { finnish: "Kohti tuntematonta", english: "Towards the unknown", spanish: "Hacia lo desconocido", french: "Vers l'inconnu", arabic: "نحو المجهول", dutch: "Naar het onbekende", time: 40 },
            { finnish: "Lapsuus tuntuu kaukaiselta muistolta", english: "Childhood feels like a distant memory", spanish: "La infancia se siente como un recuerdo lejano", french: "L'enfance semble un souvenir lointain", arabic: "الطفولة تبدو كذكرى بعيدة", dutch: "Kindertijd voelt als een verre herinnering", time: 50 },
            { finnish: "Vaikka eilen vasta oli", english: "Though it was just yesterday", spanish: "Aunque fue ayer", french: "Bien que c'était hier", arabic: "رغم أنه كان بالأمس فقط", dutch: "Hoewel het gisteren was", time: 60 },
            { finnish: "Nuoruus haihtui huomaamatta", english: "Youth faded unnoticed", spanish: "La juventud se desvaneció sin ser notada", french: "La jeunesse s'est estompée inaperçue", arabic: "الشباب تلاشى دون أن يلاحظ", dutch: "Jeugd vervaagde ongemerkt", time: 70 },
            { finnish: "Aikuisuus tuli äkkiä", english: "Adulthood came suddenly", spanish: "La adultez llegó de repente", french: "L'âge adulte est arrivé soudainement", arabic: "جاء الرشد فجأة", dutch: "Volwassenheid kwam plotseling", time: 80 },
            { finnish: "Vastuut ja velvollisuudet", english: "Responsibilities and duties", spanish: "Responsabilidades y deberes", french: "Responsabilités et devoirs", arabic: "المسؤوليات والواجبات", dutch: "Verantwoordelijkheden en plichten", time: 90 },
            { finnish: "Täyttivät päivät", english: "Filled the days", spanish: "Llenaron los días", french: "Ont rempli les jours", arabic: "ملأت الأيام", dutch: "Vulden de dagen", time: 100 },
            { finnish: "Kiire vei mukanaan", english: "Hurry took away", spanish: "La prisa se llevó", french: "La hâte a emporté", arabic: "العجلة أخذت معها", dutch: "Haast nam mee", time: 110 },
            { finnish: "Hetkiä joita en huomannut", english: "Moments I didn't notice", spanish: "Momentos que no noté", french: "Des moments que je n'ai pas remarqués", arabic: "لحظات لم ألاحظها", dutch: "Momenten die ik niet opmerkte", time: 120 },
            { finnish: "Koska odotin tulevaa", english: "Because I was waiting for the future", spanish: "Porque estaba esperando el futuro", french: "Parce que j'attendais l'avenir", arabic: "لأنني كنت أنتظر المستقبل", dutch: "Omdat ik wachtte op de toekomst", time: 130 },
            { finnish: "Mutta tulevaisuus on vain illuusio", english: "But the future is just an illusion", spanish: "Pero el futuro es solo una ilusión", french: "Mais l'avenir n'est qu'une illusion", arabic: "لكن المستقبل مجرد وهم", dutch: "Maar de toekomst is slechts een illusie", time: 140 },
            { finnish: "Kun se saapuu", english: "When it arrives", spanish: "Cuando llega", french: "Quand il arrive", arabic: "عندما يصل", dutch: "Wanneer het aankomt", time: 150 },
            { finnish: "Se on nykyhetki", english: "It is the present moment", spanish: "Es el momento presente", french: "C'est le moment présent", arabic: "إنها اللحظة الحالية", dutch: "Het is het huidige moment", time: 160 },
            { finnish: "Ja nykyhetki on jo menneisyyttä", english: "And the present is already the past", spanish: "Y el presente ya es pasado", french: "Et le présent est déjà le passé", arabic: "والحاضر هو بالفعل الماضي", dutch: "En het heden is al verleden", time: 170 },
            { finnish: "Kun yritän tarttua siihen", english: "When I try to grasp it", spanish: "Cuando intento agarrarlo", french: "Quand j'essaie de le saisir", arabic: "عندما أحاول الإمساك به", dutch: "Wanneer ik het probeer te grijpen", time: 180 },
            { finnish: "Se luisuu sormieni välistä", english: "It slips between my fingers", spanish: "Se desliza entre mis dedos", french: "Il glisse entre mes doigts", arabic: "ينزلق بين أصابعي", dutch: "Het glipt tussen mijn vingers door", time: 190 },
            { finnish: "Aika on arvoitus jota en koskaan ratkaise", english: "Time is a mystery I will never solve", spanish: "El tiempo es un misterio que nunca resolveré", french: "Le temps est un mystère que je ne résoudrai jamais", arabic: "الوقت هو لغز لن أحله أبداً", dutch: "Tijd is een mysterie dat ik nooit zal oplossen", time: 200 }
        ]
    },
    {
        id: 16,
        title: "Kuuma kesä",
        artist: "Popeda",
        year: 1980,
        duration: "1:50",
        level: "advanced",
        cover: "https://cdnaws.recis.io/i/img/02/3f/c7/d7_57f871_sq250.jpg",
        audioUrl: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
        lyrics: [
            { finnish: "Sisäinen matka alkaa hiljaisuudessa", english: "The inner journey begins in silence", spanish: "El viaje interior comienza en silencio", french: "Le voyage intérieur commence dans le silence", arabic: "الرحلة الداخلية تبدأ في الصمت", dutch: "De innerlijke reis begint in stilte", time: 0 },
            { finnish: "Kun ulkoiset äänet hiljenevät", english: "When external sounds quiet down", spanish: "Cuando los sonidos externos se silencian", french: "Quand les sons externes s'apaisent", arabic: "عندما تهدأ الأصوات الخارجية", dutch: "Wanneer externe geluiden stil worden", time: 10 },
            { finnish: "Kuulen oman ääneni", english: "I hear my own voice", spanish: "Escucho mi propia voz", french: "J'entends ma propre voix", arabic: "أسمع صوتي الخاص", dutch: "Ik hoor mijn eigen stem", time: 20 },
            { finnish: "Syvältä sisältäni", english: "From deep within", spanish: "Desde lo profundo de mi interior", french: "De profondément en moi", arabic: "من أعماقي", dutch: "Van diep vanbinnen", time: 30 },
            { finnish: "Se puhuu totuuksia", english: "It speaks truths", spanish: "Habla verdades", french: "Elle dit des vérités", arabic: "تتحدث الحقائق", dutch: "Het spreekt waarheden", time: 40 },
            { finnish: "Joita en halua kuulla", english: "That I don't want to hear", spanish: "Que no quiero escuchar", french: "Que je ne veux pas entendre", arabic: "التي لا أريد أن أسمعها", dutch: "Die ik niet wil horen", time: 50 },
            { finnish: "Mutta jotka minun täytyy kohdata", english: "But that I must face", spanish: "Pero que debo enfrentar", french: "Mais que je dois affronter", arabic: "لكن يجب أن أواجهها", dutch: "Maar die ik moet aangaan", time: 60 },
            { finnish: "Kasvun edellytyksenä", english: "As a prerequisite for growth", spanish: "Como requisito para el crecimiento", french: "Comme condition préalable à la croissance", arabic: "كشرط مسبق للنمو", dutch: "Als voorwaarde voor groei", time: 70 },
            { finnish: "Meditaatiossa uppoudun", english: "In meditation I immerse", spanish: "En meditación me sumerjo", french: "Dans la méditation je m'immerge", arabic: "في التأمل أغوص", dutch: "In meditatie dompel ik onder", time: 80 },
            { finnish: "Syvyyksiin oman mieleni", english: "Into the depths of my mind", spanish: "En las profundidades de mi mente", french: "Dans les profondeurs de mon esprit", arabic: "في أعماق عقلي", dutch: "In de diepten van mijn geest", time: 90 },
            { finnish: "Löydän kerroksia ja kerroksia", english: "I find layers and layers", spanish: "Encuentro capas y capas", french: "Je trouve des couches et des couches", arabic: "أجد طبقات وطبقات", dutch: "Ik vind lagen en lagen", time: 100 },
            { finnish: "Tietoisuutta ja tiedostamatonta", english: "Conscious and unconscious", spanish: "Consciente e inconsciente", french: "Conscient et inconscient", arabic: "الوعي واللاوعي", dutch: "Bewust en onbewust", time: 110 },
            { finnish: "Pelkoja ja toiveita", english: "Fears and hopes", spanish: "Miedos y esperanzas", french: "Peurs et espoirs", arabic: "مخاوف وآمال", dutch: "Angsten en hoop", time: 120 },
            { finnish: "Muistoja ja unelmia", english: "Memories and dreams", spanish: "Recuerdos y sueños", french: "Souvenirs et rêves", arabic: "ذكريات وأحلام", dutch: "Herinneringen en dromen", time: 130 },
            { finnish: "Kaikki sekoittuu yhteen", english: "Everything mixes together", spanish: "Todo se mezcla", french: "Tout se mélange", arabic: "كل شيء يختلط معاً", dutch: "Alles mengt zich", time: 140 },
            { finnish: "Mutta hiljalleen selkenee", english: "But gradually becomes clear", spanish: "Pero gradualmente se aclara", french: "Mais s'éclaircit progressivement", arabic: "لكنه يتضح تدريجياً", dutch: "Maar wordt geleidelijk duidelijk", time: 150 },
            { finnish: "Kun annan ajan", english: "When I give time", spanish: "Cuando doy tiempo", french: "Quand je donne du temps", arabic: "عندما أعطي الوقت", dutch: "Wanneer ik tijd geef", time: 160 },
            { finnish: "Ja tilaa", english: "And space", spanish: "Y espacio", french: "Et de l'espace", arabic: "والمساحة", dutch: "En ruimte", time: 170 },
            { finnish: "Prosessille joka ei kiirehdittävissä", english: "For a process that cannot be rushed", spanish: "Para un proceso que no se puede apresurar", french: "Pour un processus qui ne peut être précipité", arabic: "لعملية لا يمكن التسرع فيها", dutch: "Voor een proces dat niet gehaast kan worden", time: 180 },
            { finnish: "Itsetuntemus vaatii rohkeutta", english: "Self-knowledge requires courage", spanish: "El autoconocimiento requiere coraje", french: "La connaissance de soi nécessite du courage", arabic: "معرفة الذات تتطلب الشجاعة", dutch: "Zelfkennis vereist moed", time: 190 },
            { finnish: "Katsoa peiliin", english: "To look in the mirror", spanish: "Para mirar al espejo", french: "Pour regarder dans le miroir", arabic: "للنظر في المرآة", dutch: "Om in de spiegel te kijken", time: 200 },
            { finnish: "Ilman maskeja", english: "Without masks", spanish: "Sin máscaras", french: "Sans masques", arabic: "بدون أقنعة", dutch: "Zonder maskers", time: 210 }
        ]
    }
];

// Get all songs
function getAllSongs() {
    return songsDatabase;
}

// Get songs by level
function getSongsByLevel(level) {
    return songsDatabase.filter(song => song.level === level);
}

// Get random song (avoids repeating the last selected song)
let lastRandomSongId = null;
function getRandomSong() {
    if (songsDatabase.length === 1) {
        return songsDatabase[0];
    }
    
    let randomSong;
    let attempts = 0;
    const maxAttempts = 10;
    
    do {
        const randomIndex = Math.floor(Math.random() * songsDatabase.length);
        randomSong = songsDatabase[randomIndex];
        attempts++;
    } while (randomSong.id === lastRandomSongId && attempts < maxAttempts);
    
    lastRandomSongId = randomSong.id;
    return randomSong;
}

// Get song by ID
function getSongById(id) {
    return songsDatabase.find(song => song.id === parseInt(id));
}

// Get random song by level
function getRandomSongByLevel(level) {
    const levelSongs = getSongsByLevel(level);
    if (levelSongs.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * levelSongs.length);
    return levelSongs[randomIndex];
}

// Search songs by title, artist, or year
function searchSongs(query) {
    if (!query) return getAllSongs();
    
    const lowerQuery = query.toLowerCase();
    return songsDatabase.filter(song => 
        song.title.toLowerCase().includes(lowerQuery) ||
        song.artist.toLowerCase().includes(lowerQuery) ||
        song.year.toString().includes(lowerQuery)
    );
}

// Make the database accessible to other scripts that expect a global.
// (In non-module scripts this is usually already global, but this makes it explicit and robust.)
try {
    window.songsDatabase = songsDatabase;
    // Backwards-compat aliases (some scripts look for these names)
    window.songs = window.songsDatabase;
    window.SONGS = window.songsDatabase;
    window.getAllSongs = getAllSongs;
    window.getSongsByLevel = getSongsByLevel;
    window.getRandomSong = getRandomSong;
    window.getSongById = getSongById;
    window.getRandomSongByLevel = getRandomSongByLevel;
    window.searchSongs = searchSongs;
} catch {
    // ignore (e.g., if window is not available)
}

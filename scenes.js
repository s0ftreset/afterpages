/*
  FOXGLOVE CONTENT DESK
  ---------------------
  Add a photo later by putting its relative path in an archive item's `image`
  field, for example: image: "assets/photos/nsh-cleveland-2019.jpg"
*/

window.FOXGLOVE = {
  title: "FOXGLOVE",
  editor: "Iris Marlowe",
  issue: "NO. 13 / SEPTEMBER 2026",
  strapline: "Independent music, damaged film, and the parts they cut from the interview.",

  bands: [
    {
      id: "no-saints-here",
      short: "NSH",
      name: "No Saints Here",
      image: "assets/photos/no-saints-here-after-show.webp",
      imageAlt: "All five members of No Saints Here relaxing together on a wet loading dock after a show",
      desk: "THE BEAUTIFUL MESS",
      years: "ARCHIVE: 2017—2026",
      pullQuote: "They got famous by making every private disaster sound good at full volume.",
      summary: "Five people who should not work this well together. No Saints Here turns raw nerve, old loyalty, and the occasional catastrophic decision into arena-sized rock without sanding off the club-floor grime.",
      irisNote: "They hate being called a family. This is because they are one.",
      members: [
        {
          id: "astrid-vale",
          name: "Astrid Vale",
          image: "assets/photos/astrid-vale.webp",
          imageAlt: "Close backstage portrait of Astrid Vale with long silver hair, dark makeup, tattoos, and a cigarette",
          imagePosition: "50% 34%",
          age: "26",
          role: "Lead vocals / occasional rhythm guitar",
          marker: "VOICE / TEETH / MATCHSTICK",
          deck: "The unmistakable face and voice of No Saints Here—feral under stage lights, nearly impossible to read once they go dark.",
          bio: "Astrid writes from real arguments, real betrayals, and private moments she will never explain for an audience. Silver-white hair, smoky eyes, heavy ink, and a voice built to turn confession into confrontation made her famous. Fame only made her more guarded.",
          facts: ["Primary lyricist", "Punk-goth uniform", "Weaponized eye contact", "Hates manufactured celebrity"],
          iris: "She looked directly into my lens once and I nearly apologized for something.",
          secrets: {
            files: [
              {
                label: "FAMILY FILE",
                title: "Ruth Vale Erasure",
                blocks: [
                  { type: "p", text: "Astrid will tell you she basically raised herself. This is Ruth Vale erasure, and I won’t stand for it." },
                  { type: "p", text: "Astrid grew up bouncing between her mother Celeste’s unstable apartments and her grandmother Ruth’s house. Celeste loved her. She also wasn’t reliable, and Astrid learned way too young how to stretch groceries, handle bills, and recognize when an adult saying ‘I’ll be back tonight’ didn’t necessarily mean tonight." },
                  { type: "p", text: "Ruth was the constant. Same house. Same phone number. Same floral couch that I personally believe predates electricity." },
                  { type: "list", items: ["Ruth calls Forrest ‘the quiet one.’", "Jett is ‘the blond menace.’", "I am ‘that lovely drummer,’ because Ruth has taste.", "Roman is just Roman, because he fixed her sink once and somehow became her favorite grandchild despite a devastating lack of biological relation.", "Astrid secretly pays one of Celeste’s bills and would commit murder before admitting it.", "She has two younger half-siblings through her father whom she barely knows.", "Her half-sister Emma was already an NSH fan before discovering Astrid was her sister."] },
                  { type: "note", text: "DOLLY’S NOTE: Astrid doesn’t need people. Just ask her. She’ll tell you. Repeatedly. Don’t investigate why she remembers every single time somebody promised they’d show up." }
                ]
              },
              {
                label: "EXES & BAD DECISIONS",
                title: "Concerning Electrical Wiring",
                blocks: [
                  { type: "p", text: "Astrid’s romantic history is less train wreck and more beautiful old building with deeply concerning electrical wiring." },
                  { type: "p", text: "She doesn’t fall easily. When she does, she has historically responded to the horrifying realization that another human being matters to her by becoming approximately twelve percent harder to emotionally access." },
                  { type: "p", text: "Her big pre-fame relationship survived basement shows, terrible apartments, and the years when NSH’s touring budget consisted primarily of loose change and spite. It ended because of exactly that instinct to leave first." },
                  { type: "quote", text: "I can’t keep proving I’m not leaving when you keep leaving first." },
                  { type: "p", text: "Astrid pretended that didn’t absolutely gut her. We all pretended to believe her." },
                  { type: "list", items: ["Briefly dated a bartender because I’m reasonably certain she liked the bar more than him.", "Slept with a musician from a band NSH openly hated.", "Realized halfway through a date that she’d previously hooked up with the person’s roommate.", "Blocked an ex and continued wearing their jacket for approximately three years. No, I will not identify the jacket. Yes, there are photographs."] }
                ]
              },
              {
                label: "A STORY DOLLY SWEARS IS TRUE",
                title: "The Great Astrid Arrest That Wasn’t",
                blocks: [
                  { type: "p", text: "Early NSH. Basement show. Somebody called the cops. Astrid, approximately twenty and several drinks beyond sound judgment, became completely convinced she was about to be arrested." },
                  { type: "p", text: "She solemnly handed me her rings, her cigarettes, and twenty-three dollars. Then she looked directly into my eyes." },
                  { type: "quote", text: "Tell Ruth I wasn’t driving." },
                  { type: "p", text: "The cop gave us a warning. Nobody was arrested. Astrid immediately requested her cigarettes back. I returned the rings. I kept the twenty-three dollars." },
                  { type: "note", text: "She claims I’ve embellished this story. I still have the money." }
                ]
              }
            ]
          }
        },
        {
          id: "forrest-hale",
          name: "Forrest Hale",
          image: "assets/photos/forrest-hale.webp",
          imageAlt: "Close backstage portrait of Forrest Hale with tousled black hair, piercings, chains, and tattooed arms",
          imagePosition: "50% 32%",
          age: "28",
          role: "Lead guitar / backing vocals / songwriter",
          marker: "DEAD QUIET / LOUD HANDS",
          deck: "A man of six words, four of them sarcastic, until somebody puts a guitar in his hands.",
          bio: "Forrest is quiet, perceptive, and allergic to explaining himself. His guitar work says everything he refuses to. He and Astrid share the kind of live chemistry that keeps rumor columns employed; both insist it is performance and decline to define the rest.",
          facts: ["Knuckle ink: DEAD", "Fixes gear instead of feelings", "Club-days wardrobe survivor", "Coffee appears without comment"],
          iris: "Photograph the hands. He will pretend not to notice you doing it.",
          secrets: {
            files: [
              {
                label: "FAMILY FILE",
                title: "The Quiet One and His Little Sister",
                blocks: [
                  { type: "p", text: "Forrest has a younger sister named Lila. This explains more about Forrest than Forrest has willingly explained about himself in his entire life. He answers Lila’s calls every single time—noon or three in the morning." },
                  { type: "p", text: "Their father was volatile and unpredictable, especially when drinking. Forrest learned to read the night from footsteps, keys in the door, and how hard a cabinet closed. A lot of that vigilance wasn’t for himself. It was for Lila. He’d give her headphones, let her sleep in his room, turn music up when things got bad, and get her out of the house when he could." },
                  { type: "p", text: "When Forrest was sixteen, his father smashed his first real guitar during an argument. It was cheap, secondhand, and Forrest had saved for it himself. His mother Marianne found him trying to work out whether it could be repaired. It couldn’t. Forrest doesn’t speak to his father anymore. Marianne eventually got them out." },
                  { type: "quote", text: "Lila is one of approximately six people alive who can say, ‘You’re doing the thing,’ and make Forrest stop pretending he doesn’t know what she means." },
                  { type: "p", text: "Also, she steals his hoodies. Fame has not protected him from this." },
                  { type: "note", text: "DOLLY’S NOTE: Forrest fixes everything—cables, pedals, jewelry, furniture, zippers, road cases, and that lamp Astrid should have thrown away six years ago. He’ll say replacing things is expensive. That’s bullshit. Forrest fixes things because somebody should. Don’t tell him I wrote that. Don’t even look at him differently. He’ll know." }
                ]
              },
              {
                label: "EXES & BAD DECISIONS",
                title: "Suspiciously Boyfriend-Shaped",
                blocks: [
                  { type: "p", text: "Forrest has surprisingly few official exes. He has an alarming number of situationships." },
                  { type: "p", text: "His problem isn’t dramatic breakups. It’s that Forrest can make somebody feel incredibly close to him while revealing approximately nothing about himself. He’ll remember your coffee order, fix your kitchen drawer, leave his shirt at your apartment, sleep beside you four nights a week, and kiss your forehead when he thinks you’re asleep. Then you realize you have no fucking clue what he’s afraid of." },
                  { type: "quote", text: "You make people feel close to you without actually letting them know you." },
                  { type: "list", items: ["Has absolutely hooked up with somebody because they had good tattoos.", "Once abandoned his own hookup halfway through the night to smoke alone on a fire escape.", "Accidentally maintained a six-month situationship because neither participant asked what they were doing.", "Has had multiple people assume they were dating him because Forrest behaves suspiciously boyfriend-shaped without ever discussing it."] }
                ]
              },
              {
                label: "A STORY DOLLY SWEARS IS TRUE",
                title: "Forrest Hale vs. the Possum",
                blocks: [
                  { type: "p", text: "Cheap motel. Three in the morning. Forrest went outside to smoke. Twenty minutes later he returned carrying a towel. There was a possum inside the towel." },
                  { type: "quote", text: "I cannot emphasize enough that there was a live fucking possum in our motel room. Roman woke up to me whisper-screaming: ‘FORREST BROUGHT A FUCKING POSSUM INTO THE MOTEL.’" },
                  { type: "p", text: "Forrest looked genuinely offended. ‘It’s hurt.’ We found wildlife rescue. The possum survived. Forrest denies naming it." },
                  { type: "note", text: "Its name was Kevin." }
                ]
              }
            ]
          }
        },
        {
          id: "jett-maddox",
          name: "Jett Maddox",
          image: "assets/photos/jett-maddox.webp",
          imageAlt: "Close backstage portrait of Jett Maddox with wet bleached hair, piercings, layered chains, and extensive tattoos",
          imagePosition: "50% 42%",
          age: "27",
          role: "Rhythm guitar / occasional vocals",
          marker: "BAD IDEA / EXCELLENT TIMING",
          deck: "Flirt, instigator, professional interview derailment, and far more observant than he wants anyone to know.",
          bio: "Jett wears his charm like a switchblade: bright, quick, and usually deployed before anyone notices he is bleeding. Shaggy bleached hair, bruised knuckles, a crooked grin, and no instinct for leaving a reaction unprovoked.",
          facts: ["Regional DIY lifer", "Remembers everything", "Humor as body armor", "Will touch the sign marked DO NOT TOUCH"],
          iris: "Never tell him a shot is candid. He becomes visibly impossible the second he knows.",
          secrets: {
            files: [
              {
                label: "FAMILY FILE",
                title: "Devastatingly Normal",
                blocks: [
                  { type: "p", text: "I have devastating information about Jett Maddox. Please prepare yourselves. His family is completely fucking normal. We checked. Nothing happened to him. He’s just like this." },
                  { type: "p", text: "His mother Rebecca teaches high-school English. His father Thomas is a civil engineer. They love him. They supported him. They fed him. They provided structure and enrichment. It didn’t work." },
                  { type: "list", items: ["Jett calls his parents more often than you would expect.", "His mother responded to a major magazine interview by correcting his grammar.", "His father taught him his first guitar chords and therefore bears partial responsibility for everything that followed.", "His younger sister Chloe calls him Jetson when she wants him angry.", "Chloe possesses enough childhood photographs to end his career.", "She once watched several hundred people lose their minds because Jett took his shirt off and said, ‘I’ve seen him eat shredded cheese over the sink at three in the morning. You people need standards.’", "Rebecca sends Roman a birthday card every year thanking him for dealing with Jett. Roman has kept every card. Jett fucking hates this."] },
                  { type: "note", text: "DOLLY’S NOTE: Sometimes people ask me what happened to Jett. Again: nothing." }
                ]
              },
              {
                label: "EXES & BAD DECISIONS",
                title: "The Niamh Kelleher File",
                warning: "YOU HAVE BEEN WARNED. THIS ONE IS A FUCKING DISASTER.",
                blocks: [
                  { type: "p", text: "I considered leaving this out. Then I remembered Jett has never extended that courtesy to anybody else. Anyway. Jett and Niamh Kelleher of Glass Teeth were together for roughly three years. The embarrassing part is that they were once really fucking good together." },
                  { type: "p", text: "They met on the regional DIY circuit before either band was famous. Music friends first. Gear nerds. Constant arguing. The kind of friendship where everyone else starts wondering whether these two understand sexual tension isn’t a legitimate debate format. Their first kiss happened during an argument. Obviously." },
                  { type: "p", text: "Eventually Niamh practically moved into Jett’s apartment without either one formally acknowledging it. Her clothes appeared in his drawers. Her shit migrated into his bathroom. Her favorite food started living in his kitchen. They became disgustingly domestic for two people capable of turning a conversation about distortion pedals into blood sport." },
                  { type: "p", text: "When they were good, they were really good. They understood each other through music in ways neither offered many people. Jett could make Niamh loosen her death grip on everything for five fucking minutes. Niamh could get Jett to stop performing long enough to admit when something actually hurt. They trusted each other with unusually vulnerable parts of themselves." },
                  { type: "p", text: "Then both bands got bigger. Success brought comparisons. Comparisons brought resentment. Niamh became ‘Jett Maddox’s girlfriend’ instead of her own fucking name. Schedules became impossible. Important things got missed. Their careers became something everyone expected them to measure against each other." },
                  { type: "p", text: "Unfortunately, these two have the single worst complementary conflict styles God has ever manufactured. Jett needs resolution immediately. Niamh gets colder, precise, controlled, and untouchable. Jett pushes. Niamh retreats. Jett pushes harder. Niamh gets crueler. Repeat until structural damage occurs." },
                  { type: "p", text: "The relationship finally detonated after Niamh missed an important No Saints Here show because Glass Teeth had a recording emergency." },
                  { type: "quote", text: "Jett: ‘You don’t know how to love anything you can’t control.’ Niamh: ‘And you don’t know how to love anything that doesn’t need saving.’" },
                  { type: "quote", text: "Jett: ‘At least people know how to stay when they’re with me.’" },
                  { type: "p", text: "Niamh told him to get out. Neither said we’re done. Jett left. Niamh didn’t call. Jett didn’t go back. Three years of living in each other’s pockets ended because two of the most stubborn people alive apparently decided having an actual breakup conversation would constitute surrender." },
                  { type: "p", text: "Years later, they genuinely dislike each other. They’re not secretly pining. They’re not waiting for an apology. They’re not soulmates who missed their chance. Sometimes two people can have been incredibly important to each other and still become people who should absolutely never fucking date again." },
                  { type: "p", text: "Unfortunately, on extremely rare occasions since the breakup, they have made out. While hating each other. It did not fix anything. They regretted it. Probably. Only a very small number of people know this. I am one of them. And now so are you." },
                  { type: "note", text: "DOLLY’S OFFICIAL ASSESSMENT: They’re not secretly in love. Which somehow makes the occasional hate-making-out significantly more embarrassing." },
                  { type: "p", text: "OTHER JETT MADDOX ROMANTIC CRIMES: Yes. ARE WE LISTING THEM ALL? No. I have a website bandwidth limit. HAS HE EVER BEEN NORMAL ABOUT A WOMAN? Next question." }
                ]
              },
              {
                label: "A STORY DOLLY SWEARS IS TRUE",
                title: "The Cheese Incident",
                blocks: [
                  { type: "p", text: "Hotel. 3:14 AM. I walked into the kitchenette. Jett was standing shirtless in front of the open refrigerator eating shredded cheese directly from the bag. No plate. No dignity. Nothing." },
                  { type: "p", text: "He saw me. I saw him. Jett slowly extended the bag." },
                  { type: "quote", text: "Cheese?" },
                  { type: "p", text: "I took some. Neither of us spoke about it again. Years later Chloe independently informed me that Jett has done this since adolescence. I cannot explain this behavior." }
                ]
              }
            ]
          }
        },
        {
          id: "roman-cross",
          name: "Roman Cross",
          image: "assets/photos/roman-cross.webp",
          imageAlt: "Close backstage portrait of Roman Cross with wet black hair, dark facial hair, and tattooed arms and hands",
          imagePosition: "50% 31%",
          age: "29",
          role: "Bass / backing vocals",
          marker: "LOW END / LAST WARNING",
          deck: "The person you call when the van dies, the promoter lies, or somebody needs to reconsider their choices.",
          bio: "Roman is blunt, practical, and built around a protective streak wide enough to shelter an entire touring party. In the broke years he handled landlords, vans, hospital runs, contracts, and consequences. He still shows love through food, rides, repairs, and a very quiet who did this.",
          facts: ["Mexican-American", "English / Spanish", "Unofficial crisis department", "Keeps the old mementos"],
          iris: "He always knows where the exits are. He also always knows who has eaten.",
          secrets: {
            files: [
              {
                label: "FAMILY FILE",
                title: "Of Course He’s the Eldest",
                blocks: [
                  { type: "p", text: "Roman is the eldest sibling. Of course he fucking is. Elaine and Michael Cross somehow produced three functional adults." },
                  { type: "p", text: "His younger sister Natalie is an attorney and one of the only human beings capable of arguing him into submission. His younger brother Ben works in graphic design and thinks NSH is hilarious because he doesn’t have to tour with us." },
                  { type: "quote", text: "Michael communicates through Dad Transmission: ‘Storm coming your way. Watch the roads.’ ‘Saw the Chicago show online. Bass sounded good.’ That second message contains approximately seventeen emotions." },
                  { type: "p", text: "Elaine can identify which NSH member is having a crisis within thirty seconds of us entering her house. The Cross house became one of our unofficial safe houses before anybody consciously decided it was. There’s always food. Nobody gives a shit about chart positions. Michael asks whether the bus is running. Elaine asks whether you’ve eaten. Natalie insults Roman. Ben shows Jett something stupid on his phone." },
                  { type: "p", text: "The weirdest part? Roman genuinely doesn’t understand why everybody likes being there so much. To him, it’s just home." },
                  { type: "note", text: "DOLLY’S NOTE: The rest of us have considered stealing it." }
                ]
              },
              {
                label: "EXES & BAD DECISIONS",
                title: "Fewer Does Not Mean None",
                blocks: [
                  { type: "p", text: "Roman’s romantic problem is predictable. He’s fantastic at taking care of somebody. He’s fucking terrible at letting them take care of him." },
                  { type: "p", text: "He had one serious relationship that lasted several years and ended without cheating, screaming, property damage, or anyone climbing out a bathroom window. Jett found this suspicious. The actual problem was quieter. Roman would explain every practical problem while hiding every emotional one." },
                  { type: "quote", text: "He’d say, ‘Work’s been busy,’ when he meant, ‘I’m drowning.’" },
                  { type: "p", text: "They loved each other. It still wasn’t enough." },
                  { type: "list", items: ["Roman’s taste becomes inexplicably worse after two drinks.", "He has had precisely one ill-advised backstage hookup and will take the details to his grave.", "He dated someone for three months before we realized because he forgot to mention it.", "I maintain Roman has a weakness for people who are a little bit mean to him. Roman rejects this allegation. The evidence does not."] }
                ]
              },
              {
                label: "A STORY DOLLY SWEARS IS TRUE",
                title: "Roman Cross Got Drunk Once",
                blocks: [
                  { type: "p", text: "Not tipsy. Drunk. Early-tour celebration. Roman disappeared. We found him outside the venue sitting on a curb beside a parking meter." },
                  { type: "quote", text: "He was explaining to it, with extraordinary seriousness: ‘You can’t just take people’s money and give them nothing.’" },
                  { type: "p", text: "Jett has video. Roman knows Jett has video. This is the closest No Saints Here has ever come to mutually assured destruction." }
                ]
              }
            ]
          }
        },
        {
          id: "dahlia-gutierrez",
          name: "Dahlia “Dolly” Gutierrez",
          image: "assets/photos/dahlia-gutierrez.webp",
          imageAlt: "Close backstage portrait of Dolly Gutierrez with black space buns, silver piercings, tattoos, and a cherry",
          imagePosition: "50% 31%",
          age: "26",
          role: "Drums / occasional backing vocals",
          marker: "HEARTBEAT / TROUBLEMAKER",
          deck: "A technically vicious drummer and the emotional center of five people pretending they do not need one.",
          bio: "Dolly hits hard, loves loudly, steals food, invades bunks, and notices every emotional temperature change in the room. Raised in a loud Puerto Rican-American New York family, she moves easily between English, Spanish, and Spanglish—and guards other people's secrets better than her own face can guard hers.",
          facts: ["Puerto Rican-American", "Patchwork tattoos", "Atrocious liar", "Other people's hoodies"],
          iris: "Half my best contact sheets exist because Dolly forgot the camera was there.",
          secrets: {
            selfAuthored: true,
            files: [
              {
                label: "FAMILY FILE",
                title: "The Gutierrez Industrial Family Complex",
                blocks: [
                  { type: "p", text: "Mom: Marisol. Dad: Rafael. Mateo. Sofia. Nico. Nieces. Nephews. Cousins. Aunts. Uncles. People whose exact relationship to me nobody has successfully explained since 2008." },
                  { type: "p", text: "My dad built my first drum kit out of whatever we could afford—buckets, a secondhand snare, salvaged stands. He complained about the noise constantly. Then he soundproofed part of the garage for me. That’s Rafael." },
                  { type: "p", text: "My mom spent years telling me music wasn’t a reliable career because she wanted me to have health insurance. She never once told me I wasn’t good enough to do it. Now she goes to shows wearing industrial-strength earplugs and tells strangers, ‘That’s my daughter.’ They did not ask. She does not care." },
                  { type: "p", text: "Eventually my family absorbed the rest of NSH. Astrid was immediate. Forrest required feeding from a respectful distance like a suspicious woodland animal. Jett got interrogated by approximately six uncles." },
                  { type: "p", text: "Roman made one critical mistake. He helped Dad carry folding tables. Once. This was years ago. He has been assigned setup duties at every Gutierrez gathering since. There is no appeals process." }
                ]
              },
              {
                label: "EXES & BAD DECISIONS",
                title: "Why Does Everybody Else Get a Narrator?",
                blocks: [
                  { type: "p", text: "Excuse me. Why does everybody else get a narrator and I get a fucking deposition? Fine. I’ve dated. I’ve hooked up. I’ve made excellent choices. I’ve made choices Astrid responded to with: ‘Absolutely fucking not.’" },
                  { type: "p", text: "I’ve dated men. I’ve dated women. I’ve dated somebody from a rival band. I’ve slept with a bartender and received suspiciously generous pours for approximately six months afterward. There is one vacation romance who still sends me birthday messages." },
                  { type: "p", text: "I once hooked up with somebody because they complimented my thighs correctly. Correctly is important." },
                  { type: "p", text: "And yes, there is one actual Ex. We loved each other. We were also fucking terrible together. Those statements can coexist. Sometimes somebody can matter enormously and still not belong in your life forever. Look at me being emotionally healthy. Disgusting." },
                  { type: "note", text: "I maintain a ranking system for exes based primarily on whether I’d trust them to feed my hypothetical cat. No, you cannot see it." }
                ]
              },
              {
                label: "A STORY DOLLY SWEARS IS TRUE",
                title: "The Drum Stool Incident",
                blocks: [
                  { type: "p", text: "Apparently I am not allowed to submit my own evidence, so the band was consulted. This was a mistake." },
                  { type: "p", text: "Early NSH show. Tiny venue. My drum stool broke mid-song. I finished the fucking song anyway. Afterward, I carried the stool outside and threw it into a dumpster. The dumpster rolled downhill. That is the entire story." },
                  { type: "quote", text: "Roman: ‘It moved maybe ten feet.’ Astrid: ‘Twenty.’ Forrest: ‘It hit a car.’ Jett: ‘It hit a cop car.’" },
                  { type: "p", text: "There was NO FUCKING COP CAR." },
                  { type: "note", text: "JETT: ‘That’s what Big Drum wants you to believe.’" }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "glass-teeth",
      short: "GT",
      name: "Glass Teeth",
      image: "assets/photos/glass-teeth-loft-rehearsal.webp",
      imageAlt: "All four members of Glass Teeth gathered among instruments and road cases in their rehearsal loft",
      desk: "THE SHARP EDGE",
      years: "ARCHIVE: 2015—2026",
      pullQuote: "Cold architecture, live current, and four people making control sound dangerous.",
      summary: "Chicago dark post-punk and industrial rock built from angular guitars, distorted melodic bass, electronic percussion, field recordings, and the uncomfortable silence after the last note.",
      irisNote: "The press calls them clinical. The press has never watched them load out at three in the morning.",
      members: [
        {
          id: "noah-bellamy",
          name: "Noah Bellamy",
          image: "assets/photos/noah-bellamy.webp",
          imageAlt: "Backstage studio portrait of Noah Bellamy with tousled black hair and a pale streak, wearing layered black clothing",
          imagePosition: "50% 30%",
          age: "30",
          role: "Lead vocals / synth / rhythm guitar / lyricist",
          marker: "HEART / OPEN CIRCUIT",
          deck: "A smoky voice, a private nature, and the deeply inconvenient habit of meaning exactly what he says.",
          bio: "Noah writes about grief, dependency, shame, desire, and abandonment without turning any of it into spectacle. Onstage he is intimate enough to make a warehouse feel small. Offstage he is gentle, sincere, and much harder to move than that gentleness suggests.",
          facts: ["Low tenor / high baritone", "Primary lyricist", "Hates invasive fame", "Firm moral spine"],
          iris: "The camera likes him. He does not especially like the camera back.",
          spoilers: {
            code: "GT-NB // FILE 01",
            files: [
              {
                label: "ORIGIN FILE",
                title: "The Kitchen Light Was Never About a Lover",
                blocks: [
                  { type: "p", text: "Fans spent years assuming Window Seat, Emergency Contact, and half of Housefire Etiquette were breakup songs. They weren’t." },
                  { type: "p", text: "Noah and Axel grew up with parents struggling with addiction, cycling between promises, brief sobriety, disappearance, and relapse. Noah learned very young to become the easiest child in the room. He cooked. Waited. Explained things away." },
                  { type: "p", text: "At thirteen, he really did sit by a window waiting for a parent who had promised they’d come home. That became Window Seat. Noah has never publicly confirmed it. Axel knows exactly what the song means, which is why they almost never play it." },
                  { type: "quote", text: "Some fans think Noah touches his necklace before performing it because the song is romantic. It isn’t." }
                ]
              },
              {
                label: "DAMAGE REPORT",
                title: "The Relationships Nobody Got an Album About",
                blocks: [
                  { type: "p", text: "Noah has had actual relationships, including one serious enough to matter deeply, but contrary to fan mythology, not every Glass Teeth song documents the corpse of Noah Bellamy’s love life." },
                  { type: "p", text: "His worst romantic habit isn’t dramatic betrayal. It’s staying too long. Explaining too much. Convincing himself that because he understands why somebody hurts him, he shouldn’t be angry about being hurt." },
                  { type: "quote", text: "You forgive people before they apologize." },
                  { type: "p", text: "That stuck. It’s part of why current Noah is much better at saying no—and why his next relationship is going to get a significantly less self-sacrificing version of him." }
                ]
              },
              {
                label: "INCIDENT LOG",
                title: "The Poisonous Animal Problem",
                blocks: [
                  { type: "p", text: "Years ago, Glass Teeth were stopped somewhere on tour when Noah found an injured animal near the venue. Nobody agrees anymore whether it was a snake, weird insect, enormous spider, or some other locally horrifying creature." },
                  { type: "quote", text: "Noah: “I think it’s scared.” Axel: “So am I. Move.”" },
                  { type: "p", text: "This is the origin of the band’s unanimous answer whenever they’re asked who would die first in the wilderness: Noah. Not because he’s helpless. Because he would absolutely attempt diplomacy with wildlife." }
                ]
              }
            ]
          }
        },
        {
          id: "axel-bellamy",
          name: "Axel Bellamy",
          image: "assets/photos/axel-bellamy.webp",
          imageAlt: "Backstage portrait of Axel Bellamy seated in front of his drum kit with drumsticks in hand",
          imagePosition: "50% 28%",
          age: "32–33",
          role: "Drums / electronic percussion / sampling",
          marker: "STRUCTURE / LOAD-BEARING WALL",
          deck: "Hyper-competent, profoundly unsentimental about appearances, and always listening for the thing about to fail.",
          bio: "Axel builds the band's physical framework through drums, electronic percussion, live sequencing, and absolute refusal to let a weak system remain weak. His anger gets colder instead of louder. His care arrives as preparation.",
          facts: ["Noah's older brother", "Scarred working hands", "Live sequencing", "Will fix it before asking who broke it"],
          iris: "I have fourteen photos of him repairing things and one of him willingly posing.",
          spoilers: {
            code: "GT-AB // FILE 02",
            files: [
              {
                label: "ORIGIN FILE",
                title: "The Kid Who Said ‘We’re Fine’",
                blocks: [
                  { type: "p", text: "Axel grew up faster than Noah. Food. Bills. Emergency money. Knowing which neighbors were safe. Knowing when neither parent should be allowed behind a wheel. Knowing exactly how much truth he could tell an adult without risking being separated from his brother." },
                  { type: "quote", text: "His most practiced childhood lie was: ‘We’re fine.’" },
                  { type: "p", text: "Adult Axel is considerably angrier about their childhood than he was while living through it, because adulthood gave him enough distance to realize: I was fourteen." },
                  { type: "p", text: "A lot of his obsessive preparedness still comes from that kid—the batteries, the money, the stocked cupboards, the locks checked twice, and the belief that if he anticipates enough possible disasters, nobody else will have to." }
                ]
              },
              {
                label: "DAMAGE REPORT",
                title: "Axel Bellamy Has, In Fact, Dated People",
                blocks: [
                  { type: "p", text: "A shocking revelation to approximately half the fandom. Axel is bisexual and has had serious relationships with both men and women." },
                  { type: "p", text: "His problem has never been an inability to love somebody. It’s that he quietly begins taking responsibility for their entire life. If they have a problem, he fixes it. If they’re upset, he anticipates it. If something goes wrong, he assumes he should have prevented it." },
                  { type: "quote", text: "One ex: ‘I don’t need you to keep me alive.’ Axel: ‘I know.’ He did not, at the time, actually know." },
                  { type: "p", text: "He’s working on it. His biggest weakness remains competent people telling him, ‘I’ve got it.’ Fatal. Absolutely fatal." }
                ]
              },
              {
                label: "INCIDENT LOG",
                title: "Happy Birthday Asshole",
                blocks: [
                  { type: "p", text: "A bakery once misheard an order for HAPPY BIRTHDAY AXEL and delivered a cake reading HAPPY BIRTHDAY ASSHOLE." },
                  { type: "p", text: "Axel laughed hard enough that he had to sit down. It has now been years. Every single Axel Bellamy birthday cake still says HAPPY BIRTHDAY ASSHOLE." },
                  { type: "quote", text: "Fans do not know. The band intends to die with this information." }
                ]
              }
            ]
          }
        },
        {
          id: "niamh-kelleher",
          name: "Niamh Kelleher",
          image: "assets/photos/niamh-kelleher.webp",
          imageAlt: "Studio portrait of Niamh Kelleher with dark auburn hair, one bleached panel, green eyes, and traditional tattoos",
          imagePosition: "50% 28%",
          age: "Early 30s",
          role: "Lead guitar / programmer / producer / co-arranger",
          marker: "THE BLADE / SONIC ARCHITECT",
          deck: "Cork-born, Chicago-forged, musically obsessive, and capable of making a broken machine sound accusatory.",
          bio: "Niamh is the band's sharp edge: dark auburn hair with one bleached panel, moss-green eyes, dense traditional tattoos, silver piercings, and a studio vocabulary built from alternate tunings, prepared guitar, feedback, field recordings, synths, and damaged tape.",
          facts: ["From Cork, Ireland", "Producer / gear menace", "Accent thickens under stress", "Severe cable problem"],
          iris: "She knows when I crop around somebody. She never asks who.",
          spoilers: {
            code: "GT-NK // FILE 03",
            files: [
              {
                label: "ORIGIN FILE",
                title: "Nobody Asked Where She Wanted to Stay",
                blocks: [
                  { type: "p", text: "Niamh was sixteen when her parents’ marriage collapsed. Her American mother decided to return to Chicago. Her father remained in Cork. Her older brother Finn, already nineteen, stayed too. Niamh went to America." },
                  { type: "p", text: "What she remembers most isn’t the divorce. It’s that everyone seemed to make a decision about where they belonged except her. She spent years furious with her mother for taking her away, hurt by Finn for staying, and unable to admit how badly she’d wanted someone to simply ask: Where do you want to be?" },
                  { type: "quote", text: "Finn: ‘I thought if I asked you to stay, you’d stay for me.’ Niamh: ‘I would’ve.’ That’s why he didn’t ask." },
                  { type: "p", text: "That is why adult Niamh gets particularly vicious when she feels like someone is making decisions for her." }
                ]
              },
              {
                label: "DAMAGE REPORT",
                title: "The Jett Maddox File",
                warning: "YOU HAVE BEEN WARNED. THIS ONE IS A FUCKING DISASTER.",
                blocks: [
                  { type: "p", text: "Niamh and Jett were together for roughly three years. And unfortunately? They were once really good together. Music friends first. Gear nerds. Constant arguing. First kiss during an argument. Eventually domestic enough that Niamh’s belongings simply colonized Jett’s apartment." },
                  { type: "p", text: "Then fame started pulling everything tight: career comparisons, missed shows, people reducing Niamh to ‘Jett Maddox’s girlfriend,’ Jett needing immediate emotional resolution, and Niamh responding to vulnerability by becoming colder and more controlled." },
                  { type: "quote", text: "Jett: ‘You don’t know how to love anything you can’t control.’ Niamh: ‘And you don’t know how to love anything that doesn’t need saving.’" },
                  { type: "quote", text: "Jett: ‘At least people know how to stay when they’re with me.’" },
                  { type: "p", text: "Niamh told him to get out. Neither technically said we’re done. They just never came back." },
                  { type: "p", text: "Years later, they genuinely hate each other. On extremely rare occasions, this has still somehow resulted in them making out. Nobody outside a very small circle knows that. They’re not secretly in love—which honestly makes it more embarrassing." }
                ]
              },
              {
                label: "INCIDENT LOG",
                title: "The Bathtub Photograph",
                blocks: [
                  { type: "p", text: "Early Glass Teeth tour. No money. Four exhausted musicians sleeping in the apartment of someone they barely knew. Noah folded into a chair. Axel on the floor. Elijah under a child’s dinosaur blanket." },
                  { type: "p", text: "Niamh? Asleep in the bathtub. Fully clothed. Leather jacket used as a pillow." },
                  { type: "quote", text: "Niamh claims: ‘It was the quietest room.’" },
                  { type: "p", text: "Someone took a photograph. It still exists. Every member of Glass Teeth possesses a copy. Nobody will release it because everyone looks equally horrible. Mutually assured destruction." }
                ]
              }
            ]
          }
        },
        {
          id: "elijah-dizon",
          name: "Elijah Dizon",
          image: "assets/photos/elijah-dizon.webp",
          imageAlt: "Backstage loading-alley portrait of Elijah Dizon with wet black hair, piercings, and tattooed arms",
          imagePosition: "50% 27%",
          age: "30",
          role: "Bass / backing vocals",
          marker: "THE SHIELD / LIVE WIRE",
          deck: "Warm, perceptive, spectacularly funny, and one bad decision away from making disrespect a physical problem.",
          bio: "Elijah gives Glass Teeth its distorted melodic weight. A Filipino-American Chicago native with a big presence and bigger protective instincts, he reads a room fast, loves his people loudly, and is learning that being right does not make every escalation useful.",
          facts: ["Filipino-American", "Chicago native", "Melodic distorted bass", "Food is care"],
          iris: "He is the easiest person to photograph laughing and the hardest to photograph pretending not to care.",
          spoilers: {
            code: "GT-ED // FILE 04",
            files: [
              {
                label: "ORIGIN FILE",
                title: "‘I Know. We Were Still Scared.’",
                blocks: [
                  { type: "p", text: "Elijah grew up in a loving Chicago family. That’s important. His father, Ren, showed up, worked, fixed things, and loved his children. He also had a terrible temper. He yelled. Slammed cabinets. Sometimes hit walls or threw things. Never Elijah. Never his sisters. But everyone knew when Ren was angry because the entire room changed around him." },
                  { type: "p", text: "Years later, after Elijah developed a temper of his own, he confronted his father." },
                  { type: "quote", text: "Ren: ‘I never hit you.’ Elijah: ‘I know. We were still scared.’" },
                  { type: "p", text: "It changed both of them. Ren eventually began confronting his own behavior. Elijah did too. That’s why present-day Elijah takes anger management so seriously. His deepest fear isn’t losing a fight. It’s becoming somebody the people he loves have to manage." }
                ]
              },
              {
                label: "DAMAGE REPORT",
                title: "The One Where Nobody Was the Villain",
                blocks: [
                  { type: "p", text: "Elijah’s most recent serious relationship ended around a year before the current story. No cheating. No betrayal. No enormous screaming match. They loved each other." },
                  { type: "p", text: "His partner needed a life with more stability. Glass Teeth was recording Pressure Language and preparing for another enormous touring cycle. Neither person could become what the other needed without resenting it. So they ended it. Kindly. Elijah hated this." },
                  { type: "quote", text: "He understands: ‘They hurt me. I’m angry.’ He found ‘We love each other and this still doesn’t work’ significantly harder." },
                  { type: "p", text: "They occasionally still send each other birthday messages. No secret affair. No hidden reunion. Just one of the relationships that taught Elijah that sometimes love and compatibility are two completely different questions." }
                ]
              },
              {
                label: "INCIDENT LOG",
                title: "The German Traffic Cone Affair",
                blocks: [
                  { type: "p", text: "Nobody will explain this properly. During a European tour, Elijah and Niamh disappeared from the hotel after midnight. They returned at approximately 6:30 a.m. carrying one traffic cone, one disposable camera, and absolutely no usable explanation." },
                  { type: "quote", text: "Benji: ‘Where did the traffic cone come from?’ Elijah: ‘Outside.’ Benji: ‘Everything is outside.’ Niamh: ‘Then you’ve solved it.’" },
                  { type: "p", text: "The cone somehow returned to Chicago. It has since moved rehearsal spaces twice. Someone wrote GLASS TEETH PROPERTY on it. Claudia has attempted to throw it away. The band collectively refuses. It is now an artifact." }
                ]
              }
            ]
          }
        }
      ]
    }
  ],

  dispatches: [
    {
      id: "dead-air",
      label: "LATE-NIGHT TRANSMISSION",
      title: "Dead Air",
      image: "assets/photos/miles-stream-room.webp",
      imageAlt: "Miles Reyes sitting at his late-night streaming desk surrounded by tattoo art, books, candles, and recording equipment",
      imagePosition: "50% 36%",
      subtitle: "The red light is on. Miles Reyes is pretending this is normal.",
      copy: "Streams after closing, chat moving too fast, ink still on his hands. DeadAirMiles is the online half of a life built between a tattoo machine and a camera—warmer, funnier, and far less anonymous than the handle suggests.",
      pull: "He calls it dead air. Thousands of people keep showing up to listen.",
      notes: ["MILES REYES / 32", "VARIETY STREAMER", "MEXICAN-AMERICAN", "AFTER MIDNIGHT"]
    },
    {
      id: "good-company",
      label: "SHOP NOTES",
      title: "Good Company",
      subtitle: "Good tattoos. Better company.",
      copy: "Miles Reyes's warm-industrial tattoo shop is full of art, plants, old furniture, clean steel, and the kind of regulars who stopped pretending they only came for appointments. Tessa Nguyen runs the floor, the piercings, and occasionally Miles's remaining common sense.",
      pull: "A tattoo shop for people who need somewhere to stay after the stencil comes off.",
      notes: ["OWNER: MILES REYES", "SHOP MANAGER: TESSA NGUYEN", "WARM INDUSTRIAL", "APPOINTMENT BOOK: FULL"]
    },
    {
      id: "rory",
      label: "PERSON OF INTEREST",
      title: "Rory Deveraux",
      subtitle: "Blue-black hair, mismatched eyes, chipped polish, no clean answers.",
      copy: "Rory is five-foot-two inches of soft-alt menace: silver-gray right eye, vivid green left, heavily layered wolf cut, smudged liner, silver hardware, and black-and-gray ink. She likes looking a little ruined. The operative word is looking.",
      pull: "Photograph her like she already knows what the caption will get wrong.",
      notes: ["27", "HETEROCHROMIA", "TATTOOED / PIERCED", "RESTING EXPRESSION: UNIMPRESSED"]
    }
  ],

  archive: [
    {
      id: "fg-001", image: "assets/photos/nsh-cleveland-gas-station.webp",
      imageAlt: "No Saints Here exhausted beside their van at a wet gas station late at night, with Roman in the foreground and Jett fixing a cable",
      band: "No Saints Here", place: "Cleveland", year: "2019",
      title: "Twenty-six hours awake",
      caption: "Roman had been awake for twenty-six hours. Jett broke the same cable twice. Astrid threatened to leave them all at the gas station.",
      note: "this was not, despite three interviews claiming otherwise, detroit."
    },
    {
      id: "fg-002", image: "assets/photos/glass-teeth-before-warehouse.webp",
      imageAlt: "Glass Teeth gathered in a dim rehearsal room while Niamh repairs a guitar pedal and Noah holds the flashlight",
      band: "Glass Teeth", place: "Chicago", year: "2016",
      title: "Before the warehouse video",
      caption: "Niamh on the floor with three pedals open. Noah holding the flashlight wrong. Axel choosing not to comment.",
      note: "elijah arrived with coffee and stayed for a decade."
    },
    {
      id: "fg-003", image: "assets/photos/nsh-glass-teeth-same-hallway.webp",
      imageAlt: "Members of No Saints Here and Glass Teeth crowded together in a narrow, battered backstage hallway",
      band: "NSH × GT", place: "Milwaukee", year: "2018",
      title: "Same terrible hallway",
      caption: "Two bands, one broken green-room lock, and a rivalry nobody had started marketing yet.",
      note: "look at the jacket behind niamh. then mind your business."
    },
    {
      id: "fg-004", image: "assets/photos/nsh-four-in-the-morning.webp",
      imageAlt: "Dolly perched on a washing machine while Forrest tunes a guitar in an empty fluorescent laundromat late at night",
      band: "No Saints Here", place: "Unknown motel", year: "2020",
      title: "Four in the morning",
      caption: "Dolly on a washing machine. Forrest tuning under fluorescent light. Nobody remembers who took the room key.",
      note: "negative was stuck to a diner receipt. very professional archive."
    },
    {
      id: "fg-005", image: "assets/photos/glass-teeth-no-clean-signal.webp",
      imageAlt: "Glass Teeth in a cluttered late-night studio while Niamh works on a smoking power supply amid tape reels and coffee cups",
      band: "Glass Teeth", place: "Kelleher's Studio", year: "2024",
      title: "No clean signal",
      caption: "Tape loops, coffee rings, a baritone guitar, and the exact moment the power supply started smoking.",
      note: "niamh says it was supposed to do that. it was not."
    },
    {
      id: "fg-006", image: "assets/photos/miles-horror-stream.webp", band: "Dead Air", place: "Good Company", year: "2026",
      imageAlt: "Screenshot of Miles Reyes calmly streaming a haunted-house horror game while the chat panics",
      title: "Not even flinching",
      caption: "Chat is losing its mind. Miles is walking toward the haunted hallway on purpose.",
      note: "screenshot from a horror stream. how is this man never scared?"
    }
  ]
};

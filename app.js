'use strict';

window.onerror = function(msg, url, line, col, error) {
  console.error("GLOBAL ERROR DETECTED:", msg, "at line", line, "col", col, error);
  alert("Error: " + msg + "\nLine: " + line + "\nStack: " + (error ? error.stack : ""));
  return false;
};
/* ═══════════════════════════════════════════════════════════════
   WILDVISION — WILDLIFE IDENTIFICATION CHAMPIONSHIP
   300 species · Mammals · Birds · Reptiles · Amphibians · Marine · Insects
   ═══════════════════════════════════════════════════════════════ */
const ANIMALS = [
  {id:107, name:"Poison Dart Frog         ", category:"Amphibian ", image:"images/107.jpg", wiki:"Dyeing poison dart frog"},
  {id:108, name:"Axolotl                  ", category:"Amphibian ", image:"images/108.jpg", wiki:"Axolotl"},
  {id:109, name:"Fire Salamander          ", category:"Amphibian ", image:"images/109.jpg", wiki:"Fire salamander"},
  {id:110, name:"American Bullfrog        ", category:"Amphibian ", image:"images/110.jpg", wiki:"American bullfrog"},
  {id:111, name:"Toad                     ", category:"Amphibian ", image:"images/111.jpg", wiki:"Common toad"},
  {id:112, name:"Newt                     ", category:"Amphibian ", image:"images/112.jpg", wiki:"Smooth newt"},
  {id:113, name:"Tiger Salamander         ", category:"Amphibian ", image:"images/113.jpg", wiki:"Tiger salamander"},
  {id:66 , name:"Bald Eagle               ", category:"Bird      ", image:"images/066.jpg", wiki:"Bald eagle"},
  {id:67 , name:"Snowy Owl                ", category:"Bird      ", image:"images/067.jpg", wiki:"Snowy owl"},
  {id:68 , name:"Barn Owl                 ", category:"Bird      ", image:"images/068.jpg", wiki:"Barn owl"},
  {id:69 , name:"Flamingo                 ", category:"Bird      ", image:"images/069.jpg", wiki:"Greater flamingo"},
  {id:70 , name:"Peacock                  ", category:"Bird      ", image:"images/070.jpg", wiki:"Indian peafowl"},
  {id:71 , name:"Toucan                   ", category:"Bird      ", image:"images/071.jpg", wiki:"Toco toucan"},
  {id:72 , name:"Scarlet Macaw            ", category:"Bird      ", image:"images/072.jpg", wiki:"Scarlet macaw"},
  {id:73 , name:"Penguin                  ", category:"Bird      ", image:"images/073.jpg", wiki:"Penguin"},
  {id:74 , name:"Ostrich                  ", category:"Bird      ", image:"images/074.jpg", wiki:"Common ostrich"},
  {id:75 , name:"Emu                      ", category:"Bird      ", image:"images/075.jpg", wiki:"Emu"},
  {id:76 , name:"Kiwi                     ", category:"Bird      ", image:"images/076.jpg", wiki:"North Island brown kiwi"},
  {id:77 , name:"Kingfisher               ", category:"Bird      ", image:"images/077.jpg", wiki:"Common kingfisher"},
  {id:78 , name:"Pelican                  ", category:"Bird      ", image:"images/078.jpg", wiki:"Great white pelican"},
  {id:79 , name:"Hummingbird              ", category:"Bird      ", image:"images/079.jpg", wiki:"Ruby-throated hummingbird"},
  {id:80 , name:"Swan                     ", category:"Bird      ", image:"images/080.jpg", wiki:"Mute swan"},
  {id:81 , name:"Duck                     ", category:"Bird      ", image:"images/081.jpg", wiki:"Mallard"},
  {id:82 , name:"Goose                    ", category:"Bird      ", image:"images/082.jpg", wiki:"Canada goose"},
  {id:83 , name:"Rooster                  ", category:"Bird      ", image:"images/083.jpg", wiki:"Rooster"},
  {id:84 , name:"Turkey                   ", category:"Bird      ", image:"images/084.jpg", wiki:"Wild turkey"},
  {id:85 , name:"Seagull                  ", category:"Bird      ", image:"images/085.jpg", wiki:"European herring gull"},
  {id:86 , name:"Falcon                   ", category:"Bird      ", image:"images/086.jpg", wiki:"Peregrine falcon"},
  {id:87 , name:"Parrot                   ", category:"Bird      ", image:"images/087.jpg", wiki:"Grey parrot"},
  {id:88 , name:"Puffin                   ", category:"Bird      ", image:"images/088.jpg", wiki:"Atlantic puffin"},
  {id:89 , name:"Woodpecker               ", category:"Bird      ", image:"images/089.jpg", wiki:"Great spotted woodpecker"},
  {id:90 , name:"Pigeon                   ", category:"Bird      ", image:"images/090.jpg", wiki:"Rock dove"},
  {id:163, name:"Cassowary                ", category:"Bird      ", image:"images/163.jpg", wiki:"Cassowary"},
  {id:164, name:"Shoebill                 ", category:"Bird      ", image:"images/164.jpg", wiki:"Shoebill"},
  {id:165, name:"Hornbill                 ", category:"Bird      ", image:"images/165.jpg", wiki:"Hornbill"},
  {id:166, name:"Albatross                ", category:"Bird      ", image:"images/166.jpg", wiki:"Albatross"},
  {id:167, name:"Stork                    ", category:"Bird      ", image:"images/167.jpg", wiki:"Stork"},
  {id:168, name:"Spoonbill                ", category:"Bird      ", image:"images/168.jpg", wiki:"Spoonbill"},
  {id:169, name:"Vulture                  ", category:"Bird      ", image:"images/169.jpg", wiki:"Vulture"},
  {id:170, name:"Quail                    ", category:"Bird      ", image:"images/170.jpg", wiki:"Common quail"},
  {id:171, name:"Secretary Bird           ", category:"Bird      ", image:"images/171.jpg", wiki:"Secretarybird"},
  {id:172, name:"Quetzal                  ", category:"Bird      ", image:"images/172.jpg", wiki:"Resplendent quetzal"},
  {id:126, name:"Monarch Butterfly        ", category:"Insect    ", image:"images/126.jpg", wiki:"Monarch butterfly"},
  {id:127, name:"Honeybee                 ", category:"Insect    ", image:"images/127.jpg", wiki:"Honey bee"},
  {id:128, name:"Ladybug                  ", category:"Insect    ", image:"images/128.jpg", wiki:"Coccinellidae"},
  {id:129, name:"Praying Mantis           ", category:"Insect    ", image:"images/129.jpg", wiki:"European mantis"},
  {id:130, name:"Tarantula                ", category:"Insect    ", image:"images/130.jpg", wiki:"Tarantula"},
  {id:132, name:"Grasshopper              ", category:"Insect    ", image:"images/132.jpg", wiki:"Grasshopper"},
  {id:133, name:"Dragonfly                ", category:"Insect    ", image:"images/133.jpg", wiki:"Dragonfly"},
  {id:1  , name:"Lion                     ", category:"Mammal    ", image:"images/001.jpg", wiki:"Lion"},
  {id:2  , name:"Tiger                    ", category:"Mammal    ", image:"images/002.jpg", wiki:"Tiger"},
  {id:3  , name:"Cheetah                  ", category:"Mammal    ", image:"images/003.jpg", wiki:"Cheetah"},
  {id:4  , name:"Jaguar                   ", category:"Mammal    ", image:"images/004.jpg", wiki:"Jaguar"},
  {id:5  , name:"Leopard                  ", category:"Mammal    ", image:"images/005.jpg", wiki:"Leopard"},
  {id:6  , name:"Snow Leopard             ", category:"Mammal    ", image:"images/006.jpg", wiki:"Snow leopard"},
  {id:7  , name:"Cougar                   ", category:"Mammal    ", image:"images/007.jpg", wiki:"Cougar"},
  {id:8  , name:"Gray Wolf                ", category:"Mammal    ", image:"images/008.jpg", wiki:"Wolf"},
  {id:9  , name:"Red Fox                  ", category:"Mammal    ", image:"images/009.jpg", wiki:"Red fox"},
  {id:10 , name:"Arctic Fox               ", category:"Mammal    ", image:"images/010.jpg", wiki:"Arctic fox"},
  {id:11 , name:"Fennec Fox               ", category:"Mammal    ", image:"images/011.jpg", wiki:"Fennec fox"},
  {id:12 , name:"Brown Bear               ", category:"Mammal    ", image:"images/012.jpg", wiki:"Brown bear"},
  {id:13 , name:"Polar Bear               ", category:"Mammal    ", image:"images/013.jpg", wiki:"Polar bear"},
  {id:14 , name:"Giant Panda              ", category:"Mammal    ", image:"images/014.jpg", wiki:"Giant panda"},
  {id:15 , name:"Sloth Bear               ", category:"Mammal    ", image:"images/015.jpg", wiki:"Sloth bear"},
  {id:16 , name:"African Elephant         ", category:"Mammal    ", image:"images/016.jpg", wiki:"African bush elephant"},
  {id:17 , name:"Asian Elephant           ", category:"Mammal    ", image:"images/017.jpg", wiki:"Asian elephant"},
  {id:18 , name:"Rhinoceros               ", category:"Mammal    ", image:"images/018.jpg", wiki:"Rhinoceros"},
  {id:19 , name:"Hippopotamus             ", category:"Mammal    ", image:"images/019.jpg", wiki:"Hippopotamus"},
  {id:20 , name:"Giraffe                  ", category:"Mammal    ", image:"images/020.jpg", wiki:"Giraffe"},
  {id:21 , name:"Zebra                    ", category:"Mammal    ", image:"images/021.jpg", wiki:"Plains zebra"},
  {id:22 , name:"Chimpanzee               ", category:"Mammal    ", image:"images/022.jpg", wiki:"Chimpanzee"},
  {id:23 , name:"Gorilla                  ", category:"Mammal    ", image:"images/023.jpg", wiki:"Western gorilla"},
  {id:24 , name:"Orangutan                ", category:"Mammal    ", image:"images/024.jpg", wiki:"Bornean orangutan"},
  {id:25 , name:"Ring-tailed Lemur        ", category:"Mammal    ", image:"images/025.jpg", wiki:"Ring-tailed lemur"},
  {id:26 , name:"Moose                    ", category:"Mammal    ", image:"images/026.jpg", wiki:"Moose"},
  {id:27 , name:"Reindeer                 ", category:"Mammal    ", image:"images/027.jpg", wiki:"Reindeer"},
  {id:28 , name:"American Bison           ", category:"Mammal    ", image:"images/028.jpg", wiki:"American bison"},
  {id:29 , name:"Kangaroo                 ", category:"Mammal    ", image:"images/029.jpg", wiki:"Kangaroo"},
  {id:30 , name:"Red Kangaroo             ", category:"Mammal    ", image:"images/030.jpg", wiki:"Red kangaroo"},
  {id:31 , name:"Tree Kangaroo            ", category:"Mammal    ", image:"images/031.jpg", wiki:"Tree-kangaroo"},
  {id:32 , name:"Koala                    ", category:"Mammal    ", image:"images/032.jpg", wiki:"Koala"},
  {id:33 , name:"Platypus                 ", category:"Mammal    ", image:"images/033.jpg", wiki:"Platypus"},
  {id:34 , name:"Capybara                 ", category:"Mammal    ", image:"images/034.jpg", wiki:"Capybara"},
  {id:35 , name:"Sloth                    ", category:"Mammal    ", image:"images/035.jpg", wiki:"Pale-throated sloth"},
  {id:36 , name:"Anteater                 ", category:"Mammal    ", image:"images/036.jpg", wiki:"Anteater"},
  {id:37 , name:"Meerkat                  ", category:"Mammal    ", image:"images/037.jpg", wiki:"Meerkat"},
  {id:38 , name:"Honey Badger             ", category:"Mammal    ", image:"images/038.jpg", wiki:"Honey badger"},
  {id:44 , name:"Bactrian Camel           ", category:"Mammal    ", image:"images/044.jpg", wiki:"Bactrian camel"},
  {id:45 , name:"Llama                    ", category:"Mammal    ", image:"images/045.jpg", wiki:"Llama"},
  {id:46 , name:"Alpaca                   ", category:"Mammal    ", image:"images/046.jpg", wiki:"Alpaca"},
  {id:47 , name:"Red Panda                ", category:"Mammal    ", image:"images/047.jpg", wiki:"Red panda"},
  {id:48 , name:"Beaver                   ", category:"Mammal    ", image:"images/048.jpg", wiki:"North American beaver"},
  {id:49 , name:"Hedgehog                 ", category:"Mammal    ", image:"images/049.jpg", wiki:"European hedgehog"},
  {id:50 , name:"Squirrel                 ", category:"Mammal    ", image:"images/050.jpg", wiki:"Red squirrel"},
  {id:51 , name:"Chipmunk                 ", category:"Mammal    ", image:"images/051.jpg", wiki:"Eastern chipmunk"},
  {id:52 , name:"Raccoon                  ", category:"Mammal    ", image:"images/052.jpg", wiki:"Raccoon"},
  {id:53 , name:"Skunk                    ", category:"Mammal    ", image:"images/053.jpg", wiki:"Striped skunk"},
  {id:54 , name:"Yak                      ", category:"Mammal    ", image:"images/054.jpg", wiki:"Yak"},
  {id:55 , name:"Otter                    ", category:"Mammal    ", image:"images/055.jpg", wiki:"European otter"},
  {id:56 , name:"Echidna                  ", category:"Mammal    ", image:"images/056.jpg", wiki:"Short-beaked echidna"},
  {id:57 , name:"Wombat                   ", category:"Mammal    ", image:"images/057.jpg", wiki:"Wombat"},
  {id:58 , name:"Tasmanian Devil          ", category:"Mammal    ", image:"images/058.jpg", wiki:"Tasmanian devil"},
  {id:59 , name:"Opossum                  ", category:"Mammal    ", image:"images/059.jpg", wiki:"Virginia opossum"},
  {id:60 , name:"Mongoose                 ", category:"Mammal    ", image:"images/060.jpg", wiki:"Mongoose"},
  {id:61 , name:"Hyena                    ", category:"Mammal    ", image:"images/061.jpg", wiki:"Spotted hyena"},
  {id:62 , name:"Howler Monkey            ", category:"Mammal    ", image:"images/062.jpg", wiki:"Howler monkey"},
  {id:63 , name:"Spider Monkey            ", category:"Mammal    ", image:"images/063.jpg", wiki:"Spider monkey"},
  {id:64 , name:"Gibbon                   ", category:"Mammal    ", image:"images/064.jpg", wiki:"Gibbon"},
  {id:65 , name:"Baboon                   ", category:"Mammal    ", image:"images/065.jpg", wiki:"Hamadryas baboon"},
  {id:106, name:"Deer                     ", category:"Mammal    ", image:"images/106.jpg", wiki:"Deer"},
  {id:131, name:"Antelope                 ", category:"Mammal    ", image:"images/131.jpg", wiki:"Antelope"},
  {id:134, name:"Mandrill                 ", category:"Mammal    ", image:"images/134.jpg", wiki:"Mandrill"},
  {id:135, name:"Pangolin                 ", category:"Mammal    ", image:"images/135.jpg", wiki:"Pangolin"},
  {id:136, name:"Okapi                    ", category:"Mammal    ", image:"images/136.jpg", wiki:"Okapi"},
  {id:137, name:"Saiga Antelope           ", category:"Mammal    ", image:"images/137.jpg", wiki:"Saiga antelope"},
  {id:138, name:"Fossa                    ", category:"Mammal    ", image:"images/138.jpg", wiki:"Fossa (animal)"},
  {id:139, name:"Aye-aye                  ", category:"Mammal    ", image:"images/139.jpg", wiki:"Aye-aye"},
  {id:140, name:"Numbat                   ", category:"Mammal    ", image:"images/140.jpg", wiki:"Numbat"},
  {id:141, name:"Quokka                   ", category:"Mammal    ", image:"images/141.jpg", wiki:"Quokka"},
  {id:142, name:"Tarsier                  ", category:"Mammal    ", image:"images/142.jpg", wiki:"Tarsier"},
  {id:143, name:"Warthog                  ", category:"Mammal    ", image:"images/143.jpg", wiki:"Common warthog"},
  {id:144, name:"Wild Boar                ", category:"Mammal    ", image:"images/144.jpg", wiki:"Wild boar"},
  {id:145, name:"Aardvark                 ", category:"Mammal    ", image:"images/145.jpg", wiki:"Aardvark"},
  {id:146, name:"Armadillo                ", category:"Mammal    ", image:"images/146.jpg", wiki:"Nine-banded armadillo"},
  {id:147, name:"Porcupine                ", category:"Mammal    ", image:"images/147.jpg", wiki:"Porcupine"},
  {id:148, name:"Caracal                  ", category:"Mammal    ", image:"images/148.jpg", wiki:"Caracal"},
  {id:149, name:"Lynx                     ", category:"Mammal    ", image:"images/149.jpg", wiki:"Eurasian lynx"},
  {id:150, name:"Serval                   ", category:"Mammal    ", image:"images/150.jpg", wiki:"Serval"},
  {id:151, name:"Coyote                   ", category:"Mammal    ", image:"images/151.jpg", wiki:"Coyote"},
  {id:152, name:"Wolverine                ", category:"Mammal    ", image:"images/152.jpg", wiki:"Wolverine"},
  {id:153, name:"Sifaka                   ", category:"Mammal    ", image:"images/153.jpg", wiki:"Sifaka"},
  {id:154, name:"Markhor                  ", category:"Mammal    ", image:"images/154.jpg", wiki:"Markhor"},
  {id:155, name:"Takin                    ", category:"Mammal    ", image:"images/155.jpg", wiki:"Takin"},
  {id:156, name:"Kinkajou                 ", category:"Mammal    ", image:"images/156.jpg", wiki:"Kinkajou"},
  {id:157, name:"Ocelot                   ", category:"Mammal    ", image:"images/157.jpg", wiki:"Ocelot"},
  {id:158, name:"Tapir                    ", category:"Mammal    ", image:"images/158.jpg", wiki:"South American tapir"},
  {id:159, name:"Ibex                     ", category:"Mammal    ", image:"images/159.jpg", wiki:"Alpine ibex"},
  {id:160, name:"Dromedary Camel          ", category:"Mammal    ", image:"images/160.jpg", wiki:"Dromedary"},
  {id:161, name:"Chinchilla               ", category:"Mammal    ", image:"images/161.jpg", wiki:"Chinchilla"},
  {id:162, name:"Aardwolf                 ", category:"Mammal    ", image:"images/162.jpg", wiki:"Aardwolf"},
  {id:295, name:"African Wild Dog         ", category:"Mammal    ", image:"images/295.jpg", wiki:"African wild dog"},
  {id:296, name:"Nilgai                   ", category:"Mammal    ", image:"images/296.jpg", wiki:"Nilgai"},
  {id:297, name:"Gazelle                  ", category:"Mammal    ", image:"images/297.jpg", wiki:"Gazelle"},
  {id:298, name:"Red Deer                 ", category:"Mammal    ", image:"images/298.jpg", wiki:"Red deer"},
  {id:300, name:"Elk                      ", category:"Mammal    ", image:"images/300.jpg", wiki:"Elk"},
  {id:39 , name:"Whale                    ", category:"Marine    ", image:"images/039.jpg", wiki:"Blue whale"},
  {id:40 , name:"Whale                    ", category:"Marine    ", image:"images/040.jpg", wiki:"Humpback whale"},
  {id:41 , name:"Dolphin                  ", category:"Marine    ", image:"images/041.jpg", wiki:"Common bottlenose dolphin"},
  {id:42 , name:"Walrus                   ", category:"Marine    ", image:"images/042.jpg", wiki:"Walrus"},
  {id:43 , name:"Sea Otter                ", category:"Marine    ", image:"images/043.jpg", wiki:"Sea otter"},
  {id:114, name:"Great White Shark        ", category:"Marine    ", image:"images/114.jpg", wiki:"Great white shark"},
  {id:115, name:"Whale Shark              ", category:"Marine    ", image:"images/115.jpg", wiki:"Whale shark"},
  {id:116, name:"Hammerhead Shark         ", category:"Marine    ", image:"images/116.jpg", wiki:"Great hammerhead"},
  {id:117, name:"Manta Ray                ", category:"Marine    ", image:"images/117.jpg", wiki:"Giant oceanic manta ray"},
  {id:118, name:"Octopus                  ", category:"Marine    ", image:"images/118.jpg", wiki:"Giant Pacific octopus"},
  {id:119, name:"Giant Squid              ", category:"Marine    ", image:"images/119.jpg", wiki:"Giant squid"},
  {id:120, name:"Clownfish                ", category:"Marine    ", image:"images/120.jpg", wiki:"Clownfish"},
  {id:121, name:"Seahorse                 ", category:"Marine    ", image:"images/121.jpg", wiki:"Common seahorse"},
  {id:122, name:"Lionfish                 ", category:"Marine    ", image:"images/122.jpg", wiki:"Red lionfish"},
  {id:123, name:"Moray Eel                ", category:"Marine    ", image:"images/123.jpg", wiki:"Giant moray"},
  {id:124, name:"Starfish                 ", category:"Marine    ", image:"images/124.jpg", wiki:"Starfish"},
  {id:125, name:"Crab                     ", category:"Marine    ", image:"images/125.jpg", wiki:"Red king crab"},
  {id:174, name:"Seal                     ", category:"Marine    ", image:"images/174.jpg", wiki:"Harbor seal"},
  {id:175, name:"Manatee                  ", category:"Marine    ", image:"images/175.jpg", wiki:"Manatee"},
  {id:176, name:"Jellyfish                ", category:"Marine    ", image:"images/176.jpg", wiki:"Jellyfish"},
  {id:177, name:"Narwhal                  ", category:"Marine    ", image:"images/177.jpg", wiki:"Narwhal"},
  {id:91 , name:"Komodo Dragon            ", category:"Reptile   ", image:"images/091.jpg", wiki:"Komodo dragon"},
  {id:92 , name:"Crocodile                ", category:"Reptile   ", image:"images/092.jpg", wiki:"Nile crocodile"},
  {id:93 , name:"Alligator                ", category:"Reptile   ", image:"images/093.jpg", wiki:"American alligator"},
  {id:94 , name:"Gharial                  ", category:"Reptile   ", image:"images/094.jpg", wiki:"Gharial"},
  {id:95 , name:"Iguana                   ", category:"Reptile   ", image:"images/095.jpg", wiki:"Green iguana"},
  {id:96 , name:"Chameleon                ", category:"Reptile   ", image:"images/096.jpg", wiki:"Veiled chameleon"},
  {id:97 , name:"King Cobra               ", category:"Reptile   ", image:"images/097.jpg", wiki:"King cobra"},
  {id:98 , name:"Rattlesnake              ", category:"Reptile   ", image:"images/098.jpg", wiki:"Eastern diamondback rattlesnake"},
  {id:99 , name:"Gila Monster             ", category:"Reptile   ", image:"images/099.jpg", wiki:"Gila monster"},
  {id:100, name:"Sea Turtle               ", category:"Reptile   ", image:"images/100.jpg", wiki:"Green sea turtle"},
  {id:101, name:"Galápagos Tortoise       ", category:"Reptile   ", image:"images/101.jpg", wiki:"Galápagos tortoise"},
  {id:102, name:"Boa Constrictor          ", category:"Reptile   ", image:"images/102.jpg", wiki:"Boa constrictor"},
  {id:103, name:"Gecko                    ", category:"Reptile   ", image:"images/103.jpg", wiki:"Tokay gecko"},
  {id:104, name:"Box Turtle               ", category:"Reptile   ", image:"images/104.jpg", wiki:"Common box turtle"},
  {id:105, name:"Python                   ", category:"Reptile   ", image:"images/105.jpg", wiki:"Ball python"},
  {id:173, name:"Tuatara                  ", category:"Reptile   ", image:"images/173.jpg", wiki:"Tuatara"},
  {id:299, name:"Bearded Dragon           ", category:"Reptile   ", image:"images/299.jpg", wiki:"Eastern bearded dragon"},
  {id:301, name:"Wallaby                  ", category:"Mammal    ", image:"images/301.jpg", wiki:"Wallaby"},
  {id:302, name:"Capuchin Monkey          ", category:"Mammal    ", image:"images/302.jpg", wiki:"Capuchin monkey"},
  {id:303, name:"Emperor Tamarin          ", category:"Mammal    ", image:"images/303.jpg", wiki:"Emperor tamarin"},
  {id:304, name:"Bobcat                   ", category:"Mammal    ", image:"images/304.jpg", wiki:"Bobcat"},
  {id:305, name:"Ferret                   ", category:"Mammal    ", image:"images/305.jpg", wiki:"Ferret"},
  {id:306, name:"Binturong                ", category:"Mammal    ", image:"images/306.jpg", wiki:"Binturong"},
  {id:307, name:"Golden Eagle             ", category:"Bird      ", image:"images/307.jpg", wiki:"Golden eagle"},
  {id:308, name:"Hawk                     ", category:"Bird      ", image:"images/308.jpg", wiki:"Hawk"},
  {id:309, name:"Heron                    ", category:"Bird      ", image:"images/309.jpg", wiki:"Heron"},
  {id:310, name:"Osprey                   ", category:"Bird      ", image:"images/310.jpg", wiki:"Osprey"},
  {id:311, name:"Frilled Lizard           ", category:"Reptile   ", image:"images/311.jpg", wiki:"Frill-necked lizard"},
  {id:312, name:"Monitor Lizard           ", category:"Reptile   ", image:"images/312.jpg", wiki:"Monitor lizard"},
  {id:313, name:"Anaconda                 ", category:"Reptile   ", image:"images/313.jpg", wiki:"Anaconda"},
  {id:314, name:"Stingray                 ", category:"Marine    ", image:"images/314.jpg", wiki:"Stingray"},
  {id:315, name:"Tiger Shark              ", category:"Marine    ", image:"images/315.jpg", wiki:"Tiger shark"},
  {id:316, name:"Lobster                  ", category:"Marine    ", image:"images/316.jpg", wiki:"Lobster"},
  {id:317, name:"Cuttlefish               ", category:"Marine    ", image:"images/317.jpg", wiki:"Cuttlefish"},
];

/* ─────────────────────────────────────────
   APP STATE
───────────────────────────────────────── */
const S = {
  // Profile
  name: '', age: null, photo: 'images/cute_hyena.png',
  // Settings
  mode: 'explorer',   // default to explorer
  duration: 60,       // seconds
  // Quiz runtime
  queue: [], idx: 0, seen: 0, log: [],
  remaining: 0, timerId: null, isRunning: false,
  activeImg: 'a',     // 'a' | 'b'  — which <img> is currently showing
  // Records
  bests: {},
};

/* ─────────────────────────────────────────
   SEEDED PRNG (Mulberry32) + SHUFFLE
───────────────────────────────────────── */
function mulberry32(seed) {
  return () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, seed) {
  const a = [...arr];
  const rng = mulberry32(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─────────────────────────────────────────
   SCREEN NAVIGATION
───────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active', 'slide-in'));
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('active', 'slide-in');
}

/* ─────────────────────────────────────────
   PROFILE SCREEN
───────────────────────────────────────── */
function initProfile() {
  const nameIn  = document.getElementById('f-name');
  const btnCont = document.getElementById('btn-continue');
  const prevImg = document.getElementById('avatar-preview');

  // Lock cute hyena photo
  S.photo = 'images/cute_hyena.png';
  if (prevImg) {
    prevImg.src = S.photo;
    prevImg.style.display = 'block';
  }

  // Set dynamic question count badge
  const countBadge = document.getElementById('question-count-badge');
  if (countBadge) {
    countBadge.textContent = ANIMALS.length;
  }

  nameIn.addEventListener('input', () => {
    btnCont.disabled = nameIn.value.trim().length === 0;
    document.getElementById('name-err').textContent = '';
  });
  nameIn.addEventListener('keydown', e => { if (e.key === 'Enter' && !btnCont.disabled) toSettings(); });

  btnCont.addEventListener('click', toSettings);
}

function toSettings() {
  const v = document.getElementById('f-name').value.trim();
  if (!v) { document.getElementById('name-err').textContent = 'Please enter your name.'; return; }
  S.name = v;
  S.age  = null;
  // Load best scores
  try { S.bests = JSON.parse(localStorage.getItem('wv_bests') || '{}'); } catch (_) {}
  populateChip();
  refreshBestBanner();
  showScreen('screen-settings');
}

/* ─────────────────────────────────────────
   SETTINGS SCREEN
───────────────────────────────────────── */
function initSettings() {
  // Mode selection cards
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.mode-card').forEach(c => {
        c.classList.remove('selected', 'champ-mode');
        c.setAttribute('aria-pressed', 'false');
      });
      card.classList.add('selected');
      card.setAttribute('aria-pressed', 'true');
      S.mode = card.dataset.mode;
      if (S.mode === 'championship') {
        card.classList.add('champ-mode');
      }
    });
  });

  // Duration toggle
  document.querySelectorAll('.dur-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dur-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      S.duration = +btn.dataset.sec;
      refreshBestBanner();
    });
  });

  document.getElementById('btn-back').addEventListener('click', () => showScreen('screen-profile'));
  // btn-launch is wired to doCountdown in DOMContentLoaded
}

function populateChip() {
  const av   = document.getElementById('chip-av');
  const name = document.getElementById('chip-name');
  name.textContent = S.name;
  if (S.photo) {
    av.style.backgroundImage = `url(${S.photo})`;
    av.textContent = '';
  } else {
    av.style.backgroundImage = '';
    av.textContent = S.name[0].toUpperCase();
  }
}

function refreshBestBanner() {
  const banner = document.getElementById('best-banner');
  const b      = S.bests[S.duration] || 0;
  if (b > 0) {
    banner.style.display = 'flex';
    document.getElementById('best-val').textContent = b;
    document.getElementById('best-label').textContent = `in ${fmtDur(S.duration)}`;
  } else {
    banner.style.display = 'none';
  }
}

function fmtDur(sec) {
  if (sec < 60) return `${sec}s`;
  if (sec === 60) return '1 min';
  return `${sec / 60} min`;
}

/* ─────────────────────────────────────────
   COUNTDOWN  →  QUIZ
───────────────────────────────────────── */
function startCountdown() {
  showScreen('screen-countdown');
  const numEl = document.getElementById('countdown-num');
  const steps = ['3', '2', '1', 'GO!'];
  let i = 0;

  const tick = () => {
    numEl.textContent = steps[i];
    // re-trigger animation
    numEl.style.animation = 'none';
    void numEl.offsetWidth; // force reflow
    numEl.style.animation = '';
    i++;
    if (i < steps.length) {
      setTimeout(tick, i < steps.length ? 900 : 500);
    } else {
      setTimeout(startQuiz, 400);
    }
  };
  tick();
}

/* ─────────────────────────────────────────
   QUIZ ENGINE
───────────────────────────────────────── */

function buildQueue() {
  const pool = ANIMALS;
  const seed = Math.floor(Date.now() / 1000);
  const shuffled = seededShuffle(pool, seed);
  // Repeat to fill any duration
  let q = [];
  if (shuffled.length > 0) {
    while (q.length < 5000) {
      q = q.concat(shuffled);
    }
  }
  return q;
}

function startQuiz() {
  // Reset state
  S.queue = buildQueue();
  S.idx  = 0;
  S.seen = 0;
  S.log  = [];
  S.remaining = S.duration;
  S.isRunning = true;
  S.activeImg = 'a';
  if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }

  // Init HUD
  setHudBadge();
  updateCount();
  updateTimer();

  // Show quiz screen
  showScreen('screen-quiz');

  // Setup image crossfade state
  const imgA = document.getElementById('img-a');
  const imgB = document.getElementById('img-b');
  const loader = document.getElementById('img-loader');
  imgA.src = ''; imgA.classList.remove('faded');
  imgB.src = ''; imgB.classList.add('faded');
  loader.classList.remove('done');

  // Reset tap hint
  document.getElementById('tap-hint').classList.remove('gone');

  // Load first animal
  loadAnimal(S.idx);
  preload(S.idx + 1);
  preload(S.idx + 2);

  // Click handler on entire quiz arena
  const arena = document.getElementById('quiz-arena');
  arena.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') advance(); };

  // Start timer after 300ms buffer
  setTimeout(() => {
    S.timerId = setInterval(tickTimer, 30);
    arena.onclick = advance;
  }, 300);
}

function setHudBadge() {
  const badge = document.getElementById('hud-badge');
  if (S.mode === 'championship') {
    badge.textContent = 'Championship';
    badge.classList.add('champ');
  } else {
    badge.textContent = 'Explorer';
    badge.classList.remove('champ');
  }
}

function loadAnimal(idx) {
  const animal = S.queue[idx];
  if (!animal) return;

  // Set category badge
  const cat = document.getElementById('cat-badge');
  cat.textContent = animal.category;
  cat.className = `cat-badge cat-${animal.category}`;

  // Answer pill (Explorer mode only)
  const pill = document.getElementById('answer-pill');
  document.getElementById('answer-text').textContent = animal.name;
  pill.classList.toggle('show', S.mode === 'explorer');

  // Dom refs
  const loader = document.getElementById('img-loader');
  document.getElementById('loader-icon').textContent = categoryEmoji(animal.category);

  // Set kid-friendly category border color on card
  const stack = document.querySelector('.img-stack');
  if (stack) {
    const borderColors = {
      Mammal: '#ffd43b', // sunny yellow
      Bird: '#339af0', // blue
      Reptile: '#51cf66', // green
      Amphibian: '#7048e8', // indigo
      Marine: '#3bc9db', // teal
      Insect: '#faa2c1' // pink
    };
    stack.style.borderColor = borderColors[animal.category] || '#ff6b6b';
  }

  // Foreground A/B crossfade
  const imgA   = document.getElementById('img-a');
  const imgB   = document.getElementById('img-b');
  const bgA    = document.getElementById('img-bg-a');
  const bgB    = document.getElementById('img-bg-b');
  const nextFg = S.activeImg === 'a' ? imgA : imgB;
  const prevFg = S.activeImg === 'a' ? imgB : imgA;
  const nextBg = S.activeImg === 'a' ? bgA  : bgB;
  const prevBg = S.activeImg === 'a' ? bgB  : bgA;

  const newSrc = animal.image;
  const tmpImg = new Image();

  tmpImg.onload = () => {
    // Show foreground image (contained, centered)
    nextFg.src = newSrc;
    nextFg.classList.remove('faded');
    prevFg.classList.add('faded');
    // Show background blur layer
    nextBg.src = newSrc;
    nextBg.classList.remove('faded');
    prevBg.classList.add('faded');
    loader.classList.add('done');
    S.activeImg = S.activeImg === 'a' ? 'b' : 'a';
    S.loadFailures = 0; // Reset failures on success
  };

  tmpImg.onerror = () => {
    console.error('Failed to load image:', newSrc);
    S.loadFailures = (S.loadFailures || 0) + 1;
    if (S.loadFailures >= Math.min(S.queue.length, 50)) {
      console.error('All animal images failed to load. Aborting loop.');
      const loaderText = document.querySelector('.loader-text');
      if (loaderText) {
        loaderText.textContent = 'Error: Cannot load animal images!';
      }
      return;
    }
    // Image missing — silently skip to next animal without counting it
    S.idx = (S.idx + 1) % S.queue.length;
    setTimeout(() => {
      loadAnimal(S.idx);
    }, 0);
  };

  loader.classList.remove('done');
  tmpImg.src = newSrc;
}

function preload(idx) {
  if (idx < S.queue.length) {
    const img = new Image();
    img.src = S.queue[idx].image;
  }
}

function categoryEmoji(cat) {
  return { Mammal:'🦁', Bird:'🦅', Reptile:'🦎', Amphibian:'🐸', Marine:'🦈', Insect:'🦋' }[cat] || '🐾';
}

function advance() {
  if (!S.isRunning) return;
  const animal = S.queue[S.idx];
  if (animal) S.log.push(animal);
  S.seen++;
  S.idx = (S.idx + 1) % S.queue.length;
  updateCount();
  // Hide tap hint after first tap
  document.getElementById('tap-hint').classList.add('gone');
  loadAnimal(S.idx);
  preload(S.idx + 2);
}

function updateCount() {
  document.getElementById('hud-count-n').textContent = S.seen;
}

/* ─────────────────────────────────────────
   TIMER
───────────────────────────────────────── */
const CIRC = 113.097; // 2π × 18

function tickTimer() {
  if (!S.isRunning) return;
  S.remaining = Math.max(0, S.duration - (Date.now() - S._startTime) / 1000);
  updateTimer();
  if (S.remaining <= 0) endQuiz();
}

function updateTimer() {
  const timeEl = document.getElementById('hud-time');
  const ring   = document.getElementById('ring-fill');
  const secs   = S.remaining.toFixed(1);
  timeEl.textContent = secs;

  const pct    = S.remaining / S.duration;
  const offset = CIRC * (1 - pct);
  ring.style.strokeDashoffset = offset;

  if (pct < 0.2) {
    ring.setAttribute('class', 'ring-fill ring-danger');
    timeEl.className = 'hud-time danger';
  } else if (pct < 0.4) {
    ring.setAttribute('class', 'ring-fill ring-warn');
    timeEl.className = 'hud-time';
  } else {
    ring.setAttribute('class', 'ring-fill');
    timeEl.className = 'hud-time';
  }
}

function endQuiz() {
  S.isRunning = false;
  if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }

  // Detach event handlers
  const arena = document.getElementById('quiz-arena');
  arena.onclick = null;
  arena.onkeydown = null;

  buildResults();
}

/* ─────────────────────────────────────────
   RESULTS
 ───────────────────────────────────────── */
function buildResults() {
  const count   = S.seen;
  const dur     = S.duration;
  const perMin  = ((count / dur) * 60).toFixed(1);
  const avgSec  = count > 0 ? (dur / count).toFixed(1) : '—';

  // Trophy + message
  let emoji = '🌱', title = 'Keep Going!', sub = 'Every session sharpens your eye.';
  if (count >= 80)      { emoji = '🏆'; title = 'World Champion Level!';    sub = 'Extraordinary speed & recognition!'; }
  else if (count >= 60) { emoji = '🥇'; title = 'Championship Grade!';      sub = 'Elite-level wildlife identification.'; }
  else if (count >= 40) { emoji = '🥈'; title = 'Excellent Performance!';   sub = 'You\'re approaching championship pace.'; }
  else if (count >= 25) { emoji = '🥉'; title = 'Great Session!';           sub = 'Solid recognition skills building.'; }
  else if (count >= 10) { emoji = '🌿'; title = 'Good Effort!';             sub = 'Keep exploring the animal kingdom.'; }

  document.getElementById('trophy-icon').textContent  = emoji;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-sub').textContent   = sub;
  document.getElementById('score-num').textContent     = count;
  document.getElementById('score-rate').textContent    = `${perMin}/min`;
  document.getElementById('ms-avg').textContent        = count > 0 ? `${avgSec}s` : '—';
  document.getElementById('ms-dur').textContent        = fmtDur(dur);

  renderBreakdown();

  showScreen('screen-results');
  if (count >= 10) launchConfetti();
}

function renderBreakdown() {
  const rows = document.getElementById('breakdown-rows');
  rows.innerHTML = '';

  const catCount = {};
  S.log.forEach(a => { catCount[a.category] = (catCount[a.category] || 0) + 1; });

  const total = S.log.length;
  if (total === 0) { rows.innerHTML = '<p style="color:var(--text2);font-size:13px">No animals were seen this session.</p>'; return; }

  const COLORS = { Mammal:'var(--gold-l)', Bird:'var(--blue-l)', Reptile:'#4ade80', Amphibian:'var(--purple-l)', Marine:'var(--teal-l)', Insect:'var(--pink-l)' };

  Object.entries(catCount).sort((a, b) => b[1] - a[1]).forEach(([cat, n]) => {
    const pct = ((n / total) * 100).toFixed(0);
    const row = document.createElement('div');
    row.className = 'bd-row';
    row.innerHTML = `
      <div class="bd-cat">${cat}</div>
      <div class="bd-bar-wrap"><div class="bd-bar" data-w="${pct}" style="background:${COLORS[cat]||'var(--purple-l)'}"></div></div>
      <div class="bd-cnt">${n}</div>`;
    rows.appendChild(row);
  });

  // Animate bars after a tick
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      rows.querySelectorAll('.bd-bar').forEach(b => { b.style.width = b.dataset.w + '%'; });
    });
  });
}

// Tips function removed to keep summary generic.

/* ─────────────────────────────────────────
   CONFETTI (canvas-based)
───────────────────────────────────────── */
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const hyenaImg = new Image();
  hyenaImg.src = 'images/cute_hyena.png';

  const COLORS = ['#7c3aed','#f59e0b','#06b6d4','#10b981','#ec4899','#f1f5f9'];
  const pieces = [];

  // Spawn 30 hyenas
  for (let i = 0; i < 30; i++) {
    const size = 40 + Math.random() * 20;
    pieces.push({
      type: 'hyena',
      x: Math.random() * (canvas.width - size) + size / 2,
      y: Math.random() * (canvas.height - size) + size / 2,
      w: size,
      h: size,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      r: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.05
    });
  }

  // Spawn 60 colorful confetti shapes
  for (let i = 0; i < 60; i++) {
    const w = 8 + Math.random() * 8;
    const h = 4 + Math.random() * 6;
    pieces.push({
      type: 'confetti',
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      w: w,
      h: h,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      r: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.1
    });
  }

  const draw = () => {
    // Only continue animation if the results screen is active
    const resultsScreen = document.getElementById('screen-results');
    if (!resultsScreen || !resultsScreen.classList.contains('active')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);

      if (p.type === 'hyena') {
        ctx.drawImage(hyenaImg, -p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx.restore();

      // Update positions
      p.x += p.vx;
      p.y += p.vy;
      p.r += p.vr;

      // Bounce off screen boundaries
      const sizeX = p.w;
      const sizeY = p.h;
      if (p.x < sizeX / 2) {
        p.x = sizeX / 2;
        p.vx = -p.vx;
      } else if (p.x > canvas.width - sizeX / 2) {
        p.x = canvas.width - sizeX / 2;
        p.vx = -p.vx;
      }

      if (p.y < sizeY / 2) {
        p.y = sizeY / 2;
        p.vy = -p.vy;
      } else if (p.y > canvas.height - sizeY / 2) {
        p.y = canvas.height - sizeY / 2;
        p.vy = -p.vy;
      }
    });

    requestAnimationFrame(draw);
  };

  requestAnimationFrame(draw);
}

/* ─────────────────────────────────────────
   RESULTS ACTIONS
───────────────────────────────────────── */
function initResults() {
  document.getElementById('btn-to-settings').addEventListener('click', () => {
    refreshBestBanner();
    showScreen('screen-settings');
  });
  document.getElementById('btn-play-again').addEventListener('click', startCountdown);
}

/* ─────────────────────────────────────────
   QUIZ START (single canonical function)
───────────────────────────────────────── */
function doStartQuiz() {
  S._startTime = Date.now();
  S.queue = buildQueue();
  S.idx  = 0; S.seen = 0; S.log = [];
  S.remaining = S.duration;
  S.isRunning = true;
  S.activeImg = 'a';
  if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }

  setHudBadge(); updateCount();
  // Reset timer ring to full
  document.getElementById('ring-fill').style.strokeDashoffset = '0';
  document.getElementById('hud-time').textContent = S.duration;
  showScreen('screen-quiz');

  // Reset all image layers
  const imgA = document.getElementById('img-a');
  const imgB = document.getElementById('img-b');
  const bgA  = document.getElementById('img-bg-a');
  const bgB  = document.getElementById('img-bg-b');
  const loader = document.getElementById('img-loader');
  imgA.src = ''; imgA.classList.remove('faded');
  imgB.src = ''; imgB.classList.add('faded');
  bgA.src  = ''; bgA.classList.remove('faded');
  bgB.src  = ''; bgB.classList.add('faded');
  loader.classList.remove('done');
  document.getElementById('tap-hint').classList.remove('gone');
  document.querySelector('.loader-text').textContent = 'Loading...';

  loadAnimal(S.idx);
  preload(S.idx + 1);
  preload(S.idx + 2);

  const arena = document.getElementById('quiz-arena');
  arena.onclick = null;
  arena.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') advance(); };

  setTimeout(() => {
    S._startTime = Date.now(); // accurate start after UI settles
    S.timerId = setInterval(tickTimer, 30);
    arena.onclick = advance;
  }, 400);
}

function doCountdown() {
  showScreen('screen-countdown');
  const numEl = document.getElementById('countdown-num');
  const steps = ['3', '2', '1', 'GO!'];
  let i = 0;
  const tick = () => {
    numEl.textContent = steps[i];
    numEl.style.animation = 'none';
    void numEl.offsetWidth;
    numEl.style.animation = 'numPop 0.45s cubic-bezier(0.34,1.56,0.64,1) both';
    i++;
    if (i < steps.length) setTimeout(tick, 900);
    else setTimeout(doStartQuiz, 500);
  };
  tick();
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initProfile();
  initSettings();
  initResults();

  // Re-wire launch buttons to the canonical functions
  document.getElementById('btn-launch').addEventListener('click', doCountdown);
  document.getElementById('btn-play-again').addEventListener('click', doCountdown);
  document.getElementById('btn-end-early').addEventListener('click', endQuiz);

  showScreen('screen-profile');
});

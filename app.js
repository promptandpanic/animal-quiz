'use strict';
/* ═══════════════════════════════════════════════════════════════
   WILDVISION — WILDLIFE IDENTIFICATION CHAMPIONSHIP
   300 species · Mammals · Birds · Reptiles · Amphibians · Marine · Insects
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   ANIMAL DATABASE  (300 species)
───────────────────────────────────────── */
const ANIMALS = [
  // ══════════ MAMMALS (93) ══════════
  // Wild Cats
  {id:1,  name:"African Lion",              category:"Mammal",  image:"images/001.jpg", wiki:"Lion"},
  {id:2,  name:"Bengal Tiger",             category:"Mammal",  image:"images/002.jpg", wiki:"Bengal tiger"},
  {id:3,  name:"Snow Leopard",             category:"Mammal",  image:"images/003.jpg", wiki:"Snow leopard"},
  {id:4,  name:"Cheetah",                  category:"Mammal",  image:"images/004.jpg", wiki:"Cheetah"},
  {id:5,  name:"Jaguar",                   category:"Mammal",  image:"images/005.jpg", wiki:"Jaguar"},
  {id:6,  name:"Leopard",                  category:"Mammal",  image:"images/006.jpg", wiki:"Leopard"},
  {id:7,  name:"Cougar",                   category:"Mammal",  image:"images/007.jpg", wiki:"Cougar"},
  {id:8,  name:"Clouded Leopard",          category:"Mammal",  image:"images/008.jpg", wiki:"Clouded leopard"},
  {id:9,  name:"Caracal",                  category:"Mammal",  image:"images/009.jpg", wiki:"Caracal"},
  {id:10, name:"Serval",                   category:"Mammal",  image:"images/010.jpg", wiki:"Serval"},
  {id:11, name:"Ocelot",                   category:"Mammal",  image:"images/011.jpg", wiki:"Ocelot"},
  {id:12, name:"Bobcat",                   category:"Mammal",  image:"images/012.jpg", wiki:"Bobcat"},
  {id:13, name:"Eurasian Lynx",            category:"Mammal",  image:"images/013.jpg", wiki:"Eurasian lynx"},
  {id:14, name:"Sand Cat",                 category:"Mammal",  image:"images/014.jpg", wiki:"Sand cat"},
  {id:15, name:"Fishing Cat",              category:"Mammal",  image:"images/015.jpg", wiki:"Fishing cat"},
  // Canids & Hyenas
  {id:16, name:"Gray Wolf",                category:"Mammal",  image:"images/016.jpg", wiki:"Wolf"},
  {id:17, name:"Red Fox",                  category:"Mammal",  image:"images/017.jpg", wiki:"Red fox"},
  {id:18, name:"Arctic Fox",               category:"Mammal",  image:"images/018.jpg", wiki:"Arctic fox"},
  {id:19, name:"Fennec Fox",               category:"Mammal",  image:"images/019.jpg", wiki:"Fennec fox"},
  {id:20, name:"African Wild Dog",         category:"Mammal",  image:"images/020.jpg", wiki:"African wild dog"},
  {id:21, name:"Spotted Hyena",            category:"Mammal",  image:"images/021.jpg", wiki:"Spotted hyena"},
  {id:22, name:"Striped Hyena",            category:"Mammal",  image:"images/022.jpg", wiki:"Striped hyena"},
  {id:23, name:"Dhole",                    category:"Mammal",  image:"images/023.jpg", wiki:"Dhole"},
  // Bears
  {id:24, name:"Brown Bear",               category:"Mammal",  image:"images/024.jpg", wiki:"Brown bear"},
  {id:25, name:"Polar Bear",               category:"Mammal",  image:"images/025.jpg", wiki:"Polar bear"},
  {id:26, name:"Giant Panda",              category:"Mammal",  image:"images/026.jpg", wiki:"Giant panda"},
  {id:27, name:"Sun Bear",                 category:"Mammal",  image:"images/027.jpg", wiki:"Sun bear"},
  {id:28, name:"Spectacled Bear",          category:"Mammal",  image:"images/028.jpg", wiki:"Spectacled bear"},
  {id:29, name:"Sloth Bear",               category:"Mammal",  image:"images/029.jpg", wiki:"Sloth bear"},
  // Elephants & Rhinos
  {id:30, name:"African Elephant",         category:"Mammal",  image:"images/030.jpg", wiki:"African bush elephant"},
  {id:31, name:"Asian Elephant",           category:"Mammal",  image:"images/031.jpg", wiki:"Asian elephant"},
  {id:32, name:"White Rhinoceros",         category:"Mammal",  image:"images/032.jpg", wiki:"White rhinoceros"},
  {id:33, name:"Black Rhinoceros",         category:"Mammal",  image:"images/033.jpg", wiki:"Black rhinoceros"},
  {id:34, name:"Indian Rhinoceros",        category:"Mammal",  image:"images/034.jpg", wiki:"Indian rhinoceros"},
  // Hippos
  {id:35, name:"Hippopotamus",             category:"Mammal",  image:"images/035.jpg", wiki:"Hippopotamus"},
  {id:36, name:"Pygmy Hippopotamus",       category:"Mammal",  image:"images/036.jpg", wiki:"Pygmy hippopotamus"},
  // Giraffes & Zebras
  {id:37, name:"Giraffe",                  category:"Mammal",  image:"images/037.jpg", wiki:"Giraffe"},
  {id:38, name:"Plains Zebra",             category:"Mammal",  image:"images/038.jpg", wiki:"Plains zebra"},
  {id:39, name:"Grevy's Zebra",            category:"Mammal",  image:"images/039.jpg", wiki:"Grevy's zebra"},
  {id:40, name:"Okapi",                    category:"Mammal",  image:"images/040.jpg", wiki:"Okapi"},
  {id:41, name:"Warthog",                  category:"Mammal",  image:"images/041.jpg", wiki:"Warthog"},
  // Primates
  {id:42, name:"Western Gorilla",          category:"Mammal",  image:"images/042.jpg", wiki:"Western gorilla"},
  {id:43, name:"Chimpanzee",               category:"Mammal",  image:"images/043.jpg", wiki:"Chimpanzee"},
  {id:44, name:"Bornean Orangutan",        category:"Mammal",  image:"images/044.jpg", wiki:"Bornean orangutan"},
  {id:45, name:"Mandrill",                 category:"Mammal",  image:"images/045.jpg", wiki:"Mandrill"},
  {id:46, name:"Proboscis Monkey",         category:"Mammal",  image:"images/046.jpg", wiki:"Proboscis monkey"},
  {id:47, name:"Golden Snub-nosed Monkey", category:"Mammal",  image:"images/047.jpg", wiki:"Golden snub-nosed monkey"},
  {id:48, name:"Japanese Macaque",         category:"Mammal",  image:"images/048.jpg", wiki:"Japanese macaque"},
  {id:49, name:"Gelada",                   category:"Mammal",  image:"images/049.jpg", wiki:"Gelada"},
  {id:50, name:"Hamadryas Baboon",         category:"Mammal",  image:"images/050.jpg", wiki:"Hamadryas baboon"},
  {id:51, name:"Ring-tailed Lemur",        category:"Mammal",  image:"images/051.jpg", wiki:"Ring-tailed lemur"},
  {id:52, name:"Aye-aye",                  category:"Mammal",  image:"images/052.jpg", wiki:"Aye-aye"},
  // Ungulates
  {id:53, name:"Moose",                    category:"Mammal",  image:"images/053.jpg", wiki:"Moose"},
  {id:54, name:"Caribou",                  category:"Mammal",  image:"images/054.jpg", wiki:"Reindeer"},
  {id:55, name:"American Bison",           category:"Mammal",  image:"images/055.jpg", wiki:"American bison"},
  {id:56, name:"Musk Ox",                  category:"Mammal",  image:"images/056.jpg", wiki:"Musk ox"},
  {id:57, name:"Mountain Goat",            category:"Mammal",  image:"images/057.jpg", wiki:"Mountain goat"},
  {id:58, name:"Bighorn Sheep",            category:"Mammal",  image:"images/058.jpg", wiki:"Bighorn sheep"},
  {id:59, name:"Alpine Ibex",              category:"Mammal",  image:"images/059.jpg", wiki:"Alpine ibex"},
  {id:60, name:"Markhor",                  category:"Mammal",  image:"images/060.jpg", wiki:"Markhor"},
  {id:61, name:"Wildebeest",               category:"Mammal",  image:"images/061.jpg", wiki:"Wildebeest"},
  {id:62, name:"Springbok",                category:"Mammal",  image:"images/062.jpg", wiki:"Springbok"},
  {id:63, name:"Impala",                   category:"Mammal",  image:"images/063.jpg", wiki:"Impala (animal)"},
  {id:64, name:"Gemsbok",                  category:"Mammal",  image:"images/064.jpg", wiki:"Gemsbok"},
  {id:65, name:"Arabian Oryx",             category:"Mammal",  image:"images/065.jpg", wiki:"Arabian oryx"},
  {id:66, name:"Saiga Antelope",           category:"Mammal",  image:"images/066.jpg", wiki:"Saiga antelope"},
  // Odd mammals
  {id:67, name:"Capybara",                 category:"Mammal",  image:"images/067.jpg", wiki:"Capybara"},
  {id:68, name:"Giant Anteater",           category:"Mammal",  image:"images/068.jpg", wiki:"Giant anteater"},
  {id:69, name:"Three-toed Sloth",         category:"Mammal",  image:"images/069.jpg", wiki:"Pale-throated sloth"},
  {id:70, name:"Giant Armadillo",          category:"Mammal",  image:"images/070.jpg", wiki:"Giant armadillo"},
  {id:71, name:"Platypus",                 category:"Mammal",  image:"images/071.jpg", wiki:"Platypus"},
  {id:72, name:"Short-beaked Echidna",     category:"Mammal",  image:"images/072.jpg", wiki:"Short-beaked echidna"},
  {id:73, name:"Koala",                    category:"Mammal",  image:"images/073.jpg", wiki:"Koala"},
  {id:74, name:"Red Kangaroo",             category:"Mammal",  image:"images/074.jpg", wiki:"Red kangaroo"},
  {id:75, name:"Tasmanian Devil",          category:"Mammal",  image:"images/075.jpg", wiki:"Tasmanian devil"},
  {id:76, name:"Quokka",                   category:"Mammal",  image:"images/076.jpg", wiki:"Quokka"},
  {id:77, name:"Malayan Tapir",            category:"Mammal",  image:"images/077.jpg", wiki:"Malayan tapir"},
  {id:78, name:"Pangolin",                 category:"Mammal",  image:"images/078.jpg", wiki:"Pangolin"},
  // Marine mammals
  {id:79, name:"Narwhal",                  category:"Mammal",  image:"images/079.jpg", wiki:"Narwhal"},
  {id:80, name:"Orca",                     category:"Mammal",  image:"images/080.jpg", wiki:"Orca"},
  {id:81, name:"Humpback Whale",           category:"Mammal",  image:"images/081.jpg", wiki:"Humpback whale"},
  {id:82, name:"Sperm Whale",              category:"Mammal",  image:"images/082.jpg", wiki:"Sperm whale"},
  {id:83, name:"Beluga Whale",             category:"Mammal",  image:"images/083.jpg", wiki:"Beluga whale"},
  {id:84, name:"Bottlenose Dolphin",       category:"Mammal",  image:"images/084.jpg", wiki:"Common bottlenose dolphin"},
  {id:85, name:"Walrus",                   category:"Mammal",  image:"images/085.jpg", wiki:"Walrus"},
  {id:86, name:"Northern Elephant Seal",   category:"Mammal",  image:"images/086.jpg", wiki:"Northern elephant seal"},
  // Carnivores
  {id:87, name:"Sea Otter",                category:"Mammal",  image:"images/087.jpg", wiki:"Sea otter"},
  {id:88, name:"Giant Otter",              category:"Mammal",  image:"images/088.jpg", wiki:"Giant otter"},
  {id:89, name:"Wolverine",                category:"Mammal",  image:"images/089.jpg", wiki:"Wolverine (animal)"},
  {id:90, name:"Honey Badger",             category:"Mammal",  image:"images/090.jpg", wiki:"Honey badger"},
  {id:91, name:"Meerkat",                  category:"Mammal",  image:"images/091.jpg", wiki:"Meerkat"},
  {id:92, name:"Fossa",                    category:"Mammal",  image:"images/092.jpg", wiki:"Fossa (animal)"},
  {id:93, name:"Aardvark",                 category:"Mammal",  image:"images/093.jpg", wiki:"Aardvark"},

  // ══════════ BIRDS (97) ══════════
  // Eagles
  {id:94,  name:"Bald Eagle",              category:"Bird",    image:"images/094.jpg", wiki:"Bald eagle"},
  {id:95,  name:"Golden Eagle",            category:"Bird",    image:"images/095.jpg", wiki:"Golden eagle"},
  {id:96,  name:"Harpy Eagle",             category:"Bird",    image:"images/096.jpg", wiki:"Harpy eagle"},
  {id:97,  name:"Philippine Eagle",        category:"Bird",    image:"images/097.jpg", wiki:"Philippine eagle"},
  {id:98,  name:"Steller's Sea Eagle",     category:"Bird",    image:"images/098.jpg", wiki:"Steller's sea eagle"},
  {id:99,  name:"Wedge-tailed Eagle",      category:"Bird",    image:"images/099.jpg", wiki:"Wedge-tailed eagle"},
  {id:100, name:"Martial Eagle",           category:"Bird",    image:"images/100.jpg", wiki:"Martial eagle"},
  // Falcons & Hawks
  {id:101, name:"Peregrine Falcon",        category:"Bird",    image:"images/101.jpg", wiki:"Peregrine falcon"},
  {id:102, name:"Gyrfalcon",               category:"Bird",    image:"images/102.jpg", wiki:"Gyrfalcon"},
  {id:103, name:"Saker Falcon",            category:"Bird",    image:"images/103.jpg", wiki:"Saker falcon"},
  {id:104, name:"Osprey",                  category:"Bird",    image:"images/104.jpg", wiki:"Osprey"},
  // Owls
  {id:105, name:"Snowy Owl",               category:"Bird",    image:"images/105.jpg", wiki:"Snowy owl"},
  {id:106, name:"Great Horned Owl",        category:"Bird",    image:"images/106.jpg", wiki:"Great horned owl"},
  {id:107, name:"Barn Owl",                category:"Bird",    image:"images/107.jpg", wiki:"Barn owl"},
  {id:108, name:"Eurasian Eagle-Owl",      category:"Bird",    image:"images/108.jpg", wiki:"Eurasian eagle-owl"},
  {id:109, name:"Spectacled Owl",          category:"Bird",    image:"images/109.jpg", wiki:"Spectacled owl"},
  {id:110, name:"Burrowing Owl",           category:"Bird",    image:"images/110.jpg", wiki:"Burrowing owl"},
  // Peafowl & Flamingos
  {id:111, name:"Indian Peafowl",          category:"Bird",    image:"images/111.jpg", wiki:"Indian peafowl"},
  {id:112, name:"Congo Peafowl",           category:"Bird",    image:"images/112.jpg", wiki:"Congo peafowl"},
  {id:113, name:"Greater Flamingo",        category:"Bird",    image:"images/113.jpg", wiki:"Greater flamingo"},
  {id:114, name:"Lesser Flamingo",         category:"Bird",    image:"images/114.jpg", wiki:"Lesser flamingo"},
  // Toucans
  {id:115, name:"Toco Toucan",             category:"Bird",    image:"images/115.jpg", wiki:"Toco toucan"},
  {id:116, name:"Keel-billed Toucan",      category:"Bird",    image:"images/116.jpg", wiki:"Keel-billed toucan"},
  // Macaws & Parrots
  {id:117, name:"Scarlet Macaw",           category:"Bird",    image:"images/117.jpg", wiki:"Scarlet macaw"},
  {id:118, name:"Blue-and-yellow Macaw",   category:"Bird",    image:"images/118.jpg", wiki:"Blue-and-yellow macaw"},
  {id:119, name:"Hyacinth Macaw",          category:"Bird",    image:"images/119.jpg", wiki:"Hyacinth macaw"},
  {id:120, name:"African Grey Parrot",     category:"Bird",    image:"images/120.jpg", wiki:"Grey parrot"},
  {id:121, name:"Sulphur-crested Cockatoo",category:"Bird",    image:"images/121.jpg", wiki:"Sulphur-crested cockatoo"},
  {id:122, name:"Palm Cockatoo",           category:"Bird",    image:"images/122.jpg", wiki:"Palm cockatoo"},
  {id:123, name:"Rainbow Lorikeet",        category:"Bird",    image:"images/123.jpg", wiki:"Rainbow lorikeet"},
  // Ratites
  {id:124, name:"Kiwi",                    category:"Bird",    image:"images/124.jpg", wiki:"North Island brown kiwi"},
  {id:125, name:"Emu",                     category:"Bird",    image:"images/125.jpg", wiki:"Emu"},
  {id:126, name:"Common Ostrich",          category:"Bird",    image:"images/126.jpg", wiki:"Common ostrich"},
  {id:127, name:"Southern Cassowary",      category:"Bird",    image:"images/127.jpg", wiki:"Southern cassowary"},
  {id:128, name:"Greater Rhea",            category:"Bird",    image:"images/128.jpg", wiki:"Greater rhea"},
  // Penguins
  {id:129, name:"Emperor Penguin",         category:"Bird",    image:"images/129.jpg", wiki:"Emperor penguin"},
  {id:130, name:"King Penguin",            category:"Bird",    image:"images/130.jpg", wiki:"King penguin"},
  {id:131, name:"Macaroni Penguin",        category:"Bird",    image:"images/131.jpg", wiki:"Macaroni penguin"},
  {id:132, name:"African Penguin",         category:"Bird",    image:"images/132.jpg", wiki:"African penguin"},
  {id:133, name:"Rockhopper Penguin",      category:"Bird",    image:"images/133.jpg", wiki:"Rockhopper penguin"},
  // Puffins
  {id:134, name:"Atlantic Puffin",         category:"Bird",    image:"images/134.jpg", wiki:"Atlantic puffin"},
  {id:135, name:"Tufted Puffin",           category:"Bird",    image:"images/135.jpg", wiki:"Tufted puffin"},
  // Unique birds
  {id:136, name:"Shoebill",                category:"Bird",    image:"images/136.jpg", wiki:"Shoebill"},
  {id:137, name:"Secretary Bird",          category:"Bird",    image:"images/137.jpg", wiki:"Secretarybird"},
  {id:138, name:"Magnificent Frigatebird", category:"Bird",    image:"images/138.jpg", wiki:"Magnificent frigatebird"},
  {id:139, name:"Blue-footed Booby",       category:"Bird",    image:"images/139.jpg", wiki:"Blue-footed booby"},
  {id:140, name:"Red-footed Booby",        category:"Bird",    image:"images/140.jpg", wiki:"Red-footed booby"},
  // Hornbills
  {id:141, name:"Great Hornbill",          category:"Bird",    image:"images/141.jpg", wiki:"Great hornbill"},
  {id:142, name:"Rhinoceros Hornbill",     category:"Bird",    image:"images/142.jpg", wiki:"Rhinoceros hornbill"},
  // Hummingbirds
  {id:143, name:"Ruby-throated Hummingbird",category:"Bird",   image:"images/143.jpg", wiki:"Ruby-throated hummingbird"},
  {id:144, name:"Bee Hummingbird",         category:"Bird",    image:"images/144.jpg", wiki:"Bee hummingbird"},
  {id:145, name:"Sword-billed Hummingbird",category:"Bird",    image:"images/145.jpg", wiki:"Sword-billed hummingbird"},
  // Kingfishers
  {id:146, name:"Common Kingfisher",       category:"Bird",    image:"images/146.jpg", wiki:"Common kingfisher"},
  {id:147, name:"Giant Kingfisher",        category:"Bird",    image:"images/147.jpg", wiki:"Giant kingfisher"},
  {id:148, name:"Laughing Kookaburra",     category:"Bird",    image:"images/148.jpg", wiki:"Laughing kookaburra"},
  // Condors
  {id:149, name:"Andean Condor",           category:"Bird",    image:"images/149.jpg", wiki:"Andean condor"},
  {id:150, name:"California Condor",       category:"Bird",    image:"images/150.jpg", wiki:"California condor"},
  // Exotic / tropical
  {id:151, name:"Greater Roadrunner",      category:"Bird",    image:"images/151.jpg", wiki:"Greater roadrunner"},
  {id:152, name:"Resplendent Quetzal",     category:"Bird",    image:"images/152.jpg", wiki:"Resplendent quetzal"},
  {id:153, name:"Hoatzin",                 category:"Bird",    image:"images/153.jpg", wiki:"Hoatzin"},
  {id:154, name:"Kakapo",                  category:"Bird",    image:"images/154.jpg", wiki:"Kakapo"},
  {id:155, name:"Kea",                     category:"Bird",    image:"images/155.jpg", wiki:"Kea"},
  {id:156, name:"Victoria Crowned Pigeon", category:"Bird",    image:"images/156.jpg", wiki:"Victoria crowned pigeon"},
  {id:157, name:"Raggiana Bird-of-paradise",category:"Bird",   image:"images/157.jpg", wiki:"Raggiana bird-of-paradise"},
  {id:158, name:"Wilson's Bird-of-paradise",category:"Bird",   image:"images/158.jpg", wiki:"Wilson's bird-of-paradise"},
  {id:159, name:"Superb Lyrebird",         category:"Bird",    image:"images/159.jpg", wiki:"Superb lyrebird"},
  {id:160, name:"Superb Fairywren",        category:"Bird",    image:"images/160.jpg", wiki:"Superb fairywren"},
  {id:161, name:"Satin Bowerbird",         category:"Bird",    image:"images/161.jpg", wiki:"Satin bowerbird"},
  // Storks & Herons
  {id:162, name:"White Stork",             category:"Bird",    image:"images/162.jpg", wiki:"White stork"},
  {id:163, name:"Marabou Stork",           category:"Bird",    image:"images/163.jpg", wiki:"Marabou stork"},
  {id:164, name:"Great Blue Heron",        category:"Bird",    image:"images/164.jpg", wiki:"Great blue heron"},
  {id:165, name:"Goliath Heron",           category:"Bird",    image:"images/165.jpg", wiki:"Goliath heron"},
  {id:166, name:"Great Egret",             category:"Bird",    image:"images/166.jpg", wiki:"Great egret"},
  // Ibis & Cranes
  {id:167, name:"Scarlet Ibis",            category:"Bird",    image:"images/167.jpg", wiki:"Scarlet ibis"},
  {id:168, name:"Roseate Spoonbill",       category:"Bird",    image:"images/168.jpg", wiki:"Roseate spoonbill"},
  {id:169, name:"Whooping Crane",          category:"Bird",    image:"images/169.jpg", wiki:"Whooping crane"},
  {id:170, name:"Sarus Crane",             category:"Bird",    image:"images/170.jpg", wiki:"Sarus crane"},
  {id:171, name:"Dalmatian Pelican",       category:"Bird",    image:"images/171.jpg", wiki:"Dalmatian pelican"},
  {id:172, name:"Wandering Albatross",     category:"Bird",    image:"images/172.jpg", wiki:"Wandering albatross"},
  // Vultures
  {id:173, name:"King Vulture",            category:"Bird",    image:"images/173.jpg", wiki:"King vulture"},
  {id:174, name:"Bearded Vulture",         category:"Bird",    image:"images/174.jpg", wiki:"Bearded vulture"},
  {id:175, name:"Lappet-faced Vulture",    category:"Bird",    image:"images/175.jpg", wiki:"Lappet-faced vulture"},
  // Colourful birds
  {id:176, name:"Indian Roller",           category:"Bird",    image:"images/176.jpg", wiki:"Indian roller"},
  {id:177, name:"European Bee-eater",      category:"Bird",    image:"images/177.jpg", wiki:"European bee-eater"},
  {id:178, name:"Eurasian Hoopoe",         category:"Bird",    image:"images/178.jpg", wiki:"Eurasian hoopoe"},
  {id:179, name:"Lilac-breasted Roller",   category:"Bird",    image:"images/179.jpg", wiki:"Lilac-breasted roller"},
  {id:180, name:"Long-tailed Widowbird",   category:"Bird",    image:"images/180.jpg", wiki:"Long-tailed widowbird"},
  {id:181, name:"Painted Bunting",         category:"Bird",    image:"images/181.jpg", wiki:"Painted bunting"},
  {id:182, name:"Andean Cock-of-the-rock", category:"Bird",    image:"images/182.jpg", wiki:"Andean cock-of-the-rock"},
  {id:183, name:"Sunbittern",              category:"Bird",    image:"images/183.jpg", wiki:"Sunbittern"},
  {id:184, name:"Hammerkop",               category:"Bird",    image:"images/184.jpg", wiki:"Hammerkop"},
  {id:185, name:"Greater Sage-Grouse",     category:"Bird",    image:"images/185.jpg", wiki:"Greater sage-grouse"},
  {id:186, name:"African Jacana",          category:"Bird",    image:"images/186.jpg", wiki:"African jacana"},
  {id:187, name:"Turaco",                  category:"Bird",    image:"images/187.jpg", wiki:"Knysna turaco"},
  {id:188, name:"Common Raven",            category:"Bird",    image:"images/188.jpg", wiki:"Common raven"},
  {id:189, name:"Curl-crested Aracari",    category:"Bird",    image:"images/189.jpg", wiki:"Curl-crested aracari"},
  {id:190, name:"Snowy Egret",             category:"Bird",    image:"images/190.jpg", wiki:"Snowy egret"},

  // ══════════ REPTILES (50) ══════════
  // Monitor lizards & Komodo
  {id:191, name:"Komodo Dragon",           category:"Reptile", image:"images/191.jpg", wiki:"Komodo dragon"},
  {id:192, name:"Nile Monitor",            category:"Reptile", image:"images/192.jpg", wiki:"Nile monitor"},
  {id:193, name:"Bengal Monitor",          category:"Reptile", image:"images/193.jpg", wiki:"Bengal monitor"},
  // Crocodilians
  {id:194, name:"Saltwater Crocodile",     category:"Reptile", image:"images/194.jpg", wiki:"Saltwater crocodile"},
  {id:195, name:"Nile Crocodile",          category:"Reptile", image:"images/195.jpg", wiki:"Nile crocodile"},
  {id:196, name:"American Crocodile",      category:"Reptile", image:"images/196.jpg", wiki:"American crocodile"},
  {id:197, name:"American Alligator",      category:"Reptile", image:"images/197.jpg", wiki:"American alligator"},
  {id:198, name:"Chinese Alligator",       category:"Reptile", image:"images/198.jpg", wiki:"Chinese alligator"},
  {id:199, name:"Gharial",                 category:"Reptile", image:"images/199.jpg", wiki:"Gharial"},
  {id:200, name:"Mugger Crocodile",        category:"Reptile", image:"images/200.jpg", wiki:"Mugger crocodile"},
  // Snakes
  {id:201, name:"Green Anaconda",          category:"Reptile", image:"images/201.jpg", wiki:"Green anaconda"},
  {id:202, name:"King Cobra",              category:"Reptile", image:"images/202.jpg", wiki:"King cobra"},
  {id:203, name:"Black Mamba",             category:"Reptile", image:"images/203.jpg", wiki:"Black mamba"},
  {id:204, name:"Green Mamba",             category:"Reptile", image:"images/204.jpg", wiki:"Green mamba"},
  {id:205, name:"Reticulated Python",      category:"Reptile", image:"images/205.jpg", wiki:"Reticulated python"},
  {id:206, name:"Burmese Python",          category:"Reptile", image:"images/206.jpg", wiki:"Burmese python"},
  {id:207, name:"African Rock Python",     category:"Reptile", image:"images/207.jpg", wiki:"African rock python"},
  {id:208, name:"Ball Python",             category:"Reptile", image:"images/208.jpg", wiki:"Ball python"},
  {id:209, name:"E. Diamondback Rattlesnake",category:"Reptile",image:"images/209.jpg",wiki:"Eastern diamondback rattlesnake"},
  {id:210, name:"W. Diamondback Rattlesnake",category:"Reptile",image:"images/210.jpg",wiki:"Western diamondback rattlesnake"},
  {id:211, name:"Gaboon Viper",            category:"Reptile", image:"images/211.jpg", wiki:"Gaboon viper"},
  {id:212, name:"Puff Adder",              category:"Reptile", image:"images/212.jpg", wiki:"Puff adder"},
  {id:213, name:"Inland Taipan",           category:"Reptile", image:"images/213.jpg", wiki:"Inland taipan"},
  {id:214, name:"Eastern Brown Snake",     category:"Reptile", image:"images/214.jpg", wiki:"Eastern brown snake"},
  {id:215, name:"Boa Constrictor",         category:"Reptile", image:"images/215.jpg", wiki:"Boa constrictor"},
  {id:216, name:"Emerald Tree Boa",        category:"Reptile", image:"images/216.jpg", wiki:"Emerald tree boa"},
  {id:217, name:"Boomslang",               category:"Reptile", image:"images/217.jpg", wiki:"Boomslang"},
  // Lizards
  {id:218, name:"Veiled Chameleon",        category:"Reptile", image:"images/218.jpg", wiki:"Veiled chameleon"},
  {id:219, name:"Panther Chameleon",       category:"Reptile", image:"images/219.jpg", wiki:"Panther chameleon"},
  {id:220, name:"Jackson's Chameleon",     category:"Reptile", image:"images/220.jpg", wiki:"Jackson's chameleon"},
  {id:221, name:"Green Iguana",            category:"Reptile", image:"images/221.jpg", wiki:"Green iguana"},
  {id:222, name:"Marine Iguana",           category:"Reptile", image:"images/222.jpg", wiki:"Marine iguana"},
  {id:223, name:"Gila Monster",            category:"Reptile", image:"images/223.jpg", wiki:"Gila monster"},
  {id:224, name:"Mexican Beaded Lizard",   category:"Reptile", image:"images/224.jpg", wiki:"Mexican beaded lizard"},
  {id:225, name:"Frilled-neck Lizard",     category:"Reptile", image:"images/225.jpg", wiki:"Frilled-neck lizard"},
  {id:226, name:"Thorny Dragon",           category:"Reptile", image:"images/226.jpg", wiki:"Thorny dragon"},
  {id:227, name:"Bearded Dragon",          category:"Reptile", image:"images/227.jpg", wiki:"Pogona"},
  {id:228, name:"Blue-tongued Skink",      category:"Reptile", image:"images/228.jpg", wiki:"Blue-tongued skink"},
  {id:229, name:"Tokay Gecko",             category:"Reptile", image:"images/229.jpg", wiki:"Tokay gecko"},
  {id:230, name:"Satanic Leaf-tailed Gecko",category:"Reptile",image:"images/230.jpg", wiki:"Satanic leaf-tailed gecko"},
  // Turtles & Tortoises
  {id:231, name:"Leatherback Sea Turtle",  category:"Reptile", image:"images/231.jpg", wiki:"Leatherback sea turtle"},
  {id:232, name:"Green Sea Turtle",        category:"Reptile", image:"images/232.jpg", wiki:"Green sea turtle"},
  {id:233, name:"Hawksbill Sea Turtle",    category:"Reptile", image:"images/233.jpg", wiki:"Hawksbill sea turtle"},
  {id:234, name:"Loggerhead Sea Turtle",   category:"Reptile", image:"images/234.jpg", wiki:"Loggerhead sea turtle"},
  {id:235, name:"Galápagos Tortoise",      category:"Reptile", image:"images/235.jpg", wiki:"Galápagos tortoise"},
  {id:236, name:"Aldabra Giant Tortoise",  category:"Reptile", image:"images/236.jpg", wiki:"Aldabra giant tortoise"},
  {id:237, name:"Indian Star Tortoise",    category:"Reptile", image:"images/237.jpg", wiki:"Indian star tortoise"},
  {id:238, name:"Alligator Snapping Turtle",category:"Reptile",image:"images/238.jpg", wiki:"Alligator snapping turtle"},
  {id:239, name:"Mata Mata Turtle",        category:"Reptile", image:"images/239.jpg", wiki:"Mata mata"},
  {id:240, name:"Painted Turtle",          category:"Reptile", image:"images/240.jpg", wiki:"Painted turtle"},

  // ══════════ AMPHIBIANS (18) ══════════
  {id:241, name:"Red-eyed Tree Frog",      category:"Amphibian",image:"images/241.jpg",wiki:"Red-eyed tree frog"},
  {id:242, name:"Blue Poison Dart Frog",   category:"Amphibian",image:"images/242.jpg",wiki:"Dyeing poison dart frog"},
  {id:243, name:"Golden Poison Frog",      category:"Amphibian",image:"images/243.jpg",wiki:"Golden poison frog"},
  {id:244, name:"Tomato Frog",             category:"Amphibian",image:"images/244.jpg",wiki:"Tomato frog"},
  {id:245, name:"Purple Frog",             category:"Amphibian",image:"images/245.jpg",wiki:"Purple frog"},
  {id:246, name:"Axolotl",                 category:"Amphibian",image:"images/246.jpg",wiki:"Axolotl"},
  {id:247, name:"Fire Salamander",         category:"Amphibian",image:"images/247.jpg",wiki:"Fire salamander"},
  {id:248, name:"Chinese Giant Salamander",category:"Amphibian",image:"images/248.jpg",wiki:"Chinese giant salamander"},
  {id:249, name:"Tiger Salamander",        category:"Amphibian",image:"images/249.jpg",wiki:"Tiger salamander"},
  {id:250, name:"Goliath Frog",            category:"Amphibian",image:"images/250.jpg",wiki:"Goliath frog"},
  {id:251, name:"Glass Frog",              category:"Amphibian",image:"images/251.jpg",wiki:"Glass frog"},
  {id:252, name:"Olm",                     category:"Amphibian",image:"images/252.jpg",wiki:"Olm"},
  {id:253, name:"Bumblebee Poison Frog",   category:"Amphibian",image:"images/253.jpg",wiki:"Bumblebee poison frog"},
  {id:254, name:"Amazon Milk Frog",        category:"Amphibian",image:"images/254.jpg",wiki:"Amazon milk frog"},
  {id:255, name:"Pacman Frog",             category:"Amphibian",image:"images/255.jpg",wiki:"Argentine horned frog"},
  {id:256, name:"Hellbender",              category:"Amphibian",image:"images/256.jpg",wiki:"Hellbender"},
  {id:257, name:"Spotted Salamander",      category:"Amphibian",image:"images/257.jpg",wiki:"Spotted salamander"},
  {id:258, name:"Surinam Toad",            category:"Amphibian",image:"images/258.jpg",wiki:"Surinam toad"},

  // ══════════ MARINE (25) ══════════
  {id:259, name:"Great White Shark",       category:"Marine",  image:"images/259.jpg", wiki:"Great white shark"},
  {id:260, name:"Whale Shark",             category:"Marine",  image:"images/260.jpg", wiki:"Whale shark"},
  {id:261, name:"Great Hammerhead Shark",  category:"Marine",  image:"images/261.jpg", wiki:"Great hammerhead"},
  {id:262, name:"Bull Shark",              category:"Marine",  image:"images/262.jpg", wiki:"Bull shark"},
  {id:263, name:"Tiger Shark",             category:"Marine",  image:"images/263.jpg", wiki:"Tiger shark"},
  {id:264, name:"Basking Shark",           category:"Marine",  image:"images/264.jpg", wiki:"Basking shark"},
  {id:265, name:"Oceanic Manta Ray",       category:"Marine",  image:"images/265.jpg", wiki:"Giant oceanic manta ray"},
  {id:266, name:"Spotted Eagle Ray",       category:"Marine",  image:"images/266.jpg", wiki:"Spotted eagle ray"},
  {id:267, name:"Giant Pacific Octopus",   category:"Marine",  image:"images/267.jpg", wiki:"Giant Pacific octopus"},
  {id:268, name:"Blue-ringed Octopus",     category:"Marine",  image:"images/268.jpg", wiki:"Blue-ringed octopus"},
  {id:269, name:"Mimic Octopus",           category:"Marine",  image:"images/269.jpg", wiki:"Mimic octopus"},
  {id:270, name:"Giant Squid",             category:"Marine",  image:"images/270.jpg", wiki:"Giant squid"},
  {id:271, name:"Nautilus",                category:"Marine",  image:"images/271.jpg", wiki:"Nautilus (mollusc)"},
  {id:272, name:"Lion's Mane Jellyfish",   category:"Marine",  image:"images/272.jpg", wiki:"Lion's mane jellyfish"},
  {id:273, name:"Box Jellyfish",           category:"Marine",  image:"images/273.jpg", wiki:"Box jellyfish"},
  {id:274, name:"Leafy Sea Dragon",        category:"Marine",  image:"images/274.jpg", wiki:"Leafy sea dragon"},
  {id:275, name:"Weedy Sea Dragon",        category:"Marine",  image:"images/275.jpg", wiki:"Weedy seadragon"},
  {id:276, name:"Common Seahorse",         category:"Marine",  image:"images/276.jpg", wiki:"Common seahorse"},
  {id:277, name:"Clownfish",               category:"Marine",  image:"images/277.jpg", wiki:"Clownfish"},
  {id:278, name:"Red Lionfish",            category:"Marine",  image:"images/278.jpg", wiki:"Red lionfish"},
  {id:279, name:"Giant Moray Eel",         category:"Marine",  image:"images/279.jpg", wiki:"Giant moray"},
  {id:280, name:"Peacock Mantis Shrimp",   category:"Marine",  image:"images/280.jpg", wiki:"Peacock mantis shrimp"},
  {id:281, name:"Coconut Crab",            category:"Marine",  image:"images/281.jpg", wiki:"Coconut crab"},
  {id:282, name:"Giant Isopod",            category:"Marine",  image:"images/282.jpg", wiki:"Giant isopod"},
  {id:283, name:"Coelacanth",              category:"Marine",  image:"images/283.jpg", wiki:"Coelacanth"},

  // ══════════ INSECTS & ARACHNIDS (17) ══════════
  {id:284, name:"Monarch Butterfly",       category:"Insect",  image:"images/284.jpg", wiki:"Monarch butterfly"},
  {id:285, name:"Blue Morpho Butterfly",   category:"Insect",  image:"images/285.jpg", wiki:"Blue morpho"},
  {id:286, name:"Atlas Moth",              category:"Insect",  image:"images/286.jpg", wiki:"Attacus atlas"},
  {id:287, name:"Goliath Beetle",          category:"Insect",  image:"images/287.jpg", wiki:"Goliath beetle"},
  {id:288, name:"Hercules Beetle",         category:"Insect",  image:"images/288.jpg", wiki:"Hercules beetle"},
  {id:289, name:"Titan Beetle",            category:"Insect",  image:"images/289.jpg", wiki:"Titan beetle"},
  {id:290, name:"Goliath Birdeater",       category:"Insect",  image:"images/290.jpg", wiki:"Goliath birdeater"},
  {id:291, name:"Black Widow Spider",      category:"Insect",  image:"images/291.jpg", wiki:"Western black widow"},
  {id:292, name:"Peacock Spider",          category:"Insect",  image:"images/292.jpg", wiki:"Peacock spider"},
  {id:293, name:"Orchid Mantis",           category:"Insect",  image:"images/293.jpg", wiki:"Hymenopus coronatus"},
  {id:294, name:"Dead Leaf Mantis",        category:"Insect",  image:"images/294.jpg", wiki:"Deroplatys desiccata"},
  {id:295, name:"Giant Walking Stick",     category:"Insect",  image:"images/295.jpg", wiki:"Phobaeticus chani"},
  {id:296, name:"Jewel Beetle",            category:"Insect",  image:"images/296.jpg", wiki:"Buprestidae"},
  {id:297, name:"Tarantula Hawk",          category:"Insect",  image:"images/297.jpg", wiki:"Tarantula hawk"},
  {id:298, name:"Wallace's Giant Bee",     category:"Insect",  image:"images/298.jpg", wiki:"Wallace's giant bee"},
  {id:299, name:"Morpho Peleides",         category:"Insect",  image:"images/299.jpg", wiki:"Morpho peleides"},
  {id:300, name:"Bombardier Beetle",       category:"Insect",  image:"images/300.jpg", wiki:"Bombardier beetle"},
];

/* ─────────────────────────────────────────
   APP STATE
───────────────────────────────────────── */
const S = {
  // Profile
  name: '', age: null, photo: null,
  // Settings
  mode: 'explorer',   // 'explorer' | 'championship'
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
  const zone    = document.getElementById('avatar-zone');
  const fileIn  = document.getElementById('avatar-input');
  const prevImg = document.getElementById('avatar-preview');
  const plac    = document.getElementById('avatar-placeholder');

  nameIn.addEventListener('input', () => {
    btnCont.disabled = nameIn.value.trim().length === 0;
    document.getElementById('name-err').textContent = '';
  });
  nameIn.addEventListener('keydown', e => { if (e.key === 'Enter' && !btnCont.disabled) toSettings(); });

  zone.addEventListener('click',   () => fileIn.click());
  zone.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') fileIn.click(); });

  fileIn.addEventListener('change', e => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = ev => {
      S.photo = ev.target.result;
      prevImg.src = ev.target.result;
      prevImg.style.display = 'block';
      plac.style.display = 'none';
    };
    reader.readAsDataURL(f);
  });

  btnCont.addEventListener('click', toSettings);
}

function toSettings() {
  const v = document.getElementById('f-name').value.trim();
  if (!v) { document.getElementById('name-err').textContent = 'Please enter your name.'; return; }
  S.name = v;
  S.age  = parseInt(document.getElementById('f-age').value) || null;
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
  // Mode toggle
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.mode-card').forEach(c => {
        c.classList.remove('selected', 'champ-mode');
        c.setAttribute('aria-pressed', 'false');
      });
      card.classList.add('selected');
      card.setAttribute('aria-pressed', 'true');
      S.mode = card.dataset.mode;
      if (S.mode === 'championship') card.classList.add('champ-mode');
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

// Cached set of image IDs that actually exist locally
let AVAILABLE_IDS = null;

async function probeImages() {
  if (AVAILABLE_IDS !== null) return AVAILABLE_IDS;
  const results = await Promise.all(
    ANIMALS.map(a => new Promise(resolve => {
      const img = new Image();
      img.onload  = () => resolve(a.id);
      img.onerror = () => resolve(null);
      img.src = a.image;
    }))
  );
  AVAILABLE_IDS = new Set(results.filter(Boolean));
  return AVAILABLE_IDS;
}

function buildQueue(availableIds) {
  // Only include animals whose image actually exists
  const pool = availableIds ? ANIMALS.filter(a => availableIds.has(a.id)) : ANIMALS;
  const seed = Math.floor(Date.now() / 1000);
  const shuffled = seededShuffle(pool, seed);
  // Repeat to fill any duration
  let q = [];
  while (q.length < 5000) q = q.concat(shuffled);
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
    S.timerId = setInterval(tickTimer, 200);
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
  };

  tmpImg.onerror = () => {
    // Image missing — silently skip to next animal without counting it
    S.idx = (S.idx + 1) % S.queue.length;
    loadAnimal(S.idx);
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
  const secs   = Math.ceil(S.remaining);
  timeEl.textContent = secs;

  const pct    = S.remaining / S.duration;
  const offset = CIRC * (1 - pct);
  ring.style.strokeDashoffset = offset;

  if (pct < 0.2) {
    ring.className = 'ring-fill ring-danger';
    timeEl.className = 'hud-time danger';
  } else if (pct < 0.4) {
    ring.className = 'ring-fill ring-warn';
    timeEl.className = 'hud-time';
  } else {
    ring.className = 'ring-fill';
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

  // Update best
  const key = S.duration;
  const prev = S.bests[key] || 0;
  if (S.seen > prev) {
    S.bests[key] = S.seen;
    try { localStorage.setItem('wv_bests', JSON.stringify(S.bests)); } catch (_) {}
  }

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
  const best    = S.bests[dur] || count;
  const isNewBest = count > 0 && count >= (S.bests[dur] || 0);

  // Trophy + message
  let emoji = '🌱', title = 'Keep Going!', sub = 'Every session sharpens your eye.';
  if (count >= 80)      { emoji = '🏆'; title = 'World Champion Level!';    sub = 'Extraordinary speed & recognition!'; }
  else if (count >= 60) { emoji = '🥇'; title = 'Championship Grade!';      sub = 'Elite-level wildlife identification.'; }
  else if (count >= 40) { emoji = '🥈'; title = 'Excellent Performance!';   sub = 'You\'re approaching championship pace.'; }
  else if (count >= 25) { emoji = '🥉'; title = 'Great Session!';           sub = 'Solid recognition skills building.'; }
  else if (count >= 10) { emoji = '🌿'; title = 'Good Effort!';             sub = 'Keep exploring the animal kingdom.'; }

  if (isNewBest && count > 0) { title = '🎉 New Personal Best! ' + emoji; emoji = '🎉'; }

  document.getElementById('trophy-icon').textContent  = emoji;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-sub').textContent   = sub;
  document.getElementById('score-num').textContent     = count;
  document.getElementById('score-rate').textContent    = `${perMin}/min`;
  document.getElementById('ms-avg').textContent        = count > 0 ? `${avgSec}s` : '—';
  document.getElementById('ms-best').textContent       = best;
  document.getElementById('ms-dur').textContent        = fmtDur(dur);

  renderBreakdown();
  renderTips(count);

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

function renderTips(count) {
  const el   = document.getElementById('tips-body');
  const tips = [];
  if (count === 0) {
    tips.push("Tap anywhere on the image to advance to the next animal.");
    tips.push("Use Explorer Mode so you can see the answers as you learn.");
  } else if (count < 10) {
    tips.push("Study each category separately — start with Mammals, they're most common.");
    tips.push("Focus on distinctive features: coat patterns, bill shapes, body proportions.");
  } else if (count < 25) {
    tips.push("Distinguish similar-looking species: Snow Leopard vs Leopard vs Jaguar.");
    tips.push("Learn geographic clues — many species are region-exclusive.");
  } else if (count < 40) {
    tips.push("Practice less-familiar groups: Amphibians, Marine animals, and Insects.");
    tips.push("Try Championship Mode to test your real knowledge without answer hints.");
  } else if (count < 60) {
    tips.push("At this level, focus on obscure species and rare regional variants.");
    tips.push("World-class contestants average 60–80 per minute — you're getting close!");
  } else {
    tips.push("🌟 Extraordinary! Share your score and challenge fellow wildlife enthusiasts.");
    tips.push("Consider exploring scientific names to deepen your taxonomy knowledge.");
  }
  el.innerHTML = tips.map(t => `<div class="tip-row"><span class="tip-dot">▸</span><span>${t}</span></div>`).join('');
}

/* ─────────────────────────────────────────
   CONFETTI (canvas-based)
───────────────────────────────────────── */
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#7c3aed','#f59e0b','#06b6d4','#10b981','#ec4899','#f1f5f9'];
  const pieces = Array.from({length: 100}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    w: 6 + Math.random() * 10,
    h: 3 + Math.random() * 6,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
    r: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 2,
    vy: 2 + Math.random() * 4,
    vr: (Math.random() - 0.5) * 0.2,
  }));

  let frame = 0;
  const MAX = 180;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = Math.max(0, 1 - frame / MAX);
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
      p.x += p.vx; p.y += p.vy; p.r += p.vr;
    });
    frame++;
    if (frame < MAX) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
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
async function doStartQuiz() {
  // Probe which images actually exist so the queue only has real photos
  const availIds = await probeImages();

  S._startTime = Date.now();
  S.queue = buildQueue(availIds);
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
    S.timerId = setInterval(tickTimer, 200);
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

  showScreen('screen-profile');

  // Warm up image probe in the background so it's cached before launch
  probeImages();
});

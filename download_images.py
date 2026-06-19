#!/usr/bin/env python3
"""
WildVision Image Downloader
Downloads 300 animal images from Wikipedia for the quiz app.
Usage:  python3 download_images.py
All images saved to ./images/  as NNN.jpg
"""

import os, json, time, re, sys
import urllib.request, urllib.parse, urllib.error

# ─── Animal list: (id, display_name, wikipedia_article_title) ───────────────
ANIMALS = [
    # MAMMALS
    (1,   "African Lion",               "Lion"),
    (2,   "Bengal Tiger",              "Bengal tiger"),
    (3,   "Snow Leopard",              "Snow leopard"),
    (4,   "Cheetah",                   "Cheetah"),
    (5,   "Jaguar",                    "Jaguar"),
    (6,   "Leopard",                   "Leopard"),
    (7,   "Cougar",                    "Cougar"),
    (8,   "Clouded Leopard",           "Clouded leopard"),
    (9,   "Caracal",                   "Caracal"),
    (10,  "Serval",                    "Serval"),
    (11,  "Ocelot",                    "Ocelot"),
    (12,  "Bobcat",                    "Bobcat"),
    (13,  "Eurasian Lynx",             "Eurasian lynx"),
    (14,  "Sand Cat",                  "Sand cat"),
    (15,  "Fishing Cat",               "Fishing cat"),
    (16,  "Gray Wolf",                 "Wolf"),
    (17,  "Red Fox",                   "Red fox"),
    (18,  "Arctic Fox",                "Arctic fox"),
    (19,  "Fennec Fox",                "Fennec fox"),
    (20,  "African Wild Dog",          "African wild dog"),
    (21,  "Spotted Hyena",             "Spotted hyena"),
    (22,  "Striped Hyena",             "Striped hyena"),
    (23,  "Dhole",                     "Dhole"),
    (24,  "Brown Bear",                "Brown bear"),
    (25,  "Polar Bear",                "Polar bear"),
    (26,  "Giant Panda",               "Giant panda"),
    (27,  "Sun Bear",                  "Sun bear"),
    (28,  "Spectacled Bear",           "Spectacled bear"),
    (29,  "Sloth Bear",                "Sloth bear"),
    (30,  "African Elephant",          "African bush elephant"),
    (31,  "Asian Elephant",            "Asian elephant"),
    (32,  "White Rhinoceros",          "White rhinoceros"),
    (33,  "Black Rhinoceros",          "Black rhinoceros"),
    (34,  "Indian Rhinoceros",         "Indian rhinoceros"),
    (35,  "Hippopotamus",              "Hippopotamus"),
    (36,  "Pygmy Hippopotamus",        "Pygmy hippopotamus"),
    (37,  "Giraffe",                   "Giraffe"),
    (38,  "Plains Zebra",              "Plains zebra"),
    (39,  "Grevy's Zebra",             "Grevy's zebra"),
    (40,  "Okapi",                     "Okapi"),
    (41,  "Warthog",                   "Warthog"),
    (42,  "Western Gorilla",           "Western gorilla"),
    (43,  "Chimpanzee",                "Chimpanzee"),
    (44,  "Bornean Orangutan",         "Bornean orangutan"),
    (45,  "Mandrill",                  "Mandrill"),
    (46,  "Proboscis Monkey",          "Proboscis monkey"),
    (47,  "Golden Snub-nosed Monkey",  "Golden snub-nosed monkey"),
    (48,  "Japanese Macaque",          "Japanese macaque"),
    (49,  "Gelada",                    "Gelada"),
    (50,  "Hamadryas Baboon",          "Hamadryas baboon"),
    (51,  "Ring-tailed Lemur",         "Ring-tailed lemur"),
    (52,  "Aye-aye",                   "Aye-aye"),
    (53,  "Moose",                     "Moose"),
    (54,  "Caribou",                   "Reindeer"),
    (55,  "American Bison",            "American bison"),
    (56,  "Musk Ox",                   "Musk ox"),
    (57,  "Mountain Goat",             "Mountain goat"),
    (58,  "Bighorn Sheep",             "Bighorn sheep"),
    (59,  "Alpine Ibex",               "Alpine ibex"),
    (60,  "Markhor",                   "Markhor"),
    (61,  "Wildebeest",                "Wildebeest"),
    (62,  "Springbok",                 "Springbok"),
    (63,  "Impala",                    "Impala (animal)"),
    (64,  "Gemsbok",                   "Gemsbok"),
    (65,  "Arabian Oryx",              "Arabian oryx"),
    (66,  "Saiga Antelope",            "Saiga antelope"),
    (67,  "Capybara",                  "Capybara"),
    (68,  "Giant Anteater",            "Giant anteater"),
    (69,  "Three-toed Sloth",          "Pale-throated sloth"),
    (70,  "Giant Armadillo",           "Giant armadillo"),
    (71,  "Platypus",                  "Platypus"),
    (72,  "Short-beaked Echidna",      "Short-beaked echidna"),
    (73,  "Koala",                     "Koala"),
    (74,  "Red Kangaroo",              "Red kangaroo"),
    (75,  "Tasmanian Devil",           "Tasmanian devil"),
    (76,  "Quokka",                    "Quokka"),
    (77,  "Malayan Tapir",             "Malayan tapir"),
    (78,  "Pangolin",                  "Pangolin"),
    (79,  "Narwhal",                   "Narwhal"),
    (80,  "Orca",                      "Orca"),
    (81,  "Humpback Whale",            "Humpback whale"),
    (82,  "Sperm Whale",               "Sperm whale"),
    (83,  "Beluga Whale",              "Beluga whale"),
    (84,  "Bottlenose Dolphin",        "Common bottlenose dolphin"),
    (85,  "Walrus",                    "Walrus"),
    (86,  "Northern Elephant Seal",    "Northern elephant seal"),
    (87,  "Sea Otter",                 "Sea otter"),
    (88,  "Giant Otter",               "Giant otter"),
    (89,  "Wolverine",                 "Wolverine (animal)"),
    (90,  "Honey Badger",              "Honey badger"),
    (91,  "Meerkat",                   "Meerkat"),
    (92,  "Fossa",                     "Fossa (animal)"),
    (93,  "Aardvark",                  "Aardvark"),
    # BIRDS
    (94,  "Bald Eagle",                "Bald eagle"),
    (95,  "Golden Eagle",              "Golden eagle"),
    (96,  "Harpy Eagle",               "Harpy eagle"),
    (97,  "Philippine Eagle",          "Philippine eagle"),
    (98,  "Steller's Sea Eagle",       "Steller's sea eagle"),
    (99,  "Wedge-tailed Eagle",        "Wedge-tailed eagle"),
    (100, "Martial Eagle",             "Martial eagle"),
    (101, "Peregrine Falcon",          "Peregrine falcon"),
    (102, "Gyrfalcon",                 "Gyrfalcon"),
    (103, "Saker Falcon",              "Saker falcon"),
    (104, "Osprey",                    "Osprey"),
    (105, "Snowy Owl",                 "Snowy owl"),
    (106, "Great Horned Owl",          "Great horned owl"),
    (107, "Barn Owl",                  "Barn owl"),
    (108, "Eurasian Eagle-Owl",        "Eurasian eagle-owl"),
    (109, "Spectacled Owl",            "Spectacled owl"),
    (110, "Burrowing Owl",             "Burrowing owl"),
    (111, "Indian Peafowl",            "Indian peafowl"),
    (112, "Congo Peafowl",             "Congo peafowl"),
    (113, "Greater Flamingo",          "Greater flamingo"),
    (114, "Lesser Flamingo",           "Lesser flamingo"),
    (115, "Toco Toucan",               "Toco toucan"),
    (116, "Keel-billed Toucan",        "Keel-billed toucan"),
    (117, "Scarlet Macaw",             "Scarlet macaw"),
    (118, "Blue-and-yellow Macaw",     "Blue-and-yellow macaw"),
    (119, "Hyacinth Macaw",            "Hyacinth macaw"),
    (120, "African Grey Parrot",       "Grey parrot"),
    (121, "Sulphur-crested Cockatoo",  "Sulphur-crested cockatoo"),
    (122, "Palm Cockatoo",             "Palm cockatoo"),
    (123, "Rainbow Lorikeet",          "Rainbow lorikeet"),
    (124, "Kiwi",                      "North Island brown kiwi"),
    (125, "Emu",                       "Emu"),
    (126, "Common Ostrich",            "Common ostrich"),
    (127, "Southern Cassowary",        "Southern cassowary"),
    (128, "Greater Rhea",              "Greater rhea"),
    (129, "Emperor Penguin",           "Emperor penguin"),
    (130, "King Penguin",              "King penguin"),
    (131, "Macaroni Penguin",          "Macaroni penguin"),
    (132, "African Penguin",           "African penguin"),
    (133, "Rockhopper Penguin",        "Rockhopper penguin"),
    (134, "Atlantic Puffin",           "Atlantic puffin"),
    (135, "Tufted Puffin",             "Tufted puffin"),
    (136, "Shoebill",                  "Shoebill"),
    (137, "Secretary Bird",            "Secretarybird"),
    (138, "Magnificent Frigatebird",   "Magnificent frigatebird"),
    (139, "Blue-footed Booby",         "Blue-footed booby"),
    (140, "Red-footed Booby",          "Red-footed booby"),
    (141, "Great Hornbill",            "Great hornbill"),
    (142, "Rhinoceros Hornbill",       "Rhinoceros hornbill"),
    (143, "Ruby-throated Hummingbird", "Ruby-throated hummingbird"),
    (144, "Bee Hummingbird",           "Bee hummingbird"),
    (145, "Sword-billed Hummingbird",  "Sword-billed hummingbird"),
    (146, "Common Kingfisher",         "Common kingfisher"),
    (147, "Giant Kingfisher",          "Giant kingfisher"),
    (148, "Laughing Kookaburra",       "Laughing kookaburra"),
    (149, "Andean Condor",             "Andean condor"),
    (150, "California Condor",         "California condor"),
    (151, "Greater Roadrunner",        "Greater roadrunner"),
    (152, "Resplendent Quetzal",       "Resplendent quetzal"),
    (153, "Hoatzin",                   "Hoatzin"),
    (154, "Kakapo",                    "Kakapo"),
    (155, "Kea",                       "Kea"),
    (156, "Victoria Crowned Pigeon",   "Victoria crowned pigeon"),
    (157, "Raggiana Bird-of-paradise", "Raggiana bird-of-paradise"),
    (158, "Wilson's Bird-of-paradise", "Wilson's bird-of-paradise"),
    (159, "Superb Lyrebird",           "Superb lyrebird"),
    (160, "Superb Fairywren",          "Superb fairywren"),
    (161, "Satin Bowerbird",           "Satin bowerbird"),
    (162, "White Stork",               "White stork"),
    (163, "Marabou Stork",             "Marabou stork"),
    (164, "Great Blue Heron",          "Great blue heron"),
    (165, "Goliath Heron",             "Goliath heron"),
    (166, "Great Egret",               "Great egret"),
    (167, "Scarlet Ibis",              "Scarlet ibis"),
    (168, "Roseate Spoonbill",         "Roseate spoonbill"),
    (169, "Whooping Crane",            "Whooping crane"),
    (170, "Sarus Crane",               "Sarus crane"),
    (171, "Dalmatian Pelican",         "Dalmatian pelican"),
    (172, "Wandering Albatross",       "Wandering albatross"),
    (173, "King Vulture",              "King vulture"),
    (174, "Bearded Vulture",           "Bearded vulture"),
    (175, "Lappet-faced Vulture",      "Lappet-faced vulture"),
    (176, "Indian Roller",             "Indian roller"),
    (177, "European Bee-eater",        "European bee-eater"),
    (178, "Eurasian Hoopoe",           "Eurasian hoopoe"),
    (179, "Lilac-breasted Roller",     "Lilac-breasted roller"),
    (180, "Long-tailed Widowbird",     "Long-tailed widowbird"),
    (181, "Painted Bunting",           "Painted bunting"),
    (182, "Andean Cock-of-the-rock",   "Andean cock-of-the-rock"),
    (183, "Sunbittern",                "Sunbittern"),
    (184, "Hammerkop",                 "Hammerkop"),
    (185, "Greater Sage-Grouse",       "Greater sage-grouse"),
    (186, "African Jacana",            "African jacana"),
    (187, "Turaco",                    "Knysna turaco"),
    (188, "Common Raven",              "Common raven"),
    (189, "Curl-crested Aracari",      "Curl-crested aracari"),
    (190, "Snowy Egret",               "Snowy egret"),
    # REPTILES
    (191, "Komodo Dragon",             "Komodo dragon"),
    (192, "Nile Monitor",              "Nile monitor"),
    (193, "Bengal Monitor",            "Bengal monitor"),
    (194, "Saltwater Crocodile",       "Saltwater crocodile"),
    (195, "Nile Crocodile",            "Nile crocodile"),
    (196, "American Crocodile",        "American crocodile"),
    (197, "American Alligator",        "American alligator"),
    (198, "Chinese Alligator",         "Chinese alligator"),
    (199, "Gharial",                   "Gharial"),
    (200, "Mugger Crocodile",          "Mugger crocodile"),
    (201, "Green Anaconda",            "Green anaconda"),
    (202, "King Cobra",                "King cobra"),
    (203, "Black Mamba",               "Black mamba"),
    (204, "Green Mamba",               "Green mamba"),
    (205, "Reticulated Python",        "Reticulated python"),
    (206, "Burmese Python",            "Burmese python"),
    (207, "African Rock Python",       "African rock python"),
    (208, "Ball Python",               "Ball python"),
    (209, "E. Diamondback Rattlesnake","Eastern diamondback rattlesnake"),
    (210, "W. Diamondback Rattlesnake","Western diamondback rattlesnake"),
    (211, "Gaboon Viper",              "Gaboon viper"),
    (212, "Puff Adder",                "Puff adder"),
    (213, "Inland Taipan",             "Inland taipan"),
    (214, "Eastern Brown Snake",       "Eastern brown snake"),
    (215, "Boa Constrictor",           "Boa constrictor"),
    (216, "Emerald Tree Boa",          "Emerald tree boa"),
    (217, "Boomslang",                 "Boomslang"),
    (218, "Veiled Chameleon",          "Veiled chameleon"),
    (219, "Panther Chameleon",         "Panther chameleon"),
    (220, "Jackson's Chameleon",       "Jackson's chameleon"),
    (221, "Green Iguana",              "Green iguana"),
    (222, "Marine Iguana",             "Marine iguana"),
    (223, "Gila Monster",              "Gila monster"),
    (224, "Mexican Beaded Lizard",     "Mexican beaded lizard"),
    (225, "Frilled-neck Lizard",       "Frilled-neck lizard"),
    (226, "Thorny Dragon",             "Thorny dragon"),
    (227, "Bearded Dragon",            "Pogona"),
    (228, "Blue-tongued Skink",        "Blue-tongued skink"),
    (229, "Tokay Gecko",               "Tokay gecko"),
    (230, "Satanic Leaf-tailed Gecko", "Satanic leaf-tailed gecko"),
    (231, "Leatherback Sea Turtle",    "Leatherback sea turtle"),
    (232, "Green Sea Turtle",          "Green sea turtle"),
    (233, "Hawksbill Sea Turtle",      "Hawksbill sea turtle"),
    (234, "Loggerhead Sea Turtle",     "Loggerhead sea turtle"),
    (235, "Galápagos Tortoise",        "Galápagos tortoise"),
    (236, "Aldabra Giant Tortoise",    "Aldabra giant tortoise"),
    (237, "Indian Star Tortoise",      "Indian star tortoise"),
    (238, "Alligator Snapping Turtle", "Alligator snapping turtle"),
    (239, "Mata Mata Turtle",          "Mata mata"),
    (240, "Painted Turtle",            "Painted turtle"),
    # AMPHIBIANS
    (241, "Red-eyed Tree Frog",        "Red-eyed tree frog"),
    (242, "Blue Poison Dart Frog",     "Dyeing poison dart frog"),
    (243, "Golden Poison Frog",        "Golden poison frog"),
    (244, "Tomato Frog",               "Tomato frog"),
    (245, "Purple Frog",               "Purple frog"),
    (246, "Axolotl",                   "Axolotl"),
    (247, "Fire Salamander",           "Fire salamander"),
    (248, "Chinese Giant Salamander",  "Chinese giant salamander"),
    (249, "Tiger Salamander",          "Tiger salamander"),
    (250, "Goliath Frog",              "Goliath frog"),
    (251, "Glass Frog",                "Glass frog"),
    (252, "Olm",                       "Olm"),
    (253, "Bumblebee Poison Frog",     "Bumblebee poison frog"),
    (254, "Amazon Milk Frog",          "Amazon milk frog"),
    (255, "Pacman Frog",               "Argentine horned frog"),
    (256, "Hellbender",                "Hellbender"),
    (257, "Spotted Salamander",        "Spotted salamander"),
    (258, "Surinam Toad",              "Surinam toad"),
    # MARINE
    (259, "Great White Shark",         "Great white shark"),
    (260, "Whale Shark",               "Whale shark"),
    (261, "Great Hammerhead Shark",    "Great hammerhead"),
    (262, "Bull Shark",                "Bull shark"),
    (263, "Tiger Shark",               "Tiger shark"),
    (264, "Basking Shark",             "Basking shark"),
    (265, "Oceanic Manta Ray",         "Giant oceanic manta ray"),
    (266, "Spotted Eagle Ray",         "Spotted eagle ray"),
    (267, "Giant Pacific Octopus",     "Giant Pacific octopus"),
    (268, "Blue-ringed Octopus",       "Blue-ringed octopus"),
    (269, "Mimic Octopus",             "Mimic octopus"),
    (270, "Giant Squid",               "Giant squid"),
    (271, "Nautilus",                  "Nautilus (mollusc)"),
    (272, "Lion's Mane Jellyfish",     "Lion's mane jellyfish"),
    (273, "Box Jellyfish",             "Box jellyfish"),
    (274, "Leafy Sea Dragon",          "Leafy sea dragon"),
    (275, "Weedy Sea Dragon",          "Weedy seadragon"),
    (276, "Common Seahorse",           "Common seahorse"),
    (277, "Clownfish",                 "Clownfish"),
    (278, "Red Lionfish",              "Red lionfish"),
    (279, "Giant Moray Eel",           "Giant moray"),
    (280, "Peacock Mantis Shrimp",     "Peacock mantis shrimp"),
    (281, "Coconut Crab",              "Coconut crab"),
    (282, "Giant Isopod",              "Giant isopod"),
    (283, "Coelacanth",                "Coelacanth"),
    # INSECTS & ARACHNIDS
    (284, "Monarch Butterfly",         "Monarch butterfly"),
    (285, "Blue Morpho Butterfly",     "Blue morpho"),
    (286, "Atlas Moth",                "Attacus atlas"),
    (287, "Goliath Beetle",            "Goliath beetle"),
    (288, "Hercules Beetle",           "Hercules beetle"),
    (289, "Titan Beetle",              "Titan beetle"),
    (290, "Goliath Birdeater",         "Goliath birdeater"),
    (291, "Black Widow Spider",        "Western black widow"),
    (292, "Peacock Spider",            "Peacock spider"),
    (293, "Orchid Mantis",             "Hymenopus coronatus"),
    (294, "Dead Leaf Mantis",          "Deroplatys desiccata"),
    (295, "Giant Walking Stick",       "Phobaeticus chani"),
    (296, "Jewel Beetle",              "Buprestidae"),
    (297, "Tarantula Hawk",            "Tarantula hawk"),
    (298, "Wallace's Giant Bee",       "Wallace's giant bee"),
    (299, "Morpho Peleides",           "Morpho peleides"),
    (300, "Bombardier Beetle",         "Bombardier beetle"),
]

HEADERS = {
    'User-Agent': 'WildVisionQuiz/1.0 (educational non-commercial tool; https://github.com/)'
}

def get_wiki_image_url(wiki_title, width=800):
    """Fetch the thumbnail URL from Wikipedia REST API, with size fallbacks."""
    encoded = urllib.parse.quote(wiki_title.replace(' ', '_'))
    api_url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{encoded}"
    try:
        req = urllib.request.Request(api_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            for key in ('originalimage', 'thumbnail'):
                if key in data:
                    src = data[key]['source']
                    src = re.sub(r'/\d+px-', f'/{width}px-', src)
                    return src
    except Exception:
        pass
    return None

def get_commons_image_url(wiki_title, width=640):
    """Fallback: use MediaWiki API to find a good image for the article."""
    encoded = urllib.parse.quote(wiki_title.replace(' ', '_'))
    # Try page images API
    api = (
        f"https://en.wikipedia.org/w/api.php"
        f"?action=query&titles={encoded}&prop=pageimages&format=json"
        f"&pithumbsize={width}&pilicense=any"
    )
    try:
        req = urllib.request.Request(api, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        for page in pages.values():
            thumb = page.get('thumbnail', {})
            if thumb.get('source'):
                return thumb['source']
    except Exception:
        pass
    return None

def download_file(url, path):
    """Download url → path, trying smaller sizes if HTTP 400."""
    for try_width in [None, 640, 480, 320, 240]:
        if try_width is not None:
            test_url = re.sub(r'/\d+px-', f'/{try_width}px-', url)
        else:
            test_url = url
        try:
            req = urllib.request.Request(test_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=25) as resp:
                data = resp.read()
            if len(data) < 1000:
                continue
            with open(path, 'wb') as f:
                f.write(data)
            return True, f"{len(data)//1024} KB"
        except urllib.error.HTTPError as e:
            if e.code == 400:
                continue
            return False, f"HTTP {e.code}"
        except Exception as e:
            return False, str(e)[:80]
    return False, "all size variants failed"

def run():
    os.makedirs('images', exist_ok=True)
    ok = fail = skip = 0
    total = len(ANIMALS)

    print(f"\n{'═'*60}")
    print(f"  WildVision Image Downloader  — {total} species")
    print(f"{'═'*60}\n")

    for (aid, name, wiki) in ANIMALS:
        path = f"images/{aid:03d}.jpg"

        # Already downloaded?
        if os.path.exists(path) and os.path.getsize(path) > 2000:
            print(f"  ✓  [{aid:3d}] {name} (cached)")
            skip += 1
            continue

        print(f"  ↓  [{aid:3d}] {name} ... ", end='', flush=True)

        # Try primary (REST summary)
        url = get_wiki_image_url(wiki)

        # If no URL or download fails, try MediaWiki pageimages API
        if url:
            success, info = download_file(url, path)
            if success:
                print(f"✓ {info}")
                ok += 1
                time.sleep(0.2)
                continue
            # Fall through to commons fallback
            print(f"[retry via commons] ", end='', flush=True)

        # Commons / pageimages fallback
        url2 = get_commons_image_url(wiki)
        if url2:
            success, info = download_file(url2, path)
            if success:
                print(f"✓ commons {info}")
                ok += 1
                time.sleep(0.2)
                continue

        print(f"✗ no image found")
        fail += 1
        time.sleep(0.2)

    print(f"\n{'─'*60}")
    print(f"  Done!  ✓ {ok} downloaded  ·  ⟳ {skip} cached  ·  ✗ {fail} failed")
    if fail > 0:
        print(f"  Tip: Re-run the script to retry failed downloads.")
    print(f"{'─'*60}\n")

if __name__ == '__main__':
    run()

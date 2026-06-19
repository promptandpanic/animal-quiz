#!/usr/bin/env python3
"""
Wildlife Quiz Image Downloader
Downloads 133 animal images from Wikipedia for the quiz app.
Usage:  python3 download_images.py
All images saved to ./images/  as NNN.jpg
"""

import os, json, time, re, sys
import urllib.request, urllib.parse, urllib.error

# ─── Animal list: (id, display_name, wikipedia_article_title) ───────────────
ANIMALS = [
    (107, "Poison Dart Frog         ", "Dyeing poison dart frog"),
    (108, "Axolotl                  ", "Axolotl"),
    (109, "Salamander               ", "Fire salamander"),
    (110, "Red-eyed Tree Frog       ", "Agalychnis callidryas"),
    (111, "Toad                     ", "Common toad"),
    (112, "Jackal                   ", "Golden jackal"),
    (113, "Wildebeest               ", "Wildebeest"),
    (66 , "Bald Eagle               ", "Bald eagle"),
    (67 , "Snowy Owl                ", "Snowy owl"),
    (68 , "Barn Owl                 ", "Barn owl"),
    (69 , "Flamingo                 ", "Greater flamingo"),
    (70 , "Peacock                  ", "Indian peafowl"),
    (71 , "Toucan                   ", "Toco toucan"),
    (72 , "Scarlet Macaw            ", "Scarlet macaw"),
    (73 , "Penguin                  ", "Penguin"),
    (74 , "Ostrich                  ", "Common ostrich"),
    (75 , "Emu                      ", "Emu"),
    (76 , "Kiwi                     ", "North Island brown kiwi"),
    (77 , "Kingfisher               ", "Common kingfisher"),
    (78 , "Pelican                  ", "Great white pelican"),
    (79 , "Hummingbird              ", "Ruby-throated hummingbird"),
    (80 , "Swan                     ", "Mute swan"),
    (81 , "Duck                     ", "Mallard"),
    (82 , "Goose                    ", "Canada goose"),
    (83 , "Rooster                  ", "Rooster"),
    (84 , "Turkey                   ", "Wild turkey"),
    (85 , "Seagull                  ", "European herring gull"),
    (86 , "Falcon                   ", "Peregrine falcon"),
    (87 , "Parrot                   ", "Grey parrot"),
    (88 , "Puffin                   ", "Atlantic puffin"),
    (89 , "Woodpecker               ", "Great spotted woodpecker"),
    (90 , "Pigeon                   ", "Rock dove"),
    (163, "Cassowary                ", "Cassowary"),
    (164, "Shoebill                 ", "Shoebill"),
    (165, "Hornbill                 ", "Hornbill"),
    (166, "Albatross                ", "Albatross"),
    (167, "Stork                    ", "Stork"),
    (168, "Spoonbill                ", "Spoonbill"),
    (169, "Vulture                  ", "Vulture"),
    (170, "Quail                    ", "Common quail"),
    (171, "Secretary Bird           ", "Secretarybird"),
    (172, "Quetzal                  ", "Resplendent quetzal"),
    (126, "Monarch Butterfly        ", "Monarch butterfly"),
    (127, "Honeybee                 ", "Honey bee"),
    (128, "Ladybug                  ", "Coccinellidae"),
    (129, "Rabbit                   ", "Rabbit"),
    (130, "Tarantula                ", "Tarantula"),
    (132, "Grasshopper              ", "Grasshopper"),
    (133, "Dragonfly                ", "Dragonfly"),
    (1  , "Lion                     ", "Lion"),
    (2  , "Tiger                    ", "Tiger"),
    (3  , "Cheetah                  ", "Cheetah"),
    (4  , "Jaguar                   ", "Jaguar"),
    (5  , "Leopard                  ", "Leopard"),
    (6  , "Snow Leopard             ", "Snow leopard"),
    (7  , "Cougar                   ", "Cougar"),
    (8  , "Gray Wolf                ", "Wolf"),
    (9  , "Red Fox                  ", "Red fox"),
    (10 , "Arctic Fox               ", "Arctic fox"),
    (11 , "Fennec Fox               ", "Fennec fox"),
    (12 , "Brown Bear               ", "Brown bear"),
    (13 , "Polar Bear               ", "Polar bear"),
    (14, "Giant Panda              ", "Giant panda"),
    (15, "Black Panther            ", "Black panther"),
    (16, "African Elephant         ", "African bush elephant"),
    (17 , "Asian Elephant           ", "Asian elephant"),
    (18 , "Rhinoceros               ", "Rhinoceros"),
    (19 , "Hippopotamus             ", "Hippopotamus"),
    (20 , "Giraffe                  ", "Giraffe"),
    (21 , "Zebra                    ", "Plains zebra"),
    (22 , "Chimpanzee               ", "Chimpanzee"),
    (23 , "Gorilla                  ", "Western gorilla"),
    (24 , "Orangutan                ", "Bornean orangutan"),
    (25 , "Ring-tailed Lemur        ", "Ring-tailed lemur"),
    (26 , "Moose                    ", "Moose"),
    (27 , "Reindeer                 ", "Reindeer"),
    (28 , "American Bison           ", "American bison"),
    (29 , "Kangaroo                 ", "Kangaroo"),
    (30 , "Red Kangaroo             ", "Red kangaroo"),
    (31 , "Tree Kangaroo            ", "Tree-kangaroo"),
    (32 , "Koala                    ", "Koala"),
    (33 , "Platypus                 ", "Platypus"),
    (34 , "Capybara                 ", "Capybara"),
    (35 , "Sloth                    ", "Pale-throated sloth"),
    (36 , "Anteater                 ", "Anteater"),
    (37 , "Meerkat                  ", "Meerkat"),
    (38 , "Honey Badger             ", "Honey badger"),
    (44 , "Bactrian Camel           ", "Bactrian camel"),
    (45 , "Llama                    ", "Llama"),
    (46 , "Alpaca                   ", "Alpaca"),
    (47 , "Red Panda                ", "Red panda"),
    (48 , "Beaver                   ", "North American beaver"),
    (49 , "Hedgehog                 ", "European hedgehog"),
    (50 , "Squirrel                 ", "Red squirrel"),
    (51 , "Chipmunk                 ", "Eastern chipmunk"),
    (52 , "Raccoon                  ", "Raccoon"),
    (53 , "Skunk                    ", "Striped skunk"),
    (54 , "Yak                      ", "Yak"),
    (55 , "Otter                    ", "European otter"),
    (56 , "Echidna                  ", "Short-beaked echidna"),
    (57 , "Wombat                   ", "Wombat"),
    (58 , "Tasmanian Devil          ", "Tasmanian devil"),
    (59 , "Opossum                  ", "Virginia opossum"),
    (60 , "Mongoose                 ", "Mongoose"),
    (61 , "Hyena                    ", "Spotted hyena"),
    (62 , "Howler Monkey            ", "Howler monkey"),
    (63 , "Spider Monkey            ", "Spider monkey"),
    (64 , "Gibbon                   ", "Gibbon"),
    (65 , "Baboon                   ", "Hamadryas baboon"),
    (106, "Deer                     ", "Deer"),
    (131, "Antelope                 ", "Antelope"),
    (134, "Mandrill                 ", "Mandrill"),
    (135, "Pangolin                 ", "Pangolin"),
    (136, "Okapi                    ", "Okapi"),
    (137, "Saiga Antelope           ", "Saiga antelope"),
    (138, "Fossa                    ", "Fossa (animal)"),
    (139, "Aye-aye                  ", "Aye-aye"),
    (140, "Numbat                   ", "Numbat"),
    (141, "Quokka                   ", "Quokka"),
    (142, "Tarsier                  ", "Tarsier"),
    (143, "Warthog                  ", "Common warthog"),
    (144, "Wild Boar                ", "Wild boar"),
    (145, "Aardvark                 ", "Aardvark"),
    (146, "Armadillo                ", "Nine-banded armadillo"),
    (147, "Porcupine                ", "Porcupine"),
    (148, "Caracal                  ", "Caracal"),
    (149, "Lynx                     ", "Eurasian lynx"),
    (150, "Serval                   ", "Serval"),
    (151, "Coyote                   ", "Coyote"),
    (152, "Wolverine                ", "Wolverine"),
    (153, "Sifaka                   ", "Sifaka"),
    (154, "Markhor                  ", "Markhor"),
    (155, "Takin                    ", "Takin"),
    (156, "Kinkajou                 ", "Kinkajou"),
    (157, "Ocelot                   ", "Ocelot"),
    (158, "Tapir                    ", "South American tapir"),
    (159, "Ibex                     ", "Alpine ibex"),
    (160, "Dromedary Camel          ", "Dromedary"),
    (161, "Chinchilla               ", "Chinchilla"),
    (162, "Aardwolf                 ", "Aardwolf"),
    (295, "African Wild Dog         ", "African wild dog"),
    (296, "Nilgai                   ", "Nilgai"),
    (297, "Gazelle                  ", "Gazelle"),
    (298, "Red Deer                 ", "Red deer"),
    (300, "Elk                      ", "Elk"),
    (39 , "Whale                    ", "Blue whale"),
    (40 , "Whale                    ", "Humpback whale"),
    (41 , "Dolphin                  ", "Common bottlenose dolphin"),
    (42 , "Walrus                   ", "Walrus"),
    (43 , "Sea Otter                ", "Sea otter"),
    (114, "Shark                    ", "Great white shark"),
    (115, "Hamster                  ", "Hamster"),
    (116, "Hammerhead Shark         ", "Great hammerhead"),
    (117, "Manta Ray                ", "Giant oceanic manta ray"),
    (118, "Octopus                  ", "Giant Pacific octopus"),
    (119, "Giant Squid              ", "Giant squid"),
    (120, "Clownfish                ", "Clownfish"),
    (121, "Seahorse                 ", "Common seahorse"),
    (122, "Lionfish                 ", "Red lionfish"),
    (123, "Crow                     ", "Crow"),
    (124, "Starfish                 ", "Starfish"),
    (125, "Crab                     ", "Red king crab"),
    (174, "Seal                     ", "Harbor seal"),
    (175, "Manatee                  ", "Manatee"),
    (176, "Jellyfish                ", "Jellyfish"),
    (177, "Narwhal                  ", "Narwhal"),
    (91 , "Komodo Dragon            ", "Komodo dragon"),
    (92 , "Crocodile                ", "Nile crocodile"),
    (93 , "Alligator                ", "American alligator"),
    (94 , "Gharial                  ", "Gharial"),
    (95 , "Iguana                   ", "Green iguana"),
    (96 , "Chameleon                ", "Veiled chameleon"),
    (97 , "King Cobra               ", "King cobra"),
    (98 , "Rattlesnake              ", "Eastern diamondback rattlesnake"),
    (99 , "Gila Monster             ", "Gila monster"),
    (100, "Sea Turtle               ", "Green sea turtle"),
    (101, "Galápagos Tortoise       ", "Galápagos tortoise"),
    (102, "Cardinal                 ", "Northern cardinal"),
    (103, "Gecko                    ", "Tokay gecko"),
    (104, "Box Turtle               ", "Common box turtle"),
    (105, "Python                   ", "Ball python"),
    (173, "Tuatara                  ", "Tuatara"),
    (299, "Caiman                   ", "Caiman"),
    (301, "Wallaby                  ", "Wallaby"),
    (302, "Capuchin Monkey          ", "Capuchin monkey"),
    (303, "Tamarin Monkey           ", "Emperor tamarin"),
    (304, "Bobcat                   ", "Bobcat"),
    (305, "Ferret                   ", "Ferret"),
    (306, "Binturong                ", "Binturong"),
    (307, "Golden Eagle             ", "Golden eagle"),
    (308, "Hawk                     ", "Hawk"),
    (309, "Heron                    ", "Heron"),
    (310, "Osprey                   ", "Osprey"),
    (311, "Sidewinder Snake         ", "Crotalus cerastes"),
    (312, "Monitor Lizard           ", "Monitor lizard"),
    (313, "Anaconda                 ", "Anaconda"),
    (314, "Stingray                 ", "Stingray"),
    (315, "Guinea Pig               ", "Guinea pig"),
    (316, "Lobster                  ", "Lobster"),
    (317, "Firefly                  ", "Firefly"),
]

HEADERS = {
    'User-Agent': 'WildVisionQuiz/1.0 (educational non-commercial tool; https://github.com/)'
}

def get_wiki_image_url(wiki_title, width=800):
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
    encoded = urllib.parse.quote(wiki_title.replace(' ', '_'))
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

    # Fallback to original image if thumb sizing fails
    if "/commons/thumb/" in url:
        original_url = url.replace("/commons/thumb/", "/commons/")
        if original_url.count("/") >= 8:
            original_url = "/".join(original_url.split("/")[:-1])
            try:
                req = urllib.request.Request(original_url, headers=HEADERS)
                with urllib.request.urlopen(req, timeout=25) as resp:
                    data = resp.read()
                if len(data) >= 1000:
                    with open(path, 'wb') as f:
                        f.write(data)
                    return True, f"{len(data)//1024} KB (original)"
            except Exception:
                pass

    return False, "all size variants failed"

def run():
    os.makedirs('images', exist_ok=True)
    ok = fail = skip = 0
    total = len(ANIMALS)

    print(f"\n{'═'*60}")
    print(f"  Wildlife Quiz Image Downloader  — {total} species")
    print(f"{'═'*60}\n")

    for (aid, name, wiki) in ANIMALS:
        path = f"images/{aid:03d}.jpg"

        # Already downloaded?
        # Note: If you want to force redownload for a fresh start, you can clear the images folder.
        if os.path.exists(path) and os.path.getsize(path) > 2000:
            print(f"  ✓  [{aid:3d}] {name} (cached)")
            skip += 1
            continue

        print(f"  ↓  [{aid:3d}] {name} ... ", end='', flush=True)

        url = get_wiki_image_url(wiki)
        if url:
            success, info = download_file(url, path)
            if success:
                print(f"✓ {info}")
                ok += 1
                time.sleep(0.2)
                continue
            print(f"[retry via commons] ", end='', flush=True)

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

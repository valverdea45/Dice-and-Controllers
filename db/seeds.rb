# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

adrian = User.create(username: "adrian", password: "123456", email: "adrian@adrian.com")

daniel = User.create(username: "daniel", password: "1234567", email: "daniel@daniel.com")

chess = TableTop.create(name: "Chess", price: 10.99, type_of: "tabletop", description: "a very strategy based game who the winner is who ever can check mate or kill the other persons king first", image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NoZXNzLTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=")

mw3 = VideoGame.create(name: "MW3", price: 61.99, type_of: "videogame", description: "a very competitive first person shooter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFh4n6gkmmKoE-BkJsiDCVjBSNW0iqiE8iMdBdMop7&s")

connect_4 = TableTop.create(name: "Connect Four", price: 32.99, type_of: "tabletop", description: "a table top who the winner is the person who can connect all four chips first", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhH9hilSV7Fc6j3q43u2y43JiP4MX3GHdgw&usqp=CAU")

undertale = VideoGame.create(name: "Undertale", price: 65.99, type_of: "videogame", description: "A video game that tells a story of a human making friends with monsters or kill them?", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsvk6cjZrc-DA3x3eI9Xccze0jJqNxIOsOA&usqp=CAU")

kingdom_hearts_2 = VideoGame.create(name: "Kingdom Hearts 2", price: 60.99, type_of: "videogame", description: "A heart felt story about Sora trying to save his friends", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsw_IVYpAhW4w-S9HAOWsUrh3ZtUYuCL_e1VjyA3uKY8vu8tgEyE2HYLTLORsPQavFLs&usqp=CAU")

world_at_war = VideoGame.create(name: "World At War", price: 59.99, type_of: "videogame", description: "One of the best first person shooters to come out", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrkVayC73Zb-pEhmotuj5FnEzBCrvL5GRkA&usqp=CAU")

pokemon_black_and_white = VideoGame.create(name: "Pokemon Black and White", price: 59.99, type_of: "videogame", description: "follow the journey of a young Pokémon trainer through the region of Unova, as they train Pokémon used to compete against other trainers", image: "https://www.giantbomb.com/a/uploads/original/0/976/2068104-pokemon_whack.jpg")

fire_emblem = VideoGame.create(name: "Fire Emblem", price: 65.99, type_of: "videogame", description: "In the visually stunning world of the Fire Emblem Awakening game, you command and fight alongside an army of spirited heroes standing against an enemy with the power to destroy empires; a dark dragon whose agents include armies of the undead.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmry2j6lv1q8EgE1us9f3oVmrBYzNtkLvnDw&usqp=CAU")

mario_sunshine = VideoGame.create(name: "Super Mario Sunshine", price: 32.99, type_of: "videogame", description: "Mario's biggest, most amazing adventure ever. When Mario, Peach, and an entourage of Peach's loyal Toad friends set out for a tropical vacation on lovely Dolphin Island, they're in store for much more than a relaxing holiday.", image:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/gamecube_12/SI_GCN_SuperMarioSunshine_image1600w.jpg")

wind_waker = VideoGame.create(name: "The Legend of Zelda The WindWaker", price: 34.99, type_of: "videogame", description: "The game is set on a group of islands in a vast sea, a departure for the series. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred wish-granting relic.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2H-WknMG_Wri9mxRhbG10GN0UQdo3pzZ5g&usqp=CAU")

cyber_punk = VideoGame.create(name: "Cyber Punk", price: 63.99, type_of: "videogame", description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNC5gkdzMPpqE0MkXN-n4lbBPGYpLM5AwoMA&usqp=CAU")

mortal_combat = VideoGame.create(name: "Mortal Combat", price: 35.99, type_of: "videogame", description: "
In Mortal Kombat players select one of many unique characters to battle against other fighters in a gauntlet-style tournament to determine who faces the final “boss.”", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0I-n-tj71Y79w-FVdq0EKzYxVn-qco794Jw&usqp=CAU")

yatzee = TableTop.create(name: "yahtzee", price: 32.99, type_of: "tabletop", description: "Yahtzee is a dice game based on Poker. The object of the game is to roll certain combinations of numbers with five dice. At each turn you throw dice trying to get a good combination of numbers; different combinations give different scores. While luck plays a big role in Yahtzee, strategy makes a significant difference.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeawfLsH_5nvk_OOrnKOK91uZui3kUP44_g&usqp=CAU")

monoply = TableTop.create(name: "Monoply", price: 30.99, type_of: "tabletop", description: "Monopoly is a multiplayer economics-themed board game. In the game, players roll two dice to move around the game board, buying and trading properties and developing them with houses and hotels. Players collect rent from their opponents and aim to drive them into bankruptcy.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRtVb-h6IIcUOl1ML_X-5ddyMhPu_UJ6RJw&usqp=CAU")

poker = TableTop.create(name: "Poker", price: 10.99, type_of: "tabletop", description: " any of several card games in which a player bets that the value of his or her hand is greater than that of the hands held by others", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtXVR9EcpfSRme7vMNx-vh-jjra5RIw4ZEw&usqp=CAU")

checkers = TableTop.create(name: "Checkers", price: 29.99, type_of: "tabletop", description: "Checkers is a game played on a board checkered with squares of two colors. Two players compete in checkers to have the last piece on the board.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTLYdZ-zYWNK9Wf-kqkDz0piM7XIW5jR0ow&usqp=CAU")

operation = TableTop.create(name: "Hasbro Operation", price: 32.97, type_of: "tabletop", description: "Use the tweezers to take out all of Cavity Sam's 12 funny ailment parts that parents might remember -- such as a wishbone, Charlie horse, and Adam's apple. Players choose a doctor card and operate to remove that ailment from Sam, and collect the money if they can avoid the buzz. The player with the most money wins!", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fS8SecIk3cALoLZ6McfRHh88fyMzqOE1pQ&usqp=CAU")

candy_land = TableTop.create(name: "Candy Land", price: 43.56, type_of: "tabletop", description: "The game, which invites players to explore a peppermint stick forest, a peanut brittle house, a molasses swamp, and a gumdrop mountain, was designed to foster imagination and individual play, rather than encourage competition.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJkj3alTn7nsdwUzQ_oMEiGt20PMISZFcgA&usqp=CAU")

uno = TableTop.create(name: "Uno", price: 26.98, type_of: "tabletop", description: "UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9geNsjpS8cq_mCVGe92dxI1sbkcpNtEgPSA&usqp=CAU")

snakes_and_ladders = TableTop.create(name: "Snakes and Ladders", price: 30.99, type_of: "tabletop", description: "Players roll a die and navigate the board. Landing on a ladder advances a player to a square further up the board, while landing on a snake means they have to go back to a previous square. The aim of the game is to reach the final square. The game is a race that's based on sheer luck, and is popular with children.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbkL2bLAFQfo873G4o6_9qN-ff6-pCtj0qw&usqp=CAU")



adrian.table_top_reviews.create(body: "this game is so stratagy based its nuts", table_top_id: 1)

chess.table_top_reviews.create(body: "nah this game is boring and lame", user_id: 2)

TableTopReview.create(body: "maybe you just suck!", table_top_id: 1, user_id: 1)

adrian.video_game_reviews.create!(body: "this game is crazy fun!", video_game_id: 1)

daniel.video_game_reviews.create!(body: "this game has intense gameplay I agree", video_game_id: 1)

connect_4.table_top_reviews.create!(body: "this game is so fun with friends!", user_id: 2)

adrian.table_top_reviews.create!(body: "this game can be very intense LOL", table_top_id: 2)

adrian.video_game_reviews.create!(body: "this game had me crying at the end", video_game_id: 2)

undertale.video_game_reviews.create!(body: "crybaby lmao", user_id: 2)

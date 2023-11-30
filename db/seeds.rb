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



adrian.table_top_reviews.create(body: "this game is so stratagy based its nuts", table_top_id: 1)

chess.table_top_reviews.create(body: "nah this game is boring and lame", user_id: 2)

TableTopReview.create(body: "maybe you just suck!", table_top_id: 1, user_id: 1)

adrian.video_game_reviews.create!(body: "this game is crazy fun!", video_game_id: 1)

daniel.video_game_reviews.create!(body: "this game has intense gameplay I agree", video_game_id: 1)

connect_4.table_top_reviews.create!(body: "this game is so fun with friends!", user_id: 2)

adrian.table_top_reviews.create!(body: "this game can be very intense LOL", table_top_id: 2)

adrian.video_game_reviews.create!(body: "this game had me crying at the end", video_game_id: 2)

undertale.video_game_reviews.create!(body: "crybaby lmao", user_id: 2)

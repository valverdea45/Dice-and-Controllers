# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

adrian = User.create(username: "adrian", password: "123456", password_confirmation: "123456", email: "adrian@adrian.com")

chess = TableTop.create(name: "Chess", price: 10.99, type_of: "tabletop", description: "the best table top", image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NoZXNzLTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=")

mw3 = VideoGame.create(name: "MW3", price: 61.99, type_of: "videogame", description: "this is the best video game", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFh4n6gkmmKoE-BkJsiDCVjBSNW0iqiE8iMdBdMop7&s")

# r1 = mw3.reviews.create(body: "this game is way to expensive bro", item_id: mw3.id, user_id: adrian.id, likes: 0 )

# byebug
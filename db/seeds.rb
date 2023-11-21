# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# adrian = User.create(username: "adrian", password: "123456", password_confirmation: "123456", email: "adrian@adrian.com")

chess = TableTop.create(name: "Chess", price: 10.99, description: "the best table top", image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NoZXNzLTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=")

mw3 = VideoGame.create(name: "MW3", price: 61.99, description: "this is the best video game", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFh4n6gkmmKoE-BkJsiDCVjBSNW0iqiE8iMdBdMop7&s")
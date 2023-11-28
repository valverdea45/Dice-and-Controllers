# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

adrian = User.create(username: "adrian", password: "123456", password_confirmation: "123456", email: "adrian@adrian.com")

chess = TableTop.create(name: "Chess", price: 10.99, type_of: "tabletop", description: "a very strategy based game who the winner is who ever can check mate or kill the other persons king first", image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NoZXNzLTQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=")

mw3 = VideoGame.create(name: "MW3", price: 61.99, type_of: "videogame", description: "a very competitive first person shooter", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFh4n6gkmmKoE-BkJsiDCVjBSNW0iqiE8iMdBdMop7&s")

connect_4 = TableTop.create(name: "Connect Four", price: 32.99, type_of: "tabletop", description: "a table top who the winner is the person who can connect all four chips first", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhH9hilSV7Fc6j3q43u2y43JiP4MX3GHdgw&usqp=CAU")

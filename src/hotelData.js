//The following function fetches all of the data inside the array
export function getHotelData() {
  return hotelData;
}

// this funciton fetch a single hotel by its ID
export function getHotel(id) {
  return hotelData.find((hotel) => hotel.id == id);
}

//This array of object contains the hotels. Each hotel is an object with properties
export const hotelData = [
 
  {
    id: 1,
    title: "seaside House",
    restaurant: "seaside Restaurant",
    country: "England",
    city: "Cornwall",
    price: '€170',
    desc: "You can’t get further west than the ancient Celtic kingdom of Cornwall (or Kernow, as it’s known to Cornish speakers). Blessed with the southwest’s wildest coastline and most breathtakingly beautiful beaches, this proudly independent peninsula has always marched to its own tune.",
    fooddesc:
      "Breakfast in our large airy dining room with views over the terrace, Looe river and the valley, are relaxed affairs, catering to all tastes. It’s a Cornish feast served up with a touch of Mediterranean! Wherever possible we use local suppliers to source our breads, seafood, vegetables, eggs and fresh fruits, but we rely on the Italians for some of our produce including carefully selected fresh coffee, cured meats and cheeses.",
    image: "/assets/images/seaside/seaside_housemain.jpg",
    headerimage: "/assets/images/seaside/seaside_clams.jpg",
    rating: '4',
    foodFact: "/assets/bilderfact/seasiderestfact.jpg",
    hotelFact: "/assets/bilderfact/seasidehousefacts.jpg",
    hoteldetails: [
      {
        image: "/assets/images/seaside/seaside_room1.jpeg",
        title: "premier Double",
        desc: "Premier Double with garden view.  Elegantly presented with full en-suite facilities; flat screen TVs; hair dryers; alarm clocks and wi-fi access. Double sink bathroom, bathtub and office desk.",
      },
      {
        image: "/assets/images/seaside/seaside_room2.jpeg",
        title: "superior King",
        desc: "Superior King or Twin Room with ocean view. Elegantly presented with full en-suite facilities; flat screen TVs; hair dryers; alarm clocks and wi-fi access.",
      },
      {
        image: "/assets/images/seaside/seaside_activity1.jpeg",
        title: "relax",
        desc: "A mile north of Lizard Point, this National Trust–owned inlet is an absolute showstopper.  It’s an impossibly beautiful spot and a perfect place for a relaxing picknick with a view. When the seas aren’t too rough, it’s an exhilarating place for a swim.",
      },
      {
        image: "/assets/images/seaside/seaside_activity2.jpeg",
        title: "beaches",
        desc: "Exploring the coast and estuaries near Falmouth – opening up everything from gliding up the sheltered waters of the bewitching Helford Passage to paddling beneath the exposed cliffs of the Lizard peninsula. It’s an unforgettable way to explore.",
      },
    ],

    restaurantdetails: [
      {
        image: "/assets/images/seaside/food_sallad2.jpg",
        title: "green Breakfast",
        desc: "Healthy green breakfast for people who seek a nutrition packed start of the day. Comes with green tea and freshly squeezed green juice.",
      },
      {
        image: "/assets/images/seaside/food_panncakes.jpg",
        title: "pancakes",
        desc: "Pancakes made from organically sourced ingredients. Perfect before a long day of exploring the coastline. Comes with Fair Trade coffee and orange juice. ",
      },
      {
        image: "/assets/images/seaside/food_sallad.jpeg",
        title: "salads",
        desc: "Our healthy salads are made from 100% organic produce and changes regularly over the seasons. ",
      }],
    restaurantaside: [
      {
        image: "/assets/images/seaside/food_picnic.jpg",
        title: "picnic Lunch",
        subtitle:
          "Let us pack your lunch basket that you can bring to the beach.",
        desc: "It’s hard to beat a picnic on a beautiful sunny day. Warm weather, good food and the great outdoors – what could be better? One key advantage of picnics is that you will get the opportunity to relax from your stressful daily life. The fresh air does wonders for your mental health. Spending time outside is shown to reduce levels of anxiety and lower levels of activity in the parts of our brains related to mental illness. ",
        paragraph:
          "Our picknicks can be suitable for any dietary requirements. Just let the concierge know one day before. ",
      },
    ],
  },
  {
    id: 2,
    title: "city House",
    restaurant: "city Restaurant",
    country: "USA",
    city: "New York",
    price: '€210',
    desc: "Situated in the heart of upper midtown Manhattan on West 56th Street at 5th Avenue, city House is a celebration of contemporary art and design. It’s just two blocks from Central Park and on the doorstep of some of New York’s leading restaurants, galleries and museums, including MoMA.",
    fooddesc:
      "Step into a world of nostalgia and glamour at the Chicago-style Cavendish House, a heritage gem lavishly reimagined by Andrew McConnell and Acme & Co. It’s a space for all seasons and reasons, from casual catch-ups at the bar to intimate booths and an elegant dining stage above the city streets.",
    image: "/assets/images/city/city_main.jpeg",
    headerimage: "/assets/images/city/city_food_main.jpeg",
    rating: '4.5',
    foodFact: "/assets/bilderfact/cityrestfact.jpg",
    hotelFact: "/assets/bilderfact/cityhousefacts.jpg",
    hoteldetails: [
      {
        image: "/assets/images/city/city_room1.jpg",
        title: "city View King",
        desc: "A lavish studio merging old-world elegance with modern convenience, the city View King possesses a storied interior equipped with everything one might need.",
      },
      {
        image: "/assets/images/city/city_room2.jpg",
        title: "city View Twin",
        desc: "A lavish studio merging old-world elegance with modern convenience, the city View Twin possesses a storied interior equipped with everything one might need.",
      },
      {
        image: "/assets/images/city/city_activity1.jpg",
        title: "city Life",
        desc: "Situated at the heart of New York City in the historic Chelsea neighborhood, the city House is steps from archetypal landmarks, museums, galleries, and restaurants—and only a short cab ride from a host of other pivotal Manhattan affairs.",
      },
      {
        image: "/assets/images/city/city_activity2.jpg",
        title: "city Life",
        desc: "Epicenter of the arts. Architectural darling. Dining and shopping capital. Trendsetter. New York City wears many crowns, and spreads an irresistible feast for all. We give you a long list of recommendations to do in the city, so you can get the full New York experience!",
      },
    ],
    restaurantdetails: [
      {
        image: "/assets/images/city/city_food5.jpg",
        title: "american Pancakes",
        desc: "Breakfast is for many people the favourite meal of the day. We don’t limit ourselfs to the morning. Have pancakes for dinner!",
      },
      {
        image: "/assets/images/city/city_casserole .jpg",
        title: "seafood Dinner",
        desc: "The America east coast offers a great range of fresh seafood. Enjoy our fresh seafood prepared by the famous chef Daniel Andrews. ",
      },
      {
        image: "/assets/images/city/city_lemons7.jpg",
        title: "lovely Lemons",
        desc: "Our citrus and leafy greens are picked from our roof top green house garden.  ",
      }],
      
    restaurantaside: [
      {
        image: '/assets/images/city/city_foodaside.jpg',
        title: "lunch Hop",
        subtitle:
          "Lunch hop at our favourite cafés in the city. Every Sunday we do a five stop lunch session with small nibbles with accustomed wine pairings. Kids are welcome and are offered alcohol-free drinks. ",
          desc: "",
        paragraph: 'Our lunch picnics can be suitable for any dietary requirements. Just let the concierge know when you make your booking.',
      },
    ],
  },
  {
    id: 3,
    title: "romance House",
    restaurant: "ROMANCE RESTAURANT",
    country: "Italy",
    city: "Bolzano",
    price: '€190',
    desc: "A truly special place to focus on well-being in a spectacular panoramic location, surrounded by the beauty of the Dolomites. A stay at the romance House on the Alpe di Siusi - Seiser Alm is total immersion into a marvellous natural environment.",
    fooddesc:
      "In line with our philosophy of responsibility toward nature, we give preference to local and regional products: beside being more ecological, they are also fresher and therefore healthier. So we can sincerely state that for the creative Mediterranean, regional and international inspired dishes, our chef and his team use carefully selected high quality products. A wholesome diet keeps us healthier longer. And being healthy increases the joy of living. We willingly accept such a responsibility!",
    image: "/assets/images/romance/romance_hotelmain.jpg",
    headerimage: "/assets/images/romance/romance_oyster_main.jpg",
    rating: '5',
    foodFact: "/assets/bilderfact/romancerestfact.jpg",
    hotelFact: "/assets/bilderfact/romancehousefacts.jpg",
    hoteldetails: [
      {
        image: "/assets/images/romance/romance_room.gif",
        title: "holistic Stay",
        desc: "spa House is focused entirely on your overall wellness: holistic treatments, health and wellness programs, top quality cosmetic products and relaxing beauty treatments, whose benefits you’ll feel for a long time, even when you’re back at home.",
      },
      {
        image: "/assets/images/romance/romance_room2.jpg",
        title: "romance Rooms",
        desc: "The interiors of the rooms and suites combine refined styling and furnishings conceived with the utmost care, for an elegant design that’s also incredibly comfortable. The beautiful view of the Dolomites from the balconies or from the terraces gives the rooms and the suites a truly special and unique touch.",
      },
      {
        image: "/assets/images/romance/romance_activity1.jpeg",
        title: "creating Memories",
        desc: "here are many ways to discover the Alpe di Siusi, practicing your favourite sport in a unique setting: walking and hiking, climbing on paths with handrails, horse-back riding or just relaxing in the heart of nature, surrounded by luxuriant meadows and silent woods, being continuously surprised by marvellous and always different panoramic views.",
      },
      {
        image: "/assets/images/romance/romance_activity2.jpg",
        title: "mountain Lounge",
        desc: "A cosy environment with a lovely atmosphere. Here it’s easy to make friends and enjoy stimulating conversation. The relaxing and cosy atmosphere will entice you to linger in the comfortable easy-chairs.",
      },
    ],
    restaurantdetails: [
      {
        image: "/assets/images/romance/romance_food1.jpg",
        title: "sweet BreakFast",
        desc: "French toast with syrup and fresh fruit for a sweet and delicious start of the day!",
      },
      {
        image: "/assets/images/romance/romance_food2.jpg",
        title: "fusion Breakfast",
        desc: "Try our fusion breakfast inspired from all corners of the world. But of course made with 100% Italian ingredients. ",
      },
      {
        image: "/assets/images/romance/romance_food3.jpg",
        title: "italian Breakfast",
        desc: "Italians like a light breakfast. Try one of our pastries with an espresso made from arabica beans. ",
      }],
      
    restaurantaside: [
      {
        image: "/assets/images/romance/romance_icecream4.jpg",
        title: "romance Lunch",
        subtitle:
          "Enjoy a long lunch in the mountain lodge with your loved one. Set menus start from 69 euros. Choose between five-course, eight-course or ten-course. ",
          desc: 'Enjoy a five course lunch or eight course dinner. Pair it with our different wines. Perfect lunch/dinner for a romantic getaway.',
        paragraph:
        'Our set menu can be suitable for any dietary requirements. Just let us know one day before.  ',
      },
    ],
  },
  {
    id: 4,
    title: "ice House",
    restaurant: "ice Restaurant",
    country: "Sweden",
    city: "Jukkasjärvi",
    price: '€180',
    desc: "Each winter since the first and the original Icehotel was built, passionate artists gather in the modest town of Jukkasjäarvi to build a new rendition of this Arctic wonder. When the spring comes, the hotel is then left to melt and find its way back to nature. Each coming winter brings a one-of-a-kind version of the Icehotel, promising a new set of treasured memories just waiting to unfold in this stunning Swedish destination.",
    fooddesc:
      "Our international kitchen brigade puts a cosmopolitan twist to the local ingredients, sourced from the region’s rivers, mountains, marshes, and forests. On our menu you will find delicious dishes with ingredients like cloudberry, reindeer, and Arctic char. Here you can enjoy local dishes and unique drinks – all served on ice if you’d like to.",
    image: "/assets/images/ice/ice_hotelmain.jpg",
    headerimage: "/assets/images/ice/food_fish.jpeg",
    rating: '4',
    foodFact: "/assets/bilderfact/icerestfact.jpg",
    hotelFact: "/assets/bilderfact/icehousefacts.jpg",
    hoteldetails: [
      {
        image: "/assets/images/ice/ice_room1.jpg",
        title: "double Rooms",
        desc: "Double, triple or quadruple bed Breakfast Free entry to sauna in our Riverside Lobby Loan of snowsuit & boots Non-smoking only WiFi Storage locker for your belongings Entrance to Icehotel",
      },
      {
        image: "/assets/images/ice/ice_room2.jpeg",
        title: "quadraple Rooms",
        desc: "The bed you sleep on has a thick mattress that rests on a wooden base. The bed is covered with reindeer hides and you sleep in a thermal sleeping bag. Instead of doors the hotel rooms have curtains that you draw to give you and your company privacy.",
      },
      {
        image: '/assets/images/ice/ice_deer_activity.jpg',
        title: "winter Activities",
        desc: "All activities begin and end at the Icehotel, and you can book winter activities from November to April. We have winter activities that suit both couples, family, and friends. So, tick off your bucket list now and create fun snowy memories that warm your soul.",
      },
      {
        image: "/assets/images/ice/ice_activity.png",
        title: "nothern Light",
        desc: "Did you know that Jukkasjärvi is one of the best places to see the northern lights in the whole world? Imagine being able to experience the northern lights in Sweden, a natural phenomenon that is unlike anything else.",
      },
    ],
    restaurantdetails: [
      {
        image: "/assets/images/ice/ice_food1.jpg",
        title: "ice Menu",
        desc: "Try the bespoke ice menu served in the warm and classic Icehotel Restaurant, and get a dining experience beyond the ordinary. ",
      },
      {
        image: "/assets/images/ice/food_crawfish.jpg",
        title: "warm Dinner",
        desc: "An escape from the sub-zero degrees, but still letting our ice and surroundings take center stage. Sourcing our ingredients from the local area, we serve delicacies like reindeer, moose, Arctic char and bramble berries.",
      },
      {
        image: "/assets/images/ice/ice_crawfish4.jpeg",
        title: "locally Sourced",
        desc: "With carefully selected local ingredients, our international kitchen brigade creates modern dishes and flavors with the northern of Sweden as an inspiration",
      }],
    restaurantaside: [
      {
        image: "/assets/images/ice/ice_food4.jpg",
        title: "ice Lunch",
        subtitle:
          "Try the bespoke ice menu served in the warm and classic Icehotel Restaurant, and get a dining experience beyond the ordinary.",
          desc: 'With carefully selected local ingredients, our international kitchen brigade creates modern dishes and flavors with the northern of Sweden as an inspiration. Here you will enjoy a fantastic menu where some selected dishes will be served on plates consisting of ice from Torne River. During the spring/summer the menue consists of an amuse-bouche and three courses and during winter it is an amuse-bouche and four courses. ',
        paragraph:
        'Our ice lunch can be suitable for any dietary requirements. Just let the concierge know when you make your booking.',
      },
    ],
  },
  {
    id: 5,
    title: "nature House",
    restaurant: "nature Restaurant",
    country: "Norway",
    city: "Valldal",
    price: '€130',
    desc: "nature House is located on the northwest coast of Norway, just outside the village of Valldal, approx. 90 minutes driving from the city of Ålesund. The Hotel residence in the middle of the famous Norwegian scenic route between the unesco world heritage fjord Geiranger and the dramatic road and viewing point Trollstigen.",
    fooddesc:
      "Located 100 meters east from the hotel, the 100 year-old farm building in Burtigarden has been restored and rebuilt, giving the old rooms new functions; the cow byre is a dining room and sitting room with an open fire, the pigsty is the kitchen, and the old hay store has been turned into a outdoor lounge area. All meals are based on local ingredients, changing from season to season.",
    image: "/assets/images/nature/nature_hotelmain.jpg",
    headerimage: "/assets/images/nature/nature_foodmain.jpeg",
    rating: '4',
    foodFact: "/assets/bilderfact/naturerestfact.jpg",
    hotelFact: "/assets/bilderfact/naturehousefacts.jpg",
    hoteldetails: [
      {
        image: "/assets/images/nature/nature_room1.jpg",
        title: "nature Living",
        desc: "We take our guests for a camping night in the Norwegian wilderness. ",
      },
      {
        image: "/assets/images/nature/nature_room2.gif",
        title: "panoramic Double",
        desc: "panoramic Double or Double twin rooms. Seven small cubes on stilts, with glass walls that offer each space a striking view of the valley, the forrest or the dramatic river below.",
      },
      {
        image: "/assets/images/nature/nature_activity.gif",
        title: "sunset Fishing",
        desc: "The hotel is located near several fjords, which makes it perfect to go fishing. Bring back your catch and we will help you to put it on the chargrill in the communal outside area. ",
      },
      {
        image: "/assets/images/nature/nature_activity2.jpg",
        title: "survival Course",
        desc: "We offer a guided hike where you learn the basics of surviving in the wilderness. Located in an eldorado of breathtaking peaks, ancient mountain farms and spectacular viewpoints, the area offers hiking experiences for all ages at all levels. ",
      },
    ],
   
      restaurantdetails: [
      {
        image: "/assets/images/nature/food_crawfish.jpg",
        title: "seafood",
        desc: "Local seafood prepared with northern traditions, but with a modern twist.",
      },
      {
        image: "/assets/images/nature/foodfish.jpeg",
        title: "fish",
        desc: "Chargrilled on the bones. Freshly fished every day. ",
      },
      {
        image: "/assets/images/nature/food_crawfish8.jpeg",
        title: "crayfish",
        desc: "Enjoy the local crayfish when season starts in September up until January.",
      },
    ],
    restaurantaside: [
      {
        image: "/assets/images/nature/naturefish4.jpg",
        title: "picnic Lunch",
        subtitle:
          "We pack you lunch for your daily hikes and exploring around the near nature. Enjoy your smoked salmon fished in the local water. ",
          desc: 'It’s hard to beat a picnic at the top of a mountain after a long days hike. Stunning view, good food and the great outdoors – what could be better? One key advantage of picnics is that you will get the opportunity to relax from your stressful daily life. The fresh air does wonders for your mental health. Spending time outside is shown to reduce levels of anxiety and lower levels of activity in the parts of our brains related to mental illness. ',
        paragraph:
        'Our lunch picnics can be suitable for any dietary requirements. Just let the concierge know one day before. ',
      },
    ],
  },
  {
    id: 6,
    title: "beach House",
    restaurant: "beach Restaurant",
    country: "Spain",
    city: "Menorca",
    price: '€140',
    desc: "Very few properties summarise the essence of our hotels like the fantastic beach House. Situated on the Menorca seafront with impressive views of one of the most spectacular beaches and the most crystal-clear seas you’ve ever seen. The rooms don’t disappoint, with careful design and a wide range of comforts. Experience it first-hand, and see how time can pass at a different speed.",
    fooddesc:
      "Surrounded by the best views, where you can enjoy delicious dishes in the restaurant and cocktails with live music. Enjoy a constantly updated menu with the best products, with both classic options to please the whole family.",
    image: "/assets/images/beach/beach_hotelmain.jpg",
    headerimage: "/assets/images/beach/beach_food_main.jpg",
    rating: '5',
    foodFact: "/assets/bilderfact/beachrestfact.jpg",
    hotelFact: "/assets/bilderfact/beachhousefacts.jpg",
    hoteldetails: [
      {
        image: "/assets/images/beach/beach_room1.jpg",
        title: "beach Front Twin Rooms",
        desc: "Enjoy an unforgettable break in Menorca in a room equipped with everything you need, with elegant, contemporary design and surprising avant-garde elements. Immerse yourself in the fresh, unique and welcoming atmosphere at all times.",
      },
      {
        image: "/assets/images/beach/beach_room2.png",
        title: "balcony Double Rooms",
        desc: "All roomes are equipped with DreamMaker mattresses, organic bathroom amenities, rain shower, balcony, foam pillow and high-speed Wi-Fi.",
      },
      {
        image: "/assets/images/beach/beach_activity1.jpeg",
        title: "beach Days",
        desc: "At the Menorcan seafront you can enjoy a range of activities outside the hotel. Guided tours, scuba diving, paint balling, go-karting, horse riding along the beach, boat trips and boat hire.",
      },
      {
        image: "/assets/images/beach/beach_Activity2.png",
        title: "pool Days",
        desc: "Two pools for adults and children, surrounded by a spectacular view of Cala Galdana beach.",
      },
    ],
    
      restaurantdetails: [
      {
        image: "/assets/images/beach/beach_sandwich5.jpg",
        title: "fresh Sandwiches",
        desc: "Our sandwiches menu is being changed regularly, depending on what fresh ingredients that are available. ",
      },
      {
        image: "/assets/images/beach/beach_corn7.jpg",
        title: "chargrilled Vegetables",
        desc: "Enjoy fresh corn, aubergine, mushrooms and tomatoes on the chargrill.",
      },
      {
        image: "/assets/images/beach/beach_macarones8.jpg",
        title: "sweets",
        desc: "Our french pastry chef provides with handmade sweet goods for the whole family. Perfect to finish off a great meal with. ",
      },
    ],
    restaurantaside: [
      {
        image: '/assets/images/beach/beach_aside.png',
        title: "beach Lunch",
        subtitle:
         'Our lunch is being served from 11-15 and include free drinks for the children. Choose between Spanish vegetable tortillas, salads, stone baked pizza and much more. ',
         desc: 'Kids  Set Menu Main Choice of beef steak with fries or vegetables, market fish with fries or vegetables or gemelli bolognese. Dessert vanilla and chocolate sundae',
        paragraph:
          "Our picknicks can be suitable for any dietary requirements. Just let the concierge know one day before. ",
      },
    ],
  },
  {
    id: 7,
    title: "bohemian House",
    restaurant: "bohemian Restaurant",
    country: "Marocco",
    city: "Marrakech",
    price: '€180',
    desc: "Inspired by the rose-hued buildings of old Marrakech, palatial Amanjena is close to the fabled Red City, set in its own expanse of gardens and grand open spaces. Shaded courtyards with fountains lead to the central bassin that nourishes the gardens in which spacious standalone guest pavilions and maisons rest. ",
    fooddesc: "Savour authentic local dishes at bohemian House’s Moroccan Restaurant, which also serves dishes from Arva, Aman’s signature Italian restaurant which celebrates seasonal family favourites, or delight in exquisite Japanese fare at poolside Nama.",
    image: "/assets/images/boheme/bohem_doormain.jpg",
    headerimage: "/assets/images/boheme/boheme_foodmain copy.jpeg",
    rating: '4',
    foodFact: "/assets/bilderfact/bohemianrestfact.jpg",
    hotelFact: "/assets/bilderfact/bohemianhousefacts.jpg",
    hoteldetails: [
      {
        image: "/assets/images/boheme/boheme_room1.jpeg",
        title: "bohemian Twin",
        desc: "Amanjena’s exceptionally appointed Pavilions and Maisons are cool, elegant dwellings with Berber carpets scattered over zellij-tiled floors and high-ceilings for an opulent feel. Featuring two single beds, Wi-Fi, TV and balcony.",
      },
      {
        image: "/assets/images/boheme/boheme_room2.jpg",
        title: "bohemian King",
        desc: "Away from the bustle of the fabled red city of Marrakech, the sound of running water in fountains soothes while chaise longues and candle lanterns lend classic Moroccan ambience. Featuring a King size bed, Wi-Fi, TV, duo sink bathroom, bathtub and balcony.",
      },
      {
        image: "/assets/images/boheme/bohemian_activity.gif",
        title: "stay Active",
        desc: "¨The ideal base for introducing children of all ages to the wonders of Marrakech, Amanjena maintains a programme of activities for all ages and interests. The resort team can also coordinate bespoke family experiences and excursions. ",
      },
      {
        image: "/assets/images/boheme/boheme_activity2.jpg",
        title: "explore",
        desc: "Surrounding the city, the Palmeraie is an unexpectedly lush oasis that in turn gives way to the desert landscape, dotted with villages where little has changed for hundreds of years. ",
      },
    ],
    restaurantdetails: [
      {
        image: "/assets/images/boheme/boheme_food2.jpg",
        title: "moroccan Spices",
        desc: "The food is prepared with local Moroccan spices and prepare the traditional Moroccan way.",
      },
      {
        image: "/assets/images/boheme/boheme_foodmain.jpeg",
        title: "traditional Breakfast",
        desc: "Enjoy traditional Moroccan breakfast for a kick start of the day!",
      },
      {
        image: "/assets/images/boheme/boheme_food3.jpeg",
        title: "social Meals",
        desc: "Enjoy dinner at our five meter long dining table with other guests. A perfect way to share your experience with new people.",
      }],
    restaurantaside: [
      {
        image:"/assets/images/boheme/boheme_room1.jpeg",
        title: "bohemian Lunch",
        subtitle:
          'Our Morroccan lunch sessions include special cuisine from all over the country. We present the best of the different regions food traditions.',
          desc: 'What is traditional Morroccan food? Moroccan food is a mix of many influences. It’s a blend of Berber, Andalusian, and Mediterranean cuisines with hints of European and sub-Saharan influences. Morocco produces a wide variety of Mediterranean fruits and vegetables. Wheat is the staple grain while common meats include beef, lamb, goat, mutton, chicken, and seafood.',
        paragraph:
        'Our food can be suitable for any dietary requirements. Just let the concierge know when you make your booking.',
      },
    ],
  },
];


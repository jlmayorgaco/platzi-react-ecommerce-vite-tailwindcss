

export const MOCK_PRODUCTS = [
    {
      id: 0,
      name: "Premium Espresso Blend",
      description: "A rich and aromatic blend crafted for espresso lovers.",
      price: "$14.99",
      categories: [0], // Coffee category
      ingredients: ["Arabica beans", "Robusta beans"],
      userRating: 4.5,
      reviews: [
        { user: "CoffeeConnoisseur", comment: "Excellent flavor profile!", rating: 5 },
        { user: "EspressoEnthusiast", comment: "Perfect for my morning pick-me-up.", rating: 4 },
      ],
      stock: 50,
      image: "premium_espresso_blend_image_url.png",
    },
    {
      id: 1,
      name: "Chai Spice Black Tea",
      description: "An invigorating blend of black tea with aromatic spices.",
      price: "$10.99",
      categories: [1], // Tea category
      ingredients: ["Black tea leaves", "Cinnamon", "Cardamom", "Ginger"],
      userRating: 4.0,
      reviews: [
        { user: "TeaLover123", comment: "Bold and flavorful.", rating: 4 },
        { user: "SpiceFanatic", comment: "Love the hint of spices!", rating: 4 },
      ],
      stock: 30,
      image: "chai_spice_black_tea_image_url.png",
    },
    {
      id: 2,
      name: "Coffee Lover's Gift Set",
      description: "The perfect gift set for coffee enthusiasts.",
      price: "$39.99",
      categories: [2, 0], // Packs and Coffee categories
      userRating: 4.8,
      reviews: [
        { user: "GiftRecipient", comment: "Absolutely loved it!", rating: 5 },
        { user: "CoffeeAddict", comment: "Great selection in the pack.", rating: 5 },
      ],
      stock: 20,
      image: "coffee_lovers_gift_set_image_url.png",
    },
    {
      id: 3,
      name: "Stainless Steel French Press",
      description: "Brew coffee with style using this durable stainless steel French press.",
      price: "$29.99",
      categories: [3, 0], // Accessories and Coffee categories
      userRating: 4.7,
      reviews: [
        { user: "HomeBarista", comment: "Makes a smooth cup of coffee.", rating: 5 },
        { user: "QualitySeeker", comment: "Impressive build quality.", rating: 4 },
      ],
      stock: 15,
      image: "stainless_steel_french_press_image_url.png",
    },
    {
      id: 4,
      name: "Assorted Gourmet Cookies",
      description: "A delightful assortment of gourmet cookies for a sweet treat.",
      price: "$12.99",
      categories: [4], // Snacks category
      userRating: 4.2,
      reviews: [
        { user: "SweetTooth", comment: "Delicious variety!", rating: 4 },
        { user: "CookieLover", comment: "Perfect with my afternoon tea.", rating: 4 },
      ],
      stock: 40,
      image: "assorted_gourmet_cookies_image_url.png",
    },
    {
      id: 5,
      name: "Luxury Tea Sampler Box",
      description: "Indulge in a luxurious tea experience with this curated sampler box.",
      price: "$49.99",
      categories: [2, 1], // Packs and Tea categories
      userRating: 4.6,
      reviews: [
        { user: "TeaAficionado", comment: "Beautifully packaged and diverse selection.", rating: 5 },
        { user: "LuxuryTeaDrinker", comment: "High-quality teas in one box.", rating: 4 },
      ],
      stock: 25,
      image: "luxury_tea_sampler_box_image_url.png",
    },
    {
      id: 6,
      name: "Artisan Ceramic Coffee Mug",
      description: "Sip your coffee in style with this handcrafted artisan ceramic mug.",
      price: "$16.99",
      categories: [3, 0], // Accessories and Coffee categories
      userRating: 4.9,
      reviews: [
        { user: "MugCollector", comment: "Love the unique design!", rating: 5 },
        { user: "CoffeeArtisan", comment: "Perfect size and feels great in hand.", rating: 5 },
      ],
      stock: 18,
      image: "artisan_ceramic_coffee_mug_image_url.png",
    },
    {
      id: 7,
      name: "Electric Kettle with Temperature Control",
      description: "Efficient electric kettle with precise temperature control for the perfect brew.",
      price: "$49.99",
      categories: [3, 1], // Accessories and Tea categories
      userRating: 4.7,
      reviews: [
        { user: "TeaEnthusiast", comment: "Boils water quickly and has useful temperature settings.", rating: 5 },
        { user: "TechTeaDrinker", comment: "A game-changer for tea brewing.", rating: 4 },
      ],
      stock: 12,
      image: "electric_kettle_image_url.png",
    },
    {
      id: 8,
      name: "Assorted Chocolate Truffles Box",
      description: "Indulge in a box of decadent chocolate truffles for a sweet experience.",
      price: "$18.99",
      categories: [4], // Snacks category
      userRating: 4.4,
      reviews: [
        { user: "ChocolateLover", comment: "Heavenly chocolates!", rating: 5 },
        { user: "SweetIndulgence", comment: "Perfect for a special treat.", rating: 4 },
      ],
      stock: 35,
      image: "assorted_chocolate_truffles_image_url.png",
    },
    {
      id: 9,
      name: "Monthly Tea Subscription",
      description: "Receive a different premium tea blend every month with our subscription plan.",
      price: "$29.99/month",
      categories: [5, 1], // Subscription Plans and Tea categories
      userRating: 3.5,
      reviews: [
        { user: "TeaSubscriber", comment: "Exciting teas every month!", rating: 5 },
        { user: "MonthlyTeaLover", comment: "A great way to discover new flavors.", rating: 4 },
      ],
      stock: 10,
      image: "monthly_tea_subscription_image_url.png",
    },
    {
        id: 10,
        name: "Single Origin Ethiopian Coffee",
        description: "Experience the unique flavors of coffee from Ethiopia's highlands.",
        price: "$17.99",
        categories: [0], // Coffee category
        ingredients: ["100% Ethiopian Arabica beans"],
        userRating: 2.6,
        reviews: [
          { user: "CoffeeExplorer", comment: "Distinctive and vibrant taste.", rating: 5 },
          { user: "EthiopianCoffeeFan", comment: "My new favorite!", rating: 4 },
        ],
        stock: 35,
        image: "single_origin_ethiopian_coffee_image_url.png",
      },
      {
        id: 11,
        name: "Matcha Green Tea Powder",
        description: "Premium Japanese matcha for a ceremonial tea experience.",
        price: "$22.99",
        categories: [1], // Tea category
        ingredients: ["Organic matcha leaves"],
        userRating: 1.9,
        reviews: [
          { user: "MatchaConnoisseur", comment: "Exceptional quality matcha.", rating: 5 },
          { user: "TeaCeremonyEnthusiast", comment: "Smooth and vibrant.", rating: 5 },
        ],
        stock: 25,
        image: "matcha_green_tea_powder_image_url.png",
      },
      {
        id: 12,
        name: "Cold Brew Coffee Concentrate",
        description: "A concentrated cold brew for a refreshing coffee experience.",
        price: "$15.99",
        categories: [2, 0], // Packs and Coffee categories
        userRating: 5.0,
        reviews: [
          { user: "ColdBrewFanatic", comment: "Convenient and delicious.", rating: 5 },
          { user: "CoffeeChiller", comment: "Perfect for summer mornings.", rating: 4 },
        ],
        stock: 40,
        image: "cold_brew_coffee_concentrate_image_url.png",
      },
      {
        id: 13,
        name: "Tea Infuser Bottle",
        description: "Brew loose-leaf tea on the go with this stylish infuser bottle.",
        price: "$19.99",
        categories: [3, 1], // Accessories and Tea categories
        userRating: 3,
        reviews: [
          { user: "TeaOnTheGo", comment: "Love the convenience.", rating: 4 },
          { user: "InfuserEnthusiast", comment: "Stylish and functional.", rating: 5 },
        ],
        stock: 30,
        image: "tea_infuser_bottle_image_url.png",
      },
      {
        id: 14,
        name: "Hazelnut Flavored Coffee Beans",
        description: "Indulge in the rich and nutty flavor of hazelnut-infused coffee.",
        price: "$16.99",
        categories: [0], // Coffee category
        ingredients: ["Arabica beans", "Natural hazelnut flavor"],
        userRating: 4,
        reviews: [
          { user: "HazelnutCoffeeLover", comment: "Irresistible hazelnut aroma.", rating: 4 },
          { user: "NuttyCoffeeFan", comment: "Perfect for a cozy evening.", rating: 4 },
        ],
        stock: 28,
        image: "hazelnut_flavored_coffee_beans_image_url.png",
      },
      {
        id: 15,
        name: "Glass Teapot with Infuser",
        description: "Elevate your tea experience with this elegant glass teapot and built-in infuser.",
        price: "$34.99",
        categories: [3, 1], // Accessories and Tea categories
        userRating: 4.8,
        reviews: [
          { user: "TeaConnoisseur", comment: "Beautiful design and practical.", rating: 5 },
          { user: "GlassTeaPotUser", comment: "Great for blooming teas.", rating: 5 },
        ],
        stock: 20,
        image: "glass_teapot_with_infuser_image_url.png",
      },
      {
        id: 16,
        name: "Decaf Colombian Coffee Pods",
        description: "Enjoy the smooth taste of Colombian coffee without the caffeine.",
        price: "$13.99",
        categories: [2, 0], // Packs and Coffee categories
        userRating: 4.2,
        reviews: [
          { user: "DecafCoffeeLover", comment: "Full-bodied flavor without the jitters.", rating: 4 },
          { user: "ColombianCoffeeFan", comment: "Great for evening sipping.", rating: 4 },
        ],
        stock: 32,
        image: "decaf_colombian_coffee_pods_image_url.png",
      },
      {
        id: 17,
        name: "Ceramic Tea Cup Set",
        description: "Savor your favorite tea in this exquisite set of ceramic tea cups.",
        price: "$26.99",
        categories: [3, 1], // Accessories and Tea categories
        userRating: 4.6,
        reviews: [
          { user: "TeaCupCollector", comment: "Lovely design and perfect size.", rating: 5 },
          { user: "TeaTimeEnthusiast", comment: "Great addition to my tea collection.", rating: 4 },
        ],
        stock: 18,
        image: "ceramic_tea_cup_set_image_url.png",
      },
      {
        id: 18,
        name: "Organic Earl Grey Tea",
        description: "A classic blend of black tea with bergamot for a fragrant Earl Grey experience.",
        price: "$11.99",
        categories: [1], // Tea category
        ingredients: ["Organic black tea leaves", "Bergamot oil"],
        userRating: 4.4,
        reviews: [
          { user: "EarlGreyFan", comment: "Perfect balance of tea and bergamot.", rating: 4 },
          { user: "OrganicTeaLover", comment: "Delicious and refreshing.", rating: 4 },
        ],
        stock: 24,
        image: "organic_earl_grey_tea_image_url.png",
      },
      {
        id: 19,
        name: "Espresso Macchiato Dark Chocolate",
        description: "Indulge in the irresistible combination of dark chocolate and espresso.",
        price: "$8.99",
        categories: [4], // Snacks category
        ingredients: ["Dark chocolate", "Espresso-infused center"],
        userRating: 4.7,
        reviews: [
          { user: "ChocolateCoffeeLover", comment: "Perfect for a coffee break.", rating: 5 },
          { user: "SweetToothEspresso", comment: "Decadent and rich.", rating: 5 },
        ],
        stock: 45,
        image: "espresso_macchiato_dark_chocolate_image_url.png",
      },
      {
        id: 20,
        name: "Bamboo Matcha Whisk and Scoop Set",
        description: "Whisk up the perfect matcha with this bamboo whisk and scoop set.",
        price: "$14.99",
        categories: [3, 1], // Accessories and Tea categories
        userRating: 4.9,
        reviews: [
          { user: "MatchaEnthusiast", comment: "Authentic matcha experience.", rating: 5 },
          { user: "BambooWhiskUser", comment: "High-quality bamboo tools.", rating: 5 },
        ],
        stock: 22,
        image: "bamboo_matcha_whisk_and_scoop_set_image_url.png",
      },
      {
        id: 21,
        name: "Dark Roast Coffee Beans",
        description: "Bold and intense dark roast coffee beans for the avid coffee drinker.",
        price: "$19.99",
        categories: [0], // Coffee category
        ingredients: ["Dark roasted Arabica beans"],
        userRating: 4.5,
        reviews: [
          { user: "DarkRoastLover", comment: "Exactly what I needed for my mornings.", rating: 5 },
          { user: "IntenseCoffeeDrinker", comment: "Deep and flavorful.", rating: 4 },
        ],
        stock: 30,
        image: "dark_roast_coffee_beans_image_url.png",
      },
      {
        id: 22,
        name: "Herbal Infusion Variety Pack",
        description: "Explore a range of herbal infusions with this variety pack.",
        price: "$13.99",
        categories: [2, 1], // Packs and Tea categories
        ingredients: ["Assorted herbal blends"],
        userRating: 4.3,
        reviews: [
          { user: "HerbalTeaExplorer", comment: "Refreshing and soothing varieties.", rating: 4 },
          { user: "TeaVarietyFan", comment: "Great introduction to herbal teas.", rating: 4 },
        ],
        stock: 38,
        image: "herbal_infusion_variety_pack_image_url.png",
      },
      {
        id: 23,
        name: "Coffee Bean Grinder",
        description: "Grind your coffee beans to perfection with this high-quality grinder.",
        price: "$29.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.8,
        reviews: [
          { user: "CoffeeGrinderUser", comment: "Consistent grind every time.", rating: 5 },
          { user: "GrindMaster", comment: "A must-have for coffee enthusiasts.", rating: 5 },
        ],
        stock: 25,
        image: "coffee_bean_grinder_image_url.png",
      },
      {
        id: 24,
        name: "Tea Sampler Tins Set",
        description: "Discover a variety of premium teas in this beautifully packaged tin set.",
        price: "$32.99",
        categories: [2, 1], // Packs and Tea categories
        userRating: 4.6,
        reviews: [
          { user: "TeaSampler", comment: "Lovely presentation and diverse tea selection.", rating: 5 },
          { user: "TinCollector", comment: "Perfect for gifting.", rating: 4 },
        ],
        stock: 20,
        image: "tea_sampler_tins_set_image_url.png",
      },
      {
        id: 25,
        name: "Cold Brew Maker",
        description: "Brew your own cold coffee at home with this convenient cold brew maker.",
        price: "$22.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.4,
        reviews: [
          { user: "ColdBrewMakerUser", comment: "Easy to use and makes great cold brew.", rating: 4 },
          { user: "HomeBrewer", comment: "Saves me trips to the cafe.", rating: 4 },
        ],
        stock: 28,
        image: "cold_brew_maker_image_url.png",
      },
      {
        id: 26,
        name: "Floral Jasmine Green Tea",
        description: "Enjoy the delicate aroma and taste of jasmine-infused green tea.",
        price: "$15.99",
        categories: [1], // Tea category
        ingredients: ["Green tea leaves", "Jasmine flowers"],
        userRating: 4.7,
        reviews: [
          { user: "JasmineTeaLover", comment: "Subtle and fragrant.", rating: 5 },
          { user: "GreenTeaEnthusiast", comment: "Perfect for relaxation.", rating: 5 },
        ],
        stock: 32,
        image: "floral_jasmine_green_tea_image_url.png",
      },
      {
        id: 27,
        name: "Coffee and Tea Storage Canisters",
        description: "Keep your coffee and tea fresh with these stylish storage canisters.",
        price: "$18.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.2,
        reviews: [
          { user: "StorageOrganizer", comment: "Functional and aesthetically pleasing.", rating: 4 },
          { user: "FreshnessKeeper", comment: "Great addition to my kitchen.", rating: 4 },
        ],
        stock: 22,
        image: "coffee_and_tea_storage_canisters_image_url.png",
      },
      {
        id: 28,
        name: "Assorted Nuts and Dried Fruits Mix",
        description: "A wholesome mix of nuts and dried fruits for a healthy snack.",
        price: "$14.99",
        categories: [4], // Snacks category
        userRating: 4.5,
        reviews: [
          { user: "HealthySnacker", comment: "Perfect balance of flavors.", rating: 5 },
          { user: "NutAndFruitFan", comment: "Great for on-the-go snacking.", rating: 4 },
        ],
        stock: 35,
        image: "assorted_nuts_and_dried_fruits_mix_image_url.png",
      },
      {
        id: 29,
        name: "Electric Milk Frother",
        description: "Achieve creamy frothed milk for your coffee with this electric frother.",
        price: "$26.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.9,
        reviews: [
          { user: "FrotherUser", comment: "Perfect froth every time.", rating: 5 },
          { user: "CoffeeAndMilkFan", comment: "Elevates my coffee experience.", rating: 5 },
        ],
        stock: 18,
        image: "electric_milk_frother_image_url.png",
      },
      {
        id: 30,
        name: "Caramel Macchiato Flavored Coffee",
        description: "Indulge in the sweet and caramel notes of this flavored coffee.",
        price: "$16.99",
        categories: [0], // Coffee category
        ingredients: ["Arabica beans", "Caramel flavoring"],
        userRating: 4.3,
        reviews: [
          { user: "CaramelCoffeeLover", comment: "Deliciously sweet and aromatic.", rating: 4 },
          { user: "SweetToothCoffee", comment: "Perfect for dessert-like coffee.", rating: 4 },
        ],
        stock: 24,
        image: "caramel_macchiato_flavored_coffee_image_url.png",
      },
      {
        id: 31,
        name: "Tea Leaf Infuser Spoon",
        description: "Brew loose-leaf tea effortlessly with this convenient tea leaf infuser spoon.",
        price: "$9.99",
        categories: [3, 1], // Accessories and Tea categories
        userRating: 4.6,
        reviews: [
          { user: "TeaLeafInfuser", comment: "Saves me from using tea bags.", rating: 5 },
          { user: "TeaSpoonUser", comment: "Practical and easy to clean.", rating: 4 },
        ],
        stock: 20,
        image: "tea_leaf_infuser_spoon_image_url.png",
      },
      {
        id: 32,
        name: "Organic Peppermint Herbal Tea",
        description: "Savor the refreshing and minty taste of organic peppermint herbal tea.",
        price: "$12.99",
        categories: [1], // Tea category
        ingredients: ["Organic peppermint leaves"],
        userRating: 4.7,
        reviews: [
          { user: "PeppermintTeaLover", comment: "Calming and soothing.", rating: 5 },
          { user: "OrganicHerbalTeaFan", comment: "Great before bedtime.", rating: 5 },
        ],
        stock: 28,
        image: "organic_peppermint_herbal_tea_image_url.png",
      },
      {
        id: 33,
        name: "Ceramic Coffee Dripper",
        description: "Brew the perfect cup of pour-over coffee with this ceramic coffee dripper.",
        price: "$15.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.4,
        reviews: [
          { user: "PourOverMaster", comment: "Produces a clean and flavorful cup.", rating: 4 },
          { user: "CoffeeDripperUser", comment: "Love the simplicity of pour-over.", rating: 4 },
        ],
        stock: 26,
        image: "ceramic_coffee_dripper_image_url.png",
      },
      {
        id: 34,
        name: "Assorted Gourmet Popcorn",
        description: "A delightful assortment of gourmet popcorn flavors for movie nights.",
        price: "$10.99",
        categories: [4], // Snacks category
        userRating: 4.2,
        reviews: [
          { user: "PopcornLover", comment: "Tasty and addictive varieties.", rating: 4 },
          { user: "MovieNightFan", comment: "Perfect snack for movie time.", rating: 4 },
        ],
        stock: 32,
        image: "assorted_gourmet_popcorn_image_url.png",
      },
      {
        id: 35,
        name: "Brazilian Single Origin Coffee",
        description: "Savor the unique flavor profile of Brazilian coffee beans from a single origin.",
        price: "$18.99",
        categories: [0], // Coffee category
        ingredients: ["Brazilian Arabica beans"],
        userRating: 4.6,
        reviews: [
          { user: "BrazilianCoffeeLover", comment: "Rich and smooth taste.", rating: 5 },
          { user: "SingleOriginFan", comment: "Captures the essence of Brazilian coffee.", rating: 4 },
        ],
        stock: 28,
        image: "brazilian_single_origin_coffee_image_url.png",
      },
      {
        id: 36,
        name: "Hibiscus Berry Iced Tea",
        description: "Quench your thirst with a refreshing iced tea blend of hibiscus and berries.",
        price: "$14.99",
        categories: [2, 1], // Packs and Tea categories
        ingredients: ["Hibiscus petals", "Mixed berries"],
        userRating: 4.3,
        reviews: [
          { user: "IcedTeaLover", comment: "Perfectly balanced and fruity.", rating: 4 },
          { user: "BerryTeaEnthusiast", comment: "Great for summer afternoons.", rating: 4 },
        ],
        stock: 34,
        image: "hibiscus_berry_iced_tea_image_url.png",
      },
      {
        id: 37,
        name: "Pour-Over Coffee Kettle",
        description: "Achieve precision in pour-over brewing with this stylish coffee kettle.",
        price: "$32.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.8,
        reviews: [
          { user: "PourOverEnthusiast", comment: "Easy to control pour and stylish design.", rating: 5 },
          { user: "CoffeeKettleUser", comment: "A must-have for pour-over lovers.", rating: 5 },
        ],
        stock: 22,
        image: "pour_over_coffee_kettle_image_url.png",
      },
      {
        id: 38,
        name: "Green Rooibos Citrus Tea",
        description: "Experience the mild and citrusy notes of green rooibos herbal tea.",
        price: "$11.99",
        categories: [1], // Tea category
        ingredients: ["Green rooibos leaves", "Citrus peel"],
        userRating: 4.7,
        reviews: [
          { user: "RooibosTeaLover", comment: "Light and refreshing.", rating: 5 },
          { user: "CitrusTeaFan", comment: "Perfect for a morning boost.", rating: 5 },
        ],
        stock: 30,
        image: "green_rooibos_citrus_tea_image_url.png",
      },
      {
        id: 39,
        name: "Coffee Bean Storage Container Set",
        description: "Keep your coffee beans fresh with this set of stylish storage containers.",
        price: "$24.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.2,
        reviews: [
          { user: "CoffeeStoragePro", comment: "Keeps coffee beans aromatic and fresh.", rating: 4 },
          { user: "StorageContainerUser", comment: "Sleek and functional design.", rating: 4 },
        ],
        stock: 26,
        image: "coffee_bean_storage_container_set_image_url.png",
      },
      {
        id: 40,
        name: "Assorted Nut Butter Sampler",
        description: "Indulge in a variety of nut butters with this delightful sampler pack.",
        price: "$19.99",
        categories: [4], // Snacks category
        userRating: 4.5,
        reviews: [
          { user: "NutButterLover", comment: "Creamy and delicious options.", rating: 5 },
          { user: "HealthySnacker", comment: "Perfect for spreading on toast.", rating: 4 },
        ],
        stock: 24,
        image: "assorted_nut_butter_sampler_image_url.png",
      },
      {
        id: 41,
        name: "Japanese Cast Iron Teapot",
        description: "Elevate your tea brewing with this traditional Japanese cast iron teapot.",
        price: "$54.99",
        categories: [3, 1], // Accessories and Tea categories
        userRating: 4.6,
        reviews: [
          { user: "TeapotCollector", comment: "Beautiful craftsmanship and retains heat well.", rating: 5 },
          { user: "JapaneseTeaEnthusiast", comment: "Enhances the tea-drinking experience.", rating: 4 },
        ],
        stock: 18,
        image: "japanese_cast_iron_teapot_image_url.png",
      },
      {
        id: 42,
        name: "Chocolate-Dipped Espresso Beans",
        description: "Satisfy your sweet and caffeinated cravings with these chocolate-covered espresso beans.",
        price: "$12.99",
        categories: [4], // Snacks category
        ingredients: ["Espresso beans", "Dark chocolate coating"],
        userRating: 4.4,
        reviews: [
          { user: "EspressoBeanLover", comment: "Perfect balance of bitterness and sweetness.", rating: 4 },
          { user: "ChocoholicCoffeeFan", comment: "Addictive and delicious.", rating: 4 },
        ],
        stock: 32,
        image: "chocolate_dipped_espresso_beans_image_url.png",
      },
      {
        id: 43,
        name: "Stainless Steel Coffee Scoop",
        description: "Measure your coffee grounds precisely with this durable stainless steel coffee scoop.",
        price: "$8.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.7,
        reviews: [
          { user: "CoffeeScoopUser", comment: "Sturdy and easy to clean.", rating: 5 },
          { user: "PrecisionBrewer", comment: "A helpful tool for coffee enthusiasts.", rating: 5 },
        ],
        stock: 28,
        image: "stainless_steel_coffee_scoop_image_url.png",
      },
      {
        id: 44,
        name: "Chai Latte Mix",
        description: "Enjoy the aromatic and spiced flavor of chai latte with this convenient mix.",
        price: "$16.99",
        categories: [2, 1], // Packs and Tea categories
        ingredients: ["Black tea", "Spices", "Vanilla"],
        userRating: 4.3,
        reviews: [
          { user: "ChaiLatteLover", comment: "Perfect blend of spices and sweetness.", rating: 4 },
          { user: "SpicedTeaFan", comment: "Easy to make and delicious.", rating: 4 },
        ],
        stock: 24,
        image: "chai_latte_mix_image_url.png",
      },
      {
        id: 45,
        name: "Reusable Coffee Filter",
        description: "Reduce waste and brew sustainable coffee with this reusable coffee filter.",
        price: "$10.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.6,
        reviews: [
          { user: "EcoFriendlyBrewer", comment: "Environmentally friendly and works well.", rating: 5 },
          { user: "CoffeeFilterUser", comment: "A great alternative to disposable filters.", rating: 4 },
        ],
        stock: 30,
        image: "reusable_coffee_filter_image_url.png",
      },
      {
        id: 46,
        name: "Mango Passionfruit Herbal Tea",
        description: "Experience the tropical flavors of mango and passionfruit in this herbal tea.",
        price: "$14.99",
        categories: [1], // Tea category
        ingredients: ["Dried mango", "Passionfruit essence"],
        userRating: 4.5,
        reviews: [
          { user: "TropicalTeaLover", comment: "Refreshing and exotic.", rating: 5 },
          { user: "MangoPassionFan", comment: "Perfect for a summer afternoon.", rating: 4 },
        ],
        stock: 26,
        image: "mango_passionfruit_herbal_tea_image_url.png",
      },
      {
        id: 47,
        name: "Coffee and Tea Warmer",
        description: "Keep your beverages warm with this stylish coffee and tea warmer.",
        price: "$22.99",
        categories: [3, 0], // Accessories and Coffee categories
        userRating: 4.4,
        reviews: [
          { user: "BeverageWarmerUser", comment: "Maintains the perfect temperature.", rating: 4 },
          { user: "WarmBeverageFan", comment: "A must-have for long coffee sessions.", rating: 4 },
        ],
        stock: 22,
        image: "coffee_and_tea_warmer_image_url.png",
      },
      {
        id: 48,
        name: "White Chocolate Macadamia Coffee",
        description: "Indulge in the creamy and nutty flavor of white chocolate and macadamia coffee.",
        price: "$17.99",
        categories: [0], // Coffee category
        ingredients: ["Arabica beans", "White chocolate", "Macadamia nuts"],
        userRating: 4.7,
        reviews: [
          { user: "WhiteChocolateCoffeeLover", comment: "Decadent and delightful.", rating: 5 },
          { user: "MacadamiaCoffeeFan", comment: "A treat for the senses.", rating: 5 },
        ],
        stock: 20,
        image: "white_chocolate_macadamia_coffee_image_url.png",
      },
      {
        id: 49,
        name: "Tea Strainer Spoon",
        description: "Easily strain loose-leaf tea with this practical and elegant tea strainer spoon.",
        price: "$9.99",
        categories: [3, 1], // Accessories and Tea categories
        userRating: 4.2,
        reviews: [
          { user: "TeaStrainerUser", comment: "Efficient and beautiful design.", rating: 4 },
          { user: "LooseLeafTeaFan", comment: "No more tea leaves in my cup.", rating: 4 },
        ],
        stock: 28,
        image: "tea_strainer_spoon_image_url.png",
      },
      {
        id: 50,
        name: "Cocoa Almond Energy Bites",
        description: "A healthy and energizing snack with the goodness of cocoa and almonds.",
        price: "$13.99",
        categories: [4], // Snacks category
        userRating: 4.6,
        reviews: [
          { user: "EnergyBitesLover", comment: "Tastes like a treat but healthier.", rating: 5 },
          { user: "CocoaAlmondFan", comment: "Great for a quick energy boost.", rating: 4 },
        ],
        stock: 25,
        image: "cocoa_almond_energy_bites_image_url.png",
      },
  ];
  
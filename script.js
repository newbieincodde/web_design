// 1. Bộ từ điển ngôn ngữ
const translations = {
  vi: {
    topics_label: "KHÁM PHÁ CHỦ ĐỀ",
    topics_title: "Khám phá các chủ đề dinh dưỡng",
    topics_desc:
      "Tìm hiểu những nhóm chất dinh dưỡng cơ bản và vai trò của chúng đối với cơ thể.",

    topic_protein: "Protein",
    topic_protein_desc: "Tìm hiểu về protein và các nguồn thực phẩm giàu đạm.",

    topic_carbs: "Carbohydrates",
    topic_carbs_desc:
      "Tìm hiểu về carbohydrate và vai trò cung cấp năng lượng.",

    topic_fats: "Chất béo lành mạnh",
    topic_fats_desc:
      "Tìm hiểu về chất béo lành mạnh và các nguồn thực phẩm phù hợp.",

    topic_vitamins: "Vitamin",
    topic_vitamins_desc:
      "Tìm hiểu về vitamin và vai trò của chúng trong cơ thể.",

    topic_minerals: "Khoáng chất",
    topic_minerals_desc:
      "Tìm hiểu về các khoáng chất thiết yếu trong chế độ ăn.",

    topic_water: "Nước",
    topic_water_desc: "Tìm hiểu về nước và vai trò của việc duy trì đủ nước.",

    learn_more: "Tìm hiểu thêm →",
    hero_label: "HIỂU VỀ DINH DƯỠNG",
    hero_button: "Khám phá chủ đề",

    hero_title: "Kiến Thức Dinh Dưỡng & Lối Sống Khoẻ Mạnh",
    hero_desc:
      "Khám phá nguồn dinh dưỡng thiết yếu và theo dõi chỉ số cơ thể chuẩn khoa học.",
    calc_title: "Công Cụ Tính Chỉ Số BMI",
    label_height: "Chiều cao (cm):",
    label_weight: "Cân nặng (kg):",
    btn_calc: "Tính BMI",
    res_score: "Chỉ số BMI của bạn:",
    res_status: "Tình trạng:",
    food_section_title: "Các Nhóm Dinh Dưỡng Thiết Yếu",
    cat_protein_title: "Đạm (Protein)",
    cat_protein_desc:
      "Thịt đỏ, thịt trắng, cá, trứng và các loại đậu giúp xây dựng và tái tạo cơ bắp.",
    cat_fat_title: "Chất béo tốt (Healthy Fats)",
    cat_fat_desc:
      "Bơ, dầu ô-liu, các loại hạt cung cấp năng lượng và hỗ trợ hấp thu vitamin.",
    cat_fiber_title: "Chất xơ & Vi chất",
    cat_fiber_desc:
      "Rau xanh và hoa quả tươi tăng cường hệ tiêu hóa và hệ miễn dịch.",
    nav_home: "Trang chủ",
    nav_about: "Về chúng tôi",
    nav_topics: "Chủ đề",
    nav_basic_nutrition: "Dinh dưỡng cơ bản",
    nav_nutrition_needs: "Nhu cầu dinh dưỡng",
    nav_healthy_eating: "Ăn uống lành mạnh",

    nav_food: "Thực phẩm & Chế độ ăn",
    nav_foods: "Thực phẩm dinh dưỡng",
    nav_diets: "Các chế độ ăn",
    nav_meals: "Kế hoạch bữa ăn",

    nav_health: "Sức khỏe",
    nav_heart: "Sức khỏe tim mạch",
    nav_diabetes: "Tiểu đường",
    nav_bone: "Sức khỏe xương",

    nav_tools: "Công cụ",
    nav_resources: "Tài nguyên",
    featured_label: "NỘI DUNG NỔI BẬT",
    featured_title: "Kiến thức dinh dưỡng nổi bật",
    featured_desc:
      "Khám phá những kiến thức cơ bản giúp bạn hiểu rõ hơn về dinh dưỡng và sức khỏe.",

    featured_1_title: "Ăn uống cân bằng",
    featured_1_desc:
      "Tìm hiểu cách xây dựng một chế độ ăn đa dạng với nhiều nhóm thực phẩm.",

    featured_2_title: "Hiểu về chất dinh dưỡng",
    featured_2_desc:
      "Khám phá vai trò của các chất dinh dưỡng thiết yếu đối với cơ thể.",

    featured_3_title: "Thói quen lành mạnh",
    featured_3_desc:
      "Tìm hiểu những thói quen đơn giản có thể hỗ trợ một lối sống lành mạnh.",

    featured_read_more: "Đọc thêm →",
    health_label: "SỨC KHỎE & LỐI SỐNG",
    health_title: "Dinh dưỡng & Lối sống lành mạnh",
    health_desc:
      "Tìm hiểu cách dinh dưỡng có thể đồng hành cùng sức khỏe và lối sống hàng ngày.",

    health_heart_title: "Sức khỏe tim mạch",
    health_heart_desc:
      "Tìm hiểu những kiến thức dinh dưỡng liên quan đến sức khỏe tim mạch.",

    health_bone_title: "Sức khỏe xương",
    health_bone_desc:
      "Khám phá vai trò của các chất dinh dưỡng đối với xương và cơ thể.",

    health_lifestyle_title: "Lối sống lành mạnh",
    health_lifestyle_desc:
      "Tìm hiểu những thói quen đơn giản giúp xây dựng lối sống cân bằng.",

    health_read_more: "Tìm hiểu thêm →",
    tools_label: "CÔNG CỤ NUTRIWISE",
    tools_title: "Công cụ dinh dưỡng",
    tools_desc:
      "Sử dụng các công cụ đơn giản để tìm hiểu thêm về sức khỏe và dinh dưỡng.",

    tool_bmi_title: "BMI Calculator",
    tool_bmi_desc: "Tìm hiểu chỉ số BMI dựa trên chiều cao và cân nặng.",

    tool_nutrition_title: "Nutrition Calculator",
    tool_nutrition_desc:
      "Công cụ giúp bạn khám phá thông tin dinh dưỡng của thực phẩm.",

    tool_food_title: "Food Guide",
    tool_food_desc:
      "Khám phá các nhóm thực phẩm và lựa chọn thực phẩm đa dạng.",

    tool_use: "Sử dụng công cụ →",
    tool_coming_soon: "Sắp ra mắt",
    tool_explore: "Khám phá →",
    basic_label: "DINH DƯỠNG CƠ BẢN",
    basic_title: "Hiểu về dinh dưỡng cơ bản",
    basic_desc:
      "Tìm hiểu những chất dinh dưỡng thiết yếu mà cơ thể cần và vai trò của chúng đối với sức khỏe.",

    what_nutrition_title: "Dinh dưỡng là gì?",
    what_nutrition_desc:
      "Dinh dưỡng là quá trình cơ thể nhận và sử dụng các chất từ thực phẩm để hỗ trợ tăng trưởng, hoạt động và duy trì sức khỏe.",

    essential_label: "CÁC CHẤT DINH DƯỠNG THIẾT YẾU",
    essential_title: "Sáu nhóm dinh dưỡng cơ bản",
    essential_desc:
      "Mỗi nhóm chất dinh dưỡng có những vai trò khác nhau và cùng góp phần hỗ trợ hoạt động của cơ thể.",

    basic_protein_desc:
      "Protein cung cấp các axit amin cần thiết cho nhiều chức năng của cơ thể.",

    basic_carbs_desc:
      "Carbohydrates là nguồn năng lượng quan trọng cho các hoạt động hàng ngày.",

    basic_fats_desc:
      "Chất béo đóng vai trò trong việc cung cấp năng lượng và hỗ trợ một số chức năng của cơ thể.",

    basic_vitamins_desc:
      "Vitamin là các vi chất cần thiết cho nhiều quá trình hoạt động của cơ thể.",

    basic_minerals_desc:
      "Khoáng chất tham gia vào nhiều chức năng quan trọng của cơ thể.",

    basic_water_desc:
      "Nước cần thiết cho nhiều quá trình sinh lý và giúp duy trì sự cân bằng chất lỏng.",
    protein_label: "PROTEIN",
    protein_title: "Protein",
    protein_desc:
      "Tìm hiểu về protein, vai trò của protein và các nguồn thực phẩm cung cấp protein.",
    protein_what_title: "Protein là gì?",
    protein_what_desc:
      "Protein là một nhóm chất dinh dưỡng quan trọng được tạo thành từ các axit amin. Protein có mặt trong nhiều loại thực phẩm và tham gia vào nhiều chức năng của cơ thể.",
    protein_sources_title: "Các nguồn thực phẩm giàu protein",
    protein_sources_desc:
      "Protein có thể được cung cấp từ nhiều loại thực phẩm khác nhau.",
    protein_meat_fish_title: "Thịt và cá",
    protein_eggs_dairy_title: "Trứng và sữa",
    protein_legumes_title: "Các loại đậu",
    protein_meat_fish_desc:
      "Thịt, cá và các loại hải sản là những nguồn thực phẩm cung cấp protein.",
    protein_eggs_dairy_desc:
      "Trứng và các sản phẩm từ sữa cũng có thể cung cấp protein trong chế độ ăn.",
    protein_legumes_desc:
      "Đậu và các loại thực phẩm từ thực vật cũng là nguồn cung cấp protein.",
    carbs_label: "BỘT ĐƯỜNG",
    carbs_title: "Carbohydrate",
    carbs_desc:
      "Tìm hiểu về carbohydrate, vai trò của carbohydrate và các nguồn thực phẩm cung cấp carbohydrate.",

    carbs_what_title: "Carbohydrate là gì?",
    carbs_what_desc:
      "Carbohydrate là một nhóm chất dinh dưỡng cung cấp năng lượng cho cơ thể và có mặt trong nhiều loại thực phẩm.",

    carbs_sources_title: "Các nguồn thực phẩm giàu carbohydrate",
    carbs_sources_desc:
      "Carbohydrate có thể được cung cấp từ nhiều loại thực phẩm khác nhau.",

    carbs_grains_title: "Ngũ cốc và gạo",
    carbs_grains_desc:
      "Gạo, bánh mì, yến mạch và các loại ngũ cốc là những nguồn carbohydrate phổ biến.",

    carbs_fruits_title: "Trái cây",
    carbs_fruits_desc:
      "Trái cây cung cấp carbohydrate cùng với nhiều vitamin, khoáng chất và chất xơ.",

    carbs_vegetables_title: "Rau củ",
    carbs_vegetables_desc:
      "Một số loại rau củ như khoai tây, khoai lang và ngô cũng cung cấp carbohydrate.",
    fats_label: "CHẤT BÉO LÀNH MẠNH",
    fats_title: "Chất béo lành mạnh",
    fats_desc:
      "Tìm hiểu về chất béo lành mạnh, vai trò của chất béo và các nguồn thực phẩm cung cấp chất béo.",

    fats_what_title: "Chất béo lành mạnh là gì?",
    fats_what_desc:
      "Chất béo là một chất dinh dưỡng cần thiết cho cơ thể, cung cấp năng lượng và hỗ trợ nhiều chức năng quan trọng.",

    fats_sources_title: "Các nguồn thực phẩm giàu chất béo lành mạnh",
    fats_sources_desc:
      "Chất béo có thể được cung cấp từ nhiều loại thực phẩm khác nhau.",

    fats_avocado_title: "Bơ và dầu thực vật",
    fats_avocado_desc:
      "Quả bơ và các loại dầu thực vật như dầu ô liu cung cấp chất béo không bão hòa.",

    fats_nuts_title: "Các loại hạt",
    fats_nuts_desc:
      "Các loại hạt như hạnh nhân, óc chó và hạt chia cung cấp chất béo cùng nhiều chất dinh dưỡng khác.",

    fats_fish_title: "Cá béo",
    fats_fish_desc:
      "Các loại cá béo như cá hồi và cá thu cung cấp chất béo omega-3.",
    vitamins_label: "VITAMIN",
    vitamins_title: "Vitamin",
    vitamins_desc:
      "Tìm hiểu về vitamin, vai trò của vitamin và các nguồn thực phẩm cung cấp vitamin.",
    vitamins_what_title: "Vitamin là gì?",
    vitamins_what_desc:
      "Vitamin là những chất dinh dưỡng cần thiết với lượng nhỏ, đóng vai trò quan trọng trong nhiều chức năng của cơ thể.",
    vitamins_sources_title: "Một số vitamin quan trọng",
    vitamins_sources_desc:
      "Vitamin có nhiều loại khác nhau và được tìm thấy trong nhiều loại thực phẩm.",
    vitamin_a_title: "Vitamin A",
    vitamin_a_desc:
      "Vitamin A đóng vai trò quan trọng đối với thị lực, hệ miễn dịch và nhiều chức năng của cơ thể.",
    vitamin_b_title: "Vitamin nhóm B",
    vitamin_b_desc:
      "Các vitamin nhóm B tham gia vào nhiều quá trình chuyển hóa và hỗ trợ hoạt động bình thường của cơ thể.",
    vitamin_c_d_title: "Vitamin C và D",
    vitamin_c_d_desc:
      "Vitamin C và D có những vai trò khác nhau và có thể được cung cấp từ nhiều nguồn thực phẩm.",
    minerals_label: "KHOÁNG CHẤT",
    minerals_title: "Khoáng chất",
    minerals_desc:
      "Tìm hiểu về khoáng chất, vai trò của khoáng chất và các nguồn thực phẩm cung cấp khoáng chất.",

    minerals_what_title: "Khoáng chất là gì?",
    minerals_what_desc:
      "Khoáng chất là những chất dinh dưỡng cần thiết mà cơ thể cần với lượng khác nhau để hỗ trợ nhiều chức năng quan trọng.",

    minerals_sources_title: "Một số khoáng chất quan trọng",
    minerals_sources_desc:
      "Khoáng chất có nhiều loại khác nhau và được tìm thấy trong nhiều loại thực phẩm.",

    mineral_calcium_title: "Canxi",
    mineral_calcium_desc:
      "Canxi cần thiết cho xương và răng, đồng thời tham gia vào nhiều chức năng bình thường của cơ thể.",

    mineral_iron_title: "Sắt",
    mineral_iron_desc:
      "Sắt là một khoáng chất quan trọng và tham gia vào quá trình vận chuyển oxy trong cơ thể.",

    mineral_potassium_magnesium_title: "Kali và Magie",
    mineral_potassium_magnesium_desc:
      "Kali và magie tham gia vào nhiều chức năng của cơ thể và có thể được cung cấp từ nhiều loại thực phẩm.",
    water_label: "NƯỚC",
    water_title: "Nước",
    water_desc:
      "Tìm hiểu về nước, vai trò của nước và các nguồn cung cấp nước cho cơ thể.",

    water_what_title: "Nước là gì?",
    water_what_desc:
      "Nước là thành phần thiết yếu của cơ thể và đóng vai trò quan trọng trong nhiều quá trình hoạt động bình thường.",

    water_sources_title: "Các nguồn cung cấp nước",
    water_sources_desc:
      "Nước có thể được cung cấp từ đồ uống và nhiều loại thực phẩm.",

    water_plain_title: "Nước",
    water_plain_desc:
      "Nước lọc là một nguồn cung cấp nước đơn giản và phổ biến cho cơ thể.",

    water_foods_title: "Thực phẩm giàu nước",
    water_foods_desc:
      "Nhiều loại trái cây và rau củ chứa một lượng nước đáng kể và góp phần cung cấp nước cho cơ thể.",

    water_drinks_title: "Đồ uống",
    water_drinks_desc:
      "Một số loại đồ uống cũng có thể góp phần cung cấp nước cho cơ thể.",
    nutrition_needs_label: "NHU CẦU DINH DƯỠNG",
    nutrition_needs_title: "Nhu cầu dinh dưỡng",
    nutrition_needs_desc:
      "Tìm hiểu về các yếu tố ảnh hưởng đến nhu cầu dinh dưỡng và cách xây dựng chế độ ăn phù hợp.",

    nutrition_needs_what_title: "Nhu cầu dinh dưỡng là gì?",
    nutrition_needs_what_desc:
      "Nhu cầu dinh dưỡng đề cập đến lượng và loại chất dinh dưỡng mà cơ thể cần để hỗ trợ tăng trưởng, phát triển và các hoạt động bình thường.",

    nutrition_needs_topics_title: "Các yếu tố ảnh hưởng đến nhu cầu dinh dưỡng",
    nutrition_needs_topics_desc:
      "Nhu cầu dinh dưỡng có thể khác nhau tùy thuộc vào nhiều yếu tố.",

    nutrition_age_title: "Tuổi và giai đoạn phát triển",
    nutrition_age_desc:
      "Nhu cầu dinh dưỡng có thể thay đổi theo độ tuổi và từng giai đoạn phát triển của cơ thể.",

    nutrition_activity_title: "Hoạt động thể chất",
    nutrition_activity_desc:
      "Mức độ hoạt động thể chất là một trong những yếu tố có thể ảnh hưởng đến nhu cầu năng lượng và dinh dưỡng.",

    nutrition_lifestyle_title: "Lối sống",
    nutrition_lifestyle_desc:
      "Thói quen sinh hoạt và lựa chọn thực phẩm có thể ảnh hưởng đến chất lượng chế độ ăn uống.",
    food_diets_label: "THỰC PHẨM & CHẾ ĐỘ ĂN",
    food_diets_title: "Thực phẩm & Chế độ ăn",
    food_diets_desc:
      "Tìm hiểu về các nhóm thực phẩm, chế độ ăn cân bằng và cách lựa chọn thực phẩm phù hợp.",

    food_diets_what_title: "Thực phẩm & chế độ ăn là gì?",
    food_diets_what_desc:
      "Thực phẩm và chế độ ăn đóng vai trò quan trọng trong việc cung cấp các chất dinh dưỡng cần thiết cho sự tăng trưởng, phát triển và các hoạt động bình thường của cơ thể.",

    food_diets_topics_title: "Khám phá Thực phẩm & Chế độ ăn",
    food_diets_topics_desc:
      "Tìm hiểu những khái niệm cơ bản giúp bạn hiểu rõ hơn về thực phẩm và xây dựng thói quen ăn uống cân bằng.",

    food_groups_title: "Các nhóm thực phẩm",
    food_groups_desc:
      "Tìm hiểu về các nhóm thực phẩm khác nhau và những chất dinh dưỡng mà chúng có thể cung cấp.",

    balanced_diet_title: "Chế độ ăn cân bằng",
    balanced_diet_desc:
      "Tìm hiểu về tầm quan trọng của sự đa dạng và cân bằng trong một chế độ ăn uống lành mạnh.",

    healthy_food_choices_title: "Lựa chọn thực phẩm lành mạnh",
    healthy_food_choices_desc:
      "Khám phá những nguyên tắc đơn giản giúp bạn lựa chọn các thực phẩm giàu dinh dưỡng.",

    health_overview: "Sức khỏe & Lối sống",
    resource_guides: "Hướng dẫn",
    resource_articles: "Bài viết",

    // Đánh giá BMI (Chuẩn Châu Á - IDI & WPRO)
    bmi_underweight: "Gầy / Thiếu cân",
    bmi_normal: "Bình thường / Thể trạng chuẩn",
    bmi_overweight: "Thừa cân",
    bmi_obese: "Béo phì",
    advice_underweight:
      "Nên bổ sung thêm calo lành mạnh, tăng cường protein và carbohydrate phức tạp.",
    advice_normal:
      "Tuyệt vời! Hãy duy trì chế độ ăn cân bằng và rèn luyện thể lực đều đặn.",
    advice_overweight:
      "Nên giảm lượng đường/chất béo bão hòa và kết hợp tập cardio 30 phút/ngày.",
    advice_obese:
      "Nên lập kế hoạch thâm hụt calo an toàn và tham khảo thêm chuyên gia dinh dưỡng.",
  },
  en: {
    topics_label: "EXPLORE TOPICS",
    topics_title: "Explore Nutrition Topics",
    topics_desc:
      "Learn about essential nutrients and their important roles in the body.",

    topic_protein: "Protein",
    topic_protein_desc:
      "Learn about protein and foods that provide this essential nutrient.",

    topic_carbs: "Carbohydrates",
    topic_carbs_desc:
      "Learn about carbohydrates and their role in providing energy.",

    topic_fats: "Healthy Fats",
    topic_fats_desc: "Learn about healthy fats and nutritious food sources.",

    topic_vitamins: "Vitamins",
    topic_vitamins_desc:
      "Learn about vitamins and their important roles in the body.",

    topic_minerals: "Minerals",
    topic_minerals_desc:
      "Learn about essential minerals and their role in a balanced diet.",

    topic_water: "Water",
    topic_water_desc:
      "Learn about hydration and the importance of drinking enough water.",

    learn_more: "Learn more →",
    hero_label: "UNDERSTAND NUTRITION",
    hero_button: "Explore Topics",

    hero_title: "Nutrition Basics & Healthy Living",
    hero_desc:
      "Explore essential daily nutrients and monitor your body parameters scientifically.",
    calc_title: "BMI Calculator",
    label_height: "Height (cm):",
    label_weight: "Weight (kg):",
    btn_calc: "Calculate BMI",
    res_score: "Your BMI:",
    res_status: "Status:",
    food_section_title: "Essential Food Groups",
    cat_protein_title: "Protein Sources",
    cat_protein_desc:
      "Red/white meat, fish, eggs, and legumes build and repair muscles.",
    cat_fat_title: "Healthy Fats",
    cat_fat_desc:
      "Avocados, olive oil, and nuts provide energy and support vitamin absorption.",
    cat_fiber_title: "Fiber & Micronutrients",
    cat_fiber_desc:
      "Green vegetables and fresh fruits boost your digestive and immune systems.",
    nav_home: "Home",
    nav_about: "About Us",
    nav_topics: "Topics",
    nav_basic_nutrition: "Basic Nutrition",
    nav_nutrition_needs: "Nutrition Needs",
    nav_healthy_eating: "Healthy Eating",

    nav_food: "Food & Diets",
    nav_foods: "Nutritious Foods",
    nav_diets: "Popular Diets",
    nav_meals: "Meal Plans",

    nav_health: "Health",
    nav_heart: "Heart Health",
    nav_diabetes: "Diabetes",
    nav_bone: "Bone Health",

    nav_tools: "Tools",
    nav_resources: "Resources",
    featured_label: "FEATURED NUTRITION",
    featured_title: "Featured Nutrition",
    featured_desc:
      "Explore essential knowledge to better understand nutrition and healthy living.",

    featured_1_title: "Balanced Eating",
    featured_1_desc:
      "Learn how to build a varied diet with different food groups.",

    featured_2_title: "Understanding Nutrients",
    featured_2_desc: "Explore the roles of essential nutrients in the body.",

    featured_3_title: "Healthy Habits",
    featured_3_desc:
      "Discover simple habits that can support a healthy lifestyle.",

    featured_read_more: "Read more →",
    health_label: "HEALTH & LIFESTYLE",
    health_title: "Nutrition & Healthy Living",
    health_desc:
      "Learn how nutrition can support health and everyday healthy living.",

    health_heart_title: "Heart Health",
    health_heart_desc: "Learn about nutrition topics related to heart health.",

    health_bone_title: "Bone Health",
    health_bone_desc:
      "Explore the role of nutrients in supporting bones and the body.",

    health_lifestyle_title: "Healthy Lifestyle",
    health_lifestyle_desc:
      "Discover simple habits that can support a balanced lifestyle.",

    health_read_more: "Learn more →",
    tools_label: "NUTRIWISE TOOLS",
    tools_title: "Nutrition Tools",
    tools_desc:
      "Use simple tools to learn more about nutrition and healthy living.",

    tool_bmi_title: "BMI Calculator",
    tool_bmi_desc: "Explore BMI based on height and weight.",

    tool_nutrition_title: "Nutrition Calculator",
    tool_nutrition_desc: "Explore nutrition information about different foods.",

    tool_food_title: "Food Guide",
    tool_food_desc:
      "Explore food groups and discover a variety of nutritious choices.",

    tool_use: "Use tool →",
    tool_coming_soon: "Coming soon",
    tool_explore: "Explore →",
    basic_label: "BASIC NUTRITION",
    basic_title: "Understanding Basic Nutrition",
    basic_desc:
      "Learn about essential nutrients the body needs and their roles in supporting health.",

    what_nutrition_title: "What is Nutrition?",
    what_nutrition_desc:
      "Nutrition is the process of obtaining and using nutrients from food to support growth, body functions, and health.",

    essential_label: "ESSENTIAL NUTRIENTS",
    essential_title: "Six Essential Nutrient Groups",
    essential_desc:
      "Each nutrient group has different roles and contributes to the body's normal functions.",

    basic_protein_desc:
      "Protein provides amino acids that are needed for many functions in the body.",

    basic_carbs_desc:
      "Carbohydrates are an important source of energy for daily activities.",

    basic_fats_desc:
      "Fats provide energy and support several important functions in the body.",

    basic_vitamins_desc:
      "Vitamins are essential micronutrients needed for many processes in the body.",

    basic_minerals_desc:
      "Minerals are involved in many important functions throughout the body.",

    basic_water_desc:
      "Water is essential for many physiological processes and helps maintain fluid balance.",
    protein_label: "PROTEIN",
    protein_title: "Protein",
    protein_desc:
      "Learn about protein, its role in the body, and different food sources of protein.",
    protein_what_title: "What is protein?",
    protein_what_desc:
      "Protein is an important macronutrient made up of amino acids. It is found in many foods and plays many important roles in the body.",
    protein_sources_title: "Protein-rich food sources",
    protein_sources_desc:
      "Protein can be obtained from a variety of different foods.",
    protein_meat_fish_title: "Meat and fish",
    protein_eggs_dairy_title: "Eggs and dairy",
    protein_legumes_title: "Legumes",
    protein_meat_fish_desc: "Meat, fish, and seafood are sources of protein.",
    protein_eggs_dairy_desc:
      "Eggs and dairy products can also provide protein as part of a diet.",
    protein_legumes_desc:
      "Beans and other plant-based foods are also sources of protein.",
    carbs_label: "CARBOHYDRATES",
    carbs_title: "Carbohydrates",
    carbs_desc:
      "Learn about carbohydrates, their role in the body, and different food sources of carbohydrates.",

    carbs_what_title: "What are carbohydrates?",
    carbs_what_desc:
      "Carbohydrates are a group of nutrients that provide energy for the body and are found in many foods.",

    carbs_sources_title: "Carbohydrate-rich food sources",
    carbs_sources_desc:
      "Carbohydrates can be obtained from a variety of different foods.",

    carbs_grains_title: "Grains and rice",
    carbs_grains_desc:
      "Rice, bread, oats, and other grains are common sources of carbohydrates.",

    carbs_fruits_title: "Fruits",
    carbs_fruits_desc:
      "Fruits provide carbohydrates along with vitamins, minerals, and fiber.",

    carbs_vegetables_title: "Vegetables",
    carbs_vegetables_desc:
      "Some vegetables, such as potatoes, sweet potatoes, and corn, also provide carbohydrates.",
    fats_label: "HEALTHY FATS",
    fats_title: "Healthy Fats",
    fats_desc:
      "Learn about healthy fats, their role in the body, and different food sources of fat.",

    fats_what_title: "What are healthy fats?",
    fats_what_desc:
      "Fat is an essential nutrient that provides energy and supports many important functions in the body.",

    fats_sources_title: "Healthy fat food sources",
    fats_sources_desc: "Fat can be obtained from a variety of different foods.",

    fats_avocado_title: "Avocado and plant oils",
    fats_avocado_desc:
      "Avocado and plant oils such as olive oil provide unsaturated fats.",

    fats_nuts_title: "Nuts and seeds",
    fats_nuts_desc:
      "Nuts and seeds such as almonds, walnuts, and chia seeds provide fat along with other nutrients.",

    fats_fish_title: "Fatty fish",
    fats_fish_desc:
      "Fatty fish such as salmon and mackerel provide omega-3 fats.",
    vitamins_label: "VITAMINS",
    vitamins_title: "Vitamins",
    vitamins_desc:
      "Learn about vitamins, their roles in the body, and different food sources of vitamins.",
    vitamins_what_title: "What are vitamins?",
    vitamins_what_desc:
      "Vitamins are essential nutrients needed in small amounts that play important roles in many body functions.",
    vitamins_sources_title: "Some important vitamins",
    vitamins_sources_desc:
      "There are many different vitamins, and they can be found in a variety of foods.",
    vitamin_a_title: "Vitamin A",
    vitamin_a_desc:
      "Vitamin A plays an important role in vision, immune function, and many other functions of the body.",
    vitamin_b_title: "B vitamins",
    vitamin_b_desc:
      "B vitamins are involved in many metabolic processes and support normal body functions.",
    vitamin_c_d_title: "Vitamins C and D",
    vitamin_c_d_desc:
      "Vitamins C and D have different roles and can be obtained from a variety of food sources.",
    minerals_label: "MINERALS",
    minerals_title: "Minerals",
    minerals_desc:
      "Learn about minerals, their roles in the body, and different food sources of minerals.",

    minerals_what_title: "What are minerals?",
    minerals_what_desc:
      "Minerals are essential nutrients that the body needs in different amounts to support many important functions.",

    minerals_sources_title: "Some important minerals",
    minerals_sources_desc:
      "There are many different minerals, and they can be found in a variety of foods.",

    mineral_calcium_title: "Calcium",
    mineral_calcium_desc:
      "Calcium is essential for bones and teeth and also supports many normal functions of the body.",

    mineral_iron_title: "Iron",
    mineral_iron_desc:
      "Iron is an important mineral that plays a role in transporting oxygen throughout the body.",

    mineral_potassium_magnesium_title: "Potassium & Magnesium",
    mineral_potassium_magnesium_desc:
      "Potassium and magnesium are involved in many body functions and can be obtained from a variety of foods.",
    water_label: "WATER",
    water_title: "Water",
    water_desc:
      "Learn about water, its role in the body, and different sources of water.",

    water_what_title: "What is water?",
    water_what_desc:
      "Water is an essential component of the body and plays an important role in many normal body processes.",

    water_sources_title: "Sources of water",
    water_sources_desc:
      "Water can be obtained from beverages and many different foods.",

    water_plain_title: "Water",
    water_plain_desc:
      "Plain water is a simple and common source of water for the body.",

    water_foods_title: "Water-rich foods",
    water_foods_desc:
      "Many fruits and vegetables contain significant amounts of water and can contribute to water intake.",

    water_drinks_title: "Beverages",
    water_drinks_desc: "Some beverages can also contribute to water intake.",
    nutrition_needs_label: "NUTRITION NEEDS",
    nutrition_needs_title: "Nutrition Needs",
    nutrition_needs_desc:
      "Learn about the factors that influence nutrition needs and how to build a balanced diet.",

    nutrition_needs_what_title: "What are nutrition needs?",
    nutrition_needs_what_desc:
      "Nutrition needs refer to the amount and types of nutrients the body needs to support growth, development, and normal activities.",

    nutrition_needs_topics_title: "Factors that affect nutrition needs",
    nutrition_needs_topics_desc:
      "Nutrition needs can vary depending on many different factors.",

    nutrition_age_title: "Age and development",
    nutrition_age_desc:
      "Nutrition needs can change depending on age and different stages of development.",

    nutrition_activity_title: "Physical activity",
    nutrition_activity_desc:
      "The level of physical activity is one factor that can affect energy and nutrient needs.",

    nutrition_lifestyle_title: "Lifestyle",
    nutrition_lifestyle_desc:
      "Daily habits and food choices can influence the overall quality of a diet.",
    food_diets_label: "FOOD & DIETS",
    food_diets_title: "Food & Diets",
    food_diets_desc:
      "Learn about food groups, balanced diets, and healthy food choices.",

    food_diets_what_title: "What are Food & Diets?",
    food_diets_what_desc:
      "Food and diet choices play an important role in providing the nutrients the body needs for growth, development, and normal daily activities.",

    food_diets_topics_title: "Explore Food & Diets",
    food_diets_topics_desc:
      "Explore some basic concepts that can help you understand food and build balanced eating habits.",

    food_groups_title: "Food Groups",
    food_groups_desc:
      "Learn about different food groups and the nutrients they can provide.",

    balanced_diet_title: "Balanced Diet",
    balanced_diet_desc:
      "Learn about the importance of variety and balance in a healthy diet.",

    healthy_food_choices_title: "Healthy Food Choices",
    healthy_food_choices_desc:
      "Explore simple principles for making nutritious food choices.",

    health_overview: "Health & Lifestyle",
    resource_guides: "Guides",
    resource_articles: "Articles",
    // BMI Evaluation
    bmi_underweight: "Underweight",
    bmi_normal: "Normal weight",
    bmi_overweight: "Overweight",
    bmi_obese: "Obesity",
    advice_underweight:
      "Increase calorie intake with healthy foods, rich in proteins and complex carbs.",
    advice_normal:
      "Great job! Maintain a balanced diet and regular physical workouts.",
    advice_overweight:
      "Reduce added sugars and saturated fats. Engage in 30 mins of daily cardio.",
    advice_obese:
      "Adopt a healthy calorie deficit and consult with a certified dietitian.",
  },
};

let currentLang = localStorage.getItem("nutriwise-language") || "vi";
let lastCalculatedBMI = null;

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("nutriwise-language", lang);

  const btnVi = document.getElementById("btn-vi");
  const btnEn = document.getElementById("btn-en");

  if (btnVi) {
    btnVi.classList.toggle("active", lang === "vi");
  }

  if (btnEn) {
    btnEn.classList.toggle("active", lang === "en");
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  if (lastCalculatedBMI !== null) {
    updateBMIResultUI(lastCalculatedBMI);
  }
}

function calculateBMI() {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");

  if (!heightInput || !weightInput) return;

  const hCm = parseFloat(heightInput.value);
  const wKg = parseFloat(weightInput.value);

  if (!hCm || !wKg || hCm <= 0 || wKg <= 0) {
    alert(
      currentLang === "vi"
        ? "Vui lòng nhập chiều cao và cân nặng hợp lệ!"
        : "Please enter valid height and weight!",
    );
    return;
  }

  const hM = hCm / 100;
  const bmi = wKg / (hM * hM);

  lastCalculatedBMI = parseFloat(bmi.toFixed(1));

  updateBMIResultUI(lastCalculatedBMI);
}

function updateBMIResultUI(bmi) {
  const resultBox = document.getElementById("result");
  const bmiValEl = document.getElementById("bmi-val");
  const statusEl = document.getElementById("bmi-status");
  const adviceEl = document.getElementById("bmi-advice");

  if (!resultBox || !bmiValEl || !statusEl || !adviceEl) return;

  resultBox.classList.remove("hidden");

  bmiValEl.textContent = bmi;

  let statusKey = "";
  let adviceKey = "";

  if (bmi < 18.5) {
    statusKey = "bmi_underweight";
    adviceKey = "advice_underweight";
  } else if (bmi < 23) {
    statusKey = "bmi_normal";
    adviceKey = "advice_normal";
  } else if (bmi < 25) {
    statusKey = "bmi_overweight";
    adviceKey = "advice_overweight";
  } else {
    statusKey = "bmi_obese";
    adviceKey = "advice_obese";
  }

  statusEl.textContent = translations[currentLang][statusKey];
  adviceEl.textContent = translations[currentLang][adviceKey];
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});

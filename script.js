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
    nav_special_needs: "Nhu cầu dinh dưỡng đặc biệt",

    nav_pregnancy: "Phụ nữ mang thai",
    nav_athletes: "Vận động viên",
    nav_conditions: "Người có bệnh lý",

    nutrition_age_title: "Tuổi & giai đoạn phát triển",
    nutrition_activity_title: "Hoạt động thể chất",
    nutrition_lifestyle_title: "Lối sống",
    nutrition_needs_factors_label: "CÁC YẾU TỐ CHÍNH",

    nutrition_needs_what_desc_2:
      "Cơ thể cần nhiều nhóm chất khác nhau, bao gồm carbohydrate, protein, chất béo, vitamin, khoáng chất và nước. Mỗi nhóm có vai trò riêng, vì vậy một chế độ ăn đa dạng giúp cung cấp nhiều loại chất dinh dưỡng cần thiết.",

    nutrition_needs_importance_label: "VÌ SAO ĐIỀU NÀY QUAN TRỌNG",
    nutrition_needs_importance_title:
      "Tại sao nhu cầu dinh dưỡng lại quan trọng?",
    nutrition_needs_importance_desc:
      "Hiểu về nhu cầu dinh dưỡng giúp chúng ta nhận biết vai trò của nhiều nhóm chất và xây dựng thói quen ăn uống đa dạng hơn.",

    nutrition_growth_title: "Tăng trưởng và phát triển",
    nutrition_growth_desc:
      "Dinh dưỡng cung cấp các chất cần thiết cho quá trình tăng trưởng và phát triển bình thường, đặc biệt trong những giai đoạn cơ thể phát triển nhanh.",

    nutrition_energy_title: "Năng lượng và hoạt động hằng ngày",
    nutrition_energy_desc:
      "Các chất dinh dưỡng giúp cung cấp năng lượng và hỗ trợ cơ thể trong các hoạt động hằng ngày.",

    nutrition_body_functions_title: "Chức năng bình thường của cơ thể",
    nutrition_body_functions_desc:
      "Vitamin, khoáng chất, protein, chất béo, carbohydrate và nước đều có những vai trò khác nhau trong các chức năng bình thường của cơ thể.",

    nutrition_overall_health_title: "Sức khỏe tổng thể",
    nutrition_overall_health_desc:
      "Một chế độ ăn cân bằng và đa dạng có thể góp phần hỗ trợ sức khỏe tổng thể khi kết hợp với lối sống lành mạnh.",

    nutrition_balanced_label: "CHẾ ĐỘ ĂN CÂN BẰNG",
    nutrition_balanced_title: "Xây dựng một chế độ ăn cân bằng",
    nutrition_balanced_desc:
      "Hiểu nhu cầu dinh dưỡng là bước đầu tiên. Một chế độ ăn cân bằng nên kết hợp nhiều loại thực phẩm để cung cấp đa dạng chất dinh dưỡng.",

    nutrition_macronutrients_title: "Các chất dinh dưỡng đa lượng",
    nutrition_macronutrients_desc:
      "Carbohydrate, protein và chất béo là những nhóm chất đa lượng. Chúng có vai trò cung cấp năng lượng và hỗ trợ nhiều chức năng của cơ thể.",

    nutrition_micronutrients_title: "Các vi chất dinh dưỡng",
    nutrition_micronutrients_desc:
      "Vitamin và khoáng chất cần thiết với lượng nhỏ hơn nhưng vẫn đóng vai trò quan trọng trong nhiều quá trình của cơ thể.",

    nutrition_hydration_title: "Nước và sự hydrat hóa",
    nutrition_hydration_desc:
      "Nước là một phần thiết yếu của dinh dưỡng và tham gia vào nhiều quá trình bình thường của cơ thể.",

    nutrition_takeaways_title: "Điểm cần nhớ",
    nutrition_takeaways_desc:
      "Nhu cầu dinh dưỡng có thể thay đổi theo tuổi, mức độ hoạt động và lối sống. Thay vì tập trung vào một chất dinh dưỡng duy nhất, hãy hướng đến sự đa dạng và cân bằng trong chế độ ăn.",
    food_explore_button: "Khám phá Thực phẩm & Chế độ ăn",
    food_floating_title: "Lựa chọn thực phẩm tốt hơn",
    food_floating_desc: "Tìm hiểu. Hiểu rõ. Lựa chọn.",

    food_basics_label: "NỀN TẢNG THỰC PHẨM",
    food_balance_label: "CÂN BẰNG & ĐA DẠNG",
    food_choices_label: "LỰA CHỌN HẰNG NGÀY",

    food_explore_groups: "Khám phá Nhóm thực phẩm",
    food_explore_balanced: "Khám phá Chế độ ăn cân bằng",
    food_explore_choices: "Khám phá Lựa chọn lành mạnh",

    food_cta_label: "TIẾP TỤC HỌC",
    food_cta_title: "Xây dựng kiến thức dinh dưỡng",
    food_cta_desc:
      "Khám phá các chủ đề dinh dưỡng cơ bản để hiểu rõ hơn về những dưỡng chất cơ thể cần.",
    food_cta_button: "Khám phá Dinh dưỡng cơ bản",
    health_hero_label: "SỨC KHỎE & LỐI SỐNG",
    health_hero_title:
      "Hiểu về sức khỏe. Khám phá cách dinh dưỡng hỗ trợ cơ thể.",
    health_hero_desc:
      "Khám phá mối liên hệ giữa thói quen ăn uống và sức khỏe tổng thể theo góc nhìn khoa học.",
    health_intro_title: "Tại sao sức khỏe tổng thể lại quan trọng?",
    health_intro_desc:
      "Dinh dưỡng, vận động và lối sống không hoạt động độc lập. Chúng là những bánh răng liên kết chặt chẽ giúp cơ thể bạn duy trì trạng thái cân bằng và phòng ngừa rủi ro lâu dài.",
    heart_title: "Sức khỏe Tim mạch",
    heart_desc:
      "Sức khỏe tim mạch chịu ảnh hưởng lớn từ lượng chất béo, muối và chất xơ bạn nạp vào mỗi ngày. Tìm hiểu cách các dưỡng chất này hỗ trợ hệ tuần hoàn hoạt động bền bỉ.",
    diabetes_title: "Nhận thức về Đường huyết",
    diabetes_desc:
      "Quản lý lượng đường huyết không chỉ là việc kiêng đồ ngọt. Khám phá cách carbohydrate phức tạp và protein giúp ổn định năng lượng mà không làm tăng vọt đường huyết.",
    bone_title: "Sức mạnh của Xương",
    bone_desc:
      "Xương cần nhiều hơn là chỉ Canxi. Vitamin D, Magie và các bài tập chịu lực (weight-bearing exercises) là chìa khóa để duy trì khung xương chắc khỏe qua từng độ tuổi.",
    takeaway_title: "Những điểm cốt lõi",
    takeaway_1:
      "Dinh dưỡng đóng vai trò hỗ trợ, không phải phương thuốc thay thế điều trị y tế.",
    takeaway_2:
      "Sự cân bằng trong dài hạn quan trọng hơn việc kiêng khem khắc nghiệt trong ngắn hạn.",
    takeaway_3:
      "Kết hợp chế độ ăn lành mạnh với vận động đều đặn là công thức tốt nhất.",
    about_story_title: "Câu chuyện của NutriWise",
    about_story_1:
      "Giữa thời đại bùng nổ thông tin, việc tìm kiếm một chế độ ăn phù hợp thường đi kèm với sự hoang mang. Các trào lưu ăn kiêng xuất hiện chớp nhoáng, những lời khuyên mâu thuẫn nhau tràn lan trên mạng xã hội khiến việc hiểu đúng về dinh dưỡng trở nên khó khăn hơn bao giờ hết.",
    about_story_2:
      "Đó là lý do NutriWise ra đời. Chúng tôi đóng vai trò là một 'bộ lọc' thông tin, dọn dẹp những thuật ngữ y khoa phức tạp và loại bỏ những lầm tưởng tai hại. Mục tiêu của dự án là xây dựng một từ điển dinh dưỡng số — nơi mọi kiến thức đều minh bạch, dễ hiểu và hoàn toàn miễn phí cho cộng đồng.",
    sources_label: "TIÊU CHUẨN NỘI DUNG",
    sources_title: "Nền tảng dữ liệu đáng tin cậy",
    sources_desc:
      "Chúng tôi không tự tạo ra lời khuyên y tế. Mọi thông tin trên NutriWise đều được tham chiếu từ các nguồn chuẩn mực.",
    source_1_title: "Tổ chức Y tế Toàn cầu",
    source_1_desc:
      "Dữ liệu tiêu chuẩn được cập nhật từ Tổ chức Y tế Thế giới (WHO) và Tổ chức Lương thực & Nông nghiệp Liên Hợp Quốc (FAO).",
    source_2_title: "Nghiên cứu Lâm sàng",
    source_2_desc:
      "Tham chiếu các bài báo cáo khoa học từ những tạp chí y khoa và viện dinh dưỡng quốc gia.",
    source_3_title: "Tính Khách quan",
    source_3_desc:
      "Website hoạt động độc lập, phi lợi nhuận và không bị chi phối bởi bất kỳ nhãn hàng thực phẩm chức năng nào.",
    about_title: "Biến kiến thức dinh dưỡng trở nên đơn giản.",
    about_subtitle:
      "Chúng tôi xây dựng NutriWise để giúp bạn vượt qua 'ma trận' thông tin sức khỏe bằng những kiến thức đã được chọn lọc và kiểm chứng.",

    bento_mission: "Our Mission",
    bento_mission_desc:
      "Cung cấp một nền tảng giáo dục sức khỏe hoàn toàn miễn phí, trực quan và an toàn. NutriWise tin rằng một lối sống lành mạnh bắt đầu từ sự thấu hiểu cơ thể chính mình.",

    bento_science: "Chuẩn khoa học",
    bento_science_desc:
      "Nội dung xây dựng dựa trên nền tảng nghiên cứu y khoa, không cung cấp lời khuyên vô căn cứ.",

    bento_practical: "Tính thực tiễn",
    bento_practical_desc:
      "Cung cấp công cụ đo lường BMI và tính toán dinh dưỡng để bạn áp dụng ngay vào đời sống.",

    about_creator: "Meet the Creator",
    about_creator_desc:
      "Được phát triển với niềm đam mê kết hợp giữa lập trình Web và sức khỏe cộng đồng. NutriWise là một dự án tâm huyết nhằm mang lại giá trị thực cho người dùng.",
    about_contact: "Liên hệ với chúng tôi",

    about_process_title: "Quy trình biên tập chuẩn khoa học",
    about_process_desc:
      "Mọi bài viết trên NutriWise không dựa trên xu hướng mạng xã hội hay các chế độ ăn kiêng truyền miệng. Chúng tôi tổng hợp dữ liệu từ các tổ chức y tế uy tín (như WHO, FAO) và được rà soát chéo bởi các chuyên gia có chuyên môn. Mục tiêu của chúng tôi là dịch những thuật ngữ y khoa phức tạp thành ngôn ngữ dễ hiểu, giúp bạn tự tin đưa ra quyết định cho bữa ăn hàng ngày.",
    activity_label: "HOẠT ĐỘNG THỂ CHẤT",
    activity_hero_title: "Dinh dưỡng trong Thể thao",
    activity_hero_desc:
      "Cho dù bạn đi bộ nhẹ nhàng hay tập luyện cường độ cao, việc nạp đúng nhiên liệu vào đúng thời điểm sẽ quyết định hiệu suất và khả năng phục hồi của cơ thể.",
    activity_pre_title: "Trước khi tập: Nạp năng lượng",
    activity_pre_desc:
      "Carbohydrate là nguồn nhiên liệu vàng. Hãy ăn nhẹ từ 1-2 tiếng trước khi tập với các thực phẩm dễ tiêu hóa như chuối, yến mạch để cơ thể có đủ sức bền mà không bị nặng bụng.",
    activity_during_title: "Trong khi tập: Bù nước liên tục",
    activity_during_desc:
      "Mất nước làm giảm đáng kể hiệu suất và gây chuột rút. Hãy uống từng ngụm nhỏ cứ mỗi 15-20 phút. Nếu tập nặng trên 60 phút, cần bổ sung thêm đồ uống chứa điện giải để bù đắp khoáng chất thất thoát qua mồ hôi.",
    activity_post_title: "Sau khi tập: Phục hồi & Xây dựng",
    activity_post_desc:
      "Cơ bắp cần Protein để sửa chữa các vi tổn thương và Carbohydrate để bù đắp lượng glycogen đã tiêu hao. Khung giờ vàng để nạp dinh dưỡng là trong vòng 45-60 phút sau khi kết thúc buổi tập.",
    lifestyle_label: "LỐI SỐNG & THÓI QUEN",
    lifestyle_hero_title: "Sức Khỏe Khởi Nguồn Từ Thói Quen",
    lifestyle_hero_desc:
      "Dinh dưỡng không chỉ nằm ở những gì bạn đặt lên đĩa, mà còn phụ thuộc vào cách bạn sinh hoạt, ngủ nghỉ và quản lý căng thẳng mỗi ngày.",
    lifestyle_eat_title: "Thói quen ăn uống chánh niệm",
    lifestyle_eat_desc:
      "Ăn trong lúc xem điện thoại hoặc làm việc khiến não bộ không ghi nhận cảm giác no, dẫn đến việc nạp dư thừa calo. Tập trung vào bữa ăn giúp cải thiện tiêu hóa và kiểm soát cân nặng tự nhiên.",
    lifestyle_sleep_title: "Giấc ngủ & Nhịp sinh học",
    lifestyle_sleep_desc:
      "Thiếu ngủ làm tăng hormone Ghrelin (gây đói) và giảm Leptin (gây no), khiến bạn thèm đồ ngọt và thức ăn nhanh. Một giấc ngủ sâu 7-8 tiếng là 'liều thuốc' trao đổi chất tốt nhất.",
    lifestyle_stress_title: "Kiểm soát căng thẳng (Stress)",
    lifestyle_stress_desc:
      "Căng thẳng mãn tính giải phóng Cortisol, làm tăng tích tụ mỡ nội tạng và cản trở quá trình hấp thụ vi chất. Vận động nhẹ nhàng hoặc thiền định giúp cơ thể duy trì trạng thái hấp thu tối ưu.",
    lifestyle_eat_tip1: "Nhai chậm giúp dạ dày báo tín hiệu no kịp thời.",
    lifestyle_eat_tip2: "Hạn chế thiết bị điện tử trong bữa ăn.",
    lifestyle_sleep_tip1: "Giấc ngủ phục hồi hệ thống trao đổi chất.",
    lifestyle_sleep_tip2: "Tránh nạp caffeine ít nhất 6 tiếng trước khi ngủ.",
    lifestyle_stress_tip1: "Cortisol cao làm tăng cảm giác thèm đường.",
    lifestyle_stress_tip2: "Kết hợp Yoga hoặc thiền 15 phút mỗi ngày.",
    activity_pre_tip_1: "Tuyệt đối không nhịn đói trước bài tập nặng.",
    activity_pre_tip_2: "Hạn chế thực phẩm nhiều dầu mỡ để tránh đầy hơi.",
    activity_during_tip_1: "Đừng đợi đến khi khát khô cổ mới uống nước.",
    activity_during_tip_2:
      "Nước dừa tươi là nguồn điện giải tự nhiên tuyệt vời.",
    activity_post_tip_1: "Trứng, ức gà hoặc Whey protein là lựa chọn hoàn hảo.",
    activity_post_tip_2:
      "Đừng quên kéo giãn cơ (stretching) để máu lưu thông tốt.",
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
    nav_special_needs: "Special Nutrition Needs",

    nav_pregnancy: "Pregnancy",
    nav_athletes: "Athletes",
    nav_conditions: "People with Health Conditions",

    nutrition_age_title: "Age & Development",
    nutrition_activity_title: "Physical Activity",
    nutrition_lifestyle_title: "Lifestyle",
    nutrition_needs_factors_label: "KEY FACTORS",

    nutrition_needs_what_desc_2:
      "The body needs different groups of nutrients, including carbohydrates, proteins, fats, vitamins, minerals, and water. Each group has its own role, so a varied diet helps provide a range of essential nutrients.",

    nutrition_needs_importance_label: "WHY IT MATTERS",
    nutrition_needs_importance_title: "Why Do Nutrition Needs Matter?",
    nutrition_needs_importance_desc:
      "Understanding nutrition needs helps us recognize the roles of different nutrients and build more varied eating habits.",

    nutrition_growth_title: "Growth & Development",
    nutrition_growth_desc:
      "Nutrition provides nutrients needed for normal growth and development, especially during periods when the body is developing rapidly.",

    nutrition_energy_title: "Energy & Daily Activities",
    nutrition_energy_desc:
      "Nutrients help provide energy and support the body during everyday activities.",

    nutrition_body_functions_title: "Normal Body Functions",
    nutrition_body_functions_desc:
      "Vitamins, minerals, protein, fats, carbohydrates, and water each have different roles in supporting normal body functions.",

    nutrition_overall_health_title: "Overall Health",
    nutrition_overall_health_desc:
      "A balanced and varied diet can contribute to overall health when combined with a healthy lifestyle.",

    nutrition_balanced_label: "BALANCED DIET",
    nutrition_balanced_title: "Building a Balanced Diet",
    nutrition_balanced_desc:
      "Understanding nutrition needs is only the first step. A balanced diet should include a variety of foods to provide a range of nutrients.",

    nutrition_macronutrients_title: "Macronutrients",
    nutrition_macronutrients_desc:
      "Carbohydrates, proteins, and fats are the three main macronutrients. They provide energy and support many functions of the body.",

    nutrition_micronutrients_title: "Micronutrients",
    nutrition_micronutrients_desc:
      "Vitamins and minerals are needed in smaller amounts but still play important roles in many processes in the body.",

    nutrition_hydration_title: "Hydration",
    nutrition_hydration_desc:
      "Water is an essential part of nutrition and is involved in many normal processes in the body.",

    nutrition_takeaways_title: "Key Takeaways",
    nutrition_takeaways_desc:
      "Nutrition needs can change with age, activity level, and lifestyle. Instead of focusing on one nutrient alone, aim for variety and balance in the diet.",
    food_explore_button: "Explore Food & Diets",
    food_floating_title: "Better Food Choices",
    food_floating_desc: "Learn. Understand. Choose.",

    food_basics_label: "FOOD BASICS",
    food_balance_label: "BALANCE & VARIETY",
    food_choices_label: "EVERYDAY CHOICES",

    food_explore_groups: "Explore Food Groups",
    food_explore_balanced: "Explore Balanced Diet",
    food_explore_choices: "Explore Healthy Choices",

    food_cta_label: "KEEP LEARNING",
    food_cta_title: "Build Your Nutrition Knowledge",
    food_cta_desc:
      "Explore basic nutrition topics to better understand the nutrients your body needs.",
    food_cta_button: "Explore Basic Nutrition",
    health_hero_label: "HEALTH & LIFESTYLE",
    health_hero_title:
      "Understand your health. Learn how nutrition supports it.",
    health_hero_desc:
      "Explore the connection between eating habits and overall health from a scientific perspective.",
    health_intro_title: "Why does overall health matter?",
    health_intro_desc:
      "Nutrition, exercise, and lifestyle do not work independently. They are interconnected gears that help your body maintain balance and prevent long-term risks.",
    heart_title: "Heart Health",
    heart_desc:
      "Cardiovascular health is greatly influenced by the fat, salt, and fiber you consume daily. Learn how these nutrients support a resilient circulatory system.",
    diabetes_title: "Diabetes Awareness",
    diabetes_desc:
      "Managing blood sugar isn't just about avoiding sweets. Discover how complex carbohydrates and protein help stabilize energy without blood sugar spikes.",
    bone_title: "Bone Strength",
    bone_desc:
      "Bones need more than just Calcium. Vitamin D, Magnesium, and weight-bearing exercises are key to maintaining strong bones at every age.",
    takeaway_title: "Key Takeaways",
    takeaway_1:
      "Nutrition plays a supportive role, not a substitute for medical treatment.",
    takeaway_2:
      "Long-term balance is more important than strict, short-term dieting.",
    takeaway_3:
      "Combining a healthy diet with regular physical activity is the best formula.",
    about_story_title: "The NutriWise Story",
    about_story_1:
      "In an era of information overload, finding the right diet often comes with confusion. Fleeting diet trends and contradictory advice on social media make understanding true nutrition harder than ever.",
    about_story_2:
      "That is why NutriWise was created. We act as an information 'filter', clearing away complex medical jargon and dispelling harmful myths. Our goal is to build a digital nutrition dictionary—where knowledge is transparent, easy to understand, and completely free for the community.",
    sources_label: "CONTENT STANDARDS",
    sources_title: "Reliable Data Foundations",
    sources_desc:
      "We do not invent medical advice. All information on NutriWise is referenced from standardized sources.",
    source_1_title: "Global Health Organizations",
    source_1_desc:
      "Standardized data is updated from the World Health Organization (WHO) and the Food and Agriculture Organization (FAO).",
    source_2_title: "Clinical Research",
    source_2_desc:
      "We reference scientific reports from leading medical journals and national nutrition institutes.",
    source_3_title: "Objectivity & Independence",
    source_3_desc:
      "The website operates independently, non-profit, and is not influenced by any dietary supplement brands.",
    about_title: "Making nutrition knowledge simple.",
    about_subtitle:
      "We built NutriWise to help you navigate the 'maze' of health information with curated and verified knowledge.",

    bento_mission: "Our Mission",
    bento_mission_desc:
      "Providing a completely free, intuitive, and safe health education platform. NutriWise believes a healthy lifestyle starts with understanding your own body.",

    bento_science: "Science-Backed",
    bento_science_desc:
      "Content is built on a foundation of medical research, never offering baseless advice.",

    bento_practical: "Practicality",
    bento_practical_desc:
      "Providing BMI measurement and nutrition calculation tools for you to apply immediately to your daily life.",

    about_creator: "Meet the Creator",
    about_creator_desc:
      "Developed with a passion for combining Web programming and public health. NutriWise is a passion project aimed at bringing real value to users.",
    about_contact: "Contact Us",

    about_process_title: "Science-Based Editorial Process",
    about_process_desc:
      "Every article on NutriWise is not based on social media trends or word-of-mouth diets. We synthesize data from reputable health organizations (like WHO, FAO) and cross-review it with qualified experts. Our goal is to translate complex medical jargon into easy-to-understand language, helping you confidently make decisions for your daily meals.",
    activity_label: "PHYSICAL ACTIVITY",
    activity_hero_title: "Nutrition for Sports & Exercise",
    activity_hero_desc:
      "Whether you are taking a light walk or doing high-intensity training, fueling your body with the right nutrients at the right time determines your performance and recovery.",
    activity_pre_title: "Pre-workout: Fuel up",
    activity_pre_desc:
      "Carbohydrates are your golden fuel. Eat a light, easy-to-digest snack like a banana or oatmeal 1-2 hours before exercising to ensure your body has enough stamina without feeling bloated.",
    activity_during_title: "During workout: Stay hydrated",
    activity_during_desc:
      "Dehydration significantly reduces performance and causes cramps. Take small sips every 15-20 minutes. If exercising intensely for over 60 minutes, add an electrolyte drink to replenish lost minerals.",
    activity_post_title: "Post-workout: Recover & Rebuild",
    activity_post_desc:
      "Muscles need Protein to repair micro-tears and Carbohydrates to replenish depleted glycogen. The golden window for nutrition is within 45-60 minutes after finishing your workout.",
    lifestyle_label: "LIFESTYLE & HABITS",
    lifestyle_hero_title: "Health Starts with Daily Habits",
    lifestyle_hero_desc:
      "Nutrition isn't just about what's on your plate; it's deeply connected to how you live, sleep, and manage stress every single day.",
    lifestyle_eat_title: "Mindful Eating Habits",
    lifestyle_eat_desc:
      "Eating while distracted prevents your brain from registering fullness, leading to overeating. Focusing on your meal improves digestion and naturally supports weight management.",
    lifestyle_sleep_title: "Sleep & Circadian Rhythm",
    lifestyle_sleep_desc:
      "Sleep deprivation spikes Ghrelin (hunger hormone) and lowers Leptin (fullness hormone), causing sugar cravings. A deep 7-8 hour sleep is the best metabolic 'medicine'.",
    lifestyle_stress_title: "Stress Management",
    lifestyle_stress_desc:
      "Chronic stress releases Cortisol, increasing visceral fat and hindering nutrient absorption. Light activity or meditation helps keep your body in an optimal state for digestion.",
    lifestyle_eat_tip1:
      "Eating slowly gives your stomach time to signal fullness.",
    lifestyle_eat_tip2: "Limit the use of electronic devices during meals.",
    lifestyle_sleep_tip1: "Deep sleep restores the metabolic system.",
    lifestyle_sleep_tip2: "Avoid caffeine for at least 6 hours before bedtime.",
    lifestyle_stress_tip1: "High cortisol increases sugar cravings.",
    lifestyle_stress_tip2:
      "Incorporate 15 minutes of Yoga or meditation daily.",
    activity_pre_tip_1: "Never exercise intensely on an empty stomach.",

    activity_pre_tip_2:
      "Limit high-fat foods before exercise to avoid bloating.",

    activity_during_tip_1:
      "Do not wait until you are very thirsty before drinking water.",

    activity_during_tip_2:
      "Fresh coconut water is an excellent natural source of electrolytes.",

    activity_post_tip_1:
      "Eggs, chicken breast, or whey protein are excellent choices.",

    activity_post_tip_2:
      "Don't forget to stretch to help improve blood circulation.",
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
/* =========================================================
   AGE & DEVELOPMENT TRANSLATIONS
   ========================================================= */

if (typeof translations !== "undefined") {
  /* ---------- ENGLISH ---------- */

  Object.assign(translations.en, {
    age_development_label: "NUTRITION BY AGE",
    age_development_title: "Age & Development",
    age_development_desc:
      "Nutritional needs change throughout life. Understanding these changes can help support healthy growth, development, energy, and overall well-being at every stage of life.",

    age_intro_label: "UNDERSTANDING NUTRITION NEEDS",
    age_intro_title: "Nutrition Changes as We Grow",
    age_intro_card_title: "Different stages, different needs",

    age_intro_desc_1:
      "Our bodies go through many changes as we grow and age. Because of this, the amount and types of nutrients we need can also change.",

    age_intro_desc_2:
      "A balanced and varied diet can provide important nutrients that support growth, maintain the body, and promote healthy development.",

    age_stages_label: "LIFE STAGES",
    age_stages_title: "Nutrition Through Different Stages of Life",

    age_stages_desc:
      "Each stage of life has different nutritional priorities. Learning about these differences can help us make informed food choices.",

    age_infant_title: "Infancy",
    age_infant_desc:
      "Infancy is a period of rapid growth and development. Adequate nutrition supports physical growth, brain development, and a healthy immune system.",

    age_children_title: "Childhood",
    age_children_desc:
      "Children need a variety of nutrients to support continued growth, strong bones, learning, and everyday physical activity.",

    age_teenagers_title: "Adolescence",
    age_teenagers_desc:
      "During adolescence, the body experiences significant growth and development. Nutrients such as protein, calcium, iron, and vitamins are especially important.",

    age_adults_title: "Adulthood",
    age_adults_desc:
      "During adulthood, nutrition focuses on maintaining health, supporting daily activities, and providing essential nutrients for the body's normal functions.",

    age_older_adults_title: "Older Adulthood",
    age_older_adults_desc:
      "As people age, nutritional priorities may change. Adequate protein, vitamins, minerals, fiber, and fluids can help support healthy aging.",

    age_why_label: "WHY IT MATTERS",
    age_why_title: "Why Nutrition Matters at Every Age",

    age_growth_title: "Growth & Development",
    age_growth_desc:
      "Nutrients provide the building blocks needed for growth and normal development, especially during childhood and adolescence.",

    age_energy_title: "Energy & Activity",
    age_energy_desc:
      "Food provides energy that the body uses for everyday activities, learning, movement, and other functions.",

    age_body_title: "Body Functions",
    age_body_desc:
      "Vitamins, minerals, protein, fats, carbohydrates, and water all contribute to normal body functions.",

    age_health_title: "Long-Term Health",
    age_health_desc:
      "Healthy eating habits developed throughout life can contribute to overall health and well-being.",

    age_takeaway_label: "KEY TAKEAWAYS",
    age_takeaway_title: "Nutrition Needs Change With Age",

    age_takeaway_desc:
      "There is no single approach to nutrition that works exactly the same way for everyone. Age, growth, development, activity, and lifestyle can all influence nutritional needs.",
  });

  /* ---------- VIETNAMESE ---------- */

  Object.assign(translations.vi, {
    age_development_label: "DINH DƯỠNG THEO ĐỘ TUỔI",
    age_development_title: "Độ tuổi & Phát triển",

    age_development_desc:
      "Nhu cầu dinh dưỡng thay đổi trong suốt cuộc đời. Hiểu được những thay đổi này giúp hỗ trợ sự tăng trưởng, phát triển, năng lượng và sức khỏe tổng thể ở từng giai đoạn.",

    age_intro_label: "HIỂU VỀ NHU CẦU DINH DƯỠNG",
    age_intro_title: "Nhu Cầu Dinh Dưỡng Thay Đổi Khi Chúng Ta Lớn Lên",

    age_intro_card_title: "Mỗi giai đoạn có những nhu cầu khác nhau",

    age_intro_desc_1:
      "Cơ thể trải qua nhiều thay đổi khi chúng ta lớn lên và già đi. Vì vậy, lượng và loại chất dinh dưỡng mà cơ thể cần cũng có thể thay đổi.",

    age_intro_desc_2:
      "Một chế độ ăn đa dạng và cân bằng có thể cung cấp các chất dinh dưỡng quan trọng, hỗ trợ tăng trưởng, duy trì hoạt động của cơ thể và thúc đẩy sự phát triển khỏe mạnh.",

    age_stages_label: "CÁC GIAI ĐOẠN CUỘC ĐỜI",

    age_stages_title: "Dinh Dưỡng Qua Các Giai Đoạn Khác Nhau Của Cuộc Sống",

    age_stages_desc:
      "Mỗi giai đoạn của cuộc đời có những ưu tiên dinh dưỡng khác nhau. Tìm hiểu những khác biệt này giúp chúng ta đưa ra lựa chọn thực phẩm phù hợp.",

    age_infant_title: "Trẻ sơ sinh",

    age_infant_desc:
      "Trẻ sơ sinh trải qua giai đoạn tăng trưởng và phát triển nhanh chóng. Dinh dưỡng đầy đủ hỗ trợ sự phát triển thể chất, não bộ và hệ miễn dịch khỏe mạnh.",

    age_children_title: "Trẻ em",

    age_children_desc:
      "Trẻ em cần nhiều loại chất dinh dưỡng để hỗ trợ sự tăng trưởng, xương chắc khỏe, khả năng học tập và các hoạt động thể chất hằng ngày.",

    age_teenagers_title: "Thanh thiếu niên",

    age_teenagers_desc:
      "Trong giai đoạn thanh thiếu niên, cơ thể có nhiều thay đổi đáng kể về tăng trưởng và phát triển. Các chất dinh dưỡng như protein, canxi, sắt và vitamin đặc biệt quan trọng.",

    age_adults_title: "Người trưởng thành",

    age_adults_desc:
      "Ở tuổi trưởng thành, dinh dưỡng tập trung vào việc duy trì sức khỏe, hỗ trợ các hoạt động hằng ngày và cung cấp các chất dinh dưỡng cần thiết cho những chức năng bình thường của cơ thể.",

    age_older_adults_title: "Người lớn tuổi",

    age_older_adults_desc:
      "Khi tuổi tác tăng lên, các ưu tiên về dinh dưỡng có thể thay đổi. Việc cung cấp đủ protein, vitamin, khoáng chất, chất xơ và nước có thể hỗ trợ quá trình lão hóa khỏe mạnh.",

    age_why_label: "TẠI SAO ĐIỀU NÀY QUAN TRỌNG",

    age_why_title: "Tại Sao Dinh Dưỡng Quan Trọng Ở Mọi Độ Tuổi",

    age_growth_title: "Tăng trưởng & Phát triển",

    age_growth_desc:
      "Các chất dinh dưỡng cung cấp những thành phần cần thiết cho sự tăng trưởng và phát triển bình thường, đặc biệt trong thời thơ ấu và thanh thiếu niên.",

    age_energy_title: "Năng lượng & Hoạt động",

    age_energy_desc:
      "Thực phẩm cung cấp năng lượng mà cơ thể sử dụng cho các hoạt động hằng ngày, học tập, vận động và nhiều chức năng khác.",

    age_body_title: "Chức năng cơ thể",

    age_body_desc:
      "Vitamin, khoáng chất, protein, chất béo, carbohydrate và nước đều đóng góp vào các chức năng bình thường của cơ thể.",

    age_health_title: "Sức khỏe lâu dài",

    age_health_desc:
      "Những thói quen ăn uống lành mạnh được hình thành trong suốt cuộc đời có thể góp phần vào sức khỏe và sự khỏe mạnh tổng thể.",

    age_takeaway_label: "ĐIỂM CẦN NHỚ",

    age_takeaway_title: "Nhu Cầu Dinh Dưỡng Thay Đổi Theo Độ Tuổi",

    age_takeaway_desc:
      "Không có một cách tiếp cận dinh dưỡng duy nhất phù hợp hoàn toàn với tất cả mọi người. Độ tuổi, sự tăng trưởng, phát triển, hoạt động thể chất và lối sống đều có thể ảnh hưởng đến nhu cầu dinh dưỡng.",
  });
}

// 1. Bộ từ điển ngôn ngữ
const translations = {
  vi: {
    hero_title: "Kiến Thức Dinh Dưỡng & Lối Sống Khoẻ Mạnh",
    hero_desc: "Khám phá nguồn dinh dưỡng thiết yếu và theo dõi chỉ số cơ thể chuẩn khoa học.",
    calc_title: "Công Cụ Tính Chỉ Số BMI",
    label_height: "Chiều cao (cm):",
    label_weight: "Cân nặng (kg):",
    btn_calc: "Tính BMI",
    res_score: "Chỉ số BMI của bạn:",
    res_status: "Tình trạng:",
    food_section_title: "Các Nhóm Dinh Dưỡng Thiết Yếu",
    cat_protein_title: "Đạm (Protein)",
    cat_protein_desc: "Thịt đỏ, thịt trắng, cá, trứng và các loại đậu giúp xây dựng và tái tạo cơ bắp.",
    cat_fat_title: "Chất béo tốt (Healthy Fats)",
    cat_fat_desc: "Bơ, dầu ô-liu, các loại hạt cung cấp năng lượng và hỗ trợ hấp thu vitamin.",
    cat_fiber_title: "Chất xơ & Vi chất",
    cat_fiber_desc: "Rau xanh và hoa quả tươi tăng cường hệ tiêu hóa và hệ miễn dịch.",
    
    // Đánh giá BMI (Chuẩn Châu Á - IDI & WPRO)
    bmi_underweight: "Gầy / Thiếu cân",
    bmi_normal: "Bình thường / Thể trạng chuẩn",
    bmi_overweight: "Thừa cân",
    bmi_obese: "Béo phì",
    advice_underweight: "Nên bổ sung thêm calo lành mạnh, tăng cường protein và carbohydrate phức tạp.",
    advice_normal: "Tuyệt vời! Hãy duy trì chế độ ăn cân bằng và rèn luyện thể lực đều đặn.",
    advice_overweight: "Nên giảm lượng đường/chất béo bão hòa và kết hợp tập cardio 30 phút/ngày.",
    advice_obese: "Nên lập kế hoạch thâm hụt calo an toàn và tham khảo thêm chuyên gia dinh dưỡng."
  },
  en: {
    hero_title: "Nutrition Basics & Healthy Living",
    hero_desc: "Explore essential daily nutrients and monitor your body parameters scientifically.",
    calc_title: "BMI Calculator",
    label_height: "Height (cm):",
    label_weight: "Weight (kg):",
    btn_calc: "Calculate BMI",
    res_score: "Your BMI:",
    res_status: "Status:",
    food_section_title: "Essential Food Groups",
    cat_protein_title: "Protein Sources",
    cat_protein_desc: "Red/white meat, fish, eggs, and legumes build and repair muscles.",
    cat_fat_title: "Healthy Fats",
    cat_fat_desc: "Avocados, olive oil, and nuts provide energy and support vitamin absorption.",
    cat_fiber_title: "Fiber & Micronutrients",
    cat_fiber_desc: "Green vegetables and fresh fruits boost your digestive and immune systems.",
    
    // BMI Evaluation
    bmi_underweight: "Underweight",
    bmi_normal: "Normal weight",
    bmi_overweight: "Overweight",
    bmi_obese: "Obesity",
    advice_underweight: "Increase calorie intake with healthy foods, rich in proteins and complex carbs.",
    advice_normal: "Great job! Maintain a balanced diet and regular physical workouts.",
    advice_overweight: "Reduce added sugars and saturated fats. Engage in 30 mins of daily cardio.",
    advice_obese: "Adopt a healthy calorie deficit and consult with a certified dietitian."
  }
};

let currentLang = 'vi';
let lastCalculatedBMI = null;

// 2. Hàm chuyển đổi ngôn ngữ
function setLanguage(lang) {
  currentLang = lang;
  
  // Cập nhật trạng thái nút
  document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  
  // Quét toàn bộ phần tử có data-i18n và gán văn bản tương ứng
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Cập nhật lại kết quả BMI nếu đã tính trước đó
  if (lastCalculatedBMI !== null) {
    updateBMIResultUI(lastCalculatedBMI);
  }
}

// 3. Logic tính toán BMI
function calculateBMI() {
  const hCm = parseFloat(document.getElementById('height').value);
  const wKg = parseFloat(document.getElementById('weight').value);

  if (!hCm || !wKg || hCm <= 0 || wKg <= 0) {
    alert(currentLang === 'vi' ? 'Vui lòng nhập chiều cao và cân nặng hợp lệ!' : 'Please enter valid height and weight!');
    return;
  }

  const hM = hCm / 100;
  const bmi = wKg / (hM * hM);
  lastCalculatedBMI = parseFloat(bmi.toFixed(1));

  updateBMIResultUI(lastCalculatedBMI);
}

function updateBMIResultUI(bmi) {
  const resultBox = document.getElementById('result');
  const bmiValEl = document.getElementById('bmi-val');
  const statusEl = document.getElementById('bmi-status');
  const adviceEl = document.getElementById('bmi-advice');

  resultBox.classList.remove('hidden');
  bmiValEl.textContent = bmi;

  let statusKey = '';
  let adviceKey = '';

  // Thang đo BMI Châu Á (WHO Asia-Pacific standard)
  if (bmi < 18.5) {
    statusKey = 'bmi_underweight';
    adviceKey = 'advice_underweight';
    statusEl.style.color = '#eab308';
  } else if (bmi < 23) {
    statusKey = 'bmi_normal';
    adviceKey = 'advice_normal';
    statusEl.style.color = '#10b981';
  } else if (bmi < 25) {
    statusKey = 'bmi_overweight';
    adviceKey = 'advice_overweight';
    statusEl.style.color = '#f97316';
  } else {
    statusKey = 'bmi_obese';
    adviceKey = 'advice_obese';
    statusEl.style.color = '#ef4444';
  }

  statusEl.textContent = translations[currentLang][statusKey];
  adviceEl.textContent = translations[currentLang][adviceKey];
}
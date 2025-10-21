document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resultForm");
  const homeTeamSelect = document.getElementById("homeTeam");
  const awayTeamSelect = document.getElementById("awayTeam");
  const homeScoreInput = document.getElementById("homeScore");
  const awayScoreInput = document.getElementById("awayScore");
  const resetBtn = document.getElementById("resetDataBtn");

  // Dữ liệu mặc định (cần ở cả 2 file để phòng trường hợp localStorage rỗng)
  const defaultRanking = [
    { team: "Thép Xanh Nam Định", played: 10, win: 7, draw: 2, lose: 1, points: 23 },
    { team: "Hà Nội FC", played: 10, win: 6, draw: 3, lose: 1, points: 21 },
    { team: "Viettel FC", played: 10, win: 6, draw: 2, lose: 2, points: 20 },
    // ... (sao chép đầy đủ mảng defaultRanking từ file script.js cũ) ...
    { team: "Công an Hà Nội", played: 10, win: 1, draw: 1, lose: 8, points: 4 },
    { team: "CLB TP Hồ Chí Minh", played: 10, win: 1, draw: 0, lose: 7, points: 3 },
  ];

  let currentRanking = [];

  // HÀM: Tải dữ liệu
  function loadRanking() {
    const savedRanking = localStorage.getItem("vleagueRanking");
    if (savedRanking) {
      currentRanking = JSON.parse(savedRanking);
    } else {
      currentRanking = defaultRanking;
      saveRanking();
    }
    sortRanking();
  }

  // HÀM: Lưu dữ liệu
  function saveRanking() {
    localStorage.setItem("vleagueRanking", JSON.stringify(currentRanking));
  }
  
  // HÀM: Sắp xếp
  function sortRanking() {
    currentRanking.sort((a, b) => b.points - a.points);
  }
  
  // HÀM: Điền tên đội vào form
  function populateSelectOptions() {
    if (!homeTeamSelect || !awayTeamSelect) return;
    
    homeTeamSelect.innerHTML = '<option value="">-- Chọn đội nhà --</option>';
    awayTeamSelect.innerHTML = '<option value="">-- Chọn đội khách --</option>';
    
    // Sắp xếp theo tên để dễ tìm
    const sortedByName = [...currentRanking].sort((a, b) => a.team.localeCompare(b.team));
    
    sortedByName.forEach(team => {
      const option1 = document.createElement("option");
      option1.value = team.team;
      option1.textContent = team.team;
      homeTeamSelect.appendChild(option1);
      
      const option2 = document.createElement("option");
      option2.value = team.team;
      option2.textContent = team.team;
      awayTeamSelect.appendChild(option2);
    });
  }

  // HÀM: Xử lý khi nộp form
  function handleResultSubmit(event) {
    event.preventDefault(); 

    const homeTeamName = homeTeamSelect.value;
    const awayTeamName = awayTeamSelect.value;
    const homeScore = parseInt(homeScoreInput.value);
    const awayScore = parseInt(awayScoreInput.value);

    if (homeTeamName === awayTeamName) {
      alert("Đội nhà và đội khách không được trùng nhau!");
      return;
    }

    const homeTeam = currentRanking.find(t => t.team === homeTeamName);
    const awayTeam = currentRanking.find(t => t.team === awayTeamName);

    if (!homeTeam || !awayTeam) {
      alert("Lỗi: Không tìm thấy đội!");
      return;
    }

    homeTeam.played++;
    awayTeam.played++;

    if (homeScore > awayScore) {
      homeTeam.win++;
      homeTeam.points += 3;
      awayTeam.lose++;
    } else if (homeScore < awayScore) {
      awayTeam.win++;
      awayTeam.points += 3;
      homeTeam.lose++;
    } else { 
      homeTeam.draw++;
      homeTeam.points += 1;
      awayTeam.draw++;
      awayTeam.points += 1;
    }
    
    sortRanking();
    saveRanking();
    
    form.reset();
    alert("Đã cập nhật bảng xếp hạng! Quay lại trang chủ để xem thay đổi.");
  
    // Cập nhật lại danh sách <select> phòng trường hợp tên đội thay đổi (dù hiện tại không)
    loadRanking();
    populateSelectOptions();
  }
  
  // HÀM: Reset dữ liệu
  function resetData() {
    if (confirm("Bạn có chắc muốn xóa mọi thay đổi và quay về dữ liệu gốc?")) {
      localStorage.removeItem("vleagueRanking");
      loadRanking();
      populateSelectOptions();
      alert("Đã reset dữ liệu!");
    }
  }
  
  // === KHỞI CHẠY TRANG ADMIN ===
  loadRanking();
  populateSelectOptions();
  
  if (form) {
    form.addEventListener("submit", handleResultSubmit);
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", resetData);
  }
});
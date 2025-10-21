document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#rankingTable tbody");
  const fixturesContainer = document.getElementById("fixturesList");

  const ranking = [
    { team: "Thép Xanh Nam Định", played: 10, win: 7, draw: 2, lose: 1, points: 23 },
    { team: "Hà Nội FC", played: 10, win: 6, draw: 3, lose: 1, points: 21 },
    { team: "Viettel FC", played: 10, win: 6, draw: 2, lose: 2, points: 20 },
    { team: "Hoàng Anh Gia Lai", played: 10, win: 5, draw: 2, lose: 3, points: 17 },
    { team: "Thanh Hóa FC", played: 10, win: 4, draw: 3, lose: 3, points: 15 },
    { team: "Hải Phòng FC", played: 10, win: 4, draw: 2, lose: 4, points: 14 },
    { team: "Hồng Lĩnh Hà Tĩnh", played: 10, win: 3, draw: 3, lose: 4, points: 12 },
    { team: "SHB Đà Nẵng", played: 10, win: 3, draw: 2, lose: 5, points: 11 },
    { team: "Sông Lam Nghệ An", played: 10, win: 2, draw: 3, lose: 5, points: 9 },
    { team: "Ninh Bình FC", played: 10, win: 1, draw: 2, lose: 7, points: 5 },
    { team: "CLB Bóng đá PVF", played: 10, win: 1, draw: 2, lose: 7, points: 5 },
    { team: "Becamex TP Hồ Chí Minh", played: 10, win: 1, draw: 1, lose: 8, points: 4 },
    { team: "Công an Hà Nội", played: 10, win: 1, draw: 1, lose: 8, points: 4 },
    { team: "CLB TP Hồ Chí Minh", played: 10, win: 1, draw: 0, lose: 7, points: 3 },
  ];

  if (tableBody) {
    ranking.forEach((team, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${i + 1}</td>
        <td>${team.team}</td>
        <td>${team.played}</td>
        <td>${team.win}</td>
        <td>${team.draw}</td>
        <td>${team.lose}</td>
        <td><b>${team.points}</b></td>
      `;
      tableBody.appendChild(row);
    });
  }

  const fixtures = [
    { home: "Hà Nội FC", homeLogo: "assets/images/hnfc.jpg", away: "Hoàng Anh Gia Lai", awayLogo: "assets/images/thanhhoa.jpg", date: "28/10/2025", stadium: "Sân Hàng Đẫy" },
    { home: "Viettel FC", homeLogo: "assets/images/vt.jpg", away: "Thép Xanh Nam Định", awayLogo: "assets/images/nd.jpg", date: "29/10/2025", stadium: "Sân Hòa Xuân" },
    { home: "Hải Phòng FC", homeLogo: "assets/images/hp.jpg", away: "Hồng Lĩnh Hà Tĩnh", awayLogo: "assets/images/ht.jpg", date: "30/10/2025", stadium: "Sân Lạch Tray" },
    { home: "SHB Đà Nẵng", homeLogo: "assets/images/shb-da-nang-2021.png", away: "Thanh Hóa FC", awayLogo: "assets/images/thanhhoa.jpg", date: "31/10/2025", stadium: "Sân Hòa Xuân" },
    { home: "Sông Lam Nghệ An", homeLogo: "assets/images/slna.jpg", away: "Ninh Bình FC", awayLogo: "assets/images/ninhbinh.jpg", date: "01/11/2025", stadium: "Sân Vinh" },
    { home: "Công an Hà Nội", homeLogo: "assets/images/CAHN.jpg", away: "Becamex TP Hồ Chí Minh", awayLogo: "assets/images/becamex-binh-duong-fc3215.jpg", date: "02/11/2025", stadium: "Sân Bình Dương" },
    { home: "CLB TP Hồ Chí Minh", homeLogo: "assets/images/HCM.jpg", away: "CLB Bóng đá PVF", awayLogo: "assets/images/pvfcahn.jpg", date: "02/11/2025", stadium: "Sân Thống Nhất" }
  ];

  if (fixturesContainer) {
    fixtures.forEach(match => {
      const card = document.createElement("div");
      card.classList.add("match-card");
      card.innerHTML = `
        <div class="team">
          <img src="${match.homeLogo}" alt="${match.home}" class="team-logo">
          <span class="team-name">${match.home}</span>
        </div>
        <div class="match-info">
          <div class="match-date">${match.date}</div>
          <div class="match-stadium">${match.stadium}</div>
          <div class="vs-text">VS</div>
        </div>
        <div class="team">
          <img src="${match.awayLogo}" alt="${match.away}" class="team-logo">
          <span class="team-name">${match.away}</span>
        </div>
      `;
      fixturesContainer.appendChild(card);
    });
  }
});


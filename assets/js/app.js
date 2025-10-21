/**
 * Hàm hiển thị chi tiết cầu thủ của đội được chọn.
 * @param {string} teamName - Tên đội bóng được chọn.
 */
function showTeamDetails(teamName) {
    const teamsView = document.getElementById('teams-main-view');
    const playerDetailsView = document.getElementById('player-details-view');
    const playerListTitle = document.getElementById('player-list-title');
    const playerListContainer = document.getElementById('player-list-container');
    const messageBox = document.getElementById('team-message');

    // 1. Ẩn lưới đội bóng chính và hiển thị màn hình chi tiết
    teamsView.classList.add('hidden');
    playerDetailsView.classList.remove('hidden');
    messageBox.classList.add('hidden'); // Ẩn thông báo chung

    // 2. Cập nhật tiêu đề
    playerListTitle.textContent = "Danh Sách Cầu Thủ " + teamName;

    // 3. Xóa nội dung cũ
    playerListContainer.innerHTML = '';

    // 4. Lấy dữ liệu và render (từ file data.js)
    const players = teamPlayers[teamName];

    if (players && players.length > 0) {
        players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'bg-gray-800 rounded-xl p-4 flex items-center space-x-4 shadow-lg border-l-4 border-yellow-500 transition transform hover:bg-gray-700';
            
            playerCard.innerHTML = `
                <div class="flex-shrink-0">
                    <img src="${player.image || 'https://placehold.co/80x80/374151/ffffff?text=' + player.number}" 
                         alt="${player.name}" 
                         class="w-16 h-16 rounded-full object-cover border-2 border-gray-600">
                </div>
                <div class="flex-grow">
                    <p class="text-xl font-bold text-emerald-400">${player.name}</p>
                    <p class="text-sm text-gray-400">${player.position}</p>
                </div>
                <div class="text-3xl font-extrabold text-right text-yellow-500">
                    #${player.number}
                </div>
            `;
            playerListContainer.appendChild(playerCard);
        });
    } else {
        // Hiển thị thông báo nếu không có dữ liệu
        playerListContainer.innerHTML = `
            <div class="col-span-full bg-red-800/50 p-6 rounded-lg text-center border-l-4 border-red-500">
                <p class="text-xl font-semibold">Dữ liệu cầu thủ cho đội ${teamName} đang được cập nhật.</p>
                <p class="text-gray-300 mt-2">Vui lòng quay lại sau để xem danh sách đầy đủ.</p>
            </div>
        `;
    }
    
    // Cuộn lên đầu
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Hàm quay lại màn hình danh sách đội bóng chính.
 */
function hideTeamDetails() {
    const teamsView = document.getElementById('teams-main-view');
    const playerDetailsView = document.getElementById('player-details-view');
    
    playerDetailsView.classList.add('hidden');
    teamsView.classList.remove('hidden');

    // Cuộn lên đầu
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Hàm xử lý khi nhấn nút Trang Chủ (Z TV).
 * Hiện tại chỉ hiển thị thông báo và cuộn lên đầu.
 */
/**
 * Hàm xử lý khi nhấn nút Trang Chủ.
 * Hiển thị thông báo, sau đó chuyển về trangchu.html
 */
function goToHomePage() {
    hideTeamDetails(); // Quay về màn hình danh sách đội
    showMessage("Đang chuyển về Trang Chủ...", 'emerald'); // Hiển thị thông báo

    // Chuyển hướng về trangchu.html sau 1 giây (để kịp đọc thông báo)
    setTimeout(() => {
        window.location.href = 'trangchu.html';
    }, 1000); 
}

// Hàm hiển thị thông báo chung
function showMessage(content, type = 'blue') {
    const messageBox = document.getElementById('team-message');
    const messageContent = document.getElementById('message-content');
    
    // Xóa các class màu cũ
    messageBox.classList.remove('bg-blue-800', 'bg-emerald-800', 'bg-red-800');

    // Thêm class màu mới
    messageBox.classList.add(`bg-${type}-800`);
    
    messageContent.textContent = content;
    messageBox.classList.remove('hidden');

    setTimeout(() => {
        messageBox.classList.add('hidden');
    }, 5000);
}
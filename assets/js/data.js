// Dữ liệu giả lập về cầu thủ
const teamPlayers = {
    "Thép Xanh Nam Định": [
        { name: "Nguyễn Văn Toàn", position: "Tiền Đạo", number: 9, image: "https://placehold.co/80x80/003366/ffffff?text=VT" },
        { name: "Trần Nguyên Mạnh", position: "Thủ Môn", number: 26, image: "https://placehold.co/80x80/003366/ffffff?text=NM" },
        { name: "Rafaelson", position: "Tiền Đạo (Ngoại binh)", number: 14, image: "https://placehold.co/80x80/003366/ffffff?text=RS" },
        { name: "Lý Công Hoàng Anh", position: "Tiền Vệ", number: 7, image: "https://placehold.co/80x80/003366/ffffff?text=HA" },
        { name: "Hoàng Minh Tuấn", position: "Hậu Vệ", number: 2, image: "https://placehold.co/80x80/003366/ffffff?text=MT" },
        { name: "Nguyễn Văn Vĩ", position: "Hậu Vệ", number: 17, image: "https://placehold.co/80x80/003366/ffffff?text=VV" },
        { name: "Ngô Đức Huy", position: "Hậu Vệ", number: 32, image: "https://placehold.co/80x80/003366/ffffff?text=ĐH" },
        { name: "Trần Văn Kiên", position: "Hậu Vệ", number: 13, image: "https://placehold.co/80x80/003366/ffffff?text=VK" },
        { name: "Tô Văn Vũ", position: "Tiền Vệ", number: 28, image: "https://placehold.co/80x80/003366/ffffff?text=VV" },
        { name: "Lâm Ti Phông", position: "Tiền Vệ", number: 2, image: "https://placehold.co/80x80/003366/ffffff?text=TP" },
        { name: "Trần Ngọc Sơn", position: "Tiền Đạo", number: 2, image: "https://placehold.co/80x80/003366/ffffff?text=NS" }
        
    ],
    "Hà Nội FC": [
        { name: "Nguyễn Văn Quyết", position: "Tiền Đạo", number: 10, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VQ" },
        { name: "Đoàn Văn Hậu", position: "Hậu Vệ", number: 5, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VH" },
        { name: "Phạm Xuân Mạnh", position: "Hậu Vệ", number: 7, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Nguyễn Xuân Kiên", position: "Hậu Vệ", number: 36, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Lê Văn Xuân", position: "Hậu Vệ", number: 45, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Đậu Văn Toàn", position: "Tiền Vệ", number: 8, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Đỗ Hoàng Hên", position: "Tiền Vệ", number: 11, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Nguyễn Hai Long", position: "Tiền Vệ", number: 18, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Phạm Tuấn Hải", position: "Tiền Đạo", number: 9, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Nguyễn Văn Tùng", position: "Tiền Đạo", number: 99, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" },
        { name: "Quan Văn Chuẩn", position: "Thủ Môn", number: 23, image: "https://placehold.co/80x80/7c3aed/ffffff?text=VV" }
        
    ],
    "CA TPHCM": [
        { name: "Patrik Le Giang", position: "Thủ Môn", number: 89, image: "https://placehold.co/80x80/8a2be2/ffffff?text=HD" },
        { name: "Phạm Văn Luân", position: "Hậu Vệ", number: 12, image: "https://placehold.co/80x80/8a2be2/ffffff?text=BTD" },
        { name: "Nguyễn Thanh Thảo", position: "Hậu Vệ", number: 3, image: "https://placehold.co/80x80/8a2be2/ffffff?text=HD" },
        { name: "Joao Pedro", position: "Tiền Đạo", number: 50, image: "https://placehold.co/80x80/8a2be2/ffffff?text=BTD" },
        { name: "Nguyễn Tiến Linh", position: "Tiền Đạo", number: 22, image: "https://placehold.co/80x80/8a2be2/ffffff?text=HD" },
        { name: "Đào Quốc Gia", position: "Tiền Vệ", number: 21, image: "https://placehold.co/80x80/8a2be2/ffffff?text=BTD" },
        { name: "Jhon Cley", position: "Tiền Đạo (Ngoại binh)", number: 99, image: "https://placehold.co/80x80/8a2be2/ffffff?text=JC" }
    ],
    "Sông Lam Nghệ An": [
        { name: "Văn Bình Cao", position: "Thủ Môn", number: 22, image: "https://placehold.co/80x80/f97316/ffffff?text=XM" },
        { name: "Phan Bá Quyền", position: "Hậu Vệ", number: 19, image: "https://placehold.co/80x80/f97316/ffffff?text=XM" },
        { name: "Carlos Enrique Renteria Olaya", position: "Tiền Vệ", number: 77, image: "https://placehold.co/80x80/f97316/ffffff?text=XM" },
        { name: "Hồ Khắc Ngọc", position: "Tiền Vệ", number: 32, image: "https://placehold.co/80x80/f97316/ffffff?text=XM" },
        { name: "Reon Moore", position: "Tiền Đạo", number: 36, image: "https://placehold.co/80x80/f97316/ffffff?text=XM" },
        { name: "Olaha Michael Onyedikachi", position: "Tiền Đạo", number: 7, image: "https://placehold.co/80x80/f97316/ffffff?text=XM" },
        { name: "Lê Nguyên Hoàng", position: "Hậu Vệ", number: 3, image: "https://placehold.co/80x80/f97316/ffffff?text=PT" }
    ],
    "Hoàng Anh Gia Lai": [
        { name: "Nguyễn Tuấn Anh", position: "Tiền Vệ", number: 11, image: "https://placehold.co/80x80/84cc16/ffffff?text=TA" },
        { name: "Nguyễn Vũ Khang", position: "Thủ Môn", number: 1, image: "https://placehold.co/80x80/84cc16/ffffff?text=TA" },
        { name: "Huỳnh Tuấn Vũ", position: "Hậu vệ", number: 4, image: "https://placehold.co/80x80/84cc16/ffffff?text=TA" },
        { name: "Jairo Rodrigeus Peixoto Filho", position: "Tiền Vệ", number: 21, image: "https://placehold.co/80x80/84cc16/ffffff?text=TA" },
        { name: "Nguyễn Duy Tâm", position: "Tiền Vệ", number: 36, image: "https://placehold.co/80x80/84cc16/ffffff?text=TA" },
        { name: "Ryan Ha", position: "Tiền Đạo", number: 5, image: "https://placehold.co/80x80/84cc16/ffffff?text=TA" },
        { name: "Trần Minh Vương", position: "Tiền Vệ", number: 8, image: "https://placehold.co/80x80/84cc16/ffffff?text=MV" }
    ],
    "Becamex TPHCM": [
        { name: "Nguyễn Tiến Linh", position: "Tiền Đạo", number: 22, image: "https://placehold.co/80x80/ff6600/ffffff?text=TL" },
        { name: "Tung Quoc Ngo", position: "Tiền Vệ", number: 20, image: "https://placehold.co/80x80/ff6600/ffffff?text=TL" },
        { name: "Nguyễn Văn Công", position: "Thủ Môn", number: 1, image: "https://placehold.co/80x80/ff6600/ffffff?text=TL" },
        { name: "Adriano Schmidt", position: "Hậu Vệ", number: 8, image: "https://placehold.co/80x80/ff6600/ffffff?text=TL" },
        { name: "Đoàn Tuấn Cảnh", position: "Tiền vệ", number: 5, image: "https://placehold.co/80x80/ff6600/ffffff?text=TL" },
        { name: "Bùi Vĩ Hào", position: "Tiền Đạo", number: 34, image: "https://placehold.co/80x80/ff6600/ffffff?text=TL" },
        { name: "Võ Hoàng Quý", position: "Thủ Môn", number: 1, image: "https://placehold.co/80x80/ff6600/ffffff?text=HQ" }
    ],
    "Hải Phòng": [
        { name: "Triệu Việt Hưng", position: "Tiền Vệ", number: 99, image: "https://placehold.co/80x80/b91c1c/ffffff?text=VH" },
        { name: "Nguyễn Đình Triệu", position: "Thủ Môn", number: 1, image: "https://placehold.co/80x80/b91c1c/ffffff?text=VH" },
        { name: "Bùi Tiến Dụng", position: "Hậu vệ", number: 4, image: "https://placehold.co/80x80/b91c1c/ffffff?text=VH" },
        { name: "Nguyễn Thái Học", position: "Tiền Vệ", number: 36, image: "https://placehold.co/80x80/b91c1c/ffffff?text=VH" },
        { name: "Fred Friday", position: "Tiền Đạo", number: 33, image: "https://placehold.co/80x80/b91c1c/ffffff?text=VH" },
        { name: "Lucao", position: "Tiền Đạo (Ngoại binh)", number: 70, image: "https://placehold.co/80x80/b91c1c/ffffff?text=LC" }
    ],
    "Công An Hà Nội": [
        { name: "Filip Nguyễn", position: "Thủ Môn", number: 1, image: "https://placehold.co/80x80/1d4ed8/ffffff?text=FN" },
        { name: "Đoàn Văn Hậu", position: "Hậu Vệ", number: 4, image: "https://placehold.co/80x80/1d4ed8/ffffff?text=FN" },
        { name: "Trần Đình Trọng", position: "Hậu Vệ", number: 10, image: "https://placehold.co/80x80/1d4ed8/ffffff?text=FN" },
        { name: "Phan Văn Đức", position: "Tiền Vệ", number: 36, image: "https://placehold.co/80x80/1d4ed8/ffffff?text=FN" },
        { name: "Lê Văn Đô", position: "Tiền vệ", number: 39, image: "https://placehold.co/80x80/1d4ed8/ffffff?text=FN" },
        { name: "Quang Hải", position: "Tiền Đạo", number: 19, image: "https://placehold.co/80x80/1d4ed8/ffffff?text=QH" }
    ]
    // Các đội khác sẽ hiển thị thông báo "Đang cập nhật"
};
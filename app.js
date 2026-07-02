// ==========================================================================
// MOCK DATA FOR GOLF & AIRPORT LOUNGE PRIVILEGES (Card Privilege Quota Tracking)
// ==========================================================================

// let golfRequests = [
//   {
//     id: "32151463",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 5,
//     newCardNumber: "4129 76** **** 9999",
//     replacementDate: "2026-08-01",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-08-08",
//   },
//   {
//     id: "32151464",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 6,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-08-08",
//   },
//   {
//     id: "32151465",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 3,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-07-12",
//   },
//   {
//     id: "32151466",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 4,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-07-12",
//   },
//   {
//     id: "32151467",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 4,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-07-12",
//   },
//   {
//     id: "32151468",
//     contractNo: "HD2026-003",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "002",
//     cardNumber: "4129 76** **** 1111",
//     accountNumber: "1023456789",
//     quotaQuarter: 3,
//     quotaYear: 12,
//     usedQuota: 2,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-06-12",
//   },
//   {
//     id: "32151469",
//     contractNo: "HD2026-004",
//     cif: "200888",
//     identity: "079096003333",
//     fullName: "Nguyễn Văn B",
//     cardType: "003",
//     cardNumber: "5123 45** **** 8888",
//     accountNumber: "2008889999",
//     quotaQuarter: 6,
//     quotaYear: 24,
//     usedQuota: 8,
//     newCardNumber: "5123 45** **** 0000",
//     replacementDate: "2026-07-10",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-07-15",
//   },
//   {
//     id: "32151470",
//     contractNo: "HD2026-005",
//     cif: "300999",
//     identity: "079096004444",
//     fullName: "Phạm Văn C",
//     cardType: "001",
//     cardNumber: "4129 76** **** 9999",
//     accountNumber: "3009991111",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 10,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-09-20",
//   },
//   {
//     id: "32151471",
//     contractNo: "HD2026-006",
//     cif: "400111",
//     identity: "079096005555",
//     fullName: "Lê Thị D",
//     cardType: "002",
//     cardNumber: "4129 76** **** 4444",
//     accountNumber: "4001112222",
//     quotaQuarter: 3,
//     quotaYear: 12,
//     usedQuota: 12,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-04-18",
//   },
//   {
//     id: "32151472",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 2,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-07-02",
//   },
//   {
//     id: "32151473",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 16,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-03-10",
//   },
//   {
//     id: "32151474",
//     contractNo: "HD2026-007",
//     cif: "500222",
//     identity: "079096006666",
//     fullName: "Đỗ Hoàng E",
//     cardType: "001",
//     cardNumber: "4129 76** **** 2222",
//     accountNumber: "5002223333",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 0,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-07-10",
//   },
//   {
//     id: "32151475",
//     contractNo: "HD2026-008",
//     cif: "600333",
//     identity: "079096007777",
//     fullName: "Lâm Văn F",
//     cardType: "003",
//     cardNumber: "5123 45** **** 3333",
//     accountNumber: "6003334444",
//     quotaQuarter: 6,
//     quotaYear: 24,
//     usedQuota: 1,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-07-15",
//   },
// ];

// let loungeRequests = [
//   {
//     id: "42151501",
//     contractNo: "HD2026-009",
//     cif: "700111",
//     identity: "079096008888",
//     fullName: "Lê Văn C",
//     cardType: "001",
//     cardNumber: "4129 76** **** 8888",
//     accountNumber: "7001118888",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 6,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-07-12",
//   },
//   {
//     id: "42151502",
//     contractNo: "HD2026-010",
//     cif: "800222",
//     identity: "079096009999",
//     fullName: "Phạm Văn D",
//     cardType: "002",
//     cardNumber: "4129 76** **** 9999",
//     accountNumber: "8002229999",
//     quotaMonth: 1,
//     quotaYear: 12,
//     usedQuota: 2,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-08-15",
//   },
//   {
//     id: "42151503",
//     contractNo: "HD2026-011",
//     cif: "900333",
//     identity: "079096001010",
//     fullName: "Hoàng Thị E",
//     cardType: "003",
//     cardNumber: "5123 45** **** 1010",
//     accountNumber: "9003331010",
//     quotaMonth: 4,
//     quotaYear: 48,
//     usedQuota: 15,
//     newCardNumber: "5123 45** **** 5555",
//     replacementDate: "2026-05-18",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-05-20",
//   },
//   {
//     id: "42151504",
//     contractNo: "HD2026-009",
//     cif: "700111",
//     identity: "079096008888",
//     fullName: "Lê Văn C",
//     cardType: "001",
//     cardNumber: "4129 76** **** 8888",
//     accountNumber: "7001118888",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 10,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-09-25",
//   },
//   {
//     id: "42151505",
//     contractNo: "HD2026-012",
//     cif: "100999",
//     identity: "079096002020",
//     fullName: "Nguyễn Văn B",
//     cardType: "001",
//     cardNumber: "4129 76** **** 2020",
//     accountNumber: "1009992020",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 24,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-04-10",
//   },
//   {
//     id: "42151506",
//     contractNo: "HD2026-013",
//     cif: "200111",
//     identity: "079096003030",
//     fullName: "Trần Văn G",
//     cardType: "002",
//     cardNumber: "4129 76** **** 3030",
//     accountNumber: "2001113030",
//     quotaMonth: 1,
//     quotaYear: 12,
//     usedQuota: 0,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-07-28",
//   },
//   {
//     id: "42151507",
//     contractNo: "HD2026-014",
//     cif: "300222",
//     identity: "079096004040",
//     fullName: "Nguyễn Thị H",
//     cardType: "003",
//     cardNumber: "5123 45** **** 4040",
//     accountNumber: "3002224040",
//     quotaMonth: 4,
//     quotaYear: 48,
//     usedQuota: 1,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-07-05",
//   },
//   {
//     id: "42151508",
//     contractNo: "HD2026-015",
//     cif: "400333",
//     identity: "079096005050",
//     fullName: "Phan Văn I",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5050",
//     accountNumber: "4003335050",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 3,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Còn hạn",
//     date: "2026-08-08",
//   },
//   {
//     id: "42151509",
//     contractNo: "HD2026-009",
//     cif: "700111",
//     identity: "079096008888",
//     fullName: "Lê Văn C",
//     cardType: "001",
//     cardNumber: "4129 76** **** 8888",
//     accountNumber: "7001118888",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 24,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2026-12-31",
//     status: "Hết hạn",
//     date: "2026-03-05",
//   },
// ];

// const golfHistory = [
//   {
//     stt: 1,
//     fullName: "Trần Văn A",
//     usedQuota: 2,
//     duration: "2 giờ",
//     location: "Sân Golf Tân Sơn Nhất",
//     updatedAt: "10/01/2022 08:00",
//   },
//   {
//     stt: 2,
//     fullName: "Nguyễn Văn A",
//     usedQuota: 1,
//     duration: "3 giờ",
//     location: "Sân Golf Long Thành",
//     updatedAt: "10/01/2022 09:30",
//   },
//   {
//     stt: 3,
//     fullName: "Lê Thị D",
//     usedQuota: 4,
//     duration: "1.5 giờ",
//     location: "Sân Golf Thủ Đức",
//     updatedAt: "10/03/2022 08:00",
//   },
// ];

// const loungeHistory = [
//   {
//     stt: 1,
//     fullName: "Lê Văn C",
//     usedQuota: 1,
//     duration: "1.5 giờ",
//     location: "Phòng chờ Lotus - SGN",
//     updatedAt: "10/11/2022 09:00",
//   },
//   {
//     stt: 2,
//     fullName: "Phạm Văn D",
//     usedQuota: 2,
//     duration: "2 giờ",
//     location: "Phòng chờ SASCO - HAN",
//     updatedAt: "15/11/2022 14:00",
//   },
//   {
//     stt: 3,
//     fullName: "Hoàng Thị E",
//     usedQuota: 1,
//     duration: "1 giờ",
//     location: "Phòng chờ CIP - DAD",
//     updatedAt: "01/12/2022 16:00",
//   },
// ];
// let golfRequests = [
//   // --- NĂM 2026 (Còn hạn) ---
//   {
//     id: "32151463",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 5,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2026-08-15", // Q3/2026
//   },
//   {
//     id: "32151464",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 2,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2026-05-20", // Q2/2026
//   },
//   {
//     id: "32151465",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 1,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2026-02-10", // Q1/2026
//   },
//   // --- NĂM 2025 (Q4 Còn hạn, Q3 trở về trước Hết hạn) ---
//   {
//     id: "32151466",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 4,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2025-11-05", // Q4/2025
//   },
//   {
//     id: "32151467",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 6,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2025-08-12", // Q3/2025
//   },
//   {
//     id: "32151468",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 3,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2025-04-18", // Q2/2025
//   },
//   // --- NĂM 2024 (Hết hạn) ---
//   {
//     id: "32151469",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 4,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2024-10-22", // Q4/2024
//   },
//   {
//     id: "32151470",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 2,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2024-05-15", // Q2/2024
//   },
//   // --- NĂM 2023 (Hết hạn) ---
//   {
//     id: "32151471",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 5,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2023-11-10", // Q4/2023
//   },
//   {
//     id: "32151472",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaQuarter: 4,
//     quotaYear: 16,
//     usedQuota: 6,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2023-08-25", // Q3/2023
//   },
// ];

// let loungeRequests = [
//   // --- NĂM 2026 (Còn hạn) ---
//   {
//     id: "42151501",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 6,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2026-09-10",
//   },
//   {
//     id: "42151502",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 4,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2026-05-15",
//   },
//   {
//     id: "42151503",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 2,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2026-01-20",
//   },
//   // --- NĂM 2025 (Từ tháng 9 trở về sau Còn hạn, tháng 8 trở về trước Hết hạn) ---
//   {
//     id: "42151504",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 8,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2025-10-05",
//   },
//   {
//     id: "42151505",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 12,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Còn hạn",
//     date: "2025-09-15",
//   },
//   {
//     id: "42151506",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 5,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2025-08-20",
//   },
//   {
//     id: "42151507",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 10,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2025-03-12",
//   },
//   // --- NĂM 2024 (Hết hạn) ---
//   {
//     id: "42151508",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 15,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2024-06-15",
//   },
//   {
//     id: "42151509",
//     contractNo: "HD2026-001",
//     cif: "100234",
//     identity: "079096001111",
//     fullName: "Trần Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 1234",
//     accountNumber: "1023456789",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 4,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2024-02-28",
//   },
//   // --- NĂM 2023 (Hết hạn) ---
//   {
//     id: "42151510",
//     contractNo: "HD2026-002",
//     cif: "100567",
//     identity: "079096002222",
//     fullName: "Nguyễn Văn A",
//     cardType: "001",
//     cardNumber: "4129 76** **** 5678",
//     accountNumber: "1056789012",
//     quotaMonth: 2,
//     quotaYear: 24,
//     usedQuota: 7,
//     newCardNumber: "",
//     replacementDate: "",
//     expiryDate: "2028-12-31",
//     status: "Hết hạn",
//     date: "2023-09-05",
//   },
// ];

// const golfHistory = [
//   {
//     stt: 1,
//     fullName: "Trần Văn A",
//     usedQuota: 2,
//     duration: "2 giờ",
//     location: "Sân Golf Tân Sơn Nhất",
//     updatedAt: "15/08/2026 08:00",
//   },
//   {
//     stt: 2,
//     fullName: "Nguyễn Văn A",
//     usedQuota: 1,
//     duration: "3 giờ",
//     location: "Sân Golf Long Thành",
//     updatedAt: "20/05/2026 09:30",
//   },
//   {
//     stt: 3,
//     fullName: "Trần Văn A",
//     usedQuota: 4,
//     duration: "1.5 giờ",
//     location: "Sân Golf Thủ Đức",
//     updatedAt: "12/08/2025 08:00",
//   },
//   {
//     stt: 4,
//     fullName: "Nguyễn Văn A",
//     usedQuota: 2,
//     duration: "4 giờ",
//     location: "Sân Golf Vân Trì",
//     updatedAt: "18/04/2025 14:00",
//   },
//   {
//     stt: 5,
//     fullName: "Trần Văn A",
//     usedQuota: 1,
//     duration: "2.5 giờ",
//     location: "Sân Golf Tân Sơn Nhất",
//     updatedAt: "25/08/2023 07:30",
//   },
// ];

// const loungeHistory = [
//   {
//     stt: 1,
//     fullName: "Trần Văn A",
//     usedQuota: 1,
//     duration: "1.5 giờ",
//     location: "Phòng chờ Lotus - SGN",
//     updatedAt: "10/09/2026 09:00",
//   },
//   {
//     stt: 2,
//     fullName: "Nguyễn Văn A",
//     usedQuota: 2,
//     duration: "2 giờ",
//     location: "Phòng chờ SASCO - HAN",
//     updatedAt: "05/10/2025 14:00",
//   },
//   {
//     stt: 3,
//     fullName: "Trần Văn A",
//     usedQuota: 1,
//     duration: "1 giờ",
//     location: "Phòng chờ CIP - DAD",
//     updatedAt: "15/09/2025 16:00",
//   },
//   {
//     stt: 4,
//     fullName: "Nguyễn Văn A",
//     usedQuota: 1,
//     duration: "2.5 giờ",
//     location: "Phòng chờ Lotus - HAN",
//     updatedAt: "20/08/2025 08:30",
//   },
//   {
//     stt: 5,
//     fullName: "Nguyễn Văn A",
//     usedQuota: 2,
//     duration: "1 giờ",
//     location: "Phòng chờ SASCO - SGN",
//     updatedAt: "05/09/2023 10:00",
//   },
// ];
// ==========================================
// 1. GOLF REQUESTS (Từ Q3/2026 lùi về Q3/2024)
// ==========================================
// ==========================================
// 1. GOLF REQUESTS (Logic Quý: Q0 -> Q3)
// Chu kỳ 2026: Q0/2026 (10-12/2025), Q1/2026 (1-3/2026), Q2/2026 (4-6/2026), Q3/2026 (7-9/2026)
// ==========================================
let golfRequests = [
  // --- CHU KỲ NĂM 2026 (Từ 10/2025 - 09/2026: Còn hạn) ---
  {
    id: "32151463",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 5,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2026-08-15", // Q3/2026
  },
  {
    id: "32151464",
    contractNo: "HD2026-002",
    cif: "100567",
    identity: "079096002222",
    fullName: "Nguyễn Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 5678",
    accountNumber: "1056789012",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 2,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2026-05-20", // Q2/2026
  },
  {
    id: "32151465",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 1,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2026-02-10", // Q1/2026
  },
  {
    id: "32151466",
    contractNo: "HD2026-002",
    cif: "100567",
    identity: "079096002222",
    fullName: "Nguyễn Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 5678",
    accountNumber: "1056789012",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 4,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2025-11-05", // Q0/2026 (Thuộc chu kỳ 2026)
  },

  // --- CHU KỲ NĂM 2025 (Từ 10/2024 - 09/2025: Hết hạn) ---
  {
    id: "32151467",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 6,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Hết hạn",
    date: "2025-08-12", // Q3/2025
  },
  {
    id: "32151468",
    contractNo: "HD2026-002",
    cif: "100567",
    identity: "079096002222",
    fullName: "Nguyễn Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 5678",
    accountNumber: "1056789012",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 3,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Hết hạn",
    date: "2025-05-18", // Q2/2025
  },
  {
    id: "32151469",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 2,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Hết hạn",
    date: "2025-02-15", // Q1/2025
  },
  {
    id: "32151470",
    contractNo: "HD2026-002",
    cif: "100567",
    identity: "079096002222",
    fullName: "Nguyễn Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 5678",
    accountNumber: "1056789012",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 5,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Hết hạn",
    date: "2024-11-20", // Q0/2025 (Thuộc chu kỳ 2025)
  },

  // --- CHU KỲ NĂM 2024 (Hết hạn) ---
  {
    id: "32151471",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaQuarter: 4,
    quotaYear: 16,
    usedQuota: 3,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Hết hạn",
    date: "2024-08-25", // Q3/2024
  },
];

// ==========================================
// 2. LOUNGE REQUESTS (Logic Tháng: -2 -> 9)
// Chu kỳ 2026: Tháng -2 (10/2025), Tháng -1 (11/2025), Tháng 0 (12/2025), ..., Tháng 9 (09/2026)
// ==========================================
let loungeRequests = [
  // --- CHU KỲ NĂM 2026 (Từ Tháng -2 đến Tháng 9: Còn hạn) ---
  {
    id: "42151501",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaMonth: 2,
    quotaYear: 24,
    usedQuota: 6,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2026-09-10", // Tháng 9/2026
  },
  {
    id: "42151505",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaMonth: 2,
    quotaYear: 24,
    usedQuota: 5,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2026-05-15", // Tháng 5/2026
  },
  {
    id: "42151509",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaMonth: 2,
    quotaYear: 24,
    usedQuota: 1,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2026-01-20", // Tháng 1/2026
  },
  {
    id: "42151510",
    contractNo: "HD2026-002",
    cif: "100567",
    identity: "079096002222",
    fullName: "Nguyễn Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 5678",
    accountNumber: "1056789012",
    quotaMonth: 2,
    quotaYear: 24,
    usedQuota: 8,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2025-12-15", // Tháng 0/2026 (12/2025)
  },
  {
    id: "42151511",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaMonth: 2,
    quotaYear: 24,
    usedQuota: 2,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2025-11-10", // Tháng -1/2026 (11/2025)
  },
  {
    id: "42151512",
    contractNo: "HD2026-002",
    cif: "100567",
    identity: "079096002222",
    fullName: "Nguyễn Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 5678",
    accountNumber: "1056789012",
    quotaMonth: 2,
    quotaYear: 24,
    usedQuota: 3,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Còn hạn",
    date: "2025-10-05", // Tháng -2/2026 (10/2025)
  },

  // --- CHU KỲ NĂM 2025 (Từ Tháng 9/2025 trở về trước: Hết hạn) ---
  {
    id: "42151513",
    contractNo: "HD2026-001",
    cif: "100234",
    identity: "079096001111",
    fullName: "Trần Văn A",
    cardType: "001",
    cardNumber: "4129 76** **** 1234",
    accountNumber: "1023456789",
    quotaMonth: 2,
    quotaYear: 24,
    usedQuota: 12,
    newCardNumber: "",
    replacementDate: "",
    expiryDate: "2026-12-31",
    status: "Hết hạn",
    date: "2025-09-15", // Tháng 9/2025 (Thuộc chu kỳ 2025)
  },
];
// ==========================================
// 3. GOLF HISTORY (Cover đủ các mốc thời gian của golfRequests)
// ==========================================
// ==========================================
// 3. GOLF HISTORY (Cover đủ các mốc thời gian của golfRequests)
// Logic: duration (thời gian kết thúc sử dụng) luôn TRƯỚC updatedAt
// ==========================================
const golfHistory = [
  {
    stt: 1,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "15/08/2026 10:30:00",
    location: "Sân Golf Tân Sơn Nhất",
    updatedAt: "15/08/2026 12:00:00", // Q3/2026
  },
  {
    stt: 2,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "15/08/2026 10:30:00",
    location: "Sân Golf Tân Sơn Nhất",
    updatedAt: "15/08/2026 12:00:00", // Q3/2026
  },
  {
    stt: 3,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "15/08/2026 10:30:00",
    location: "Sân Golf Tân Sơn Nhất",
    updatedAt: "15/08/2026 12:00:00", // Q3/2026
  },
  {
    stt: 4,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "15/08/2026 10:30:00",
    location: "Sân Golf Tân Sơn Nhất",
    updatedAt: "15/08/2026 12:00:00", // Q3/2026
  },
  {
    stt: 5,
    fullName: "Nguyễn Văn A",
    usedQuota: 1,
    duration: "20/05/2026 09:00:00",
    location: "Sân Golf Long Thành",
    updatedAt: "20/05/2026 11:30:00", // Q2/2026
  },
  {
    stt: 3,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "10/02/2026 14:00:00",
    location: "Sân Golf Vân Trì",
    updatedAt: "10/02/2026 15:45:00", // Q1/2026
  },
  {
    stt: 4,
    fullName: "Nguyễn Văn A",
    usedQuota: 1,
    duration: "05/11/2025 08:30:00",
    location: "Sân Golf Thủ Đức",
    updatedAt: "05/11/2025 10:00:00", // Q0/2026
  },
  {
    stt: 5,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "12/08/2025 15:00:00",
    location: "Sân Golf Tân Sơn Nhất",
    updatedAt: "12/08/2025 16:30:00", // Q3/2025
  },
  {
    stt: 6,
    fullName: "Nguyễn Văn A",
    usedQuota: 1,
    duration: "18/05/2025 07:45:00",
    location: "Sân Golf Long Thành",
    updatedAt: "18/05/2025 09:15:00", // Q2/2025
  },
  {
    stt: 7,
    fullName: "Trần Văn A",
    usedQuota: 2,
    duration: "15/02/2025 13:30:00",
    location: "Sân Golf Thủ Đức",
    updatedAt: "15/02/2025 15:00:00", // Q1/2025
  },
  {
    stt: 8,
    fullName: "Nguyễn Văn A",
    usedQuota: 1,
    duration: "20/11/2024 16:00:00",
    location: "Sân Golf Vân Trì",
    updatedAt: "20/11/2024 17:30:00", // Q0/2025
  },
  {
    stt: 9,
    fullName: "Trần Văn A",
    usedQuota: 3,
    duration: "25/08/2024 10:30:00",
    location: "Sân Golf Tân Sơn Nhất",
    updatedAt: "25/08/2024 12:00:00", // Q3/2024
  },
];

// ==========================================
// 4. LOUNGE HISTORY (Cover đủ các mốc thời gian của loungeRequests)
// Logic: duration (thời gian kết thúc sử dụng) luôn TRƯỚC updatedAt
// ==========================================
const loungeHistory = [
  {
    stt: 1,
    fullName: "Trần Văn A",
    usedQuota: 6,
    duration: "10/09/2026 08:00:00",
    location: "Phòng chờ Lotus - SGN",
    updatedAt: "10/09/2026 09:30:00", // Tháng 9/2026
  },
  {
    stt: 2,
    fullName: "Trần Văn A",
    usedQuota: 5,
    duration: "15/05/2026 11:15:00",
    location: "Phòng chờ SASCO - SGN",
    updatedAt: "15/05/2026 13:00:00", // Tháng 5/2026
  },
  {
    stt: 3,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "15/02/2026 11:15:00",
    location: "Phòng chờ SASCO - SGN",
    updatedAt: "15/02/2026 13:00:00", // Tháng 2/2026
  },
  {
    stt: 4,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "20/01/2026 14:30:00",
    location: "Phòng chờ Lotus - HAN",
    updatedAt: "20/01/2026 16:00:00", // Tháng 1/2026
  },
  {
    stt: 5,
    fullName: "Nguyễn Văn A",
    usedQuota: 8,
    duration: "15/12/2025 19:00:00",
    location: "Phòng chờ SASCO - SGN",
    updatedAt: "15/12/2025 20:30:00", // Tháng 0/2026 (12/2025)
  },
  {
    stt: 6,
    fullName: "Trần Văn A",
    usedQuota: 2,
    duration: "10/11/2025 06:30:00",
    location: "Phòng chờ CIP - DAD",
    updatedAt: "10/11/2025 08:00:00", // Tháng -1/2026 (11/2025)
  },
  {
    stt: 7,
    fullName: "Nguyễn Văn A",
    usedQuota: 3,
    duration: "05/10/2025 21:00:00",
    location: "Phòng chờ SASCO - HAN",
    updatedAt: "05/10/2025 22:15:00", // Tháng -2/2026 (10/2025)
  },
  {
    stt: 8,
    fullName: "Trần Văn A",
    usedQuota: 12,
    duration: "15/09/2025 12:45:00",
    location: "Phòng chờ Lotus - SGN",
    updatedAt: "15/09/2025 14:00:00", // Tháng 9/2025
  },
  {
    stt: 9,
    fullName: "Trần Văn A",
    usedQuota: 1,
    duration: "15/06/2025 12:45:00",
    location: "Phòng chờ Lotus - SGN",
    updatedAt: "15/06/2025 14:00:00", // Tháng 9/2025
  },
];
// ==========================================================================
// APPLICATION STATE
// ==========================================================================

let state = {
  currentTab: "golf", // "golf" or "lounge"
  currentPage: 1,
  rowsPerPage: 5,
  selectedIds: new Set(),
  currentDeleteId: null,
  currentEditId: null,
  newlyAddedId: null,

  // Search Form values
  contractNoFilter: "",
  searchType: "cif",
  searchValue: "",
  cardTypeFilter: "001", // Mặc định Visa Credit Signature
  privilegeCategory: "ctt",
  yearFilter: "",
  quarterFilter: "all", // Mặc định Chọn tất cả quý
  monthFilter: "all", // Mặc định Chọn tất cả tháng
};

// ==========================================================================
// DOM ELEMENT REFERENCES
// ==========================================================================

const dom = {
  tabGolf: document.getElementById("tab-golf"),
  tabLounge: document.getElementById("tab-lounge"),

  // Unified Search inputs (Image 1 & 2)
  queryContractNo: document.getElementById("query-contract-no"),
  querySearchType: document.getElementById("query-search-type"),
  querySearchVal: document.getElementById("query-search-val"),
  queryCardType: document.getElementById("query-card-type"),
  queryPrivilegeCategory: document.getElementById("query-privilege-category"),
  queryYear: document.getElementById("query-year"),
  queryQuarter: document.getElementById("query-quarter"),
  queryMonth: document.getElementById("query-month"),
  queryQuarterGroup: document.querySelector(".quarter-group"),
  queryMonthGroup: document.querySelector(".month-group"),
  queryContractGroup: document.querySelector(".contract-group"),
  queryCardTypeGroup: document.querySelector(".card-type-group"),
  queryYearGroup: document.querySelector(".year-group"),
  accordionTabs: document.querySelectorAll(".accordion-tab"),
  accordionPanels: document.querySelectorAll(".accordion-panel"),
  modalQueryError: document.getElementById("modal-query-error"),

  // Actions buttons
  btnExportExcel: document.getElementById("btn-export-excel"),
  btnQuery: document.getElementById("btn-query"),

  // Tables
  requestTableHeader: document.getElementById("request-table-header"),
  requestTableBody: document.getElementById("request-table-body"),
  historyTableHeader: document.getElementById("history-table-header"),
  historyTableBody: document.getElementById("history-table-body"),

  // Pagination
  rowsPerPage: document.getElementById("rows-per-page"),
  paginationInfo: document.getElementById("pagination-info"),
  btnPrevPage: document.getElementById("btn-prev-page"),
  btnNextPage: document.getElementById("btn-next-page"),

  // Sticky Footer
  footerSelectedCount: document.getElementById("footer-selected-count"),
  btnSubmitApprove: document.getElementById("btn-submit-approve"),

  // Modals
  modalGolfBooking: document.getElementById("modal-golf-booking"),
  modalLoungeBooking: document.getElementById("modal-lounge-booking"),
  modalConfirmDelete: document.getElementById("modal-confirm-delete"),
  modalConfirmApprove: document.getElementById("modal-confirm-approve"),

  // Form Golf elements
  formGolfBooking: document.getElementById("form-golf-booking"),
  golfEditId: document.getElementById("golf-edit-id"),
  golfPlayer: document.getElementById("golf-player"),
  golfStatus: document.getElementById("golf-status"),
  golfCardNum: document.getElementById("golf-card-num"),
  golfAccNum: document.getElementById("golf-acc-num"),
  golfQuotaQuarter: document.getElementById("golf-quota-quarter"),
  golfQuotaYear: document.getElementById("golf-quota-year"),
  golfUsedQuota: document.getElementById("golf-used-quota"),
  golfNewCard: document.getElementById("golf-new-card"),
  golfDate: document.getElementById("golf-date"),
  golfReplaceDate: document.getElementById("golf-replace-date"),
  golfExpiryDate: document.getElementById("golf-expiry-date"),
  golfModalTitle: document.getElementById("golf-modal-title"),

  // Form Lounge elements
  formLoungeBooking: document.getElementById("form-lounge-booking"),
  loungeEditId: document.getElementById("lounge-edit-id"),
  loungePassenger: document.getElementById("lounge-passenger"),
  loungeStatus: document.getElementById("lounge-status"),
  loungeCardNum: document.getElementById("lounge-card-num"),
  loungeAccNum: document.getElementById("lounge-acc-num"),
  loungeQuotaMonth: document.getElementById("lounge-quota-month"),
  loungeQuotaYear: document.getElementById("lounge-quota-year"),
  loungeUsedQuota: document.getElementById("lounge-used-quota"),
  loungeNewCard: document.getElementById("lounge-new-card"),
  loungeDate: document.getElementById("lounge-date"),
  loungeReplaceDate: document.getElementById("lounge-replace-date"),
  loungeExpiryDate: document.getElementById("lounge-expiry-date"),
  loungeModalTitle: document.getElementById("lounge-modal-title"),

  // Confirm actions
  btnDeleteConfirm: document.getElementById("btn-delete-confirm"),
  btnApproveConfirm: document.getElementById("btn-approve-confirm"),
  approveCountText: document.getElementById("approve-count-text"),
};

// ==========================================================================
// DATA COMPUTATIONS & RENDERING LOGIC
// ==========================================================================

function getActiveDataset() {
  return state.currentTab === "golf" ? golfRequests : loungeRequests;
}

// Complex Filtering Logic based on Query Form criteria
function getFilteredDataset() {
  const dataset = getActiveDataset();

  return dataset.filter((item) => {
    // 1. Issuing Contract No filter
    if (state.contractNoFilter !== "") {
      if (!item.contractNo || !item.contractNo.toLowerCase().includes(state.contractNoFilter.toLowerCase())) {
        return false;
      }
    }

    // 2. CIF or CMND/CCCD filter
    if (state.searchValue !== "") {
      if (state.searchType === "cif") {
        if (!item.cif || !item.cif.includes(state.searchValue)) return false;
      } else if (state.searchType === "identity") {
        if (!item.identity || !item.identity.includes(state.searchValue)) return false;
      }
    }

    // 3. Card Type filter
    if (state.cardTypeFilter !== "all") {
      if (item.cardType !== state.cardTypeFilter) return false;
    }

    // 4. Date components filtering (Year, Quarter, Month)
    if (!item.date) return false;
    const dateParts = item.date.split("-"); // "YYYY-MM-DD"
    if (dateParts.length !== 3) return false;

    const itemYear = dateParts[0];
    const itemMonth = parseInt(dateParts[1], 10);

    if (state.currentTab === "golf") {
      const selectedQuarter = state.quarterFilter;
      const selectedYear = parseInt(state.yearFilter, 10);
      if (Number.isNaN(selectedYear)) return false;

      if (selectedQuarter === "all") {
        const yearMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const prevYearMonths = [10, 11, 12];
        const itemYearNum = parseInt(itemYear, 10);
        const isCurrentYear = itemYearNum === selectedYear && yearMonths.includes(itemMonth);
        const isQ0Year = itemYearNum === selectedYear - 1 && prevYearMonths.includes(itemMonth);
        if (!isCurrentYear && !isQ0Year) return false;
      } else {
        const selectedQuarterNum = parseInt(selectedQuarter, 10);
        if (Number.isNaN(selectedQuarterNum)) return false;

        if (selectedQuarterNum === 0) {
          const selectedMonths = [10, 11, 12];
          if (itemYear !== String(selectedYear - 1) || !selectedMonths.includes(itemMonth)) {
            return false;
          }
        } else {
          if (itemYear !== state.yearFilter) {
            return false;
          }
          const selectedMonths = getQuarterMonths(selectedQuarterNum);
          if (selectedMonths.length > 0 && !selectedMonths.includes(itemMonth)) {
            return false;
          }
        }
      }
    } else {
      if (state.monthFilter === "all") {
        const selectedYear = parseInt(state.yearFilter, 10);
        if (Number.isNaN(selectedYear)) return false;
        const isCurrentYearMonth = itemYear === String(selectedYear) && itemMonth >= 1 && itemMonth <= 9;
        const isPrevYearMonth = itemYear === String(selectedYear - 1) && itemMonth >= 10 && itemMonth <= 12;
        if (!isCurrentYearMonth && !isPrevYearMonth) return false;
      } else {
        const { month: filterMonth, year: filterYear } = getLoungeMonthMapping(state.monthFilter, state.yearFilter);
        if (itemMonth !== filterMonth || itemYear !== String(filterYear)) {
          return false;
        }
      }
    }

    return true;
  });
}

function getPaginatedDataset(filteredData) {
  const startIndex = (state.currentPage - 1) * state.rowsPerPage;
  const endIndex = startIndex + state.rowsPerPage;
  return filteredData.slice(startIndex, endIndex);
}

function refreshUI() {
  console.log("refreshUI called");
  renderRequestTable();
  renderHistoryTable();
  updatePagination();
  updateFooterSelectedCount();
  updateQueryFormVisibility();
}

function populateCardTypeOptions(tabName) {
  const options = [];
  if (tabName === "golf") {
    options.push({ value: "all", label: "-- Chọn --" });
    options.push({ value: "001", label: "001 - JCB Credit Ultimate" });
    options.push({ value: "002", label: "002 - VISA Credit Infinite" });
  } else {
    options.push({ value: "all", label: "-- Chọn --" });
    options.push({ value: "001", label: "001 - VISA Credit Signature" });
    options.push({ value: "002", label: "002 - VISA Credit Infinite" });
  }

  dom.queryCardType.innerHTML = options
    .map((option) => {
      const selected = option.value === state.cardTypeFilter ? " selected" : "";
      return `<option value="${option.value}"${selected}>${option.label}</option>`;
    })
    .join("");
}

function updateQueryFormVisibility() {
  console.log("updateQueryFormVisibility called, currentTab:", state.currentTab, "category:", state.privilegeCategory);

  if (!dom.queryQuarterGroup || !dom.queryMonthGroup) {
    console.error("ERROR: queryQuarterGroup or queryMonthGroup elements not found!");
    return;
  }

  const isCTT = state.privilegeCategory === "ctt";

  if (isCTT) {
    if (dom.queryContractGroup) dom.queryContractGroup.style.setProperty("display", "flex", "important");
    if (dom.queryCardTypeGroup) dom.queryCardTypeGroup.style.setProperty("display", "flex", "important");
    if (dom.queryYearGroup) dom.queryYearGroup.style.setProperty("display", "flex", "important");

    if (state.currentTab === "golf") {
      dom.queryQuarterGroup.style.setProperty("display", "flex", "important");
      dom.queryMonthGroup.style.setProperty("display", "none", "important");
      dom.queryMonth.value = "all";
      state.monthFilter = "all";
      if (!state.quarterFilter) state.quarterFilter = "all";
      dom.queryQuarter.value = state.quarterFilter;
      populateCardTypeOptions("golf");
    } else {
      dom.queryQuarterGroup.style.setProperty("display", "none", "important");
      dom.queryMonthGroup.style.setProperty("display", "flex", "important");
      if (!state.monthFilter) state.monthFilter = "all";
      dom.queryMonth.value = state.monthFilter;
      dom.queryQuarter.value = "all";
      state.quarterFilter = "all";
      populateCardTypeOptions("lounge");
    }
  } else {
    if (dom.queryContractGroup) dom.queryContractGroup.style.setProperty("display", "none", "important");
    if (dom.queryCardTypeGroup) dom.queryCardTypeGroup.style.setProperty("display", "none", "important");
    if (dom.queryYearGroup) dom.queryYearGroup.style.setProperty("display", "none", "important");
    dom.queryQuarterGroup.style.setProperty("display", "none", "important");
    dom.queryMonthGroup.style.setProperty("display", "none", "important");
  }
}

function getQuarterMonths(quarter) {
  const quarterMap = {
    0: [10, 11, 12],
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7, 8, 9],
  };
  return quarterMap[quarter] || [];
}

function getLoungeMonthMapping(monthOffset, yearFilter) {
  let month = parseInt(monthOffset, 10);
  let year = parseInt(yearFilter, 10);
  if (month < 1) {
    month = 12 + month;
    year -= 1;
  }
  return { month, year };
}

// Render dynamic request table (New Structure matching Image headers)
function renderRequestTable() {
  const filteredData = getFilteredDataset();
  const paginatedData = getPaginatedDataset(filteredData);

  // 1. Build Header
  let headerHtml = "";
  if (state.currentTab === "golf") {
    headerHtml = `
      <tr>
        <th class="col-checkbox">
          <label class="custom-checkbox">
            <input type="checkbox" id="select-all-requests" />
            <span class="checkmark"></span>
          </label>
        </th>
        <th class="col-stt">STT</th>
        <th class="col-actions">Hành động</th>
        <th class="col-status">Trạng thái</th>
        <th>CIF</th>
        <th>Họ tên</th>
        <th>Loại thẻ</th>
        <th>Số thẻ</th>
        <th>Số TK thẻ</th>
        <th style="text-align: center;">Số lượt/quý</th>
        <th style="text-align: center;">Số lượt/năm</th>
        <th style="text-align: center;">Số lượt đã sử dụng</th>
        <th style="text-align: center;">Số lượt còn lại/năm</th>
        <th style="text-align: center;">Quý-năm</th>
        <th>Số thẻ mới (sau thay thế)</th>
        <th style="text-align: center;">Ngày thay thế</th>
        <th style="text-align: center;">Ngày hết hạn hiệu lực</th>
      </tr>
    `;
  } else {
    headerHtml = `
      <tr>
        <th class="col-checkbox">
          <label class="custom-checkbox">
            <input type="checkbox" id="select-all-requests" />
            <span class="checkmark"></span>
          </label>
        </th>
        <th class="col-stt">STT</th>
        <th class="col-actions">Hành động</th>
        <th class="col-status">Trạng thái</th>
        <th>CIF</th>
        <th>Họ tên</th>
        <th>Loại thẻ</th>
        <th>Số thẻ</th>
        <th>Số TK thẻ</th>
        <th style="text-align: center;">Số lượt/tháng</th>
        <th style="text-align: center;">Số lượt/năm</th>
        <th style="text-align: center;">Số lượt đã sử dụng</th>
        <th style="text-align: center;">Số lượt còn lại/năm</th>
        <th style="text-align: center;">Tháng-năm</th>
        <th>Số thẻ mới (sau thay thế)</th>
        <th style="text-align: center;">Ngày thay thế</th>
        <th style="text-align: center;">Ngày hết hạn hiệu lực</th>
      </tr>
    `;
  }
  dom.requestTableHeader.innerHTML = headerHtml;

  // Select all checkbox binding
  const selectAllCheckbox = document.getElementById("select-all-requests");
  if (selectAllCheckbox) {
    const allSelected = paginatedData.length > 0 && paginatedData.every((item) => state.selectedIds.has(item.id));
    selectAllCheckbox.checked = allSelected;
    selectAllCheckbox.addEventListener("change", handleSelectAllChange);
  }

  // 2. Build Rows
  if (paginatedData.length === 0) {
    dom.requestTableBody.innerHTML = `
      <tr>
        <td colspan="17" style="text-align: center; padding: 36px; color: var(--neutral-muted);">
          Không tìm thấy yêu cầu đặc quyền nào khớp với tiêu chí truy vấn.
        </td>
      </tr>
    `;
    return;
  }

  let bodyHtml = "";
  const startIndex = (state.currentPage - 1) * state.rowsPerPage;

  paginatedData.forEach((item, index) => {
    const stt = String(startIndex + index + 1).padStart(2, "0");
    const isSelected = state.selectedIds.has(item.id);
    const isNew = state.newlyAddedId === item.id;

    let displayStatus = item.status;
    if (item.status === "Còn hạn") {
      displayStatus = "Còn hạn";
    }

    let statusClass = "in-force";
    if (item.status === "Hết hạn" || item.status === "Hủy thành công") statusClass = "expired";
    if (item.status === "Chờ duyệt") statusClass = "info";

    const rowClass = `${isSelected ? "row-selected" : ""} ${isNew ? "row-new" : ""}`;

    // Card type mapping text
    let cardTypeName = item.cardType;
    if (state.currentTab === "golf") {
      cardTypeName =
        item.cardType === "001"
          ? "001 - JCB Credit Ultimate"
          : item.cardType === "002"
            ? "002 - VISA Credit Infinite"
            : item.cardType;
    } else {
      cardTypeName =
        item.cardType === "001"
          ? "001 - VISA Credit Signature"
          : item.cardType === "002"
            ? "002 - VISA Credit Infinite"
            : item.cardType;
    }

    // Calculate values with year cap 4 for golf
    const usedCount = Math.min(item.usedQuota, 4);
    const remainingVal = Math.max(0, 4 - usedCount);
    const yearQuotaDisplay = state.currentTab === "golf" ? Math.min(item.quotaYear, 4) : item.quotaYear;

    // Parse period (Quý-Năm or Tháng-Năm)
    const dateParts = item.date.split("-");
    const itemYear = dateParts[0];
    const itemMonth = parseInt(dateParts[1], 10);

    let periodStr = "";
    if (state.currentTab === "golf") {
      const selectedYear = parseInt(state.yearFilter, 10);
      if (state.quarterFilter === "all") {
        if (itemMonth >= 10 && itemYear === String(selectedYear - 1)) {
          periodStr = `Q0-${selectedYear}`;
        } else if (itemMonth >= 1 && itemMonth <= 3 && itemYear === String(selectedYear)) {
          periodStr = `Q1-${selectedYear}`;
        } else if (itemMonth >= 4 && itemMonth <= 6 && itemYear === String(selectedYear)) {
          periodStr = `Q2-${selectedYear}`;
        } else if (itemMonth >= 7 && itemMonth <= 9 && itemYear === String(selectedYear)) {
          periodStr = `Q3-${selectedYear}`;
        } else {
          periodStr = `Q?-${itemYear}`;
        }
      } else {
        const selectedQuarter = parseInt(state.quarterFilter, 10);
        const selectedYear = parseInt(state.yearFilter, 10);
        periodStr = `Q${selectedQuarter}-${selectedYear}`;
      }
    } else {
      if (state.monthFilter === "all") {
        let relativeMonth = itemMonth;
        const selectedYear = parseInt(state.yearFilter, 10);
        if (itemMonth >= 10 && itemYear === String(selectedYear - 1)) {
          relativeMonth = itemMonth - 12;
        }
        periodStr = `${relativeMonth}-${state.yearFilter}`;
      } else {
        let relativeMonth = itemMonth;
        if (itemMonth >= 10 && itemYear === String(parseInt(state.yearFilter, 10) - 1)) {
          relativeMonth = itemMonth - 12;
        }
        periodStr = `${relativeMonth}-${state.yearFilter}`;
      }
    }

    bodyHtml += `
      <tr class="${rowClass}" data-id="${item.id}">
        <td>
          <label class="custom-checkbox">
            <input type="checkbox" class="row-checkbox" data-id="${item.id}" ${isSelected ? "checked" : ""} />
            <span class="checkmark"></span>
          </label>
        </td>
        <td>${stt}</td>
        <td class="action-cell">
          <button class="action-btn btn-edit-record" data-id="${item.id}" aria-label="Chỉnh sửa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </button>
          
        </td>
        <td><span class="badge-status ${statusClass}">${displayStatus}</span></td>
        <td style="font-family: monospace; font-weight: 600;">${item.cif}</td>
        <td>${item.fullName}</td>
        <td>${cardTypeName}</td>
        <td style="font-family: monospace;">${item.cardNumber}</td>
        <td style="font-family: monospace;">${item.accountNumber}</td>
        <td style="text-align: center; font-weight: 600;">${state.currentTab === "golf" ? item.quotaQuarter : item.quotaMonth}</td>
        <td style="text-align: center; font-weight: 600;">${yearQuotaDisplay}</td>
        <td style="text-align: center; font-weight: 600; color: #d97706;">${usedCount}</td>
        <td style="text-align: center; font-weight: 700; color: #16a34a;">${remainingVal}</td>
        <td style="text-align: center; font-weight: 600;">${periodStr}</td>
        <td style="font-family: monospace;">${item.newCardNumber || "-"}</td>
        <td style="text-align: center;">${item.replacementDate ? formatDateString(item.replacementDate) : "-"}</td>
        <td style="text-align: center;">${formatDateString(`${state.yearFilter}-12-31`)}</td>
      </tr>
    `;
  });
  dom.requestTableBody.innerHTML = bodyHtml;

  // Clear highlight animations
  if (state.newlyAddedId) {
    setTimeout(() => {
      const activeRow = dom.requestTableBody.querySelector(`.row-new`);
      if (activeRow) activeRow.classList.remove("row-new");
      state.newlyAddedId = null;
    }, 2000);
  }

  // Row interactions
  dom.requestTableBody.querySelectorAll(".row-checkbox").forEach((box) => {
    box.addEventListener("change", handleRowSelectChange);
  });
  dom.requestTableBody.querySelectorAll(".btn-edit-record").forEach((btn) => {
    btn.addEventListener("click", handleOpenEditModal);
  });
  // dom.requestTableBody.querySelectorAll(".btn-delete-record").forEach((btn) => {
  //   btn.addEventListener("click", handleOpenDeleteConfirmModal);
  // });
}

function getHistoryFilterNames() {
  const contractFilter = state.contractNoFilter.trim().toLowerCase();
  const searchValue = state.searchValue.trim();

  if (!contractFilter && !searchValue) {
    return null;
  }

  return new Set(
    getActiveDataset()
      .filter((item) => {
        if (contractFilter && item.contractNo) {
          if (item.contractNo.toLowerCase().includes(contractFilter)) return true;
        }

        if (searchValue) {
          if (state.searchType === "cif" && item.cif && item.cif.includes(searchValue)) return true;
          if (state.searchType === "identity" && item.identity && item.identity.includes(searchValue)) return true;
        }

        return false;
      })
      .map((item) => item.fullName),
  );
}

function parseHistoryMonthYear(item) {
  const dateString = item.duration || item.updatedAt || "";
  const [datePart] = dateString.split(" ");
  const parts = datePart.split("/");
  if (parts.length !== 3) return null;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);
  if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year)) return null;
  return { day, month, year };
}

function isHistoryItemInSelectedPeriod(item) {
  const parsed = parseHistoryMonthYear(item);
  if (!parsed) return false;

  if (state.currentTab === "golf") {
    const selectedYear = parseInt(state.yearFilter, 10);
    if (Number.isNaN(selectedYear)) return false;

    if (state.quarterFilter === "all") {
      const isCurrentYear = parsed.year === selectedYear && parsed.month >= 1 && parsed.month <= 9;
      const isPrevYearQ0 = parsed.year === selectedYear - 1 && parsed.month >= 10 && parsed.month <= 12;
      return isCurrentYear || isPrevYearQ0;
    }

    const selectedQuarter = parseInt(state.quarterFilter, 10);
    if (Number.isNaN(selectedQuarter)) return false;

    const quarterMonths = getQuarterMonths(selectedQuarter);
    if (selectedQuarter === 0) {
      return parsed.year === selectedYear - 1 && quarterMonths.includes(parsed.month);
    }

    return parsed.year === selectedYear && quarterMonths.includes(parsed.month);
  }

  if (state.monthFilter === "all") {
    const selectedYear = parseInt(state.yearFilter, 10);
    if (Number.isNaN(selectedYear)) return false;

    const isCurrentYear = parsed.year === selectedYear && parsed.month >= 1 && parsed.month <= 9;
    const isPrevYear = parsed.year === selectedYear - 1 && parsed.month >= 10 && parsed.month <= 12;
    return isCurrentYear || isPrevYear;
  }

  const { month: selectedMonth, year: selectedYear } = getLoungeMonthMapping(state.monthFilter, state.yearFilter);
  return parsed.year === selectedYear && parsed.month === selectedMonth;
}

// Render dynamic history tables
function renderHistoryTable() {
  const filterNames = getHistoryFilterNames();
  let headerHtml = "";
  let bodyHtml = "";

  headerHtml = `
      <tr>
        <th class="col-stt">STT</th>
        <th>Họ tên</th>
        <th style="text-align:center;">Số lượt đã sử dụng</th>
        <th>Thời gian sử dụng</th>
        <th>Địa điểm sử dụng</th>
        <th>Ngày cập nhật</th>
      </tr>
    `;

  const historyData = state.currentTab === "golf" ? golfHistory : loungeHistory;
  historyData
    .filter((item) => (!filterNames || filterNames.has(item.fullName)) && isHistoryItemInSelectedPeriod(item))
    .forEach((item) => {
      bodyHtml += `
        <tr>
          <td>${item.stt}</td>
          <td>${item.fullName}</td>
          <td style="text-align:center;">${Math.min(item.usedQuota, 4)} lượt</td>
          <td>${item.duration}</td>
          <td>${item.location}</td>
          <td>${item.updatedAt}</td>
        </tr>
      `;
    });

  dom.historyTableHeader.innerHTML = headerHtml;
  dom.historyTableBody.innerHTML = bodyHtml;
}

// Update pagination info
function updatePagination() {
  const filteredData = getFilteredDataset();
  const totalRecords = filteredData.length;

  const totalPages = Math.max(1, Math.ceil(totalRecords / state.rowsPerPage));
  if (state.currentPage > totalPages) {
    state.currentPage = totalPages;
  }

  const startRecord = totalRecords === 0 ? 0 : (state.currentPage - 1) * state.rowsPerPage + 1;
  const endRecord = Math.min(state.currentPage * state.rowsPerPage, totalRecords);

  dom.paginationInfo.textContent = `${startRecord}-${endRecord} of ${totalRecords}`;

  dom.btnPrevPage.disabled = state.currentPage === 1;
  dom.btnNextPage.disabled = state.currentPage === totalPages;
  dom.rowsPerPage.value = state.rowsPerPage;
}

function updateFooterSelectedCount() {
  const count = state.selectedIds.size;
  if (dom.footerSelectedCount) {
    dom.footerSelectedCount.textContent = count;
  }

  const footerEl = document.querySelector(".sticky-footer");
  if (footerEl) {
    if (count > 0) {
      footerEl.classList.add("active");
    } else {
      footerEl.classList.remove("active");
    }
  }
}

function formatDateString(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function generateRandomId() {
  return String(Math.floor(10000000 + Math.random() * 90000000));
}

// ==========================================================================
// EVENT HANDLERS
// ==========================================================================

// Switch tabs Golf <-> Lounge (airport)
function handleTabSwitch(tabName) {
  console.log("handleTabSwitch called with tabName:", tabName);
  if (state.currentTab === tabName) return;

  state.currentTab = tabName;
  state.currentPage = 1;
  state.selectedIds.clear();

  if (tabName === "golf") {
    dom.tabGolf.classList.add("active");
    dom.tabLounge.classList.remove("active");
  } else {
    dom.tabGolf.classList.remove("active");
    dom.tabLounge.classList.add("active");
  }

  // Clear query form values
  dom.queryContractNo.value = "";
  dom.querySearchVal.value = "";
  dom.queryCardType.value = "all";
  dom.queryYear.value = "";
  dom.queryQuarter.value = "all";
  dom.queryMonth.value = "all";

  state.contractNoFilter = "";
  state.searchValue = "";
  state.cardTypeFilter = "all";
  state.yearFilter = "";
  state.quarterFilter = "all";
  state.monthFilter = "all";

  refreshUI();
}

// Handle checkbox rows
function handleAccordionToggle(e) {
  const clicked = e.currentTarget;
  const targetId = clicked.getAttribute("data-target");
  const targetPanel = document.getElementById(targetId);
  if (!targetPanel) return;

  const isActive = clicked.classList.contains("active");
  if (isActive) {
    clicked.classList.toggle("collapsed");
    targetPanel.classList.toggle("collapsed");
    return;
  }

  dom.accordionTabs.forEach((tab) => {
    tab.classList.remove("active", "collapsed");
  });
  dom.accordionPanels.forEach((panel) => {
    panel.classList.remove("active", "collapsed");
  });

  clicked.classList.add("active");
  targetPanel.classList.add("active");
}

function syncAccordionFromPrivilegeCategory() {
  const category = state.privilegeCategory;
  const mapping = {
    ctt: "panel-trungtamthe",
    khut: "panel-khut",
    payroll: "panel-payroll",
    khdn: "panel-khdn",
  };

  const targetId = mapping[category];
  if (!targetId) return;

  dom.accordionTabs.forEach((tab) => {
    const isTarget = tab.getAttribute("data-target") === targetId;
    tab.classList.toggle("active", isTarget);
  });
  dom.accordionPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === targetId);
  });
}

function handleRowSelectChange(e) {
  const id = e.target.getAttribute("data-id");
  const row = dom.requestTableBody.querySelector(`tr[data-id="${id}"]`);

  if (e.target.checked) {
    state.selectedIds.add(id);
    if (row) row.classList.add("row-selected");
  } else {
    state.selectedIds.delete(id);
    if (row) row.classList.remove("row-selected");
  }

  const filteredData = getFilteredDataset();
  const paginatedData = getPaginatedDataset(filteredData);
  const selectAllCheckbox = document.getElementById("select-all-requests");
  if (selectAllCheckbox) {
    selectAllCheckbox.checked =
      paginatedData.length > 0 && paginatedData.every((item) => state.selectedIds.has(item.id));
  }

  updateFooterSelectedCount();
}

function handleSelectAllChange(e) {
  const isChecked = e.target.checked;
  const filteredData = getFilteredDataset();
  const paginatedData = getPaginatedDataset(filteredData);

  paginatedData.forEach((item) => {
    const row = dom.requestTableBody.querySelector(`tr[data-id="${item.id}"]`);
    if (isChecked) {
      state.selectedIds.add(item.id);
      if (row) row.classList.add("row-selected");
      const checkbox = row ? row.querySelector(".row-checkbox") : null;
      if (checkbox) checkbox.checked = true;
    } else {
      state.selectedIds.delete(item.id);
      if (row) row.classList.remove("row-selected");
      const checkbox = row ? row.querySelector(".row-checkbox") : null;
      if (checkbox) checkbox.checked = false;
    }
  });

  updateFooterSelectedCount();
}

// Unified search execution
function handleQuerySubmit() {
  const contractNo = dom.queryContractNo.value.trim();
  const searchVal = dom.querySearchVal.value.trim();
  if (!contractNo && !searchVal) {
    showQueryValidationError();
    return;
  }

  state.contractNoFilter = contractNo;
  state.searchType = dom.querySearchType.value;
  state.searchValue = searchVal;
  state.cardTypeFilter = dom.queryCardType.value;
  state.privilegeCategory = dom.queryPrivilegeCategory.value;
  state.yearFilter = dom.queryYear.value.trim();
  state.quarterFilter = dom.queryQuarter.value;
  state.monthFilter = dom.queryMonth.value;

  state.currentPage = 1;
  state.selectedIds.clear();
  refreshUI();
}

// Export mock Excel file
function handleExportExcel() {
  const filteredData = getFilteredDataset();
  if (filteredData.length === 0) {
    alert("Không có dữ liệu đặc quyền nào để xuất Excel theo tiêu chí truy vấn hiện tại.");
    return;
  }

  const title = state.currentTab === "golf" ? "Đặc Quyền GOLF" : "Đặc Quyền Phòng Chờ/Fast Track";
  alert(
    `[HDBank] Đang trích xuất Excel...\nĐã tạo thành công tệp "HDBank_Export_${title}_Q${state.quarterFilter}_${state.yearFilter}.xlsx" chứa ${filteredData.length} dòng dữ liệu.`,
  );
}

// Modals management
let queryErrorTimer = null;

function openModal(modal) {
  modal.classList.add("active");
}

// Close helper
function closeModal(modal) {
  modal.classList.remove("active");
}

function showQueryValidationError() {
  if (!dom.modalQueryError) return;
  if (queryErrorTimer) {
    clearTimeout(queryErrorTimer);
  }
  openModal(dom.modalQueryError);
  queryErrorTimer = setTimeout(() => closeModal(dom.modalQueryError), 2200);
}

// Row Actions - Edit record
function handleOpenEditModal(e) {
  const btn = e.currentTarget;
  const id = btn.getAttribute("data-id");
  state.currentEditId = id;

  if (state.currentTab === "golf") {
    const item = golfRequests.find((r) => r.id === id);
    if (!item) return;

    dom.golfEditId.value = item.id;
    dom.golfPlayer.value = item.fullName;
    dom.golfStatus.value = item.status;
    dom.golfCardNum.value = item.cardNumber;
    dom.golfAccNum.value = item.accountNumber;
    dom.golfQuotaQuarter.value = item.quotaQuarter;
    dom.golfQuotaYear.value = item.quotaYear;
    dom.golfUsedQuota.value = item.usedQuota;
    dom.golfNewCard.value = item.newCardNumber || "";
    dom.golfDate.value = item.date;
    dom.golfReplaceDate.value = item.replacementDate || "";
    dom.golfExpiryDate.value = item.expiryDate;
    dom.golfModalTitle.textContent = "SỬA YÊU CẦU GOLF - MÃ " + item.id;
    openModal(dom.modalGolfBooking);
  } else {
    const item = loungeRequests.find((r) => r.id === id);
    if (!item) return;

    dom.loungeEditId.value = item.id;
    dom.loungePassenger.value = item.fullName;
    dom.loungeStatus.value = item.status;
    dom.loungeCardNum.value = item.cardNumber;
    dom.loungeAccNum.value = item.accountNumber;
    dom.loungeQuotaMonth.value = item.quotaMonth;
    dom.loungeQuotaYear.value = item.quotaYear;
    dom.loungeUsedQuota.value = item.usedQuota;
    dom.loungeNewCard.value = item.newCardNumber || "";
    dom.loungeDate.value = item.date;
    dom.loungeReplaceDate.value = item.replacementDate || "";
    dom.loungeExpiryDate.value = item.expiryDate;
    dom.loungeModalTitle.textContent = "SỬA YÊU CẦU PHÒNG CHỜ - MÃ " + item.id;
    openModal(dom.modalLoungeBooking);
  }
}

// Row Actions - Delete record confirmation
function handleOpenDeleteConfirmModal(e) {
  const btn = e.currentTarget;
  state.currentDeleteId = btn.getAttribute("data-id");
  openModal(dom.modalConfirmDelete);
}

function handleConfirmDelete() {
  if (!state.currentDeleteId) return;

  if (state.currentTab === "golf") {
    golfRequests = golfRequests.filter((r) => r.id !== state.currentDeleteId);
  } else {
    loungeRequests = loungeRequests.filter((r) => r.id !== state.currentDeleteId);
  }

  state.selectedIds.delete(state.currentDeleteId);
  state.currentDeleteId = null;
  closeModal(dom.modalConfirmDelete);

  // Keep pagination bounds correct
  const filteredData = getFilteredDataset();
  const maxPage = Math.max(1, Math.ceil(filteredData.length / state.rowsPerPage));
  if (state.currentPage > maxPage) {
    state.currentPage = maxPage;
  }

  refreshUI();
}

// Modal forms save handles
function handleGolfFormSubmit(e) {
  e.preventDefault();

  const editId = dom.golfEditId.value;
  const existing = golfRequests.find((r) => r.id === editId);

  const itemData = {
    id: editId || generateRandomId(),
    contractNo: existing ? existing.contractNo : "HD2026-NEW",
    cif: existing ? existing.cif : "100999",
    identity: existing ? existing.identity : "079096009999",
    cardType: existing ? existing.cardType : "001",
    fullName: dom.golfPlayer.value,
    cardNumber: dom.golfCardNum.value,
    accountNumber: dom.golfAccNum.value,
    quotaQuarter: parseInt(dom.golfQuotaQuarter.value, 10) || 0,
    quotaYear: parseInt(dom.golfQuotaYear.value, 10) || 0,
    usedQuota: parseInt(dom.golfUsedQuota.value, 10) || 0,
    newCardNumber: dom.golfNewCard.value,
    date: dom.golfDate.value,
    replacementDate: dom.golfReplaceDate.value,
    expiryDate: dom.golfExpiryDate.value,
    status: dom.golfStatus.value,
  };

  if (editId) {
    const idx = golfRequests.findIndex((r) => r.id === editId);
    if (idx !== -1) golfRequests[idx] = itemData;
  } else {
    golfRequests.unshift(itemData);
    state.newlyAddedId = itemData.id;
    state.currentPage = 1;
  }

  closeModal(dom.modalGolfBooking);
  refreshUI();
}

function handleLoungeFormSubmit(e) {
  e.preventDefault();

  const editId = dom.loungeEditId.value;
  const existing = loungeRequests.find((r) => r.id === editId);

  const itemData = {
    id: editId || generateRandomId(),
    contractNo: existing ? existing.contractNo : "HD2026-NEW",
    cif: existing ? existing.cif : "700999",
    identity: existing ? existing.identity : "079096009999",
    cardType: existing ? existing.cardType : "001",
    fullName: dom.loungePassenger.value,
    cardNumber: dom.loungeCardNum.value,
    accountNumber: dom.loungeAccNum.value,
    quotaMonth: parseInt(dom.loungeQuotaMonth.value, 10) || 0,
    quotaYear: parseInt(dom.loungeQuotaYear.value, 10) || 0,
    usedQuota: parseInt(dom.loungeUsedQuota.value, 10) || 0,
    newCardNumber: dom.loungeNewCard.value,
    date: dom.loungeDate.value,
    replacementDate: dom.loungeReplaceDate.value,
    expiryDate: dom.loungeExpiryDate.value,
    status: dom.loungeStatus.value,
  };

  if (editId) {
    const idx = loungeRequests.findIndex((r) => r.id === editId);
    if (idx !== -1) loungeRequests[idx] = itemData;
  } else {
    loungeRequests.unshift(itemData);
    state.newlyAddedId = itemData.id;
    state.currentPage = 1;
  }

  closeModal(dom.modalLoungeBooking);
  refreshUI();
}

// Approve records action flow
function handleOpenApproveModal() {
  if (state.selectedIds.size === 0) {
    alert("Vui lòng chọn ít nhất một yêu cầu đặc quyền bằng checkbox để tiến hành chuyển duyệt.");
    return;
  }
  dom.approveCountText.textContent = state.selectedIds.size;
  openModal(dom.modalConfirmApprove);
}

function handleConfirmApprove() {
  const dataset = getActiveDataset();

  dataset.forEach((item) => {
    if (state.selectedIds.has(item.id)) {
      item.status = "Chờ duyệt";
    }
  });

  closeModal(dom.modalConfirmApprove);
  state.selectedIds.clear();
  refreshUI();

  alert("Chuyển duyệt thành công các yêu cầu đã chọn!");
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================

function init() {
  // Bind tab buttons
  dom.tabGolf.addEventListener("click", () => handleTabSwitch("golf"));
  dom.tabLounge.addEventListener("click", () => handleTabSwitch("lounge"));

  // Bind Query Form buttons
  if (dom.btnQuery) {
    dom.btnQuery.addEventListener("click", handleQuerySubmit);
  }
  if (dom.btnExportExcel) {
    dom.btnExportExcel.addEventListener("click", handleExportExcel);
  }
  if (dom.queryPrivilegeCategory) {
    dom.queryPrivilegeCategory.addEventListener("change", () => {
      state.privilegeCategory = dom.queryPrivilegeCategory.value;
      syncAccordionFromPrivilegeCategory();
      refreshUI();
    });
  }

  if (dom.accordionTabs) {
    dom.accordionTabs.forEach((tab) => {
      tab.addEventListener("click", handleAccordionToggle);
    });
  }

  syncAccordionFromPrivilegeCategory();

  // Bind enter key search
  const inputs = [dom.queryContractNo, dom.querySearchVal, dom.queryYear];
  inputs.forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleQuerySubmit();
    });
  });

  // Bind Pagination controls
  dom.rowsPerPage.addEventListener("change", (e) => {
    state.rowsPerPage = parseInt(e.target.value, 10);
    state.currentPage = 1;
    refreshUI();
  });

  dom.btnPrevPage.addEventListener("click", () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      refreshUI();
    }
  });

  dom.btnNextPage.addEventListener("click", () => {
    const filteredData = getFilteredDataset();
    const totalPages = Math.ceil(filteredData.length / state.rowsPerPage);
    if (state.currentPage < totalPages) {
      state.currentPage++;
      refreshUI();
    }
  });

  // Bind Approve submit button in footer
  if (dom.btnSubmitApprove) {
    dom.btnSubmitApprove.addEventListener("click", handleOpenApproveModal);
  }

  // Close modals listeners
  document.querySelectorAll(".modal-close-btn, .modal-cancel-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(dom.modalGolfBooking);
      closeModal(dom.modalLoungeBooking);
      closeModal(dom.modalConfirmDelete);
      closeModal(dom.modalConfirmApprove);
    });
  });

  // Bind forms submit handlers
  if (dom.formGolfBooking) dom.formGolfBooking.addEventListener("submit", handleGolfFormSubmit);
  if (dom.formLoungeBooking) dom.formLoungeBooking.addEventListener("submit", handleLoungeFormSubmit);

  // Modal confirmations handlers
  if (dom.btnDeleteConfirm) dom.btnDeleteConfirm.addEventListener("click", handleConfirmDelete);
  if (dom.btnApproveConfirm) dom.btnApproveConfirm.addEventListener("click", handleConfirmApprove);

  // Render initial UI state
  refreshUI();
}

// Start application
document.addEventListener("DOMContentLoaded", init);

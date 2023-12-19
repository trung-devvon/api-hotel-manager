const roles = [
  {
    code: "1979",
    value: "User",
  },
  {
    code: "1945",
    value: "Admin",
  },
  {
    code: "1954",
    value: "Creator",
  },
];
const typeRoom = [
  {
    name: "1 giường đôi",
    icon: "double-bed.svg",
    count: 1,
  },
  {
    name: "1 giường đôi lớn",
    icon: "one-big.svg",
    count: 1,
  },
  {
    name: "1 giường đơn nhỏ",
    icon: "one-small.svg",
    count: 1,
  },
  {
    name: "2 giường đôi",
    icon: "two-double-bed.svg",
    count: 2,
  },
  {
    name: "2 giường đơn nhỏ",
    icon: "small-single-bed.svg",
    count: 2,
  },
  {
    name: "2 giường đơn lớn",
    icon: "two-single-big-bed.svg",
    count: 2,
  },
];
const facilities = [
  {
    value: "Phòng tắm",
    subs: [
      "Giấy vệ sinh",
      "Khăn tắm",
      "Phòng xông hơi",
      "Bồn tắm hoặc Vòi sen",
      "Dép",
      "Phòng tắm riêng",
      "Nhà vệ sinh",
      "Đồ vệ sinh cá nhân miễn phí",
      "Máy sấy tóc",
      "Bồn tắm",
      "Vòi sen",
    ],
    icon: "shower.svg",
  },
  {
    value: "Nhà bếp",
    subs: [
      "Ghế cao dành cho trẻ em",
      "Bàn ăn",
      "Sản phẩm lau rửa",
      "Bếp nấu",
      "Lò nướng",
      "Đồ bếp",
      "Ấm đun nước điện",
      "Bếp",
      "Máy giặt",
      "Lò vi sóng",
      "Tủ lạnh",
      "Bếp nhỏ",
    ],
    icon: "kitchen.svg",
  },
  {
    value: "Truyền thông & Công nghệ",
    subs: [
      "TV màn hình phẳng",
      "Truyền hình cáp",
      "Điện thoại",
      "TV",
      "Truyền hình trả tiền",
    ],
    icon: "tivi.svg",
  },
  {
    value: "An ninh",
    subs: [
      "Bình chữa cháy",
      "Hệ thống CCTV bên ngoài chỗ nghỉ",
      "Hệ thống CCTV trong khu vực chung",
      "Thiết bị báo cháy",
      "Báo động an ninh",
      "Ổ khóa mở bằng thẻ",
      "Bảo vệ 24/7",
    ],
    icon: "lock.svg",
  },
  {
    value: "Phòng ngủ",
    subs: [
      "Ra trải giường",
      "Tủ hoặc phòng để quần áo",
      "Phòng thay quần áo",
      "Giường cực dài (> 2 mét)",
    ],
    icon: "bedroom.svg",
  },
  {
    value: "Internet",
    subs: ["Wi-fi có ở các phòng khách sạn và miễn phí."],
    icon: "wifi.svg",
  },
  {
    value: "Ngoài trời",
    subs: [
      "Bàn ghế ngoài trời",
      "Giáp biển",
      "Khu vực ăn uống ngoài trời",
      "Sân hiên phơi nắng",
      "Khu vực bãi tắm riêng",
      "Tiện nghi BBQ",
      "Tiện nghi BBQ",
      "Sân trong",
      "Ban công",
      "Sân thượng / hiên",
      "Sân vườn",
    ],
    icon: "outside.svg",
  },
  {
    value: "Dịch vụ lễ tân",
    subs: [
      "Nhận/trả phòng riêng",
      "Dịch vụ trợ giúp đặc biệt",
      "Máy ATM/rút tiền trong khuôn viên",
      "Giữ hành li",
      "Nhận/trả phòng cấp tốc",
      "Phụ phí",
      "Lễ tân 24 giờ",
    ],
    icon: "service.svg",
  },
  {
    value: "Khu vực phòng khách",
    subs: [
      "Khu vực phòng ăn",
      "Ghế sofa",
      "Khu vực tiếp khách",
      "Bàn làm việc",
    ],
    icon: "sofa.svg",
  },
  {
    value: "Chăm sóc sức khoẻ",
    subs: [
      "Hồ bơi trẻ em",
      "Lớp học yoga",
      "Phòng gym",
      "Mát-xa toàn thân",
      "Mát-xa tay",
      "Mát-xa đầu",
      "Mát-xa dành cho cặp đôi",
      "Mát-xa chân",
      "Mát-xa cổ",
      "Mát-xa lưng",
      "Khu vực thư giãn/spa lounge",
      "Tiện Nghi Spa",
      "Liệu pháp ánh sáng",
      "Quấn toàn thân",
      "Tẩy tế bào chết toàn thân",
      "Trị Liệu Cơ Thể",
      "Tạo kiểu tóc",
      "Nhuộm tóc",
      "Cắt tóc",
      "Dịch vụ làm móng chân",
      "Dịch vụ làm móng tay",
      "Chăm sóc tóc",
      "Dịch vụ trang điểm",
      "Dịch vụ triệt lông",
      "Chăm sóc da mặt",
      "Dịch Vụ Làm Đẹp",
      "Ô (dù) che nắng loại to",
      "Ghế/ghế dài tắm nắng",
      "Phụ phí",
      "Cầu trượt nước",
      "Massage",
      "Trung tâm Spa & chăm sóc sức khoe",
      "Trung tâm thể dục",
    ],
    icon: "heal.svg",
  },
  {
    value: "Hồ bơi ngoài trời",
    subs: [
      "Mở cửa quanh năm",
      "Dành cho mọi độ tuổi",
      "Hồ bơi trên sân thượng",
      "Hồ bơi vô cực",
      "Cầu trượt nước",
      "Đồ chơi ở hồ bơi",
      "Khăn hồ bơi/bãi biển",
      "Quầy bar hồ bơi",
      "Mái che hồ bơi",
      "Ghế/ghế dài tắm nắng",
    ],
    icon: "pool.svg",
  },
  {
    value: "Đồ ăn & thức uống",
    subs: ["Bữa sáng tại phòng", "Dịch vụ phòng"],
    icon: "meal.svg",
  },
  {
    value: "Vật nuôi",
    subs: ["Vật nuôi được phép. Có thể bị tính phí."],
    icon: "pet.svg",
  },
  {
    value: "Chỗ đậu xe",
    subs: [
      "Có chỗ đỗ xe riêng và chi phí VND 15.000 cho một ngày tại chỗ (không cần đặt chỗ trước).",
    ],
    icon: "parking.svg",
  },
  {
    value: "Lối vào dành cho người khuyết tật",
    subs: [
      "Xe lăn có thể đi đến mọi nơi trong toàn bộ khuôn viên",
      "Các tầng trên đi lên bằng thang máy",
    ],
    icon: "wheel.svg",
  },
  {
    value: "Các tiện nghi khác",
    subs: [
      "Khu vực cho phép hút thuốc",
      "Điều hòa nhiệt độ",
      "Phòng không gây dị ứng",
      "Phòng cách âm",
      "Thang máy",
      "Phòng gia đình",
      "Phòng không hút thuốc",
    ],
    icon: "fac-more.svg",
  },
];
module.exports = { roles, facilities, typeRoom };
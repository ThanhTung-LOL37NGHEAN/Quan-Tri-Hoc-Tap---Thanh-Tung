/**
 * Dữ liệu mẫu minh họa cho môn Tin học THCS
 * Thầy giáo: NGUYỄN THANH TÙNG - Trường THCS LOL37 Nghệ An
 * Lưu ý: Toàn bộ dữ liệu dưới đây chỉ mang tính chất minh họa thao tác,
 * dễ dàng chỉnh sửa, thêm, xóa hoặc khôi phục bất cứ lúc nào.
 */

import { AppData, ClassItem, Student, Lesson, LearningTask, GradeEntry, StudentComment, ActivityLog } from '../types';

export const initialClasses: ClassItem[] = [
  {
    id: 'c-6a1',
    name: '6A1',
    gradeLevel: 6,
    room: 'Phòng Máy 1',
    academicYear: '2025-2026',
    note: 'Lớp sôi nổi, tiếp thu nhanh thao tác máy tính cơ bản và gõ phím 10 ngón'
  },
  {
    id: 'c-7a1',
    name: '7A1',
    gradeLevel: 7,
    room: 'Phòng Máy 2',
    academicYear: '2025-2026',
    note: 'Lực học đồng đều, có thế mạnh về bảng tính Excel và xử lý dữ liệu số'
  },
  {
    id: 'c-8a1',
    name: '8A1',
    gradeLevel: 8,
    room: 'Phòng Máy 1',
    academicYear: '2025-2026',
    note: 'Tập trung rèn luyện tư duy thuật toán, cấu trúc rẽ nhánh và lặp'
  },
  {
    id: 'c-9a1',
    name: '9A1',
    gradeLevel: 9,
    room: 'Phòng Máy 2',
    academicYear: '2025-2026',
    note: 'Lớp cuối cấp, chú trọng thực hành lập trình và thiết kế sản phẩm số ứng dụng'
  }
];

export const initialStudents: Student[] = [
  // Lớp 6A1
  { id: 's-601', studentCode: 'HS0601', fullName: 'Nguyễn Hoàng Nam', classId: 'c-6a1', gender: 'Nam', status: 'Đang học', note: 'Thao tác máy tính nhanh nhẹn, gõ 10 ngón chuẩn' },
  { id: 's-602', studentCode: 'HS0602', fullName: 'Trần Thị Mai Anh', classId: 'c-6a1', gender: 'Nữ', status: 'Đang học', note: 'Trình bày văn bản đẹp mắt, có thẩm mỹ cao' },
  { id: 's-603', studentCode: 'HS0603', fullName: 'Lê Minh Đức', classId: 'c-6a1', gender: 'Nam', status: 'Đang học', note: 'Cần rèn thêm kỹ năng lưu trữ file vào đúng thư mục', needAttention: true },
  { id: 's-604', studentCode: 'HS0604', fullName: 'Phạm Thuỳ Linh', classId: 'c-6a1', gender: 'Nữ', status: 'Đang học', note: 'Tích cực hỗ trợ bạn cùng bàn trong giờ thực hành' },
  { id: 's-605', studentCode: 'HS0605', fullName: 'Đỗ Quang Huy', classId: 'c-6a1', gender: 'Nam', status: 'Đang học', note: 'Cần chú ý hoàn thành bài tập thực hành đúng hạn', needAttention: true },
  { id: 's-606', studentCode: 'HS0606', fullName: 'Vũ Ngọc Bảo Trâm', classId: 'c-6a1', gender: 'Nữ', status: 'Đang học', note: 'Có năng khiếu vẽ đồ họa máy tính và thuyết trình số' },

  // Lớp 7A1
  { id: 's-701', studentCode: 'HS0701', fullName: 'Hoàng Quốc Tuấn', classId: 'c-7a1', gender: 'Nam', status: 'Đang học', note: 'Sử dụng hàm tính toán Excel rất linh hoạt và chính xác' },
  { id: 's-702', studentCode: 'HS0702', fullName: 'Bùi Thanh Hằng', classId: 'c-7a1', gender: 'Nữ', status: 'Đang học', note: 'Biết cách định dạng và biểu diễn dữ liệu bằng biểu đồ' },
  { id: 's-703', studentCode: 'HS0703', fullName: 'Nguyễn Đình Phúc', classId: 'c-7a1', gender: 'Nam', status: 'Đang học', note: 'Cần củng cố cách sử dụng địa chỉ tương đối và tuyệt đối', needAttention: true },
  { id: 's-704', studentCode: 'HS0704', fullName: 'Đặng Ngọc Ánh', classId: 'c-7a1', gender: 'Nữ', status: 'Đang học', note: 'Thao tác bảng tính thành thạo, tư duy phân tích tốt' },
  { id: 's-705', studentCode: 'HS0705', fullName: 'Phan Trọng Khang', classId: 'c-7a1', gender: 'Nam', status: 'Đang học', note: 'Tự giác hoàn thành tốt các bài tập dự án nhóm' },

  // Lớp 8A1
  { id: 's-801', studentCode: 'HS0801', fullName: 'Trịnh Gia Bảo', classId: 'c-8a1', gender: 'Nam', status: 'Đang học', note: 'Tư duy thuật toán logic, vẽ sơ đồ khối rất chuẩn' },
  { id: 's-802', studentCode: 'HS0802', fullName: 'Ngô Thảo My', classId: 'c-8a1', gender: 'Nữ', status: 'Đang học', note: 'Cẩn thận khi viết từng bước thuật toán bằng ngôn ngữ tự nhiên' },
  { id: 's-803', studentCode: 'HS0803', fullName: 'Võ Minh Quân', classId: 'c-8a1', gender: 'Nam', status: 'Đang học', note: 'Cần chú ý điều kiện dừng của vòng lặp' },
  { id: 's-804', studentCode: 'HS0804', fullName: 'Lý Diệu Anh', classId: 'c-8a1', gender: 'Nữ', status: 'Đang học', note: 'Chăm chỉ, chịu khó tìm hiểu các bài toán thuật toán nâng cao' },
  { id: 's-805', studentCode: 'HS0805', fullName: 'Hồ Tuấn Kiệt', classId: 'c-8a1', gender: 'Nam', status: 'Đang học', note: 'Có tiến bộ rõ rệt trong việc gỡ lỗi thuật toán' },

  // Lớp 9A1
  { id: 's-901', studentCode: 'HS0901', fullName: 'Dương Khánh Linh', classId: 'c-9a1', gender: 'Nữ', status: 'Đang học', note: 'Học lực xuất sắc môn Tin học, khả năng lập trình tự học cao' },
  { id: 's-902', studentCode: 'HS0902', fullName: 'Vũ Đức Thịnh', classId: 'c-9a1', gender: 'Nam', status: 'Đang học', note: 'Cần rèn luyện thêm kỹ năng xử lý biến và danh sách trong code', needAttention: true },
  { id: 's-903', studentCode: 'HS0903', fullName: 'Trần Bích Phương', classId: 'c-9a1', gender: 'Nữ', status: 'Đang học', note: 'Thiết kế giao diện phần mềm sinh động, logic chặt chẽ' },
  { id: 's-904', studentCode: 'HS0904', fullName: 'Lê Hoàng Long', classId: 'c-9a1', gender: 'Nam', status: 'Đang học', note: 'Sáng tạo trong ý tưởng kịch bản trò chơi lập trình' },
  { id: 's-905', studentCode: 'HS0905', fullName: 'Nguyễn Ngọc Yến', classId: 'c-9a1', gender: 'Nữ', status: 'Đang học', note: 'Ghi chép lý thuyết cẩn thận, thực hành phòng máy nghiêm túc' }
];

export const initialLessons: Lesson[] = [
  {
    id: 'l-01',
    title: 'Khái niệm Thông tin và Dữ liệu - Thiết bị vào/ra của máy tính',
    classId: 'c-6a1',
    topic: 'Chủ đề: Máy tính và cộng đồng',
    objectives: 'Phân biệt thông tin và dữ liệu; nhận biết các thiết bị vào/ra cơ bản của máy tính để bàn và laptop.',
    summary: 'Tìm hiểu cách máy tính thu nhận, xử lý và truyền tải thông tin; quy tắc an toàn phòng máy tính.',
    teachDate: '2026-09-18',
    status: 'Đang dạy'
  },
  {
    id: 'l-02',
    title: 'Thực hành: Định dạng văn bản và chèn bảng biểu số liệu',
    classId: 'c-6a1',
    topic: 'Chủ đề: Soạn thảo văn bản và trình chiếu',
    objectives: 'Biết chọn font chữ, cỡ chữ, căn lề và định dạng bảng biểu báo cáo rõ ràng.',
    summary: 'Thực hành trên phần mềm soạn thảo: tạo bảng thời khóa biểu và danh sách kiểm tra.',
    teachDate: '2026-09-22',
    status: 'Chưa dạy'
  },
  {
    id: 'l-03',
    title: 'Làm quen với Bảng tính điện tử (Excel/Google Sheets) và nhập dữ liệu',
    classId: 'c-7a1',
    topic: 'Chủ đề: Xử lý dữ liệu bảng tính',
    objectives: 'Nhận biết các thành phần giao diện bảng tính: ô tính, hàng, cột, thanh công thức và nhập dữ liệu.',
    summary: 'Thực hành nhập bảng điểm học kỳ, căn chỉnh độ rộng cột và định dạng số thập phân.',
    teachDate: '2026-09-17',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-04',
    title: 'Sử dụng các hàm tính toán cơ bản: SUM, AVERAGE, MAX, MIN',
    classId: 'c-7a1',
    topic: 'Chủ đề: Tính toán tự động trên bảng tính',
    objectives: 'Cú pháp và cách sử dụng các hàm thống kê phổ biến; sao chép công thức tự động.',
    summary: 'Áp dụng hàm tính tổng và điểm trung bình cho bảng tổng kết lớp 7A1.',
    teachDate: '2026-09-19',
    status: 'Đang dạy'
  },
  {
    id: 'l-05',
    title: 'Thuật toán: Khái niệm, cách mô tả bằng liệt kê và sơ đồ khối',
    classId: 'c-8a1',
    topic: 'Chủ đề: Tư duy giải thuật và lập trình',
    objectives: 'Hiểu tính xác định, tính hữu hạn của thuật toán; vẽ các khối hình chuẩn trong sơ đồ thuật toán.',
    summary: 'Phân tích thuật toán tìm số lớn nhất trong hai số và bài toán tính tiền điện.',
    teachDate: '2026-09-18',
    status: 'Đang dạy'
  },
  {
    id: 'l-06',
    title: 'Lập trình trực quan: Cấu trúc rẽ nhánh Nếu - Thì và Vòng lặp',
    classId: 'c-9a1',
    topic: 'Chủ đề: Phát triển phần mềm ứng dụng',
    objectives: 'Áp dụng khối lệnh điều kiện và khối lệnh lặp để điều khiển nhân vật theo kịch bản.',
    summary: 'Xây dựng dự án mô phỏng chuyển động của phương tiện giao thông trên màn hình.',
    teachDate: '2026-09-16',
    status: 'Đã hoàn thành'
  },
  {
    id: 'l-07',
    title: 'An toàn dữ liệu, phòng tránh virus và văn hóa số trên mạng xã hội',
    classId: 'c-9a1',
    topic: 'Chủ đề: Đạo đức, pháp luật và văn hóa số',
    objectives: 'Nhận diện các hình thức lừa đảo trực tuyến, bảo mật mật khẩu và bản quyền phần mềm số.',
    summary: 'Thảo luận tình huống thực tế về chia sẻ thông tin cá nhân và tác quyền số.',
    teachDate: '2026-09-25',
    status: 'Chưa dạy'
  }
];

export const initialTasks: LearningTask[] = [
  {
    id: 't-01',
    title: 'Tạo cây thư mục môn Tin học trên máy tính cá nhân',
    classId: 'c-6a1',
    lessonId: 'l-01',
    description: 'Tạo thư mục chính mang tên học sinh, bên trong có 4 thư mục con: BaiHoc, ThucHanh, KiemTra, TaiLieu.',
    dueDate: '2026-09-19',
    priority: 'Bình thường',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-601', 's-602', 's-604', 's-606']
  },
  {
    id: 't-02',
    title: 'Thực hành tạo bảng thời khóa biểu tuần bằng phần mềm soạn thảo',
    classId: 'c-6a1',
    lessonId: 'l-02',
    description: 'Yêu cầu có tiêu đề chữ in hoa căn giữa, định dạng màu nền các ô tiêu đề và căn lề đúng chuẩn.',
    dueDate: '2026-09-20',
    priority: 'Quan trọng',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-602', 's-604']
  },
  {
    id: 't-03',
    title: 'Tính điểm trung bình và xếp loại học tập trên bảng tính Excel',
    classId: 'c-7a1',
    lessonId: 'l-04',
    description: 'Sử dụng hàm AVERAGE tính điểm trung bình cho 5 bạn học sinh và dùng hàm MAX/MIN tìm điểm cao nhất/thấp nhất.',
    dueDate: '2026-09-19',
    priority: 'Quan trọng',
    status: 'Đang thực hiện',
    completedStudentIds: ['s-701', 's-702', 's-704', 's-705']
  },
  {
    id: 't-04',
    title: 'Vẽ sơ đồ khối thuật toán kiểm tra một số nguyên là số chẵn hay lẻ',
    classId: 'c-8a1',
    lessonId: 'l-05',
    description: 'Vẽ trên giấy hoặc công cụ vẽ số, có đầy đủ khối bắt đầu, nhập số n, khối rẽ nhánh điều kiện và kết thúc.',
    dueDate: '2026-09-21',
    priority: 'Khẩn cấp',
    status: 'Đã giao',
    completedStudentIds: ['s-801', 's-802', 's-804']
  },
  {
    id: 't-05',
    title: 'Hoàn thành dự án mini Lập trình trò chơi né chướng ngại vật',
    classId: 'c-9a1',
    lessonId: 'l-06',
    description: 'Lập trình cho nhân vật di chuyển bằng phím mũi tên và tăng điểm khi né được vật rơi từ trên xuống.',
    dueDate: '2026-09-18',
    priority: 'Quan trọng',
    status: 'Đã hoàn thành',
    completedStudentIds: ['s-901', 's-902', 's-903', 's-904', 's-905']
  },
  {
    id: 't-06',
    title: 'Đọc trước bài An toàn thông tin và liệt kê 3 dấu hiệu email lừa đảo',
    classId: 'c-9a1',
    lessonId: 'l-07',
    description: 'Ghi lại các dấu hiệu nhận diện liên kết độc hại và cách phòng tránh khi duyệt web.',
    dueDate: '2026-09-24',
    priority: 'Bình thường',
    status: 'Chưa giao',
    completedStudentIds: []
  }
];

export const initialGrades: GradeEntry[] = [
  // Lớp 6A1
  { id: 'g-01', studentId: 's-601', classId: 'c-6a1', activityTitle: 'Thực hành thao tác hệ điều hành & Quản lý tệp', score: 8.5, date: '2026-09-15', note: 'Thao tác nhanh, tạo thư mục đúng cấu trúc' },
  { id: 'g-02', studentId: 's-602', classId: 'c-6a1', activityTitle: 'Thực hành thao tác hệ điều hành & Quản lý tệp', score: 9.0, date: '2026-09-15', note: 'Đặt tên tệp khoa học, gõ bàn phím lưu loát' },
  { id: 'g-03', studentId: 's-603', classId: 'c-6a1', activityTitle: 'Thực hành thao tác hệ điều hành & Quản lý tệp', score: 6.0, date: '2026-09-15', note: 'Còn nhầm lẫn giữa sao chép và di chuyển tệp' },
  { id: 'g-04', studentId: 's-604', classId: 'c-6a1', activityTitle: 'Thực hành thao tác hệ điều hành & Quản lý tệp', score: 8.0, date: '2026-09-15', note: 'Nắm chắc kiến thức thiết bị ngoại vi' },
  { id: 'g-05', studentId: 's-605', classId: 'c-6a1', activityTitle: 'Thực hành thao tác hệ điều hành & Quản lý tệp', score: 5.5, date: '2026-09-15', note: 'Cần chú ý cẩn thận khi lưu sản phẩm bài thực hành' },
  { id: 'g-06', studentId: 's-606', classId: 'c-6a1', activityTitle: 'Thực hành thao tác hệ điều hành & Quản lý tệp', score: 8.5, date: '2026-09-15', note: 'Thực hiện đủ các bước, bài làm tốt' },

  // Lớp 7A1
  { id: 'g-07', studentId: 's-701', classId: 'c-7a1', activityTitle: 'Thực hành Bảng tính Excel & Hàm SUM/AVERAGE', score: 8.0, date: '2026-09-14', note: 'Viết công thức chuẩn xác' },
  { id: 'g-08', studentId: 's-702', classId: 'c-7a1', activityTitle: 'Thực hành Bảng tính Excel & Hàm SUM/AVERAGE', score: 8.5, date: '2026-09-14', note: 'Trình bày bảng tính cân đối, rõ ràng' },
  { id: 'g-09', studentId: 's-703', classId: 'c-7a1', activityTitle: 'Thực hành Bảng tính Excel & Hàm SUM/AVERAGE', score: 6.0, date: '2026-09-14', note: 'Còn quên dấu bằng trước công thức tính' },
  { id: 'g-10', studentId: 's-704', classId: 'c-7a1', activityTitle: 'Thực hành Bảng tính Excel & Hàm SUM/AVERAGE', score: 9.0, date: '2026-09-14', note: 'Hiểu sâu về địa chỉ khối ô tính' },
  { id: 'g-11', studentId: 's-705', classId: 'c-7a1', activityTitle: 'Thực hành Bảng tính Excel & Hàm SUM/AVERAGE', score: 7.5, date: '2026-09-14', note: 'Bài làm đúng trọng tâm yêu cầu' },

  // Lớp 8A1
  { id: 'g-12', studentId: 's-801', classId: 'c-8a1', activityTitle: 'Kiểm tra 15 phút: Thuật toán & Sơ đồ khối', score: 8.5, date: '2026-09-16', note: 'Tư duy logic tốt, khối điều kiện chuẩn' },
  { id: 'g-13', studentId: 's-802', classId: 'c-8a1', activityTitle: 'Kiểm tra 15 phút: Thuật toán & Sơ đồ khối', score: 8.5, date: '2026-09-16', note: 'Diễn giải thuật toán mạch lạc' },
  { id: 'g-14', studentId: 's-803', classId: 'c-8a1', activityTitle: 'Kiểm tra 15 phút: Thuật toán & Sơ đồ khối', score: 7.0, date: '2026-09-16', note: 'Mũi tên chỉ hướng luồng thuật toán còn thiếu' },
  { id: 'g-15', studentId: 's-804', classId: 'c-8a1', activityTitle: 'Kiểm tra 15 phút: Thuật toán & Sơ đồ khối', score: 9.0, date: '2026-09-16', note: 'Thuật toán tối ưu, sơ đồ vẽ rất đẹp' },
  { id: 'g-16', studentId: 's-805', classId: 'c-8a1', activityTitle: 'Kiểm tra 15 phút: Thuật toán & Sơ đồ khối', score: 7.5, date: '2026-09-16', note: 'Nắm được các khối hình cơ bản' },

  // Lớp 9A1
  { id: 'g-17', studentId: 's-901', classId: 'c-9a1', activityTitle: 'Dự án Lập trình trực quan & Giải thuật số', score: 9.5, date: '2026-09-17', note: 'Sản phẩm chạy trơn tru, code gọn gàng xuất sắc' },
  { id: 'g-18', studentId: 's-902', classId: 'c-9a1', activityTitle: 'Dự án Lập trình trực quan & Giải thuật số', score: 6.5, date: '2026-09-17', note: 'Cần sửa lỗi nhân vật bị kẹt khi chạm biên' },
  { id: 'g-19', studentId: 's-903', classId: 'c-9a1', activityTitle: 'Dự án Lập trình trực quan & Giải thuật số', score: 9.0, date: '2026-09-17', note: 'Kịch bản trò chơi hấp dẫn, có âm thanh tương tác' },
  { id: 'g-20', studentId: 's-904', classId: 'c-9a1', activityTitle: 'Dự án Lập trình trực quan & Giải thuật số', score: 8.0, date: '2026-09-17', note: 'Ý tưởng sáng tạo, hoàn thành đúng thời hạn' },
  { id: 'g-21', studentId: 's-905', classId: 'c-9a1', activityTitle: 'Dự án Lập trình trực quan & Giải thuật số', score: 8.5, date: '2026-09-17', note: 'Đồ họa đẹp mắt, hoạt động đúng kịch bản đề ra' }
];

export const initialComments: StudentComment[] = [
  {
    id: 'cm-01',
    studentId: 's-601',
    classId: 'c-6a1',
    date: '2026-09-16',
    content: 'Thao tác chuột và bàn phím rất chuẩn xác, gõ 10 ngón đúng vị trí, tốc độ gõ bài nhanh.',
    skillCategory: 'Thực hành máy tính',
    note: 'Đề xuất hướng dẫn bạn làm trưởng nhóm thực hành phòng máy'
  },
  {
    id: 'cm-02',
    studentId: 's-603',
    classId: 'c-6a1',
    date: '2026-09-17',
    content: 'Em nắm được kiến thức lý thuyết nhưng thao tác lưu tệp còn chậm, cần rèn luyện quản lý thư mục.',
    skillCategory: 'Lý thuyết & An toàn số',
    note: 'Thầy đã xếp em ngồi gần giáo viên để hỗ trợ kịp thời trong giờ thực hành'
  },
  {
    id: 'cm-03',
    studentId: 's-704',
    classId: 'c-7a1',
    date: '2026-09-15',
    content: 'Thiết kế bảng tính khoa học, áp dụng thành thạo các hàm toán học và thống kê cơ bản.',
    skillCategory: 'Thực hành máy tính',
    note: 'Khen ngợi trước lớp về kỹ năng xử lý số liệu'
  },
  {
    id: 'cm-04',
    studentId: 's-801',
    classId: 'c-8a1',
    date: '2026-09-16',
    content: 'Có tư duy thuật toán sắc bén, biết cách phân rã bài toán lớn thành các bước con tuần tự rõ ràng.',
    skillCategory: 'Tư duy thuật toán',
    note: 'Khuyến khích tìm hiểu thêm về bài toán sắp xếp và tìm kiếm'
  },
  {
    id: 'cm-05',
    studentId: 's-901',
    classId: 'c-9a1',
    date: '2026-09-17',
    content: 'Kỹ năng lập trình trực quan rất xuất sắc, khả năng tư duy giải thuật độc lập và phát triển dự án tốt.',
    skillCategory: 'Tư duy thuật toán',
    note: 'Định hướng bồi dưỡng đội tuyển học sinh giỏi Tin học'
  }
];

export const initialActivityLogs: ActivityLog[] = [
  { id: 'act-01', timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(), type: 'grade', action: 'Đã cập nhật điểm bài "Dự án Lập trình trực quan" lớp 9A1' },
  { id: 'act-02', timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), type: 'task', action: 'Đã giao nhiệm vụ mới: "Vẽ sơ đồ khối thuật toán" cho lớp 8A1' },
  { id: 'act-03', timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), type: 'lesson', action: 'Đã cập nhật trạng thái bài học Bảng tính Excel lớp 7A1 sang "Đang dạy"' },
  { id: 'act-04', timestamp: new Date(Date.now() - 1000 * 60 * 360).toISOString(), type: 'comment', action: 'Đã thêm nhận xét kỹ năng thực hành cho học sinh Lê Minh Đức' },
  { id: 'act-05', timestamp: new Date(Date.now() - 1000 * 60 * 500).toISOString(), type: 'student', action: 'Đã kiểm tra và đồng bộ danh sách học sinh bộ môn Tin học' }
];

export const initialAppData: AppData = {
  teacherProfile: {
    name: 'Thầy NGUYỄN THANH TÙNG',
    subject: 'Tin học',
    school: 'THCS LOL37 Nghệ An'
  },
  classes: initialClasses,
  students: initialStudents,
  lessons: initialLessons,
  tasks: initialTasks,
  grades: initialGrades,
  comments: initialComments,
  activityLogs: initialActivityLogs,
  soundEnabled: false // Âm thanh tắt mặc định
};

# Xưởng Video Affiliate

Web app miễn phí để làm video affiliate dọc 9:16 cho **TikTok Shop, Shopee Video, Facebook Reels**. Chạy hoàn toàn trong trình duyệt: không cần máy chủ, không cần API key.

**Mở app:** https://tangduong1313.github.io/video-affiliate/

## 4 bước

1. **Sản phẩm**: nhập tên, giá, giá gốc, mã giảm giá, điểm nổi bật; chọn nền tảng, thời lượng (15–60 giây) và kiểu kịch bản (Review thật, Đập hộp, Trước – Sau, Top lý do, Vấn đề → Giải pháp, Sale gấp). Tải ảnh/clip sản phẩm lên.
2. **Kịch bản**: app tự chia cảnh, viết chữ trên màn hình và lời đọc, tự tính giây cho từng cảnh. Sửa thoải mái. Có caption + hashtag theo nền tảng, chép kịch bản, tải phụ đề `.srt`.
3. **Prompt Kling**: prompt tiếng Anh cho từng cảnh + negative prompt, để dán vào Kling AI (Image to Video, 9:16). Clip tải về thì thả lại vào app.
4. **Dựng video**: gán ảnh/clip cho từng cảnh, hiệu ứng chuyển động, kiểu chữ, khung giá có gạch giá gốc và % giảm, mũi tên kêu gọi mua, tên kênh, nhạc nền có sẵn (tự tổng hợp, không dính bản quyền) hoặc nhạc của mình, thu giọng từng cảnh bằng micro. Bấm **Xuất video**: ra file MP4 (Chrome/Edge bản mới) hoặc WEBM.

## Ghi chú

- Dự án lưu ngay trên trình duyệt của máy đang dùng (IndexedDB). Xoá dữ liệu trình duyệt thì mất. Máy khác không thấy.
- Lúc xuất, video chạy thật một lượt để ghi: giữ tab mở cho tới khi xong.
- Giọng AI: dán lời đọc vào CapCut (chuyển văn bản thành giọng nói), xuất file âm thanh rồi tải lên ở mục "Tải giọng đọc cả video".
- Clip AI phải giống sản phẩm thật, nếu không dễ bị báo cáo và mất hoa hồng.

## Cấu trúc

`index.html` chứa toàn bộ app (HTML + CSS + JS, không thư viện ngoài, chỉ thêm font Be Vietnam Pro). `sw.js` + `manifest.webmanifest` cho phép cài lên màn hình chính.

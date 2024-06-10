import React from "react";

export default function RemoveProductById() {
  async function removeProductById(id: any) {
    try {
      const response = await fetch(`http://localhost:8000/product/${id}`, {
        method: "DELETE",
      });

      // Kiểm tra nếu phản hồi không thành công
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Chuyển đổi phản hồi thành định dạng JSON nếu phản hồi có nội dung
      const result = await response.json();

      // Hiển thị kết quả trả về từ server ra console
      console.log(result);
    } catch (error) {
      // Bắt và hiển thị lỗi nếu có vấn đề xảy ra trong quá trình gọi API
      console.error("Error removing product:", error);
    }
  }

  // Gọi hàm để xóa sản phẩm với id bất kỳ
  removeProductById(1); // Thay thế 1 bằng ID của sản phẩm bạn muốn xóa

  return <div>RemoveProductById</div>;
}

import React from "react";

export default function UpDateProduct() {
  async function updateProductById(id: any) {
    // Tạo đối tượng sản phẩm với các thông tin cần cập nhật
    const updatedProduct = {
      name: "Sản phẩm cập nhật",
      price: 120000,
      description: "Mô tả sản phẩm cập nhật",
      category: "Danh mục sản phẩm cập nhật",
    };

    try {
      const response = await fetch(`http://localhost:8000/product/${id}`, {
        method: "PUT", // Sử dụng phương thức PUT để cập nhật sản phẩm
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
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
      console.error("Error updating product:", error);
    }
  }

  // Gọi hàm để cập nhật sản phẩm với id bất kỳ
  updateProductById(4); // Thay thế 1 bằng ID của sản phẩm bạn muốn cập nhật

  return <div>UpDateProduct</div>;
}

import React from "react";

export default function CreateProduct() {
  async function createProduct() {
    // Tạo đối tượng sản phẩm với các thông tin cần thiết
    const product = {
      name: "Sản phẩm mới",
      price: 100000,
      description: "Mô tả sản phẩm mới",
      category: "Danh mục sản phẩm",
    };

    try {
      const response = await fetch("http://localhost:8000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
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
      console.error("Error creating product:", error);
    }
  }

  // Gọi hàm để tạo sản phẩm mới
  createProduct();

  return <div>CreateProduct</div>;
}

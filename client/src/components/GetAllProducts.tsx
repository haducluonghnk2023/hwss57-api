import React from "react";

export default function GetAllProducts() {
  async function getAllProduct() {
    try {
      // Thay thế URL dưới đây bằng URL của API mà bạn muốn gọi
      const response = await fetch("http://localhost:8000/product");

      // Kiểm tra nếu phản hồi không thành công
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Chuyển đổi phản hồi thành định dạng JSON
      const products = await response.json();

      // Hiển thị danh sách sản phẩm ra console
      console.log(products);
    } catch (error) {
      // Bắt và hiển thị lỗi nếu có vấn đề xảy ra trong quá trình gọi API
      console.error("Error fetching products:", error);
    }
  }

  // Gọi hàm để lấy và hiển thị danh sách sản phẩm
  getAllProduct();

  return <div>GetAllProducts</div>;
}

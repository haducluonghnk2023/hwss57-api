import React from "react";

export default function GetProductById() {
  async function getProductById(id: any) {
    try {
      const response = await fetch(`http://localhost:8000/product/${id}`);

      // Kiểm tra nếu phản hồi không thành công
      if (!response.ok) {
        if (response.status === 404) {
          console.log("Không tìm thấy bản ghi");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return;
      }

      // Chuyển đổi phản hồi thành định dạng JSON
      const product = await response.json();

      // Hiển thị thông tin sản phẩm ra console
      console.log(product);
    } catch (error) {
      // Bắt và hiển thị lỗi nếu có vấn đề xảy ra trong quá trình gọi API
      console.error("Error fetching product:", error);
    }
  }

  // Gọi hàm để lấy và hiển thị thông tin sản phẩm với id bất kỳ
  getProductById(2); // Thay thế 2 bằng ID của sản phẩm bạn muốn lấy thông tin

  return <div>GetProductById</div>;
}

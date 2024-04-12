const Product=require("../models/products.model");
module.exports.home =async (req,res)=>{
    try {
        // Thực hiện truy vấn để lấy dữ liệu từ cơ sở dữ liệu
        const data = await Product.find(); // Ví dụ: Lấy tất cả các bản ghi từ cơ sở dữ liệu
        // Gửi dữ liệu dưới dạng JSON
        res.json(data);
    } catch (error) {
        // Xử lý lỗi nếu có
        console.log("Loi")
       
    }
   // res.send("ok")
}
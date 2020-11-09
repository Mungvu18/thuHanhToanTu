let inputWidth;
let inputHeight;
//Sử dụng hàm prompt để nhập dữ liệu đầu vào của kích thước hình chữ nhật
inputHeight = prompt('Mời bạn nhập vào chiều cao:');
inputWidth = prompt("mời bạn nhập vào chiều dài");
//Sử dụng hàm parseInt() để chuyển kiểu dữ liệu từ chuỗi sang số nguyên
inputWidth = parseInt(inputWidth);
inputHeight = parseInt(inputHeight);
// diện tích hình chữ nhật
let area = inputHeight * inputWidth;
document.write("the area is :" + area);
/* như vậy trong bài này để tính được diện tính hình chữ nhật
chúng ta phải nhập dữ liệu từ bàn phím bằng hàm prompt và dữ liệu được chuyển
kieur từ chuỗi sang int bằng hàm parseInt(), hiển thị kết quả bằng hàm document.write()
hoặc alert(); hoặc document.getElementById("").innerHTML hoặc console.log()
 */





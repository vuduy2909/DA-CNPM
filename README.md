This is a web application that allows you to post bodybuilding exercises and users can search for exercises that are suitable for them by entering their body measurements.
This is an application developed by React.js and the server is Java following the MVC Spring Boot Model

The website is still in the process of developing additional features:
Pay to view premium exercises

To run the program:
First, I recommend that you install some extensions for VS Code theo link :
https://documents.aptech.io/docs/aptech-mern/html/session-01?fbclid=IwZXh0bgNhZW0CMTAAAR2BtXT2FDOY6tvSOXBfh3xJwL_TBeODo4gXeQGfmzpIV68GBJORO4qV4IM_aem_AUxOPc2p-Y1mTkoc8PYUi6OGzjAH0xNOglRg70ciCgTjquBlZNW-ORfwf4zNedVYyuqwxlUjoWsf4F5sQlBKo_b3

Afterward :
You need to download MySQL WorkBench and set localhost to port 3306. And you must set an easy-to-remember password

You create a database called wellness_navigator_gym. Go to the server section on the toolbar, select Data Import and select Import from Separate-Contained File and point to the location where the wellness_navigator_gym.sql file is located.

Then check whether the tables in the Database have data or not.

Important : You must open the Kyo-gym BE folder with Intelliji:
You must go to the application.properties file and replace the line:

spring.datasource.password= 29092002 to

spring.datasource.password= your MySQL WorkBench password

You must open the Kyo-gym FE folder with VS Code:
Then:

pip install npm

npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

In the project directory, you can run:

npm run start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

Đây là ứng dụng web cho phép đăng tải các bài tập thể hình và người dùng có thể tìm kiếm các bài tập phù hợp với mình bằng cách nhập số đo cơ thể của mình.
Đây là một ứng dụng được phát triển bởi React.js và máy chủ là Java theo mô hình MVC Spring Boot Model

Trang web vẫn đang trong quá trình phát triển các tính năng bổ sung:
Trả tiền để xem các bài tập cao cấp

Để chạy chương trình:
Trước tiên, tôi khuyên bạn nên cài đặt một số tiện ích mở rộng cho VS Code theo link:
https://documents.aptech.io/docs/aptech-mern/html/session-01?fbclid=IwZXh0bgNhZW0CMTAAAR2BtXT2FDOY6tvSOXBfh3xJwL_TBeODo4gXeQGfmzpIV68GBJORO4qV4IM_aem_AUxOPc2p-Y1mTkoc8PYUi6OGzjAH0xNO glRg70ciCgTjquBlZNW-ORfwf4zNedVYyuqwxlUjoWsf4F5sQlBKo_b3

Sau đó:
Bạn cần tải MySQL WorkBench và set localhost port 3306. Và phải đặt mật khẩu dễ nhớ
Bạn tạo một cơ sở dữ liệu có tên là Wellness_navigator_gym. Đi tới phần máy chủ trên thanh công cụ, chọn Nhập dữ liệu rồi chọn Nhập từ tệp có chứa riêng rồi trỏ đến vị trí chứa tệp well_navigator_gym.sql.
Sau đó kiểm tra xem các bảng trong Database có dữ liệu hay không.

Quan trọng: Bạn phải mở thư mục Kyo-gym BE bằng Intelliji:
Bạn phải vào file application.properties và thay thế dòng:
spring.datasource.password= 29092002 tới
spring.datasource.password= mật khẩu MySQL WorkBench của bạn

Bạn phải mở thư mục Kyo-gym FE bằng VS Code:
Sau đó:

pip install npm

npm run build

Xây dựng ứng dụng để sản xuất vào thư mục bản dựng.
Nó kết hợp chính xác React trong chế độ sản xuất và tối ưu hóa bản dựng để có hiệu suất tốt nhất.

Trong thư mục dự án, bạn có thể chạy:

npm run start
Chạy ứng dụng ở chế độ phát triển.

Mở http://localhost:3000 để xem nó trong trình duyệt của bạn.

Trang sẽ tải lại khi bạn thực hiện thay đổi.
Bạn cũng có thể thấy bất kỳ lỗi mã nguồn nào trong bảng điều khiển.

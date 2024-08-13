![alt text](image.png)
ƒ (Dynamic Server-Side Rendered - SSR):

Ký hiệu này biểu thị rằng trang sẽ được "render" động trên máy chủ mỗi khi có yêu cầu từ người dùng.
Trang này yêu cầu dữ liệu từ máy chủ trong quá trình render, thường thông qua getServerSideProps hoặc getInitialProps.
Mỗi lần người dùng yêu cầu trang này, nó sẽ được "render" lại trên máy chủ và sau đó gửi về trình duyệt.

![alt text](image-1.png)

○ (Static HTML):

Ký hiệu này biểu thị rằng trang đã được "pre-rendered" (render sẵn) thành một file HTML tĩnh trong quá trình build.
Những trang này không có bất kỳ dữ liệu động nào từ máy chủ khi được yêu cầu. Chúng có thể được phân phối trực tiếp từ CDN mà không cần xử lý trên máy chủ.
Điều này xảy ra với các trang không sử dụng getStaticProps, getServerSideProps, hoặc getInitialProps.

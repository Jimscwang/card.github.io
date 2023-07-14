(()=>{
    const url = 'https://vue3-course-api.hexschool.io/v2'; // 請加入站點
    const path = 'jimwang-aitools'; // 請加入個人 API Path

    const fileInput = document.querySelector('#file');

    fileInput.addEventListener('change', upload);

    function upload() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)aiToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
        // #1 撰寫上傳的 API 事件
        console.dir(fileInput);
        const file = fileInput.files[0];
        console.log(file);

        const formData = new FormData();
        formData.append('file-to-upload', file);

        axios.post(`${url}/api/${path}/admin/upload`, formData)
            .then((res)=>{
                console.log(res);
            })
            //失敗結果
            .catch((error)=>{
                console.log(error.response);
            })
    }
})()
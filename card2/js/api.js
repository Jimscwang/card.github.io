(()=>{

    const url = 'https://vue3-course-api.hexschool.io/v2'; // 請加入站點
    const path = 'jimwang-aitools'; // 請加入個人 API Path
    
    // #1 如何串接 API 資料
    const emailInput = document.querySelector('#email');
    const pwInput = document.querySelector('#password');
    const loginBtn = document.querySelector('#login');
    const checkBtn = document.querySelector('#check');
    const getProductsBtn = document.querySelector('#getProducts');
    const addProductBtn = document.querySelector('#addProduct');
    const delProductBtn = document.querySelector('#delProduct');
    
    loginBtn.addEventListener('click', login);
    
    function login() {
    const username = emailInput.value;
    const password = pwInput.value;
    
    const user = {
        username,
        password
    }

    // console.log(username, password);
    
    // #2 發送 API 至遠端並登入（並儲存 Token）
    axios.post(`${url}/admin/signin`, user)
        //成功結果
        .then((res)=>{
            console.log(res);
            const { token, expired } = res.data;
            console.log(token, expired);
            document.cookie = `aiToken=${token}; expires=${new Date(expired)};`;
        })
        //失敗結果
        .catch((error)=>{
            console.dir(error);
        })
    
    }
    
    checkBtn.addEventListener('click', checkLogin);
    function checkLogin(params) {
    // #3 取得 Token（Token 僅需要設定一次）
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)aiToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(token);
    axios.defaults.headers.common['Authorization'] = token;
    
    
    // #4  確認是否登入
    axios.post(`${url}/api/user/check`)
        .then((res)=>{
            console.log(res.data);
        })
        //失敗結果
        .catch((error)=>{
            console.dir(error);
        })
    
    }

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)aiToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;
    
    getProductsBtn.addEventListener('click', getProducts)
    function getProducts() {
    // #5 取得後台產品列表
    axios.get(`${url}/api/${path}/admin/products`)
        .then((res)=>{
            console.log(res.data);
        })
        //失敗結果
        .catch((error)=>{
            console.dir(error);
        })
    }
    
    
    addProductBtn.addEventListener('click', addProduct)
    function addProduct() {
    
    const product = {
        data: {
        title: '[賣]動物園造型衣服6', 
        category: '衣服2',
        origin_price: 100,
        price: 300,
        unit: '個',
        description: 'Sit down please 名設計師設計',
        content: '這是內容',
        is_enabled: 1,
        imageUrl: 'https://images.unsplash.com/photo-1573662012516-5cb4399006e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
        }
        
    }
    
    // #6 新增一個產品
    axios.post(`${url}/api/${path}/admin/product`, product)
        .then((res)=>{
            console.log(res.data);
        })
        //失敗結果
        .catch((error)=>{
            console.dir(error);
        })
    }
    
    
    delProductBtn.addEventListener('click', removeProduct)
    function removeProduct() {
    // -N_DSTKmUiY394CZZh22
    // #7 刪除一個產品
    axios.delete(`${url}/api/${path}/admin/product/-N_DSTKmUiY394CZZh22`)
        .then((res)=>{
            console.log(res.data);
        })
        //失敗結果
        .catch((error)=>{
            console.dir(error);
        })
    }

})()
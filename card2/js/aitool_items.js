(()=>{
    const url = 'https://vue3-course-api.hexschool.io/v2'; // 請加入站點
    const path = 'jimwang-aitools'; // 請加入個人 API Path

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)aiToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;

    const altool_items = document.querySelector('.altool_items');

    function getProducts() {
        axios.get(`${url}/api/${path}/admin/products`)
            .then((res)=>{
                // console.log(res.data.products);
                altool_items.innerHTML = ``;
                let nodes = ``;
                res.data.products.forEach(e => {
                    // console.log(e.aimodel);

                    let node = `<li class="col-lg-4 col-md-6">
                                    <div class="ai-tool-card card bg-white text-black overflow-hidden border-secondary">
                                        <div class="overflow-hidden">
                                            <img class="w-100" src=${e.imageUrl} alt=${e.title}>
                                        </div>
                                        <h5 class="card-title px-6 pt-4">${e.title}</h5>
                                        <p class="card-info px-6 pb-4 flex-grow-1">${e.dexcription}</p>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <p class="fw-bold">AI 模型</p>
                                            <p>${e.aimodel}</p>
                                        </div>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <a href="#" alt=${e.category}># ${e.category}</a>
                                            <a target="_blank" href="#" title="Chatbot Builder"><span class="material-icons d-block">share</span></a>
                                        </div>
                                    </div>
                                </li>`;

                                nodes += node;
                
                    
                });
                altool_items.innerHTML += nodes;
            })
            //失敗結果
            .catch((error)=>{
                console.dir(error);
            })
    }
    getProducts();


    //console.log(altool_items.innerHTML);
    const item_list = document.querySelector('.item-list');
    const item_list_a = item_list.querySelectorAll('a');

    
    item_list.addEventListener('click', function(item){
        item.preventDefault();

        item_list_a.forEach(e=>{
            e.classList.remove('item-lits-active');
        })

        item.target.classList.add('item-lits-active');

        if (item.target.innerHTML === "全部") getProducts();
        else
        {
            axios.get(`${url}/api/${path}/admin/products`)
            .then((res)=>{
                altool_items.innerHTML = ``;
                let nodes = ``;
                res.data.products.forEach(e => {
                    if (e.category == item.target.innerHTML)
                    {
                        let node = `<li class="col-lg-4 col-md-6">
                                    <div class="ai-tool-card card bg-white text-black overflow-hidden border-secondary">
                                        <div class="overflow-hidden">
                                            <img class="w-100" src=${e.imageUrl} alt=${e.title}>
                                        </div>
                                        <h5 class="card-title px-6 pt-4">${e.title}</h5>
                                        <p class="card-info px-6 pb-4 flex-grow-1">${e.dexcription}</p>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <p class="fw-bold">AI 模型</p>
                                            <p>${e.aimodel}</p>
                                        </div>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <a href="#" alt=${e.category}># ${e.category}</a>
                                            <a target="_blank" href="#" title="Chatbot Builder"><span class="material-icons d-block">share</span></a>
                                        </div>
                                    </div>
                                </li>`;
                
                                nodes += node;
                    }
 
                });
                altool_items.innerHTML += nodes;
            })
            //失敗結果
            .catch((error)=>{
                console.dir(error);
            })
        }

    },false)

    const item_menu = document.querySelector('.item-menu');

    item_menu.addEventListener('click', function(item){
        item.preventDefault();
        // console.log(item.target.innerHTML);
        // console.log(item.target.getAttribute("href"));

        item_list_a.forEach(e=>{
            e.classList.remove('item-lits-active');
        })

        if (item.target.innerHTML === "全部" || item.target.innerHTML === "所有模型") getProducts();
        else
        {
            axios.get(`${url}/api/${path}/admin/products`)
            .then((res)=>{
                altool_items.innerHTML = ``;
                let nodes = ``;
                let node = ``;
                res.data.products.forEach(e => {

                    if (item.target.getAttribute("href") === "category" && e.category == item.target.innerHTML)
                    {
                        node = `<li class="col-lg-4 col-md-6">
                                    <div class="ai-tool-card card bg-white text-black overflow-hidden border-secondary">
                                        <div class="overflow-hidden">
                                            <img class="w-100" src=${e.imageUrl} alt=${e.title}>
                                        </div>
                                        <h5 class="card-title px-6 pt-4">${e.title}</h5>
                                        <p class="card-info px-6 pb-4 flex-grow-1">${e.dexcription}</p>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <p class="fw-bold">AI 模型</p>
                                            <p>${e.aimodel}</p>
                                        </div>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <a href="#" alt=${e.category}># ${e.category}</a>
                                            <a target="_blank" href="#" title="Chatbot Builder"><span class="material-icons d-block">share</span></a>
                                        </div>
                                    </div>
                                </li>`;
                
                        nodes += node;
                    }
                    else if (item.target.getAttribute("href") === "aimodel" && e.aimodel == item.target.innerHTML)
                    {
                        node = `<li class="col-lg-4 col-md-6">
                                    <div class="ai-tool-card card bg-white text-black overflow-hidden border-secondary">
                                        <div class="overflow-hidden">
                                            <img class="w-100" src=${e.imageUrl} alt=${e.title}>
                                        </div>
                                        <h5 class="card-title px-6 pt-4">${e.title}</h5>
                                        <p class="card-info px-6 pb-4 flex-grow-1">${e.dexcription}</p>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <p class="fw-bold">AI 模型</p>
                                            <p>${e.aimodel}</p>
                                        </div>
                                        <div class="card-contant d-flex justify-content-between px-6 py-4">
                                            <a href="#" alt=${e.category}># ${e.category}</a>
                                            <a target="_blank" href="#" title="Chatbot Builder"><span class="material-icons d-block">share</span></a>
                                        </div>
                                    </div>
                                </li>`;
                
                         nodes += node;
                    }

                });
                altool_items.innerHTML += nodes;
            })
            //失敗結果
            .catch((error)=>{
                console.dir(error);
            })
        }


    }, false)

})()
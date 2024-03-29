(()=>{
    const url = 'https://vue3-course-api.hexschool.io/v2'; // 請加入站點
    const path = 'jimwang-aitools'; // 請加入個人 API Path

    const altool_items = document.querySelector('.altool_items');
    let allproducts = [];

    function getProducts() {
        axios.get(`${url}/api/${path}/products`)
        .then((res)=>{
            allproducts = res.data.products;
            postProducts();
        })
        //失敗結果
        .catch((error)=>{
            console.dir(error);
        })
    }
    getProducts();

    function postProducts() {
        altool_items.innerHTML = ``;
        let nodes = ``;
        allproducts.forEach(e => {

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
    }

    const item_list = document.querySelector('.item-list');
    const item_list_a = item_list.querySelectorAll('a');

    item_list.addEventListener('click', function(item){
        item.preventDefault();

        if (item.target.innerHTML === "全部") 
        {
            item_list_a.forEach(e=>{
                e.classList.remove('item-lits-active');
            })
    
            item.target.classList.add('item-lits-active');

            postProducts();
        }
        else if (item.target.innerHTML.length < 5)
        {   
            item_list_a.forEach(e=>{
                e.classList.remove('item-lits-active');
            })
    
            item.target.classList.add('item-lits-active');

            altool_items.innerHTML = ``;
            let nodes = ``;
            allproducts.forEach(e => {
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
        }

    },false)

    const item_menu = document.querySelector('.item-menu');
    item_menu.addEventListener('click', function(item){
        item.preventDefault();
        
        item_list_a.forEach(e=>{
            e.classList.remove('item-lits-active');
        })

        if (item.target.innerHTML === "全部" || item.target.innerHTML === "所有模型") postProducts();
        else if (item.target.innerHTML.length < 5)
        {
            altool_items.innerHTML = ``;
            let nodes = ``;
            let node = ``;
            allproducts.forEach(e => {

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

        }


    }, false)

})()
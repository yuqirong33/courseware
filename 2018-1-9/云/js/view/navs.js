const breadNav = t.$('.bread-nav')[0];   //面包屑盒子
const checkall = t.$('.checkall i')[0];  //全选

/*
    <a href="javascript">微云</a>
	<span>我的音乐</span>
*/
renderNav(0);
//生成面包屑
function renderNav(id){
    let parents = t.getParents(id).reverse();  //找到每一个文件夹的父级元素 父级元素为一堆
    let html = '';
    parents.forEach((e,i)=>{  //遍历父级元素
        if(i === parents.length-1){ //如果父级元素为最后一个 那么模板中span结尾
            html += `<span data-index="${e.id}">${e.title}</span>`;
        }else{
            //其他添加a
            html += `<a href="javascript:;" data-index="${e.id}">${e.title}</a>`
        }
    });
    breadNav.innerHTML = html;  //渲染面包屑

    //点击面包屑
    breadNav.onclick = function(ev){
        /*
          在渲染模板的时候给了自定义属性为 data-index=id 
          这一步是为了操作点击面包屑找到父级内容强行转化为数字类型  然后再次渲染数据 
        */
        let id = ev.target.dataset.index*1;  //获取到事件源的自定义属性把id取出来  这时候就知道是在父级在第几层的位置上  
        renderNav(id);  //改变了事件源  那么就改变了数据  再次调用面包屑渲染数据  相当于更新
        renderFolder(id);   //面包屑改变了 那么对应的文件夹也要跟着改变  再次渲染文件夹数据  相当于更新数据
    }
}








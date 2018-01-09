const folders = t.$('.folders')[0];  //放文件夹的大盒子
const fEmpty = t.$('.f-empty')[0];   //暂无文件

renderFolder(0);
//渲染文件夹
function renderFolder(id){
    folders.innerHTML = '';  //默认文件夹内容为空
    checkall.className = 'checkedAll';  //默认全选按钮为不勾选状态
    let childs = t.getchilds(id);    //声明一个变量为childs把数据中找到的子级赋值给这个变量

    if(!childs.length){  //判断如果没有子级那么显示暂无文件
        fEmpty.style.display = 'block';
    }else{
        fEmpty.style.display = 'none';
    }
    //i.class = checked
    childs.forEach((e,i)=>{  //遍历指定的子级有多少个 那么就创建多少个元素，并插入多少个文件夹
        const div = t.el('div','file-item',e.id);  //创建元素div
        const img = t.el('img');  //创建元素img
        img.src = 'img/folder-b.png';  //给img给一个图片路径
        img.ondblclick = function(){   //双击图片的时候执行事件
            renderNav(e.id);   //面包屑对应的内容
            renderFolder(e.id);   //每一次点击进去 再一次渲染文件夹 相当于刷新 点进去数据发生了变化
        } 
        const span = t.el('span','folder-name');  //创建元素span
        span.innerText = e.title;    //span的内容就是数据下对应的title
        const input = t.el('input','editor');  //创建元素input
        const ii = t.el('i');  //创建元素i 就是那个勾选框

        ii.onclick = function(){  //给每一个勾选框点击事件
            ii.classList.toggle('checked');   //改变勾选框的class
            div.classList.toggle('hov');  //同时改变勾选中的文件夹边框

            let divs = Array.from(folders.children);  //获取到文件夹的大盒子中有多少个子级，相当于看有多少个文件夹
            /*
                checkedAll没选中  checked选中  
                判断全选是否选中 查看大盒子下面的子级class是否都有hov 
                如果全部有那么就为选中状态 如果有一个没有hov就为不选中状态
            */
            checkall.className = divs.every(e=>e.classList.contains('hov'))?'checked':'checkedAll';
        }

        div.appendChild(img);  //将img插入到div中
        div.appendChild(span); //将span插入到div中
        div.appendChild(input);  //将input插入到div中
        div.appendChild(ii);   //将i插入到div中
        folders.appendChild(div);  //将div插入到文件夹的大盒子中
    });
}

//点击全选的时候给文件夹下面的子级元素  全部选中状态
checkall.onclick = function(){
    let divs = Array.from(folders.children); //获取到文件夹大盒子下面的子级(一堆)

    //点击全选框的class为 checked
    this.classList.toggle('checked');
    
    //如果全选框的class为checked 那么文件夹子级下面的全部为勾选状态
    if(this.classList.contains('checked')){
        divs.forEach(e=>{  //循环遍历文件夹大盒子下面的孩子  并给全部孩子加上class
            e.classList.add('hov');   //每一个文件夹加上选中外边框
            e.children[3].classList.add('checked');  //每一个文件夹加上选中状态
        });
    }else{
        //与上面同理  只要判断条件不成立   文件夹大盒子下面的孩子  全部就不为选中状态  
        divs.forEach((e)=>{  //遍历文件夹大盒子下面的孩子  并把选中状态删除
            e.classList.remove('hov');
            e.children[3].classList.remove('checked')
        });
    }

};



//1.创建reducer
const InitialState = {
    arr:[{id:0,txt:'呵呵',checked:false},{id:1,txt:'哈哈',checked:false}]
}; //要操作的数据
const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD":
            // let newArr = state.arr.concat();
            let newArr = [{
                id:+new Date(),
                txt:action.txt,
                checked:false
            },...state.arr];
            // console.log(action.txt);
            /*
                在触发action的时候返回值要为新的对象才会改变数据

                如果是数组那么[...state]
                如果是对象Object.assign({},state);

            */
            let newState = Object.assign({},state);
            newState.arr = newArr;
            return newState;
        case "CHANGE_CHECKED":
            
            //把arr从state中抽离出来  nnArr是一个新的数组
            // let nnArr = [...state.arr];

            // //再把action对应的id取出来
            // let obj = nnArr.find(e=>e.id==action.id);
            // //把抽离出来的对象地址改变
            // obj = Object.assign({},obj);
            // //在一个新的对象上操作
            // obj.checked = !obj.checked;
            // //再把nnArr的指定对象替换成新的对象
            // nnArr.splice(nnArr.findIndex(e=>e.id==action.id),1,obj);
            // //最后把最新的arr给state，顺便再把state的地址改了
            
            // return {arr:nnArr};


            //把state的地址全部改了，然后在新的对象下操作。
            let cloneState = JSON.parse(JSON.stringify(state));
            cloneState.arr.forEach(e=>{
                if(e.id==action.id){
                    e.checked = !e.checked;
                }
            });
            return cloneState;

        default:
            return state;
    }
}


export default reducer;


export function add(txt){
    return {
        type:"ADD",
        txt
    }
}
export function remove(id){
    return {
        type:"REMOVE",
        id
    }
}
export function changeChecked(id){
    return {
        type:"CHANGE_CHECKED",
        id
    }
}

//  default add;
//  default remove;
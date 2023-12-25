document.getElementById('btn-add-item').addEventListener('click',()=>{
    let itemInput = document.getElementById('input-item');
    let itemList = document.getElementById('item-list');
    if(itemInput.value != ""){
        let newItem = createItemList(itemInput.value);
        itemList.appendChild(newItem);
    }
    
})

let createItemList = (text)=>{
    const listItem = document.createElement("li");
    listItem.textContent = text;
    return listItem;
}
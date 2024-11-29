const optionAddContainer = document.querySelector('.option-add-container');
const [optionNameInput, optionPriceInput] = optionAddContainer.querySelectorAll('input');
const optionAddButton = optionAddContainer.querySelector('button');
const optionListContainer = document.querySelector('.option-list-container');

const itemImagesSectionOl = document.querySelector('.item-images-section ol')
const itemImageAddButton = document.getElementById('image-add-button');


// 옵션 삭제 버튼을 눌렀다면
function delete_option(optionButton){
    if(confirm('정말 삭제하시겠습니까?')){
        optionButton.parentElement.remove();
    }
}

// 옵션 추가 버튼을 눌렀다면
optionAddButton.onclick = () => {
    const optionName = optionNameInput.value;
    const optionPrice = +optionPriceInput.value;
    if(optionName.trim() === '' || optionPrice < 0){
        alert('옵션의 이름 혹은 가격을 정확히 설정해주세요');
        return;
    }
    optionListContainer.insertAdjacentHTML('beforeend',
        `<li>
            <input type="hidden" value="${optionName}/${optionPrice}">
            <div>
                <span>${optionName}</span>
                <span>(+${optionPrice}원)</span>
            </div>
            <button onclick="delete_option(this);">X</button>
        </li>`
    );
}

function delete_itemImage(imageDeleteButton){
    if(confirm('정말 삭제하시겠습니까?')){
        imageDeleteButton.parentElement.remove();
    }
}

// 이미지 추가 버튼을 눌렀다면
itemImageAddButton.onclick = () => {
    itemImagesSectionOl.insertAdjacentHTML('beforeend',
        `<li>
            <button type="button" onclick="delete_itemImage(this);"><i class="bi bi-dash"></i></button>
            <input type="file">
        </li>`
    );
}





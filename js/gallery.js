let isLoadedMore = false;
const loadMoreBtn = document.querySelector(".gallery__load-more");
const imgsWrapper = document.querySelector(".gallery__imgs-wrapper");

loadMoreBtn.addEventListener("click", () => {
    if (isLoadedMore) {
        removeLastImgs();
    } else {
        showLastImgs();
    }
    updateLoadMoreBtnText();
    isLoadedMore = !isLoadedMore;
});

function showLastImgs() {
    const hiddenImgs = document.querySelectorAll(".gallery .img-hidden");
    hiddenImgs.forEach(el => {
        el.classList.remove("img-hidden");
    })
}

function removeLastImgs() {
    const childrenArray = Array.from(imgsWrapper.children);
    const listOfRemoved = childrenArray.slice(-1 * (childrenArray.length - 8));
    listOfRemoved.forEach(el => {
        el.classList.add("img-hidden");
    });
}

function updateLoadMoreBtnText() {
    if (isLoadedMore) {
        loadMoreBtn.textContent = "load more work"
    } else {
        loadMoreBtn.textContent = "load less work"
    }
}

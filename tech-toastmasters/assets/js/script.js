let curPage = 0;
const totalPages = 18;
const book = document.getElementById('book');
const scene = document.getElementById('scene');
const nav = document.getElementById('navControls');

// Buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');
const bookCover = document.getElementById('bookCover');

// Event Listeners
bookCover.addEventListener('click', startExperience);
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);
closeBtn.addEventListener('click', closeBook);

function startExperience() {
    scene.classList.add('zoom-active');
    setTimeout(() => {
        book.classList.add('is-open');
        flipPage(0);
        nav.classList.add('visible');
        curPage = 1;
        updateButtons();
    }, 500);
}

function flipPage(num) {
    const el = document.getElementById(`p${num}`);
    if(el) el.classList.add('flipped');
}

function unflipPage(num) {
    const el = document.getElementById(`p${num}`);
    if(el) el.classList.remove('flipped');
}

function goNext() {
    if (curPage < totalPages) {
        flipPage(curPage);
        curPage++;
        updateButtons();
    }
}

function goPrev() {
    if (curPage > 1) {
        curPage--;
        unflipPage(curPage);
        updateButtons();
    } else if (curPage === 1) {
        closeBook();
    }
}

function updateButtons() {
    prevBtn.disabled = (curPage === 0);
    nextBtn.disabled = (curPage === totalPages);
}

function closeBook() {
    for(let i=0; i<=totalPages; i++) unflipPage(i);
    book.classList.remove('is-open');
    scene.classList.remove('zoom-active');
    nav.classList.remove('visible');
    curPage = 0;
}

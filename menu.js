const underConstruction = ['#about', '#voiceactors'];

function underConstructionMsg(event) {
    event.preventDefault();
    alert('This page is coming soon :)');
}

underConstruction.forEach(pageId => {
    const link = document.querySelector(`a[href="${pageId}"]`);
    if (link) {
        link.addEventListener('click', underConstructionMsg);
    }
});

document.getElementById('logo').addEventListener('click', () => {
    window.open('https://www.netflix.com/', '_blank');
})
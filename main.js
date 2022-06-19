document.addEventListener('mousemove', e => {
    let element_delete = document.getElementsByClassName("audio_row__action_delete");
    for (let i = 0; i < element_delete.length; i++) {
        if (element_delete[i].getAttribute("aria-label") === 'Удалить аудиозапись'){
            element_delete[i].click();
        }
    }
});
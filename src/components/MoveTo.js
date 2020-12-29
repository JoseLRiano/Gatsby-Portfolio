export const moveToWork = () => {
    let work = document.querySelector('#Work');
    work.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
export const moveToAbout = () => {
    let about = document.querySelector('#About');
    about.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
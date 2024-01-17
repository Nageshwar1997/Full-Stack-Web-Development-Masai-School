function chips() {
    console.log('sync: chips');
}
function pizza() {
    setTimeout(() => { console.log('async: pizza'); }, 0);
}
function main() {
    chips();
    pizza();
    chips();
    chips();
    chips();
}
main();

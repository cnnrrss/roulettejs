function formatToTitle(text='') {
    let title = text.toLowerCase().split('/')
    title = title[1] === 'framework' ? title[0] : title[1];
    
    return toTitleCase(title.replace(/-|_/g, ' '));
}

export { formatToTitle };



function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

// function toTitleCase(str) {
//     return str.replace(
//         /\w\S*/g,
//         function (txt) {
//             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//         }
//     );
// }
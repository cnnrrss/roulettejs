function formatToDescription(s = '') {
    let desc = s.substr(0, 97);
    if (desc.length === 97) {
        desc = s.substr(0, Math.min(s.length, desc.lastIndexOf(" "))) + "..."
    }
    return desc;
}

export { formatToDescription };
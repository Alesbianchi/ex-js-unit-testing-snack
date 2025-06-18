function getInitials(fullName) {
    return fullName
        .split(' ')
        .map(word => word[0].toUpperCase())
        .join('');
}

module.exports = { getInitials };

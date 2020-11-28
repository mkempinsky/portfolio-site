export const getProp = (path = [], data, defaultValue = null) =>
    path.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), data);

export const splitPathname = (pathname) => {
    if (typeof pathname !== 'string') {
        console.log('Path must be a string');
        return;
    }
    let path = `/${pathname}/`;
    path = path.split('/');
    path = path.filter((item) => item !== '');
    return path;
};

export const filterPaths = (paths) => {
    const filteredPaths = paths.reduce((acc, path) => {
        const firstCharacter = path.substring(0, 1);
        if (firstCharacter !== '?' && path.includes('?')) {
            acc.push(path.split('?')[0]);
        } else if (firstCharacter !== '#' && firstCharacter !== '?' && path !== 'page') {
            acc.push(path);
        }
        return acc;
    }, []);
    return filteredPaths;
};

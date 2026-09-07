async function test() {
    const res = await fetch('https://unsplash.com/s/photos/fashion-shirt');
    const html = await res.text();
    const regex = /images\.unsplash\.com\/(photo-[a-zA-Z0-9\-]+)/g;
    let match;
    const ids = new Set();
    while ((match = regex.exec(html)) !== null) {
        ids.add(match[1]);
    }
    console.log("Found IDs:", ids.size);
    console.log([...ids].slice(0, 5));
}
test();

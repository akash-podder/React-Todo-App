export default async function getAllPosts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')

    return result.json(); // "result.json()" Returns a "Promise" which Represents a "Stream of Data"... that means we have to Parse it "chunk by chunk"
}

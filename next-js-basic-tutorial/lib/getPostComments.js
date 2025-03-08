export default async function getPostComments(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return result.json(); // "result.json()" Returns a "Promise" which Represents a "Stream of Data"... that means we have to Parse it "chunk by chunk"
}

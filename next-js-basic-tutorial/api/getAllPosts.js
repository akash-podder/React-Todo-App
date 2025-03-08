export default async function getAllPosts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
            // By default "force-cache" takhe
            // cache: "no-store"
            next:{
                revalidate: 10, // after EVERY 10 Seconds Next JS will Fetch the Data & Server will Prebuild the HTML File
            }
        }
    )

    return result.json(); // "result.json()" Returns a "Promise" which Represents a "Stream of Data"... that means we have to Parse it "chunk by chunk"
}

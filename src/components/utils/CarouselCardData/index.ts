// Fetching data from api of contentfull for carousel

export async function getCarouselDataOfContentfullApi() {
    let manResponse = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.API_KEY}`, { cache: "no-store" });
    let responseToJson = await manResponse.json();
    console.log("Hi how are you : " , responseToJson)
    if (!manResponse.ok) {
        console.log("Failed to fetch...")
    }
    return responseToJson;
};
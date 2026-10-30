export interface Imgs {
    albumId: number;
    id:     number;
    title:  string;
    body:   string;
}

// 동기 비동기 함수 처리
const getPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    if(!response.ok) {
        throw new Error("Fetching failed") // raise === throw
    }
    const photos = await response.json()
    return photos 
}

const getPhoto = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    if(!response.ok) {
        throw new Error("Fetching failed") // raise === throw
    }
    const photo = await response.json()
    return photo
}


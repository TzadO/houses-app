export const imageToBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const createImgFromBase64 = base64 => {
    const img = document.createElement("img")
    img.src = base64;
    return img;
}


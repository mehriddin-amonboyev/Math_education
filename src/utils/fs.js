import fs from 'fs';

export const readFileCustom = (filepath) => {
    const data = fs.readFileSync(filepath);
    return data ? data : [];
}

export const writeFileCustom = (filepath, content) => {
    try {
        fs.writeFileSync(filepath, JSON.stringify(content,null,3))
        return "file yozildi brooo";
    } catch {
        console.log("file yozilmadi");
        return;
    }
}
import fs from 'fs';
import path from 'path';

// process.cwd luôn chứa đường dẫn của thư mục hiện hành của nextjs. Ngang hàng với node_modules
const booksDir = path.join(process.cwd(), 'static-file') ;

export const getFiles = () => {
    const fileNames = fs.readdirSync(booksDir); // Lấy ra các tên file trong thư mục
    const fileData = fileNames.map(name => {
        const fullPath = path.join(booksDir, name);
        const content = fs.readFileSync(fullPath, 'utf8');
        return {
            fileName: name.replace(/\.txt$/, ''),
            content
        }
    })
    return fileData;
}
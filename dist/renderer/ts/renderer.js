"use strict";
const documentFile = document.getElementById('file');
console.log(api.test);
function handleDocument(event) {
    const file = event.target.files[0];
    if (isExcelType(file)) {
        console.log(file);
        return file;
    }
    else {
        throw new Error("Le document doit être un fichier .xlsx");
    }
}
function isExcelType(file) {
    const filePath = file.path;
    const fileExtension = filePath.substring(filePath.length - 4);
    if (fileExtension == 'xlsx') {
        return true;
    }
    else {
        return false;
    }
}
documentFile === null || documentFile === void 0 ? void 0 : documentFile.addEventListener('change', handleDocument);
//# sourceMappingURL=renderer.js.map
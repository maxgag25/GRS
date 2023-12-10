"use strict";
// const documentFile = document.getElementById('file')!
document.addEventListener('DOMContentLoaded', () => {
    const documentFile = document.getElementById('file');
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
        if (fileExtension === 'xlsx') {
            return true;
        }
        else {
            return false;
        }
    }
    documentFile === null || documentFile === void 0 ? void 0 : documentFile.addEventListener('change', handleDocument);
    const context = document.getElementById('context');
    context.innerText = `contextBridge: ${window.api.test}`;
    console.log(window.api.test);
});
//# sourceMappingURL=renderer.js.map

const documentFile = document.getElementById('file')!

function handleDocument(event: Event) {
    const file = (event.target as HTMLInputElement).files[0]
    if(isExcelType(file)) {
        console.log(file)
        return file
    }
    else {
        throw new Error("Le document doit être un fichier .xlsx");
    }
}

function isExcelType(file: File): boolean {
    const filePath = file.path
    const fileExtension = filePath.substring(filePath.length - 4)
    
    if (fileExtension == 'xlsx') {
        return  true
    }
    else {
        return false
    }

}

documentFile?.addEventListener('change', handleDocument)
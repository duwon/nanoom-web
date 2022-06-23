const serverUrl = 'https://file.nanoom.org'
const uploadUrl = serverUrl + '/upload'
const downloadUrl = (dir: string, filename: string, newFilename:string) => { return serverUrl + '/download/' + dir + '/' + filename + '/' + newFilename }
const directUrl = (filename: string) => { return serverUrl + '/files/' + filename }

export { uploadUrl, downloadUrl, directUrl }

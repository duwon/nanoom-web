const serverUrl = 'https://file.nanoom.org'
const uploadUrl = serverUrl + '/file/upload'
const apiUrl = serverUrl
const downloadUrl = (dir: string, filename: string, newFilename:string) => { return serverUrl + '/file/download/' + dir + '/' + filename + '/' + newFilename }
const directUrl = (filename: string) => { return serverUrl + '/files/' + filename }

export { apiUrl, uploadUrl, downloadUrl, directUrl }

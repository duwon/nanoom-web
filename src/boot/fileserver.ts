const serverUrl = 'http://192.168.50.111:4444'
const uploadUrl = serverUrl + '/upload'
const downloadUrl = (dir: string, filename: string, newFilename:string) => { return serverUrl + '/download/' + dir + '/' + filename + '/' + newFilename }
const directUrl = (filename: string) => { return serverUrl + '/files/' + filename }

export { uploadUrl, downloadUrl, directUrl }

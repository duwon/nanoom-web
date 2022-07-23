import axios from 'axios'
import { Cookies } from 'quasar'

axios.defaults.headers.common['x-access-token'] = Cookies.get('x-access-token') || ''
const instance = axios.create({
  baseURL: 'https://file.nanoom.org'
})

/**
 * 게시글 목록 조회
 * @cetegory {*} category
 * @param {*} params
 */
function getBoardListAPI (category, params) {
  return instance.get('/bbs/list/' + category, params)
}

/**
 * 게시글 상세 조회
 * @param {*} params
 */
function getBoardDetailAPI (_id, params) {
  return instance.get('/bbs/detail/' + _id, params)
}

/**
 * 게시글 작성
 * @param {*} params
 */
function insertBoardAPI (category, params) {
  return instance.post('/bbs/insert/' + category, params)
}

/**
 * 게시글 수정
 * @param {*} params
 */
function updateBoardAPI (params) {
  return instance.post('/board/update', null, params)
}

/**
 * 게시글 삭제
 * @param {*} params
 */
function deleteBoardAPI (params) {
  return instance.post('/board/delete', null, params)
}

/**
 * 댓글 작성
 * @param {*} params
 */
function insertReplyAPI (params) {
  return instance.post('/board/reply/insert', null, params)
}

/**
 * 댓글 조회
 * @param {*} params
 */
function getReplyListAPI (params) {
  return instance.get('/board/reply/list', params)
}

/**
 * 댓글 수정
 * @param {*} params
 */
function updateReplyAPI (params) {
  return instance.post('/board/reply/update', null, params)
}

/**
 * 댓글 삭제
 * @param {*} params
 */
function deleteReplyAPI (params) {
  return instance.post('/board/reply/delete', null, params)
}

export {
  instance,
  getBoardListAPI,
  getBoardDetailAPI,
  insertBoardAPI,
  updateBoardAPI,
  deleteBoardAPI,
  insertReplyAPI,
  getReplyListAPI,
  updateReplyAPI,
  deleteReplyAPI
}
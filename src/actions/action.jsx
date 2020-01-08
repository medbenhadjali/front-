import {
  GET_ALL_ITEMS,
  ADD_NEW_ITEM,
  GET_ONE_ITEM,
  GET_ALL_ITEMS_FROM_ONE_USER,
  GET_ALL_ITEMS_FROM_CATEGORIE,
  TRIE_FROM_PRIX,
  EFFACER_UN_ARTICLE,
  EFFACER_USER,
  CREATE_USER,
} from '../actions/Types';

export default function getAllItems() {
  return { type: GET_ALL_ITEMS };
}
export function addNewItem(payload) {
  return { type: ADD_NEW_ITEM, payload };
}
export function getOneItem(payload, id) {
  return { type: GET_ONE_ITEM, payload, id };
}
export function getAllItemsFromOneUser(payload) {
  return { type: GET_ALL_ITEMS_FROM_ONE_USER, payload };
}
export function getAllItemsFromCategorie(payload) {
  return { type: GET_ALL_ITEMS_FROM_CATEGORIE, payload };
}
export function trieFromPrix(payload) {
  return { type: TRIE_FROM_PRIX, payload };
}
export function effacerUnArticle(payload) {
  return { type: EFFACER_UN_ARTICLE, payload };
}
export function effacerUser(payload) {
  return { type: EFFACER_USER, payload };
}
export function createUser(payload) {
  return { type: CREATE_USER, payload };
}

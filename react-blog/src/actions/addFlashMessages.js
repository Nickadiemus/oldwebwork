import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from './types';

//displays message
export function addFlashMessages(message) {
    return {type: ADD_FLASH_MESSAGE, message};
}

//deletes message
export function deleteFlashMessage(id) {
    return {type: DELETE_FLASH_MESSAGE, id}

}

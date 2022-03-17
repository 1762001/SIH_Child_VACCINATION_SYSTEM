import {galleryConstants} from '../_constants/gallery.constants'

const initialGallery ={
    isloading : false,
    gallery : {},
    error : '',
    allGalleries : [],
    selectedGallery : {}
}

export const galleryReducer =(state=initialGallery , action)=> {
    switch(action.type) {
        case galleryConstants.CREATE_GALLERY_REQUEST:
            return {
                ...state,
                isloading : true,
                gallery : {},
                error : ''
            }
        case galleryConstants.CREATE_GALLERY_SUCCESS:
            return {
                ...state,
                isloading : false,
                gallery : action.payload,
                error : ''
            }

        case galleryConstants.CREATE_GALLERY_FAIL:
            return {
                ...state,
                isloading : false,
                gallery : {},
                error : action.error
            }

        case galleryConstants.GET_GALLERY_REQUEST :
            return{
                ...state,
                isloading : true,
                allGalleries : [],
                error :''
            }
        case galleryConstants.GET_GALLERY_SUCCESS :
            return {
                ...state,
                isloading : false,
                allGalleries : action.payload,
                error : ''
            }
        case galleryConstants.GET_GALLERY_FAIL:
            return {
                ...state,
                isloading : false,
                allGalleries : [],
                error : action.error
            }
        case galleryConstants.SELECTED_GALLERY :
            return {
                ...state,
                selectedGallery : action.selectedGallery
            }

        case galleryConstants.RESET_SELECTED_GALLERY :
            return {
                ...state,
                selectedGallery : {}
            }

        case galleryConstants.UPDATE_GALLERY_REQUEST :
            return {
                ...state,
                isloading :true,
                error : ''
            }
        case galleryConstants.UPDATE_GALLERY_SUCCESS :
            return{
                ...state,
                isloading : false,
                selectedGallery : action.payload,
                error : ''
            }
        case galleryConstants.UPDATE_GALLERY_FAIL :
            return {
                ...state,
                isloading : false,
                error : action.error
            }
        case galleryConstants.DELETE_GALLERY_REQUEST :
            return {
                ...state,
                isloading : true,
                error : ''
            }
        case galleryConstants.DELETE_GALLERY_SUCCESS :
            return {
                ...state,
                isloading : false,
                error  :''
            }
        case galleryConstants.DELETE_GALLERY_FAIL :
            return {
                ...state,
                isloading: false,
                error : action.error
            }
        default :
        return state;
    }
}
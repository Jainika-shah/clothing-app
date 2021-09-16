import { createSelector } from "reselect";

// const CATEGORY_MAP = {
//     hats : 1,
//     sneakers : 2,
//     womens : 4,
//     jackets : 3,
//     mens : 5
// }

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShop],
    category => Object.keys(category.collections).map(key => category.collections[key])
)

export const selectCategory = urlParam => (
    createSelector(
        [selectShopItems],
        category => category[urlParam]
    )
)
import axios from "axios"

const TAP_RECIPE_REQUEST = "TAP_RECIPE_REQUEST"
const TAP_RECIPE_SUCCESS = "TAP_RECIPE_SUCCESS"
const TAP_RECIPE_FAILURE = "TAP_RECIPE_FAILURE"

const ms = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok")
    }, 600)
  })

export const tapRecipeRequest = () => {
  return async dispatch => {
    dispatch({ type: TAP_RECIPE_REQUEST })
    try {
      const res = await ms()
      if (res === "ok") {
        dispatch(tapRecipeSuccess(res))
      }
    } catch (error) {
      dispatch(tapRecipeFailure())
      throw new Error(error)
    }
  }
}

export const tapRecipeSuccess = payload => ({
  type: TAP_RECIPE_SUCCESS,
  payload
})

export const tapRecipeFailure = () => ({ type: TAP_RECIPE_FAILURE })
// exports.discoverRecipeTapped = 'sjsdnskjd'

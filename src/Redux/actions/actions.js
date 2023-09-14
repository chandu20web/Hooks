import { counterConstants } from "../constants/constants"

// const increase = () => {
// 	return {
// 		type: counterConstants.increase,
// 		payload: 2
// 	}
// }

// const decrease = () => {
// 	return {
// 		type: counterConstants.decrease,
// 		payload: 1
// 	}
// }

// const reset = () => {
// 	return {
// 		type: counterConstants.reset,
// 	}
// }

// export const counterActions = {
// 	increase, decrease, reset
// }

export const counterActions = (dispatch) => {
	return {
		increase: () => dispatch({
			type: counterConstants.increase,
			payload: 2
		}),
		decrease: () => dispatch({
			type: counterConstants.decrease,
			payload: 1
		}),
		reset: () => dispatch({
			type: counterConstants.reset,
		})
	}
}
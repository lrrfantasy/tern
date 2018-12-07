import { buildLayout } from '../utils/buildLayout'

const historise = (id, layouts) => ({ history }) => buildLayout(id, layouts, history)

export const Indonesia = historise('indonesia', [0])
export const UK = historise('uk', [0, [1, 2], [3, 4], 5, [6, 7], 8, 9, [10, 11], 12, 13])
export const Thailand = historise('thailand', [0, [1, 2]])
export const India = historise('india', [0, [1, 2], [3, 4]])
export const Japan = historise('japan', [0, [1, 2], 3, [4, 5], [6, 7]])
export const Australia = historise('australia', [0, [1, 2], 3, 4, [5, 6], 7, [8, 9]])
export const Denmark = historise('denmark', [0, 1, 2, 3, 4, 5, 6, [7, 8], 9, 10])
export const JapanTwo = historise('japan-two', [0, [1, 2], 3, [4, 5], 6, 7, [8, 9], [10, 11], 12, [13, 14], 15])
export const USA = historise('usa', [0, 1, [2, 3], [4, 5], 6, 7, [8, 9], 10, [11, 12]])
export const Mauritius = historise('mauritius', [0, 1, [2, 3], 4, [5, 6], 7, 8, 9])
export const SouthKorea = historise('south-korea', [0, [1, 2], 3, 4, 5])
export const JapanThree = historise('japan-three', [0, [1, 2], 3, [4, 5], 6, 7, [8, 9], 10, 11, 12])
export const Philippines = historise('philippines', [0, 1, 2, [3, 4], [5, 6], 7, [8, 9], 10, 11])
export const JapanFour = historise('japan-four', [0, [1, 2], 3, 4, [5, 6], 7, 8, [9, 10], 11, 12])
export const Kenya = historise('kenya', [0, 1, [2, 3], 4, [5, 6], 7, [8, 9], 10, [11, 12], 13, [14, 15], 16])
export const AustraliaTwo = historise('australia-two', [0, 1, 2, [3, 4], 5, 6, [7, 8]])

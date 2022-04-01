import { mockCharacterData, mockHouseData } from '../mockData'

const getHogwartsHouses = () => {
  return new Promise(function(resolve, reject) {
    resolve(mockHouseData);
  })
}

const getAllCharacters = () => {
  return new Promise(function(resolve, reject) {
    resolve(mockCharacterData);
  })
}

export { getHogwartsHouses, getAllCharacters }

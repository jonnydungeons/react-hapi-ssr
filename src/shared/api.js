import data from './data.json'

class Api {
  static load() {

    return new Promise((resolve) => {

      setTimeout(() => {

        return resolve(data)
      }, 0)
    })
  }
}

export { Api }

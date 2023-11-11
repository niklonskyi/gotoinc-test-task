import { defineStore } from 'pinia'

export const useRequestStore = defineStore('requests', {
  state: () => ({
    /** @type {{ id: number, cityFrom: string, cityTo: string, typeOfParcel: string, dateOfDispatch: Date, description: string}[]} */
    requests: [],
    nextId: 0
  }),
  actions: {
    addRequest(newRequest) {
      this.requests.push({ id: this.nextId++, ...newRequest })
    },
    deleteById(requestId) {
      this.requests.splice(requestId, 1)
      this.requests.forEach((element, index) => (element.id = index))
      this.nextId--
    },
    getRequestById(id) {
      return this.requests[id]
    }
  }
})

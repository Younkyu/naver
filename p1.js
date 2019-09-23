class MailService {
  constructor() {
    this.tempList = []
    this.list = []
  }

  operateOrder(order) {
    const input = order.split(' ')
    switch (input[0]) {
      case 'RECEIVE':
        this.tempList.push(input[1])
        break
      case 'DELETE':
        this.tempList.pop()
        break
      case 'SAVE':
        this.list = [...this.list, ...this.tempList]
        this.tempList = []
        break
    }
  }ct
}

function solution(record) {
  let answer
  let mailService = new MailService()
  record.forEach(order => {
    mailService.operateOrder(order)
  })
  answer = mailService.list
  return answer
}

console.log(solution(["RECEIVE abcd@naver.com", "RECEIVE zzkn@naver.com", "DELETE", "RECEIVE qwerty@naver.com", "SAVE", "RECEIVE QwerTY@naver.com"]))

import Base from '@/view/Base/index'

class Test1 extends Base {
  constructor (vm) {
    super(vm)
    this.color = 'red'
  }
  read () {
    console.log('hello ni hao')
    console.log(this)
    // console.log(vm)
  }
}
export default Test1

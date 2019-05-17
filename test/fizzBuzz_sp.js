 var should = chai.should()

 describe('Test fizzBuzz function', function () {
   it('Return Fizz if input number divided by 3.', function () {
     let testNum = 3
     let result = fizzBuzz(testNum)
     result.should.be.equal('Fizz')
     console.log(`[case1] input: ${testNum}, expect output : ${result}'`)
   })
   it('Return Buzz if input number divided by 5.', function () {
     let testNum = 5
     let result = fizzBuzz(testNum)
     result.should.be.equal('Buzz')
     console.log(`[case2] input: ${testNum}, expect output : ${result}'`)
   })
   it('Return FizzBuzz if input number divided by 15.', function () {
     let testNum = 15
     let result = fizzBuzz(testNum)
     result.should.be.equal('FizzBuzz')
     console.log(`[case3] input: ${testNum}, expect output : ${result}'`)
   })
   it('Return number if input number not divided by 3 & 15.', function () {
     let testNum = 16
     let result = fizzBuzz(testNum)
     result.should.be.equal(testNum)
     console.log(`[case4] input: ${testNum}, expect output : ${result}'`)
   })
 })
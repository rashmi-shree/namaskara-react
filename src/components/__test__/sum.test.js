import sum from "../sum";

test("sum function should calculate the sum of 2 functions",()=>{
    const result = sum(3,4)
    
    //Assertion
    expect(result).toBe(7);
})
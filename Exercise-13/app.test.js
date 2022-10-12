const app = require("./app")
const supertest = require("supertest")



const request = supertest(app)

test("get /", async()=>{
    const response= await request.get("/users")
    .expect(200)
    .expect("Content-Type", /application\/json/)
})
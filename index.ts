import { MongoClient, FindOptions, ObjectId, UpdateFilter } from 'mongodb'

const url = "mongodb://admin:123456@localhost:27017/"

const client = new MongoClient(url)

async function run() {
    try {
        await client.connect()
        const db = client.db('hello')
        const res = await db.command({ ping: 1 })
        console.log('connected', res)

        const userCollection = db.collection('user')
        // 数据的插入
        // const result = await userCollection.insertOne({ name: 'AD', age: 30 })
        // console.log(result)

        // const result2 = await userCollection.insertMany([
        //     { name: '张三', age: 30 },
        //     { name: '李四', age: 30 },
        // ])
        // console.log(result2)

        // 数据查找
        // const result = await userCollection.findOne({ name: 'AD' })
        // console.log(result)

        // const cursor = userCollection.find()
        // 1. 使用 forEach
        // await cursor.forEach(doc => console.log(doc))
        // 2. 使用 toArray()
        // const result2 = await userCollection.find().toArray()
        // console.log('the result array', result2)

        // 1. 比较操作符
        // const results = await userCollection.find({ age: { $gt: 30 } }).toArray()
        // console.log(results)

        // 2. 逻辑操作符
        // const results = await userCollection.find({ age: { $gt: 30 }, name: '李四' }).toArray()
        // console.log(results)
        // const condition = {
        //     $or : [
        //         { age: { $gt: 30 } },
        //         { name: 'AD' }
        //     ]
        // }
        // const results = await userCollection.find(condition).toArray()
        // console.log(results)

        // 3. element 
        // const results = await userCollection.find({hobby: { $exists: true}}).toArray()
        // const results = await userCollection.find({age: { $type: 'number'}}).toArray()
        // console.log('the result array', results)

        // 对结果的处理
        // const options: FindOptions = {
        //     // limit: 2
        //     projection: { _id: 0 } // 隐藏字段
        // }
        // const results = await userCollection.find({ age: { $type: 'number' } }, options).toArray()
        // console.log('the result array', results)


        // 更新文档
        // replace - put
        // update - patch
        // const replaceDoc = await userCollection.replaceOne({ name: 'AD' }, { name: 'BD', age: 32 })
        // console.log(replaceDoc)

        // const updateFilter: UpdateFilter<{ name: string, age: number }> = {
        //     $set: {
        //         name: 'Jim'
        //     },
        //     $inc: {
        //         age: 1
        //     }
        // }
        // const updateDoc = await userCollection.updateOne({ _id: new ObjectId('62a60a905cc80528e8ec73c5') }, updateFilter)
        // console.log(updateDoc)


        // const updateFilter: UpdateFilter<{ name: string, age: number, hobbies: string[] }> = {
        //     $push: {
        //         hobbies: 'golf'
        //     } 
        // }
        // const updateDoc = await userCollection.updateOne({ _id: new ObjectId('62a60a905cc80528e8ec73c5') }, updateFilter)
        // console.log(updateDoc)

        // search by array element
        // const result = await userCollection.findOne({
        //     hobbies: ['music', 'golf', 'golf']
        // })
        // console.log(result)

        // update array item by search result


        // 索引
        // let testArr = []
        // for(let i =1; i<= 50000; i++){
        //     testArr.push({type: 'test', name: `test${i}`, age: i})
        // }
        // const result = await userCollection.insertMany(testArr)
        // console.log(result)

        // const result = await userCollection.find({name: 'test50000'}).explain()
        // console.log(result)

        // 使用索引查询，explain -- 查询明细
        // const result = await userCollection.find({_id: new ObjectId('62a73f13eb49400893e5783c')}).explain()
        // console.log(result)

        // 索引的管理
        // 创建索引 
        // const result = await userCollection.createIndex({name: 1}) // 1 正序的索引，基于 name
        // console.log(result)

        // 查看索引
        // const indexResult = await userCollection.listIndexes().toArray()
        // console.log(indexResult)

        // 删除索引
        // const dropResult = await userCollection.dropIndex('name_1')
        // console.log(dropResult)
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }
}

run()
import { connect, Schema, model, disconnect } from 'mongoose'
async function main() {
    try {
        await connect('mongodb://admin:123456@localhost:27017/hello?authSource=admin')
        console.log('[egg-mongoose] connected successfully')

        // 每个Schema 映射一个 MongoDB的 collection，用来定义集合的数据
        // Schema 方式更好的约束集合数据类型，有助于数据的统一性
        // const ProductSchema = new Schema({
        //     name: { type: String },
        //     price: { type: Number }
        // })

        // 创建Model -- 有model 就可以创建对应数据，每个实例化的model 成为 document，对应数据库中的一条数据
        //const ProductModel = model('Product', ProductSchema)


        // 创建数据 -- 静态方法方式
        // const result = await ProductModel.create({
        //     name: 'cellPhone',
        //     price: 1300
        // })
        // console.log(result)

        // 创建数据 -- 构造函数方式
        // const ipad = new ProductModel({
        //     name: 'ipad',
        //     price: 4200
        // })
        // await ipad.save()


        const UserSchema = new Schema({
            name: { type: String },
            age: { type: Number },
            hobbies: { type: Array },
            team: { type: Schema.Types.ObjectId, ref: 'Team' }
        }, { collection: 'user' })
        const UserModel = model('User', UserSchema)

        const result = await UserModel.find({ age: { $gt: 30 } }).exec()
        console.log(result)

    } catch (error) {
        console.log(error)
    } finally {
        await disconnect() // 关闭链接
    }
}

main()
import Products from "../models/products"

const datas: any = ["cin", "phone", "email", "fullname", "gender", "adress"]
const createAdmin = async (admin: any) => {
  await Products.save(admin)
}

const deleteAdmin = async (target: any) => {}

const getMe = async (_id: any) => {
  return await Products.find({
    select: datas,
    where: {
      id: _id,
    },
  })
}
export { createAdmin, getMe, deleteAdmin }

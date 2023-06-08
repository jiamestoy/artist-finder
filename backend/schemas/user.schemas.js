import yup from 'yup'

const user = yup.object({
    username: yup.string().trim().required().min(4),
    email: yup.string().email().trim().required(),
    password: yup.string().required().min(8),
    role: yup.string().required(),
})

export {
    user
}
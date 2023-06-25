import yup from 'yup'

const service = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    min_price: yup.number().required().positive(),
    categories: yup.array().of(yup.string()).required(),
    artist_id: yup.string().required(),
})

export {
    service,
}
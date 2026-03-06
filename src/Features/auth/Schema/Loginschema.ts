import {z} from 'zod'

export const LoginSchema=z.object({
    email:z.string().nonempty('email is required').pipe(z.email('email is invalid')),
    password:z.string().nonempty('password is required'),
    rememberme:z.boolean()
})
export type loginvaluestype=z.infer<typeof LoginSchema>
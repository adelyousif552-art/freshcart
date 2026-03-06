import z, { infer } from "zod";
import { de } from "zod/v4/locales";

export const checkoutschema=z.object({
    details:z.string().nonempty('address is required').min(10,{message:'details must be at least 10 characters'}),
    phone:z.string().nonempty('phone is required').regex(/^01[0125][0-9]{8}$/,'Invalid Egyptian phone number'),
    city:z.string().nonempty('city is required').min(3,{message:'city must be at least 3 characters'})
})
export type shippingaddresstype=z.infer<typeof checkoutschema>
import z from 'zod';

export const zodSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  lastName: z.string().nonempty('Last name is required'),
  birthday: z.date().max(new Date(), 'Birthday must be in the past'),
  gender: z.string().nonempty('Gender is required'),
  username: z.string().max(10, 'max 10 characters').nonempty('Username is required'),
  email: z.email('Invalid format'),
  phoneCode: z.number('required').max(9999, 'code should have max 4 numbers'),
  phoneNumber: z.number('required').max(9999999999, 'Number should have max 10 digits'),
});

export namespace ProfileForm {
  export type FormValues = z.infer<typeof zodSchema>;

  export enum Fields {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    BIRTHDAY = 'birthday',
    GENDER = 'gender',
    USERNAME = 'username',
    EMAIL = 'email',
    PHONE_CODE = 'phoneCode',
    PHONE_NUMBER = 'phoneNumber',
  }

  export interface Step {
    title: string;
    key: string;
    id: number;
    fields: Fields[];
    hasErrors: boolean;
  }
}

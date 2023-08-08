import * as yup from 'yup';

export const securitySettingValidationSchema = yup.object().shape({
  password_policy: yup.string().required(),
  mfa: yup.boolean().required(),
  user_id: yup.string().nullable(),
});

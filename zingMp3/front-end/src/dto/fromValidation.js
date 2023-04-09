import * as Yup from 'yup'

Yup.setLocale({
    mixed: {
        required: 'Trường này không được bỏ trống'
    },
    string: {
        email: 'Trường này bắt buộc là email'
    }
})

const FormValidation = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(4).max(12),
    file: Yup.string().required()
});

export default FormValidation;
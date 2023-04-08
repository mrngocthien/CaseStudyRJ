import * as Yup from 'yup'

Yup.setLocale({
    mixed: {
        required: 'Trường này không được bỏ trống'
    },
    string: {
        email: 'Trường này bắt buộc là email'
    }
})

const signinFormValidation = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(4).max(12)
});

export default signinFormValidation;
// Input Validators
const Validators = {
  required: v => !!v && v.trim() !== '',
  rollId:   v => /^[A-Z0-9]{6,12}$/i.test(v),
  name:     v => v && v.trim().split(' ').length >= 1 && v.length >= 2,
  validate(fields) {
    const errors = {};
    if (!this.required(fields.name))   errors.name = 'Name is required';
    if (!this.required(fields.id))     errors.id   = 'Roll ID is required';
    if (!this.required(fields.dept))   errors.dept = 'Department is required';
    return { valid: Object.keys(errors).length === 0, errors };
  }
};

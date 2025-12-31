// Contact page utilities and logic
export const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

export const handleFormChange = (e, formData, setFormData) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

export const handleFormSubmit = (e, formData, setFormData) => {
  e.preventDefault()
  // Here you would typically send the form data to your backend
  alert('Thank you for your message! We will get back to you soon.')
  setFormData(initialFormData)
}

export const contactInfo = {
  email: 'info@wordpressdevelopers.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Developer Street',
    city: 'Tech City, TC 12345'
  }
}

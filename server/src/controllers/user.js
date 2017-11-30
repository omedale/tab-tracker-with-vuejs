export default {
  register: (req, res) => {
    res.json({
      messages: 'User registered',
      userEmail: req.body.email,
      password: req.body.password,
    });
  },
};
